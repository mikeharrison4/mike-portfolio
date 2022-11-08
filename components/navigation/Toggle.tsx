import React, { MouseEventHandler } from 'react';
import Hamburger from './Hamburger';
import styles from './Hamburger.module.scss';

interface ToggleProps {
  handleToggleClick: MouseEventHandler<HTMLButtonElement>;
  toggleOn: true | false;
}

function Toggle({ handleToggleClick, toggleOn }: ToggleProps) {
  return (
    <button type="button" onClick={handleToggleClick} className={`${toggleOn ? styles.opened : ''}`}>
      <Hamburger />
    </button>
  );
}

export default Toggle;
