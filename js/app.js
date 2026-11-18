/* ==========================================================================
   App shell: routing, page transitions, home view, interactions.
   Routes are plain hashes (#jsw, #about) so every view is linkable.
   ========================================================================== */
import { SITE, PROJECTS, CAPABILITIES, STRENGTHS, HATS, EXPERIENCE, EDUCATION, RECOGNITION, TICKER } from './data.js';
import { CASES, JSW_SCREENS, MD_APPS } from './cases.js';
import { img, lines, esc, logo } from './ui.js';

/** Endless logo ticker. The track is rendered twice; the copy is hidden from assistive tech. */
function ticker() {
  const run = (copy) => TICKER.map(g => `<li class="ticker__group"${copy ? ' aria-hidden="true"' : ''}><span class="ticker__label label">${g.label}</span>${g.items.map(n => `<span class="ticker__item">${logo(n, { decorative: copy })}</span>`).join('')}</li>`).join('');
  return `<section class="ticker" data-tone="base" aria-label="Organisations I have worked with and studied at">
    <div class="ticker__viewport"><ul class="ticker__track">${run(false)}${run(true)}</ul></div>
  </section>`;
}

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $('#app');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const HOME_SECTIONS = ['work', 'about', 'experience', 'contact'];
const bySlug = Object.fromEntries(PROJECTS.map(p => [p.slug, p]));
let resumeOK = false;

/* ---------------- Home view ---------------- */
function card(p, cls) {
  let media;
  if (p.slug === 'jsw') {
    media = `<div class="card__media rv-img rv" style="--c-bg:#0B1633"><div class="jsw-cov" aria-hidden="false">
      <div class="jsw-cov__side jsw-cov__side--l">${img('jsw-fit', 'JSW fit evaluation screen', { sizes: '30vw' })}</div>
      <div class="jsw-cov__main">${img('jsw-dash-2', 'JSW institutional accounts dashboard on Salesforce', { sizes: '(max-width:860px) 90vw, 55vw' })}</div>
      <div class="jsw-cov__side jsw-cov__side--r">${img('jsw-bundle', 'JSW cross-business-unit bundle screen', { sizes: '30vw' })}</div>
      <span class="jsw-cov__tag">14 Salesforce screens · SLDS</span>
    </div></div>`;
  } else if (p.slug === 'total-environment') {
    media = `<div class="card__media card__media--inset rv-img rv" style="--c-bg:linear-gradient(160deg,#FDDABF,#FABB80 55%,#EF5831);--inset:7%">${img('te-cover', 'Total Environment research deck cover', { sizes: '(max-width:860px) 100vw, 66vw' })}</div>`;
  } else if (p.slug === 'mother-dairy') {
    const apps = [['Gate Entry', 'Mobile'], ['DigiChal', 'Mobile'], ['Vendor Stocking', 'Web'], ['IT Asset Acquisition', 'Web'], ['Warehouse Store', 'Mobile & web'], ['3P Process Flow', 'Plant']];
    media = `<div class="card__media rv-img rv" style="--c-bg:#1D4EAE"><div class="md-cov">
      <div class="md-cov__top"><span class="md-cov__big">06</span><span class="md-cov__k">enterprise applications,<br>mapped into structured journeys</span></div>
      <ol class="md-cov__flow">${apps.map(([n, t]) => `<li><i aria-hidden="true"></i><b>${n}</b><span class="t">${t}</span></li>`).join('')}</ol>
    </div></div>`;
  } else {
    media = `<div class="card__media rv-img rv" style="--c-bg:${p.cardBg}">${img(p.image, `${p.name} project image`, { sizes: '(max-width:860px) 100vw, 50vw' })}</div>`;
  }
  return `<article class="${cls}">
    <a class="card" href="#${p.slug}" aria-label="${esc(p.name)}: ${esc(p.short)}. View case study">
      <div class="card__vis">${media}<span class="card__view" aria-hidden="true">View case study <span>→</span></span></div>
      <div class="card__meta">
        <span class="card__num">${p.num}</span>
        <h3 class="card__title">${p.name}</h3>
        <p class="card__desc">${p.card}</p>
        <p class="card__tags"><span class="role">${p.role}</span>${p.disciplines.map(d => `<span>${d}</span>`).join('')}</p>
      </div>
    </a>
  </article>`;
}

