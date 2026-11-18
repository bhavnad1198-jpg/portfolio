/* Case studies: a shared framework (hero → contribution → numbered
   sections → reflection) with project-specific components. */
import { MD_JOURNEYS, journeyHTML } from './journeys.js';
import { img, fig, lines, secHead, sec, tiles, steps, chips, caseHero, reflection } from './ui.js';

/* ───────────────────────────── 01 TOTAL ENVIRONMENT ───────────────────────────── */
function totalEnvironment(p) {
  const hero = caseHero(p, {
    label: 'Case study 01 · Brand experience',
    title: 'Total|Environment',
    sum: 'Visual design for a brand experience research deck, and a heuristic UX audit of the brand’s website.',
    media: `<div class="te-hero">
      <div class="te-hero__arch">${img('te-arch', 'Terracotta-to-peach gradient with an arch motif and the project palette', { eager: true, sizes: '40vw' })}</div>
      <div class="te-hero__screen">${img('te-cover', 'Deck cover: Total Environment home photography over the signature terracotta gradient', { eager: true, sizes: '70vw' })}</div>
    </div>`,
    meta: [['Role', 'Visual & UX designer'], ['Scope', 'Deck look & feel · UX audit'], ['Delivered', 'A demo-ready client deck'], ['Context', 'Brand experience research run by dentsu'], ['Client', 'Total Environment, real estate']],
    own: [
      { h: 'I owned', items: ['Visual direction for the deck', 'Deck design as a navigable flow', 'Heuristic UX audit of totalenvironment.in'] },
      { h: 'Context', items: ['dentsu ran the brand experience research', 'Research tracks: Mindshare, Proptech, UX audit', 'Deck used live in the client demo'] },
      { h: 'Methods', items: ['Brochure & website study', 'Usability heuristics', 'Lighthouse & accessibility review'] },
    ],
  });

  const brief = sec(`${secHead('01', 'The brief', 'Explore, Buy|and Live', 'How buyers discover, consider and experience a real-estate brand, told across three stages.')}
    <div class="grid"><div class="c-body">
      <p class="lead rv">dentsu ran a brand experience research for Total Environment, a real estate developer, looking at how buyers discover, consider and experience a brand across three stages: Explore, Buy and Live.</p>
      <p class="rv muted">My job was to give that research a form: define how it should look and feel, design it as something a presenter could navigate live with the client, and audit the brand’s own website along the way.</p>
      ${steps([
        { h: 'Visual direction', p: 'Defined the deck’s look and feel, drawing on Total Environment’s physical brochures and websites.' },
        { h: 'Deck design', p: 'Designed the research deck as a navigable flow and made it ready for the client demo.' },
        { h: 'Heuristic UX audit', p: 'Evaluated totalenvironment.in against usability heuristics, performance and accessibility.' },
      ])}
    </div></div>`);

  const palette = [['Cream', '#FFF7EB'], ['Peach', '#FDDABF'], ['Apricot', '#FABB80'], ['Terracotta', '#EF5831'], ['Sage', '#96A092'], ['Plum', '#624349']];
  const visual = sec(`${secHead('02', 'Visual direction', 'Lifting the brand|off the brochure', 'I studied the brand’s physical brochures and websites, then carried their materials, colour and calm into a screen-first deck.')}
    <div class="swatches rv">${palette.map(([n, h], i) => `<div class="sw" style="transition-delay:${i * 60}ms"><div class="sw__c" style="background:${h}"></div><b>${n}</b><span>${h}</span></div>`).join('')}</div>
    <div style="margin-top:clamp(40px,5vw,72px)">${tiles([
      { k: 'Material', h: 'Earthy gradients', p: 'Terracotta, apricot and peach washes echo the brick and earth tones of the homes.' },
      { k: 'Texture', h: 'Tactile grain', p: 'A fine grain texture brings the feel of the printed brochure onto the screen.' },
      { k: 'System', h: 'Colour-coded journey', p: 'Explore, Buy and Live each own a colour, so every chapter reads at a glance.' },
    ])}</div>`);

  const opening = sec(`${secHead('03', 'Look & feel · Opening', 'Opening|the story', 'The first three screens set the tone: warm, quiet and led by the brand’s own imagery.')}
    <div class="g">
      <div class="c-12">${fig('te-cover', 'Deck cover screen', '<b>Cover.</b> Home photography over the signature terracotta gradient.', { group: 'te-open', sizes: '100vw' })}</div>
      <div class="c-6">${fig('te-objective', 'Research objective screen', '<b>Research objective.</b> The three research tracks, set as calm, readable copy on the gradient.', { group: 'te-open' })}</div>
      <div class="c-6 off-1">${fig('te-persona', 'Persona screen for Vikram Mehta', '<b>Persona.</b> Vikram Mehta, the buyer the journey is built around, with expandable profile details.', { group: 'te-open' })}</div>
    </div>`, { alt: true });

  const journey = sec(`${secHead('04', 'Look & feel · Navigation', 'One journey,|three colours', 'Each stage owns a colour, and the navigation carries it through every screen that follows.')}
    <div class="g">
      <div class="c-6">${fig('te-stages', 'Customer journey stages screen', '<b>Customer journey stages.</b> Explore, Buy and Live as colour-coded cards that open each chapter.', { group: 'te-nav' })}</div>
      <div class="c-6">${fig('te-mindshare', 'Mindshare findings screen', '<b>Mindshare findings.</b> Four Explore-stage trends beside the persona, with links out to each industry.', { group: 'te-nav' })}</div>
    </div>`);

  const bench = sec(`${secHead('05', 'Look & feel · Benchmarks', 'Chapters that|change colour', 'Industry benchmarks take on the colour of their journey stage, so the presenter and the client always know where they are.')}
    <div class="g">
      <div class="c-6">${fig('te-bench-1', 'Automotive benchmark, sage', '<b>Sage · Buy · Automotive.</b> Brand cards scroll sideways as a carousel, with a ‘Best in class’ marker on the standout example.', { group: 'te-bench' })}</div>
      <div class="c-6">${fig('te-bench-2', 'Automotive benchmark, second card', '', { group: 'te-bench' })}</div>
      <div class="c-6">${fig('te-bench-3', 'Consumer and lifestyle benchmark, plum', '<b>Plum · Live · Consumer & Lifestyle.</b> The same pattern, recoloured for the Live stage.', { group: 'te-bench' })}</div>
      <div class="c-6">${fig('te-bench-4', 'Consumer and lifestyle benchmark, second card', '', { group: 'te-bench' })}</div>
    </div>`, { alt: true });

  const audit = sec(`${secHead('06', 'UX audit', 'Using usability|heuristics', 'I evaluated totalenvironment.in using usability heuristics, a Lighthouse performance report and an accessibility review.')}
    <div class="g">
      <div class="c-4">${fig('te-audit-overview', 'UX audit overview screen', '<b>Audit overview.</b> Three of 13 websites in scope, each with a distinct role and strong organic traffic.', { group: 'te-audit' })}</div>
      <div class="c-4">${fig('te-audit-findings', 'UX audit findings screen', '<b>Audit findings.</b> Four opportunities, from visual style to friction at high-intent moments.', { group: 'te-audit' })}</div>
      <div class="c-4">${fig('te-audit-sites', 'Sites in scope screen', '<b>Sites in scope.</b> The three websites that together form the main entry points for prospective buyers.', { group: 'te-audit' })}</div>
    </div>
    <div class="grid" style="margin-top:clamp(64px,8vw,120px)"><h3 class="label" style="grid-column:1/span 3;padding-top:.5em">Heuristic evaluation · Homepage</h3>
      <p class="pull rv" style="grid-column:4/-1">Where the homepage <span class="q">breaks expectations</span>, with every issue tied to a named usability principle.</p></div>
    <div class="g" style="margin-top:clamp(40px,5vw,64px)">
      <div class="c-6">${fig('te-heur-nav', 'Heuristic annotations on navigation and labels', '<b>Navigation and labels.</b> Consistency and standards · Match between system and the real world.', { group: 'te-audit' })}</div>
      <div class="c-6">${fig('te-heur-forms', 'Heuristic annotations on forms and calls to action', '<b>Forms and calls to action.</b> User control and freedom · Error prevention · Aesthetic and minimalist design.', { group: 'te-audit' })}</div>
    </div>`);

  const perf = sec(`${secHead('07', 'Performance & accessibility', 'Beyond heuristics:|speed and access')}
    <div class="grid"><div class="c-body" style="grid-column:4/-1">
      <div class="lighthouse rv">
        <div class="ring" style="--v:80" role="img" aria-label="Lighthouse performance score: 80"><span>80</span></div>
        <div><p class="label label--accent">Lighthouse performance</p><p class="lead">A fast first impression, but delayed main content and slow visual settling.</p></div>
      </div>
      <ul class="line-list rv" style="margin-top:48px">
        <li><b>Screen-reader support is incomplete</b><span>Some buttons, links and form fields are difficult to use with assistive technologies.</span></li>
        <li><b>Text and link contrast is insufficient</b><span>Weak contrast in multiple areas reduces readability and scannability.</span></li>
        <li><b>Link text lacks meaning</b><span>Vague labels force users to guess destinations and actions.</span></li>
        <li><b>Page structure is semantically weak</b><span>Reduces clarity for navigation tools and search systems.</span></li>
      </ul>
    </div></div>
    <div class="g" style="margin-top:clamp(48px,6vw,96px)">
      <div class="c-6">${fig('te-perf', 'Performance metrics screen', '<b>Performance metrics.</b> First impression, main content visibility and visual stabilisation.', { group: 'te-perf' })}</div>
      <div class="c-6">${fig('te-a11y', 'Usability and experience gaps screen', '<b>Usability & experience gaps.</b> Screen readers, contrast, link text and semantics.', { group: 'te-perf' })}</div>
    </div>`, { alt: true });

  const refl = reflection('08', 'Outcomes and|what I learned', [
    'A brand-aligned, navigable research deck, ready for the team to present live to the client.',
    'A heuristic audit of totalenvironment.in, with performance and accessibility gaps and four opportunity areas for the Explore journey.',
  ], [
    'Bringing a physical brand to screen means rebuilding its texture, colour and pace on purpose.',
    'Naming the principle behind each issue, and backing it with performance and accessibility data, makes critique easier for a client to act on.',
  ], { alt: false });

  return hero + brief + visual + opening + journey + bench + audit + perf + refl;
}

