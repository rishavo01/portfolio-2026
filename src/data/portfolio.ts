// ============================================================
// PORTFOLIO DATA — Rishav Kumar Singh
// ============================================================

export const personal = {
  fullName: 'Rishav Kumar Singh',
  firstName: 'Rishav',
  tagline: 'Student Developer · Builder · Mentor',
  location: 'Nepal',
  destination: 'Nepal',
  school: 'Deerwalk Sifal School',
  level: '+2 Science',
  email: 'rishavkumarsingh012@gmail.com',
  phone: '+977 9809657146',
  whatsapp: 'https://wa.me/9779809657146',
  github: 'https://github.com/rishavo01',
  linkedin: 'https://www.linkedin.com/in/rishav-singh-521538369/',
  cv: '#',
};

export const hero = {
  greeting: 'Student Developer · Builder · Mentor',
  headline: 'I build software to understand how technology works — then share what I learn.',
  subtitle:
    'Student developer, builder, and founder from Nepal exploring full-stack development, backend engineering, AI, Web3, and DevOps through real projects.',
  primaryCta: { label: 'View My Work', href: '#projects' },
  secondaryCta: { label: 'About Me', href: '#about' },
  portrait: {
    src: '/assets/hero_portrait.png',
    alt: 'Rishav Kumar Singh',
  },
};

export const about = {
  headline: 'I learn by building.',
  story: `I'm Rishav — a student developer, builder, and founder from Nepal.
I started with programming fundamentals and gradually moved into backend development, full-stack applications, deployment, AI, and DevOps through building real software.
Today, I'm also building MeroPharma, exploring Web3 and blockchain, and continuing to deepen my understanding of software engineering.`,
  philosophy: 'Frameworks change. Fundamentals stay.',
  motif: ['LEARN', 'BUILD', 'BREAK', 'DEBUG', 'DEPLOY', 'TEACH', 'REPEAT'],
  pillars: [
    {
      label: 'I BUILD',
      title: 'Real Software',
      desc: 'Full-stack applications, APIs, pharmacy platforms, healthcare systems — built and deployed.',
    },
    {
      label: 'I LEARN',
      title: 'By Going Deeper',
      desc: 'Not just tutorials. Understanding how HTTP works, how databases work, how systems are built.',
    },
    {
      label: 'I SHARE',
      title: 'What I Know',
      desc: 'Teaching web development to students, mentoring, participating in tech communities.',
    },
  ],
  technologies: [
    'Java', 'Spring Boot', 'Angular', 'JavaScript', 'React', 'Node.js',
    'Express', 'MongoDB', 'PostgreSQL', 'Python', 'AI / Computer Vision',
    'Linux', 'VPS', 'Git', 'Deployment', 'DevOps fundamentals',
  ],
};

