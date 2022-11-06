import React from 'react';
import { Noto_Sans as NotoSans } from '@next/font/google';

const notoSans = NotoSans({
  weight: '400',
});

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={`max-w-7xl m-auto bg-darkslate-grey ${notoSans.className}`}>{children}</div>
  );
}

export default Layout;
