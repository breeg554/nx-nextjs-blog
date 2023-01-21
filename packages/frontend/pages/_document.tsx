import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Welcome to nx-nextjs-blogpost!</title>
      </Head>
      <body className="bg-neutral-100 dark:bg-neutral-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
