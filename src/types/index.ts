export type Route = "work" | "education" | "skills" | "projects" | "contact";

export interface ProfileBio {
  name: string;
  title: string;
  summary: string;
}

export interface NavItem {
  label: string;
  route: Route;
}

export interface WorkEntry {
  title: string;
  company: string;
  duration: string;
  details: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface SectionRefs {
  work: HTMLDivElement | null;
  education: HTMLDivElement | null;
  skills: HTMLDivElement | null;
  projects: HTMLDivElement | null;
  contact: HTMLDivElement | null;
}