function resumeBtn(cls = 'btn btn--ghost', label = 'Download résumé') {
  return resumeOK
    ? `<a class="${cls}" href="${SITE.resume}" download="Bhavna_Dehadray_Resume.pdf">${label} <span class="arr">↓</span></a>`
    : `<a class="${cls}" href="mailto:${SITE.email}?subject=${encodeURIComponent('Résumé request')}">Request résumé <span class="arr">→</span></a>`;
}

function home() {
  const cls = ['w-1', 'w-2', 'w-3', 'w-4', 'w-5'];
  const linked = SITE.linkedin;
  return `
  <section class="hero wrap" data-tone="base" aria-labelledby="hero-name">
    <div class="grid hero__top">
      <p class="hero__kicker label"><span class="label--accent">Portfolio</span><span aria-hidden="true">·</span><a href="#work">Selected work</a><span aria-hidden="true">·</span>${resumeOK ? `<a href="${SITE.resume}" download="Bhavna_Dehadray_Resume.pdf">Résumé ↓</a>` : `<a href="mailto:${SITE.email}?subject=${encodeURIComponent('Résumé request')}">Résumé</a>`}</p>
      <ul class="hero__disc rv" style="--d:.5s" aria-label="Disciplines"><li>Experience strategy</li><li>Research & competitive analysis</li><li>Systems thinking</li><li>Journey mapping</li><li>Enterprise workflows</li><li>Interaction & UI</li><li>Workshop facilitation</li></ul>
    </div>
    <h1 class="hero__name display" id="hero-name">
      <span class="row"><span class="rv-line" style="--d:.1s"><span>Bhavna</span></span></span>
      <span class="row row--2"><span class="rv-line" style="--d:.2s"><span>Dehadray<em>.</em></span></span></span>
    </h1>
    <div class="grid hero__bottom">
      <div class="hero__role rv" style="--d:.45s"><span class="label">Practice</span><span class="display">Experience<br>Designer</span></div>
      <p class="hero__intro rv" style="--d:.55s">I work where research, strategy and craft meet, making complex systems legible. <strong>Six enterprise applications, fourteen brands, three business units, one city’s hidden corners:</strong> I find the structure, then give it a form people can use.</p>
      <nav class="hero__actions rv" style="--d:.65s" aria-label="Quick links">
        <a href="#work" class="link-u"><span class="idx">01</span> Explore my work ↓</a>
        <a href="#about" class="link-u"><span class="idx">02</span> About me</a>
        ${resumeOK ? `<a href="${SITE.resume}" download="Bhavna_Dehadray_Resume.pdf" class="link-u"><span class="idx">03</span> Download résumé ↓</a>` : `<a href="mailto:${SITE.email}?subject=${encodeURIComponent('Résumé request')}" class="link-u"><span class="idx">03</span> Request résumé →</a>`}
      </nav>
    </div>
    <nav class="hero__index rv" style="--d:.75s" aria-label="Case studies index"><ol>${PROJECTS.map(p => `<li><a href="#${p.slug}"><span class="n">${p.num}</span><b>${p.name}</b><span class="d">${p.short}</span></a></li>`).join('')}</ol></nav>
  </section>

  ${ticker()}

  <section class="work wrap" id="work" data-tone="base" aria-labelledby="work-h">
    <div class="grid s-intro">
      <p class="s-intro__label label">(01) Selected work</p>
      <h2 class="s-intro__title display h-d2" id="work-h">${lines('Things|I’ve made')}</h2>
      <p class="s-intro__aside rv">Four client projects, from brand research to enterprise software, and one systems design project from NID. Each case study separates what I owned from what I did with a team.</p>
    </div>
    <div class="grid work__grid">${PROJECTS.map((p, i) => card(p, cls[i])).join('')}</div>
  </section>

  <section class="section" id="about" data-tone="base" aria-labelledby="about-h"><div class="wrap">
    <div class="grid s-intro" style="margin-bottom:clamp(40px,5vw,72px)"><p class="s-intro__label label">(02) About</p></div>
    <div class="grid about__grid">
      <div class="about__photo rv"><figure class="rv-img rv">${img('portrait', 'Portrait of Bhavna Dehadray', { sizes: '(max-width:860px) 70vw, 30vw' })}</figure><p class="mono muted" style="margin-top:12px">Bhavna Dehadray · Experience Designer</p></div>
      <div class="about__body">
        <h2 class="display display--soft h-d3" id="about-h">${lines('Research-led,|systems-minded,|people-first.')}</h2>
        <p class="lead rv">I’m an experience designer, trained in industrial product design at Symbiosis (B.Des) and in toy and game design at the National Institute of Design (M.Des).</p>
        <p class="rv">My work usually starts in the messy middle: client recordings, sprawling competitor sites, an entire tourism ecosystem pinned to a wall. I map who is involved, what’s broken and where the leverage is, then turn that understanding into something concrete. That has meant a Salesforce workflow for institutional sales, a research deck built for a live client room, and a booklet that folds into a city map.</p>
        <p class="rv">I care about the step most projects rush: making research legible enough that a team can act on it. Alongside project work I design and facilitate game-based workshops, from building games with students to a hands-on Lego game for senior clients.</p>
        <dl class="about__facts rv">
          <div class="fact"><dt class="label">Education</dt><dd>M.Des, National Institute of Design</dd></div>
          <div class="fact"><dt class="label">&nbsp;</dt><dd>B.Des, Symbiosis</dd></div>
          <div class="fact"><dt class="label">Focus</dt><dd>Experience strategy · UX · product design</dd></div>
          <div class="fact"><dt class="label">Works across</dt><dd>Enterprise, brand & research, systems</dd></div>
        </dl>
        <div class="caps">${CAPABILITIES.map((c, i) => `<div class="cap rv" style="--d:${(i % 2) * 0.08}s"><span class="n">0${i + 1}</span><h3>${c.h}</h3><p>${c.p}</p></div>`).join('')}</div>
        <div class="strengths rv" aria-label="Strengths">${STRENGTHS.map(s => `<span class="chip">${s}</span>`).join('')}</div>
      </div>
    </div>
  </div></section>

  <section class="exp section" id="experience" data-tone="base" aria-labelledby="exp-h">
    <div class="wrap">
      <div class="grid s-intro">
        <p class="s-intro__label label">(03) Experience</p>
        <h2 class="s-intro__title display h-d2" id="exp-h">${lines('Many hats,|one practice')}</h2>
        <p class="s-intro__aside rv">Five roles across experience strategy, product, learning and play: from enterprise journeys to a board game on Amazon’s bestseller list.</p>
      </div>
      <ol class="hats rv" aria-label="Disciplines">${HATS.map(h => `<li class="hat"><span class="hat__k">${h.k}</span><h3>${h.h}</h3><p>${h.p}</p><span class="hat__at">${h.roles}</span></li>`).join('')}</ol>
      <ol class="xp">
        ${EXPERIENCE.map(e => `<li class="xp__row rv">
          <div class="xp__when"><span class="mono">${e.period}</span><span class="hat-tag">${e.hat}</span></div>
          <div class="xp__who"><h3>${e.org}</h3><p>${e.role}</p><span class="xp__place">${e.place}</span></div>
          <div class="xp__what">
            ${e.highlight ? `<p class="xp__hl"><span aria-hidden="true">★</span> ${e.highlight}</p>` : ''}
            <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
            ${e.note ? `<p class="xp__note">${e.note}</p>` : ''}
            ${e.work ? `<div class="xp__work"><span class="label">Selected client work</span><span class="xp__links">${e.work.map(([n, s]) => `<a href="#${s}">${n} <span aria-hidden="true">→</span></a>`).join('')}</span></div>` : ''}
          </div>
        </li>`).join('')}
      </ol>
      <div class="edu">
        <div class="edu__col">
          <p class="label">Education</p>
          ${EDUCATION.map(e => `<div class="edu__item rv"><span class="mono">${e.period}</span><h3>${e.title}</h3><p>${e.field}</p><p class="muted">${e.school}</p>${e.slug ? `<a class="link-u" href="#${e.slug}">${e.link} →</a>` : ''}</div>`).join('')}
        </div>
        <div class="edu__col">
          <p class="label">Recognition</p>
          <ul class="recog rv">${RECOGNITION.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  </section>

  <section class="contact section" id="contact" data-tone="dark" aria-labelledby="contact-h">
    <div class="wrap">
      <p class="label">(04) Contact</p>
      <h2 class="contact__big display" id="contact-h"><a href="mailto:${SITE.email}">${lines('Let’s|talk.')}</a></h2>
      <div class="contact__rows">
        <div class="c-row rv"><span class="label">Email</span><span class="val">${SITE.email}</span><span class="act"><button type="button" class="btn btn--ghost" data-copy="${SITE.email}">Copy</button><a class="btn btn--ghost" href="mailto:${SITE.email}">Write <span class="arr">→</span></a></span></div>
        <div class="c-row rv"><span class="label">LinkedIn</span><span class="val">${linked ? linked.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : 'Bhavna Dehadray'}</span><span class="act">${linked ? `<a class="btn btn--ghost" href="${linked}" target="_blank" rel="noopener">Open profile <span class="arr">↗</span></a>` : `<a class="btn btn--ghost" href="https://www.linkedin.com/search/results/people/?keywords=Bhavna%20Dehadray" target="_blank" rel="noopener">Find on LinkedIn <span class="arr">↗</span></a>`}</span></div>
        <div class="c-row rv"><span class="label">Résumé</span><span class="val">Experience, education & skills</span><span class="act">${resumeBtn()}</span></div>
      </div>
      <footer class="footer"><span>© ${new Date().getFullYear()} Bhavna Dehadray · Experience Designer</span><span>Experience strategy · UX · Product design</span><a href="#top" class="link-u" data-top>Back to top ↑</a></footer>
    </div>
  </section>`;
}

