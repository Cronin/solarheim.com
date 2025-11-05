import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import ScrollTracking from "@/components/ScrollTracking";
import { Suspense } from "react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarheim.ch'),
  alternates: {
    canonical: 'https://solarheim.ch/fr',
    languages: {
      'de-CH': 'https://solarheim.ch',
      'fr-CH': 'https://solarheim.ch/fr',
      'it-CH': 'https://solarheim.ch/it',
    },
  },
  title: {
    default: 'Solarheim - Comparer les installations solaires en Suisse | Devis gratuits',
    template: '%s | Solarheim',
  },
  description: 'Comparez gratuitement les offres d\'installations solaires d\'installateurs certifiés en Suisse. Économisez jusqu\'à 30% grâce à la comparaison. 100% sans engagement.',
  keywords: ['Installation solaire', 'Photovoltaïque', 'Solaire Suisse', 'Coûts installation solaire', 'Installateur solaire', 'Comparer installations solaires'],
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
    locale: 'fr_CH',
    url: 'https://solarheim.ch/fr',
    siteName: 'SolarHeim',
    title: 'Solarheim - Comparer les installations solaires en Suisse',
    description: 'Comparez gratuitement plusieurs offres d\'installations solaires d\'installateurs certifiés suisses. Économisez jusqu\'à 30%.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solarheim - Installations Solaires Suisse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solarheim - Comparer les installations solaires en Suisse',
    description: 'Comparez gratuitement les offres d\'installations solaires. Économisez jusqu\'à 30%.',
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

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CH" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <ScrollTracking />
        <Header />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SolarHeim",
  "url": "https://solarheim.ch",
  "logo": "https://solarheim.ch/logo.png",
  "sameAs": [
    "https://www.facebook.com/solarheim",
    "https://www.linkedin.com/company/solarheim"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+41774420059",
    "contactType": "customer service",
    "email": "info@solarheim.ch",
    "areaServed": "CH",
    "availableLanguage": ["de", "fr", "it"]
  }
})
          }}
        />
      </body>
    </html>
  );
}
