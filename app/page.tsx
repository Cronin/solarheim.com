import Hero from '@/components/Hero';
import USPSection from '@/components/USPSection';
import HowItWorks from '@/components/HowItWorks';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPSection />
      <HowItWorks />

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Starten Sie jetzt Ihren kostenlosen Vergleich
            </h2>
            <p className="text-xl text-gray-600">
              In nur 2 Minuten zum individuellen Solaranlagen-Angebot
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />
      <Testimonials />
      <FAQ />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bereit für Ihre eigene Solaranlage?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Vergleichen Sie jetzt kostenlos Angebote von geprüften Solarteuren
          </p>
          <a href="#formular" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Kostenlose Offerte anfordern
          </a>
        </div>
      </section>
    </>
  );
}