/* ---------------- Case view ---------------- */
function caseView(slug) {
  const p = bySlug[slug];
  const i = PROJECTS.indexOf(p);
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return `<div class="case ${p.theme}">
    <div class="progress" aria-hidden="true"></div>
    ${CASES[slug](p)}
    <a class="next ${next.theme}" href="#${next.slug}" data-tone="dark">
      <div class="wrap"><span class="label">Next case study · ${next.num}</span>
      <p class="next__title display">${next.name} →</p>
      <div class="next__row"><span>${next.short}</span><span class="label">${next.role}</span></div></div>
    </a>
    <section class="contact" style="padding-top:clamp(64px,8vw,110px)" data-tone="dark"><div class="wrap">
      <div class="contact__rows">
        <div class="c-row"><span class="label">Get in touch</span><span class="val">${SITE.email}</span><span class="act"><button type="button" class="btn btn--ghost" data-copy="${SITE.email}">Copy</button><a class="btn btn--ghost" href="#work">All work <span class="arr">→</span></a></span></div>
      </div>
      <footer class="footer" style="padding-top:40px"><span>© ${new Date().getFullYear()} Bhavna Dehadray</span><a href="#top" class="link-u" data-top>Back to top ↑</a></footer>
    </div></section>
  </div>`;
}

