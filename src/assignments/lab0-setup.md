---
title: "Lab 0 — Environment Setup & First Orange Project"
due_week: 2
due: "End of Week 2"
weight: "Part of 10% Attendance & Participation"
clos: "2, 5, 6"
summary: "Set up your Python environment (VS Code or Google Colab), install Orange Data Mining, and build your first workflow to explore the HDI economic dataset."
---

## Goal

By the end of this lab you will have a working development environment and a completed Orange workflow that explores economic development data across countries. This is the foundation for every lab session that follows.

## What to submit

Four items, submitted to the LMS before the end of Week 2:

1. **Screenshot** of your Python environment running successfully: either VS Code Terminal showing the pandas version, or a Google Colab cell printing "pandas ready".
2. **Orange workflow file** `lab0_HDI.ows` — saved from your Orange session.
3. **Screenshot** of your completed Scatter Plot (GDP per capita vs. life expectancy, coloured by HDI).
4. **Business memo** — 4–5 sentences answering the question posed in Part D below.

---

## Part A — Python environment (VS Code, ~20 min)

**VS Code** is a free, cross-platform code editor. We use it to read and adapt Python/pandas scripts throughout the course.

### A1. Install Python

**Windows:**
1. Go to python.org/downloads → click **Download Python**.
2. Open the `.exe` installer. **Tick "Add Python to PATH"** at the bottom of the first screen before clicking Install.

**macOS:**
1. Go to python.org/downloads → download the macOS package.
2. Open the `.pkg` file and follow the prompts.

**Verify:** open Terminal (macOS) or Command Prompt (Windows) and run:
```
python --version
```
You should see `Python 3.x.x`. On macOS you may need `python3 --version`.

### A2. Install VS Code

1. Download from code.visualstudio.com (the page auto-detects your OS).
2. Install, ticking **"Add to PATH"** when offered.
3. Open VS Code → click the **Extensions** icon (left sidebar) → search **Python** → install the Microsoft Python extension.
4. Also install the **Jupyter** extension.

### A3. Install pandas

Open the VS Code integrated terminal (`Terminal → New Terminal`) and run:
```
pip install pandas
```
(macOS: try `pip3 install pandas` if the above fails.)

### A4. Verify

Create a file `test.py`, paste the code below, and run it (click ▶ or right-click → *Run Python File in Terminal*):
```python
import pandas as pd
print("pandas ready")
print(pd.__version__)
```
If the terminal prints "pandas ready" and a version number → **Part A complete.**

> **If installation fails on your machine, skip to Part B (Google Colab)** — you can complete the entire course without a local Python install.

---

## Part B — Alternative: Google Colab (~15 min)

Google Colab runs Python in your browser — no installation needed.

1. Go to colab.research.google.com (sign in with a Google account).
2. Click **File → New notebook**.
3. In the first cell, type and run (`Shift + Enter`):
```python
import pandas as pd
print("pandas ready")
print(pd.__version__)
```
pandas is pre-installed in Colab; it will print immediately.

> One of Part A or Part B is sufficient. If VS Code works, use it — it is the better long-term tool. Colab is the backup when local setup fails.

---

## Part C — Install Orange Data Mining (~10 min)

Orange is the **primary tool** for this course.

1. Go to [orangedatamining.com/download](https://orangedatamining.com/download).
2. Download the standalone installer for your OS:
   - **Windows:** `Orange3-...-x86_64.exe`
   - **macOS:** choose **Apple Silicon** or **Intel** (check  → About This Mac → Chip).
   - **Linux:** use the Anaconda path (instructions on the download page).
3. Install:
   - **Windows:** open the `.exe`. If Windows SmartScreen blocks it, click *More info → Run anyway*, then Next → Install.
   - **macOS:** open the `.dmg`, drag Orange to **Applications**. First launch: right-click → **Open** (macOS security restriction).
4. Open Orange → you see the Welcome screen → **installation successful.**

Orange bundles its own Python. It is independent of the Python you installed in Part A.

---

## Part D — First Orange project: HDI dataset (~40 min)

We will build a workflow to explore the **Human Development Index (HDI)** — a dataset of economic and social indicators for countries worldwide (GDP per capita, life expectancy, education). This maps directly to CRISP-DM's *Business Understanding* and *Data Understanding* phases from the Week 1 lecture.

**Business question:** *As an analyst at an international investment fund, how do countries differ in economic development, and what factors travel together with higher income?*

### D1. Open Orange and create a new workflow

Open Orange → Welcome screen → **New** (or File → New). You see a blank canvas and a widget panel on the left.

### D2. Load the HDI dataset

1. In the widget panel under **Data**, drag **Datasets** onto the canvas.
2. Double-click the widget → search for **HDI** → select it → Orange downloads the data.
3. Close the widget window. The widget now has data flowing from its output.

> *If HDI does not appear:* use the **File** widget instead and open the file downloaded from `https://datasets.biolab.si/core/HDI.tab`.

### D3. View the data table

1. Drag a **Data Table** widget onto the canvas.
2. Connect **Datasets → Data Table** by dragging from the right edge of Datasets to the left edge of Data Table.
3. Double-click Data Table to open it.

**Record:** How many rows (countries) and columns (indicators) does the dataset have? Click a column header to sort. Which country has the highest HDI? Which has the lowest?

### D4. Descriptive statistics

1. Drag **Feature Statistics** onto the canvas.
2. Connect **Datasets → Feature Statistics**.
3. Open it: for each numeric column, note the mean, min/max, and any missing values.

**Question:** Which columns have missing values? What does the gap between min and max GDP per capita tell you about global inequality?

### D5. Distribution of one variable

1. Drag **Distributions** onto the canvas.
2. Connect **Datasets → Distributions**.
3. Select **HDI** as the variable. Observe the shape. Then switch to **life expectancy**.

### D6. Scatter plot — the "aha" step

1. Drag **Scatter Plot** onto the canvas (under **Visualize**).
2. Connect **Datasets → Scatter Plot**.
3. Set **Axis X** to GDP/GNI per capita and **Axis Y** to life expectancy. Set **Color** to HDI if available.

**Observe:** Do points trend upward? This is correlation (Week 5). Click a point to identify the country.

### D7. Save the workflow

**File → Save As** → name it `lab0_HDI.ows`.

### D8. Business memo

Write 4–5 sentences answering the original question:

> *"The HDI dataset contains [number] countries. Development levels vary widely: HDI ranges from [min] to [max]. The scatter plot reveals that GDP per capita and life expectancy move together — wealthier countries tend to live longer. [Your observation about an outlier or interesting cluster.] For an investment fund, these findings suggest focusing on [your recommendation]."*

This is the core skill graded throughout the course: **turning a chart into a business sentence.**

---

## Troubleshooting

| Problem | Fix |
| :-- | :-- |
| VS Code: `python` command not found | Re-install Python with "Add to PATH" ticked; restart VS Code |
| `pip install pandas` fails on Mac | Use `pip3 install pandas` |
| Cannot install anything on this machine | Use Google Colab (Part B) for the whole course |
| macOS: "Orange can't be opened" | Right-click Orange → **Open**; or System Settings → Privacy & Security → *Open Anyway* |
| HDI not in Datasets widget | Download from `datasets.biolab.si/core/HDI.tab` and open with the **File** widget |
| Widgets won't connect | Drag from the **right edge** of the source widget to the **left edge** of the destination |
