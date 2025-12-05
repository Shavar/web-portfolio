import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, title, children, className = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};
