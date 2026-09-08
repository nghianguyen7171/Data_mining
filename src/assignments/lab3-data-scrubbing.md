---
title: "Lab 3 — Data Scrubbing in Orange"
due_week: 3
due: "End of Week 3"
weight: "Part of 10% Attendance & Participation"
clos: "1, 2, 5, 6"
summary: "Load a messy e-commerce customer file in Orange, apply the four pillars of data scrubbing plus outlier handling, normalisation, and simple feature engineering, then export a model-ready dataset with a short business memo."
---

## Goal

By the end of this lab you will apply the **Data Understanding** and **Data Preparation** ideas from Week 3 in a full Orange workflow. You will inspect a dirty customer dataset, clean it with the four scrubbing pillars (inconsistent values, missing values, data reduction, attribute reduction), handle outliers, normalise scales, create simple derived features, and export a **model-ready** file for churn analysis.

**This lab is Orange only (drag-and-drop). No coding required.**

**Business context:** you are an analyst at an **e-commerce** company. Marketing wants to study which customers are at risk of **churn**, but the customer extract you received is not yet analysis-ready. Your job is to make it trustworthy before any modelling.

**Prepare**
1. Open **Orange Data Mining**.
2. Download the practice file: [customers_dirty.csv](../assets/materials/customers_dirty.csv).

> **Important:** do **not** look for an answer key online or share cleaned files before you finish. The point of the lab is to **discover** quality issues yourself with Orange widgets.

---

## What to submit

Submit **all** of the following before the end of Week 3 (Drive / LMS link announced in class):

1. Orange workflow file `lab3_YourName.ows`
2. Cleaned dataset `customers_clean_YourName.csv`
3. Written answers to the Part A / B / C questions below
4. A **mini-memo** (5–6 sentences) as specified in Part D
5. One **Box Plot** screenshot for `MonthlySpend` that shows how you identified extreme values

---

## Dataset overview

File: **`customers_dirty.csv`**

Each row is one customer. Column meanings:

| Column | Meaning |
|--------|---------|
| `CustomerID` | Customer identifier |
| `Age` | Age in years |
| `Gender` | Gender label |
| `City` | City |
| `Tenure_Months` | Months as a customer |
| `MonthlySpend` | Average monthly spend |
| `SatisfactionLevel` | Satisfaction category (e.g. Low / Medium / High) |
| `IsActive` | Whether the account is active |
| `SignupDate` | Signup date |
| `Churn` | Churned? (`Yes` / `No`) — **target** for later modelling |

Treat this file as a **real dirty extract**: expect missing cells, inconsistent labels, odd values, and columns that may not belong in the modelling feature set. Your first job is to **profile** it.

---

## Lab overview

| Part | Content | Lecture map |
|------|---------|-------------|
| A | Load & profile the data | Data Understanding |
| B | Four scrubbing pillars | Data Scrubbing |
| C | Outliers, normalisation, feature engineering | Supplemental prep |
| D | Export clean data + mini-memo | Model-ready dataset |

---

## Part A — Load & profile (15′)

### A1. Load the file — [Follow along]

1. Open Orange → **New** blank workflow.
2. Drag a **File** widget (Data) → double-click → **Browse** → select `customers_dirty.csv`.
3. In the File widget table, set **roles**:
   - `Churn` → **target**
   - `CustomerID` → **meta** (identifier; not used as a predictive feature)
   - remaining columns → **feature** (unless you later move some to ignored)

📷 **Screenshot required:** File widget showing types/roles with `Churn` = target and `CustomerID` = meta.

### A2. Inspect the table — [Follow along]

1. Add **Data Table**, connect **File → Data Table**, open it.
2. Scroll the rows. Note blanks, surprising codes, and anything that looks wrong for a customer record.

### A3. Statistics & distributions — [Follow along]

1. Add **Feature Statistics**, connect from **File**.
2. Read the **Missing** column carefully — which attributes are incomplete?
3. Add **Distributions**, connect from **File**. Explore categorical columns (start with `Gender` and `SatisfactionLevel`). Look for labels that should mean the same thing but are written differently.

