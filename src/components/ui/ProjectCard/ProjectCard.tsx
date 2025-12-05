import type { Project } from "@/types";
import "./ProjectCard.scss";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-card-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-card-tags_tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
