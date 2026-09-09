---
title: "Lab 2 — Python Basics & Minimal NumPy"
due_week: 2
due: "End of Week 2"
weight: "Part of 10% Attendance & Participation"
clos: "2, 5, 6"
summary: "Practice Python variables, lists, dicts, indexing & slicing, and minimal NumPy in a notebook; upload your .ipynb to the course Drive folder."
---

## Goal

By the end of this lab you will practise the Python concepts from the Week 2 session — variables, data structures, and especially **indexing & slicing** — then apply three core NumPy ideas (arrays, vectorization, `np.nan`). Everything runs in pure Python / NumPy on list and array data (no CSV yet).

**Expected effort:** plan **about 2–2.5 hours** (in-class follow-along + take-home completion). The **[Try yourself]** blocks and the mini-case are longer on purpose — they combine several skills in one business scenario.

**How to work:** each part has **[Follow along]** cells (type and run with the instructor) and **[Try yourself]** exercises. Type by hand — do not copy-paste. Typing helps you remember.

**Prepare:** open a new Colab notebook **or** a VS Code `.ipynb` file. Name it `lab2_YourName.ipynb` (replace `YourName` with your full name, no spaces — e.g. `lab2_NguyenVanAn.ipynb`).

---

## What to submit

Upload **one notebook file** to the course Google Drive folder before the end of Week 2:

