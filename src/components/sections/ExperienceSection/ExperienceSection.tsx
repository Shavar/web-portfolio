import { SectionWrapper } from "../../ui/SectionWrapper";
import { WorkEntryComponent } from "./components/WorkEntry";
import { EducationEntryComponent } from "../../ui/EducationEntry";
import { workExperience, education, skillsData } from "@/data";
import "./ExperienceSection.scss";

export const ExperienceSection = () => {
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