/* ───────────────────────────── 02 EXL ───────────────────────────── */
const EXL_BRANDS = {
  'Enterprise tech & services': ['Salesforce', 'IBM', 'AWS', 'Nvidia', 'Globant', 'Concentrix', 'HubSpot'],
  'Events & media': ['TechCrunch', 'RSAC Conference'],
  'Consumer mindshare brands': ['Amazon', 'Tesla', 'Airbnb', 'Canva', 'Sephora'],
};
const EXL_MATRIX = [
  ['Nvidia', 1, 1, 0, 0], ['Amazon', 1, 1, 0, 0], ['Airbnb', 1, 1, 0, 0], ['Sephora', 1, 0, 0, 0], ['Globant', 1, 0, 0, 0],
  ['IBM', 1, 0, 1, 0], ['AWS', 1, 0, 1, 0], ['Tesla', 1, 0, 1, 0], ['HubSpot', 1, 0, 1, 0], ['Concentrix', 0, 0, 1, 1],
];
const LENSES = ['Discovery', 'Personalisation', 'Lead collection', 'Credibility'];

function exl(p) {
  const all = Object.values(EXL_BRANDS).flat();
  const hero = caseHero(p, {
    label: 'Case study 02 · Research',
    title: 'EXL',
    sum: 'Direct competitor research that showed EXL where it stands, and set up ideation in a co-building workshop.',
    titleCls: 'exl-hero-title',
    media: `<div class="g" style="align-items:end">
      <div class="c-6"><p class="label" style="margin-bottom:14px">research_board</p><p class="lead" style="max-width:30ch;margin:0">Fourteen websites, one audit template. Pick a lens to see which brands put AI to work on that job.</p></div>
      <div class="c-6">
        <div class="board" data-board>
          <div class="board__head"><span>research_board / 14 brands</span><span data-board-count>14</span></div>
          <div class="brands">${all.map(b => `<span class="brand-chip" data-brand="${b}">${b}</span>`).join('')}</div>
          <div class="lenses" role="group" aria-label="Filter brands by lens">
            ${LENSES.map((l, i) => `<button type="button" data-lens="${i}" aria-pressed="false"><span>${l}</span><span>${EXL_MATRIX.filter(r => r[i + 1]).length}/10</span></button>`).join('')}
          </div>
        </div>
      </div>
    </div>`,
    meta: [['My scope', 'Direct competitor research'], ['Method', 'AI feature audit · Affinity mapping'], ['Used in', 'EXL co-building workshop'], ['Context', 'Workshop run by Merkle'], ['Client', 'EXL, data analytics, AI & consulting']],
    own: [
      { h: 'I owned', items: ['Direct competitor research', 'Feature audit across 14 brands', 'Affinity mapping & synthesis', 'Storytelling for the workshop'] },
      { h: 'Context', items: ['Merkle ran a co-building workshop with the EXL team', 'Goal: ideate AI experiences for EXL’s digital front door'] },
      { h: 'Methods', items: ['Desk research', 'Affinity mapping', 'Synthesis'] },
    ],
  });

  const brief = sec(`${secHead('01', 'The brief', 'See the landscape|before ideating')}
    <div class="grid"><div class="c-body">
      <p class="lead rv">EXL is a global data analytics, AI and consulting company. Merkle ran a co-building workshop with the EXL team to ideate AI experiences for its digital front door.</p>
      <p class="rv muted">Before ideation, EXL needed to see what its direct competitors and AI-forward brands already do with AI on their websites.</p>
    </div></div>
    <div class="grid" style="margin-top:clamp(56px,7vw,110px)">
      <p class="label label--accent" style="grid-column:1/span 3;padding-top:.6em">Research question</p>
      <p class="pull rv" style="grid-column:4/-1">How do EXL’s competitors and AI-forward brands <span class="q">use AI on their websites</span>, and what could EXL take from it?</p>
    </div>`);

  const scope = sec(`${secHead('02', 'Audit scope', 'What I|looked for')}
    <div class="g">
      <div class="c-8"><p class="label" style="margin-bottom:14px">Seven signals of AI on a website</p>
        <ol class="signals rv">${['Chatbots and conversational assistants', 'Content that adapts to who you are', 'Search that feels intelligent or guided', 'Calculators, assessments, configurators', 'Content recommendation engines', 'Smart lead capture, not just a form', 'Self-identification by role, industry or need'].map((s, i) => `<li><span class="n">0${i + 1}</span><span>${s}</span></li>`).join('')}</ol>
      </div>
    </div>`, { alt: true });

  const affinity = sec(`${secHead('03', 'Affinity mapping', 'Mapping each feature|to the value it creates', 'Ten of the audited brands, mapped by the job their AI does for the visitor.')}
    <div class="g">
      <div class="c-7"><div class="matrix-wrap rv" data-matrix>
        <table class="matrix">
          <caption class="sr-only">AI features mapped to value: discovery, personalisation, lead collection, credibility</caption>
          <thead><tr><th scope="col">Brand</th>${LENSES.map((l, i) => `<th scope="col" class="${i === 3 ? 'hot' : ''}">${l}</th>`).join('')}</tr></thead>
          <tbody>${EXL_MATRIX.map((r, ri) => `<tr><th scope="row" style="font-weight:500">${r[0]}</th>${r.slice(1).map((v, i) => `<td>${v ? `<span class="dot ${i === 3 ? 'hot' : ''}" style="transition-delay:${ri * 40 + i * 30}ms" role="img" aria-label="Yes"></span>` : '<span class="sr-only">No</span>'}</td>`).join('')}</tr>`).join('')}</tbody>
          <tfoot><tr><td>Total / 10</td><td>9</td><td>3</td><td>5</td><td class="hot">1</td></tr></tfoot>
        </table>
      </div></div>
      <div class="c-4" style="grid-column:9/span 4;display:grid;gap:32px;align-content:start">
        <div class="stat rv"><span class="stat__n">9<small> / 10</small></span><p>Discovery is the default job: helping visitors find their way through complex offerings.</p></div>
        <div class="stat rv"><span class="stat__n">5<small> / 10</small></span><p>Lead collection rides on the same conversation as discovery at IBM, AWS, Tesla and HubSpot.</p></div>
        <div class="stat rv"><span class="stat__n" style="color:var(--accent)">1<small> / 10</small></span><p>Credibility is the white space. Only Concentrix uses AI to prove expertise, through an AI-maturity assessment.</p></div>
      </div>
    </div>
`);

  const feats = [
    ['exl-h1', 'AI that acts', 'Salesforce Agentforce', 'Moves from delivering insights to executing decisions through agents in the workflow.'],
    ['exl-h2', 'AI that converses', 'Amazon Rufus (now Alexa for shopping)', 'Simplifies complexity by turning shopping into a conversational decision engine.'],
    ['exl-h3', 'AI that converts', 'HubSpot', 'Qualifies visitors, personalises the chat and drives leads, not just information.'],
    ['exl-h4', 'AI that onboards', 'Canva AI', 'Soft-launches newcomers into a vast product, so it feels less daunting from the first screen.'],
  ];
  const hero4 = sec(`${secHead('04', 'Hero features', 'Four hero features,|four jobs for AI')}
    <div class="hero-feats">${feats.map(([im, k, h, t], i) => `<article class="hf rv" style="--d:${i * 0.08}s"><button type="button" class="hf__img fig__frame" data-zoom="${im}-full" data-group="exl-h" data-cap="${h}: ${k}" aria-label="Enlarge ${h}">${img(im, `${h} interface`, { sizes: '25vw' })}</button><span class="k">${k}</span><h3>${h}</h3><p>${t}</p></article>`).join('')}</div>
    <p class="muted" style="font-size:.85rem;margin:28px 0 0">Screenshots recaptured in November 2026; interfaces may have changed since the original audit. Click any screen to view it full size.</p>`, { alt: true });

  const impl = sec(`${secHead('05', 'Implications for EXL', 'What EXL could take|into ideation', 'Patterns from the audit, translated into starting points for the workshop.')}
    ${tiles([
      { k: 'from Salesforce Agentforce', h: 'AI that does the work', p: 'Agents that act inside client workflows, not only advise on them.' },
      { k: 'from Nvidia', h: 'Guided, intent-based search', p: 'Suggested prompts, so visitors find solutions without knowing EXL’s menu.' },
      { k: 'from Globant', h: 'A conversational brand ambassador', p: 'Explains services in plain language, in multiple languages.' },
      { k: 'from Concentrix', h: 'AI-maturity self-assessment', p: 'Thought leadership that scores readiness and captures high-intent leads.' },
      { k: 'from HubSpot', h: 'Conversational lead qualification', p: 'Qualifies enterprise buyers and routes them to the right analytics solution.' },
      { k: 'from Sephora', h: 'AI at decision points', p: 'Contextual help that can move a visitor from Retail Banking to Payments and Cards.' },
    ], 3, 0)}`);

  const workshop = sec(`${secHead('06', 'Into the workshop', 'Research that|set up the room', 'How the research fed the co-building workshop.')}
    <div class="grid"><div class="c-body" style="grid-column:4/-1">
      <div class="g">
        <div class="c-4"><div class="stat rv"><span class="stat__n">14</span><p>AI experiences documented as one comparable evidence base.</p></div></div>
        <div class="c-4"><div class="stat rv"><span class="stat__n">4</span><p>Hero feature categories, plus patterns and opportunities for co-creation.</p></div></div>
        <div class="c-4"><div class="stat rv"><span class="stat__n">7</span><p>Signals of AI on a website: the lens applied to every brand in the audit.</p></div></div>
      </div>
    </div></div>`, { alt: true });

  const refl = reflection('07', 'Outcomes, and how|I approach research', [
    'EXL saw where it stands among its direct competitors, presented in the co-building workshop.',
    'An evidence base of 14 AI experiences, with hero features, patterns and opportunities for co-creation.',
  ], [
    { h: 'Structure makes findings comparable', p: 'Understanding EXL’s business first, then using one template, turned 14 very different websites into data I could compare.' },
    { h: 'Synthesis, designed for the room', p: 'Affinity mapping moved the work from what exists to what it means for EXL, presented so the workshop stayed strategic.' },
  ], { learnLabel: 'How I approach research', alt: false });

  return hero + brief + scope + affinity + hero4 + impl + workshop + refl;
}