/* ---------------- Router + transitions ---------------- */
const META = {
  home: ['Bhavna Dehadray: Experience Designer', 'Experience designer working across research, UX strategy, systems thinking and enterprise product design. Selected case studies: Total Environment, EXL, JSW, Mother Dairy and Responsible Tourism.'],
};
let current = null;

function parse(target) {
  let h = target;
  if (h == null) { try { h = decodeURIComponent(location.hash.replace(/^#/, '')); } catch { h = ''; } }
  if (bySlug[h]) return { view: h };
  if (HOME_SECTIONS.includes(h)) return { view: 'home', anchor: h };
  return { view: 'home', anchor: h === 'top' ? 'top' : null };
}

let busy = false, queued = null;
async function route(first = false, target = null) {
  if (busy) { queued = target ?? queued ?? ''; return; }
  busy = true;
  try { await doRoute(first, target); }
  finally {
    busy = false;
    const c = $('.curtain'); c.classList.remove('is-in', 'is-out');
    if (queued !== null) { const q = queued; queued = null; route(false, q); }
  }
}
/* Navigate without depending on the browser following the link (works inside previews that block navigation). */
function go(h) {
  try { if (location.hash !== '#' + h) history.pushState(null, '', '#' + h); } catch { /* sandboxed viewers */ }
  if (h === 'top') { window.scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' }); if (current === 'home') return; }
  route(false, h);
}
async function doRoute(first, target) {
  const { view, anchor } = parse(target);
  if (view === current) { if (anchor) scrollToAnchor(anchor); else if (view !== 'home') window.scrollTo(0, 0); return; }
  const animate = !first && !reduce.matches;
  const curtain = $('.curtain');
  if (animate) {
    $('span', curtain).textContent = view === 'home' ? 'Bhavna Dehadray' : bySlug[view].name;
    curtain.classList.remove('is-out'); void curtain.offsetWidth; curtain.classList.add('is-in');
    await wait(620);
  }
  render(view);
  current = view;
  if (anchor && anchor !== 'top') { requestAnimationFrame(() => scrollToAnchor(anchor, true)); } else { window.scrollTo(0, 0); }
  if (animate) { curtain.classList.add('is-out'); await wait(720); curtain.classList.remove('is-in', 'is-out'); }
  $('#main').focus({ preventScroll: true });
}

function render(view) {
  document.body.dataset.view = view;
  app.innerHTML = view === 'home' ? home() : caseView(view);
  const p = bySlug[view];
  const [t, d] = p ? [`${p.name}: ${p.short} · Bhavna Dehadray`, `${p.card} Case study by Bhavna Dehadray, Experience Designer.`] : META.home;
  document.title = t;
  $('meta[name="description"]').setAttribute('content', d);
  $('meta[property="og:title"]').setAttribute('content', t);
  $('meta[property="og:description"]').setAttribute('content', d);
  // nav state
  $$('.nav a[data-sec]').forEach(a => a.removeAttribute('aria-current'));
  if (p) $('.nav a[data-sec="work"]').setAttribute('aria-current', 'true');
  setTheme(p ? p.theme : '');
  bind();
}

function scrollToAnchor(id, instant = false) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: instant || reduce.matches ? 'auto' : 'smooth', block: 'start' });
}
const wait = ms => new Promise(r => setTimeout(r, ms));

function setTheme(theme) {
  document.body.className = theme ? `case-body ${theme}` : '';
  document.body.style.background = theme ? 'var(--c-bg)' : '';
}

/* ---------------- Interactions ---------------- */
let io, sio;
function bind() {
  // Reveal on scroll
  io && io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  $$('.rv, .rv-line, .ring, [data-matrix]', app).forEach(el => io.observe(el));
  $$('h1 .rv-line, .hero .rv', app).forEach(el => setTimeout(() => el.classList.add('in'), 60));

  // Header tone follows the section beneath it
  sio && sio.disconnect();
  const tones = $$('[data-tone]', app);
  sio = new IntersectionObserver(() => updateTone(tones), { rootMargin: `0px 0px -${innerHeight - 40}px 0px`, threshold: [0, 1] });
  tones.forEach(t => sio.observe(t));
  updateTone(tones);

  $$('[data-copy]', app).forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; } catch { b.textContent = 'Select & copy'; }
    setTimeout(() => (b.textContent = 'Copy'), 1800);
  }));

  bindStepper(); bindApps(); bindBoard(); bindStrip();
}

