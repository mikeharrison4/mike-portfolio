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
      <div className={`flex ${activeSlide ? styles.active : styles.inactive}`}>
        <Image src={`/${imageName}`} alt={title} width={640} height={323} className="rounded w-1/2" />
        <div className="px-5">
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
