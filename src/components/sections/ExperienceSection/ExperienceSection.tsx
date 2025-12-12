import { SectionWrapper } from "../../ui/SectionWrapper";
import { WorkEntryComponent } from "./components/WorkEntry";
import { EducationEntryComponent } from "../../ui/EducationEntry";
import type { WorkEntry, EducationEntry } from "@/types";

interface ExperienceSectionProps {
  workExperience: WorkEntry[];
  education: EducationEntry[];
}

export const ExperienceSection = ({ workExperience, education }: ExperienceSectionProps) => {
  return (
    <SectionWrapper id="experience" title="Career Journey">
      <div className="relative">
        {workExperience
          .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
          .map((entry, index) => (
            <WorkEntryComponent key={index} entry={entry} />
          ))}
      </div>

      <h2 className="text-2xl font-bold text-dark-800 dark:text-white mt-12 mb-6">Education</h2>
      <div className="relative">
        {education.map((entry, index) => (
          <EducationEntryComponent key={index} entry={entry} />
        ))}
      </div>
    </SectionWrapper>
  );
};
