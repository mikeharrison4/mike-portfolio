import React from 'react';

interface ContainerProps {
  children: React.ReactNode,
  bgColor?: string;
}

function Container({ children, bgColor }: ContainerProps) {
  return (
    <div className={bgColor}>
      <div className="max-w-7xl m-auto">
        {children}
      </div>
    </div>
  );
}

Container.defaultProps = {
  bgColor: '',
};

export default Container;
