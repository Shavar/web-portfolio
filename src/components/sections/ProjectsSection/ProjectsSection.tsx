import { SectionWrapper } from "../../ui/SectionWrapper";
import { ProjectCard } from "@ui";
import { projects } from "@/data";

export const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
