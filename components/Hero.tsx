'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Solaranlagen in der Schweiz vergleichen –{' '}
              <span className="text-primary">kostenlos & unverbindlich</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Solarheim findet für Sie die besten Solarteure in Ihrer Region. Sparen Sie bis zu 30% durch den Vergleich mehrerer Offerten.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
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
                <span className="text-gray-700 font-medium">Schweizweit verfügbar</span>
              </div>
            </div>

            {/* CTA */}
            <a href="#formular" className="btn-primary inline-block">
              Jetzt kostenlose Offerte anfordern
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-50 to-white">
              <Image
                src="/images/hero-solar-panels.jpg"
                alt="Photovoltaik Solaranlagen - Professionelle Solar Panels auf Schweizer Haus"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10.000+</div>
                <div className="text-sm text-gray-600">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