### ✍️ Questions — Part A

**A1.** From **Feature Statistics**, report the missing count for:  
`Age` = ______ · `Gender` = ______ · `MonthlySpend` = ______ · `SatisfactionLevel` = ______

**A2.** List **three** invalid / suspicious values you found and the column each belongs to:  
① ______  ② ______  ③ ______

**A3.** Which column is an **identifier** that should not be used as a predictive feature? ______

**A4.** How many **rows** and **columns** does the file have? ______

---

## Part B — Four pillars of data scrubbing (40′)

Work in this order: **fix inconsistent labels first**, then impute, then reduce rows, then reduce attributes. That order matches the Week 3 lecture logic.

### B1. Inconsistent values — [Follow along]

> Standardise labels **before** imputation so “the same category” is not split across spelling variants.

1. Add **Edit Domain** (Transform), connect **File → Edit Domain**.
2. Open it and inspect categorical columns that looked inconsistent in Distributions (`Gender`, `SatisfactionLevel`, `IsActive`, and any other you noticed).
3. Merge / rename values so each concept has **one canonical label**. Document every mapping you apply (from → to).
4. For clearly invalid codes in a Yes/No-style field, choose a defensible rule using the lecture decision guidance (mode vs leave missing vs other). Write your rule in the answers.
5. Click **Apply**. Re-check with **Data Table** and **Distributions** after Edit Domain.

📷 **Screenshot required:** Edit Domain while you standardise at least one column.

### B2. Missing values — [Follow along]

1. Add **Impute** (Transform), connect **Edit Domain → Impute**.
2. Set a default method such as **Average / Most frequent** (mean for numeric, most frequent for categorical), **or** choose column-specific methods when that is safer.
3. Open **Data Table** after Impute and confirm blanks are gone (or intentionally retained only if you justified that).

> **Tip:** a mean can be pulled by extreme numeric values. If a numeric column looks skewed in a Box Plot, consider **Median** for that column, or handle extremes first (Part C).

### B3. Data reduction (rows) — [Follow along]

1. Add **Select Rows** (Transform), connect **Impute → Select Rows**.
2. Keep only rows that are **business-reasonable** for this customer table (especially for `Age`). Use conditions such as *is between* / comparisons — choose thresholds you can defend.
3. Re-open **Data Table** and record how many rows remain.
4. While browsing the table (sort by key columns), check whether any rows appear to be **exact duplicates**. Note what you found; in practice duplicates should be removed before modelling.

📷 **Screenshot required:** Select Rows with your filter condition(s) visible.

*(Optional intro)* **Data Sampler** can take a random subset for quick experiments — not required for submission.

### B4. Attribute reduction — [Follow along]

1. Add **Select Columns** (Transform), connect **Select Rows → Select Columns**.
2. Move identifier column(s) that should not train the model into **Ignored** (or keep them as meta only).
3. Keep `Churn` as **Target**; keep useful predictors as **Features**.

> **Golden rule from lecture:** drop a column from the **analysis flow**, do not delete it from the **source file**. Noise today may be signal tomorrow.

### ✍️ Questions — Part B

**B1.** After **Edit Domain**, how many distinct values remain in `Gender`? List them: ______

**B2.** What did you do with invalid codes in `IsActive`? **Why** that choice? ______

**B3.** After **Impute**, are any required analysis fields still blank? For a numeric column you imputed, roughly what filled value was used (report the method and approximate value)? ______

**B4.** After **Select Rows**, how many rows remain, and how many were removed? ______

**B5.** Which column(s) did you ignore for modelling, and **why** must you not delete them from the original source file? ______

---

## Part C — Outliers, normalisation, feature engineering (25′)

### C1. Detect & treat outliers — [Follow along]

