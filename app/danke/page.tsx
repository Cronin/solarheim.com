import { Metadata } from 'next';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vielen Dank - Ihre Anfrage wurde versendet',
  description: 'Vielen Dank für Ihre Anfrage. Wir werden Sie bald mit passenden Solaranlagen-Angeboten kontaktieren.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white min-h-[80vh] flex items-center">
      <div className="container-custom max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vielen Dank für Ihre Anfrage!
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            Wir haben Ihre Anfrage erhalten und werden Sie in Kürze mit passenden Angeboten kontaktieren.
          </p>

          {/* What Happens Next */}
          <div className="text-left mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Was passiert als Nächstes?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Wir prüfen Ihre Angaben</h3>
                  <p className="text-gray-600">
                    Unser Team überprüft Ihre Anfrage und sucht die passenden Solarteure in Ihrer Region.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Wir kontaktieren lokale Installateure</h3>
                  <p className="text-gray-600">
                    Bis zu 3 geprüfte Fachbetriebe erstellen individuelle Angebote für Ihr Solarprojekt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Sie erhalten Ihre Offerten</h3>
                  <p className="text-gray-600">
                    Innerhalb von 2-5 Werktagen erhalten Sie bis zu 3 kostenlose Offerten per E-Mail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Fragen? Wir sind für Sie da</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:info@solarheim.ch" className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@solarheim.ch
              </a>
              <a href="tel:+41774420059" className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +41 77 442 00 59
              </a>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm text-gray-700">
                  <strong>Hinweis:</strong> Bitte überprüfen Sie auch Ihren Spam-Ordner. Manchmal landen unsere E-Mails dort.
                  Fügen Sie info@solarheim.ch zu Ihren Kontakten hinzu, um alle Nachrichten zu erhalten.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Zurück zur Startseite
            </Link>
            <Link href="/solarrechner" className="btn-secondary">
              Solarrechner nutzen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
