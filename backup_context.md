# Backup Context — Data Mining (IST 4520) Course Website

## Project Overview

This project creates a course website for "Data Mining" (IST 4520) at National Economics University,
Faculty of Data Science and Artificial Intelligence. The site is built on the shared NEU FDA
Node + Handlebars + SCSS template and deployed on GitHub Pages.

### Key Information

- **Course Code:** IST 4520
- **Course Type:** Elective, 3 credits
- **Semester:** Fall 2026
- **Institution:** National Economics University (NEU)
- **Department:** Faculty of Data Science and Artificial Intelligence
- **College:** College of Technology, National Economics University
- **Office:** Room 1613, Building A1, National Economics University
- **GitHub Repository:** https://github.com/nghianguyen7171/Data_mining.git
- **Live Website:** https://nghianguyen7171.github.io/Data_mining/
- **Accent Color:** `#1a5c7e` (deep ocean blue) — distinguishes from excel_course red `#8c1d1d`

---

## Staff

### Dr. Trong-Nghia Nguyen — Course Instructor

- **Email:** nghiant@neu.edu.vn
- **Website:** https://nghianguyen7171.github.io/
- **Office:** Room 1613, Building A1
- **Office Hours:** By appointment
- **Photo:** `src/assets/images/instructor.png`
- **Background:** Member of Business AI Lab (BAI LAB), PhD from Chonnam National University,
  Korea (2025)
- **Source of truth:** `src/data/staff.yml`

### MSc. Le Duy Khanh — Teaching Assistant

- **Email:** khanhld@neu.edu.vn
- **Website:** https://fda.neu.edu.vn/fda-members/ths-le-duy-khanh/
- **Responsibility:** Lab troubleshooting and homework help
- **Source of truth:** `src/data/staff.yml`

---

## Course Content

### Description

A hands-on introduction to data mining for business decision-making. The course equips students
with business-analytic thinking: framing the right question, selecting the right technique, and
interpreting results in actionable business language — not writing algorithms from scratch.

Students work through the full CRISP-DM lifecycle using Orange Data Mining (a no-code,
drag-and-drop platform) supplemented by light Python/pandas scripts. Core techniques covered
include data exploration and visualization, association rules, k-Means clustering, KNN and
Naïve Bayes classification, and linear and logistic regression. Midterm assessments include a
practical exam on Orange and a group project presentation; the final is a written exam.

### Prerequisites

- Basic Computer Skills
- Introduction to Statistics (recommended)
- Basic Python programming (recommended)

### Course Hours

- Lecture: 18 h
- Lab / Seminar: 12 h
- Self-study: 90 h
- Duration: 15 weeks (alternating lecture / lab)

### Course Objectives

| ID | Description                                                                                                                 |
| :- | :-------------------------------------------------------------------------------------------------------------------------- |
| G1 | Describe and explore business data through descriptive statistics and visualization.                                        |
| G2 | Structure data mining projects using the CRISP-DM process from business understanding to deployment.                        |
| G3 | Apply core data mining techniques — association rules, clustering, classification, and regression — to business datasets. |
| G4 | Use Orange Data Mining and Python for practical, end-to-end data mining workflows.                                          |
| G5 | Communicate analytical findings as clear, actionable business recommendations.                                              |

### Course Learning Outcomes (CLOs)

| CLO   | Objective | Outcome                                                                                                                      |
| :---- | :-------- | :--------------------------------------------------------------------------------------------------------------------------- |
| CLO 1 | G2        | Frame a business problem as a data mining task and plan a project using the CRISP-DM process.                                |
| CLO 2 | G1        | Explore and describe datasets using descriptive statistics, distributions, scatter plots, and correlation.                   |
| CLO 3 | G3        | Apply association rules and k-Means clustering to discover patterns and segment customers.                                   |
| CLO 4 | G3        | Build classification and regression models; evaluate performance with standard metrics; interpret results in business terms. |
| CLO 5 | G4        | Build Orange workflows for complete data mining pipelines; read and adapt Python/pandas scripts for data tasks.              |
| CLO 6 | G5        | Produce business memos that translate analytical results into specific, evidence-based recommendations.                      |

### Grading Structure

| Component                  | Content                                                                                                      | Week         | Weight |
| :------------------------- | :----------------------------------------------------------------------------------------------------------- | :----------- | :----- |
| Attendance & Participation | Attendance, weekly lab submissions with business memos, class participation, two current-event presentations | Weekly       | 10%    |
| Midterm Exam               | Part 1 (Week 8): 90-min practical on Orange. Part 2 (Week 14): group project presentation.                   | Weeks 8 & 14 | 40%    |
| Final Exam                 | Written exam covering the full course                                                                        | Week 15      | 50%    |

