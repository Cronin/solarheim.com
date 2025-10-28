import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Solarrechner - Berechnen Sie Ihre Solaranlage',
  description: 'Kostenloser Solarrechner für die Schweiz. Berechnen Sie Anlagengrösse, Kosten und Einsparungen Ihrer Photovoltaikanlage in wenigen Sekunden.',
  openGraph: {
    title: 'Solarrechner - Photovoltaik Kosten & Ertrag berechnen',
    description: 'Berechnen Sie kostenlos das Potenzial Ihrer Solaranlage. Anlagengrösse, Kosten und jährliche Einsparungen.',
  },
};

export default function SolarrechnerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solarrechner für die{' '}
            <span className="text-primary">Schweiz</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Berechnen Sie in wenigen Sekunden das Potenzial und die Kosten Ihrer Solaranlage
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <SolarCalculator />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wie funktioniert der Solarrechner?
          </h2>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Unser Solarrechner gibt Ihnen eine schnelle Einschätzung des Potenzials Ihrer Solaranlage. Die Berechnung basiert auf
              durchschnittlichen Werten für Schweizer Verhältnisse und berücksichtigt folgende Faktoren:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dachfläche</h3>
                <p className="text-gray-600">
                  Für 1 kWp Solarleistung benötigen Sie etwa 5-7 m² Dachfläche. Moderne Module sind effizienter und benötigen
                  weniger Platz.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stromproduktion</h3>
                <p className="text-gray-600">
                  In der Schweiz produziert 1 kWp durchschnittlich 1.000-1.200 kWh Strom pro Jahr, abhängig von Ausrichtung und
                  Neigung.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kosten</h3>
                <p className="text-gray-600">
                  Aktuelle Preise liegen zwischen 1.800 und 2.500 CHF pro kWp, inklusive Installation – vor Abzug der Fördergelder.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ersparnis</h3>
                <p className="text-gray-600">
                  Bei einem Strompreis von 32 Rp/kWh senken Sie mit Eigenverbrauch Ihre Energiekosten deutlich – oft um mehrere Hundert Franken pro Jahr.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Wichtiger Hinweis</h3>
              <p className="text-gray-600 mb-0">
                Der Solarrechner liefert Schätzwerte. Für eine präzise Berechnung müssen viele weitere Faktoren berücksichtigt
                werden: Dachausrichtung, Neigungswinkel, Verschattung, lokale Strompreise, verfügbare Förderungen und mehr.
                Fordern Sie eine kostenlose professionelle Beratung an, um ein exaktes Angebot zu erhalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jetzt individuelle Offerte einholen
            </h2>
            <p className="text-xl text-gray-600">
              Erhalten Sie bis zu 3 massgeschneiderte Angebote von geprüften Solarteuren
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <FAQ />
    </>
  );
}
