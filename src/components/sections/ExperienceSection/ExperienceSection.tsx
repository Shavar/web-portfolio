import { SectionWrapper } from "../../ui/SectionWrapper";
import { WorkEntryComponent } from "./components/WorkEntry";
import { EducationEntryComponent } from "../../ui/EducationEntry";
import { WorkEntry, EducationEntry } from "@/types";
import "./ExperienceSection.scss";

interface ExperienceSectionProps {
  workExperience: WorkEntry[];
  education: EducationEntry[];
}

export const ExperienceSection = ({ workExperience, education }: ExperienceSectionProps) => {
  return (
    <SectionWrapper id="experience" title="Career Journey">
      <div className="timeline">
        {workExperience
          .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
          .map((entry, index) => (
            <WorkEntryComponent key={index} entry={entry} />
          ))}
      </div>

      <h2>Education</h2>
      <div className="timeline">
        {education.map((entry, index) => (
          <EducationEntryComponent key={index} entry={entry} />
        ))}
      </div>
    </SectionWrapper>
  );
};