1. Add **Box Plot** (Visualize) on your cleaned flow (after Impute and/or Select Columns).
2. Inspect numeric fields, especially **`MonthlySpend`**. Identify extreme points far from the box.
3. Choose **one** treatment and justify it with business reasoning:
   - **Remove** the row(s) with Select Rows (set a spend threshold you can defend), **or**
   - **Treat as error / missing** and impute with a robust method (e.g. median).
4. Re-check the Box Plot after treatment.

📷 **Screenshot required:** Box Plot for `MonthlySpend` showing the extreme value(s) you acted on.

> Outliers can be data-entry errors **or** VIP customers. Your decision must be explained in business language.

### C2. Normalisation — [Follow along]

1. Add **Preprocess** (Transform).
2. Add **Normalize Features** → interval **[0, 1]** (or another method you can explain).
3. Confirm that numeric features such as `Age`, `MonthlySpend`, and `Tenure_Months` now share a comparable scale so one column does not dominate distance-based methods.

### C3. Feature engineering (intro) — [Follow along]

**Binning — Discretize**
1. Add **Discretize** (Transform).
2. Discretize `Age` into a small number of meaningful groups (e.g. young / mid / older). Record how many bins you created and their labels/ranges.

**Encoding — Continuize**
1. Add **Continuize** (Transform).
2. Encode categorical predictors so algorithms that need numbers can use them. Remember: for unordered (nominal) categories, encoding must not invent a false order.

> Splitting `SignupDate` into month/quarter is optional advanced practice (e.g. Feature Constructor). Introduce the idea only; pandas labs will go deeper later.

### ✍️ Questions — Part C

**C1.** What extreme `MonthlySpend` value(s) did the Box Plot highlight? ______

**C2.** Did you **remove** or **replace** them? Give a **business reason**: ______

**C3.** After normalisation, what value range do `Age` and `MonthlySpend` fall into? ______

**C4.** How many Age groups did **Discretize** create? Name them: ______

**C5.** Why must categorical variables often be **encoded** before modelling? ______

---

## Part D — Export & mini-memo (10′)

1. Add **Save Data** (Data) at the end of the workflow → export `customers_clean_YourName.csv`.
2. **File → Save As** → `lab3_YourName.ows`.

### Target workflow (guide)

```
File → Edit Domain → Impute → Select Rows → Select Columns
        → Preprocess (Normalize) → Discretize → Continuize → Save Data
  │
  ├→ Data Table
  ├→ Feature Statistics / Distributions
  └→ Box Plot
```

📷 **Screenshot required (optional but recommended):** full Orange canvas with widgets connected.

### Mini-memo (5–6 sentences)

Write in your own words. Cover:

1. What quality problems you found (without inventing issues you did not observe).
2. The main cleaning steps you applied (widgets + methods).
3. Your outlier decision and business justification.
4. A one-line statement that the file is now ready (or not yet ready) for churn modelling — and what would still be risky.

---

## Optional stretch

1. Compare the mean of `MonthlySpend` **before vs after** your outlier treatment. How large is the change, and what does that imply?
2. Impute a skewed numeric column with **Mean** vs **Median** and explain which is safer here.
3. In **Distributions**, colour by `Churn`. Which age band or satisfaction level looks riskier? (Preview of later analytical weeks.)

---

## Troubleshooting

| Problem | What to try |
|---------|-------------|
| `Age` loaded as text | In **File**, set the column type to Numeric and reload |
| Edit Domain does not list odd labels | Confirm the column is categorical; re-check Distributions |
| Impute leaves strange codes | Standardise / repair labels in **Edit Domain** first |
| Means look absurd | Extreme values may dominate — treat outliers or use **Median** |
| Select Rows removes too much | Re-check operators (`is between`, ≥, ≤) and thresholds |

---

## References

- Week 3 slides: `3.Data_Understanding.pdf`
- North, M. *Data Mining for the Masses* — Chapter 3 (Data Preparation)
- Orange widget catalogue: https://orangedatamining.com/widget-catalog
- Practice data: [customers_dirty.csv](../assets/materials/customers_dirty.csv)
