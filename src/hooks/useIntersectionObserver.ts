import { useState, useEffect } from "react";
import { createIntersectionObserver } from "../utils/scroll";

export const useIntersectionObserver = (threshold: number = 0.5) => {
  const [activeSection, setActiveSection] = useState<string>("profile");

  useEffect(() => {
    const observer = createIntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [threshold]);

  return activeSection;
};
