import type { WorkEntry } from "../../types";

interface WorkEntryComponentProps {
  entry: WorkEntry;
}

export const WorkEntryComponent = ({ entry }: WorkEntryComponentProps) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>{entry.title}</h3>
        <h4>{entry.company}</h4>
        <p className="duration">{entry.duration}</p>
        <ul>
          {entry.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
