import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import test from 'node:test';
import { log } from 'util';
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
];

const baseScale = 0.5;

function MyWork() {
  // function handleClickLeft(): void {
  //   if (!sliderRef.current) return;
  //
  //   const isLastSlide = currentSlideIndex === sliderRef.current.children.length - 1;
  //   const isScrolling = sliderRef.current.scrollLeft % (sliderRef.current.clientWidth) !== 0;
  //   const isScrollingLast = (sliderRef.current.scrollLeft)
  //      % (sliderRef.current.clientWidth) !== 0;
  //
  //   if ((!isLastSlide && isScrolling) || (isLastSlide && isScrollingLast)) return;
  //
  //   const clientWidth = sliderRef.current?.clientWidth;
  //   const scrollLeft = sliderRef.current?.scrollLeft;
  //
  //   const scrollAmount = scrollLeft - clientWidth;
  //
  //   sliderRef.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  // }
  //
  // function handleClickRight(): void {
  //   if (!sliderRef.current) return;
  //
  //   const isScrolling = sliderRef.current.scrollLeft % (sliderRef.current.clientWidth) !== 0;
  //
  //   if (isScrolling) return;
  //
  //   const clientWidth = sliderRef.current?.clientWidth;
  //   const scrollLeft = sliderRef.current?.scrollLeft;
  //
  //   const scrollAmount = scrollLeft + clientWidth;
  //
  //   sliderRef.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  // }

  const { sliderRef, currentSlideIndex, lastScrollLeftRef } = useIntersectionObserver();

  // things I need to do
  // Re-order slides do √

  const [centreSlideIndex, setCentreSlideIndex] = useState(0);

  function rotateArray(arr: Work[], count = 1): Work[] {
    return [
      ...arr.slice(count),
      ...arr.slice(0, count),
    ];
  }

  function handleClickLeft() {
    setCentreSlideIndex((currentIndex) => currentIndex - 1);
  }

  function handleClickRight() {
    setCentreSlideIndex((currentIndex) => currentIndex + 1);
  }

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-bold text-3xl text-darkslate-grey mb-3">My Work</h3>
        <div className="text-3xl">
          <button disabled={currentSlideIndex === 0} type="button" className="cursor-pointer mr-2 disabled:opacity-25" onClick={handleClickLeft}>
            <Icon icon="material-symbols:arrow-back-rounded" />
          </button>
          <button disabled={currentSlideIndex === projects.length - 1} type="button" className="cursor-pointer disabled:opacity-25" onClick={handleClickRight}>
            <Icon icon="material-symbols:arrow-forward-rounded" />
          </button>
        </div>
      </div>
      <div className={styles.slider} ref={sliderRef}>
        {rotateArray(projects, centreSlideIndex - 1).map(({
          title, description, skillsUsed, imageName,
        }, index) => (
          <Slide
            key={title}
            title={title}
            description={description}
            skillsUsed={skillsUsed}
            imageName={imageName}
            isCenteredSlide={index === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
