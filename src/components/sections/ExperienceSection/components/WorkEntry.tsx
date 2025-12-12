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
    const endFormatted =
      typeof entry.endDate === "string" ? entry.endDate : formatDate(entry.endDate);
    return `${startFormatted} - ${endFormatted}`;
  };

  return (
    <div className="relative pl-6 pb-4 border-l border-gray-200 dark:border-gray-700 mb-3 last:pb-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-gray-900 shadow-[0_0_0_2px_#3b82f6]"></div>

      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-1 leading-tight">
            {entry.title}
          </h3>
          <h4 className="text-primary font-medium mb-3">{entry.company}</h4>
        </div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex-shrink-0 ml-4">
          {formatDuration()}
        </p>
      </div>

      <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-1">
        {entry.details.map((detail, index) => (
          <li key={index} className="text-sm leading-relaxed">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};
