import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { Suspense } from "react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarheim.ch'),
  alternates: {
    canonical: 'https://solarheim.ch',
  },
  title: {
    default: 'Solarheim - Solaranlagen in der Schweiz vergleichen | Kostenlose Offerten',
    template: '%s | Solarheim',
  },
  description: 'Vergleichen Sie kostenlos Solaranlagen-Angebote von geprüften Installateuren in der Schweiz. Bis zu 30% sparen durch Angebotsvergleich. 100% unverbindlich.',
  keywords: ['Solaranlage', 'Photovoltaik', 'Solar Schweiz', 'Solaranlage Kosten', 'Solarteur', 'Solaranlage vergleichen'],
  authors: [{ name: 'Solarheim' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://solarheim.ch',
    siteName: 'SolarHeim',
    title: 'Solarheim - Solaranlagen in der Schweiz vergleichen',
    description: 'Kostenlos mehrere Solaranlagen-Angebote von geprüften Schweizer Installateuren vergleichen. Bis zu 30% sparen.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solarheim - Solaranlagen Schweiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solarheim - Solaranlagen in der Schweiz vergleichen',
    description: 'Kostenlos mehrere Solaranlagen-Angebote von geprüften Schweizer Installateuren vergleichen. Bis zu 30% sparen.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