export interface Project {
  id: number;
  slug: string;
  title: string;
  eyebrow?: string;
  founderBadge?: string;
  category: string;
  size: 'featured' | 'medium' | 'experimental';
  problemStatement: string;
  whatIBuilt: string;
  myContribution: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  note?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'meropharma',
    title: 'MeroPharma',
    eyebrow: 'Founded · Full-Stack Product',
    founderBadge: 'Founder & Builder',
    category: 'Full-Stack Product',
    size: 'featured',
    problemStatement:
      'Pharmacies managing multiple stores often need separate systems or manual processes for inventory, sales, finance, staff, and stock movement.',
    whatIBuilt:
      'A multi-store pharmacy management platform with inventory management, medicine tracking, stock transfers, sales, finance, analytics, reports, user roles, real-time notifications, and role-based access control.',
    myContribution:
      'Founder & primary builder — responsible for product development, technical architecture, implementation, deployment, and continuous improvement.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'RBAC', 'Socket.IO'],
    image: '/assets/project1.jpg',
    demo: 'https://meropharma.com',
    note: 'MeroPharma is a pharmacy management platform designed to help pharmacies manage inventory, sales, finance, staff, and day-to-day operations from one system.',
  },
  {
    id: 2,
    slug: 'careconnect',
    title: 'CareConnect',
    category: 'Healthcare Application',
    size: 'medium',
    problemStatement:
      'Patients had no easy way to book medical appointments, and clinics had no centralized system to manage them.',
    whatIBuilt:
      'A healthcare appointment management app with patient booking flow, admin dashboard, appointment tracking, and database-backed API.',
    myContribution:
      'Built the frontend/backend architecture, designed the appointment flow, and implemented the admin management system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    image: '/assets/project2.jpg',
    demo: 'https://careconnect.rishavsingh.com.np/',
    note: 'Presented at CodeWalk — technology innovation exhibition at Deerwalk Sifal School.',
  },
  {
    id: 3,
    slug: 'chemical-inventory',
    title: 'Chemical Inventory System',
    category: 'Full-Stack Application',
    size: 'medium',
    problemStatement:
      'Chemical labs needed a system to track inventory, manage expiry dates, and avoid critical shortages.',
    whatIBuilt:
      'A full-stack inventory management system with a Spring Boot backend, REST APIs, JPA database layer, and Angular frontend — including expiry warning functionality.',
    myContribution:
      'Built the Java backend with Spring Boot, designed REST APIs, integrated Spring Data JPA with MySQL, and built the Angular frontend with full frontend/backend integration.',
    tech: ['Java', 'Spring Boot', 'Angular', 'Spring Data JPA', 'MySQL', 'REST APIs'],
    image: '/assets/project3.jpg',
    demo: 'https://chemical-inventory.rishavsingh.com.np/',
    note: 'Built while learning Java backend development — this project demonstrates learning through implementation.',
  },
  {
    id: 4,
    slug: 'farming-rover',
    title: 'Krishi AI — Smart Farming Helper Rover',
    category: 'Hardware + AI Project',
    size: 'experimental',
    problemStatement:
      'A smart farming rover designed to help small-scale farmers monitor plant health with less manual inspection. The rover uses a rocker-bogie mechanism, green color detection to locate plants, and captures leaf images for AI-based analysis.',
    whatIBuilt:
      'A rocker-bogie mechanism rover with green color detection, plant tracking, and leaf image capture. The rover captured leaf images for AI-based plant health analysis.',
    myContribution:
      'I trained the AI model used to analyze leaf images. Krishi AI is designed to detect whether a plant is healthy or diseased, identify the type of disease when detected, and suggest a possible treatment.',
    tech: ['Python', 'Computer Vision', 'AI Model Training', 'Rocker-Bogie Mechanism', 'Green Color Detection'],
    image: '/assets/project4.jpg',
    note: 'Team project presented at the 30th SET Exhibition, St. Xavier\'s College, Maitighar — Inter-College category. We didn\'t win, but the project gave me practical experience in AI model training, computer vision, agriculture-focused problem solving, hardware integration, and teamwork. The learning mattered more than the result.',
  },
];

export const learningJourney = {
  title: "I Learn in Public",
  subtitle: "A structured Java learning challenge that took me from fundamentals to real backend development.",
  philosophy: "Frameworks change. Fundamentals stay.",
  steps: [
    { number: '01', label: 'Java Fundamentals', desc: 'Variables, types, control flow, syntax' },
    { number: '02', label: 'Object-Oriented Programming', desc: 'Classes, inheritance, polymorphism, encapsulation' },
    { number: '03', label: 'Collections & Multithreading', desc: 'Data structures, generics, concurrency basics' },
    { number: '04', label: 'Databases & JDBC', desc: 'SQL, relational databases, Java DB connectivity' },
    { number: '05', label: 'Spring Boot', desc: 'Application framework, dependency injection, configuration' },
    { number: '06', label: 'REST APIs', desc: 'HTTP methods, request/response, API design' },
    { number: '07', label: 'Spring Data JPA', desc: 'ORM, repository pattern, database abstraction' },
    { number: '08', label: 'Backend Fundamentals', desc: 'HTTP, servlets, server architecture, deployment' },
  ],
};

