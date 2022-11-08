import React from 'react';

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="font-Montserrat">
      {children}
    </div>
  );
}

export default Layout;
