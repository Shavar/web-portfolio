import type { WorkEntry } from "../../../../types";

interface WorkEntryComponentProps {
  entry: WorkEntry;
}

export const WorkEntryComponent = ({ entry }: WorkEntryComponentProps) => {
  // Format the duration from startDate and endDate
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const formatDuration = () => {
    const startFormatted = formatDate(entry.startDate);
    const endFormatted = typeof entry.endDate === "string" ? entry.endDate : formatDate(entry.endDate);
    return `${startFormatted} - ${endFormatted}`;
  };

  return (
    <div className="timeline-entry">
      <div className="timeline-content">
        <div className="timeline-dot"></div>

        <h3 className="timeline-title">{entry.title}</h3>
        <h4 className="timeline-company">{entry.company}</h4>
        <p className="timeline-duration">{formatDuration()}</p>

        <ul className="timeline-details-list">
          {entry.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
