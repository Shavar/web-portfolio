import { SectionWrapper } from "../ui/SectionWrapper";
import { WorkEntryComponent } from "../ui/WorkEntry";
import { EducationEntryComponent } from "../ui/EducationEntry";
import { workExperience, education, skillsData } from "../../data";

export const WorkSection = () => {
  return (
    <SectionWrapper id="work">
      <div className="section-content">
        <h2>Work Experience</h2>
        <div className="timeline">
          {workExperience.map((entry, index) => (
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
      </div>
    </SectionWrapper>
  );
};
