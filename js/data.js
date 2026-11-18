/* ==========================================================================
   Content model. Everything on the site is sourced from Bhavna's portfolio.
   Edit SITE to add LinkedIn / résumé / experience details.
   ========================================================================== */

export const SITE = {
  name: 'Bhavna Dehadray',
  role: 'Experience Designer',
  email: 'bhavna.d1198@gmail.com',
  // Add the full profile URL, e.g. 'https://www.linkedin.com/in/your-handle/'
  linkedin: 'https://www.linkedin.com/in/bhavna-dehadray-66395a18b/',
  // Put the PDF at this path. If the file is missing the button becomes "Request résumé".
  resume: 'assets/Bhavna_Dehadray_Resume.pdf',
};

export const PROJECTS = [
  {
    slug: 'total-environment',
    num: '01',
    name: 'Total Environment',
    short: 'Brand experience deck & UX audit',
    card: 'Brought a real-estate brand’s printed warmth onto the screen as a navigable research deck, then audited its website against usability heuristics.',
    role: 'Visual & UX designer',
    disciplines: ['Visual direction', 'Deck design', 'Heuristic audit'],
    theme: 't-te',
    cardBg: '#F3D7BF',
    image: 'te-cover',
  },
  {
    slug: 'exl',
    num: '02',
    name: 'EXL',
    short: 'AI competitive landscape research',
    card: 'Fourteen brands, seven signals of AI and one affinity map. Together they showed EXL where it stands, as groundwork for an AI co-building workshop.',
    role: 'Competitive research',
    disciplines: ['Feature audit', 'Affinity mapping', 'Synthesis'],
    theme: 't-exl',
    cardBg: '#1A1918',
    image: 'exl-board',
  },
  {
    slug: 'jsw',
    num: '03',
    name: 'JSW',
    short: 'Institutional sales on Salesforce',
    card: 'One guided workflow that scores an account’s fit, keeps early projects warm, and turns ready ones into an approved cross-business-unit proposal.',
    role: 'UX & UI designer',
    disciplines: ['Journey mapping', 'Enterprise UX', 'SLDS'],
    theme: 't-jsw',
    cardBg: '#0D1835',
    image: 'jsw-dash-2',
  },
  {
    slug: 'mother-dairy',
    num: '04',
    name: 'Mother Dairy',
    short: 'Enterprise workflow journeys',
    card: 'Client recordings and tangled processes across six enterprise applications, untangled into structured user journeys for design and development.',
    role: 'Workflow analysis & journey mapping',
    disciplines: ['Enterprise workflows', 'Affinity mapping', 'User journeys'],
    theme: 't-md',
    cardBg: '#1D4EAE',
    image: 'md-gate',
  },
  {
    slug: 'responsible-tourism',
    num: '05',
    name: 'Responsible Tourism',
    short: 'Systems design at NID',
    card: 'An ecosystem study of responsible tourism in India that became Off The Grid: a zine and city map for exploring Mysore the way locals do.',
    role: 'M.Des academic project · team',
    disciplines: ['Systems mapping', 'Field research', 'Print experience'],
    theme: 't-rt',
    cardBg: '#B9D79A',
    image: 'rt-hd-reader',
  },
];


export const CAPABILITIES = [
  { h: 'Strategy & systems thinking', p: 'Research, competitor audits and ecosystem mapping that turn complex problems into clear opportunity areas.' },
  { h: 'Journeys & storytelling', p: 'Messy workflows mapped into clear user journeys, and narratives that get clients and teams to say yes.' },
  { h: 'UI, visual & AI-forward design', p: 'Brand-led visuals and high-fidelity screens on design systems, using AI tools to explore and communicate ideas faster.' },
  { h: 'Design thinking workshops', p: 'Game-based workshops: building games with students, and a hands-on Lego game for senior clients.' },
];

export const STRENGTHS = ['UX & experience strategy', 'Research & competitive analysis', 'Systems thinking', 'User journey mapping', 'Enterprise workflow design', 'Interaction & UI design', 'Visual communication', 'Gamification & play', 'Workshop facilitation', 'Concept development & frameworks'];

/* Experience: from Bhavna's résumé (Nov 2026). */

export const HATS = [
  { k: 'Strategy', h: 'Experience strategy & research', p: 'UX audits, competitive landscapes, journeys and frameworks for enterprise and brand clients.', roles: 'Dentsu Global Services' },
  { k: 'Product', h: 'Product & learning design', p: 'Educational products taken from curriculum strategy to market launch, and gamified course experiences.', roles: 'NITO · Clever Harvey' },
  { k: 'Play', h: 'Game design', p: 'A tabletop party game researched and designed from concept to finished prototype.', roles: 'BINCA' },
  { k: 'Physical', h: 'Toy design', p: 'A board game researched, designed and launched into the Amazon.in top 100 bestsellers.', roles: 'Imagimake' },
];