function updateTone(tones) {
  const y = 36;
  const hit = tones.filter(t => { const r = t.getBoundingClientRect(); return r.top <= y && r.bottom > y; }).pop();
  const tone = hit ? hit.dataset.tone : 'base';
  const h = $('.header');
  const dark = tone === 'dark' || (tone === 'alt' && isDarkAlt()) || (tone === 'base' && isDarkBase());
  h.style.setProperty('--h-fg', dark ? '#F7F5EF' : '');
  h.style.setProperty('--h-muted', dark ? '#A39E95' : '');
  let bg = hit ? getComputedStyle(hit).backgroundColor : '';
  if (!bg || /rgba\(0, 0, 0, 0\)|transparent/.test(bg)) bg = getComputedStyle(document.body).backgroundColor;
  h.style.setProperty('--h-bg', bg);
}
const isDarkBase = () => document.body.classList.contains('t-exl');
const isDarkAlt = () => ['t-te', 't-jsw', 't-md', 't-rt'].some(c => document.body.classList.contains(c));

/* Generic tab-list keyboard support (arrow keys, Home/End). */
function tabKeys(list, onSelect) {
  const tabs = $$('[role="tab"]', list);
  list.addEventListener('keydown', e => {
    const i = tabs.indexOf(document.activeElement); if (i < 0) return;
    let n = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (n === undefined) return; e.preventDefault();
    n = (n + tabs.length) % tabs.length; tabs[n].focus(); onSelect(n);
  });
  tabs.forEach((t, i) => t.addEventListener('click', () => onSelect(i)));
  return tabs;
}
function swapImg(el, name, alt) {
  el.classList.add('is-swapping');
  const pre = new Image(); pre.src = `assets/img/${name}.webp`;
  const go = () => { el.removeAttribute('srcset'); el.src = pre.src; el.alt = alt; requestAnimationFrame(() => el.classList.remove('is-swapping')); };
  pre.decode ? pre.decode().then(go, go) : (pre.onload = go);
}

