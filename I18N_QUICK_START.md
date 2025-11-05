# i18n Quick Start Guide - Solarheim.ch

Quick reference for using the internationalization system.

## URL Structure

```
German (default):   https://solarheim.ch/solaranlage-zuerich
French:            https://solarheim.ch/fr/installation-solaire-geneve
Italian:           https://solarheim.ch/it/impianto-fotovoltaico-lugano
```

## Current Pages

### Italian (IT)
- ✅ `/it` - Homepage
- ✅ `/it/impianto-fotovoltaico-lugano` - Lugano page

### French (FR)
- ✅ `/fr` - Homepage
- ✅ `/fr/installation-solaire-geneve` - Geneva page

### German (DE)
- ✅ `/` - Homepage (all existing German pages)

## Adding a New City Page

### Example: Adding French Lausanne

**1. Create city content in `/lib/city-content-fr.ts`:**

```typescript
export const cityContentsFR: Record<string, CityContent> = {
  // ... existing cities
  lausanne: {
    slug: 'lausanne',
    heroHeadline: 'Installation Solaire Lausanne',
    heroSubheadline: 'Profitez de 1.821 heures d\'ensoleillement par an',
    heroDescription: '...',
    whySolarTitle: '...',
    // ... complete all fields
  }
};
```

**2. Create page at `/app/fr/installation-solaire-lausanne/page.tsx`:**

```typescript
import { getCityBySlug } from '@/lib/cities';
import { cityContentsFR } from '@/lib/city-content-fr';
// ... other imports

const citySlug = 'lausanne';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Installation Solaire Lausanne - [sunshine hours] | Devis Gratuits`,
    description: `...`,
    alternates: {
      canonical: 'https://solarheim.ch/fr/installation-solaire-lausanne',
      languages: {
        'de-CH': 'https://solarheim.ch/solaranlage-lausanne',
        'fr-CH': 'https://solarheim.ch/fr/installation-solaire-lausanne',
        'it-CH': 'https://solarheim.ch/it',
      },
    },
  };
}

export default function LausanneFrenchPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContentsFR[citySlug];
  // ... rest of implementation (copy from Geneva page)
}
```

**3. Update sitemap in `/app/sitemap.ts`:**

```typescript
const frenchCityPages = [
  {
    url: `${baseUrl}/fr/installation-solaire-geneve`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  },
  {
    url: `${baseUrl}/fr/installation-solaire-lausanne`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  },
];
```

**4. Build and test:**

```bash
npm run build
npm run dev
# Visit: http://localhost:3000/fr/installation-solaire-lausanne
```

## Testing Checklist

- [ ] Page loads without errors
- [ ] Language switcher shows correct current language
- [ ] Hreflang tags present in HTML source
- [ ] Metadata correct (title, description, OG tags)
- [ ] All content displays in correct language
- [ ] Forms work correctly
- [ ] Internal links work
- [ ] Build succeeds: `npm run build`
- [ ] Page appears in sitemap

## Key Files

```
/lib/i18n/
  ├── config.ts          # Language configuration
  ├── de.ts              # German translations
  ├── fr.ts              # French translations
  ├── it.ts              # Italian translations
  └── index.ts           # Translation utilities

/lib/
  ├── city-content-fr.ts # French city content
  └── city-content-it.ts # Italian city content

/components/
  └── LanguageSwitcher.tsx # Language switcher component

/app/
  ├── fr/
  │   ├── layout.tsx               # French layout
  │   ├── page.tsx                 # French homepage
  │   └── installation-solaire-*/  # French city pages
  ├── it/
  │   ├── layout.tsx               # Italian layout
  │   ├── page.tsx                 # Italian homepage
  │   └── impianto-fotovoltaico-*/ # Italian city pages
  └── sitemap.ts                   # Sitemap with languages

middleware.ts              # Language routing
```

## Translation Keys

Use translations from `/lib/i18n/*.ts`:

```typescript
import { getTranslations } from '@/lib/i18n';

const t = getTranslations('fr'); // or 'de', 'it'

// Access translations
t.hero.title
t.nav.home
t.form.submit
t.solarTerms.solarSystem
```

## SEO Checklist

For each new language page:

- [ ] Title: 50-60 characters
- [ ] Description: 150-160 characters
- [ ] Keywords: 8-10 relevant terms
- [ ] Hreflang tags for DE/FR/IT
- [ ] Canonical URL set
- [ ] Open Graph locale set (de_CH, fr_CH, it_CH)
- [ ] Schema.org markup (FAQPage, Service, Breadcrumb)
- [ ] Sitemap entry added
- [ ] Priority set (0.85-0.90 for cities)

## Common Issues

**Issue:** Language switcher doesn't show up
- **Fix:** Check that Header component imports LanguageSwitcher

**Issue:** Page shows 404
- **Fix:** Verify directory structure matches URL pattern

**Issue:** Build fails with missing translations
- **Fix:** Ensure all translation keys exist in de.ts, fr.ts, it.ts

**Issue:** Hreflang tags missing
- **Fix:** Add `alternates.languages` to page metadata

## Support

For questions or issues:
- See full documentation: `I18N_IMPLEMENTATION_REPORT.md`
- Check Next.js i18n docs: https://nextjs.org/docs/app/building-your-application/routing/internationalization
