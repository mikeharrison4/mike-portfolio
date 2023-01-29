import React from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

interface ProjectProps {
  title: string;
  description: string;
  imageName: string;
  skillsUsed: Array<string>;
}
function Slide({
  title, description, imageName, skillsUsed, positionRelativeToCentre,
}: ProjectProps) {
  const isCentralSlide = positionRelativeToCentre === 0;
  // eslint-disable-next-line no-nested-ternary
  const distanceFactor = isCentralSlide
    ? 1
    : Math.abs(positionRelativeToCentre) < 2
      ? 0.667 + (1 - Math.abs(positionRelativeToCentre)) * 0.333
      : 0;
  const viewportOverlap = -20
    * (isCentralSlide ? 0 : positionRelativeToCentre > 0 ? -1 : 1);
  const calculatedPosition = 50 + positionRelativeToCentre * 50 + viewportOverlap;
  const isVisibleSlide = distanceFactor >= 0.667;
  const zIndex = isVisibleSlide
    ? Math.abs(positionRelativeToCentre) < 0.5
      ? 2
      : 1
    : 0;

  console.log(title, positionRelativeToCentre);

  const computedStyles = {
    transform: `translateY(0%) translateX(-50%) scale(${distanceFactor})`,
    left: `${positionRelativeToCentre > 0
      ? Math.min(calculatedPosition, 100)
      : Math.max(calculatedPosition, 0)}%`,
    zIndex,
  };

  const animatedContainerStyles = useSpring(computedStyles);

  return (
    <animated.div
      id={title}
      style={{ ...animatedContainerStyles }}
    >
      <Image src={`/${imageName}`} alt={title} width={640} height={323} className="rounded" />
      <div className="mt-6 text-center">
        <h4 className="text-2xl font-bold text-darkslate-grey pb-3">{title}</h4>
        <p>{description}</p>
      </div>
    </animated.div>
  );
}
export default Slide;