function bindStepper() {
  const root = $('[data-stepper]', app); if (!root) return;
  const list = $('.stepper__list', root), frame = $('.stepper__screen .fig__frame', root), im = $('img', frame);
  let cur = 0;
  const sel = i => {
    cur = i; const s = JSW_SCREENS[i];
    tabs.forEach((t, k) => { t.setAttribute('aria-selected', k === i); t.tabIndex = k === i ? 0 : -1; });
    swapImg(im, s[0], s[2]); frame.dataset.zoom = s[0]; frame.dataset.cap = `${s[2]}: ${s[3]}`;
    $('[data-cap-title]', root).textContent = s[2] + '.'; $('[data-cap-text]', root).textContent = s[3];
    $('.stepper__bar i', root).style.width = `${((i + 1) / JSW_SCREENS.length) * 100}%`;
  };
  const tabs = tabKeys(list, sel);
  $('[data-prev]', root).addEventListener('click', () => sel((cur - 1 + JSW_SCREENS.length) % JSW_SCREENS.length));
  $('[data-next]', root).addEventListener('click', () => sel((cur + 1) % JSW_SCREENS.length));
}

function bindApps() {
  const root = $('[data-apps]', app); if (!root) return;
  const panels = $$('.jx-panel', root);
  const tabs = tabKeys($('.apps__tabs', root), i => {
    tabs.forEach((t, k) => { t.setAttribute('aria-selected', k === i); t.tabIndex = k === i ? 0 : -1; });
    panels.forEach((p, k) => { p.hidden = k !== i; });
    if (innerWidth < 1100) { const r = root.querySelector('.jx-panels').getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * .6) root.querySelector('.jx-panels').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' }); }
  });
}

function bindBoard() {
  const root = $('[data-board]', app); if (!root) return;
  const M = { Nvidia: [1, 1, 0, 0], Amazon: [1, 1, 0, 0], Airbnb: [1, 1, 0, 0], Sephora: [1, 0, 0, 0], Globant: [1, 0, 0, 0], IBM: [1, 0, 1, 0], AWS: [1, 0, 1, 0], Tesla: [1, 0, 1, 0], HubSpot: [1, 0, 1, 0], Concentrix: [0, 0, 1, 1] };
  const btns = $$('[data-lens]', root);
  btns.forEach(b => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-pressed') !== 'true'; const l = +b.dataset.lens;
    btns.forEach(x => x.setAttribute('aria-pressed', 'false')); b.setAttribute('aria-pressed', on);
    let n = 0;
    $$('[data-brand]', root).forEach(c => { const hit = on && M[c.dataset.brand]?.[l]; c.classList.toggle('is-hit', !!hit); if (hit) n++; });
    $('[data-board-count]', root).textContent = on ? `${n} with ${b.firstElementChild.textContent.toLowerCase()}` : '14';
  }));
}

