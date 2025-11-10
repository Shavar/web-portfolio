import type { WorkEntry } from "../../../types";
import "./WorkEntry.scss";

interface WorkEntryComponentProps {
  entry: WorkEntry;
}

export const WorkEntryComponent = ({ entry }: WorkEntryComponentProps) => {
  // Format the duration from startDate and endDate
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const formatDuration = () => {
    const startFormatted = formatDate(new Date(entry.startDate));
    const endFormatted = typeof entry.endDate === "string" ? entry.endDate : formatDate(new Date(entry.endDate));
    return `${startFormatted} - ${endFormatted}`;
  };

  return (
    <div className="timeline-entry">
      <div className="timeline-content">
        <div className="timeline-dot"></div>
        <p className="timeline-duration">{formatDuration()}</p>
        <h3 className="timeline-title">{entry.title}</h3>
        <h4 className="timeline-company">{entry.company}</h4>

        <ul className="timeline-details-list">
          {entry.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
