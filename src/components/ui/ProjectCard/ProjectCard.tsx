import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="p-6 rounded-lg shadow-sm transition-shadow duration-300 bg-white dark:bg-gray-800 mb-8 hover:cursor-pointer hover:shadow-lg border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