function bindStrip() {
  const s = $('[data-strip]', app); if (!s) return;
  const by = d => s.scrollBy({ left: d * s.clientWidth * 0.7, behavior: reduce.matches ? 'auto' : 'smooth' });
  $('[data-strip-prev]', app).addEventListener('click', () => by(-1));
  $('[data-strip-next]', app).addEventListener('click', () => by(1));
  let x0, l0, moved = false, down = false;
  s.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; x0 = e.clientX; l0 = s.scrollLeft; });
  addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - x0; if (Math.abs(dx) > 4) { moved = true; s.classList.add('is-drag'); } s.scrollLeft = l0 - dx; });
  addEventListener('pointerup', () => { down = false; s.classList.remove('is-drag'); });
  s.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
}

/* ---------------- Lightbox (delegated) ---------------- */
const lb = { el: null, items: [], i: 0, last: null };
function openLB(btn) {
  const g = btn.dataset.group;
  lb.items = $$(`[data-zoom][data-group="${g}"]`, app).map(b => ({ n: b.dataset.zoom, c: b.dataset.cap || $('img', b)?.alt || '' }));
  lb.i = Math.max(0, lb.items.findIndex(x => x.n === btn.dataset.zoom));
  lb.last = btn; showLB();
  lb.el.classList.add('is-open'); lb.el.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
  $('[data-lb-close]', lb.el).focus();
}
function showLB() {
  const it = lb.items[lb.i]; const im = $('img', lb.el);
  im.src = `assets/img/${it.n}.webp`; im.alt = it.c;
  $('[data-lb-cap]', lb.el).textContent = it.c;
  $('[data-lb-count]', lb.el).textContent = `${String(lb.i + 1).padStart(2, '0')} / ${String(lb.items.length).padStart(2, '0')}`;
  $('.lb__nav', lb.el).style.visibility = lb.items.length > 1 ? 'visible' : 'hidden';
}
function closeLB() {
  lb.el.classList.remove('is-open'); lb.el.setAttribute('aria-hidden', 'true');
  document.documentElement.style.overflow = ''; lb.last && lb.last.focus({ preventScroll: true });
}
function initLB() {
  lb.el = $('.lb');
  app.addEventListener('click', e => { const b = e.target.closest('[data-zoom]'); if (b) { e.preventDefault(); openLB(b); } });
  $('[data-lb-close]', lb.el).addEventListener('click', closeLB);
  $('[data-lb-prev]', lb.el).addEventListener('click', () => { lb.i = (lb.i - 1 + lb.items.length) % lb.items.length; showLB(); });
  $('[data-lb-next]', lb.el).addEventListener('click', () => { lb.i = (lb.i + 1) % lb.items.length; showLB(); });
  lb.el.addEventListener('click', e => { if (e.target.classList.contains('lb__stage')) closeLB(); });
  addEventListener('keydown', e => {
    if (!lb.el.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowRight') $('[data-lb-next]', lb.el).click();
    if (e.key === 'ArrowLeft') $('[data-lb-prev]', lb.el).click();
    if (e.key === 'Tab') { // trap focus
      const f = $$('button', lb.el); const i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
}

/* ---------------- Global chrome ---------------- */
function initChrome() {
  const header = $('.header'); let lastY = 0;
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle('is-scrolled', y > 20);
    header.classList.toggle('is-hidden', y > 400 && y > lastY && !$('.mobile-nav').classList.contains('is-open'));
    lastY = y;
    const pr = $('.progress'); if (pr) { const h = document.documentElement.scrollHeight - innerHeight; pr.style.transform = `scaleX(${h > 0 ? y / h : 0})`; }
    if (current === 'home') {
      const secs = HOME_SECTIONS.map(id => document.getElementById(id)).filter(Boolean);
      const active = secs.filter(s => s.getBoundingClientRect().top < innerHeight * 0.4).pop();
      $$('.nav a[data-sec]').forEach(a => a.toggleAttribute('aria-current', active && a.dataset.sec === active.id));
      $$('.nav a[aria-current]').forEach(a => a.setAttribute('aria-current', 'true'));
    }
    updateTone($$('[data-tone]', app));
  };
  addEventListener('scroll', () => requestAnimationFrame(onScroll), { passive: true });

  const mnav = $('.mobile-nav'), mbtn = $('.menu-btn');
  const setMenu = open => { mnav.classList.toggle('is-open', open); mbtn.setAttribute('aria-expanded', open); mnav.setAttribute('aria-hidden', !open); document.documentElement.style.overflow = open ? 'hidden' : ''; if (open) $('a', mnav).focus(); };
  mbtn.addEventListener('click', () => setMenu(true));
  $('.mobile-nav__close').addEventListener('click', () => { setMenu(false); mbtn.focus(); });
  $$('a', mnav).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && mnav.classList.contains('is-open')) { setMenu(false); mbtn.focus(); } });

  // All in-site links are handled here, so pages open even where the host blocks link navigation
  document.addEventListener('click', e => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    e.preventDefault();
    go(a.getAttribute('href').slice(1));
  });
  addEventListener('popstate', () => route());

}

