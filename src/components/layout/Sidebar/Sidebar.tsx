import type { ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";
import { ScrollProgressBar } from "../ScrollProgressBar";
import { profileBio } from "../../../data";
import "./Sidebar.scss";

interface SidebarProps {
  children: ReactNode;
  activeSection: string;
  scrollProgress: number;
  onNavClick: (route: string) => void;
}

export const Sidebar = ({ children, activeSection, scrollProgress, onNavClick }: SidebarProps) => {
  const { name, title, summary } = profileBio;
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="https://via.placeholder.com/100x100" alt={name} className="profile-photo" />
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="subtitle">{summary}</p>
      </div>

      <Navigation activeSection={activeSection} onNavClick={onNavClick} />

      <div className="sidebar-footer">{children}</div>

      <ScrollProgressBar progress={scrollProgress} />
    </aside>
  );
};