**[Submission folder (Google Drive)](https://drive.google.com/drive/folders/1f0WA6zKYyynvVFG2nJZ09SsOSyxzXPpB?usp=sharing)**

Your notebook must include:

1. All **[Follow along]** cells from Parts A–D, executed successfully.
2. Your own solutions to **[Try yourself]** sets **B, C, and D** — including every **Challenge** item (write them yourself — do not paste answer keys).
3. The **Integrated business mini-case** (all tasks completed in your notebook).
4. A final cell with **three short answers** (2–3 sentences each):
   - *How is slicing different from indexing?*
   - *What is `np.nan` used for?*
   - *In one sentence: why does filling a missing revenue day with the mean change the “best profit day” result in the mini-case?*

### How to export and upload your `.ipynb`

**From Google Colab**
1. **File → Download → Download .ipynb**
2. Open the [submission folder](https://drive.google.com/drive/folders/1f0WA6zKYyynvVFG2nJZ09SsOSyxzXPpB?usp=sharing) (sign in with your Google account).
3. Click **New → File upload** (or drag the file into the folder).
4. Confirm the filename is `lab2_YourName.ipynb`.

**From VS Code**
1. Save the notebook (`lab2_YourName.ipynb`) on your computer.
2. Open the same [submission folder](https://drive.google.com/drive/folders/1f0WA6zKYyynvVFG2nJZ09SsOSyxzXPpB?usp=sharing).
3. Upload the `.ipynb` file as above.

> Only `.ipynb` files are accepted. Do not submit screenshots of code or `.py` files unless the instructor says otherwise.

---

## Lab overview

| Part | Content | Time (guide) |
|------|---------|-------------:|
| A | Start your environment | 10′ |
| B | Foundations: variables, list, dict (+ challenge) | 30′ |
| C | **Indexing & slicing (focus)** (+ challenge) | 40′ |
| D | Minimal NumPy (+ missing-data challenge) | 30′ |
| E | Integrated business mini-case (required) | 30′ |
| — | Reflection & submit | 10′ |

---

## Part A — Start your environment (10′)

Choose **one** environment below and open a new notebook.

### Option 1 — Visual Studio Code

1. Open **VS Code**.
2. **File → New File** → save as `lab2_YourName.ipynb`. VS Code opens Jupyter notebook mode.
   - If asked for a **Kernel**, select the Python you installed in Lab 0.
3. Click **+ Code**, paste the check cell below, run with ▶ or `Shift + Enter`.
4. If NumPy is missing: open Terminal (`` Ctrl+` ``) and run `pip install numpy` (or `pip3 install numpy` on macOS).

### Option 2 — Google Colab

1. Go to [colab.research.google.com](https://colab.research.google.com) (sign in with Google).
2. **File → New notebook**.
3. Rename the notebook to `lab2_YourName` (click the title at the top left).
4. Run the check cell below. Colab already includes NumPy.

### Check cell (both environments)

```python
print("Lab 2 ready!")
import numpy as np
print("NumPy version:", np.__version__)
```

If you see the message and a version number → go to Part B.

> **Tip:** in VS Code and Colab, each **cell** runs on its own; the last expression in a cell displays its result without `print()`.

---

## Part B — Foundations: variables, list, dict (30′)

### B1. Variables & types — [Follow along]

```python
price = 25000          # int
tax_rate = 0.1         # float
item_name = "Milk tea" # str
in_stock = True        # bool

print(type(price), type(tax_rate), type(item_name), type(in_stock))
```

Price after tax:

```python
price_after_tax = price * (1 + tax_rate)
print(price_after_tax)   # 27500.0
```

### B2. List — [Follow along]

```python
revenue = [120, 150, 90, 200, 175]   # daily revenue, 5 days (million VND)
len(revenue)           # 5
revenue.append(210)    # add day 6
sum(revenue)           # total
max(revenue)           # best day
```

### B3. Dict — [Follow along]

```python
product = {'name': 'Latte', 'price': 45000, 'stock': 30}
product['price']              # 45000
product['discount'] = 0.15    # add a new key–value pair
print(product)
```

### B4. None — [Follow along]

```python
rating = None    # no rating yet
print(rating is None)   # True
```

> Remember: empty cells in real datasets often show up as `None` or `np.nan` — we handle missing values in Weeks 3–4.

### ✅ [Try yourself] — Exercises B

**Scenario:** you manage data for a café.

**Core (1–6)**

1. Create `cost = [30, 45, 25, 60]` (million VND, 4 months) and compute the sum and the maximum.
2. Create `customer = {'name': 'An', 'age': 28}`, then add `'city'` with value `'Hanoi'`.
3. Create `promo_code = None` (customer has not entered a code) and check whether it is `None`.
4. Menu: `menu = {'Latte': 45000, 'Espresso': 35000, 'Mocha': 50000}`. Print the price of `'Mocha'`, then add `'Tea'` at `30000`.
5. Today’s orders: `orders = ['Latte', 'Mocha', 'Latte', 'Tea', 'Latte']`. Count total cups sold, and how many `'Latte'` (use `.count()`).
6. Using `menu` from (4), compute **total revenue** if each item in `orders` is sold once (hint: add `menu[item]` for each item — a `for` loop is fine).

**Challenge (7–9) — list of dictionaries**

Real business data often looks like a **list of records**, each record a dict:

```python
inventory = [
    {'sku': 'L01', 'name': 'Latte',    'price': 45000, 'stock': 12},
    {'sku': 'E02', 'name': 'Espresso', 'price': 35000, 'stock': 3},
    {'sku': 'M03', 'name': 'Mocha',    'price': 50000, 'stock': 0},
    {'sku': 'T04', 'name': 'Tea',      'price': 30000, 'stock': 8},
]
```

7. Print the **name** of every item whose `stock` is **strictly less than 5** (low stock). Collect the names in a new list `low_stock`.
8. Compute the **inventory value** = sum of `price * stock` over all items. Store it in `inventory_value`.
9. A delivery arrives: add **10** units to the stock of `'Espresso'` (find that dict in the list and update it). Then recompute `inventory_value`.

::: solution
```python
# Core
cost = [30, 45, 25, 60]
sum(cost)        # 160
max(cost)        # 60

customer = {'name': 'An', 'age': 28}
customer['city'] = 'Hanoi'

promo_code = None
print(promo_code is None)   # True

menu = {'Latte': 45000, 'Espresso': 35000, 'Mocha': 50000}
print(menu['Mocha'])        # 50000
menu['Tea'] = 30000

orders = ['Latte', 'Mocha', 'Latte', 'Tea', 'Latte']
len(orders)                 # 5
orders.count('Latte')       # 3

total = 0
for item in orders:
    total += menu[item]
print(total)                # 215000

# Challenge
inventory = [
    {'sku': 'L01', 'name': 'Latte',    'price': 45000, 'stock': 12},
    {'sku': 'E02', 'name': 'Espresso', 'price': 35000, 'stock': 3},
    {'sku': 'M03', 'name': 'Mocha',    'price': 50000, 'stock': 0},
    {'sku': 'T04', 'name': 'Tea',      'price': 30000, 'stock': 8},
]

low_stock = []
for item in inventory:
    if item['stock'] < 5:
        low_stock.append(item['name'])
print(low_stock)            # ['Espresso', 'Mocha']

inventory_value = 0
for item in inventory:
    inventory_value += item['price'] * item['stock']
print(inventory_value)      # 885000

for item in inventory:
    if item['name'] == 'Espresso':
        item['stock'] += 10
        break

inventory_value = 0
for item in inventory:
    inventory_value += item['price'] * item['stock']
print(inventory_value)      # 885000 + 35000*10 = 1235000
```
:::

---

## Part C — Indexing & slicing (40′) — FOCUS

This is the most important skill in today’s lab. Master it and reading pandas `loc` / `iloc` in Week 4 becomes much easier.

### C1. Indexing — one element — [Follow along]

Remember: **indices start at 0.**

```python
drinks = ['Espresso', 'Latte', 'Cappuccino', 'Mocha', 'Americano']

drinks[0]     # 'Espresso'    — first
drinks[2]     # 'Cappuccino'
drinks[-1]    # 'Americano'   — last (negative index)
drinks[-2]    # 'Mocha'
```

Indexing also works on strings:

```python
code = "SP2025"
code[0]     # 'S'
code[-1]    # '5'
```

### C2. Slicing — a segment — [Follow along]

Syntax **`x[start:stop:step]`** — take from `start` up to **but not including** `stop`.

```python
prices = [20, 35, 45, 60, 80, 95]

prices[1:4]     # [35, 45, 60]   — positions 1,2,3 (NOT 4)
prices[:3]      # [20, 35, 45]   — from start up to before 3
prices[3:]      # [60, 80, 95]   — from 3 to the end
prices[::2]     # [20, 45, 80]   — every 2nd element
prices[::-1]    # [95, 80, 60, 45, 35, 20]  — reverse
```

> **Common trap:** `prices[1:4]` returns **3** elements, not 4 — because `stop` is exclusive. Watch for this.

### C3. Small application — [Follow along]

```python
week_rev = [120, 150, 90, 200, 175, 210, 160]  # Mon → Sun

# Weekday revenue (Mon–Fri)
weekdays = week_rev[:5]
print(weekdays)          # [120, 150, 90, 200, 175]

# Weekend (Sat, Sun)
weekend = week_rev[-2:]
print(weekend)           # [210, 160]
```

### ✅ [Try yourself] — Exercises C

**Set 1.** Given `temps = [28, 30, 33, 35, 31, 29, 27]` (7 days):

1. First-day and last-day temperatures (use a negative index for the last day).
2. First three days.
3. From day 4 to the end.
4. Reverse the list.
5. Given `word = "PYTHON"`, take the first 3 characters and the last character.

**Set 2 — business scenario.** Monthly revenue (billion VND):  
`rev = [50, 55, 48, 60, 65, 70, 72, 68, 75, 80, 90, 120]`

6. Use slicing for **Q1** (first 3 months) and **Q4** (last 3 months).
7. Take the **last 6 months** and compute their sum.
8. Take **odd-numbered months** (Jan, Mar, May, … — hint: `rev[::2]`).
9. Contract code `code = "VN-2025-0917"`. Slice the country code `"VN"` (first 2 chars) and the trailing number `"0917"` (last 4 chars).

**Challenge (10–13) — combine lists + mid-string slices**

```python
months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
rev = [50, 55, 48, 60, 65, 70, 72, 68, 75, 80, 90, 120]
ticket = "INV-HN-2025-0042"
```

10. Compute **H1** revenue (first 6 months) and **H2** revenue (last 6 months). Then compute **growth** = H2 total − H1 total.
11. Find the **best month name**: use `rev.index(max(rev))` to get the index, then look up that index in `months`.
12. From `ticket`, extract: region code `"HN"` (characters after the first `-`, before the next `-`), year `"2025"`, and serial `"0042"`. Use slicing only (count positions carefully).
13. Build a new list `q_labels = ['Q1','Q2','Q3','Q4']` and a list `q_totals` with the sum of each quarter of `rev` (four slices). Print each label next to its total with a `for` loop over indices `0..3`.

::: solution
```python
# Set 1
temps = [28, 30, 33, 35, 31, 29, 27]
temps[0]        # 28
temps[-1]       # 27
temps[:3]       # [28, 30, 33]
temps[3:]       # [35, 31, 29, 27]
temps[::-1]     # [27, 29, 31, 35, 33, 30, 28]

word = "PYTHON"
word[:3]        # 'PYT'
word[-1]        # 'N'

# Set 2
rev = [50, 55, 48, 60, 65, 70, 72, 68, 75, 80, 90, 120]
rev[:3]             # Q1:  [50, 55, 48]
rev[-3:]            # Q4: [80, 90, 120]
last6 = rev[6:]
sum(last6)          # 505
rev[::2]            # odd months

code = "VN-2025-0917"
code[:2]            # 'VN'
code[-4:]           # '0917'

# Challenge
months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
rev = [50, 55, 48, 60, 65, 70, 72, 68, 75, 80, 90, 120]
h1 = rev[:6]
h2 = rev[6:]
growth = sum(h2) - sum(h1)     # 505 - 348 = 157

best_i = rev.index(max(rev))
print(months[best_i], rev[best_i])   # Dec 120

ticket = "INV-HN-2025-0042"
# I N V - H N - 2 0 2 5 - 0 0 4 2
# 0 1 2 3 4 5 6 7 8 9 ...
ticket[4:6]     # 'HN'
ticket[7:11]    # '2025'
ticket[-4:]     # '0042'

q_labels = ['Q1', 'Q2', 'Q3', 'Q4']
q_totals = [sum(rev[0:3]), sum(rev[3:6]), sum(rev[6:9]), sum(rev[9:12])]
for i in range(4):
    print(q_labels[i], q_totals[i])
# Q1 153, Q2 195, Q3 215, Q4 290
```
:::

---

## Part D — Minimal NumPy (30′)

NumPy is the array-computing library; **pandas is built on NumPy**. You only need three ideas for this course — but you will practise them on **messy** numbers (missing values).

### D1. Arrays & indexing/slicing — [Follow along]

```python
import numpy as np

a = np.array([10, 20, 30, 40, 50])
a[0]        # 10
a[1:3]      # array([20, 30])   — same slicing idea as list
a[-1]       # 50
```

**2D arrays** use `[row, column]` — a preview of a data table:

```python
m = np.array([[1, 2, 3],
              [4, 5, 6]])
m[0, 1]     # 2              — row 0, column 1
m[:, 0]     # array([1, 4])  — all rows, column 0
m[1, :]     # array([4, 5, 6]) — row 1, all columns
```

### D2. Vectorization — compute on the whole array — [Follow along]

```python
revenue = np.array([120, 150, 90, 200])

revenue * 1.1     # +10% everywhere — no loop
revenue - 50      # subtract fixed cost 50 per day
revenue.mean()    # average
revenue.sum()     # total
```

> This is why NumPy (and pandas) is fast: one operation applies to the whole array at once.

### D3. `np.nan` — missing values — [Follow along]

```python
b = np.array([100, 120, np.nan, 95])
print(b)                 # [100. 120.  nan  95.]
np.isnan(b)              # [False False  True False] — find missing cells
```

Useful helpers when data has gaps:

```python
np.isnan(b).sum()        # how many missing
np.nanmean(b)            # mean that ignores nan
```

### ✅ [Try yourself] — Exercises D

**Scenario:** you analyse sales for a store chain.

**Core (1–5)**

1. Create `sales = np.array([200, 240, 180, 300])` (4 quarters), increase all values by 15%, then compute the mean.
2. From the 3-store × 2-quarter table `np.array([[10,20],[30,40],[50,60]])`, get: store 3 / quarter 2 (row 2, column 1); and the entire **column 0** (quarter 1 for every store).
3. Create `[5, np.nan, 8, np.nan]` and use `np.isnan()` to locate missing values.
4. On `sales` from (1), apply **10% VAT** (`* 1.1`), compute the mean, then find **quarters above the mean** (hint: `sales > sales.mean()` returns a True/False array).
5. Satisfaction scores with blanks: `scores = np.array([8, np.nan, 7, 9, np.nan, 6])`. Count **how many missing cells** (hint: `np.isnan(scores).sum()`).

**Challenge (6–9) — clean, then analyse**

```python
import numpy as np

sales = np.array([200., 240., np.nan, 300., 180., 260.])  # 6 months, one missing
tbl = np.array([
    [10., 20., 15.],
    [30., 40., 35.],
    [50., 60., 55.],
    [25., np.nan, 40.],
])  # 4 stores × 3 quarters
```

6. Count missing values in `sales`. Compute `np.nanmean(sales)`.
7. **Impute:** create `sales_filled = sales.copy()`. Replace every `nan` with the nan-mean from (6). Then compute the mean of `sales_filled` (should match the nan-mean).
8. From `tbl`, extract: row 0 (store 1), column 1 (quarter 2 for all stores), and the value at store 3 / quarter 3 (`tbl[2, 2]`).
9. Count missing cells in `tbl`. Create `tbl_q1 = tbl[:, 0]` (all stores, quarter 1) and compute its sum (**no** missing in Q1). Then create a boolean mask `np.isnan(tbl)` and explain in a comment which store–quarter is missing.

::: solution
```python
# Core
sales = np.array([200, 240, 180, 300])
(sales * 1.15).mean()    # 276.0

m = np.array([[10, 20], [30, 40], [50, 60]])
m[2, 1]      # 60
m[:, 0]      # array([10, 30, 50])

x = np.array([5, np.nan, 8, np.nan])
np.isnan(x)

sales_vat = sales * 1.1
sales_vat.mean()              # 264.0
sales_vat > sales_vat.mean() # only Q4 True

scores = np.array([8, np.nan, 7, 9, np.nan, 6])
np.isnan(scores).sum()        # 2

# Challenge
sales = np.array([200., 240., np.nan, 300., 180., 260.])
np.isnan(sales).sum()         # 1
mu = np.nanmean(sales)        # 236.0

sales_filled = sales.copy()
sales_filled[np.isnan(sales_filled)] = mu
sales_filled.mean()           # 236.0

tbl = np.array([
    [10., 20., 15.],
    [30., 40., 35.],
    [50., 60., 55.],
    [25., np.nan, 40.],
])
tbl[0, :]      # store 1
tbl[:, 1]      # Q2 (includes nan)
tbl[2, 2]      # 55.0

np.isnan(tbl).sum()   # 1
tbl_q1 = tbl[:, 0]
tbl_q1.sum()          # 115.0
# Missing cell: store 4 (row 3), quarter 2 (column 1)
```
:::

---

## Integrated business mini-case (required)

Combine today’s skills in one business scenario with **missing data**. Complete **all** tasks in your notebook before submitting.

**Context:** you analyse a retail store for one week. Wednesday’s revenue was not recorded.

```python
import numpy as np

days    = np.array(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
revenue = np.array([120., 150., np.nan, 200., 175., 210., 160.])  # million VND
cost    = np.array([80., 95., 70., 110., 100., 120., 90.])         # million VND
store   = {
    'name': 'Store A',
    'region': 'Hanoi',
    'staff': 8,
    'open_hours': {'weekday': 10, 'weekend': 12},
}
```

**Tasks**

1. Print store name, region, and weekday opening hours (nested dict access: `store['open_hours']['weekday']`).
2. Which **day name(s)** have missing revenue? Hint: `days[np.isnan(revenue)]`.
3. Create `revenue_filled = revenue.copy()`. Replace missing values with `np.nanmean(revenue)`.
4. Compute **weekday** revenue (Mon–Fri) and **weekend** revenue (Sat–Sun) from `revenue_filled` using slicing; print both totals.
5. Compute **daily profit** = `revenue_filled - cost`; store in `profit`.
6. Print the **average** daily profit.
7. Print the **day names** whose profit is strictly above the mean (`days[profit > profit.mean()]`).
8. Which day has the **highest profit**? Use `np.argmax(profit)` to get the index, then index into `days`.
9. Compute **profit margin** = `profit / revenue_filled` (vectorization). Compare **mean weekday margin** (`margin[:5].mean()`) vs **mean weekend margin** (`margin[-2:].mean()`). Which is higher?
10. **Business memo (4–5 sentences)** in a markdown or comment cell: summarise revenue pattern, the impact of imputing Wednesday, and one recommendation for the store manager.

::: solution
```python
import numpy as np

days    = np.array(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
revenue = np.array([120., 150., np.nan, 200., 175., 210., 160.])
cost    = np.array([80., 95., 70., 110., 100., 120., 90.])
store   = {
    'name': 'Store A',
    'region': 'Hanoi',
    'staff': 8,
    'open_hours': {'weekday': 10, 'weekend': 12},
}

# 1
print(store['name'], store['region'], store['open_hours']['weekday'])

# 2
print(days[np.isnan(revenue)])   # ['Wed']

# 3
revenue_filled = revenue.copy()
revenue_filled[np.isnan(revenue_filled)] = np.nanmean(revenue)

# 4
print(revenue_filled[:5].sum())   # weekdays
print(revenue_filled[-2:].sum())  # weekend

# 5–6
profit = revenue_filled - cost
print(profit.mean())

# 7–8
print(days[profit > profit.mean()])
print(days[np.argmax(profit)], profit.max())

# 9
margin = profit / revenue_filled
print(margin[:5].mean(), margin[-2:].mean())
```
:::

---

## Wrap-up

Today you practised: variables & nested structures; **indexing & slicing**; NumPy arrays with **missing values**; and an integrated retail mini-case that forces you to clean data before deciding.

**Before you leave:** export `lab2_YourName.ipynb` and upload it to the [Lab 2 Drive folder](https://drive.google.com/drive/folders/1f0WA6zKYyynvVFG2nJZ09SsOSyxzXPpB?usp=sharing).

**Worked answers (optional download):** [2.Lab2_Answers.ipynb](../assets/materials/2.Lab2_Answers.ipynb) — full solution notebook with English comments. Use it to check your work after submitting.

---

## Optional stretch (after you submit)

1. Given `months = [1,2,3,4,5,6,7,8,9,10,11,12]`, slice Q1, Q4, and even months.
2. Build a 12-month revenue array with **two** `np.nan` values; impute with `nanmean`; plot is not required — just print before/after means.
3. Optional reading (NEU textbook Ch. 4): sets, `while` loops, list comprehensions.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `NameError: name 'np' is not defined` | Run `import numpy as np` first |
| Slicing returns too few / too many items | Remember: `stop` is **exclusive** |
| `IndexError: list index out of range` | Index past the end; counting starts at 0 |
| `nan` appears in means / comparisons | Use `np.nanmean` / boolean masks; or impute first |
| VS Code missing NumPy | `pip install numpy` (or `pip3`) in Terminal |
| Prefer no local install | Use Google Colab |

---

## References

- Week 2 slides: `2.Basic_Py.pdf` (Materials on the course site)
- NEU. *Data Science for Economics and Business (Python)* — Chapter 4: Python basics
- Continues into pandas in **Week 4** (`loc` / `iloc` build on today’s slicing)
