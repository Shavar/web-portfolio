import { Sidebar } from "@layout";
import { ProfileSection, ExperienceSection, WebsitesSection, ProjectsSection } from "./components/sections";
import { useScrollAnimation, useIntersectionObserver, useScrollProgress } from "@/hooks";

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
        <Sidebar activeSection={activeSection} scrollProgress={scrollProgress} onNavClick={handleNavClick}>
          <div className="footer-content">
            <p>&copy; All rights reserved.</p>
          </div>
        </Sidebar>
      </div>

      <main className="app-container_main">
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <WebsitesSection />
      </main>
    </div>
  );
}

export default App;
