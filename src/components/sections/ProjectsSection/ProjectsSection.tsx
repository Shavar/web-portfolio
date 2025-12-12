import { SectionWrapper } from "../../ui/SectionWrapper";
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard";
import type { Project } from "@/types";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-8">Skills</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.languages.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.frameworks.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-4">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.tools.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
