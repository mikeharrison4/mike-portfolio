import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import test from 'node:test';
import styles from './MyWork.module.scss';
import Project from './Project';
import useIntersectionObserver from '../useIntersectionObserver';
import {log} from "util";

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
    title: 'MR Electrical',
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

const baseScale = 0.5;

function MyWork() {
  const { sliderRef, currentSlideIndex, lastScrollLeftRef } = useIntersectionObserver();

  // function handleScroll() {
  //   if (!sliderRef.current) return;
  //
  //   const { scrollLeft, clientWidth } = sliderRef.current;
  //   const isScrollingLeft = scrollLeft > lastScrollLeftRef.current;
  //
  //   lastScrollLeftRef.current = scrollLeft;
  //
  //   const decimalScrollLeftAmount = scrollLeft / clientWidth;
  //   const scrollLeftPercentage = decimalScrollLeftAmount % 1 === 0
  //     ? 1
  //     : decimalScrollLeftAmount % 1;
  //
  //   const decimalScrollRightAmount = (clientWidth - (scrollLeft - clientWidth * currentSlideIndex))
  //     / clientWidth;
  //   const scrollRightPercentage = decimalScrollRightAmount % 1 === 0
  //     ? 1
  //     : decimalScrollRightAmount % 1;
  //
  //   if (isScrollingLeft) {
  //     const currentIndex = Math.floor(scrollLeft / clientWidth);
  //     const presentSlide = sliderRef.current.children[currentIndex];
  //     const nextSlide = sliderRef.current.children[currentIndex + 1];
  //
  //     // console.log(scrollLeft);
  //
  //     const halfToFullScale = scrollLeftPercentage / 2 + baseScale;
  //
  //     if (scrollLeft === clientWidth * currentIndex) {
  //       presentSlide.children[0].style.transform = 'scale(1)';
  //     } else {
  //       presentSlide.children[0].style.transform = `scale(${1 - scrollLeftPercentage / 2})`;
  //     }
  //
  //     if (nextSlide) nextSlide.children[0].style.transform = `scale(${halfToFullScale})`;
  //   }
  //
  //   if (!isScrollingLeft) {
  //     const currentIndex = Math.ceil(scrollLeft / clientWidth);
  //     const presentSlide = sliderRef.current.children[currentIndex];
  //     const prevSlide = sliderRef.current.children[currentIndex - 1];
  //
  //     const halfToFullScale = scrollRightPercentage / 2 + baseScale;
  //
  //     if (scrollLeft === clientWidth * currentIndex) {
  //       presentSlide.children[0].style.transform = 'scale(1)';
  //     } else {
  //       presentSlide.children[0].style.transform = `scale(${1 - scrollRightPercentage / 2}`;
  //       // presentSlide.children[0].style.scrollBehavior = 'smooth';
  //     }
  //
  //     if (prevSlide) prevSlide.children[0].style.transform = `scale(${halfToFullScale})`;
  //   }
  // }

  function handleClickLeft(): void {
    if (!sliderRef.current) return;

    const isLastSlide = currentSlideIndex === sliderRef.current.children.length - 1;
    const isScrolling = sliderRef.current.scrollLeft % (sliderRef.current.clientWidth) !== 0;
    const isScrollingLast = (sliderRef.current.scrollLeft)
       % (sliderRef.current.clientWidth) !== 0;

    if ((!isLastSlide && isScrolling) || (isLastSlide && isScrollingLast)) return;

    const clientWidth = sliderRef.current?.clientWidth;
    const scrollLeft = sliderRef.current?.scrollLeft;

    const scrollAmount = scrollLeft - clientWidth;

    sliderRef.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }

  function handleClickRight(): void {
    if (!sliderRef.current) return;

    const isScrolling = sliderRef.current.scrollLeft % (sliderRef.current.clientWidth) !== 0;

    if (isScrolling) return;

    const clientWidth = sliderRef.current?.clientWidth;
    const scrollLeft = sliderRef.current?.scrollLeft;

    const scrollAmount = scrollLeft + clientWidth;

    sliderRef.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });
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
        {projects.map(({
          title, description, skillsUsed, imageName,
        }, index) => (
          <Project
            key={title}
            title={title}
            description={description}
            skillsUsed={skillsUsed}
            imageName={imageName}
            activeSlide={currentSlideIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
