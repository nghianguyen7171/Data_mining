/**
 * NEU FDA course site builder — Data Mining (IST 4520).
 *
 * Adapted from the shared template used by excel_course and Intro_to_AI.
 * Reads src/data/*.yml plus Markdown in src/pages and src/assignments,
 * renders Handlebars templates, compiles SCSS, and writes a static site.
 *
 * Two outputs from one source:
 *   npm run build       -> docs/       solutions stripped (ships to GitHub Pages)
 *   npm run build:keys  -> docs-keys/  solutions rendered (instructors only)
 */

const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const { marked } = require('marked');
const sass = require('sass');
const { globSync } = require('glob');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');

const WITH_SOLUTIONS = process.env.SOLUTIONS === '1';
const OUT = path.join(ROOT, WITH_SOLUTIONS ? 'docs-keys' : 'docs');

const log = (...a) => console.log(...a);
const fail = (msg) => {
  console.error(`\nBuild failed: ${msg}\n`);
  process.exit(1);
};

// ---------------------------------------------------------------- data

function loadData() {
  const dir = path.join(SRC, 'data');
  const data = {};
  for (const file of fs.readdirSync(dir).filter((f) => /\.ya?ml$/.test(f))) {
    const key = path.basename(file, path.extname(file)).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    data[key] = yaml.load(fs.readFileSync(path.join(dir, file), 'utf8'));
  }
  return data;
}

function validateCourse(course) {
  if (!course) fail('src/data/course.yml is missing or empty.');
  const items = (course.assessment && course.assessment.items) || [];
  if (!items.length) fail('course.yml defines no assessment items.');

  const total = items.reduce((sum, item) => {
    const n = parseFloat(String(item.weight).replace('%', ''));
    if (Number.isNaN(n)) fail(`assessment item "${item.name}" has an unparseable weight: ${item.weight}`);
    return sum + n;
  }, 0);

  if (Math.abs(total - 100) > 0.01) {
    fail(
      `assessment weights sum to ${total}%, not 100%.\n` +
        items.map((i) => `    ${String(i.weight).padStart(5)}  ${i.name}`).join('\n')
    );
  }

  const objectives = new Set((course.objectives || []).map((o) => o.id));
  for (const clo of course.learning_outcomes || []) {
    if (!objectives.has(clo.objective)) {
      fail(`${clo.id} maps to objective "${clo.objective}", which is not defined in course.yml.`);
    }
  }

  log(`  validated: ${items.length} assessment items sum to 100%, ${(course.learning_outcomes || []).length} CLOs mapped`);
}

// ------------------------------------------------------- markdown + solutions

const SOLUTION_RE = /^::: *solution *$\n([\s\S]*?)^::: *$/gm;

function processSolutions(md) {
  if (!WITH_SOLUTIONS) return md.replace(SOLUTION_RE, '');
  return md.replace(
    SOLUTION_RE,
    (_, body) => `\n<div class="solution" markdown="1">\n<p class="solution-label">Solution</p>\n\n${body.trim()}\n\n</div>\n`
  );
}

function parseFrontmatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!m) return { data: {}, body: raw };
  return { data: yaml.load(m[1]) || {}, body: raw.slice(m[0].length) };
}

function renderMarkdown(md) {
  return marked.parse(processSolutions(md));
}

// ---------------------------------------------------------------- templating

