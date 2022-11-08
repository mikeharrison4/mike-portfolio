import React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="font-Montserrat">
      <div className="max-w-7xl">{children}</div>
    </div>
  );
}

export default Layout;
