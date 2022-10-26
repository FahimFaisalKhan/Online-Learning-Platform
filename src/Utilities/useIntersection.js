import { useState, useEffect } from "react";

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    current && observer.observe(element.current);

    return () => observer.unobserve(current);
  }, [element, rootMargin]);

  return isVisible;
};
