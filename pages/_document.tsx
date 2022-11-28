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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600&display=swap" rel="stylesheet" />
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
