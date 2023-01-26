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
    <div className={styles.slide}>
      <div className={`flex flex-col ${activeSlide ? styles.active : styles.inactive}`}>
        <Image src={`/${imageName}`} alt={title} width={640} height={323} className="rounded px-2" />
        <div className="mt-6">
          <h4 className="text-2xl font-bold text-darkslate-grey pb-3">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