export const teaching = {
  headline: 'I learned by building.',
  subheadline: 'Then I started teaching.',
  story: `I studied at National Ideal Boarding School until Class 10. Years later, I returned to the same school — 
this time as an instructor. Through Deerwalk Sifal School's Community Hours Program, I taught web development 
to Class 12 students at my own former school. That full circle mattered more than any certificate.`,
  flow: ['STUDENT', 'LEARNED', 'BUILT', 'RETURNED', 'TAUGHT'],
  program: "Deerwalk Sifal School — Community Hours Program",
  where: 'National Ideal Boarding School',
  topics: ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'APIs', 'Node.js', 'Express', 'MongoDB'],
  studentProjects: [
    '3D interactive website',
    'Weather application',
    'Gym website',
    'JavaScript todo list',
  ],
};

export const skills = [
  {
    category: 'BUILD',
    color: 'blue',
    items: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Spring Boot', 'Angular'],
  },
  {
    category: 'DATA',
    color: 'green',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'JPA'],
  },
  {
    category: 'ENGINEERING',
    color: 'slate',
    items: ['REST APIs', 'Authentication', 'RBAC', 'Git', 'Linux', 'VPS', 'Nginx', 'Docker', 'DevOps'],
  },
  {
    category: 'EXPLORING',
    color: 'amber',
    items: ['Web3', 'Blockchain', 'Smart Contracts', 'dApps', 'Wallets'],
  },
];

export const currentlyExploring = {
  headline: 'Currently Exploring',
  intro:
    "I'm continuously expanding beyond traditional web development and exploring how decentralized technologies work.",
  cards: [
    {
      title: 'Web3 Development',
      description:
        'Exploring decentralized application architecture, wallets, blockchain networks, Web3 APIs, and how applications interact with decentralized systems.',
      topics: ['Web3', 'dApps', 'Wallets', 'Blockchain APIs', 'Decentralized Applications'],
      icon: 'globe',
    },
    {
      title: 'Blockchain',
      description:
        'Learning the fundamentals of blockchain technology, including how transactions, blocks, consensus, smart contracts, and decentralized networks work.',
      topics: ['Blockchain Fundamentals', 'Smart Contracts', 'Transactions', 'Consensus', 'Decentralized Networks'],
      icon: 'link',
    },
  ],
};

export const githubConfig = {
  username: 'rishavo01',
  profileUrl: 'https://github.com/rishavo01',
  label: 'GitHub Contributions',
  subtitle: 'Building consistently. Learning in public.',
};

export const leadership = {
  headline: "Beyond the Code",
  subtitle: "I actively learn from the developer community outside my own projects.",
  events: [
    {
      title: 'DeerHack School Edition',
      role: 'Organizer',
      type: 'Hackathon',
      description:
        'My first experience organizing a hackathon — student-led planning, coordination, and execution. Working under pressure to create opportunities for younger students.',
      learned: ['Leadership', 'Out Reach', 'Team coordination', 'Problem solving', 'Event execution'],
      highlight: 'First time organizing a hackathon. Learned more from the chaos than from any class.',
    },
    {
      title: 'GDG Kathmandu / DevFest 2024-2026',
      role: 'Community Member',
      type: 'Tech Community',
      description:
        'Active participant in the GDG Kathmandu developer community since DevFest 2024.',
      learned: ['AI Agents', 'Gemma', 'LLMs', 'RAG', 'AI security', 'Firebase', 'Gemini', 'Google Wallet', 'Developer tooling'],
      highlight: 'Exploring cutting-edge AI topics with the broader developer community.',
    },
    {
      title: 'LOCUS 2026',
      role: 'Participant',
      type: 'National Festival',
      description:
        '22nd National Technological Festival at Pulchowk Campus — one of Nepal\'s largest student-run technology events.',
      learned: ['Networking', 'Exposure to engineering projects', 'National tech community'],
      highlight: 'Pulchowk Campus · 22nd National Technological Festival',
    },
  ],
};

