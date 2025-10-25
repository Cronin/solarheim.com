import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Familie Müller',
      location: 'Zürich',
      rating: 5,
      text: 'Dank Solarheim haben wir 8.500 CHF gespart! Der Vergleich war einfach und die Installateure sehr professionell. Unsere Solaranlage läuft seit 6 Monaten einwandfrei.',
    },
    {
      name: 'Thomas Schmidt',
      location: 'Basel',
      rating: 5,
      text: 'Absolut empfehlenswert! Innerhalb von 2 Tagen hatte ich 3 verschiedene Angebote und konnte das beste auswählen. Der Service war kostenlos und unverbindlich, genau wie versprochen.',
    },
    {
      name: 'Familie Weber',
      location: 'Bern',
      rating: 5,
      text: 'Wir sind sehr zufrieden mit unserer neuen Solaranlage. Solarheim hat uns perfekt beraten und mit einem lokalen Fachbetrieb verbunden. Produktion übertrifft unsere Erwartungen!',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echte Erfahrungen von Schweizer Hausbesitzern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