**Total: 10 + 40 + 50 = 100% (enforced at build time).**

#### Grading Notes

- **Attendance:** Base score of 8.0/10 for full attendance without active participation. Each
  active participation adds +0.25 pts. More than 4 absences → score of 0 and ineligibility for
  the Final Exam. Surplus above 10.0 is halved and added to the Midterm grade.
- **Midterm Part 1:** Load a dataset, preprocess, model, and interpret results in Orange
  (covers Weeks 1–7).
- **Midterm Part 2:** Group project on a self-selected dataset; present findings to the class
  (covers full course).
- **Group project:** Teams of 3–4 students; topic and dataset confirmed by Week 12.
- **Two current-event presentations** required (one before and one after the midterm exam).
- **Each lab week includes a business memo** (4–5 sentences interpreting analytical results in
  business language) — submitted alongside the Orange workflow.

### Policies

- **Attendance:** Random attendance checks. More than 4 absences removes eligibility for the
  Final Exam and sets the participation grade to zero.
- **Submission:** Lab assignments are due by the end of the week following the lab session. A
  two-week grace period applies; each late week incurs a 25% penalty. No submission accepted
  after the grace period.
- **Electronics:** Laptops are required for all lab sessions. During lectures, phones must be
  silent and non-educational device use is prohibited unless otherwise instructed.
- **Conduct:** Read the assigned chapter before each lecture; bring a fully charged laptop to
  every lab; submit lab + business memo on time; group project contributions are individually
  assessed; no plagiarism or unauthorised AI-generated content.

### Software

- **Orange Data Mining** (orangedatamining.com) — primary tool; free, open-source, drag-and-drop;
  standalone installer bundles Python and all required libraries. No separate Python installation
  needed.
- **Python 3 with pandas** — accessed via VS Code (local) or Google Colab (browser-based, no
  install required); used for reading and adapting data scripts.
- **Microsoft Excel or Google Sheets** — used for early-stage descriptive statistics and the
  Excel data mining exercise.

---

## 15-Week Course Schedule

| Week | Type       | Title                                                            | Status             | CLOs       | Assessment                                 |
| :--- | :--------- | :--------------------------------------------------------------- | :----------------- | :--------- | :----------------------------------------- |
| 1    | Lecture    | Introduction to Data Mining & CRISP-DM                           | **Released** | 1, 2       | Lab 0 submission                           |
| 2    | Lab        | Lab 2 — Python Basics & Minimal NumPy                           | **Released** | 2, 5, 6    | — (Lab 2 link temporarily hidden)          |
| 3    | Lecture    | Understanding & Preparing Data                                   | TBD                | 1, 2, 5    | —                                         |
| 4    | Lab        | Lab 1 — pandas Introduction & Data Cleaning                     | TBD                | 2, 5, 6    | Lab 1 + Excel exercise                     |
| 5    | Lecture    | Finding Relationships — Correlation & Association Rules         | TBD                | 2, 3       | —                                         |
| 6    | Lab        | Lab 2 — Correlation & Market-Basket Analysis                    | TBD                | 3, 5, 6    | Lab 2 + Presentation#1                     |
| 7    | Lecture    | Clustering — k-Means & Customer Segmentation                    | TBD                | 3          | —                                         |
| 8    | Assessment | Midterm Exam 1 — Practical Exam on Orange                       | **Released** | 1, 2, 3, 5 | Midterm Exam Part 1 (20%)                  |
| 9    | Lecture    | Classification I — KNN & Naïve Bayes                           | TBD                | 4          | —                                         |
| 10   | Lab        | Lab 3 — Classification in Orange                                | TBD                | 4, 5, 6    | Lab 3                                      |
| 11   | Lecture    | Prediction — Linear & Logistic Regression                       | TBD                | 4          | —                                         |
| 12   | Lab        | Lab 4 — Regression & Group Project Launch                       | TBD                | 4, 5, 6    | Lab 4 + Confirm group project topic        |
| 13   | Lecture    | Advanced Topics — Decision Trees, Neural Networks & Text Mining | TBD                | 3, 4       | —                                         |
| 14   | Assessment | Midterm Exam 2 — Group Project Presentations                    | TBD                | 1–6       | Midterm Exam Part 2 (20%) + Presentation#2 |
| 15   | Assessment | Final Exam                                                       | TBD                | 1–6       | Final Exam — 50%                          |

