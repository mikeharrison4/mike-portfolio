import React from 'react';
import { IconType } from 'react-icons';

interface SkillIconProps {
  Icon: IconType,
  size: number,
}

function SkillIcon({ icon, ...props }: SkillIconProps) {
  return (
    <img alt={icon} height="32" width="32" src={`https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${icon}.svg`} />
  );
}

export default SkillIcon;
