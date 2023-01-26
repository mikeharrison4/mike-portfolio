import React, { useRef, useState } from 'react';

const useIntersectionObserver = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const lastScrollLeftRef = useRef<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function cb(entries: any[]): void {
    // find the active slide
    const activeSlide = entries.reduce((max, entry) => (
      entry.intersectionRatio > max.intersectionRatio ? entry : max));

    if (!sliderRef.current || activeSlide.intersectionRatio < 0.9) return undefined;

    lastScrollLeftRef.current = sliderRef.current.scrollLeft;

    return setCurrentSlideIndex(Array.from(sliderRef.current.children).indexOf(activeSlide.target));
  }

  React.useEffect(() => {
    if (!sliderRef.current) return undefined;

    const observer = new IntersectionObserver(cb, {
      root: sliderRef.current,
      rootMargin: '0px',
      threshold: 0.9,
    });

    Array.from(sliderRef.current.children).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  return {
    sliderRef, currentSlideIndex, lastScrollLeftRef,
  };
};

export default useIntersectionObserver;
