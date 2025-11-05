import Hero from '@/components/Hero';
import USPSection from '@/components/USPSection';
import HowItWorks from '@/components/HowItWorks';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { cities } from '@/lib/cities';
import { MapPin } from 'lucide-react';

export default function ItalianHomePage() {
  const defaultFAQs = [
    {
      question: 'Quanto costa un impianto fotovoltaico in Svizzera?',
      answer: 'Un impianto fotovoltaico tipico per una casa unifamiliare costa tra CHF 9.500 e CHF 25.000. Il prezzo esatto dipende dalla dimensione dell\'impianto, dalle caratteristiche del tetto e dai componenti utilizzati. Con una batteria di accumulo, i costi sono più elevati, tra CHF 19.500 e CHF 35.000.',
    },
    {
      question: 'Come funziona l\'intermediazione di Solarheim?',
      answer: 'Compili il nostro breve modulo indicando le sue esigenze. Trasmettiamo la sua richiesta a un massimo di 3 installatori certificati nella sua regione. Questi preparano offerte personalizzate per lei. Lei confronta i preventivi e sceglie l\'offerta migliore - completamente senza impegno.',
    },
    {
      question: 'Esistono sovvenzioni per impianti fotovoltaici in Svizzera?',
      answer: 'Sì! La Svizzera offre diverse sovvenzioni: la Rimunerazione Unica (RU) della Confederazione copre fino al 30% dei costi di investimento. Inoltre, ci sono programmi di incentivi cantonali e comunali, oltre a deduzioni fiscali. I nostri installatori partner la aiutano a richiedere tutte le sovvenzioni disponibili.',
    },
    {
      question: 'Quanto tempo richiede l\'installazione di un impianto fotovoltaico?',
      answer: 'Dalla richiesta all\'installazione trascorrono solitamente 2-4 mesi. Il montaggio vero e proprio sul tetto dura di solito solo 1-3 giorni, a seconda della dimensione dell\'impianto. Dopo l\'installazione, segue la messa in servizio e l\'accettazione da parte del gestore di rete.',
    },
    {
      question: 'Un impianto fotovoltaico è conveniente anche con poco sole?',
      answer: 'Sì! Anche nelle regioni meno soleggiate della Svizzera, gli impianti fotovoltaici producono abbastanza elettricità per ammortizzarsi. I moduli solari moderni funzionano efficientemente anche con luce diffusa. Il periodo di ammortamento medio in Svizzera è di 10-15 anni, con una durata di vita di 25-30 anni.',
    },
    {
      question: 'Il servizio di Solarheim è davvero gratuito?',
      answer: 'Sì, il nostro servizio è al 100% gratuito e senza impegno per lei. Ci finanziamo tramite commissioni dai nostri installatori partner. Lei non paga nulla per l\'intermediazione e riceve comunque gli stessi prezzi come se facesse richiesta diretta all\'installatore.',
    },
  ];

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": defaultFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <Hero />
      <USPSection />
      <HowItWorks />

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Inizia ora il tuo confronto gratuito
            </h2>
            <p className="text-xl text-gray-600">
              In soli 2 minuti ottieni un'offerta personalizzata di impianto fotovoltaico
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />
      <Testimonials />

      {/* Cities Section - Internal Linking */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impianti fotovoltaici in tutta la Svizzera
            </h2>
            <p className="text-xl text-gray-600">
              Mettiamo in contatto con installatori in tutte le principali città svizzere
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={city.slug === 'lugano' ? `/it/impianto-fotovoltaico-${city.slug}` : `/solaranlage-${city.slug}`}
                className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                    {city.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {city.canton}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto a produrre la tua elettricità?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Ricevi ora preventivi gratuiti da installatori solari certificati svizzeri - veloce, trasparente e senza impegno.
          </p>
          <a href="#formular" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Richiedi preventivo gratuito
          </a>
        </div>
      </section>
    </>
  );
}
