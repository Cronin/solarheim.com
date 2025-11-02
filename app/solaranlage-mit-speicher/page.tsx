import { Metadata } from 'next';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import FAQ from '@/components/FAQ';
import { Battery, Zap, TrendingUp, Sun, Moon, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solaranlage mit Batteriespeicher Schweiz 2024 | Photovoltaik mit Stromspeicher Kosten',
  description: 'PV Anlage mit Speicher: Kosten 9.000-20.000 CHF für 10-15 kWh Batteriespeicher. Photovoltaik Speicher Schweiz Vergleich, Förderung & ROI. Eigenverbrauch bis 70% steigern!',
  keywords: ['solaranlage mit batteriespeicher', 'photovoltaik mit stromspeicher', 'photovoltaik batteriespeicher', 'pv anlage mit speicher', 'solar mit speicher kosten', 'photovoltaik speicher schweiz', 'batteriespeicher kosten', 'stromspeicher photovoltaik', 'solaranlagen batteriespeicher'],
  openGraph: {
    title: 'Photovoltaik mit Batteriespeicher Schweiz - Kosten & Vorteile 2024',
    description: 'PV Anlage mit Speicher: 10 kWh ab 9.000 CHF. Eigenverbrauch von 30% auf 70% steigern. Photovoltaik Speicher Schweiz Vergleich + Förderungen.',
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

      {/* Battery Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Arten von Batteriespeichern für Photovoltaik Anlagen
          </h2>

          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              Bei Photovoltaik Batteriespeichern gibt es verschiedene Technologien. Die Wahl des richtigen Stromspeicher-Typs
              beeinflusst Kosten, Lebensdauer und Effizienz Ihrer PV-Anlage mit Speicher erheblich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lithium-Eisenphosphat (LFP)</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong className="text-gray-900">Vorteile:</strong> Höchste Sicherheit, 6.000-10.000 Ladezyklen, lange Lebensdauer (15-20 Jahre), umweltfreundlicher</p>
                <p><strong className="text-gray-900">Kosten:</strong> 900-1.200 CHF/kWh</p>
                <p><strong className="text-gray-900">Ideal für:</strong> Einfamilienhäuser mit langfristiger Investition</p>
                <p className="text-sm bg-primary-50 p-3 rounded-lg">
                  <strong>Beliebteste Wahl:</strong> 85% der neuen Photovoltaik Anlagen mit Stromspeicher in der Schweiz nutzen LFP-Technologie
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lithium-Ionen (NMC)</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong className="text-gray-900">Vorteile:</strong> Höhere Energiedichte, kompaktere Bauweise, 4.000-6.000 Ladezyklen</p>
                <p><strong className="text-gray-900">Kosten:</strong> 800-1.000 CHF/kWh</p>
                <p><strong className="text-gray-900">Ideal für:</strong> Platzbeschränkte Installationen</p>
                <p className="text-sm bg-yellow-50 p-3 rounded-lg">
                  <strong>Hinweis:</strong> Etwas kürzere Lebensdauer (10-15 Jahre), wird zunehmend durch LFP ersetzt
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Warum LFP-Batteriespeicher für Photovoltaik?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sicher & Stabil</h4>
                  <p className="text-gray-600 text-sm">Keine thermische Durchgehgefahr, ideal für Innenaufstellung</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Lange Lebensdauer</h4>
                  <p className="text-gray-600 text-sm">Bis zu 10.000 Vollzyklen = 20+ Jahre bei typischer Nutzung</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Temperaturresistent</h4>
                  <p className="text-gray-600 text-sm">Funktioniert bei -20°C bis +60°C ohne Leistungsverlust</p>
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

      {/* Popular Brands Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Beliebte Photovoltaik Batteriespeicher Hersteller in der Schweiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">BYD Battery-Box</h3>
              <p className="text-sm text-gray-600 mb-3">Modulare LFP-Batteriespeicher 5-15 kWh</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Kosten:</strong> 8.000-18.000 CHF</p>
                <p><strong>Zyklen:</strong> 6.000+ (15 Jahre)</p>
                <p><strong>Besonderheit:</strong> Marktführer, sehr zuverlässig</p>
              </div>
            </div>

            <div className="card ring-2 ring-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Top Wahl</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Huawei LUNA</h3>
              <p className="text-sm text-gray-600 mb-3">Intelligente Stromspeicher 5-15 kWh</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Kosten:</strong> 7.500-16.000 CHF</p>
                <p><strong>Zyklen:</strong> 5.000+ (12-15 Jahre)</p>
                <p><strong>Besonderheit:</strong> Bestes Preis-Leistungs-Verhältnis</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fronius Solar Battery</h3>
              <p className="text-sm text-gray-600 mb-3">Österreichische Qualität 4-12 kWh</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Kosten:</strong> 7.000-14.000 CHF</p>
                <p><strong>Zyklen:</strong> 5.000+ (12 Jahre)</p>
                <p><strong>Besonderheit:</strong> Perfekt für Fronius Wechselrichter</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tesla Powerwall</h3>
              <p className="text-sm text-gray-600 mb-3">Premium Batteriespeicher 13.5 kWh</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Kosten:</strong> 14.000-17.000 CHF</p>
                <p><strong>Zyklen:</strong> 5.000+ (10 Jahre Garantie)</p>
                <p><strong>Besonderheit:</strong> Elegantes Design, App-Steuerung</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">SolarEdge Energy Bank</h3>
              <p className="text-sm text-gray-600 mb-3">Modulare Speicherlösung 9-23 kWh</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Kosten:</strong> 10.000-22.000 CHF</p>
                <p><strong>Zyklen:</strong> 5.000+ (10 Jahre)</p>
                <p><strong>Besonderheit:</strong> Nahtlose Integration mit SolarEdge</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sonnen Batterie</h3>
              <p className="text-sm text-gray-600 mb-3">Deutsche Premium-Qualität 5-15 kWh</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Kosten:</strong> 9.000-20.000 CHF</p>
                <p><strong>Zyklen:</strong> 10.000+ (LFP)</p>
                <p><strong>Besonderheit:</strong> Community-Strom-Sharing</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wie wähle ich den richtigen Batteriespeicher?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Wichtige Kriterien:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Kapazität:</strong> Basierend auf Ihrem Stromverbrauch (siehe nächste Sektion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Kompatibilität:</strong> Passt zu Ihrem Wechselrichter?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Modularität:</strong> Erweiterbar für zukünftiges E-Auto?</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900">Unsere Empfehlung:</h4>
                <p className="text-gray-600">
                  Lassen Sie sich von mehreren Installateuren beraten. Die meisten Installateure arbeiten mit 2-3 Marken.
                  Mit SolarHeim erhalten Sie Offerten mit verschiedenen Batteriespeicher-Optionen und können Kosten direkt vergleichen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Guide Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Welche Speichergrösse für Ihre PV-Anlage?
          </h2>

          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed">
              Die richtige Dimensionierung Ihres Photovoltaik Batteriespeichers hängt von Ihrem Stromverbrauch und der Grösse
              Ihrer Solaranlage ab. Eine Faustregel: Pro 1 kWp Photovoltaik-Leistung sollten Sie 1-1,5 kWh Speicherkapazität einplanen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kleiner Haushalt</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Stromverbrauch:</strong> 3.000-4.500 kWh/Jahr</p>
                <p><strong>PV-Anlage:</strong> 4-6 kWp</p>
                <p><strong>Batteriespeicher:</strong> 5-7 kWh</p>
                <p><strong>Eigenverbrauch:</strong> 60-65%</p>
                <p className="text-sm bg-white p-3 rounded-lg">
                  Ideal für: 2-3 Personen, Wohnung oder kleines Haus
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-white ring-2 ring-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard-Haushalt</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Stromverbrauch:</strong> 4.500-6.500 kWh/Jahr</p>
                <p><strong>PV-Anlage:</strong> 6-10 kWp</p>
                <p><strong>Batteriespeicher:</strong> 8-12 kWh</p>
                <p><strong>Eigenverbrauch:</strong> 65-70%</p>
                <p className="text-sm bg-white p-3 rounded-lg">
                  Ideal für: 3-4 Personen, Einfamilienhaus
                </p>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-purple-50 to-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Grosser Haushalt</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Stromverbrauch:</strong> 6.500-10.000 kWh/Jahr</p>
                <p><strong>PV-Anlage:</strong> 10-15 kWp</p>
                <p><strong>Batteriespeicher:</strong> 12-20 kWh</p>
                <p><strong>Eigenverbrauch:</strong> 70-80%</p>
                <p className="text-sm bg-white p-3 rounded-lg">
                  Ideal für: 4+ Personen, E-Auto, Wärmepumpe
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sonderfall: E-Auto & Wärmepumpe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Mit Elektroauto
                </h4>
                <p className="text-gray-600 mb-3">
                  Ein E-Auto verbraucht 2.000-3.000 kWh/Jahr zusätzlich. Empfehlung:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>PV-Anlage:</strong> +3-5 kWp (total 10-15 kWp)</li>
                  <li><strong>Batteriespeicher:</strong> +5-8 kWh (total 15-20 kWh)</li>
                  <li><strong>Alternative:</strong> Tagsüber laden ohne extra Speicher</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Mit Wärmepumpe
                </h4>
                <p className="text-gray-600 mb-3">
                  Wärmepumpen erhöhen Winterverbrauch deutlich. Empfehlung:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Wintermonate:</strong> Speicher weniger effektiv (wenig Sonne)</li>
                  <li><strong>Sommermonate:</strong> Warmwasser mit Solar vorheizen</li>
                  <li><strong>Lösung:</strong> Grössere PV-Anlage (12-15 kWp), Speicher 10-12 kWh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Subsidies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Förderung & Steuerabzug für Photovoltaik mit Stromspeicher
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Einmalvergütung (EIV)</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Die <strong className="text-gray-900">Einmalvergütung</strong> wird vom Bund für neue Photovoltaik-Anlagen gewährt:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Grundbeitrag:</strong> 700 CHF pauschal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>+ Leistungsbeitrag:</strong> 380 CHF/kWp (bis 10 kWp), dann 300 CHF/kWp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Batteriespeicher Zuschlag:</strong> +400 CHF bei Speicher ≥5 kWh</span>
                  </li>
                </ul>
                <div className="bg-primary-50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Beispiel 7 kWp + 10 kWh Speicher:</strong><br />
                    700 + (7 × 380) + 400 = <strong className="text-primary">3.760 CHF Förderung</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Steuerabzug</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Solaranlagen mit Batteriespeicher sind als <strong className="text-gray-900">energiesparende Investition</strong> steuerlich absetzbar:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Bundessteuer:</strong> Vollständig absetzbar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Kantonssteuer:</strong> Je nach Kanton unterschiedlich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Ersparnis:</strong> Bis zu 30-40% der Kosten durch Steuerabzug</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Wichtig:</strong> Steuerabzug und EIV können kombiniert werden! Effektive Kostenreduktion: 40-50%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kantonale Förderungen für Batteriespeicher</h3>
            <p className="text-gray-600 mb-4">
              Einige Kantone bieten zusätzliche Förderungen für Photovoltaik Speicher. Stand 2024:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">Kanton Zürich</h4>
                <p className="text-sm text-gray-600">Keine zusätzliche Speicherförderung, aber hohe Steuerabzüge</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">Kanton Bern</h4>
                <p className="text-sm text-gray-600">Energieberatung kostenlos, Förderung via EIV</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">Kanton Basel</h4>
                <p className="text-sm text-gray-600">Zusatzförderung bis 3.000 CHF möglich (Gemeinde abhängig)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">Kanton Genf</h4>
                <p className="text-sm text-gray-600">25% Zusatzförderung auf Batteriespeicher</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">Kanton Waadt</h4>
                <p className="text-sm text-gray-600">Förderung via EIV + kommunale Programme</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">Kanton Tessin</h4>
                <p className="text-sm text-gray-600">Energiepaket mit bis zu 20% Zusatzförderung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Häufige Fragen zu Photovoltaik mit Batteriespeicher
          </h2>

          <div className="space-y-4">
            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Was kostet eine Solaranlage mit Batteriespeicher in der Schweiz?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Eine <strong>Photovoltaik Anlage mit Stromspeicher</strong> kostet in der Schweiz zwischen <strong>22.000 und 40.000 CHF</strong>:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>5 kWp PV + 5 kWh Speicher:</strong> 22.000-28.000 CHF</li>
                  <li>• <strong>7 kWp PV + 10 kWh Speicher:</strong> 28.000-35.000 CHF</li>
                  <li>• <strong>10 kWp PV + 15 kWh Speicher:</strong> 35.000-42.000 CHF</li>
                </ul>
                <p className="mt-3">
                  Nach Abzug der Einmalvergütung (3.000-7.000 CHF) und Steuerabzügen (30-40%) reduzieren sich die effektiven Kosten um ca. 40-50%.
                </p>
              </div>
            </details>

            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Wie viel kWh Batteriespeicher brauche ich für mein Einfamilienhaus?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Die optimale Speichergrösse hängt von Ihrem Stromverbrauch ab:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>2-3 Personen (3.500 kWh/Jahr):</strong> 5-7 kWh Batteriespeicher</li>
                  <li>• <strong>3-4 Personen (5.000 kWh/Jahr):</strong> 8-12 kWh Batteriespeicher</li>
                  <li>• <strong>4+ Personen (7.000+ kWh/Jahr):</strong> 12-15 kWh Batteriespeicher</li>
                  <li>• <strong>Mit E-Auto:</strong> +5-8 kWh (total 15-20 kWh)</li>
                </ul>
                <p className="mt-3">
                  <strong>Faustregel:</strong> Pro 1 kWp PV-Leistung rechnet man 1-1,5 kWh Speicherkapazität. Ein 7 kWp System benötigt also 7-10 kWh Speicher.
                </p>
              </div>
            </details>

            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Lohnt sich ein Batteriespeicher für Photovoltaik 2024?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Ein <strong>Photovoltaik Batteriespeicher</strong> lohnt sich 2024 primär für <strong>Unabhängigkeit</strong>, weniger für reine Wirtschaftlichkeit:
                </p>
                <p className="mb-3"><strong>Vorteile:</strong></p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li>✓ Eigenverbrauch steigt von 30% auf 60-70%</li>
                  <li>✓ Schutz vor steigenden Strompreisen (2024: 25-35 Rp/kWh)</li>
                  <li>✓ Notstromfunktion bei Stromausfall</li>
                  <li>✓ Maximale Energieunabhängigkeit</li>
                </ul>
                <p className="mb-3"><strong>Nachteile:</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>✗ Längere Amortisation (+3-5 Jahre, total 12-15 Jahre)</li>
                  <li>✗ Höhere Anfangsinvestition (+10.000-15.000 CHF)</li>
                </ul>
                <p className="mt-3">
                  <strong>Fazit:</strong> Mit Strompreisen über 30 Rp/kWh wird ein Speicher zunehmend wirtschaftlicher. Ideal für Haushalte mit hohem Abendverbrauch.
                </p>
              </div>
            </details>

            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Welcher Photovoltaik Speicher ist der beste?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Die besten <strong>Batteriespeicher für Photovoltaik</strong> in der Schweiz 2024:
                </p>
                <ul className="space-y-3 ml-4">
                  <li><strong>1. Huawei LUNA:</strong> Bestes Preis-Leistungs-Verhältnis (7.500-16.000 CHF, 5.000+ Zyklen)</li>
                  <li><strong>2. BYD Battery-Box:</strong> Marktführer, sehr zuverlässig (8.000-18.000 CHF, 6.000+ Zyklen)</li>
                  <li><strong>3. Fronius Solar Battery:</strong> Perfekt für Fronius Wechselrichter (7.000-14.000 CHF)</li>
                  <li><strong>4. Tesla Powerwall:</strong> Premium mit App (14.000-17.000 CHF, 13.5 kWh fix)</li>
                  <li><strong>5. Sonnen Batterie:</strong> Deutsche Qualität, lange Lebensdauer (9.000-20.000 CHF, 10.000+ Zyklen)</li>
                </ul>
                <p className="mt-3">
                  <strong>Technologie:</strong> Wir empfehlen LFP (Lithium-Eisenphosphat) für höchste Sicherheit und längste Lebensdauer (15-20 Jahre).
                </p>
              </div>
            </details>

            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Gibt es Förderung für PV-Anlage mit Speicher in der Schweiz?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Ja! Der Bund fördert <strong>Solaranlagen mit Batteriespeicher</strong> durch die Einmalvergütung (EIV):
                </p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li>• <strong>Grundbeitrag:</strong> 700 CHF pauschal</li>
                  <li>• <strong>Leistungsbeitrag:</strong> 380 CHF/kWp (bis 10 kWp), dann 300 CHF/kWp</li>
                  <li>• <strong>Batteriespeicher-Bonus:</strong> +400 CHF bei Speicher ≥5 kWh</li>
                </ul>
                <p className="mb-3">
                  <strong>Beispiel 7 kWp + 10 kWh Speicher:</strong><br />
                  700 + (7 × 380) + 400 = <strong className="text-primary">3.760 CHF Förderung</strong>
                </p>
                <p className="mb-3">
                  <strong>Steuerabzug:</strong> Zusätzlich können Sie die gesamten Kosten der PV-Anlage mit Speicher von den Steuern abziehen
                  (Bund + Kanton). Effektive Kostenreduktion: <strong>40-50%</strong>
                </p>
                <p>
                  <strong>Kantonale Förderungen:</strong> Basel, Genf und Tessin bieten zusätzlich bis zu 25% Förderung auf Batteriespeicher.
                </p>
              </div>
            </details>

            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Wie lange hält ein Batteriespeicher für Photovoltaik?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Die Lebensdauer von <strong>Photovoltaik Batteriespeichern</strong> hängt von der Technologie ab:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Lithium-Eisenphosphat (LFP):</strong> 6.000-10.000 Ladezyklen = <strong>15-20 Jahre</strong></li>
                  <li>• <strong>Lithium-Ionen (NMC):</strong> 4.000-6.000 Ladezyklen = <strong>10-15 Jahre</strong></li>
                </ul>
                <p className="mt-3">
                  <strong>Herstellergarantie:</strong> Die meisten Hersteller garantieren 10 Jahre oder 80% Restkapazität.
                  LFP-Batterien halten typischerweise länger als die Garantie.
                </p>
                <p className="mt-3">
                  <strong>Wartung:</strong> Batteriespeicher sind wartungsfrei. Die PV-Anlage hält 25-30 Jahre, der Speicher sollte
                  also einmal während der Lebensdauer der Anlage ersetzt werden (nach 15-20 Jahren).
                </p>
              </div>
            </details>

            <details className="card group">
              <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-gray-900 p-2">
                <span>Was kostet 1 kWh Batteriespeicher in der Schweiz?</span>
                <span className="text-primary transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pt-4 text-gray-600 border-t mt-4">
                <p className="mb-3">
                  Die <strong>Kosten pro kWh Batteriespeicher</strong> in der Schweiz 2024:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Lithium-Eisenphosphat (LFP):</strong> 900-1.200 CHF/kWh (empfohlen)</li>
                  <li>• <strong>Lithium-Ionen (NMC):</strong> 800-1.000 CHF/kWh</li>
                </ul>
                <p className="mt-3">
                  <strong>Preisentwicklung:</strong> Die Kosten für Batteriespeicher sind 2024 um ca. 20-30% gesunken gegenüber 2022.
                  Trend: Weitere Preisreduktion erwartet durch grössere Produktionskapazitäten.
                </p>
                <p className="mt-3">
                  <strong>Beispiele:</strong>
                </p>
                <ul className="space-y-1 ml-4 mt-2">
                  <li>• 5 kWh: 5.000-7.000 CHF</li>
                  <li>• 10 kWh: 9.000-14.000 CHF</li>
                  <li>• 15 kWh: 13.000-20.000 CHF</li>
                </ul>
              </div>
            </details>
          </div>

          {/* FAQ Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Was kostet eine Solaranlage mit Batteriespeicher in der Schweiz?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Eine Photovoltaik Anlage mit Stromspeicher kostet in der Schweiz zwischen 22.000 und 40.000 CHF. Nach Abzug der Einmalvergütung und Steuerabzügen reduzieren sich die effektiven Kosten um ca. 40-50%.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Wie viel kWh Batteriespeicher brauche ich für mein Einfamilienhaus?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Für ein Einfamilienhaus mit 3-4 Personen empfehlen wir 8-12 kWh Batteriespeicher. Die Faustregel: Pro 1 kWp PV-Leistung rechnet man 1-1,5 kWh Speicherkapazität.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Lohnt sich ein Batteriespeicher für Photovoltaik 2024?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Ein Batteriespeicher lohnt sich 2024 primär für Unabhängigkeit. Der Eigenverbrauch steigt von 30% auf 60-70%. Die Amortisationszeit verlängert sich um 3-5 Jahre, aber mit steigenden Strompreisen wird ein Speicher zunehmend wirtschaftlicher.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Welcher Photovoltaik Speicher ist der beste?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Die besten Batteriespeicher in der Schweiz sind: Huawei LUNA (bestes Preis-Leistungs-Verhältnis), BYD Battery-Box (Marktführer), Fronius Solar Battery, Tesla Powerwall und Sonnen Batterie. Wir empfehlen LFP-Technologie für längste Lebensdauer (15-20 Jahre).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Gibt es Förderung für PV-Anlage mit Speicher in der Schweiz?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Ja, der Bund fördert durch die Einmalvergütung (EIV): 700 CHF Grundbeitrag + 380 CHF/kWp + 400 CHF Batteriespeicher-Bonus. Zusätzlich sind die Kosten steuerlich absetzbar. Effektive Kostenreduktion: 40-50%.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Wie lange hält ein Batteriespeicher für Photovoltaik?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Lithium-Eisenphosphat (LFP) Batteriespeicher halten 6.000-10.000 Ladezyklen, was 15-20 Jahren entspricht. Die meisten Hersteller garantieren 10 Jahre oder 80% Restkapazität. LFP-Batterien sind wartungsfrei.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Was kostet 1 kWh Batteriespeicher in der Schweiz?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '1 kWh Batteriespeicher kostet in der Schweiz 900-1.200 CHF (LFP) bzw. 800-1.000 CHF (NMC). Ein 10 kWh Speicher kostet somit 9.000-14.000 CHF inklusive Installation.',
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
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
