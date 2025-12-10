import React from "react";
import { Sidebar } from "@/components/layout";
import { ProfileSection } from "./sections/ProfileSection";
import { ExperienceSection } from "./sections/ExperienceSection/ExperienceSection";
import { WebsitesSection } from "./sections/WebsitesSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { useScrollAnimation, useIntersectionObserver, useScrollProgress } from "@/hooks";

interface PortfolioAppProps {
  profileData: any;
  experienceData: any;
  projectsData: any;
}

export default function PortfolioApp({ profileData, experienceData, projectsData }: PortfolioAppProps) {
  const { scrollToSection } = useScrollAnimation();
  const activeSection = useIntersectionObserver();
  const scrollProgress = useScrollProgress();

  const handleNavClick = (route: string) => {
    scrollToSection(route);
  };

  return (
    <div className="app-container">
      <div className="app-container_sidebar">
        <Sidebar activeSection={activeSection} scrollProgress={scrollProgress} onNavClick={handleNavClick} navItems={profileData.navItems}>
          <div className="footer-content">
            <p>&copy; All rights reserved.</p>
          </div>
        </Sidebar>
      </div>

      <main className="app-container_main">
        <ProfileSection profileBio={profileData.profileBio} contactInfo={profileData.contactInfo} />
        <ExperienceSection workExperience={experienceData.workExperience} education={experienceData.education} />
        <ProjectsSection projects={projectsData.projects} skillsData={projectsData.skillsData} />
        <WebsitesSection />
      </main>
    </div>
  );
}
