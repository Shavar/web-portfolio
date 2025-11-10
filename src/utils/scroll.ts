// Smooth scroll animation utilities
export const cubicBezierEase = (t: number): number => {
  // cubic-bezier(0.25, 0.46, 0.45, 0.94)
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

export const smoothScrollTo = (element: HTMLElement, duration: number = 1000): Promise<void> => {
  return new Promise((resolve) => {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeProgress = cubicBezierEase(progress);
      const currentPosition = startPosition + distance * easeProgress;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animation);
  });
};

// Intersection Observer utilities
export const createIntersectionObserver = (callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// DOM utility functions
export const getElementById = (id: string): HTMLElement | null => {
  return document.getElementById(id);
};

export const updateHash = (hash: string): void => {
  history.replaceState(null, "", hash ? `#${hash}` : window.location.pathname);
};

// Scroll progress calculation
export const calculateScrollProgress = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  return Math.min((scrollTop / (scrollHeight - clientHeight)) * 100, 100);
};
