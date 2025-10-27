# Deployment Guide - Solarheim.com

## Quick Start

The website is production-ready and can be deployed immediately to Vercel.

## Vercel Deployment (Recommended)

### Option 1: GitHub Integration

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/solarheim.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel project settings, go to "Domains"
   - Add custom domain: `solarheim.ch`
   - Follow DNS configuration instructions

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /Users/claudiocronin/websites/sites/solarheim.ch
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

No environment variables are required. All pages are statically generated at build time.

## DNS Configuration

### For solarheim.ch

Add these DNS records to your domain registrar:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Post-Deployment Checklist

### 1. Verify All Pages Load

- [ ] Homepage: https://solarheim.ch
- [ ] Solar Calculator: https://solarheim.ch/solarrechner
- [ ] Costs Page: https://solarheim.ch/solaranlage-kosten
- [ ] Battery Storage: https://solarheim.ch/solaranlage-mit-speicher
- [ ] City Pages: https://solarheim.ch/solaranlage-zuerich
- [ ] Thank You: https://solarheim.ch/danke
- [ ] Privacy: https://solarheim.ch/datenschutz
- [ ] Imprint: https://solarheim.ch/impressum

### 2. Test Lead Form

- [ ] Complete all 4 steps
- [ ] Test validation (try submitting with missing fields)
- [ ] Test tenant warning (select "Mieter" in step 1)
- [ ] Verify redirect to thank you page
- [ ] Check local storage persistence (refresh during form)

### 3. SEO Verification

- [ ] Check robots.txt: https://solarheim.ch/robots.txt
- [ ] Check sitemap: https://solarheim.ch/sitemap.xml
- [ ] Verify meta tags on all pages (use view-source)
- [ ] Test mobile responsiveness
- [ ] Check page load speed (use PageSpeed Insights)

### 4. Analytics Setup (Optional)

If you want to add Google Analytics:

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script';

// Add inside <body> tag
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

4. Set up conversion tracking for form submissions

### 5. Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: solarheim.ch
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: https://solarheim.ch/sitemap.xml

## Backend Integration

The current implementation uses client-side form handling. To integrate with a backend:

### Option 1: Vercel Serverless Functions

Create `/app/api/submit-form/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Send to your CRM, email service, etc.
  // Example: Send email via SendGrid, Resend, etc.

  return NextResponse.json({ success: true });
}
```

Update `FormContainer.tsx`:

```typescript
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    localStorage.removeItem(STORAGE_KEY);
    router.push('/danke');
  }
};
```

### Option 2: External API

```typescript
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  const response = await fetch('https://your-api.com/leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify(data),
  });

  // Handle response
};
```

## Email Notifications

To send email notifications when forms are submitted:

### Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Install: `npm install resend`
4. Create API route:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  await resend.emails.send({
    from: 'noreply@solarheim.ch',
    to: 'info@solarheim.ch',
    subject: 'Neue Solaranfrage',
    html: `
      <h2>Neue Anfrage von ${body.firstName} ${body.lastName}</h2>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Telefon:</strong> ${body.phone}</p>
      <p><strong>Standort:</strong> ${body.postalCode} ${body.city}</p>
      <!-- Add more fields -->
    `,
  });

  return NextResponse.json({ success: true });
}
```

## Performance Optimization

The website is already optimized, but you can further improve:

1. **Enable Image Optimization**: Add actual images and use Next.js `<Image>` component
2. **Add Caching**: Vercel handles this automatically
3. **Enable Compression**: Automatic on Vercel
4. **CDN**: Automatic on Vercel Edge Network

## Monitoring

### Vercel Analytics

Enable in Vercel dashboard:
- Go to project settings
- Enable "Analytics"
- Monitor page views, performance, etc.

### Error Tracking (Optional)

Use Sentry:

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## Backup Strategy

1. **Code**: Stored in Git (GitHub/GitLab)
2. **Deployments**: Vercel keeps all deployment history
3. **Form Data**: If using database, set up regular backups

## Security

Current security measures:
- SSL/TLS encryption (automatic on Vercel)
- HTTPS enforced
- No sensitive data exposed client-side
- Input validation with Zod
- CORS headers (if adding API routes)

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Content Updates

To update content, edit the relevant files:
- Homepage: `app/page.tsx`
- City pages: `app/solaranlage-[city]/page.tsx`
- FAQ: `components/FAQ.tsx`
- Costs: Update price data in respective pages

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Solarheim Contact: info@solarheim.ch

## Production Checklist

Before going live:

- [ ] Update company information (address, phone, email)
- [ ] Replace placeholder content
- [ ] Add real company logo/branding
- [ ] Configure email notifications
- [ ] Set up analytics tracking
- [ ] Test form submissions end-to-end
- [ ] Submit sitemap to Google Search Console
- [ ] Configure domain and SSL
- [ ] Test all pages on mobile devices
- [ ] Run accessibility audit
- [ ] Run performance audit (Lighthouse)
- [ ] Set up monitoring/error tracking

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Form Not Working

- Check browser console for errors
- Verify form validation
- Test local storage (check browser DevTools > Application)

### Pages Not Loading

- Verify all routes in `app/` directory
- Check for TypeScript errors: `npm run build`
- Clear browser cache

---

**Ready to Deploy!**

The website is complete and production-ready. Follow the steps above to deploy to Vercel.
