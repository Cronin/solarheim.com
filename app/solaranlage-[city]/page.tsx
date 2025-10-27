import { Metadata } from 'next';
import { getCityBySlug, getAllCitySlugs, City } from '@/lib/cities';
import { notFound } from 'next/navigation';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import USPSection from '@/components/USPSection';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import { Sun, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Force static rendering
export const dynamic = 'force-static';
export const revalidate = false;

interface PageProps {
  params: {
    city: string;
  };
}

// Generate static params for all cities at build time
export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((slug) => ({
    city: slug,
  }));
}

// Force static generation for all city pages
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {
      title: 'Stadt nicht gefunden',
    };
  }

  return {
    title: `Solaranlage ${city.name} - Kostenlose Offerten vergleichen`,
    description: `Solarheim vermittelt Ihnen kostenlos mehrere Angebote für Solaranlagen in ${city.name}. Finden Sie jetzt den besten Solarteur – unverbindlich & schnell.`,
    openGraph: {
      title: `Solaranlage ${city.name} - Photovoltaik Offerte vergleichen`,
      description: `Kostenlos Solaranlagen-Angebote in ${city.name} vergleichen. Geprüfte lokale Installateure, bis zu 30% sparen.`,
      url: `https://solarheim.com/solaranlage-${params.city}`,
    },
  };
}

export default function CityPage({ params }: PageProps) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  const localFAQs = [
    {
      question: `Was kostet eine Solaranlage in ${city.name}?`,
      answer: `Die Kosten für eine Solaranlage in ${city.name} liegen typischerweise zwischen 15.000 und 30.000 CHF für ein Einfamilienhaus. Der genaue Preis hängt von der Anlagengrösse, Dachbeschaffenheit und den gewählten Komponenten ab. Durch unseren Vergleich können Sie bis zu 30% sparen.`,
    },
    {
      question: `Gibt es Förderungen für Solaranlagen in ${city.name}?`,
      answer: `Ja! In ${city.name} profitieren Sie von der Einmalvergütung (EIV) des Bundes, die bis zu 30% der Investitionskosten deckt. Zusätzlich können kantonale Förderprogramme im Kanton ${city.canton} verfügbar sein. Unsere Partner-Installateure helfen Ihnen bei der Beantragung aller Förderungen.`,
    },
    {
      question: `Wie finde ich den besten Solarteur in ${city.name}?`,
      answer: `Mit Solarheim erhalten Sie bis zu 3 kostenlose Angebote von geprüften Solarteuren in ${city.name} und Umgebung. So können Sie Preise, Leistungen und Konditionen direkt vergleichen und den besten Installateur für Ihr Projekt wählen.`,
    },
    {
      question: `Lohnt sich eine Solaranlage in ${city.name}?`,
      answer: `Ja, definitiv! ${city.name} bietet ${city.sunshineHours ? `durchschnittlich ${city.sunshineHours} Sonnenstunden pro Jahr` : 'gute Bedingungen für Solarenergie'}. Mit steigenden Strompreisen amortisiert sich eine Solaranlage in der Regel nach 10-15 Jahren, bei einer Lebensdauer von 25-30 Jahren. Zusätzlich steigern Sie die Energieunabhängigkeit und den Wert Ihrer Immobilie.`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-gray-700">
                {city.name}, Kanton {city.canton}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Solaranlage in {city.name} –{' '}
              <span className="text-primary">Photovoltaik Offerte vergleichen</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Finden Sie die besten Solarteure in {city.name} und sparen Sie bis zu 30% durch den kostenlosen Vergleich mehrerer Angebote.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Geprüfte Fachbetriebe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Bis zu 3 Offerten</span>
              </div>
            </div>

            <a href="#formular" className="btn-primary">
              Jetzt kostenlose Offerte anfordern
            </a>
          </div>
        </div>
      </section>

      {/* Why Solar in City Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Warum Solar in {city.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {city.sunshineHours ? `${city.sunshineHours} Sonnenstunden` : 'Ideale Bedingungen'}
              </h3>
              <p className="text-gray-600">
                {city.sunshineHours
                  ? `${city.name} bietet durchschnittlich ${city.sunshineHours} Sonnenstunden pro Jahr – perfekt für Solarenergie.`
                  : `${city.name} bietet ausgezeichnete Bedingungen für die Nutzung von Solarenergie.`}
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Attraktive Förderungen
              </h3>
              <p className="text-gray-600">
                Im Kanton {city.canton} profitieren Sie von Bundesförderungen und möglicherweise zusätzlichen kantonalen Programmen.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lokale Experten
              </h3>
              <p className="text-gray-600">
                Unser Netzwerk umfasst geprüfte Solarteure in {city.name} und Umgebung, die Ihre Region bestens kennen.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Solarenergie in {city.name}: Die wichtigsten Fakten
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Als Hausbesitzer in {city.name} stehen Sie vor einer zukunftsweisenden Entscheidung: die Installation einer Photovoltaikanlage.
                Die Region bietet hervorragende Voraussetzungen für die Nutzung von Solarenergie, und mit steigenden Strompreisen wird die
                Investition in eine eigene Solaranlage immer attraktiver.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Eine typische 5-kWp-Solaranlage für ein Einfamilienhaus in {city.name} kostet zwischen 15.000 und 20.000 CHF nach Abzug der
                Förderungen. Diese Anlage produziert jährlich etwa 4.500-5.500 kWh Strom, was den durchschnittlichen Bedarf eines Haushalts
                abdeckt. Durch Eigenverbrauch und Einspeisung ins Netz amortisiert sich die Anlage typischerweise nach 10-15 Jahren.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mit Solarheim finden Sie schnell und einfach die passenden Solarteure in {city.name}. Vergleichen Sie kostenlos mehrere
                Angebote und profitieren Sie von unserem schweizweiten Netzwerk geprüfter Fachbetriebe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Solar Panel Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-solar-panels.webp"
                alt={`Solaranlage Installation in ${city.name}`}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Google Maps */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDQF_fL_qx_1QZVlvJFNRl5ETBhjcJOFAE&q=${encodeURIComponent(city.name + ', Schweiz')}&zoom=12`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Karte von ${city.name}`}
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-gray-900">{city.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <USPSection />

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kostenlose Offerten für {city.name} anfordern
            </h2>
            <p className="text-xl text-gray-600">
              Erhalten Sie bis zu 3 Angebote von lokalen Solarteuren
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />

      {/* Local Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">FM</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "Dank Solarheim haben wir schnell und unkompliziert drei Angebote von Solarteuren in {city.name} erhalten.
                  Der Vergleich hat sich gelohnt – wir haben über 7.000 CHF gespart! Die Installation verlief reibungslos und
                  unsere Anlage produziert mehr Strom als erwartet."
                </p>
                <div>
                  <div className="font-bold text-gray-900">Familie Meier</div>
                  <div className="text-sm text-gray-600">{city.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={localFAQs} />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Starten Sie jetzt Ihr Solarprojekt in {city.name}
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Kostenlos, unverbindlich und in nur 2 Minuten
          </p>
          <a href="#formular" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Jetzt Offerte anfordern
          </a>
        </div>
      </section>
    </>
  );
}
