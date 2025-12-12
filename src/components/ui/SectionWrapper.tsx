import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, title, children, className = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-16 lg:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 dark:text-white mb-12 text-center lg:text-left">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
