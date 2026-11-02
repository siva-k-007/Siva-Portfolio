
// ============================================================
// portfolioData.js
// Controls all text, media, and navigation links across the portfolio
// ============================================================

export const personalInfo = {
  name: "Siva",
  firstName: "Siva",
  brandName: "Siva",
  title: "Java Full Stack Developer",
  location: "Dharmapuri, India",
  phone: "9345567785",
  emails: {
    primary: "siva95545@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science student eager to start a career in IT with knowledge of Full Stack Java Web Development, ready to contribute technical skills and master emerging technologies.",
  resumeUrl: "/Siva_Resume.pdf",
};

// TAP Academy — training partner credited in footer and structured data
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/siva-k-007/projects",
  linkedin:
    "https://www.linkedin.com/in/siva-k-5705b9317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Siva",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Computer Science student building full-stack web applications, eager to apply modern technologies to create scalable solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:siva95545@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Siva_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Siva</span>, a Computer Science student and aspiring Java Full Stack Developer based in Dharmapuri, India. My greatest strength is a genuine drive to learn new technologies and tools, sharpening my skills through the placement training program at TAP Academy. I focus on building reliable software and delivering clean, intuitive web solutions.`,
  techStack: [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "MongoDB",
    "Git",
  ],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A disciplined, step-by-step approach to building clean and scalable full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understand user requirements, examine problem domains, and outline technical specifications.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect database schemas, plan RESTful endpoints, and craft responsive user experiences.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Write clean, modular code with solid backend logic and responsive front-end components.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Perform rigorous testing, optimize asset delivery, and deploy to modern hosting platforms.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "VS Code" },
        { name: "Antigravity" },
        { name: "Cursor" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "College Technical Symposium",
    description:
      "Coordinated coding competitions and technical sessions, assisting student peers with logic design and debugging challenges.",
    role: "Event Coordinator",
    badge: "Campus",
  },
  {
    title: "Web Developer Community",
    description:
      "Active participant in technical workshops and peer learning sessions, discussing modern full-stack development and Java architectures.",
    role: "Core Member",
    badge: "Community",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Full Stack Web Development Intern",
    duration: "2024 - Present",
    skills: ["Full Stack Development", "Responsive Web Design", "Modern Tooling"],
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Systematically breaking down complex programming challenges into clean, effective solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating architecture and database structures to ensure performance and scalability.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Organizing development milestones efficiently to deliver high-quality work on time.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Crafting modern, intuitive user interfaces and exploring innovative technical approaches.",
  },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Full Stack Web Application",
    description:
      "An end-to-end full stack web application featuring responsive user interfaces, structured RESTful workflows, and reliable database operations.",
    techTags: ["Java", "MySQL", "JavaScript", "Tailwind CSS"],
    links: { github: "https://github.com/siva-k-007/projects", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Developer Portfolio Website",
    description:
      "A high-performance modern developer portfolio showcasing full-stack capabilities with responsive styling and fluid animations.",
    techTags: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    links: { github: "https://github.com/siva-k-007/projects", demo: "" },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [],
  viewAllUrl:
    "https://www.linkedin.com/in/siva-k-5705b9317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

export const education = {
  degree: "B.Sc Computer Science",
  institution: "Arts & Science Dharmapuri",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Clean Code · Scalable Architecture",
    "Open to Fresher Opportunities",
  ],
  credential: "B.Sc Computer Science",
  copyright: `© ${new Date().getFullYear()} Siva | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

