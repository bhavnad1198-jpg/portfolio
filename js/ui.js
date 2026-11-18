/* Reusable view components (pure functions → HTML strings). */
import { DIMS } from './images.js';
import { LOGOS, PROJECT_LOGOS } from './data.js';

/** Organisation logo. `scale` multiplies the logo's optical height. */
export function logo(name, { cls = '', scale = 1, decorative = false } = {}) {
  const l = LOGOS[name];
  if (!l) return '';
  const h = Math.round(l.size * scale);
  const w = Math.round(h * l.w / l.h);
  return `<img class="logo${l.mono ? ' logo--mono' : ''}${cls ? ` ${cls}` : ''}" src="assets/logos/${l.src}" width="${w}" height="${h}" style="--lh:${h}px" alt="${decorative ? '' : esc(name)}" loading="lazy" decoding="async">`;
}

/** Client / studio logos at the top of a case study. */
function brandRow(slug) {
  const items = PROJECT_LOGOS[slug];
  if (!items) return '';
  return `<ul class="c-brands rv" aria-label="Organisations">${items.map(([cap, name]) =>
    `<li class="c-brand"><span class="label">${cap}</span><span class="c-brand__card">${logo(name)}</span></li>`).join('')}</ul>`;
}

export const esc = (s = '') => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const BASE = 'assets/img/';

/** Responsive, lazy image with intrinsic size (prevents layout shift). */
export function img(name, alt, { cls = '', sizes = '100vw', eager = false, style = '' } = {}) {
  const [w, h, small] = DIMS[name] || [1600, 1000, 0];
  const src = `${BASE}${name}.webp`;
  const srcset = small ? ` srcset="${BASE}${name}-900.webp 900w, ${src} ${w}w" sizes="${sizes}"` : '';
  return `<img src="${src}"${srcset} width="${w}" height="${h}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''}>`;
}

/** Zoomable figure. Images sharing a `group` page together in the lightbox. */
export function fig(name, alt, caption = '', { group = 'g', cls = '', sizes = '(max-width: 860px) 100vw, 60vw' } = {}) {
  return `<figure class="fig rv ${cls}">
    <button class="fig__frame" type="button" data-zoom="${name}" data-group="${group}" data-cap="${esc(caption.replace(/<[^>]+>/g, ''))}" aria-label="Enlarge: ${esc(alt)}">${img(name, alt, { sizes })}</button>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>`;
}

/** Split a headline into masked lines: "Line one|Line two". */
export const lines = (t, d = 0) => t.split('|').map((l, i) => `<span class="rv-line" style="--d:${(d + i * 0.08).toFixed(2)}s"><span>${l}</span></span>`).join('');

/** Shared section header: label column + headline + aside. */
export function secHead(k, label, title, aside = '') {
  return `<div class="grid c-sec__head">
    <div class="c-sec__label"><p class="label"><span class="k">${k}</span><span>${label}</span></p></div>
    <h2 class="c-sec__title display display--soft rv">${lines(title)}</h2>
    ${aside ? `<p class="c-sec__aside rv" style="--d:.15s">${aside}</p>` : ''}
  </div>`;
}

export const sec = (inner, { alt = false, id = '', cls = '' } = {}) =>
  `<section class="c-sec ${alt ? 'c-sec--alt' : ''} ${cls}" ${id ? `id="${id}"` : ''} data-tone="${alt ? 'alt' : 'base'}"><div class="wrap">${inner}</div></section>`;

export const tiles = (items, cols = 3, dark = -1) =>
  `<div class="tiles rv" style="--cols:${cols}">${items.map((t, i) => `<div class="tile ${i === dark ? 'tile--dark' : ''}">${t.k ? `<span class="k">${t.k}</span>` : ''}<h3>${t.h}</h3><p>${t.p}</p></div>`).join('')}</div>`;

export const steps = items =>
  `<ol class="steps rv">${items.map((s, i) => `<li class="step"><span class="n">${String(i + 1).padStart(2, '0')}</span><div><h3>${s.h}</h3><p>${s.p}</p></div></li>`).join('')}</ol>`;

export const chips = arr => `<div class="chips">${arr.map(c => `<span class="chip">${c}</span>`).join('')}</div>`;

/** Shared case-study hero + metadata + ownership. */
export function caseHero(p, { label, title, sum, meta, media, own, badge = '', titleCls = '' }) {
  return `<header class="c-hero" data-tone="base">
    <div class="wrap">
      <nav class="c-hero__crumbs label" aria-label="Breadcrumb"><a href="#work">Work</a><span aria-hidden="true">/</span><span>${p.num}: ${p.name}</span></nav>
      ${brandRow(p.slug)}
      <div class="grid c-hero__grid">
        <div class="c-hero__title">
          <span class="label label--accent">${label}</span>
          ${badge}
          <h1 class="display ${titleCls}">${lines(title)}</h1>
        </div>
        <p class="c-hero__sum rv" style="--d:.25s">${sum}</p>
      </div>
      ${media ? `<div class="c-hero__media rv" style="--d:.3s">${media}</div>` : ''}
      <dl class="c-meta rv">${meta.map(([dt, dd]) => `<div><dt class="label">${dt}</dt><dd>${dd}</dd></div>`).join('')}</dl>
      ${own ? ownership(own) : ''}
    </div>
  </header>`;
}

function ownership(own) {
  return `<div class="own rv">
    <div class="own__label"><p class="label">Contribution</p><p class="muted" style="font-size:.9rem;max-width:26ch;margin-top:8px">What I owned, what I worked on with others, and the context around it.</p></div>
    ${own.map(c => `<div class="own__col"><h3>${c.h}</h3><ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}
  </div>`;
}

export function reflection(k, title, outcomes, learnings, { learnLabel = 'What I learned', alt = true } = {}) {
  return sec(`${secHead(k, 'Reflection', title)}
    <div class="grid"><div class="c-body" style="grid-column:4/-1">
      <div class="two-col rv">
        <div><h3 class="label label--accent">Outcomes</h3><ul class="bar-list">${outcomes.map(o => `<li>${o}</li>`).join('')}</ul></div>
        <div><h3 class="label label--accent">${learnLabel}</h3><ul class="line-list">${learnings.map(l => `<li>${typeof l === 'string' ? l : `<b>${l.h}</b><span>${l.p}</span>`}</li>`).join('')}</ul></div>
      </div>
    </div></div>`, { alt });
}
