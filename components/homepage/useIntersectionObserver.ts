import React, { useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  function cb(entries: any[]): void {
    // find the active slide
    const activeSlide = entries.reduce((max, entry) => (
      entry.intersectionRatio > max.intersectionRatio ? entry : max));

    if (!sliderRef.current || activeSlide.intersectionRatio < 0.5) return undefined;

    lastScrollRef.current = sliderRef.current.scrollLeft;

    return setCurrentSlide(Array.from(sliderRef.current.children).indexOf(activeSlide.target));
  }

  React.useEffect(() => {
    if (!sliderRef.current) return undefined;

    const observer = new IntersectionObserver(cb, {
      root: sliderRef.current,
      rootMargin: '0px',
      threshold: 0.5,
    });

    Array.from(sliderRef.current.children).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return {
    sliderRef, currentSlide, lastScrollRef,
  };
};

export default useIntersectionObserver;
