export const profile = {
  name: "David McClung",
  location: "Belfast, UK",
  status: "Available now",
  targetRoles: "software, AI / automation and digital transformation roles",
  workPreference: "Belfast, hybrid or on-site",
  email: "davidmcclung15@outlook.com",
  github: "https://github.com/davidmcclungeng",
  linkedin: "https://linkedin.com/in/davidmcclung25",
  resumeUrl: "/David-McClung-Resume.pdf",
};

export const hero = {
  // Two lines of the h1; the second is set in the accent colour
  headline: "Aspiring software developer,",
  headlineAccent: "using AI to automate manual work.",
  // Kinds of role sought, shown as a strip under the headline
  rolesLabel: "Open to",
  roles: ["Software developer", "Digital transformation", "Automation with AI"],
  intro:
    "I have just completed an MSc in Artificial Intelligence in Business at Queen's University Belfast, and am due to graduate in December 2026. My summer internship with Tetra Tech's Data & AI team was my first software job. The work I enjoy most is sitting down with a team, learning how they do a job today and building software that takes the repetitive parts off their hands, so they have more time for the work that needs them. I'm now looking for my first role in the field.",
};

// Scannable keywords only: the projects and experience above carry the detail
export const skillGroups = [
  { label: "Backend", tags: ["Django", "Python", "SQL", "Laravel"] },
  { label: "Frontend", tags: ["Vue", "JavaScript", "TypeScript", "PrimeVue"] },
  {
    label: "Tools & testing",
    tags: ["Claude Code", "Git", "PHP", "Pest", "PHPUnit", "Azure Pipelines"],
  },
  {
    label: "Process & people",
    tags: ["Process mapping", "Agile / Scrum", "User adoption", "Stakeholder reporting", "Training"],
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
    role: "Volunteer treasurer, in use",
    title: "Ledger",
    body: "I've been treasurer for Newtownabbey Independent Christian School since March 2025, and for over a year I kept its accounts by hand in Excel, which took several evenings every month. In August 2026 I built Ledger in Python and Django to handle the repetitive parts, then entered the previous financial year into it, covering cash and cheque lodgements, credit card payments, 12 monthly reports and the annual report for the management committee. My first live month in Ledger took under 30 minutes.",
    tags: ["Python", "Django", "Vue 3", "JavaScript"],
    wide: true,
    image: {
      src: "/images/project-nics.webp",
      alt: "Monthly report in Ledger with income and expenditure by category, figures and category names blurred",
      width: 1080,
      height: 788,
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
  {
    number: "02",
    role: "Tetra Tech internship",
    title: "Bat Analytics Pro",
    body: "The ecology team were building the charts and tables for their survey reports by hand. I mapped how they did it, helped build Bat Analytics Pro, a Laravel API and Vue app that generates them from survey and weather data, then demoed it to the team and helped them adopt it. I worked mostly on the Vue frontend. The app also sends that data to an outside AI service that writes report summaries.",
    tags: ["Laravel", "Vue", "JavaScript", "JSON Schema", "Claude Code"],
    image: {
      src: "/images/project-tetratech.webp",
      alt: "Export page of Bat Analytics Pro listing downloadable survey tables as Excel and PNG files",
      width: 840,
      height: 405,
    },
  },
  {
    number: "03",
    role: "Freelance, in development",
    title: "Premier Sound Solutions",
    body: "I used to work there as a media technician. They've asked me back to replace their old WordPress site with one that wins new clients and shows their installations. I'm building it in Vue 3 and TypeScript.",
    tags: ["Vue 3", "TypeScript", "PrimeVue"],
    image: {
      src: "/images/project-pss.webp",
      alt: "Homepage of the new Premier Sound Solutions website",
      width: 840,
      height: 525,
    },
  },
];

export const experience = [
  {
    when: "Summer 2026",
    role: "Data and AI Intern, Tetra Tech",
    body: "My first software job, in a Scrum team. Alongside Bat Analytics Pro I added tests to its CI pipeline and joined the requirements sessions with the ecology team.",
  },
  {
    when: "Since March 2025, voluntary",
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
  {
    when: "In progress",
    what: "Udemy courses: Full-Stack Web Development Bootcamp; 100 Days of Code: The Complete Python Pro Bootcamp",
  },
  { when: "2025 – 2026", what: "MSc AI in Business, Queen's University Belfast" },
  { when: "2021 – 2024", what: "BA Broadcast Production, Queen's University Belfast" },
  {
    when: "2020 – 2021",
    what: "A Levels, Digital Technology (A), Geography (A), Business Studies (B); AS Design & Technology (B)",
  },
];

export type ToolingCard = {
  // Short context chip above the title
  label: string;
  title: string;
  body: string;
};

export const toolingIntro =
  "I use Claude Code to write much of my code. My part is deciding what to build, reading what it writes and testing it. The harder part is deciding what AI should be trusted with.";

// Product work first: the safeguard in Bat Analytics Pro is the stronger evidence
export const toolingCards: ToolingCard[] = [
  {
    label: "In a product",
    title: "A person checks before AI writes",
    body: "Bat Analytics Pro sends survey data to an outside AI service that writes report summaries. I helped specify the rule that blocks a summary until the team has confirmed data entry is complete, so the AI never writes up half-entered data. I also helped design the JSON format it sends and the short-lived signed token the two services use to trust each other.",
  },
  {
    label: "In my own tools",
    title: "Least access, verified sources",
    body: "My AI tools can reach my real GitHub and cloud accounts, so they get only the access they need and must ask before changing anything. I turned down an add-on that wanted far more access than it needed from a source I couldn't verify, and removed another that failed a security scan even though it looked harmless to me.",
  },
];

export const contact = {
  heading: "Let's work together.",
  body: `I'm an aspiring software developer looking for ${profile.targetRoles} in ${profile.workPreference}. ${profile.status}.`,
  // Starts on its own line
  cta: "Email is the best way to reach me.",
};
