import React from "react";
import { ProfileSection } from "./sections/ProfileSection";
import { ExperienceSection } from "./sections/ExperienceSection/ExperienceSection";
import { WebsitesSection } from "./sections/WebsitesSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";

interface PortfolioAppProps {
  profileData: any;
  experienceData: any;
  projectsData: any;
}

export default function PortfolioApp({
  profileData,
  experienceData,
  projectsData,
}: PortfolioAppProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProfileSection profileBio={profileData.profileBio} contactInfo={profileData.contactInfo} />
        <ExperienceSection
          workExperience={experienceData.workExperience}
          education={experienceData.education}
        />
        <ProjectsSection projects={projectsData.projects} skillsData={projectsData.skillsData} />
        <WebsitesSection />
      </main>
    </div>
  );
}