export const EXPERIENCE = [
  {
    period: 'Dec 2025 – Dec 2026', org: 'Dentsu Global Services', place: 'Pune', role: 'Experience Researcher & Experience Strategist', hat: 'Strategy',
    points: [
      'Conduct UX audits, trends research and competitive landscape analysis to identify experience opportunities and inform design strategy.',
      'Design user journeys, frameworks and gamification strategies that translate insights into engaging experiences.',
      'Create interactive demos and decks, and facilitate workshops to communicate ideas, align stakeholders and drive collaborative problem-solving.',
    ],
    work: [['Total Environment', 'total-environment'], ['EXL', 'exl'], ['JSW', 'jsw'], ['Mother Dairy', 'mother-dairy']],
  },
  {
    period: 'Jan 2025 – Nov 2025', org: 'NITO', place: 'Pune', role: 'Product Executive', hat: 'Product',
    points: [
      'Drove the full lifecycle of educational products, from strategising curriculum design to market launch.',
      'Conducted user and market research to define course direction, engagement strategies and brand positioning.',
      'Oversaw social media presence and engagement through delegation and editorial direction.',
    ],
  },
  {
    period: 'Jun 2024 – Oct 2024', org: 'BINCA', place: 'Remote', role: 'Game Designer', hat: 'Play',
    points: [
      'Led the research and design of a tabletop party game, from concept to finished prototype.',
    ],
    note: 'Graduation project collaboration · M.Des thesis, NID',
  },
  {
    period: 'Jun 2021 – Feb 2022', org: 'Clever Harvey', place: 'Mumbai', role: 'Curriculum Designer', hat: 'Product',
    points: [
      'Created learning loops and gamification elements for the ‘Design Thinking’ course experience.',
    ],
  },
  {
    period: 'Jan 2021 – Apr 2021', org: 'Imagimake', place: 'Mumbai', role: 'Toy Designer', hat: 'Physical',
    points: [
      'Led the research, product design, development and launch of ‘Monuments of India’.',
      'Conducted app evaluation and A/B testing for the ‘Mapology India’ series.',
    ],
    highlight: 'Monuments of India ranked in the Amazon.in top 100 bestsellers',
  },
];

export const EDUCATION = [
  { period: '2022 – 2025', title: 'Master of Design', field: 'Toy and Game Design', school: 'National Institute of Design', slug: 'responsible-tourism', link: 'Systems design project' },
  { period: '2016 – 2020', title: 'Bachelor of Design', field: 'Industrial: Product Design', school: 'Symbiosis Institute of Design' },
];

export const RECOGNITION = [
  'Award for Best Sketching, SID Degree Project',
  'Orientation Program Panelist 2025, SID',
  'Game Design Workshop Facilitator, DY Patil',
  'Vh1 Supersonic, Installation Team',
];

/* Logos (assets/logos/). `mono` = white artwork from the source site, rendered in ink.
   `h` = optical height in px so wordmarks and badges read at a similar size. */
export const LOGOS = {
  'Dentsu Global Services': { src: 'dentsu.png', w: 304, h: 64, mono: true, size: 24 },
  'NITO': { src: 'nito.png', w: 209, h: 138, size: 40 },
  'BINCA': { src: 'binca.png', w: 300, h: 136, size: 38 },
  'Clever Harvey': { src: 'clever-harvey.png', w: 175, h: 57, mono: true, size: 36 },
  'Imagimake': { src: 'imagimake.png', w: 320, h: 221, size: 46 },
  'Total Environment': { src: 'total-environment.png', w: 1484, h: 360, size: 50 },
  'EXL': { src: 'exl.png', w: 334, h: 203, size: 46 },
  'JSW': { src: 'jsw.png', w: 242, h: 135, size: 42 },
  'Mother Dairy': { src: 'mother-dairy.png', w: 134, h: 74, size: 46 },
  'National Institute of Design': { src: 'nid.png', w: 500, h: 80, mono: true, size: 38 },
  'Symbiosis Institute of Design': { src: 'symbiosis.png', w: 442, h: 88, size: 34 },
};

export const TICKER = [
  { label: 'Worked at', items: ['Dentsu Global Services', 'NITO', 'BINCA', 'Clever Harvey', 'Imagimake'] },
  { label: 'Clients', items: ['Total Environment', 'EXL', 'JSW', 'Mother Dairy'] },
  { label: 'Studied at', items: ['National Institute of Design', 'Symbiosis Institute of Design'] },
];

/* Case-study hero logos (transparent PNGs). `replace`: the logo IS the title (h1 keeps the name as alt text).
   Otherwise the logo sits above the existing headline. `h` = display height as a CSS length. */
export const HERO_LOGOS = {
  'total-environment': { name: 'Total Environment', src: 'total-environment.png', w: 1484, h: 360, replace: true, size: 'clamp(84px, 10vw, 150px)' },
  'exl': { name: 'EXL', src: 'exl-mark.png', w: 300, h: 90, replace: true, size: 'clamp(84px, 11vw, 168px)' },
  'jsw': { name: 'JSW', src: 'jsw-hero.png', w: 845, h: 400, replace: true, size: 'clamp(110px, 13vw, 200px)' },
  'mother-dairy': { name: 'Mother Dairy', src: 'mother-dairy.png', w: 134, h: 74, replace: false, size: '74px' },
};
