'use client';

import Link from 'next/link';
import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              Solar<span className="text-primary">heim</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/solarrechner" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Solarrechner
            </Link>
            <Link href="/solaranlage-kosten" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Kosten
            </Link>
            <Link href="/solaranlage-mit-speicher" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Mit Speicher
            </Link>
            <a href="#formular" className="btn-primary">
              Offerte anfordern
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/solarrechner"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solarrechner
              </Link>
              <Link
                href="/solaranlage-kosten"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kosten
              </Link>
              <Link
                href="/solaranlage-mit-speicher"
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mit Speicher
              </Link>
              <a
                href="#formular"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Offerte anfordern
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
