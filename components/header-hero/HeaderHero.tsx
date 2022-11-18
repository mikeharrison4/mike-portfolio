import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Map from './map/Map';
import Typewriter from '../typewriter/Typewriter';
import {
  Twitter, LinkedIn, Instagram, Github,
} from './icons';
import Icon2 from './Icon2';

function HeaderHero() {
  return (
    <header className="flex flex-col pb-12 pt-12 md:pt-4 relative">
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        className="opacity-10 m-auto w-4/5 sm:w-3/5 md:w-2/5"
      >
        <Map />
      </motion.div>
      <div className="absolute w-full h-full text-center left-0 top-0 flex flex-col justify-center items-center pb-32">
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <Image src="/mikeharrison.jpg" alt="Mike Harrison" width={100} height={100} className="rounded-full" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.30,
          }}
          className="text-white"
        >
          <h1 className="text-4xl text-white mt-3">Mike Harrison</h1>
          <div className="w-3/4 m-auto my-3">
            <div className="flex justify-between relative">
              <Icon2 href="https://www.linkedin.com/in/md-harrison/" x={-50}>
                <LinkedIn />
              </Icon2>
              <Icon2 href="https://twitter.com/MikeyHarrison3" x={25}>
                <Twitter />
              </Icon2>
              <Icon2 href="https://github.com/mikeharrison4/" x={-25}>
                <Github />
              </Icon2>
              <Icon2 href="https://www.instagram.com/mikeyharrison_/" x={50}>
                <Instagram />
              </Icon2>
            </div>
            <hr className="my-3 m-auto" />
          </div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<FrontendEngineer />')
                .pauseFor(700)
                .start();
            }}
            config={{
              typingSpeed: 125,
            }}
          />
        </motion.div>
      </div>
    </header>
  );
}

export default HeaderHero;
