import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js" />
      </body>
    </Html>
  );
}

export default MyDocument;
