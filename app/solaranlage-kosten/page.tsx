import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';
import { Euro, TrendingDown, Zap, Battery, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solaranlage Kosten Schweiz - Was kostet Photovoltaik 2024?',
  description: 'Was kostet eine Solaranlage in der Schweiz? Umfassender Kostenüberblick: Anschaffung, Installation, Förderungen. Vergleichen Sie Angebote und sparen Sie bis zu 30%.',
  openGraph: {
    title: 'Solaranlage Kosten Schweiz - Photovoltaik Preise 2024',
    description: 'Kompletter Überblick über Solaranlagen-Kosten in der Schweiz. Preise, Förderungen, Amortisation.',
  },
};

export default function SolaranlageKostenPage() {
  const costBreakdown = [
    { item: 'Solarmodule', percentage: '35-40%', price: '7.000 - 10.000 CHF' },
    { item: 'Wechselrichter', percentage: '10-15%', price: '2.000 - 3.500 CHF' },
    { item: 'Montagesystem', percentage: '10-15%', price: '2.000 - 3.500 CHF' },
    { item: 'Installation & Elektrik', percentage: '25-30%', price: '5.000 - 7.000 CHF' },
    { item: 'Planung & Inbetriebnahme', percentage: '10-15%', price: '2.000 - 3.500 CHF' },
  ];

  const systemSizes = [
    {
      size: '3-4 kWp',
      household: '1-2 Personen',
      production: '3.300 - 4.400 kWh/Jahr',
      costs: '5.700 - 10.000 CHF',
      withSubsidy: '4.000 - 7.000 CHF',
    },
    {
      size: '5-6 kWp',
      household: '3-4 Personen',
      production: '5.500 - 6.600 kWh/Jahr',
      costs: '9.500 - 15.000 CHF',
      withSubsidy: '6.700 - 10.500 CHF',
    },
    {
      size: '8-10 kWp',
      household: '4+ Personen',
      production: '8.800 - 11.000 kWh/Jahr',
      costs: '15.200 - 25.000 CHF',
      withSubsidy: '10.600 - 17.500 CHF',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solaranlage Kosten in der{' '}
            <span className="text-primary">Schweiz 2024</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Umfassender Überblick über Preise, Förderungen und Amortisation von Photovoltaikanlagen
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Auf einen Blick</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">9.500 - 12.500 CHF</div>
                <div className="text-gray-700">Durchschnittliche Kosten für 5 kWp Anlage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">bis zu 30%</div>
                <div className="text-gray-700">Förderung durch Einmalvergütung (EIV)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10-15 Jahre</div>
                <div className="text-gray-700">Durchschnittliche Amortisationszeit</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Was kostet eine Solaranlage in der Schweiz?
          </h2>

          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Kosten für eine Photovoltaikanlage in der Schweiz hängen von verschiedenen Faktoren ab: Grösse der Anlage,
              Qualität der Komponenten, Komplexität der Installation und regionale Preisunterschiede. Im Jahr 2024 liegen die
              Kosten pro installiertem kWp zwischen 1.900 und 2.500 CHF.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Eine typische 5-kWp-Anlage für ein Einfamilienhaus kostet somit zwischen 9.500 und 12.500 CHF vor Abzug der
              Förderungen. Mit der Einmalvergütung (EIV) des Bundes reduzieren sich die Kosten auf etwa 6.700 bis 8.800 CHF.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Kostenaufschlüsselung
          </h3>

          <div className="card mb-12">
            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.item}</div>
                    <div className="text-sm text-gray-600">{item.percentage} der Gesamtkosten</div>
                  </div>
                  <div className="font-bold text-primary">{item.price}</div>
                </div>
              ))}
              <div className="flex items-center justify-between py-3 pt-6 border-t-2 border-gray-200">
                <div className="font-bold text-gray-900 text-lg">Gesamtkosten (5 kWp)</div>
                <div className="font-bold text-primary text-lg">9.500 - 12.500 CHF</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Kosten nach Anlagengrösse
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {systemSizes.map((system, index) => (
              <div key={index} className="card">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{system.size}</div>
                  <div className="text-sm text-gray-600">{system.household}</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Produktion:</span>
                    <span className="font-semibold text-gray-900">{system.production}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kosten:</span>
                    <span className="font-semibold text-gray-900">{system.costs}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <span className="text-gray-600">Mit Förderung:</span>
                    <span className="font-bold text-primary">{system.withSubsidy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Förderungen für Solaranlagen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Euro className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Einmalvergütung (EIV)</h3>
                  <p className="text-gray-600 mb-4">
                    Der Bund fördert Photovoltaikanlagen mit einer Einmalvergütung. Für kleine Anlagen (bis 100 kWp) beträgt die
                    Förderung bis zu 30% der Investitionskosten.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 3 kWp: ca. 2.700 CHF</li>
                    <li>• 5 kWp: ca. 4.200 CHF</li>
                    <li>• 10 kWp: ca. 7.500 CHF</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-trust-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-trust" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Steuerliche Abzüge</h3>
                  <p className="text-gray-600 mb-4">
                    In allen Kantonen können die Investitionskosten von den Steuern abgezogen werden. Dies kann zusätzlich 20-40%
                    der Kosten einsparen, abhängig vom Steuersatz.
                  </p>
                  <p className="text-sm text-gray-600">
                    Zusätzlich sind viele Kantone und Gemeinden mit weiteren Förderprogrammen verfügbar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Amortisation und Rendite
          </h2>

          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed">
              Die Amortisationszeit einer Solaranlage in der Schweiz beträgt durchschnittlich 10-15 Jahre. Bei einer Lebensdauer
              von 25-30 Jahren erwirtschaften Sie somit 10-20 Jahre lang quasi kostenlosen Strom. Die Rendite liegt typischerweise
              bei 4-8% pro Jahr.
            </p>
          </div>

          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Beispielrechnung: 5 kWp Anlage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Investitionskosten:</span>
                  <span className="font-bold">11.000 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Abzgl. Förderung (30%):</span>
                  <span className="font-bold text-primary">-3.300 CHF</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-primary-200">
                  <span className="text-gray-700">Nettoinvestition:</span>
                  <span className="font-bold text-primary">7.700 CHF</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Jährliche Produktion:</span>
                  <span className="font-bold">5.500 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Jährliche Einsparung:</span>
                  <span className="font-bold">~1.760 CHF</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-primary-200">
                  <span className="text-gray-700">Amortisationszeit:</span>
                  <span className="font-bold text-primary">~4.4 Jahre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jetzt individuelle Offerte einholen
            </h2>
            <p className="text-xl text-gray-600">
              Vergleichen Sie Angebote und sparen Sie bis zu 30%
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <FAQ />
    </>
  );
}
