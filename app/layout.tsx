import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://japan-by-sea-2026.fey-lion-2635.chatgpt.site'),
  title: 'Japan by Sea · Luminara 2026',
  description: 'An interactive, mobile-first guide to our October 2026 voyage around Japan aboard Luminara.',
  openGraph: {
    title: 'Japan by Sea · Luminara 2026',
    description: 'Eleven days from Yokohama around Japan and Busan aboard Luminara.',
    type: 'website',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Japan by Sea · Luminara · 9–19 October 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan by Sea · Luminara 2026',
    description: 'Eleven days from Yokohama around Japan and Busan aboard Luminara.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
