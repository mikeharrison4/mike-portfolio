import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import { Montserrat } from '@next/font/google';

const alexandria = Montserrat({
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${alexandria.variable} font-montserrat`}>
      <Component {...pageProps} />
    </div>
  );
}
