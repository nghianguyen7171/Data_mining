---
title: Resources
nav: resources
---

# Resources

## Textbooks

{{#each course.textbooks}}
- {{this.ref}} {{this.authors}} ({{this.year}}). *{{this.title}}*. {{this.publisher}}.{{#if this.primary}} **Main text — [Free PDF]({{this.url}})**{{/if}}
{{/each}}

## Software & tools

### Orange Data Mining (primary tool)

- **Download:** [orangedatamining.com/download](https://orangedatamining.com/download) — choose your OS (Windows, macOS, Linux). The standalone installer bundles Python; no separate installation needed.
- **Tutorials:** [orangedatamining.com/getting-started](https://orangedatamining.com/getting-started) — official video tutorials and sample workflows.
- **Widget catalogue:** [orangedatamining.com/widget-catalog](https://orangedatamining.com/widget-catalog) — reference for every widget used in labs.
- **Example workflows:** [orangedatamining.com/blog/](https://orangedatamining.com/blog/) — blog posts with downloadable `.ows` workflow files.

### Python / pandas

- [Google Colab](https://colab.research.google.com) — run Python in your browser, no installation needed. Recommended if local setup fails.
- [VS Code](https://code.visualstudio.com) — free editor for local Python development.
- [pandas documentation](https://pandas.pydata.org/docs/) — official reference.
- [pandas cheatsheet (DataCamp)](https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python) — quick reference card.

## Datasets

### Lab datasets

Lab datasets are loaded directly in Orange using the **Datasets** widget (internet connection required) or provided in class:

- **Lab 0:** HDI (Human Development Index) — loaded via Orange Datasets widget.
- **Labs 1–4:** datasets provided in class or announced in the LMS.

### Practice & project datasets

Recommended starting points for your group project:

- [Kaggle Datasets](https://www.kaggle.com/datasets) — large curated collection; filter by "CSV" format. Requires a free account.
- [dataminingbook.com](https://www.dataminingbook.com) — 20+ datasets from the Shmueli et al. textbook, Excel- and Python-ready.
- [UCI Machine Learning Repository](https://archive.ics.uci.edu/datasets) — classic benchmark datasets for all major ML tasks.
- [World Bank Open Data](https://data.worldbank.org/) — macroeconomic and development indicators by country.
- [Vietnam Statistics Office (GSO)](https://www.gso.gov.vn/) — national statistics in Vietnamese and English.
- [OECD Data](https://data.oecd.org/) — international comparisons across education, economy, health.

A good project dataset has at least 200 rows, clearly named columns, and a concrete business question worth answering.

## Orange learning materials

- [Official Orange YouTube channel](https://www.youtube.com/@OrangeDataMining) — short tutorials for each technique covered in the course.
- [Orange documentation](https://orangedatamining.com/docs/) — full widget and workflow reference.
- Orange sample workflows for each week's technique are distributed in class and posted to the LMS.

## Additional reading

- **CRISP-DM reference guide:** [PDF from SPSS Inc.](https://the-modeling-agency.com/crisp-dm.pdf) — the original CRISP-DM 1.0 specification; concise and practical.
- **Introduction to Statistical Learning:** [statlearning.com](https://www.statlearning.com) — free PDF from the authors. Rigorous conceptual foundation for the techniques taught in Weeks 9–13.

## Course infrastructure

- **LMS:** Assignment submission, announcements, slides, and recorded sessions.
- **Email:** Contact the instructor at [nghiant@neu.edu.vn](mailto:nghiant@neu.edu.vn)
- **TA:** For lab troubleshooting and homework help, contact [khanhld@neu.edu.vn](mailto:khanhld@neu.edu.vn)
