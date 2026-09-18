export const profile = {
  name: "David McClung",
  role: "Aspiring AI Engineer & Full-Stack Developer",
  location: "Belfast, UK",
  status: "Available now",
  targetRoles: "software and AI / automation roles",
  workPreference: "Belfast, hybrid or on-site",
  email: "davidmcclung15@outlook.com",
  github: "https://github.com/davidmcclungeng",
  linkedin: "https://linkedin.com/in/davidmcclung25",
  resumeUrl: "/David-McClung-Resume.pdf",
};

export const buildRecord = [
  {
    num: "01",
    built: "Bat Analytics Pro",
    value: "Laravel + Vue",
    where: "Tetra Tech Internship, Summer 2026",
  },
  {
    num: "02",
    built: "Ledger",
    value: "Django + Vue 3",
    where: "Financial Reporting Tool",
  },
  {
    num: "03",
    built: "New website for a former employer",
    value: "Vue 3 + TypeScript",
    where: "Premier Sound Solutions",
  },
  {
    num: "04",
    built: "Postgraduate study",
    value: "MSc AI in Business",
    where: "QUB, 2025 to 2026",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    body: "Django and Python on Ledger, backed by a SQL database. On Bat Analytics Pro I worked mostly on the frontend, against a Laravel API.",
    tags: ["Django", "Python", "SQL", "Laravel"],
  },
  {
    label: "Frontend",
    body: "Vue on Bat Analytics Pro, Vue 3 with JavaScript on Ledger and Vue 3 with TypeScript on the Premier Sound Solutions site.",
    tags: ["Vue", "JavaScript", "TypeScript", "PrimeVue"],
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
    body: "The ecology team were building the charts and tables for their survey reports by hand. I helped build Bat Analytics Pro, a Laravel API and Vue app that generates them from survey and weather data. The app also sends that data to an outside AI service that writes report summaries. I also helped to design the JSON format it sends, the short-lived signed token the two services use to trust each other and a check that blocks a summary until data entry is complete.",
    tags: ["Laravel", "Vue", "JSON Schema", "Claude Code"],
    image: {
      src: "/images/project-tetratech.webp",
      alt: "Export page of Bat Analytics Pro listing downloadable survey tables as Excel and PNG files",
      width: 840,
      height: 405,
    },
  },
  {
    number: "02",
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
  {
    number: "03",
    role: "Volunteer treasurer, in use",
    title: "Ledger",
    body: "I'm treasurer for Newtownabbey Independent Christian School, and its accounts were kept in Excel. I have used Python and Django to build a replacement. It has now been used to process a full financial year, covering cash and cheque lodgements, credit card payments, 12 monthly reports and the annual report for the management committee.",
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
];

export const experience = [
  {
    when: "Summer 2026",
    role: "Data and AI Intern, Tetra Tech",
    body: "My first software job. I worked on Bat Analytics Pro, the ecology team's reporting app, added tests to its CI pipeline and joined the sessions where we worked out what the team needed.",
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
  { when: "2025 - 2026", what: "MSc AI in Business, Queen's University Belfast" },
  { when: "2021 - 2024", what: "BA Broadcast Production, Queen's University Belfast" },
  {
    when: "2020 - 2021",
    what: "A Levels, Digital Technology (A), Geography (A), Business Studies (B); AS Design & Technology (B)",
  },
];

export type ToolingCall = {
  verdict: string;
  // Filled chip where the call kept a tool, outline where it removed one
  kept: boolean;
  what: string;
  body: string;
};

export const toolingIntro =
  "I use Claude Code every day, wired through MCP to GitHub, Azure, Cloudflare and a real browser. Giving an agent that much reach is the easy part. The engineering is in deciding what to trust, and these are the calls I have actually made.";

export const toolingCalls: ToolingCall[] = [
  {
    verdict: "Adopted",
    kept: true,
    what: "GitHub and Azure, on least privilege",
    body: "Both reach real accounts, so I treat them as production-adjacent by default. The GitHub token is fine-grained and scoped to the repositories I actually work in, with the admin and organisation toolsets left off. Reading and inspecting runs freely; anything that mutates infrastructure stops and asks me first.",
  },
  {
    verdict: "Rejected",
    kept: false,
    what: "A community Docker MCP server",
    body: "It asked for full Docker socket access, which is root-equivalent control of the host, and the source repository it linked to was a dead GitHub link. An unverifiable source requesting the highest possible privilege is the one combination I will not accept. I drive Docker from the CLI instead.",
  },
  {
    verdict: "Removed",
    kept: false,
    what: "A skill that scanned as critical risk",
    body: "I read it myself and it looked harmless. I removed it anyway. It came from a repository with almost no usage behind it, and a rating that severe deserves more than my own quick read. I would rather lose a nice-to-have than overrule a warning I cannot explain.",
  },
  {
    verdict: "Kept, with eyes open",
    kept: true,
    what: "A skill that fetches its own instructions",
    body: "It comes from an official Vercel repository, but it pulls its rules from a remote file every time it runs rather than shipping them. The source is trustworthy enough to keep, and it is still a different shape of risk from a fixed skill: a future change to that one file reaches me automatically. That is a trade I made knowingly, not one I missed.",
  },
];

export const toolingRule =
  "The check before anything gets installed: the source repository has to be real and inspectable, the permissions it asks for have to match what it credibly needs, and a scanner warning I cannot account for is a no.";
