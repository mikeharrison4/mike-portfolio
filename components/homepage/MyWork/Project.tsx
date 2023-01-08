import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './MyWork.module.scss';

interface ProjectProps {
  title: string;
  description: string;
  imageName: string;
  skillsUsed: Array<string>;
  activeSlide: boolean;
}

function Project({
  title, description, imageName, skillsUsed, activeSlide,
}: ProjectProps) {
  return (
    <div className={`${activeSlide ? styles.activeSlide : styles.inactiveSlide}`}>
      <div className="grid grid-cols-2">
        <Image src={`/${imageName}`} alt={title} width={640} height={323} className="rounded" />
        <div className="px-6">
          <h4 className="text-2xl font-bold text-darkslate-grey pb-3">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
