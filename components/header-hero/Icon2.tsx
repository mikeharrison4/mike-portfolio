import React from 'react';
import { motion } from 'framer-motion';

interface Icon2Props {
  x: number;
  href: string;
  children: React.ReactNode;
}

function Icon2({ x, children, ...props }: Icon2Props) {
  return (
    <motion.div
      initial={{
        x,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.75,
      }}
    >
      <a {...props}>
        <svg
          className="social-svg"
          viewBox="0 0 64 64"
          style={{
            borderRadius: '50%', width: 30, height: 30, fillRule: 'evenodd',
          }}
        >
          <g className="social-svg-background" style={{ transition: 'fill 170ms ease-in-out 0s', fill: 'transparent' }}>
            <circle cx="32" cy="32" r="31" />
          </g>
          {children}
        </svg>
      </a>
    </motion.div>
  );
}

export default Icon2;
