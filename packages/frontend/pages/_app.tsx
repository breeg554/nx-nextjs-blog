import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Inter } from '@next/font/google';
import { NextSeo } from '../modules/Seo';
import { RootLayout } from '../modules/Layout';

const _inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextSeo />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}

export default CustomApp;
