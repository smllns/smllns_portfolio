import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'smllns',
  description: 'smllns portfolio - React | Next.js | Tailwind CSS',
  openGraph: {
    title: 'smllns',
    description: 'smllns portfolio - React | Next.js | Tailwind CSS',
    url: 'https://smllns-portfolio-v2024.vercel.app/',
    siteName: 'smllns portfolio',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'smllns portfolio',
    description: 'smllns portfolio - React | Next.js | Tailwind CSS',
    images: ['/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </head>
      <body className={montserrat.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
