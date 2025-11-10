import { Sidebar } from "./components/layout";
import { WorkSection, ProjectsSection, ContactSection } from "./components/sections";
import { useScrollAnimation, useIntersectionObserver, useScrollProgress } from "./hooks";
import { navItems } from "./data";

function App() {
  const { scrollToSection } = useScrollAnimation();
  const activeSection = useIntersectionObserver();
  const scrollProgress = useScrollProgress();

  const handleNavClick = (route: string) => {
    scrollToSection(route);
  };

  return (
    <div className="app-container">
      <div className="app-container_sidebar">
        <Sidebar activeSection={activeSection} navItems={navItems} scrollProgress={scrollProgress} onNavClick={handleNavClick}>
          <div className="footer-content">
            <p>&copy; All rights reserved.</p>
          </div>
        </Sidebar>
      </div>

      <main className="app-container_main">
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
