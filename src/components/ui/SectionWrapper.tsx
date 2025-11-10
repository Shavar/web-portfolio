import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
};
