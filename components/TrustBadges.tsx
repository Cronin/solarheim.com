import Image from 'next/image';

export default function TrustBadges() {
  const badges = [
    {
      image: '/images/badges/tuv-simple.svg',
      title: 'TÜV geprüft',
      description: 'Zertifizierte Qualität',
    },
    {
      image: '/images/badges/ssl-simple.svg',
      title: 'SSL verschlüsselt',
      description: 'Sichere Datenübertragung',
    },
    {
      image: '/images/badges/datenschutz-simple.svg',
      title: 'Datenschutz konform',
      description: 'DSGVO-konform',
    },
    {
      image: '/images/badges/swiss-simple.svg',
      title: 'Schweizer Qualität',
      description: '100% Swiss Made',
    },
  ];

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ihr Vertrauen ist uns wichtig
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Über 10.000 zufriedene Kunden vertrauen bereits auf Solarheim
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 mb-4 mx-auto">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  width={96}
                  height={96}
                  className="w-full h-full"
                />
              </div>
              <h3 className="font-bold text-white mb-1">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-400">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10.000+</div>
            <div className="text-gray-400">Zufriedene Kunden</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-400">Partner-Installateure</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-400">Jahre Erfahrung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-400">Kostenlos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
