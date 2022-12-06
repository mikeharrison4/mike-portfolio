import React from 'react';
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';

import '../styles/globals.css';

const alexandria = Montserrat({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${alexandria.variable} font-montserrat`}>
      <Component {...pageProps} />
    </div>
  );
}
