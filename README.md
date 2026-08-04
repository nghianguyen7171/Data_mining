# IST 4520 — Data Mining

Course website for **Data Mining** at the Faculty of Data Science and Artificial Intelligence, National Economics University (NEU).

**Live site:** https://nghianguyen7171.github.io/Data_mining/  
**Semester:** Fall 2026  
**Instructors:** Dr. Trong-Nghia Nguyen · MSc. Le Duy Khanh (TA)

---

## Quick start

You need [Node.js](https://nodejs.org/) 14+ installed.

```bash
git clone https://github.com/nghianguyen7171/Data_mining.git
cd Data_mining
npm install
npm run build    # generates docs/
npm run serve    # preview at http://localhost:4000
```

That's it. The site is fully static — no database, no server, no framework beyond Node at build time.

---

## How the site works

All content lives in `src/`. The build script (`build.js`) reads YAML data files and Handlebars templates, compiles SCSS, and writes a complete static site to `docs/`. GitHub Pages serves `docs/` directly.

```
src/
├── data/           ← all course content lives here (edit these)
│   ├── course.yml       course info, CLOs, assessment, policies, textbooks
│   ├── lectures.yml     15-week schedule
│   ├── staff.yml        instructor and TA
│   └── this-week.yml    the "This week" banner on the homepage
├── assignments/    ← one Markdown file per lab assignment
├── pages/          ← syllabus.md and resources.md
├── partials/       ← reusable HTML fragments (navbar, footer, sections)
├── templates/      ← page shells (base, assignment, assignment index)
├── styles/         ← SCSS (_variables.scss to change the colour theme)
└── assets/         ← images and PDF materials copied into docs/
    ├── images/          logos and staff photos
    └── materials/       lecture slides and handouts
docs/               ← GENERATED — never edit by hand
```

> **Rule:** edit files in `src/`, run `npm run build`, commit `docs/` along with your source changes.

---

## Common tasks

### Update the "This week" banner

Edit `src/data/this-week.yml`. Change `week`, `title`, `summary`, and the `todo` list to match the current session. If the week is between sessions, delete the `current:` block — the banner disappears instead of showing stale information.

```yaml
current:
  week: 3
  title: "Understanding & Preparing Data"
  summary: |
    This week we cover data types, missing values, and the Data Preparation
    phase of CRISP-DM. Bring a laptop with Orange installed.
  todo:
    - text: "Read North (2012), Chapters 2–3"
    - text: "Lab 1 — pandas & Data Cleaning"
      link: "assignments/lab1-data-cleaning.html"
      due: "End of Week 4"
```

Then rebuild and commit.

### Add a new lecture slide

1. Copy the PDF into `src/assets/materials/`.
2. Open `src/data/lectures.yml`, find the matching week, add the `slides:` field and change `status` to `released`:

```yaml
- id: 3
  week: 3
  type: "Lecture"
  title: "Understanding & Preparing Data"
  status: released          # ← change from tbd
  slides: "assets/materials/2.Data_Preparation.pdf"   # ← add this
  ...
```

3. Run `npm run build` and commit both the PDF and the updated `docs/`.

### Add a new lab assignment

1. Create `src/assignments/lab1-data-cleaning.md` with frontmatter:

```markdown
---
title: "Lab 1 — pandas & Data Cleaning"
due_week: 4
due: "End of Week 4"
weight: "Part of 10% Attendance & Participation"
clos: "2, 5, 6"
summary: "One-sentence description shown on the assignments index."
---

## Goal
...assignment body in Markdown...
```

2. In `src/data/lectures.yml`, add `assignment: lab1-data-cleaning` to the matching week entry and verify `status: released`.

3. Run `npm run build` and commit.

### Add a solution / answer key (instructor-only)

Wrap the answer in a solution fence inside any assignment Markdown:

```markdown
::: solution
Full worked answer here.
:::
```

`npm run build` strips these blocks. `npm run build:keys` renders them with a red "do not publish" banner into `docs-keys/` (which is gitignored). Never commit `docs-keys/`.

### Change the accent colour

Edit `src/styles/_variables.scss` — change `$accent` and the related dark-mode value `$d-accent`. Run `npm run build`. The whole site recolours automatically.

### Update course info, CLOs, or policies

Edit `src/data/course.yml`. The build **fails** if assessment weights do not sum to 100% or if a CLO maps to an objective that is not declared — this enforces the syllabus as a single source of truth.

---

## Deploy to GitHub Pages

The `docs/` folder is the deployment target. GitHub Pages is configured to serve from **Branch: `main`, Folder: `/docs`**.

To publish an update:

```bash
npm run build
git add docs/ src/          # always commit src + docs together
git commit -m "Week N: add slide / update schedule / ..."
git push
```

GitHub Pages picks up the new `docs/` automatically within ~60 seconds.

> **Never push only `docs/` without `src/`.** The source and the build must stay in sync so any collaborator can reproduce the site from scratch.

---

## Adding a collaborator on GitHub

1. Go to **https://github.com/nghianguyen7171/Data_mining**
2. Click **Settings → Collaborators → Add people**
3. Search by GitHub username or email and set role to **Write**

The collaborator will receive an invitation email and can then clone, edit, build, and push directly.

---

## File reference

| File | Purpose |
| :-- | :-- |
| `src/data/course.yml` | Course title, code, CLOs, assessment weights, policies, textbooks |
| `src/data/lectures.yml` | 15-week schedule — topics, slides, assignment links, release status |
| `src/data/staff.yml` | Instructor and TA names, emails, websites |
| `src/data/this-week.yml` | Homepage "This week" banner — update every week |
| `src/pages/syllabus.md` | Full syllabus page (pulls from course.yml via Handlebars) |
| `src/pages/resources.md` | Resources page — textbooks, datasets, tools |
| `src/assignments/*.md` | One file per lab; frontmatter drives the assignment index |
| `src/styles/_variables.scss` | Accent colour and fonts — the only style file to edit per course |
| `src/assets/materials/` | Slide PDFs and handouts served to students |
| `build.js` | Build script — reads `src/`, writes `docs/` |
| `docs/` | Generated output — committed so GitHub Pages can serve it |

---

## Reproducing from scratch

If you ever need to rebuild the site from a clean clone:

```bash
git clone https://github.com/nghianguyen7171/Data_mining.git
cd Data_mining
npm install
npm run build
# docs/ is now identical to what is on GitHub Pages
```

No environment variables, no secrets, no external services required.
