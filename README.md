# Solarheim - Solar Panel Lead Generation Platform

A complete Next.js 14 website for Solarheim.com - a solar panel lead generation platform for Switzerland (German-speaking regions).

## Features

### Multi-Step Lead Form
- 4-step conversion-optimized form
- Local storage for progress saving
- Conditional logic (e.g., tenants cannot proceed)
- Full validation with Zod
- Smooth animations with Framer Motion

### SEO Architecture
- **20 Local Landing Pages**: Programmatic pages for major Swiss cities (Zürich, Basel, Bern, Geneva, Lausanne, etc.)
- **3 Thematic Pages**: Solar calculator, costs page, battery storage page
- **Structured Data**: FAQ and LocalBusiness schema
- **Dynamic Sitemap**: Auto-generated with all pages
- **Optimized Meta Tags**: Unique titles and descriptions for each page

### Design System
- Clean, modern design inspired by Heimcheck.com
- Tailwind CSS 3 with custom color scheme
- Mobile-first responsive design
- Trust-building elements throughout
- Conversion-optimized CTAs

### Tech Stack
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS 3
- Framer Motion
- React Hook Form + Zod validation
- Lucide React icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
solarheim/
├── app/
│   ├── layout.tsx                    # Root layout with header/footer
│   ├── page.tsx                      # Homepage
│   ├── solaranlage-[city]/           # Dynamic city pages
│   │   └── page.tsx
│   ├── solarrechner/                 # Solar calculator
│   │   └── page.tsx
│   ├── solaranlage-kosten/          # Costs page
│   │   └── page.tsx
│   ├── solaranlage-mit-speicher/    # Battery storage page
│   │   └── page.tsx
│   ├── danke/                        # Thank you page
│   │   └── page.tsx
│   ├── datenschutz/                  # Privacy policy
│   │   └── page.tsx
│   ├── impressum/                    # Imprint
│   │   └── page.tsx
│   ├── sitemap.ts                    # Dynamic sitemap
│   └── globals.css                   # Global styles
├── components/
│   ├── Header.tsx                    # Site header with navigation
│   ├── Footer.tsx                    # Site footer with links
│   ├── Hero.tsx                      # Homepage hero section
│   ├── USPSection.tsx               # USP cards
│   ├── HowItWorks.tsx               # Process steps
│   ├── TrustBadges.tsx              # Trust elements
│   ├── Testimonials.tsx             # Customer testimonials
│   ├── FAQ.tsx                       # FAQ accordion
│   ├── SolarCalculator.tsx          # Interactive calculator
│   └── MultiStepForm/
│       ├── FormContainer.tsx         # Main form logic
│       ├── ProgressBar.tsx
│       ├── Step1Property.tsx
│       ├── Step2Energy.tsx
│       ├── Step3Location.tsx
│       └── Step4Contact.tsx
├── lib/
│   ├── cities.ts                     # Swiss cities data
│   └── formSchema.ts                 # Zod validation schemas
└── public/
    └── robots.txt                    # SEO configuration
```

## Pages Overview

### Homepage (/)
- Hero section with value proposition
- 3 USPs (verified installers, save 30%, 100% free)
- How it works (3 steps)
- Multi-step lead form (primary conversion)
- Trust badges and statistics
- Customer testimonials
- FAQ section
- Final CTA

### Local Pages (/solaranlage-[city])
20 programmatic pages for major Swiss cities:
- Zürich, Basel, Bern, Genf, Lausanne, Winterthur, Luzern, St. Gallen, Lugano, Biel, Thun, Köniz, Schaffhausen, Fribourg, Chur, Aarau, Zug, Neuchâtel, Solothurn, Baden

Each page includes:
- City-specific hero section
- Local sunshine hours and information
- Embedded lead form
- Local testimonial
- City-specific FAQ

### Thematic Pages
1. **Solar Calculator** (/solarrechner): Interactive tool to estimate system size and costs
2. **Costs Page** (/solaranlage-kosten): Comprehensive breakdown of solar panel costs in Switzerland
3. **Battery Storage** (/solaranlage-mit-speicher): Information about solar systems with battery storage

### Utility Pages
- Thank You Page (/danke): Post-form submission confirmation
- Privacy Policy (/datenschutz): GDPR-compliant data protection information
- Imprint (/impressum): Legal information

## Multi-Step Form

The lead form is the core conversion element with 4 steps:

### Step 1: Property
- Property type (single family, multi family, commercial)
- Ownership status (owner/tenant - tenants cannot proceed)

### Step 2: Energy Needs
- Annual electricity consumption
- Interest in battery storage

### Step 3: Location
- Postal code and city
- Roof type

### Step 4: Contact
- First and last name
- Email (required)
- Phone (optional but recommended)
- Privacy policy acceptance (required)

Features:
- Progress bar (1/4, 2/4, 3/4, 4/4)
- Local storage for progress persistence
- Per-step validation
- Smooth transitions
- Conditional logic (tenant warning)
- Redirect to thank you page on success

## SEO Features

### Meta Tags
- Unique title and description for each page
- Open Graph tags for social sharing
- Twitter card support
- Canonical URLs

### Structured Data
- FAQ schema on relevant pages
- Organization schema
- LocalBusiness schema for city pages

### Sitemap
- Dynamic sitemap generation
- All pages included with proper priorities
- Last modified dates

### Robots.txt
- Allows all search engines
- Points to sitemap

## Design System

### Colors
- **Primary Green**: #10B981 (CTAs, success states)
- **Trust Blue**: #3B82F6 (trust elements, secondary CTAs)
- **Text Gray**: #6B7280 (body text)
- **Dark**: #1F2937 (headings)
- **Light Background**: #F9FAFB

### Typography
- System fonts (Inter fallback)
- Bold headings
- Regular body text
- Clear hierarchy

### Components
- `.btn-primary`: Primary CTA button
- `.btn-secondary`: Secondary button
- `.card`: Content card with shadow
- `.input-field`: Form input field
- `.radio-card`: Radio button card
- `.container-custom`: Max-width container
- `.section-padding`: Consistent section spacing

## Content Language

All content is in German (Hochdeutsch) for Swiss audience:
- "Kostenlose Offerte anfordern"
- "Geprüfte Fachbetriebe"
- "Unverbindlich vergleichen"
- "Schweizweit verfügbar"

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure domain: solarheim.ch
4. Deploy

Environment variables needed:
- None (all static at build time)

### Manual Deployment

```bash
npm run build
npm start
```

## Analytics Setup

To add Google Analytics 4:

1. Create GA4 property
2. Add tracking code to `app/layout.tsx`
3. Set up conversion events:
   - Form step completions
   - Form submissions
   - Button clicks

## Future Enhancements

- Backend API for form submissions
- CRM integration
- Email automation
- A/B testing
- Chat widget
- Blog section
- Installer reviews
- Real-time pricing
- Advanced calculator with roof orientation

## License

Proprietary - All rights reserved

## Contact

For questions or support:
- Email: info@solarheim.ch
- Phone: +41 77 442 00 59

---

Built with Next.js 14, TypeScript, and Tailwind CSS 3
