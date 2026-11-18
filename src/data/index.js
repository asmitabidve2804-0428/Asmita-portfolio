/* Portfolio content — personal/professional details sourced from resume. */

export const SITE = {
  name: 'Asmita Bidve',
  title: 'UI/UX Designer | Product Design | Visual Design',
  location: 'Pune, Maharashtra, India',
  email: 'asmitabidve807@gmail.com',
  phone: '9607002897',
  phoneHref: 'tel:+919607002897',
  linkedin: 'https://www.linkedin.com/in/asmita-bidve-926200289/',
  behance: 'https://www.behance.net/asmitabidve2105',
}

export const HERO = {
  role: 'UI/UX Designer | Product Design | Visual Design',
  lead:
    'I design web and mobile interfaces with clear user flows, wireframes, interactive prototypes, and polished visual design — from healthcare platforms to marketing creatives.',
}

export const ABOUT = {
  note: '26 months of professional design experience across healthcare platforms, digital products, and visual communication.',
  intro: [
    "I'm a UI/UX Designer with 26 months of professional experience across two organizations. I specialize in web and mobile interface design, user flows, wireframing, and interactive prototyping.",
    'At EHealthSystem Technologies, I design interfaces and end-to-end workflows across multiple modules of the SETU healthcare platform. Previously at Design Stories, I designed website and app screens and created 200+ presentations and pitch decks.',
    'I work primarily in Figma — using Auto Layout, components, and variants to build reusable, consistent interfaces — and translate product requirements into practical, user-friendly designs.',
  ],
  columns: [
    {
      title: 'What I focus on',
      body: 'Healthcare and service-based digital experiences, website and mobile UI, interactive prototypes, and clear visual hierarchy across screens and flows.',
    },
    {
      title: 'How I work',
      body: 'I turn requirements into structured interfaces, collaborate with teams to refine journeys, and support communication with presentations, flyers, brochures, and social creatives.',
    },
  ],
  chips: [
    'Healthcare platform design',
    'Web & mobile UI',
    'User flows & wireframes',
    'Interactive prototyping',
    'Figma components',
    'Presentations & visual design',
  ],
}

/* Existing portfolio projects — preserve structure and assets; do not invent case details. */
export const PROJECTS = [
  {
    id: 'setu',
    name: 'SETU',
    sub: 'Multi-service Healthcare Application',
    tags: ['Healthcare', 'Mobile App Design'],
    role: 'UI/UX Designer',
    tint: 'linear-gradient(135deg,#17413f,#0c2423)',
    device: 'laptop+phone',
    wide: true,
    image: '',
    desc: 'A healthcare application that brings multiple services into one place.',
  },
  {
    id: 'rentit',
    name: 'Rentit',
    sub: 'Furniture Rental Platform',
    tags: ['Website Design', 'Platform'],
    role: 'UI/UX Designer',
    tint: 'linear-gradient(135deg,#7a2c1d,#34100b)',
    device: 'laptop+phone',
    image: '',
    desc: 'A platform for renting furniture.',
  },
  {
    id: 'tapron',
    name: 'Tapron',
    sub: 'Website Redesign',
    tags: ['Website Design', 'Redesign'],
    role: 'UI/UX Designer',
    tint: 'linear-gradient(135deg,#2a2f55,#12142a)',
    device: 'laptop',
    off: true,
    image: '',
    desc: 'A redesign of an existing website.',
  },
  {
    id: 'travel',
    name: 'Travel',
    sub: 'Travel Website UI',
    tags: ['Website Design', 'Travel'],
    role: 'UI/UX Designer',
    tint: 'linear-gradient(135deg,#6a5530,#2c2210)',
    device: 'laptop',
    image: '',
    desc: 'The interface design for a travel website.',
  },
  {
    id: 'jobs',
    name: 'Careers',
    sub: 'Job Search & Upskilling Platform',
    tags: ['Website Design', 'Platform'],
    role: 'UI/UX Designer',
    tint: 'linear-gradient(135deg,#3a2c52,#171025)',
    device: 'laptop+phone',
    off: true,
    image: '',
    desc: 'A platform for searching for jobs and building skills.',
  },
  {
    id: 'womens',
    name: "Women's Health",
    sub: "Women's Healthcare Application",
    tags: ['Healthcare', 'Mobile App Design'],
    role: 'UI/UX Designer',
    tint: 'linear-gradient(135deg,#6d2a3b,#2b0f17)',
    device: 'laptop+phone',
    wide: true,
    image: '',
    desc: 'A healthcare application designed for women.',
  },
]

