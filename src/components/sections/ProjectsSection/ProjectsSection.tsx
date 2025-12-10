import { SectionWrapper } from "../../ui/SectionWrapper";
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard";
import type { Project } from "@/types";
import "./ProjectsSection.scss";

interface ProjectsSectionProps {
  projects: Project[];
  skillsData: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
}

export const ProjectsSection = ({ projects, skillsData }: ProjectsSectionProps) => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h2>Skills</h2>
      <div className="skills-section">
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skill-list">
            {skillsData.languages.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Frameworks</h3>
          <div className="skill-list">
            {skillsData.frameworks.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-list">
            {skillsData.tools.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
