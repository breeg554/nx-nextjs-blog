import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Inter } from '@next/font/google';

const _inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
