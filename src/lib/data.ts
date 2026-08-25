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
    company: "GIC Myanmar Co., Ltd.",
    role: "Web Developer",
    period: "January 2025 – Present",
    companyOverview:
      "GIC Myanmar Co., Ltd. is an IT services and offshore development company within the Global Innovation Consulting (GIC) Group. The company provides system development, IT services, engineering resources, and education services, supporting Japan–Myanmar offshore and hybrid development teams.",
    responsibilities: [
      "Developed responsive and accessible web applications.",
      "Built reusable UI components.",
      "Worked with modern frontend technologies including Next.js, Tailwind CSS, and shadcn/ui.",
      "Worked with Laravel and MySQL for web-based business systems.",
      "Used Claude and prompt engineering to support architectural planning, database schema design, and complex feature implementation.",
      "Worked with AWS services for application/API integration.",
    ],
  },
  {
    company: "AGB Communication Co., Ltd.",
    role: "Backend Developer Intern",
    period: "April 2024 – June 2024",
    companyOverview:
      "AGB Communication Co., Ltd. is a Myanmar-owned technology and telecommunications company established in 2014. The company provides Internet services, network connectivity, data center infrastructure, and IT solutions.",
    responsibilities: [
      "Contributed to web application development.",
      "Worked with React and Tailwind CSS.",
      "Worked with Laravel and MySQL.",
      "Contributed to responsive web development and role-based functionality.",
    ],
  },
] as const;

export const aiProject = {
  title: "Employee Management System",
  description:
    "Developed an Employee Management System with the support of Claude AI, using structured prompts to design and implement employee management, meeting scheduling, and HR-related features.",
  tech: ["Claud" , "Prompt Engineering"],
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
    title: "QuizBox",
    company: "GIC Myanmar",
    role: "Web Developer",
    description: "An interactive online quiz platform designed to increase users’ motivation to learn through dynamic quizzes. Users can participate in quizzes and track their scores, while administrators can create, manage, and analyze quiz content.",
    tech: ["React.js", "Tailwind CSS", "shadcn/ui", "Laravel", "MySQL"],
    highlights: [
      "Reusable UI components",
      "Responsive design",
    ],
  },  
  {
    title: "Sales Support Chatbot Type",
    company: "GIC Myanmar",
    role: "Low Code Developer",
    description:
      "An AI-powered chatbot that analyzes project emails, identifies technical requirements, and recommends suitable engineers from an internal team.",
    tech: ["Microsoft Copilot Studio", "Power Automate"],
    highlights: [],
  },
   {
    title: "Checklist ChatBot – Self-Introduction",
    company: "GIC Myanmar",
    role: "Low Code Developer",
    description:
      "An AI-powered chatbot designed to collect user information and automatically generate personalized self-introduction messages. The system receives user input and validates it against predefined checklist items such as name, age, and occupation. When required information is missing, the chatbot interactively prompts the user to provide only the missing details. Once all required information is completed, the system uses AI prompting to generate a natural and appropriate self-introduction based on the collected information.",
    tech: ["Microsoft Copilot Studio"],
    highlights: [],
  },
  {
    title: "AI Clone",
    company: "GIC Myanmar",
    role: "Frontend Developer",
    description: "An AI-powered digital clone application that enables real-time human-AI interaction by integrating D-ID for realistic avatar animation and ElevenLabs for voice cloning. The system also includes an AI knowledge base for providing company information and tier-based access control with free-user time limits and promotional-code authentication.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "D-ID", "ElevenLabs", "Laravel", "MySQL" ],
    highlights: [
      "Reusable UI components",
      "Responsive design",
      "Accessibility",
      "AWS API integration",
    ],
  },
  {
    title: "My AI",
    company: "GIC Myanmar",
    role: "Frontend Developer",
    description: "MyAI is a next-generation social platform that connects AI with real-world interactions. Users can create and interact with custom AI chatbots through a messaging interface, while QR code scanning enables them to share and exchange their digital AI entities in the real world.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui","AWS Lambda", "DynamoDB", "Laravel", "MySQL" ],
    highlights: [
      "Reusable UI components",
      "Responsive design",
      "Accessibility",
      "AWS API integration",
    ],
  },
  {
    title: "Employee Management System",
    company: "GIC Myanmar",
    role: "Prompt",
    description:
      "A web-based HR system designed to centralize employee management and streamline workforce operations.",
    tech: ["Laravel", "MySQL", "Claude", "Prompt Engineering"],
    highlights: [],
  },
  {
    title: "Staff Attendance & Payroll Management System",
    company: "AGB Communication Co., Ltd.",
    role: "Backend Developer Intern",
    description: "Monitors employees’ entry/exit status, manages leave applications, and automatically calculates salaries based on attendance data.",
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