**Schedule rule:** IDs 1–15 are stable permanent identifiers; never renumber. `status: released`
emits links; `status: tbd` shows the title greyed out with no links. Source: `src/data/lectures.yml`.

---

## Assignments

### Lab 0 — Environment Setup & First Orange Project

- **File:** `src/assignments/lab0-setup.md`
- **Due:** End of Week 2
- **Weight:** Part of 10% Attendance & Participation
- **CLOs:** 2, 5, 6
- **Parts:**
  - Part A: Install Python + VS Code + pandas (verify with `print(pd.__version__)`)
  - Part B: Google Colab alternative (for students who cannot install locally)
  - Part C: Install Orange Data Mining (standalone, bundles its own Python)
  - Part D: First Orange workflow using the HDI (Human Development Index) dataset from
    Orange's built-in Datasets widget. Business question: how do countries differ in
    economic development, and what factors travel with higher income?
- **Four deliverables:** screenshot of working Python env, `lab0_HDI.ows` Orange workflow,
  scatter plot screenshot, and a 4–5-sentence business memo.

### Lab 2 — Python Basics & Minimal NumPy

- **File:** `src/assignments/lab2-python-basics.md` (English; source draft `lab/lab2.md`)
- **Due:** End of Week 2
- **Weight:** Part of 10% Attendance & Participation
- **CLOs:** 2, 5, 6
- **Parts:** A environment check → B variables/list/dict → C indexing & slicing → D NumPy
- **Deliverable:** notebook `lab2_YourName.ipynb` uploaded to
  https://drive.google.com/drive/folders/1f0WA6zKYyynvVFG2nJZ09SsOSyxzXPpB?usp=sharing
- Answer keys use `::: solution` fences (stripped on public build)

### Future Labs (not yet written)

- Lab 1 (Week 4): pandas + data cleaning in Orange
- Correlation / market-basket lab (later week in schedule)
- Lab 3 (Week 10): classification in Orange (Test & Score, Confusion Matrix, ROC)
- Lab 4 (Week 12): regression + group project launch

---

## Textbooks & Resources

### Main Textbook

- **[1]** Matthew North (2012). *Data Mining for the Masses*. Global Text Project / Textbook Equity.
  **Free PDF:** https://www.betterevaluation.org/sites/default/files/2023-05/DataMiningForTheMasses.pdf
  — Chapter structure maps 1-to-1 with the course schedule. Students skip RapidMiner screenshots
  and use equivalent Orange workflows provided in class.

### Supplementary References

- **[2]** Shmueli, Bruce, Gedeck & Patel (2019). *Data Mining for Business Analytics: Concepts,
  Techniques and Applications in Python*. Wiley. https://www.dataminingbook.com — Advanced Python
  and modelling coverage; available through the university library.
- **[3]** James, Witten, Hastie & Tibshirani (2023). *An Introduction to Statistical Learning
  (2nd ed.)*. Springer. https://www.statlearning.com — Conceptual foundation for ML methods;
  free PDF from the authors.

### Key Resource Links

- Orange download: https://orangedatamining.com/download
- Orange tutorials: https://orangedatamining.com/getting-started
- Orange widget catalogue: https://orangedatamining.com/widget-catalog
- Google Colab: https://colab.research.google.com
- CRISP-DM reference: https://the-modeling-agency.com/crisp-dm.pdf
- Datasets for group projects: Kaggle, dataminingbook.com, UCI ML Repo, World Bank Open Data,
  Vietnam GSO (gso.gov.vn), OECD Data

---

## Group Project

**Midterm Exam Part 2 — 20% of the final grade.**

Teams of 3–4 students choose a dataset and apply the full CRISP-DM process to a business
question of their choice.

### Milestones

| Milestone                                                        | Deadline        |
| :--------------------------------------------------------------- | :-------------- |
| Confirm team, topic, and dataset                                 | End of Week 12  |
| 10–12-min presentation + Q&A; submit slides and Orange workflow | Week 14 session |

### Evaluation Criteria

- Problem framing and CRISP-DM alignment (20%)
- Data preparation quality (20%)
- Technique selection and execution (30%)
- Interpretation and business memo (20%)
- Presentation clarity (10%)

A good project dataset has at least 200 rows, clearly named columns, and a concrete business
question worth answering.

