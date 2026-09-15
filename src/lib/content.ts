export const profile = {
  name: "David McClung",
  role: "Aspiring AI Engineer & Full-Stack Developer",
  location: "Belfast, UK",
  status: "MSc student, open to graduate roles",
  email: "dmcclung01@qub.ac.uk",
  github: "https://github.com/davidmcclungeng",
  linkedin: "https://linkedin.com/in/davidmcclung25",
  resumeUrl: "/David-McClung-Resume.pdf",
};

export const buildRecord = [
  {
    num: "01",
    built: "Bat Analytics Pro",
    value: "Laravel + Vue",
    where: "Tetra Tech internship, summer 2026",
  },
  {
    num: "02",
    built: "Ledger",
    value: "Django + Vue 3",
    where: "Financial reporting tool",
  },
  {
    num: "03",
    built: "New website for a former employer",
    value: "Vue 3 + TypeScript",
    where: "Premier Sound Solutions",
  },
  {
    num: "04",
    built: "Current study",
    value: "MSc AI in Business",
    where: "Queen's, 2025 to present",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    body: "Laravel on Bat Analytics Pro and Django on Ledger, both backed by SQL databases.",
    tags: ["Laravel", "Django", "SQL"],
  },
  {
    label: "Frontend",
    body: "Vue on Bat Analytics Pro, and Vue 3 with TypeScript on the Premier Sound Solutions site.",
    tags: ["Vue", "TypeScript", "PrimeVue"],
  },
  {
    label: "Tools & testing",
    body: "Claude Code day to day. Pest and PHPUnit tests, run through Azure Pipelines.",
    tags: ["Claude Code", "Git", "Azure Pipelines"],
  },
];

export type Project = {
  number: string;
  role: string;
  title: string;
  body: string;
  tags: string[];
  image?: { src: string; alt: string; width: number; height: number };
  // Numbered steps drawn as a flow, for projects that can't show a screenshot
  diagram?: { label: string; steps: string[] };
  // Spans both columns of the projects grid
  wide?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    role: "Tetra Tech internship",
    title: "Bat Analytics Pro",
    body: "The ecology team were building the charts and tables for their survey reports by hand. I helped build Bat Analytics Pro, a Laravel API and Vue app that generates them from survey and weather data. The app also sends that data to an outside AI service that writes report summaries. I also helped to design the JSON format it sends, the short-lived signed token the two services use to trust each other, and a check that blocks a summary until data entry is complete.",
    tags: ["Laravel", "Vue", "JSON Schema", "Claude Code"],
    image: {
      src: "/images/project-tetratech.png",
      alt: "Export page of Bat Analytics Pro listing downloadable survey tables as Excel and PNG files",
      width: 1017,
      height: 490,
    },
  },
  {
    number: "02",
    role: "Freelance, in development",
    title: "Premier Sound Solutions",
    body: "I used to work there as a media technician. They've asked me back to replace their old WordPress site with one that wins new clients and shows their installations. I'm building it in Vue 3 and TypeScript.",
    tags: ["Vue 3", "TypeScript", "PrimeVue"],
    image: {
      src: "/images/project-pss.png",
      alt: "Homepage of the new Premier Sound Solutions website",
      width: 1440,
      height: 900,
    },
  },
  {
    number: "03",
    role: "Volunteer treasurer, in use",
    title: "Ledger",
    body: "I'm treasurer for Newtownabbey Independent Christian School, and its accounts were kept in Excel. I have used Python and Django to build a replacement. It has now been used to process a full financial year, covering cash and cheque lodgements, credit card payments, 12 monthly reports and the annual report for the management committee.",
    tags: ["Python", "Django", "Vue 3"],
    wide: true,
    image: {
      src: "/images/project-nics.png",
      alt: "Sign-in screen of the Ledger financial reporting app",
      width: 1000,
      height: 700,
    },
    diagram: {
      label: "Every month",
      steps: [
        "Import the bank statement",
        "Categorise transactions",
        "Split bundled payments",
        "Reconcile and report",
      ],
    },
  },
];

export const experience = [
  {
    when: "Summer 2026",
    role: "Data and AI Intern, Tetra Tech",
    body: "My first software job. I worked on Bat Analytics Pro, the ecology team's reporting app, added tests to its CI pipeline, and joined the sessions where we worked out what the team needed.",
  },
  {
    when: "Ongoing, voluntary",
    role: "Treasurer, Newtownabbey Independent Christian School",
    body: "I look after a budget of around £100k a year and report to the management committee every month. Ledger came out of this role.",
  },
  {
    when: "Before software",
    role: "Media technician, electrician's assistant, delivery associate",
    body: "I designed AV systems and trained more than 50 people to use them. I also worked on over 100 electrical installations and delivered 300+ parcels a day.",
  },
];

export const education = [
  { when: "2025 - present", what: "MSc AI in Business, Queen's University Belfast" },
  { when: "2021 - 2024", what: "BA Broadcast Production, Queen's University Belfast" },
  {
    when: "2020 - 2021",
    what: "A Levels, Digital Technology (A), Geography (A), Business Studies (B); AS Design & Technology (B)",
  },
];
