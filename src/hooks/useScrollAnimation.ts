import { useState, useRef, useCallback } from "react";
import { smoothScrollTo, updateHash } from "../utils/scroll";

export const useScrollAnimation = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scrollToSection = useCallback(
    async (sectionId: string) => {
      const targetElement = document.getElementById(sectionId);

      if (!targetElement || isScrolling) {
        return;
      }

      setIsScrolling(true);
      updateHash(sectionId);

      try {
        await smoothScrollTo(targetElement, 1000);
      } finally {
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Set a timeout to reset scrolling state
        scrollTimeoutRef.current = window.setTimeout(() => {
          setIsScrolling(false);
        }, 100);
      }
    },
    [isScrolling]
  );

  return {
    isScrolling,
    scrollToSection,
  };
};
