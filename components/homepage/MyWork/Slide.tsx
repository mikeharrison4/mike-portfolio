import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './MyWork.module.scss';

interface ProjectProps {
  title: string;
  description: string;
  imageName: string;
  skillsUsed: Array<string>;
  isCenteredSlide: boolean;
}

function Slide({
  title, description, imageName, skillsUsed, isCenteredSlide,
}: ProjectProps) {
  return (
    <div style={{ left: '50%', transform: `scale${isCenteredSlide ? 1 : 0.5}` }} className={`${isCenteredSlide ? styles.centeredSlide : styles.slide}`}>
      <Image src={`/${imageName}`} alt={title} width={640} height={323} className="rounded" />
      {/* <div className="mt-6"> */}
      {/*  <h4 className="text-2xl font-bold text-darkslate-grey pb-3">{title}</h4> */}
      {/*  <p>{description}</p> */}
      {/* </div> */}
    </div>
  );
}

export default Slide;
