import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarheim.com'),
  title: {
    default: 'Solarheim - Solaranlagen in der Schweiz vergleichen | Kostenlose Offerten',
    template: '%s | Solarheim',
  },
  description: 'Vergleichen Sie kostenlos Solaranlagen-Angebote von geprüften Installateuren in der Schweiz. Bis zu 30% sparen durch Angebotsvergleich. 100% unverbindlich.',
  keywords: ['Solaranlage', 'Photovoltaik', 'Solar Schweiz', 'Solaranlage Kosten', 'Solarteur', 'Solaranlage vergleichen'],
  authors: [{ name: 'Solarheim' }],
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://solarheim.com',
    siteName: 'Solarheim',
    title: 'Solarheim - Solaranlagen in der Schweiz vergleichen',
    description: 'Kostenlos mehrere Solaranlagen-Angebote von geprüften Schweizer Installateuren vergleichen. Bis zu 30% sparen.',
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