function registerHelpers(course) {
  const baseurl = (course.baseurl || '').replace(/\/$/, '');

  Handlebars.registerHelper('url', (p) => {
    if (!p) return baseurl || '/';
    if (/^(https?:)?\/\//.test(p) || p.startsWith('mailto:')) return p;
    return `${baseurl}/${String(p).replace(/^\//, '')}`;
  });

  Handlebars.registerHelper('eq', (a, b) => a === b);
  Handlebars.registerHelper('year', () => new Date().getFullYear());
  Handlebars.registerHelper('concat', (...args) => args.slice(0, -1).join(''));
  Handlebars.registerHelper('md', (s) => new Handlebars.SafeString(marked.parse(String(s || ''))));
  Handlebars.registerHelper('mdInline', (s) => new Handlebars.SafeString(marked.parseInline(String(s || ''))));
  Handlebars.registerHelper('isReleased', (status) => (status || 'released') === 'released');
  Handlebars.registerHelper('statusLabel', (status) => ({ draft: 'Draft', tbd: 'TBD' }[status] || ''));
}

function registerPartials() {
  const dir = path.join(SRC, 'partials');
  for (const file of globSync('**/*.hbs', { cwd: dir })) {
    const name = file.replace(/\.hbs$/, '');
    Handlebars.registerPartial(name, fs.readFileSync(path.join(dir, file), 'utf8'));
  }
}

const tpl = (rel) => Handlebars.compile(fs.readFileSync(path.join(SRC, rel), 'utf8'));

// ---------------------------------------------------------------- build steps

function buildStyles() {
  const result = sass.compile(path.join(SRC, 'styles', 'main.scss'), { style: 'compressed' });
  fs.outputFileSync(path.join(OUT, 'assets', 'css', 'main.css'), result.css);
  log('  styles: assets/css/main.css');
}

function copyAssets() {
  const from = path.join(SRC, 'assets');
  if (fs.existsSync(from)) fs.copySync(from, path.join(OUT, 'assets'));
  log('  assets copied');
}

function buildIndex(base, ctx) {
  const content = tpl('index.hbs')(ctx);
  fs.outputFileSync(path.join(OUT, 'index.html'), base({ ...ctx, content, page: { nav: 'home' } }));
  log('  page: index.html');
}

function buildPages(base, ctx) {
  const dir = path.join(SRC, 'pages');
  if (!fs.existsSync(dir)) return;
  for (const file of globSync('*.md', { cwd: dir })) {
    const slug = path.basename(file, '.md');
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(dir, file), 'utf8'));
    const expanded = Handlebars.compile(body)(ctx);
    const content = `<article class="prose">${renderMarkdown(expanded)}</article>`;
    fs.outputFileSync(
      path.join(OUT, `${slug}.html`),
      base({ ...ctx, content, page: { title: data.title || slug, nav: data.nav || slug } })
    );
    log(`  page: ${slug}.html`);
  }
}

function buildAssignments(base, ctx) {
  const dir = path.join(SRC, 'assignments');
  if (!fs.existsSync(dir)) return;

  const pageTpl = tpl('templates/assignment.hbs');
  const listed = [];

  for (const file of globSync('*.md', { cwd: dir })) {
    const slug = path.basename(file, '.md');
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(dir, file), 'utf8'));
    const assignment = { ...data, slug };
    listed.push(assignment);

    const content = pageTpl({ ...ctx, assignment, bodyHtml: new Handlebars.SafeString(renderMarkdown(body)) });
    fs.outputFileSync(
      path.join(OUT, 'assignments', `${slug}.html`),
      base({ ...ctx, content, page: { title: data.title, nav: 'assignments' } })
    );
  }

  listed.sort((a, b) => (a.due_week || 99) - (b.due_week || 99));
  const indexContent = tpl('templates/assignments-index.hbs')({ ...ctx, assignments: listed });
  fs.outputFileSync(
    path.join(OUT, 'assignments', 'index.html'),
    base({ ...ctx, content: indexContent, page: { title: 'Assignments', nav: 'assignments' } })
  );

  log(`  assignments: ${listed.length} + index`);
}

// ---------------------------------------------------------------- main

function main() {
  log(`\nBuilding ${WITH_SOLUTIONS ? 'INSTRUCTOR (with solutions)' : 'PUBLIC'} site -> ${path.relative(ROOT, OUT)}/\n`);

  const data = loadData();
  validateCourse(data.course);

  registerHelpers(data.course);
  registerPartials();

  fs.removeSync(OUT);

  const base = tpl('templates/base.hbs');
  const ctx = { ...data, withSolutions: WITH_SOLUTIONS };

  buildStyles();
  copyAssets();
  buildIndex(base, ctx);
  buildPages(base, ctx);
  buildAssignments(base, ctx);

  if (WITH_SOLUTIONS) {
    log('\n  NOTE: docs-keys/ contains answer keys. It is gitignored. Do not publish it.');
  }
  log(`\nDone.\n`);
}

main();
