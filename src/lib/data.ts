export const siteConfig = {
  name: "Aye Cho Cho Pyone",
  role: "Software Engineer",
  headline: "Building Modern Web Experiences & AI-Powered Solutions",
  subheadline:
    "Software Engineer specializing in React, Next.js, TypeScript, and AI-powered applications. I build responsive, accessible, and scalable digital experiences.",
  location: "Yangon, Myanmar",
  email: "ayechopyone92@gmail.com",
  phone: "09965104442",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "AI", href: "#ai" },
    { label: "Contact", href: "#contact" },
  ],
};

export const aboutHighlights = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    title: "AI Chatbot Development",
    description:
      "Designing chatbot interfaces and integrating AI-driven workflows into real products.",
  },
  {
    title: "Team Collaboration",
    description:
      "Working closely within small, cross-functional teams to ship full-stack features.",
  },
  {
    title: "Problem Solving",
    description:
      "Breaking down complex requirements into clean, maintainable technical solutions.",
  },
  {
    title: "Continuous Learning",
    description:
      "Constantly sharpening frontend skills and exploring AI-assisted development practices.",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    description: "Interfaces that feel fast, accessible, and considered.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    description: "Server-side logic, APIs, and data.",
    skills: ["Node.js", "Express", "Laravel", "MySQL"],
  },
  {
    category: "Cloud & AWS",
    description: "Serverless infrastructure for scalable apps.",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB"],
  },
  {
    category: "AI & Automation",
    description: "AI-assisted workflows and conversational tooling.",
    skills: ["Microsoft Copilot Studio", "Power Automate", "Claude", "Prompt Engineering"],
  },
  {
    category: "Other",
    description: "Payments and low-code platforms.",
    skills: ["Stripe", "Power Platform"],
  },
] as const;

export const experience = [
  {
    company: "GIC Myanmar",
    role: "Web Developer",
    period: "January 2025 – Present",
    points: [
      "Engineered a responsive and accessible AI chatbot interface for MyAI using Next.js, Tailwind CSS, and shadcn/ui.",
      "Developed reusable UI components for a consistent user experience.",
      "Integrated AWS Lambda APIs for chatbot interactions.",
      "Implemented dynamic QR code generation for social sharing.",
      "Developed a comprehensive HR solution for workforce management and payroll automation.",
      "Developed the backend for a six-member team using Node.js and Express.",
      "Developed a web-based Employee Management System using Laravel and MySQL.",
      "Used Claude and prompt engineering to accelerate architectural planning, database schema design, and complex feature implementation.",
    ],
  },
  {
    company: "AGB Communication Co., Ltd",
    role: "Backend Developer Intern",
    period: "April 2024 – June 2024",
    points: [
      "Developed a responsive e-learning website with role-based features for users and administrators.",
      "Worked as part of a four-person team.",
      "Used React, Tailwind CSS, Laravel, and MySQL.",
    ],
  },
] as const;

export const aiProject = {
  title: "AI Project Email Analyzer & Engineer Recommendation Chatbot",
  description:
    "Developed an AI-powered chatbot that reviews project emails, identifies key technical requirements, and suggests the best-matched engineers from an internal team.",
  tech: ["Microsoft Copilot Studio", "Power Automate", "AI", "Prompt Engineering"],
};

export const aiHighlights = [
  "Architectural planning",
  "Database schema design",
  "Complex feature implementation",
  "Faster development",
  "AI chatbot development",
  "Workflow automation",
];

export const projects = [
  {
    title: "MyAI Chatbot Interface",
    description: "An accessible and responsive AI chatbot interface designed for MyAI.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "AWS Lambda"],
    highlights: [
      "Reusable UI components",
      "Responsive design",
      "Accessibility",
      "AWS API integration",
      "Dynamic QR code generation",
    ],
  },
  {
    title: "AI Project Email Analyzer",
    description:
      "An AI-powered chatbot that analyzes project emails, identifies technical requirements, and recommends suitable engineers from an internal team.",
    tech: ["Microsoft Copilot Studio", "Power Automate", "AI"],
    highlights: [],
  },
  {
    title: "Employee Management System",
    description:
      "A web-based HR system designed to centralize employee management and streamline workforce operations.",
    tech: ["Laravel", "MySQL", "Claude", "Prompt Engineering"],
    highlights: [],
  },
  {
    title: "E-Learning Platform",
    description: "A responsive e-learning platform with role-based access for users and administrators.",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    highlights: [],
  },
] as const;

export const education = {
  school: "University of Computer Studies (Maubin)",
  degree: "Bachelor of Computer Science",
  period: "2016 – 2024",
};

export const languages = [
  { name: "English", level: "Intermediate" },
  { name: "Japanese", level: "N3" },
];
