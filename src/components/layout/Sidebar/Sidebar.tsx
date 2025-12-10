import type { ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";
import { ScrollProgressBar } from "../ScrollProgressBar";
import type { NavItem } from "@/types";
import "./Sidebar.scss";

interface SidebarProps {
  children: ReactNode;
  activeSection: string;
  scrollProgress: number;
  onNavClick: (route: string) => void;
  navItems: NavItem[];
}

export const Sidebar = ({ children, activeSection, scrollProgress, onNavClick, navItems }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <Navigation activeSection={activeSection} onNavClick={onNavClick} navItems={navItems} />

      <div className="sidebar-footer">{children}</div>

      <ScrollProgressBar progress={scrollProgress} />
    </aside>
  );
};
