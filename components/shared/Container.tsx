import React from 'react';

interface ContainerProps {
  children: React.ReactNode,
}

function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl m-auto">
      {children}
    </div>
  );
}

export default Container;
