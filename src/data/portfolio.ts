import {
  Atom,
  Blocks,
  BookOpen,
  Braces,
  Building2,
  Cable,
  Calculator,
  Code,
  Coffee,
  Compass,
  Database,
  FileCode,
  FileText,
  GitBranch,
  GraduationCap,
  Hammer,
  Layout,
  MessageCircle,
  Palette,
  Pill,
  Route,
  Rocket,
  Server,
  Brain,
  Users,
  Zap,
} from 'lucide-react';

export const personal = {
  fullName: 'Rishav Kumar Singh',
  firstName: 'Rishav',
  brandName: 'Rishav',
  role: 'Founder & Software Developer',
  product: 'MeroPharma',
  location: 'Nepal',
  about:
    "I'm Rishav Kumar Singh, a software developer and founder from Nepal. I enjoy building practical software products like MeroPharma, exploring modern technologies, and sharing what I learn with others.",
  education: {
    school: 'Deerwalk Sifal School',
    level: '+2 Science',
  },
};

export const hero = {
  greeting: "Hi, I'm Rishav 👋",
  headline: {
    line1: 'I Build Software',
    line2: 'That Solves Real',
    highlight: 'Problems.',
  },
  subtitle:
    "I'm a software developer and founder focused on building practical technology products, learning modern engineering, and solving real-world problems through software.",
  primaryCta: { label: 'View My Work', href: '#projects' },
  secondaryCta: { label: 'Download CV', href: '#' },
  credibility: {
    line1: 'Founder • Developer • Builder',
    line2: `${personal.education.school} — ${personal.education.level}`,
    icons: [Code, GraduationCap, Users, Rocket],
  },
  statCard: {
    value: 'Founder',
    label: personal.product,
  },
  aiCard: {
    title: 'AI-Assisted Dev',
    text: 'Exploring AI-assisted tools and workflows.',
  },
  portrait: {
    src: '/assets/hero_portrait.png',
    alt: 'Rishav Kumar Singh',
  },
};

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: typeof Pill;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'MeroPharma',
    category: 'Pharmacy Management Platform',
    description:
      'A pharmacy management platform designed to help pharmacies manage medicines, inventory, sales, users, and day-to-day operations.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    icon: Pill,
  },
  {
    id: 2,
    title: 'PharmaCore',
    category: 'Multi-Tenant Pharmacy ERP',
    description:
      'A multi-store pharmacy ERP with inventory, finance, analytics, user management, role-based access control, and real-time functionality.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO'],
    icon: Building2,
  },
  {
    id: 3,
    title: 'MERN Chat App',
    category: 'Full-Stack Application',
    description: 'A real-time chat application built with modern frontend and backend technologies.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    icon: MessageCircle,
  },
  {
    id: 4,
    title: 'Engineering Web Tools',
    category: 'Interactive Web Applications',
    description: 'Browser-based tools including a Mole Calculator, Projectile Motion tool, and Complex Number Calculator.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    icon: Calculator,
  },
];

export const services = [
  {
    title: 'Full-Stack Development',
    desc: 'Building practical web applications using modern frontend and backend technologies.',
    icon: Layout,
  },
  {
    title: 'Product Development',
    desc: 'Turning real-world problems into usable software products.',
    icon: Rocket,
  },
  {
    title: 'Backend & APIs',
    desc: 'Building scalable APIs, authentication, databases, and backend systems.',
    icon: Server,
  },
  {
    title: 'AI & Modern Development',
    desc: 'Exploring AI-assisted development, automation, APIs, and modern developer tools.',
    icon: Brain,
  },
];

export const technologies = [
  { name: 'React', icon: Atom },
  { name: 'TypeScript', icon: FileCode },
  { name: 'JavaScript', icon: Braces },
  { name: 'Node.js', icon: Server },
  { name: 'Express', icon: Route },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Prisma', icon: Blocks },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Vite', icon: Zap },
  { name: 'Socket.IO', icon: Cable },
  { name: 'Java', icon: Coffee },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Code },
];

export const experience = [
  {
    title: `Founder — ${personal.product}`,
    desc: 'Building and developing a pharmacy management platform focused on solving practical problems in pharmacy operations.',
    icon: Pill,
  },
  {
    title: 'Startup Experience',
    desc: 'Worked with a startup for approximately five months, gaining practical experience with software development, teamwork, product thinking, and real-world delivery.',
    icon: Rocket,
  },
  {
    title: 'Coding Educator & Community Contributor',
    desc: 'Taught coding to students through community and educational programs, with a focus on practical programming and web development.',
    icon: BookOpen,
  },
];

export const focusAreas = [
  {
    label: 'BUILD',
    title: 'Real-World Projects',
    items: ['Full-stack applications', 'SaaS products', 'Backend APIs', 'Database systems'],
    highlighted: false,
  },
  {
    label: 'LEARN',
    title: 'Continuous Growth',
    items: ['Software engineering', 'AI-assisted development', 'Backend engineering', 'System architecture'],
    highlighted: true,
    badge: 'CURRENT FOCUS',
  },
  {
    label: 'SHARE',
    title: 'Community Impact',
    items: ['Teaching coding', 'Workshops', 'Student mentorship', 'Technology communities'],
    highlighted: false,
  },
];

export const process = [
  {
    number: '01. Identify',
    desc: 'Understand the real problem, users, and requirements.',
    icon: Compass,
  },
  {
    number: '02. Plan',
    desc: 'Design the architecture, technology stack, database, and development approach.',
    icon: FileText,
  },
  {
    number: '03. Build',
    desc: 'Develop the frontend, backend, APIs, database, authentication, and core functionality.',
    icon: Hammer,
  },
  {
    number: '04. Improve',
    desc: 'Test, deploy, collect feedback, fix problems, and continuously improve the product.',
    icon: Rocket,
  },
];

export const contact = {
  heading: "Let's Build Something Useful Together",
  subtitle: "Have an idea, project, or opportunity? Let's connect and build something meaningful.",
  email: 'your-email@example.com',
  location: personal.location,
  availability: 'Open to opportunities',
  projectTypes: ['Software Project', 'Collaboration', 'Internship / Opportunity', 'University / Academic', 'Other'],
};

export const footer = {
  name: personal.fullName,
  description:
    'Software developer and founder focused on building useful products, learning continuously, and sharing technology with others.',
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'My Focus', href: '#pricing' },
    { label: 'Skills', href: '#services' },
    { label: 'Process', href: '#process' },
  ],
};

export const portfolioData = {
  personal,
  hero,
  projects,
  services,
  technologies,
  experience,
  focusAreas,
  process,
  contact,
  footer,
};

export default portfolioData;
