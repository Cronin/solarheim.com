import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://solarheim.ch",
  "name": "SolarHeim",
  "alternateName": "Solar Heim",
  "description": "Vergleichsplattform für Solaranlagen in der Schweiz",
  "inLanguage": "de-CH",
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://solarheim.ch/#formular",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }
})
          }}
        />
      </body>
    </html>
  );
}