/* ───────────────────────────── 03 JSW ───────────────────────────── */
const JSW_SCREENS = [
  ['jsw-dash-1', 'Institutional accounts', 'Day one', 'Two new leads, both waiting for a fit score. Next Action points to the evaluation.'],
  ['jsw-dash-2', 'Institutional accounts', 'After evaluation', 'Fit shows as a badge score, and each row links to its next step.'],
  ['jsw-nurture', 'Path A · Low fit', 'Nurture plan', 'NewLeaf Residency scores 34. The plan moves through readiness review, developer check-in, a 30-day progress check and a re-evaluation trigger.'],
  ['jsw-fit', 'Path B · High fit', 'Fit evaluation', 'A score of 91 out of 100 clears the bar, and one button starts the cross-BU proposal.'],
  ['jsw-bundle', 'Path B · High fit', 'Bundle built', 'Cement and Paints are ready. Steel is flagged as pending, with the request one click away.'],
  ['jsw-request', 'Path B · Anjali’s view', 'The request', 'Quantity, timing, project and the rest of the bundle in one card, with the rate on the button.'],
  ['jsw-confirmed', 'Path B · Anjali’s view', 'Confirmed', 'The status updates on her side and flows into Priya’s bundle, with no follow-up emails.'],
  ['jsw-approve-1', 'Path B · Approval', 'Ready to submit', 'All three units confirmed; approval by Rajesh Kumar, VP Institutional Sales, is required.'],
  ['jsw-approve-2', 'Path B · Approval', 'Generate', 'One document for sign-off; once approved it goes to Rohan Mehta for e-signature.'],
  ['jsw-approve-3', 'Path B · Approval', 'Submitted', 'A toast confirms it; Priya can view approval details or return to her accounts.'],
];
export { JSW_SCREENS };