export const timeline = [
  { label: 'Early Learning', desc: 'Programming fundamentals, first steps in code' },
  { label: 'Java', desc: 'Backend foundations, OOP, Spring Boot' },
  { label: 'Full Stack', desc: 'Spring Boot + Angular, frontend/backend integration' },
  { label: 'Real Products', desc: 'Healthcare + Inventory + Pharmacy platforms' },
  { label: 'Deployment', desc: 'Linux, VPS, domains, production systems' },
  { label: 'AI', desc: 'Computer Vision, LLM exploration, AI agents' },
  { label: 'Teaching', desc: 'Community Hours, mentoring Class 12 students' },
  { label: 'Leadership', desc: 'Hackathon organization, GDG community' },
  { label: 'Next', desc: 'Deeper exploration of Software Engineering, AI, Backend Systems, and Infrastructure' },
];

export const whereImGoing = {
  headline: "Where I'm Going",
  body: `I'm exploring the intersection of software engineering, backend systems, AI, Web3, blockchain, and developer infrastructure — while building real products and learning through implementation.`,
  directions: ['Software Engineering', 'Backend Engineering', 'AI', 'Web3 & Blockchain', 'DevOps & Infrastructure'],
};

export interface ExperienceEntry {
  number: string;
  eyebrow: string;
  title: string;
  type?: string;
  dateRange?: string;
  duration?: string;
  location?: string;
  description: string;
  description2?: string;
  focus: string[];
  current?: boolean;
  highlight?: string;
}

export const experience = {
  headline: "Where I've worked and built.",
  subtitle: 'Experience that shaped how I build software, work with teams, and solve real problems.',
  entries: [
    {
      number: '01',
      eyebrow: 'Deerwalk Sifal School',
      title: 'Intern',
      type: 'Internship',
      dateRange: 'Feb 2025 – Present',
      description:
        'Gained practical experience through an internship at Deerwalk Sifal School, working with visual web development and WordPress.',
      focus: ['Visual Web Development', 'WordPress'],
    },
    {
      number: '02',
      eyebrow: 'Deerwalk Sifal School',
      title: 'Volunteer Web Development Instructor',
      type: 'Community Hours Program · Volunteer',
      dateRange: 'Jun 2026 – Jul 2026',
      duration: '2 months',
      location: 'Budhanilkantha, Nepal · On-site',
      description:
        "Volunteered as a Web Development Instructor through Deerwalk Sifal School's Community Hours Program, teaching a one-month MERN Stack course to Class 12 students at National Ideal Boarding School (NIBS).",
      description2:
        'Guided students in building real-world web applications while covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, and REST APIs.',
      focus: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'REST APIs'],
    },
    {
      number: '03',
      eyebrow: 'Inspired IT Services Pvt. Ltd.',
      title: 'Project Lead',
      type: 'Full-time',
      dateRange: 'May 2026 – Aug 2026',
      duration: '4 months',
      location: 'Nepal · On-site',
      description:
        'Worked as a Project Lead at Inspired IT Services Pvt. Ltd. on a full-time basis.',
      focus: ['Project Leadership', 'Team Coordination', 'Problem Solving'],
    },
    {
      number: '04',
      eyebrow: 'MeroPharma',
      title: 'Founder & Builder',
      current: true,
      description:
        'Founded MeroPharma and built its pharmacy management platform from the ground up, combining product thinking with full-stack engineering.',
      focus: ['Product Development', 'Technical Architecture', 'Full-Stack Development', 'Database Design', 'Deployment', 'Product Decisions', 'Problem Solving'],
      highlight: 'Building a real product around a real operational problem in pharmacy management.',
    },
  ] as ExperienceEntry[],
};

export const contact = {
  heading: "Let's build something useful.",
  body: "I'm always interested in meeting people who are building, learning, teaching, or solving interesting problems with technology.",
  email: personal.email,
  location: personal.location,
  destination: personal.destination,
  availability: 'Open to conversations',
  projectTypes: ['General', 'Collaboration', 'Internship / Opportunity', 'University / Academic', 'Other'],
};

export const certifications = [
  {
    title: 'Python for Data Analysis',
    issuer: 'Simplilearn SkillUp',
    topics: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
  },
];

export default {
  personal,
  hero,
  about,
  projects,
  experience,
  learningJourney,
  teaching,
  skills,
  leadership,
  timeline,
  whereImGoing,
  contact,
  certifications,
};
