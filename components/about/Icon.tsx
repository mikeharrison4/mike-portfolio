import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  IconComponent: IconType
}

function Icon({ IconComponent }: IconProps) {
  return (
    <IconComponent />
  );
}

export default Icon;
