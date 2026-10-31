import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Catálogo de Soluciones Digitales y Páginas Web`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'páginas web república dominicana',
    'digitalización de negocios santo domingo',
    'demos páginas web rd',
    'desarrollo web república dominicana',
    'whatsapp para negocios',
    'chatbots dominicana',
    'google reviews qr rd',
    'tarjetas digitales vcard',
  ],
  authors: [{ name: 'QRMOON' }],
  creator: 'QRMOON',
  metadataBase: new URL('https://qrmoon.do'),
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://qrmoon.do',
    title: `${siteConfig.name} — Soluciones Digitales y Demos`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
