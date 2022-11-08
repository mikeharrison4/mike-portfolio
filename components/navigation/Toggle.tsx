import { motion } from 'framer-motion';
import React, { MouseEventHandler } from 'react';
import Hamburger from './Hamburger';
import styles from './Hamburger.module.scss';

interface ToggleProps {
  handleToggleClick: MouseEventHandler<HTMLButtonElement>;
  toggleOn: true | false;
}

function Toggle({ handleToggleClick, toggleOn }: ToggleProps) {
  return (
    <motion.button
      initial={{
        x: 250,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.75,
      }}
      type="button"
      onClick={handleToggleClick}
      className={`${toggleOn ? styles.opened : ''}`}
    >
      <Hamburger />
    </motion.button>
  );
}

export default Toggle;
