import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';
import { Battery, Zap, TrendingUp, Sun, Moon, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solaranlage mit Speicher - Photovoltaik mit Batteriespeicher',
  description: 'Solaranlage mit Batteriespeicher in der Schweiz: Kosten, Vorteile, Förderung. Maximieren Sie Ihren Eigenverbrauch und Unabhängigkeit. Jetzt Angebote vergleichen!',
  openGraph: {
    title: 'Solaranlage mit Batteriespeicher - Kosten & Vorteile',
    description: 'Photovoltaik mit Speicher für maximale Unabhängigkeit. Kosten, ROI und Förderungen im Überblick.',
  },
};

export default function SolaranlageMitSpeicherPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Höherer Eigenverbrauch',
      description: 'Steigern Sie Ihren Eigenverbrauch von 30% auf bis zu 70% durch Speicherung des Solarstroms für die Nacht.',
    },
    {
      icon: Zap,
      title: 'Energieunabhängigkeit',
      description: 'Reduzieren Sie Ihre Abhängigkeit vom Stromnetz und schützen Sie sich vor steigenden Strompreisen.',
    },
    {
      icon: Sun,
      title: 'Notstromversorgung',
      description: 'Bei einem Stromausfall versorgt Sie Ihr Batteriespeicher mit dem gespeicherten Solarstrom weiter.',
    },
  ];

  const storageOptions = [
    {
      size: '5 kWh',
      suitable: '2-3 Personen',
      costs: '5.000 - 8.000 CHF',
      description: 'Kompakte Lösung für kleine Haushalte',
    },
    {
      size: '10 kWh',
      suitable: '3-4 Personen',
      costs: '9.000 - 14.000 CHF',
      description: 'Optimal für durchschnittliche Einfamilienhäuser',
      popular: true,
    },
    {
      size: '15 kWh',
      suitable: '4+ Personen',
      costs: '13.000 - 20.000 CHF',
      description: 'Grosse Speicherkapazität für maximale Autarkie',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Battery className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Photovoltaik mit Batteriespeicher</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solaranlage mit{' '}
            <span className="text-primary">Batteriespeicher</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Maximieren Sie Ihren Eigenverbrauch und Ihre Unabhängigkeit mit einem modernen Stromspeicher
          </p>

          <a href="#formular" className="btn-primary">
            Jetzt Offerte mit Speicher anfordern
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Warum eine Solaranlage mit Speicher?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wie funktioniert ein Batteriespeicher?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tagsüber</h4>
                    <p className="text-gray-600">
                      Ihre Solaranlage produziert Strom. Der nicht sofort verbrauchte Strom wird im Batteriespeicher gespeichert,
                      statt ins Netz eingespeist zu werden.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Moon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Abends & Nachts</h4>
                    <p className="text-gray-600">
                      Wenn die Sonne nicht scheint, nutzen Sie den gespeicherten Strom aus Ihrer Batterie, statt teuren Strom vom
                      Netz zu beziehen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Kosten für Batteriespeicher
          </h2>

          <div className="prose prose-gray max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed">
              Die Kosten für einen Batteriespeicher in der Schweiz liegen zwischen 800 und 1.500 CHF pro kWh Speicherkapazität.
              Ein typischer 10-kWh-Speicher kostet somit etwa 9.000 bis 14.000 CHF inklusive Installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storageOptions.map((option, index) => (
              <div
                key={index}
                className={`card relative ${option.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Am beliebtesten
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{option.size}</div>
                  <div className="text-sm text-gray-600 mb-4">{option.suitable}</div>
                  <div className="text-xl font-bold text-gray-900 mb-2">{option.costs}</div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gesamtkosten: Solaranlage + Speicher</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Ohne Speicher (5 kWp)</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Solaranlage:</span>
                    <span className="font-semibold">18.000 CHF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Abzgl. Förderung:</span>
                    <span className="font-semibold text-primary">-5.400 CHF</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="font-bold text-primary">12.600 CHF</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Eigenverbrauch:</span>
                    <span className="font-semibold">~30%</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Mit Speicher (5 kWp + 10 kWh)</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Solaranlage + Speicher:</span>
                    <span className="font-semibold">29.000 CHF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Abzgl. Förderung:</span>
                    <span className="font-semibold text-primary">-6.500 CHF</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="font-bold text-primary">22.500 CHF</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Eigenverbrauch:</span>
                    <span className="font-semibold text-primary">~60-70%</span>
                  </div>
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
            Lohnt sich ein Batteriespeicher?
          </h2>

          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed">
              Ein Batteriespeicher verlängert die Amortisationszeit Ihrer Solaranlage um etwa 3-5 Jahre. Dennoch bietet er
              bedeutende Vorteile: höhere Energieunabhängigkeit, Schutz vor Strompreiserhöhungen und Notstromversorgung.
              Mit weiter steigenden Strompreisen wird sich ein Speicher zunehmend schneller amortisieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-primary-50 border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vorteile</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Eigenverbrauch steigt von 30% auf 60-70%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Maximale Unabhängigkeit vom Stromnetz</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Notstromfunktion bei Stromausfall</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Schutz vor steigenden Strompreisen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Höhere Umweltfreundlichkeit</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zu beachten</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-yellow-800">!</span>
                  </div>
                  <span className="text-gray-700">Höhere Anfangsinvestition (+10.000-15.000 CHF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-yellow-800">!</span>
                  </div>
                  <span className="text-gray-700">Längere Amortisationszeit (+3-5 Jahre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-yellow-800">!</span>
                  </div>
                  <span className="text-gray-700">Batterien haben eine Lebensdauer von 10-15 Jahren</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-yellow-800">!</span>
                  </div>
                  <span className="text-gray-700">Platzbedarf für Batterieschrank</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Jetzt Offerte mit Batteriespeicher anfordern
            </h2>
            <p className="text-xl text-gray-600">
              Erhalten Sie bis zu 3 Angebote für Solaranlagen mit Speicher
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <FAQ />
    </>
  );
}
