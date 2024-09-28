import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (delay?: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);

          return () => clearTimeout(timeoutId);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return { ref, isVisible };
};

export default useIntersectionObserver;
