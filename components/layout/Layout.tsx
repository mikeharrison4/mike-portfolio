import React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-darkslate-grey">
      <div className="max-w-7xl m-auto">{children}</div>
    </div>
  );
}

export default Layout;