---

## Technical Architecture

This site runs on the **NEU FDA course site template**
(https://github.com/nghianguyen7171/neu_fda_coursesite), the same template used by
`excel_course` and `Intro_to_AI`.

### Stack

- **Node.js** — build system (`build.js`)
- **Handlebars** — HTML templating (partials under `src/partials/`)
- **SCSS (sass)** — CSS preprocessor (`src/styles/`)
- **js-yaml** — YAML data loading (`src/data/*.yml`)
- **marked** — Markdown rendering for pages and assignments
- **GitHub Pages** — hosting from the `docs/` folder on the `main` branch

### How This Site Differs from Intro_to_AI

| Aspect           | Intro_to_AI                        | Data Mining                                          |
| :--------------- | :--------------------------------- | :--------------------------------------------------- |
| Output directory | Repository root (gh-pages branch)  | `docs/` (main branch)                              |
| Deploy           | `./deploy.sh` → gh-pages branch | Push`docs/` on main → Pages serves /docs          |
| Page structure   | Single-page with anchors           | Multi-page (index, syllabus, resources, assignments) |
| Baseurl          | `/Intro_to_AI`                   | `/Data_mining`                                     |
| Accent color     | Navy/blue                          | `#1a5c7e` (deep ocean blue)                        |

### File Structure

```
Data Mining/
├── build.js                      # Build: YAML + Handlebars + SCSS → docs/
├── package.json
├── src/
│   ├── index.hbs                 # Homepage template
│   ├── templates/
│   │   └── base.hbs              # <html>, header, nav, footer
│   ├── partials/                 # Reusable Handlebars partials
│   │   ├── navbar.hbs
│   │   ├── hero.hbs
│   │   ├── footer.hbs
│   │   └── sections/
│   ├── data/                     # ALL CONTENT LIVES HERE
│   │   ├── course.yml            # Course info, CLOs, assessment, policies, textbooks, software
│   │   ├── lectures.yml          # 15-week schedule
│   │   ├── staff.yml             # Instructor + TA
│   │   └── this-week.yml         # Pinned "This Week" banner (update or delete `current:` each week)
│   ├── pages/
│   │   ├── syllabus.md           # Syllabus page (Handlebars + Markdown)
│   │   └── resources.md          # Resources page
│   ├── assignments/
│   │   ├── lab0-setup.md         # Lab 0 assignment
│   │   └── lab2-python-basics.md # Lab 2 — Python basics (Week 2)
│   ├── assets/
│   │   └── materials/
│   │       ├── 1.Intro_CRISP-DM.pdf          # Week 1 slides
│   │       ├── 1.Quiz_Intro_CRISP-DM.html    # Week 1 quiz
│   │       ├── 2.Basic_Py.pdf               # Week 2 slides (Python basics)
│   │       └── 2.Quiz_Basic_Py.html         # Week 2 in-class quiz (code → result)
│   └── styles/
│       ├── _variables.scss       # Theme tokens (accent colour, fonts)
│       └── main.scss             # Template stylesheet
├── docs/                         # GENERATED — do not edit by hand
│   ├── index.html
│   ├── syllabus.html
│   ├── resources.html
│   ├── assignments/
│   └── assets/
└── docs-keys/                    # GENERATED — instructor answer keys (SOLUTIONS=1)
```

### Key Files to Edit

| What to change                                   | File                                              |
| :----------------------------------------------- | :------------------------------------------------ |
| Course info, CLOs, policies, textbooks, software | `src/data/course.yml`                           |
| 15-week schedule, slide links                    | `src/data/lectures.yml`                         |
| Staff                                            | `src/data/staff.yml`                            |
| This-week pinned banner                          | `src/data/this-week.yml`                        |
| Syllabus page                                    | `src/pages/syllabus.md`                         |
| Resources page                                   | `src/pages/resources.md`                        |
| Lab assignments                                  | `src/assignments/*.md`                          |
| Slide PDFs                                       | `src/assets/materials/`                         |
| Theme colour / fonts                             | `src/styles/_variables.scss`                    |
| **Never edit**                             | `docs/` — fully generated by `npm run build` |

### Build Process

```bash
npm install           # install dependencies (first time only)
npm run build         # generate docs/ (solutions stripped — safe to push)
npm run build:keys    # generate docs-keys/ (solutions rendered — instructors only)
npm run serve         # preview at http://localhost:4000
```

### Deploy

Push `docs/` to GitHub Pages. Repo settings: **Settings → Pages → Branch: main, Folder: /docs**.

### Build-Time Safety Checks

The build **fails** (writes nothing) if:

- Assessment weights in `course.yml` do not sum to 100%
- A weight cannot be parsed as a number
- A CLO maps to an undeclared objective

### Solution Gating

`npm run build` strips `::: solution` blocks from assignments. `SOLUTIONS=1 npm run build`
(`npm run build:keys`) renders them and writes to `docs-keys/`. Publishing answer keys requires
deliberately opting in.

---

## Current Status (as of 2026-08-18)

### ✅ Completed

- Full course site built inside `Data Mining/` using the NEU FDA template
- `src/data/course.yml` — IST 4520, Fall 2026, 3 credits, 5 objectives, 6 CLOs, 3 assessment
  items (10/40/50)
- `src/data/lectures.yml` — 15-week schedule; Weeks 1 and 2 released, Week 8 marked released
  for Midterm Exam 1; all others TBD
- Lab 0 submission link shown under **Week 1 Assessment** (not Week 2)
- `src/data/staff.yml` — Dr. Trong-Nghia Nguyen (Instructor) + MSc. Le Duy Khanh (TA)
- `src/data/this-week.yml` — Week 1 banner active
- `src/pages/syllabus.md` and `src/pages/resources.md`
- `src/assignments/lab0-setup.md` — full Lab 0 (environment setup + first Orange HDI workflow)
- `src/assignments/lab2-python-basics.md` — Lab 2 English assignment (Python + NumPy); Week 2
  Assessment links to it; students upload `lab2_YourName.ipynb` to the course Drive folder
- `src/assets/materials/1.Intro_CRISP-DM.pdf` — Week 1 slide
- `src/assets/materials/1.Quiz_Intro_CRISP-DM.html` — Week 1 quiz (from `quizz/quizz1_Mining.html`)
- `src/assets/materials/2.Basic_Py.pdf` — Week 2 slides (Python basics)
- `src/assets/materials/2.Quiz_Basic_Py.html` — Week 2 in-class quiz (18 one-liner
  code→result MCQs; source `quizz/quizz2_Basic_Py.html`); linked on Week 2 Materials
- Schedule Materials column supports `slides`, `notebook`, and `quiz` links
- `README.md` — setup, contribution guide, common tasks, deploy flow, collaborator instructions
- Live site deployed at https://nghianguyen7171.github.io/Data_mining/

### 🔧 Pending / Next Steps

- **TA collaborator access:** Le Duy Khanh collaborator invitation sent; awaiting acceptance
  (Write access on personal repo)
- **Remaining weeks:** Slides for Weeks 3–15 added to `src/assets/materials/` and
  `status: released` set in `lectures.yml` as content is ready
- **Lab assignments:** Lab 1 (Week 4) and later labs not yet written — add per week as taught
- **This-week banner:** Update `src/data/this-week.yml` each week (or delete `current:` block
  when content is stale — the banner disappears rather than showing wrong information)
- **Draft folders** (`lec/`, `lab/`, `quizz/`, `refs/`, `slides/`) exist locally as authoring
  material; published copies live under `src/assets/materials/` / `src/assignments/`
- **Re-enable Lab 2 schedule link** when ready: restore `assignment:` + `Lab 2 submission`
  in `lectures.yml`

---

## Future Maintenance

### Weekly content workflow

1. Add slide PDF to `src/assets/materials/N.Slide_Name.pdf`
2. Optionally add a quiz HTML to `src/assets/materials/N.Quiz_....html` and set `quiz:` in
   `lectures.yml`
3. Set `status: released` for that week in `src/data/lectures.yml` and add `slides:` / `quiz:`
   paths
4. Update `src/data/this-week.yml` with the new week's banner
5. Run `npm run build`
6. Push `docs/` changes to GitHub (Pages auto-updates within minutes)

### Lab assignment workflow

1. Create `src/assignments/labN-name.md` with frontmatter (`title`, `due_week`, `due`,
   `weight`, `clos`, `summary`)
2. Set `assignment: labN-name` on the matching week in `lectures.yml`
3. Run `npm run build` — the assignment page is generated at `docs/assignments/labN-name.html`

### Keeping the build honest

- Never hand-edit anything inside `docs/` — it is overwritten on every build
- Never renumber lecture `id:` fields (permalinks key off them)
- Assessment weights must always sum to 100% in `course.yml` (the build enforces this)

---

## Contact Information

**Dr. Trong-Nghia Nguyen (Course Instructor)**

- Email: nghiant@neu.edu.vn
- Profile: https://nghianguyen7171.github.io/

**MSc. Le Duy Khanh (Teaching Assistant)**

- Email: khanhld@neu.edu.vn
- Profile: https://fda.neu.edu.vn/fda-members/ths-le-duy-khanh/

---

## Change Log

### 2026-08-19 — Re-enable Week 2 quiz on the live site

- Uncommented `quiz:` for Week 2 in `src/data/lectures.yml`; rebuilt and deployed
- Lab 2 assignment link remains temporarily hidden

### 2026-08-19 — Temporarily hide Lab 2 link on the live site

- Commented out `assignment:` for Week 2 in `src/data/lectures.yml` (assignment page kept)
- Assessment column shows `—`; re-enable by restoring `assignment` + `Lab 2 submission`
- Rebuilt and deployed

### 2026-08-18 — Lab 2 mini-case marked required

- Integrated business mini-case is required (not optional); added to submission checklist
- Rebuilt and deployed

### 2026-08-18 — Publish Lab 2 as Week 2 assessment

- Added English assignment `src/assignments/lab2-python-basics.md` from `lab/lab2.md`
- Students submit `lab2_YourName.ipynb` to Google Drive folder
  https://drive.google.com/drive/folders/1f0WA6zKYyynvVFG2nJZ09SsOSyxzXPpB?usp=sharing
- Week 2 schedule title/topics updated to Lab 2; Assessment links to the assignment page
- Solution fences stripped from public `docs/`; rebuilt and deployed

### 2026-08-18 — Temporarily hide Week 2 quiz on the live site

- Commented out `quiz:` for Week 2 in `src/data/lectures.yml` (file kept in materials)
- Rebuilt and deployed; re-enable by uncommenting the `quiz:` line

### 2026-08-18 — Week 2 quiz: explanations + replace string example

- Added per-question `explanation` shown when the answer is revealed
- Replaced `'ANALYTICS'[:4]` with `'PYTHON'[:3]` (result `'PYT'`)
- Synced `src/assets/materials/2.Quiz_Basic_Py.html`, rebuilt and deployed

### 2026-08-18 — Publish Week 2 in-class quiz

- Created `quizz/quizz2_Basic_Py.html` (18 MCQs: one code line → choose result; no Overview)
  - Phần 1: types/structures (4)
  - Phần 2: indexing & slicing (8)
  - Phần 3: NumPy (4)
  - Phần 4: function recognition (2)
- Published as `src/assets/materials/2.Quiz_Basic_Py.html`; linked on Week 2; rebuilt and deployed

### 2026-08-18 — Publish Week 2 slides

- Copied `slides/2.Basic_Py.pdf` → `src/assets/materials/2.Basic_Py.pdf`
- Linked slides on Week 2 in `src/data/lectures.yml`; rebuilt and deployed

### 2026-08-12 — Publish Week 1 quiz

- Copied `quizz/quizz1_Mining.html` → `src/assets/materials/1.Quiz_Intro_CRISP-DM.html`
- Added `quiz:` field support in `src/partials/sections/schedule.hbs` (Materials column)
- Linked quiz on Week 1 in `src/data/lectures.yml`; rebuilt and deployed

### 2026-08-12 — Schedule: Lab 0 assessment on Week 1

- Moved `assignment: lab0-setup` / `assessment: Lab 0 submission` from Week 2 to Week 1 in
  `src/data/lectures.yml` so the Schedule Assessment column matches the intended layout
- Rebuilt `docs/index.html` and pushed to deploy GitHub Pages
- Updated schedule table and status notes in this backup context

### 2026-08-04 — Initial Build

- Course site built from scratch using the NEU FDA template (same stack as `excel_course`
  and `Intro_to_AI`)
- All content from the official syllabus (IST 4520, Fall 2026) entered into `course.yml`,
  `lectures.yml`, and `staff.yml`
- Lab 0 written in full with four-part step-by-step instructions
- Week 1 slide (`1.Intro_CRISP-DM.pdf`) released; all other weeks set to TBD
- Committed and pushed to GitHub (47 files, 2 commits)

---

**Last Updated:** 2026-08-19 (Week 2 quiz re-enabled on schedule)
**AI Readiness:** 100%

*This document serves as a comprehensive backup context for the Data Mining (IST 4520) course
website project. It contains all essential information needed to understand, maintain, and
continue development of the project.*