function jsw(p) {
  const hero = caseHero(p, {
    label: 'Case study 03 · Institutional sales on Salesforce',
    title: 'JSW',
    sum: 'JSW sells Cement, Steel and Decorative Paints through separate business units. I designed one guided workflow that pulls them into a single proposal.',
    media: '',
    meta: [['Role', 'UX & UI designer'], ['Platform', 'Salesforce · SLDS'], ['Delivered', 'User journey · 14 screens'], ['Users', 'KAM, business unit, VP, customer'], ['Client', 'JSW, institutional sales']],
    own: [
      { h: 'I owned', items: ['Journey mapping: the sales story as a 15-step journey', 'Storytelling: a walkthrough with cover & personas', '14 high-fidelity screens on SLDS'] },
      { h: 'Constraints', items: ['Native SLDS patterns only', 'Buildable in Lightning without custom components'] },
    ],
  });

  const brief = sec(`${secHead('01', 'The problem', 'Three business units,|one customer', 'For institutional buyers like real estate developers, a Key Account Manager has to judge whether a project is ready, and then pull every unit into one proposal.')}
    <div class="grid"><div class="c-body">
      <p class="lead rv">The goal: one guided workflow that scores an account’s fit, keeps early-stage projects warm, and turns ready ones into an approved cross-BU proposal.</p>
    </div></div>`);

  const personas = sec(`${secHead('02', 'Personas', 'Characters|in the story')}
    <div class="pp">
      <article class="pp__card rv">${img('jsw-priya', 'Portrait used for the persona Priya Singh', { sizes: '96px' })}<div><span class="label">Primary user</span><h3>Priya Singh</h3><p class="sub">Key Account Manager · 6 yrs · Pune</p><p>Evaluates accounts, nurtures early projects, and pulls each business unit into one proposal.</p></div></article>
      <article class="pp__card rv" style="--d:.08s">${img('jsw-anjali', 'Portrait used for the persona Anjali Rao', { sizes: '96px' })}<div><span class="label">Business-unit partner</span><h3>Anjali Rao</h3><p class="sub">Steel Institutional Sales · 11 yrs · Pune</p><p>Confirms Steel capacity and pricing, and needs one clear way to answer.</p></div></article>
    </div>
    <p class="pp__also"><span class="label">Also in the story</span><span><b>Rajesh Kumar</b>, VP Institutional Sales, approves proposals</span><span><b>Rohan Mehta</b>, Vantage Developers, signs the proposal</span></p>`, { alt: true });

  const lane = (cls, head, sub, items) => `<div class="lane ${cls}"><div class="lane__h">${head}<small>${sub}</small></div>${items.map((t, i) => `<div><span class="num">${String(i + 1).padStart(2, '0')}</span>${t}</div>`).join('')}</div>`;
  const journey = sec(`${secHead('03', 'User journey', 'One fit score,|two paths', 'I mapped Priya’s story as 15 sticky notes first. The Institutional Fit score decides which path an account takes.')}
    <div class="lanes rv" role="img" aria-label="Two journey paths. Low fit (34, NewLeaf Residency): review project readiness, relationship check-in, 30-day progress check, re-evaluation trigger, reassess when timelines clear. High fit (91, Vantage Developers): build cross-BU bundle, request Steel capacity, Anjali confirms pricing, VP signs off internally, proposal to customer.">
      ${lane('lane--low', 'Low Fit · 34', 'NewLeaf Residency → nurture', ['Review project readiness', 'Relationship check-in', '30-day progress check', 'Re-evaluation trigger', 'Reassess when timelines clear'])}
      ${lane('lane--high', 'High Fit · 91', 'Vantage Developers → proposal', ['Build cross-BU bundle', 'Request Steel capacity', 'Anjali confirms pricing', 'VP signs off internally', 'Proposal to customer'])}
    </div>
    <p class="muted" style="margin:16px 0 0;font-size:.95rem">Every account starts on Priya’s dashboard with an Institutional Fit Evaluation.</p>`);

  const walk = sec(`${secHead('04', 'The screens', 'From dashboard|to final approval', 'A selection from the 14 high-fidelity screens, in the order Priya and Anjali meet them.')}
    <div class="stepper" data-stepper>
      <div class="stepper__list" role="tablist" aria-label="Screens">${JSW_SCREENS.map((s, i) => `<button type="button" role="tab" id="st-${i}" aria-controls="st-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-step="${i}"><span class="n">${String(i + 1).padStart(2, '0')}</span><span><small>${s[1]}</small>${s[2]}</span></button>`).join('')}</div>
      <div class="stepper__stage" id="st-panel" role="tabpanel" aria-live="polite">
        <div class="stepper__screen"><button type="button" class="fig__frame" style="display:block;width:100%;background:none" data-zoom="${JSW_SCREENS[0][0]}" data-group="jsw-steps" data-cap="${JSW_SCREENS[0][2]}" aria-label="Enlarge current screen">${img(JSW_SCREENS[0][0], JSW_SCREENS[0][2], { sizes: '(max-width:1100px) 100vw, 65vw' })}</button></div>
        <div class="stepper__bar"><i style="width:${100 / JSW_SCREENS.length}%"></i></div>
        <div class="stepper__cap"><p><b data-cap-title>${JSW_SCREENS[0][2]}.</b> <span data-cap-text>${JSW_SCREENS[0][3]}</span></p>
          <div class="stepper__nav"><button type="button" data-prev aria-label="Previous screen">←</button><button type="button" data-next aria-label="Next screen">→</button></div></div>
      </div>
    </div>
    <div class="hidden-preload" aria-hidden="true" style="display:none">${JSW_SCREENS.map(s => `<link rel="prefetch" href="assets/img/${s[0]}.webp">`).join('')}</div>`, { alt: true });

  const refl = reflection('05', 'Outcomes and|what I learned', [
    'One user journey covering both paths: nurture for low fit, proposal for high fit.',
    'SLDS screens connecting four roles: KAM, business unit, VP and customer.',
  ], [
    { h: 'Research to interface, end to end', p: 'Before this I had worked on research, storytelling and journeys. Here I carried the work all the way to high-fidelity screens.' },
    { h: 'A design system, used as intended', p: 'Learned SLDS hands-on, picking components from the library and using them the way the system intends.' },
  ], { alt: false });

  return hero + brief + personas + journey + walk + refl;
}

/* ───────────────────────────── 04 MOTHER DAIRY ───────────────────────────── */
const MD_APPS = [
  ['md-gate', 'Gate Entry', 'Mobile app'],
  ['md-digichal', 'DigiChal', 'Mobile app'],
  ['md-vendor', 'Vendor Stocking', 'Web app'],
  ['md-itasset', 'IT Asset Acquisition', 'Web app'],
  ['md-warehouse', 'Warehouse Store', 'Mobile & web app'],
  ['md-3p', '3P Process Flow', 'Plant process flow'],
];
export { MD_APPS };

function motherDairy(p) {
  const hero = caseHero(p, {
    label: 'Case study 04 · Enterprise workflows',
    title: 'Six enterprise|applications',
    sum: 'How client calls, recordings and complex workflows became structured user journeys for design and development.',
    media: `<div class="md-hero">
      <div class="md-hero__apps"><p class="label" style="color:#C6D5F4;margin-bottom:14px">Six applications</p><ul>${MD_APPS.map(a => `<li>${a[1]}<span>${a[2]}</span></li>`).join('')}</ul></div>
      <div class="md-hero__map">${img('md-gate', 'Gate Entry mobile application user journey map', { eager: true, sizes: '60vw' })}</div>
    </div>`,
    meta: [['Role', 'Workflow analysis & user journey mapping'], ['Scope', 'Six applications'], ['Delivered', 'Structured user journeys'], ['Team', 'Experienced designers & researchers'], ['Context', 'Extentia, a Merkle company']],
    own: [
      { h: 'I owned', items: ['Understanding the current state of each application', 'Mapping existing workflows', 'Structured user journeys for design & dev'] },
      { h: 'With the team', items: ['Collaborated with experienced designers and researchers', 'Translated journeys into design requirements', 'Clarified requirements in client discussions'] },
      { h: 'Inputs', items: ['Client recordings', 'Client calls & discussions', 'Post-it analysis'] },
    ],
  });

  const brief = sec(`${secHead('01', 'The brief & my role', 'Understand first.|Then design and build.')}
    <div class="g">
      <div class="c-6"><div class="tile tile--dark rv" style="border-radius:8px;min-height:300px;justify-content:space-between;background:var(--c-alt);color:#fff"><span class="k" style="color:#C6D5F4">Client brief</span><h3 style="font-size:1.6rem;line-height:1.2">Mother Dairy approached the team to develop six applications.</h3><p style="color:#C6D5F4">Before moving into design and development, it was important to understand how these applications currently functioned, identify their underlying processes, and clarify the requirements with the client.</p></div></div>
      <div class="c-6"><div class="tile rv" style="border-radius:8px;min-height:300px;justify-content:space-between;border:1px solid var(--rule)"><span class="k">My role</span><h3 style="font-size:1.6rem;line-height:1.2">Understand the current state of each application, map its existing workflows, and clarify the requirements and complexities through discussions with the client.</h3><p>This understanding formed the foundation for creating structured user journeys to guide the design and development process.</p></div></div>
    </div>`);

  const approach = sec(`${secHead('02', 'The approach', 'From recordings|to structure')}
    <div class="flow rv">
      <div class="flow__step"><span class="dotn">1</span><h3>Listen</h3><p>Went through the client recordings multiple times, noting gaps in my understanding and the probing questions to ask next.</p></div>
      <div class="flow__step"><span class="dotn">2</span><h3>Organise</h3><p>Put the information on post-it notes, identifying patterns, making sense of it all and drawing connections across workflows.</p></div>
      <div class="flow__step"><span class="dotn">3</span><h3>Translate</h3><p>Turned that understanding into structured user journeys for the design and development teams.</p></div>
    </div>
    <div class="g" style="margin-top:clamp(56px,7vw,110px);align-items:end">
      <div class="c-8">${fig('md-board', 'Working analysis board with clustered post-it notes', '<b>Working board from the analysis phase.</b> Notes clustered by application and process.', { group: 'md-board' })}</div>
      <div class="c-4"><p class="pull rv" style="font-size:clamp(1.3rem,2vw,1.8rem)">“With each application, I developed a clearer understanding of the broader enterprise processes, allowing me to approach the remaining workflows with <span class="q">greater clarity</span>.”</p></div>
    </div>`, { alt: true });

  const apps = sec(`${secHead('03', 'The deliverable', 'Six journeys,|one structure', 'Each application’s workflow, organised into the same journey format: who acts, on which channel, step by step, with every alternate path.')}
    <div class="apps jx" data-apps>
      <div class="apps__tabs" role="tablist" aria-label="Applications">${MD_JOURNEYS.map((a, i) => `<button type="button" role="tab" id="jx-tab-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" aria-controls="jx-panel-${i}" data-app="${i}"><span class="n">0${i + 1}</span><b>${a.name}</b><span class="p">${a.platform}</span></button>`).join('')}</div>
      <div class="jx-panels">${MD_JOURNEYS.map((j, i) => `<section class="jx-panel" id="jx-panel-${i}" role="tabpanel" aria-labelledby="jx-tab-${i}" ${i ? 'hidden' : ''}>${journeyHTML(j, i)}</section>`).join('')}</div>
    </div>`);

  const refl = sec(`${secHead('04', 'Learning outcomes', 'What this project|taught me')}
    ${tiles([
      { k: '01', h: 'Cross-functional collaboration', p: 'On my first live project, I worked with experienced designers and researchers, turning user journeys into clear design requirements.' },
      { k: '02', h: 'Structuring complexity', p: 'Breaking enterprise workflows into smaller parts, and asking probing questions to uncover missing information, built clarity one step at a time.' },
    ], 2)}`, { alt: true });

  return hero + brief + approach + apps + refl;
}

/* ───────────────────────────── 05 RESPONSIBLE TOURISM ───────────────────────────── */
function responsibleTourism(p) {
  const hero = caseHero(p, {
    label: 'Case study 05 · Systems design',
    badge: `<p style="margin:0 0 22px"><span class="academic">Academic project · M.Des, National Institute of Design · Team</span></p>`,
    title: 'Responsible|Tourism <em>in India</em>',
    sum: 'A systems study of tourism’s social, economic and environmental impact, ending in Off The Grid: a zine and city map for exploring offbeat Mysore.',
    media: `<div class="rt-hero">
      <div class="rt-hero__photo">${img('rt-hd-reader', 'A traveller reading the Off The Grid booklet under a tree', { eager: true, sizes: '(max-width:860px) 45vw, 35vw' })}</div>
      <div class="rt-hero__wall">${img('rt-wall', 'The team’s working systems map on the studio wall, March 2024', { eager: true, sizes: '65vw' })}</div>
    </div>`,
    meta: [['Type', 'Academic · systems design'], ['Institution', 'National Institute of Design'], ['Team', 'Group project'], ['Methods', 'Desk & primary research · systems mapping'], ['Outcome', 'Off The Grid: zine + city map']],
    own: [
      { h: 'We did', items: ['Desk & primary research', 'Ecosystem / systems mapping', '12 insights → 3 opportunity areas', 'Collaborator validation'] },
      { h: 'We made', items: ['Storyboards & ideation sketches', 'Off The Grid zine + city map', 'Stickers & memory pocket'] },
      { h: 'Field', items: ['Tour guides & inbound tourists, Mumbai, March ’24', 'Hosts & operators across India'] },
    ],
  });

  const why = sec(`${secHead('01', 'Context', 'Why responsible|tourism?', 'It reduces negative social, economic and environmental impact, and supports the host community.')}
    <div class="grid"><div class="c-body">
      <div class="rv">${chips(['local connect', 'cultural exchange', 'economic opportunities', 'social development', 'awareness', 'education'])}</div>
      <div class="two-col rv" style="margin-top:48px">
        <div><h3 class="label label--accent">What we studied</h3><p class="lead">Tourism trends, stakeholders, tourist behaviours and their impacts.</p></div>
        <div><h3 class="label label--accent">What we found</h3><p class="lead">Gaps in current interventions, which became our opportunity areas.</p></div>
      </div>
    </div></div>`);

  const process = sec(`${secHead('02', 'Process', 'From the wall|to the work')}
    <div class="g">
      <div class="c-4">${steps([
        { h: 'Desk research', p: 'Trends, interventions and actors.' },
        { h: 'Stakeholders & collaborators', p: 'Pinning down who to speak to.' },
        { h: 'Primary research', p: 'Hosts, operators, guides and tourists.' },
        { h: 'Observations → insights → opportunities', p: 'Synthesised on the systems map.' },
        { h: 'Ideation', p: 'Storyboards and format sketches.' },
        { h: 'Design intervention', p: 'Off The Grid.' },
      ])}</div>
      <div class="c-8">${fig('rt-wall', 'Working systems map on the studio wall', 'Our working systems map on the studio wall, March 2024.', { group: 'rt-proc' })}</div>
    </div>`, { alt: true });

  const map = sec(`${secHead('03', 'The ecosystem', 'Systems map', 'Tourists, tour operators, local communities, accommodation, government and environment, with challenges, strengths, suggestions and opportunities marked across them.')}
    ${fig('rt-map', 'Systems map of responsible tourism in India', 'Click to enlarge. Dashed red: challenges · green: strengths · yellow: suggestions · pink: opportunity areas.', { group: 'rt-map', sizes: '100vw' })}`);

  const ins = [
    ['Awareness', 'Eco-stays exist but lack visibility, so tourists rarely know of them, e.g. Ecoplore’s sustainable hotels across India.'],
    ['Exposure', 'Gen Z is willing to travel sustainably but lacks exposure to eco-hotels, local communities, local cuisine and craft clusters.'],
    ['Authentic information', 'There’s no central, credible source, so inbound tourists struggle to find and reach places and activities.'],
    ['Holistic experience', 'Hotels and eco-stays could offer combined tour packages: a whole stay experience, not just a bed.'],
    ['Season based', 'Tourism dips in the lean season; year-round experiences would give host communities a steady income.'],
    ['Rural-centric', 'With cities exhausted, tourism is shifting to rural, natural destinations, bringing jobs and income there.'],
    ['Human interaction', 'Tourists value human connection; tours should be people-centric and personalised by interest and age group.'],
    ['Maintenance & development', 'Upkeep matters as much as promotion: the much-promoted Gateway of India has crowded, unhygienic washrooms and high parking fees.'],
    ['Repeated experience', 'Look beyond religious and historic sites to what a place uniquely offers, so tourists stay longer, return and recommend it.'],
    ['Souvenirs', 'Souvenirs are generic; local craftspeople could make unique, small and affordable takeaways.'],
    ['Competition', 'Small tour operators compete with industry giants for visibility; partnering with them would bring online traction.'],
    ['Disconnect', 'State governments and small eco-tourism organisations work in silos, and the gap between them needs bridging.'],
  ];
  const insights = sec(`${secHead('04', 'Insights', 'Twelve|insights', 'Derived from observations inferred from our primary and secondary research.')}
    <div class="insights">${ins.map(([h, t], i) => `<div class="insight rv" style="--d:${(i % 3) * 0.06}s"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${t}</p></div>`).join('')}</div>`, { alt: true });

  const opp = (n, h, gap, feas, imp, ideas) => `<article class="opp rv"><div class="opp__n">0${n}</div><div class="opp__main"><h3>${h}</h3><div class="opp__cols"><div><h4>Issue / gap</h4><ul><li>${gap}</li></ul></div><div><h4>Feasibility</h4><ul>${feas.map(f => `<li>${f}</li>`).join('')}</ul></div><div><h4>Impact</h4><ul>${imp.map(f => `<li>${f}</li>`).join('')}</ul></div></div></div><div class="opp__ideas"><p class="label">Ideas brainstormed</p>${ideas.map(([b, t], i) => `<div class="idea" style="--r:${i % 2 ? 1.2 : -1.4}deg"><b>${b}</b><p>${t}</p></div>`).join('')}</div></article>`;
  const opps = sec(`${secHead('05', 'Opportunity areas', 'Three places|to intervene', 'Derived after evaluating all the insights.')}
    <div class="opps">
      ${opp(1, 'Turn stays into experiences: hotels and homestays team up on combined tour packages, not just a bed.', 'Tourists miss the hidden gems around their homestay.', ['Share niche, responsible-travel spots', 'Guided or self-guided tours', 'Stay in touch with guests after they leave'], ['Word of mouth for the property', 'Jobs for local guides', 'Souvenir orders for local makers', 'Closer local–tourist connection'], [['Guided tours by the host', 'Paid tours guests book ahead or on arrival.'], ['Collaborate with organisations like Gully Tours', 'Bring private mini tour operators on board.']])}
      ${opp(2, 'Connect small eco-tourism players with the state government and big platforms, so they gain online traction instead of competing alone.', 'Information isn’t available on a single platform.', ['List eco-hotels on MakeMyTrip and Booking.com', 'Feature homestays and small operators on Incredible India'], ['Recognition for uncommon places', 'Responsible Tourism as the way to travel'], [['Partner with big platforms', 'e.g. Ecoplore listing its eco-stays on MakeMyTrip.'], ['Government promotion', 'Incredible India and state tourism sites feature local homestays.']])}
      ${opp(3, 'Replace generic souvenirs with ones that are regional in how they’re made and how they look.', 'Few authentic souvenirs at busy tourist spots.', ['A space to display varied souvenirs', 'Unique pieces made to order', 'Handmade pieces sourced from local artisans, who benefit'], ['Promotes local art, craft and artisans', 'Engages tourists with the host community'], [['Souvenirs for Reality Tours', 'Leather cut-and-paste activities and mini pottery sets from local potters.'], ['Homestay souvenirs', 'Made by local craft clusters, sold at the homestay.']])}
    </div>`);

  const quotes = [
    ['I currently send a list of places on Whatsapp. It gets difficult to do it repeatedly for every guest that checks in. I’ve been thinking of how I could help tourists by standardising this information. The idea sounds good to begin with and is a good step towards Responsible tourism.', 'Prashanth, Airbnb host, Mysore'],
    ['I overlook a lot of Airbnb hosts and the overall functioning of these homestays and I feel the need to have some provision for guiding tourists around, especially in case of when hosts are not around the property. This solution could help tourists to move around on their own and is cost-efficient. You could think of an online map + an app around the experience as your future scope.', 'Michael Basnet, founder, Airbnb Host Community India'],
    ['The idea sounds interesting and the micro interactive experiences would lead to an enjoyable experience for the tourists. Also is really feasible to implement practically.', 'Kuldip, tourist operator and host, Kutch Adventures India'],
    ['The idea of having a physical map sounds good in cases where guided tours are not available or are unaffordable to tourists.', 'Krishna Pujari, founder, Reality Tours and Travels'],
  ];
  const feedback = sec(`${secHead('06', 'Collaborator feedback', 'Tested with the|people it serves', 'After ideating on a few solutions, some were pitched to hosts and operators to check feasibility.')}
    <div class="quotes">${quotes.map(([q, c], i) => `<blockquote class="quote rv" style="--d:${(i % 2) * 0.08}s"><p>“${q}”</p><cite>${c}</cite></blockquote>`).join('')}</div>`, { alt: true });

  const ideation = sec(`${secHead('07', 'Intervention', 'Storyboards|and sketches', 'A use-case scenario, then format explorations for a booklet that is also a map.')}
    <div class="g">
      <div class="c-5">${fig('rt-storyboard', 'Storyboard: Mysore scavenger hunt scenario', '<b>Storyboard.</b> A use case scenario.', { group: 'rt-ideate' })}</div>
      <div class="c-7">${fig('rt-sketch-1', 'Sketches of brochure-map formats', '<b>Ideation sketches.</b> Exploring the booklet-map format.', { group: 'rt-ideate' })}</div>
      <div class="c-7" style="grid-column:6/span 7">${fig('rt-sketch-2', 'Sketches of map features and stickers', '<b>Map features.</b> Stickers, fill-in spaces and a personal planner.', { group: 'rt-ideate' })}</div>
    </div>`);

  const kit = [
    ['rt-hd-flatlay-cover', 'The kit: booklet, memory pocket and sticker sheets in a handmade-paper folder', 'b-a', '50% 60%'],
    ['rt-hd-cover-grass', 'The booklet cover: “Dive into the authentic charm only the insiders know about…”', 'b-b', '50% 50%'],
    ['rt-hd-culture', 'Culture & Shopping: a yoga shala, a 1912 silk-weaving factory, a woodcraft cluster', 'b-c', '50% 50%'],
    ['rt-hd-indoors', 'Indoors & Guidelines: host-led activities, responsible-travel tips and space for notes', 'b-d', '50% 50%'],
    ['rt-hd-accordion-stand', 'The booklet unfolds as an accordion, with the city map on its reverse', 'b-e', '50% 45%'],
    ['rt-hd-map-held', 'The map of Mysuru: every place in the booklet, with a spot for a number sticker', 'b-f', '50% 52%'],
    ['rt-hd-map-pointing', 'Planning a route: numbering places with stickers to make a short tour', 'b-g', '50% 40%'],
    ['rt-hd-stickers', 'Sticker sheets: numbers for routes, plus food, festival and mood stickers', 'b-h', '50% 55%'],
    ['rt-hd-pocket-stickers', 'The memory pocket keeps stickers and keepsakes from the trip', 'b-i', '45% 55%'],
    ['rt-hd-accordion-held', 'In use: the unfolded booklet in a traveller’s hands', 'b-j', '40% 50%'],
  ];
  const zine = sec(`${secHead('08', 'Solution', 'Off The Grid')}
    <div class="zine">
      <div class="zine__cover rv-img rv"><button type="button" class="fig__frame" data-zoom="rt-hd-tied" data-group="rt-reader" data-cap="The Off The Grid kit, tied with jute string" aria-label="Enlarge: The Off The Grid kit, tied with jute string">${img('rt-hd-tied', 'The Off The Grid kit, tied with jute string', { sizes: '(max-width:860px) 100vw, 42vw' })}</button></div>
      <div class="zine__txt rv"><p class="pull">Off The Grid: for you to explore those offbeat nooks and corners of the city <span class="q">only locals know of.</span></p></div>
    </div>
    <div class="kit-head"><p class="label">The artefact, piece by piece</p><p class="muted">Click any photo to view it full size.</p></div>
    <div class="bento">${kit.map(([n, a, cls, pos], k) => `<figure class="bento__item ${cls} rv" style="--d:${(k % 3) * 0.06}s"><button type="button" class="fig__frame" data-zoom="${n}" data-group="rt-kit" data-cap="${a}" aria-label="Enlarge: ${a}">${img(n, a, { sizes: '(max-width:860px) 100vw, 50vw', style: `object-position:${pos}` })}</button><figcaption><span class="mono">${String(k + 1).padStart(2, '0')}</span>${a}</figcaption></figure>`).join('')}</div>`, { alt: true });

  const learn = sec(`${secHead('09', 'Learnings', 'The insights came|from the strings', '')}
    <div class="g" style="align-items:start">
      <div class="c-6"><ul class="line-list rv">
        <li><b>Zoom out before zooming in.</b><span>Mapping tourists, hosts, operators, government and artisans together showed that separate gaps traced back to the same few broken connections.</span></li>
        <li><b>Find the leverage point.</b><span>The homestay host touches tourists, local businesses and artisans at once, so a small, low-cost booklet could help all of them. Collaborator feedback tested that balance.</span></li>
      </ul></div>
      <div class="c-6">${fig('rt-team', 'Group photo with the tour guide and inbound tourists in Mumbai', 'With the tour guide and inbound tourists, Mumbai, March ’24.', { group: 'rt-team' })}</div>
    </div>`);

  return hero + why + process + map + insights + opps + feedback + ideation + zine + learn;
}

export const CASES = {
  'total-environment': totalEnvironment,
  exl,
  jsw,
  'mother-dairy': motherDairy,
  'responsible-tourism': responsibleTourism,
};
