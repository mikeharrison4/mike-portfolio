import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify-icon/react';
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
      <div className={`flex flex-col sm:flex-row ${activeSlide ? styles.active : styles.inactive}`}>
        <div className="sm:flex-1 relative h-[200px] sm:h-[300px] w-full">
          <Image src={`/${imageName}`} alt={title} fill className="rounded object-cover" />
        </div>
        <div className="mt-4 sm:mt-0 sm:flex-1 sm:px-5">
          <h4 className="text-2xl font-bold text-darkslate-grey pb-3">{title}</h4>
          <p className="pb-3">{description}</p>
          <ul className="flex">
            {skillsUsed.map((skill) => (
              <li key={skill} className="pr-4 text-2xl"><Icon icon={skill} /></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
