import React, { useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import styles from './MyWork.module.scss';
import Project from './Project';

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
];

function MyWork() {
  const slider = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState<boolean>(true);

  function handleClickLeft() {
    if (!slider.current) return;
    setCurrentSlide((prevState) => prevState - 1);
    const clientWidth = slider.current?.clientWidth;
    const scrollLeft = slider.current?.scrollLeft;

    const scrollAmount = scrollLeft - clientWidth;

    slider.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    if (scrollAmount === 0) {
      setIsLeftArrowDisabled(true);
    }
  }

  function handleClickRight(): void {
    if (!slider.current) return;
    setCurrentSlide((prevState) => prevState + 1);
    const clientWidth = slider.current?.clientWidth;
    const scrollLeft = slider.current?.scrollLeft;

    const scrollAmount = scrollLeft + clientWidth;

    slider.current?.scrollTo({ left: scrollAmount, behavior: 'smooth' });

    if (scrollLeft - clientWidth < 0) {
      setIsLeftArrowDisabled(false);
    }
  }

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-bold text-3xl text-darkslate-grey mb-3">My Work</h3>
        <div className="text-3xl">
          <button disabled={currentSlide === 0} type="button" className="cursor-pointer mr-2 disabled:opacity-25" onClick={handleClickLeft}>
            <Icon icon="material-symbols:arrow-back-rounded" />
          </button>
          <button disabled={currentSlide === 1} type="button" className="cursor-pointer disabled:opacity-25" onClick={handleClickRight}>
            <Icon icon="material-symbols:arrow-forward-rounded" />
          </button>
        </div>
      </div>
      <div className={styles.slider} ref={slider}>
        {projects.map(({
          title, description, skillsUsed, imageName,
        }) => (
          <Project
            key={title}
            title={title}
            description={description}
            skillsUsed={skillsUsed}
            imageName={imageName}
          />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
