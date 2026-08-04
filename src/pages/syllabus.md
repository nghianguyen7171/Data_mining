---
title: Syllabus
nav: syllabus
---

# Syllabus

*{{course.title}} · {{course.semester}}*

<section id="general-information">

## 1. General information

| Item | Details |
| :-- | :-- |
| Course title | {{course.title}} |
| Course code | {{course.code}} |
| Type | {{course.type}} |
| Credits | {{course.credits}} |
| Lecture hours | {{course.hours.lecture}} h |
| Lab / seminar hours | {{course.hours.lab}} h |
| Self-study hours | {{course.hours.self_study}} h |
| Duration | 15 weeks (alternating lecture / lab) |
| Prerequisites | {{#each course.prerequisites}}{{this}}{{#unless @last}}; {{/unless}}{{/each}} |

**Department:** {{course.department}}  
**College:** {{course.college}}  
**Office:** {{course.office}}

</section>

<section id="description">

## 2. Course description

{{course.description}}

</section>

<section id="objectives">

## 3. Course objectives

{{#each course.objectives}}
- **{{this.id}}.** {{this.description}}
{{/each}}

</section>

<section id="learning-outcomes">

## 4. Course learning outcomes (CLOs)

Students who successfully complete this course will be able to:

| CLO | Objective | Outcome |
| :-- | :-- | :-- |
{{#each course.learning_outcomes}}| **{{this.id}}** | {{this.objective}} | {{this.description}} |
{{/each}}

</section>

<section id="assessment">

## 5. Assessment

| Component | Content | Week | Weight | CLOs |
| :-- | :-- | :-- | :-- | :-- |
{{#each course.assessment.items}}| **{{this.name}}** | {{this.content}} | {{this.week}} | {{this.weight}} | {{this.clos}} |
{{/each}}

{{#each course.assessment.items}}
**{{this.name}} — {{this.weight}}.** {{this.criteria}}

{{/each}}

{{#if course.assessment.notes}}
### Notes

{{#each course.assessment.notes}}
- {{this}}
{{/each}}
{{/if}}

</section>

<section id="schedule-pattern">

## 6. Schedule pattern

The course follows an alternating lecture / lab pattern across 15 weeks.

- **Lecture weeks (1, 3, 5, 7, 9, 11, 13):** 90-minute sessions introducing concepts, techniques, and business applications.
- **Lab weeks (2, 4, 6, 10, 12):** 90-minute hands-on sessions in Orange or Python, each concluding with a business memo.
- **Week 8:** Midterm Exam 1 — 90-minute individual practical exam on Orange.
- **Week 14:** Midterm Exam 2 — group project presentations.
- **Week 15:** Final Exam — 90-minute written exam.

Each lab week produces two deliverables: an Orange workflow (or Python notebook) and a 4–5-sentence business memo interpreting the findings.

</section>

<section id="group-project">

## 7. Group project

**Midterm Exam Part 2 — 20% of the final grade.**

Teams of 3–4 students choose a dataset and apply the full CRISP-DM process to a business question of their choice. The project culminates in a presentation to the class during Week 14.

### Deliverables

- **Week 12:** Confirm team composition, topic, and dataset.
- **Week 14:** 10–12-minute presentation + Q&A. Submit slides and Orange workflow before the session.

### Evaluation criteria

- Problem framing and CRISP-DM alignment (20%)
- Data preparation quality (20%)
- Technique selection and execution (30%)
- Interpretation and business memo (20%)
- Presentation clarity (10%)

</section>

<section id="policies">

## 8. Policies

**Attendance.** {{course.policies.attendance}}

**Submission.** {{course.policies.submission}}

**Electronics.** {{course.policies.electronics}}

**Classroom conduct.**

{{#each course.policies.conduct}}
- {{this}}
{{/each}}

**Academic integrity.** All work must be original and properly cited. Plagiarism or unauthorised use of AI-generated content results in a zero for that component. Repeated violations are reported to Student Affairs.

</section>

<section id="software">

## 9. Required software

{{#each course.software}}
- {{this}}
{{/each}}

Installation instructions are provided in [Lab 0]({{url 'assignments/lab0-setup.html'}}).

</section>

<section id="textbooks">

## 10. Learning resources

**Main textbook**

{{#each course.textbooks}}{{#if this.primary}}
- {{this.authors}} ({{this.year}}). *{{this.title}}*. {{this.publisher}}. **Free PDF:** [download]({{this.url}})
{{/if}}{{/each}}

**Supplementary references**

{{#each course.textbooks}}{{#unless this.primary}}
- {{this.authors}} ({{this.year}}). *{{this.title}}*. {{this.publisher}}.
{{/unless}}{{/each}}

</section>