async function checkResume() {
  if (SITE.resume.startsWith('data:')) { resumeOK = true; return applyResume(); }
  try { if (location.protocol === 'file:') throw 0; const ctl = new AbortController(); setTimeout(() => ctl.abort(), 2500); const r = await fetch(SITE.resume, { method: 'HEAD', signal: ctl.signal }); resumeOK = r.ok && !/text\/html/.test(r.headers.get('content-type') || ''); } catch { resumeOK = false; }
  applyResume();
}

function applyResume() {
  $$('[data-resume]').forEach(a => {
    if (resumeOK) { a.href = SITE.resume; a.setAttribute('download', 'Bhavna_Dehadray_Resume.pdf'); a.textContent = 'Résumé ↓'; }
    else { a.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Résumé request')}`; a.textContent = 'Request résumé'; }
  });
}

/* ---------------- Floating contact button ---------------- */
function initFab() {
  const root = $('[data-fab]'); if (!root) return;
  const btn = $('.fab__toggle', root), panel = $('.fab__panel', root);
  const em = $('[data-fab-email]', root), ph = $('[data-fab-phone]', root);
  em.textContent = SITE.email; em.href = `mailto:${SITE.email}`;
  ph.textContent = SITE.phone; ph.href = `tel:${SITE.phoneHref}`;
  const touch = matchMedia('(pointer: coarse)').matches;
  const msg = $('[data-fab-msg]', root);
  const say = t => { msg.textContent = t; clearTimeout(say.t); say.t = setTimeout(() => (msg.textContent = ''), 4000); };
  const copy = async v => { try { await navigator.clipboard.writeText(v); return true; } catch { return false; } };
  const mail = $('[data-fab-mail]', root), call = $('[data-fab-call]', root);
  // Phones: native mail app. Laptops: Gmail compose in a new tab (works without a desktop mail app).
  mail.href = touch ? `mailto:${SITE.email}` : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}`;
  if (touch) mail.removeAttribute('target');
  mail.addEventListener('click', async () => { if (await copy(SITE.email)) say(touch ? 'Opening your mail app. Email address copied too.' : 'Opening Gmail. Email address copied too, if you use another mail app.'); });
  // Phones: dialler. Laptops can’t place calls, so copy the number instead.
  call.href = `tel:${SITE.phoneHref}`;
  // Laptops can’t place calls, and the phone row already has Copy, so show one action only.
  if (!touch) { call.remove(); root.querySelector('.fab__acts').classList.add('fab__acts--one'); }
  const set = open => { panel.hidden = !open; btn.setAttribute('aria-expanded', open); root.classList.toggle('is-open', open); };
  btn.addEventListener('click', () => set(panel.hidden));
  document.addEventListener('click', e => { if (!root.contains(e.target)) set(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) { set(false); btn.focus(); } });
  $$('[data-fab-copy]', root).forEach(b => b.addEventListener('click', async () => {
    const v = b.dataset.fabCopy === 'email' ? SITE.email : SITE.phone;
    try { await navigator.clipboard.writeText(v); b.textContent = 'Copied'; } catch { b.textContent = 'Select it'; }
    setTimeout(() => (b.textContent = 'Copy'), 1600);
  }));
}

/* ---------------- Boot ---------------- */
(async function boot() {
  initChrome(); initLB(); initFab();
  checkResume().then(() => { if (resumeOK && current === 'home') render('home'); });
  addEventListener('hashchange', () => { const h = location.hash.slice(1); if (parse(h).view !== current || parse(h).anchor) route(false, h); });
  await route(true);
  document.documentElement.classList.add('ready');
})();
