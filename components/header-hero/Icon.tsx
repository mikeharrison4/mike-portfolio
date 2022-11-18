import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaTwitter } from 'react-icons/fa';
import LinkedIn from "./icons/LinkedIn";

interface IconProps {
  x: number,
  url: string
  fgColor?: string;
  bgColor?: string;
}

function Icon({ x, ...props }: IconProps) {
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
      <SocialIcon
        style={{ height: 30, width: 30 }}
        {...props}
      />
    </motion.div>
  );
}

Icon.defaultProps = {
  fgColor: undefined,
  bgColor: undefined,
};

export default Icon;
