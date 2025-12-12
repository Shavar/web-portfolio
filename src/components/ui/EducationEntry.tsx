import type { EducationEntry } from "../../types";

interface EducationEntryComponentProps {
  entry: EducationEntry;
}

export const EducationEntryComponent = ({ entry }: EducationEntryComponentProps) => {
  return (
    <div className="relative pl-6 pb-4 border-l border-gray-200 dark:border-gray-700 mb-3 last:pb-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-gray-900 shadow-[0_0_0_2px_#3b82f6]"></div>

      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-1">
            {entry.degree}
          </h3>
          <h4 className="text-primary font-medium">{entry.institution}</h4>
        </div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex-shrink-0 ml-4">
          {entry.duration}
        </p>
      </div>
    </div>
  );
};
