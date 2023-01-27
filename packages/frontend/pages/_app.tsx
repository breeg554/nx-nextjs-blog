import '../styles/global.css';
import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { NextSeo } from '../modules/Seo';
import { RootLayout } from '../modules/Layout';
import { AppProvider } from '../modules/AppProvider';

const _inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider dehydratedState={pageProps.dehydratedState}>
      <NextSeo />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AppProvider>
  );
}

export default CustomApp;
