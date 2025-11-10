import { navItems } from "@/data";
import "./Navigation.scss";

interface NavigationProps {
  activeSection: string;
  onNavClick: (route: string) => void;
}

export const Navigation = ({ activeSection, onNavClick }: NavigationProps) => {
  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <button key={item.route} className={`navigation-link${activeSection === item.route ? " active" : ""}`} onClick={() => onNavClick(item.route)}>
          <span className="navigation-link_circle" aria-hidden="true">
            <span className="navigation-link_circle_icon arrow"></span>
          </span>
          <span className="navigation-link_text">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
