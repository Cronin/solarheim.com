import { FileText, Search, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      step: '1',
      title: 'Formular ausfüllen',
      description: 'In nur 2 Minuten geben Sie Ihre Anforderungen ein – kostenlos und unverbindlich.',
    },
    {
      icon: Search,
      step: '2',
      title: 'Angebote vergleichen',
      description: 'Sie erhalten bis zu 3 massgeschneiderte Offerten von geprüften Solarteuren aus Ihrer Region.',
    },
    {
      icon: CheckCircle,
      step: '3',
      title: 'Installateur wählen',
      description: 'Vergleichen Sie die Angebote und wählen Sie den besten Solarteur für Ihr Projekt. Sparen Sie Geld!',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            So funktioniert's
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In drei einfachen Schritten zur perfekten Solaranlage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 transform translate-y-[-50%] z-0"
               style={{ left: '16.67%', right: '16.67%' }} />

          {steps.map((item, index) => (
            <div key={index} className="relative z-10">
              <div className="text-center">
                {/* Step Number Badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary-100 relative z-20">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-30">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#formular" className="btn-primary">
            Jetzt starten
          </a>
        </div>
      </div>
    </section>
  );
}
