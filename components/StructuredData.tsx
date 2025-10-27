export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://solarheim.ch/#organization",
    "name": "SolarHeim",
    "alternateName": "Solar Heim",
    "url": "https://solarheim.ch",
    "logo": "https://solarheim.ch/logo.png",
    "image": [
      "https://solarheim.ch/logo.png",
      "https://solarheim.ch/og-image.jpg"
    ],
    "description": "SolarHeim ist die führende Vergleichsplattform für Solaranlagen in der Schweiz. Wir vermitteln kostenlos Angebote von geprüften Solarteu ren und helfen Hausbesitzern, bis zu 30% zu sparen.",
    "telephone": "+41774420059",
    "email": "info@solarheim.ch",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Culmannstrasse 37",
      "addressLocality": "Zürich",
      "postalCode": "8006",
      "addressRegion": "ZH",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.3769",
      "longitude": "8.5417"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "priceRange": "$$",
    "currenciesAccepted": "CHF",
    "paymentAccepted": "Free Service",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/solarheim",
      "https://www.linkedin.com/company/solarheim"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://solarheim.ch/#formular",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Order",
        "name": "Kostenlose Solaranlage Offerte"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
