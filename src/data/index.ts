import type { NavItem, ProfileBio, WorkEntry, EducationEntry, Project, ContactInfo } from "../types";

// Education data
export const profileBio: ProfileBio = {
  name: "Shavar Cox",
  title: "Senior Frontend Developer",
  summary: "Quickly adapt to new technologies and thrive in collaborative environments to deliver high-quality software solutions.",
};

// Navigation configuration
export const navItems: NavItem[] = [
  { label: "Profile", route: "profile" },
  { label: "Experience", route: "experience" },
  { label: "Projects", route: "projects" },
  { label: "Websites", route: "websites" },
];

// Work experience data
export const workExperience: WorkEntry[] = [
  {
    title: "Senior Software Engineer",
    company: "Innovate Solutions Inc.",
    startDate: new Date("2021-01-01"),
    endDate: "Present",
    details: [
      "Led the development of a scalable microservices architecture, improving system performance by 40%.",
      "Mentored junior engineers, fostering a culture of collaboration and continuous learning.",
      "Architected and implemented a CI/CD pipeline, reducing deployment times by 75%.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Tech Forward LLC",
    startDate: new Date("2018-06-01"),
    endDate: new Date("2020-12-31"),
    details: [
      "Developed and maintained client-facing web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Wrote clean, maintainable, and well-documented code.",
    ],
  },
];

// Education data
export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    duration: "2014 - 2018",
  },
];

// Projects data
export const projects: Project[] = [
  {
    title: "Task Flow Manager",
    description:
      "A robust Kanban board application built with React and Zustand for state management. Features real-time drag-and-drop functionality and local persistence.",
    tags: ["React", "Zustand", "TypeScript"],
  },
  {
    title: "E-Commerce Headless Storefront",
    description: "A highly performant storefront using Next.js for SSR and integrating with a mock GraphQL API. Focus on speed and accessibility.",
    tags: ["Next.js", "GraphQL", "SSR"],
  },
];

// Skills data
export const skillsData = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
  frameworks: ["React", "Node.js", "Express.js", "Tailwind CSS", "Django"],
  tools: ["Git & GitHub", "Docker", "AWS", "PostgreSQL", "Figma"],
};

// Contact information
export const contactInfo: ContactInfo = {
  email: "john.doe@email.com",
  linkedin: "linkedin.com/in/johndoe",
  github: "github.com/johndoe",
};
