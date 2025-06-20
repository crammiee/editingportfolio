// app/fonts.ts
import localFont from 'next/font/local';

export const geistSans = localFont({
  src: [
    {
      path: '../public/fonts/geist-sans/Geist-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/geist-sans/Geist-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-geist-sans',
});
