import type { EducationEntry } from "../../types";

interface EducationEntryComponentProps {
  entry: EducationEntry;
}

export const EducationEntryComponent = ({ entry }: EducationEntryComponentProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>{entry.degree}</h3>
        <h4>{entry.institution}</h4>
        <p className="duration">{entry.duration}</p>
      </div>
    </div>
  );
};
