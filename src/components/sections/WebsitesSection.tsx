import { SectionWrapper } from "../ui/SectionWrapper";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data";

export const WebsitesSection = () => {
  return (
    <SectionWrapper id="websites">
      <div className="section-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
