'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'Was kostet eine Solaranlage in der Schweiz?',
    answer: 'Eine typische Solaranlage für ein Einfamilienhaus kostet zwischen 9.500 und 25.000 CHF. Der genaue Preis hängt von der Grösse der Anlage, der Dachbeschaffenheit und den verwendeten Komponenten ab. Mit einem Batteriespeicher liegen die Kosten höher, zwischen 19.500 und 35.000 CHF.',
  },
  {
    question: 'Wie funktioniert die Vermittlung bei Solarheim?',
    answer: 'Sie füllen unser kurzes Formular aus, in dem Sie Ihre Anforderungen angeben. Wir leiten Ihre Anfrage an bis zu 3 geprüfte Solarteure in Ihrer Region weiter. Diese erstellen individuelle Angebote für Sie. Sie vergleichen die Offerten und wählen das beste Angebot aus – ganz ohne Verpflichtung.',
  },
  {
    question: 'Gibt es Förderungen für Solaranlagen in der Schweiz?',
    answer: 'Ja! Die Schweiz bietet verschiedene Förderungen: Die Einmalvergütung (EIV) vom Bund deckt bis zu 30% der Investitionskosten. Zusätzlich gibt es kantonale und kommunale Förderprogramme sowie steuerliche Abzüge. Unsere Partner-Installateure helfen Ihnen bei der Beantragung aller verfügbaren Förderungen.',
  },
  {
    question: 'Wie lange dauert die Installation einer Solaranlage?',
    answer: 'Von der Anfrage bis zur Installation vergehen in der Regel 2-4 Monate. Die eigentliche Montage auf dem Dach dauert meist nur 1-3 Tage, abhängig von der Anlagengrösse. Nach der Installation erfolgt noch die Inbetriebnahme und Abnahme durch den Netzbetreiber.',
  },
  {
    question: 'Lohnt sich eine Solaranlage auch bei wenig Sonnenschein?',
    answer: 'Ja! Selbst in weniger sonnenreichen Regionen der Schweiz produzieren Solaranlagen genug Strom, um sich zu amortisieren. Moderne Solarmodule arbeiten auch bei diffusem Licht effizient. Die durchschnittliche Amortisationszeit in der Schweiz liegt bei 10-15 Jahren, bei einer Lebensdauer von 25-30 Jahren.',
  },
  {
    question: 'Ist der Service von Solarheim wirklich kostenlos?',
    answer: 'Ja, unser Service ist zu 100% kostenlos und unverbindlich für Sie. Wir finanzieren uns durch Provisionen von unseren Partner-Installateuren. Sie zahlen für die Vermittlung nichts und erhalten dennoch die gleichen Preise wie bei direkter Anfrage beim Solarteur.',
  },
];

export default function FAQ({ items = defaultFAQs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Alles, was Sie über Solaranlagen wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-8">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen? Wir helfen gerne weiter!
          </p>
          <a href="#formular" className="btn-primary">
            Kostenlose Beratung anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
