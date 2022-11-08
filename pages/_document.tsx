import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap"
          rel="stylesheet"
        />
        <title>mikeharrison</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;