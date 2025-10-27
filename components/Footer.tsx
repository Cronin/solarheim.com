import Link from 'next/link';
import { Sun, Mail, Phone } from 'lucide-react';
import { cities } from '@/lib/cities';

export default function Footer() {
  const popularCities = cities.slice(0, 10);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Solar<span className="text-primary">heim</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Die führende Vergleichsplattform für Solaranlagen in der Schweiz. Kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-400">
                Culmannstrasse 37<br />
                8006 Zürich, Schweiz
              </div>
              <a href="mailto:info@solarheim.ch" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@solarheim.ch
              </a>
              <a href="tel:+41774420059" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +41 77 442 00 59
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Solarheim</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solarrechner" className="text-sm hover:text-primary transition-colors">
                  Solarrechner
                </Link>
              </li>
              <li>
                <Link href="/solaranlage-kosten" className="text-sm hover:text-primary transition-colors">
                  Kosten
                </Link>
              </li>
              <li>
                <Link href="/solaranlage-mit-speicher" className="text-sm hover:text-primary transition-colors">
                  Mit Speicher
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-sm hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-white font-bold mb-4">Beliebte Städte</h3>
            <ul className="space-y-2">
              {popularCities.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/solaranlage-${city.slug}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Cities */}
          <div>
            <h3 className="text-white font-bold mb-4">Weitere Städte</h3>
            <ul className="space-y-2">
              {popularCities.slice(6, 10).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/solaranlage-${city.slug}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Solarheim. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
