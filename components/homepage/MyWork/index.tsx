import React, { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import styles from './MyWork.module.scss';
import Slide from './Slide';
import useIntersectionObserver from '../useIntersectionObserver';

type Work = {
  title: string,
  imageName: string,
  description: string,
  skillsUsed: Array<string>,
}

const projects: Array<Work> = [
  {
    title: 'Rowland Royall',
    imageName: 'rowland-royall.jpg',
    description: 'A friend reached out to me asking for a website for his Plastering business. He wanted a simple website that could showcase his work and allow clients to contact him. This was one of the first websites I built, it was coded from the ground up using HTML, CSS & JS and Bootstrap. then implemented into a custom Wordpress theme.',
    skillsUsed: ['cib:react'],
  },
  {
    title: 'MR Electrical 1',
    imageName: 'mr-electrical.jpg',
    description: 'A very simple website for the single use of allowing users to contact them via a form.',
    skillsUsed: ['cib:react'],
  },
  {
    title: 'MR Electrical 2',
    imageName: 'mr-electrical.jpg',
    description: 'A very simple website for the single use of allowing users to contact them via a form.',
    skillsUsed: ['cib:react'],
  },
  {
    title: 'MR Electrical 3',
    imageName: 'mr-electrical.jpg',
    description: 'A very simple website for the single use of allowing users to contact them via a form.',
    skillsUsed: ['cib:react'],
  },
  {
    title: 'MR Electrical 4',
    imageName: 'mr-electrical.jpg',
    description: 'A very simple website for the single use of allowing users to contact them via a form.',
    skillsUsed: ['cib:react'],
  },
];

const getPositionRelativeToCentralSlide = (
  title,
  index: number,
  centralSlideIndex: number,
  totalSlides: number,
  draggedRatio: number = 0,
): number => {
  const slidesToLeftOfCentre = Math.ceil((totalSlides - 1) / 2);
  // Creates a loop, moving a slide right as the central slide index
  // increases and then suddenly moving it to the far left and back to the center
  // e.g. 0 -> +1 -> +2 -> -2 -> -1 -> 0
  // console.log(title, index, centralSlideIndex, slidesToLeftOfCentre, totalSlides, '====>', (((index - centralSlideIndex + slidesToLeftOfCentre) + totalSlides) % totalSlides) - slidesToLeftOfCentre);

  return (
    ((((index - centralSlideIndex + slidesToLeftOfCentre) % totalSlides)
        + totalSlides)
      % totalSlides)
    - slidesToLeftOfCentre
    + draggedRatio
  );
};

function MyWork() {
  const { sliderRef, currentSlideIndex, lastScrollLeftRef } = useIntersectionObserver();
  const [centreSlideIndex, setCentreSlideIndex] = useState(0);
  function rotateArray(arr, count = 1) {
    return [
      ...arr.slice(count, arr.length),
      ...arr.slice(0, count),
    ];
  }

  function handleClickLeft() {
    setCentreSlideIndex((currentIndex) => (currentIndex + -1) % projects.length);
  }

  function handleClickRight() {
    setCentreSlideIndex((currentIndex) => (currentIndex + 1) % projects.length);
  }

  const slidesArr = projects.map(({
    title, description, skillsUsed, imageName,
  }, index: number) => (
    <Slide
      key={title}
      title={title}
      description={description}
      skillsUsed={skillsUsed}
      imageName={imageName}
      positionRelativeToCentre={getPositionRelativeToCentralSlide(
        title,
        index,
        centreSlideIndex,
        projects.length,
      )}
    />
  ));

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-bold text-3xl text-darkslate-grey mb-3">My Work</h3>
        <div className="text-3xl">
          <button type="button" className="cursor-pointer mr-2 disabled:opacity-25" onClick={handleClickLeft}>
            <Icon icon="material-symbols:arrow-back-rounded" />
          </button>
          <button type="button" className="cursor-pointer disabled:opacity-25" onClick={handleClickRight}>
            <Icon icon="material-symbols:arrow-forward-rounded" />
          </button>
        </div>
      </div>
      <div className={styles.slider} ref={sliderRef}>
        {rotateArray(slidesArr, centreSlideIndex - 1)}
      </div>
    </div>
  );
}
export default MyWork;