export const STEPS = [
  ['Research', 'Understand the users, the context and the problem before drawing anything.'],
  ['Define', 'Turn what I learned into a clear problem statement and priorities.'],
  ['Ideate', 'Explore many ideas and sketch the strongest directions.'],
  ['Wireframe', 'Lay out structure and flow before any visual styling.'],
  ['Design', 'Apply type, color and components to build polished interfaces.'],
  ['Prototype', 'Make it clickable so it can be tested and refined.'],
]

export const EXPERIENCE = [
  {
    company: 'EHealthSystem Technologies',
    dates: 'February 2026 – Present',
    current: true,
    role: 'UI/UX Designer | SETU Healthcare Platform',
    points: [
      'Designed interfaces and user flows across SETU modules including Telemedicine, Book Test, Mental Health, Generic Medicine, Drug Directory, Matrujyoti, Fitness, Government Schemes, Agriculture, and Matrimony.',
      'Mapped end-to-end service workflows from registration and service selection through bookings and completion.',
      'Created wireframes, high-fidelity UI screens, and interactive prototypes in Figma using Auto Layout, components, and variants.',
      'Translated product requirements into practical, consistent, user-friendly interface designs.',
      'Collaborated with the team to refine healthcare and service-based digital experiences.',
      'Designed promotional flyers, brochures, and social media posts.',
    ],
  },
  {
    company: 'Design Stories',
    dates: 'October 2024 – January 2026',
    current: false,
    role: 'UI/UX Designer',
    points: [
      'Designed website interfaces and mobile application screens for multiple projects.',
      'Created 200+ presentations and pitch decks with structured, visually engaging layouts.',
      'Developed UI mockups and layouts based on project requirements.',
      'Applied typography, color, spacing, composition, and visual hierarchy for design consistency.',
      'Adapted visual styles and layouts for different projects and communication goals.',
    ],
  },
]

export const FOCUS_AREAS = [
  'Website design',
  'App interfaces',
  'Presentations',
  'Social media creatives',
  'Healthcare product design',
]

export const SKILL_GROUPS = [
  {
    title: 'UI/UX Design',
    items: [
      'User Flows',
      'Wireframing',
      'High-Fidelity UI Design',
      'Interactive Prototyping',
      'Mobile App Design',
      'Website UI Design',
      'Interaction Design',
      'Responsive UI Design',
    ],
  },
  {
    title: 'Figma',
    items: ['Auto Layout', 'Components', 'Variants', 'Interactive Prototyping'],
  },
  {
    title: 'Visual Design',
    items: [
      'Visual Hierarchy',
      'Typography',
      'Layout and Composition',
      'Presentation Design',
      'Pitch Decks',
      'Social Media Creatives',
      'Flyers and Brochures',
    ],
  },
  {
    title: 'Collaboration',
    items: ['Requirement Understanding', 'Design Collaboration', 'UI Consistency'],
  },
]

export const TOOL_GROUPS = [
  {
    title: 'UI/UX Design',
    items: ['Figma', 'FigJam', 'Adobe XD', 'Miro'],
  },
  {
    title: 'Graphic Design',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva'],
  },
  {
    title: 'Presentation & Motion Design',
    items: ['Microsoft PowerPoint'],
  },
]

export const EDUCATION = [
  {
    title: 'B.A. in Fashion Design',
    meta: 'SRTMU University, Nanded · 2020–2023',
  },
  {
    title: 'UI/UX Design Certification',
    meta: 'Freelancers Academy · 6-month course',
  },
]

export const LANGUAGES = ['English', 'Hindi', 'Marathi']

export const WORK = [
  ['Social media creatives', 'Social Media', '4/5', '-2deg'],
  ['Brochure', 'Brochures', '3/4', '1.5deg'],
  ['Flyer', 'Flyers', '1/1.3', '-1deg'],
  ['Presentation', 'Presentations', '16/10', '2deg'],
  ['Social media creatives', 'Social Media', '1/1', '-1.5deg'],
  ['Brochure', 'Brochures', '16/11', '1deg'],
  ['Other visual work', 'Other', '4/5', '-2.5deg'],
  ['Flyer', 'Flyers', '3/4', '1.8deg'],
  ['Presentation', 'Presentations', '16/10', '-1deg'],
]
