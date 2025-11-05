# SOLARHEIM.CH - IMMEDIATE ACTION PLAN
## Fix These Issues TODAY to Start Getting Traffic

**Created:** November 4, 2025
**Priority:** CRITICAL
**Time Required:** 1-2 hours

---

## THE SITUATION

Your site is technically well-built BUT:
- 91 impressions in 481 days
- 0 clicks ever
- Only 5 of 32 pages getting impressions
- Recent improvement: 45 impressions on Nov 3 (best day!)
- But position 23-36 = no clicks (need top 10)

**Good news:** Site is improving. Recent momentum shows Google is starting to discover you.

**Bad news:** One critical bug + thin content + no backlinks = invisible in search.

---

## CRITICAL BUG FOUND

### Issue: Wrong Domain in Homepage Breadcrumb Schema

**File:** `app/page.tsx`
**Line:** 93
**Current:** `"item": "https://solarheim.com"`
**Should Be:** `"item": "https://solarheim.ch"`

**Impact:**
- Tells Google wrong canonical domain
- Confuses search engines about which domain is authoritative
- Slows down indexing and ranking

**Fix Time:** 2 minutes

---

## IMMEDIATE FIXES (DO TODAY)

### Fix 1: Correct Breadcrumb Schema (2 minutes)

```bash
cd /Users/claudiocronin/websites/sites/solarheim.com
```

Edit `app/page.tsx` line 93:

```typescript
// FIND THIS (line 93):
"item": "https://solarheim.com"

// CHANGE TO:
"item": "https://solarheim.ch"
```

**Test:**
```bash
npm run build
# Should succeed with all 32 pages
```

**Deploy:**
```bash
git add app/page.tsx
git commit -m "fix: correct homepage breadcrumb schema to use .ch domain"
git push origin main
# Vercel auto-deploys
```

**Verify:** Visit https://solarheim.ch and view source, search for breadcrumb schema

---

### Fix 2: Add Google Verification Code (5 minutes)

**File:** `app/layout.tsx`
**Line:** 71

```typescript
// FIND:
verification: {
  google: 'your-google-verification-code',
}

// CHANGE TO:
verification: {
  google: 'PASTE_ACTUAL_CODE_FROM_GSC_HERE',
}
```

**Where to get code:**
1. Go to Google Search Console
2. Add property: solarheim.ch
3. Choose "HTML tag" verification method
4. Copy the code (the part between `content="` and `"`)
5. Paste into layout.tsx

**Test and deploy same as Fix 1**

---

### Fix 3: Configure Google Search Console (30 minutes)

**Step 1: Add Property**
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose "Domain" property type
4. Enter: `solarheim.ch` (without https://)
5. Click "Continue"

**Step 2: Verify Ownership**
1. Choose "DNS verification" (recommended)
2. Copy the TXT record provided
3. Add to Cloudflare DNS:
   - Type: TXT
   - Name: @
   - Content: [paste the record]
   - TTL: Auto
4. Wait 5-10 minutes
5. Click "Verify" in GSC

**Step 3: Grant Service Account Access**
1. After verification, go to Settings > Users and permissions
2. Click "Add user"
3. Enter: `gsc-automation@websites-473902.iam.gserviceaccount.com`
4. Permission: "Owner"
5. Click "Add"

**Step 4: Submit Sitemap**
1. In GSC, go to "Sitemaps" section
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (can take 24-48 hours)

**Step 5: Request Indexing for Priority Pages**

Use URL Inspection tool to request indexing for:
1. `https://solarheim.ch` (homepage)
2. `https://solarheim.ch/solaranlage-mit-speicher` (56 impressions)
3. `https://solarheim.ch/solaranlage-kosten` (29 impressions)
4. `https://solarheim.ch/solaranlage-lugano` (position 6.7!)
5. `https://solarheim.ch/solaranlage-zuerich`
6. `https://solarheim.ch/solaranlage-basel`
7. `https://solarheim.ch/solaranlage-bern`
8. `https://solarheim.ch/solaranlage-genf`
9. `https://solarheim.ch/solaranlage-lausanne`
10. `https://solarheim.ch/solaranlage-luzern`

**For each URL:**
1. Paste URL in search box
2. Click "Request Indexing"
3. Wait (can take 1-2 minutes per URL)

---

### Fix 4: Submit to Business Directories (1 hour)

**Create consistent NAP (Name, Address, Phone):**
```
Business Name: SolarHeim
Address: Culmannstrasse 37, 8006 Zürich, Switzerland
Phone: +41 77 442 00 59
Website: https://solarheim.ch
Email: info@solarheim.ch
Category: Solar Energy, Energy Consultants
```

**Submit to these 5 directories TODAY:**

1. **Local.ch** (https://www.local.ch)
   - Switzerland's main directory
   - High priority for local SEO

2. **Search.ch** (https://www.search.ch)
   - Major Swiss search portal
   - Add business listing

3. **Cylex Switzerland** (https://www.cylex.ch)
   - Business directory
   - Good for citations

4. **Hotfrog Switzerland** (https://www.hotfrog.ch)
   - International directory with Swiss section

5. **Swiss Cleantech** (https://www.swisscleantech.ch)
   - Industry-specific directory
   - High relevance

**For each directory:**
- Create complete profile
- Use exact NAP format above
- Add 150-word unique description
- Add logo/images if possible
- Select relevant categories
- List all service areas (cantons/cities)

---

## WHAT YOU'LL SEE AFTER FIXES

### Week 1
- All 32 pages should be indexed in GSC
- Can track performance properly
- May see small bump in impressions

### Week 2-4
- Impressions should increase 2-3x
- First clicks should appear
- More pages will show impressions
- Position should improve slightly

### What Won't Change Yet
- Still need better content (current 300-500 words too thin)
- Still need backlinks (directories help but need more)
- Still competing with established players

---

## NEXT STEPS (THIS WEEK)

After completing the 4 immediate fixes above:

### Priority 1: Improve Top 3 Page Titles/Descriptions

**Why:** Better titles = better CTR even at lower positions

**Pages to improve:**
1. `/solaranlage-lugano` (already position 6.7 - best performer!)
2. `/solaranlage-mit-speicher` (56 impressions)
3. `/solaranlage-kosten` (29 impressions)

**Current title format:**
```
Solaranlage Lugano TI - Photovoltaik Offerte vergleichen
```

**Improved format:**
```
Solaranlage Lugano ab CHF 6.700 | 3 Offerten vergleichen & 30% sparen
```

**Changes to make in `app/solaranlage-[city]/page.tsx`:**
```typescript
// FIND generateMetadata function, UPDATE:
title: `Solaranlage ${city.name} ab CHF 6.700 | 3 Offerten & bis 30% sparen`,
description: `Solaranlage ${city.name}: Erhalten Sie 3 kostenlose Offerten von geprüften Installateuren. ${city.sunshineHours} Sonnenstunden/Jahr. Vergleichen Sie Preise & sparen Sie bis CHF 7.000. 100% unverbindlich.`,
```

---

### Priority 2: Expand Lugano Page Content

**Why:** Already ranking at position 6.7 - closest to page 1!

**Current:** ~500 words generic content
**Target:** 1,500-2,000 words unique content

**What to add to `/app/solaranlage-lugano/page.tsx`:**

1. **Ticino-specific information** (300 words)
   - Italian-speaking region considerations
   - Lugano has 2,157 sunshine hours (BEST in Switzerland!)
   - Ticino climate advantages
   - Canton Ticino incentive programs
   - Local solar adoption statistics

2. **Cost breakdown for Lugano** (400 words)
   - Typical installation costs in Ticino
   - Labor cost differences (may be higher/lower than other regions)
   - ROI specific to Lugano's high sunshine
   - Example: 5kWp system costs and savings
   - Payback period calculation for 2,157 hours/year

3. **Local installer landscape** (300 words)
   - Number of certified installers in Ticino
   - What to look for in Lugano installers
   - Language considerations (Italian/German)
   - Questions to ask local companies

4. **Success stories** (200 words)
   - 2 anonymized case studies from Lugano/Ticino area
   - Real savings examples
   - System sizes and production

5. **Process & timeline** (300 words)
   - Permitting in Canton Ticino
   - Best seasons to install in Lugano
   - Typical timeline from quote to activation
   - Local building code considerations

**Time:** 2-3 hours to write
**Priority:** HIGH (this page is your best performer!)

---

## MONITORING

### Check Every Monday

**Google Search Console:**
1. Index coverage: Goal = 26/26 pages indexed
2. Impressions trend: Should increase weekly
3. Click trend: First clicks should appear week 2-3
4. Position trend: Should gradually improve
5. New queries: See what people are searching for

**Expected Progress:**

| Week | Indexed Pages | Impressions/Day | Clicks/Day | Avg Position |
|------|---------------|-----------------|------------|--------------|
| 0 (now) | 5 | 10-45 | 0 | 30 |
| 1 | 15-20 | 50-100 | 0-2 | 28 |
| 2 | 26 | 100-150 | 2-5 | 25 |
| 3 | 26 | 150-200 | 5-10 | 23 |
| 4 | 26 | 200-300 | 10-15 | 20 |

---

## WHAT WON'T BE FIXED BY THESE CHANGES

These immediate fixes will help, but won't solve everything:

### 1. Content is Still Too Thin
- **Problem:** 300-500 words vs. competitors' 2,000-5,000
- **Impact:** Can't compete for top rankings
- **Solution:** Expand all city pages (see full audit report)
- **Time:** 2-3 hours per page, 20 pages = 40-60 hours
- **Priority:** HIGH (next 2-4 weeks)

### 2. No Backlinks
- **Problem:** New domain with zero authority
- **Impact:** Google doesn't trust you yet
- **Solution:** Guest posting, PR, more directories
- **Time:** Ongoing effort, 5-10 hours/week
- **Priority:** MEDIUM (start week 2)

### 3. Competing with Giants
- **Problem:** Helion, Energie360, Swissolar have huge head start
- **Impact:** Hard to outrank on generic terms
- **Solution:** Focus on comparison angle, long-tail keywords, local SEO
- **Time:** Ongoing positioning
- **Priority:** MEDIUM

---

## SUCCESS DEFINITION

### Short-term (Week 1-4)

You'll know these fixes worked if:
- All 26 pages show "Indexed" in GSC
- Impressions increase to 100-200/day (from current 10-45)
- First clicks appear (even just 1-2/day is success!)
- More pages show impressions (target 15-20 of 26)
- Average position improves to 20-25 range

### Medium-term (Month 2-3)

Signs of real progress:
- 300-500 impressions/day
- 20-50 clicks/day
- Position 10-20 for several keywords
- Some page 1 rankings for long-tail terms
- 5-10 form submissions/month

### Long-term (Month 6+)

Full success looks like:
- 1,000+ impressions/day
- 100+ clicks/day
- Multiple page 1 rankings
- 50+ form submissions/month
- Established as credible comparison site

---

## QUICK START CHECKLIST

Print this and check off as you complete:

**TODAY (Monday, Nov 4):**
- [ ] Fix breadcrumb schema bug (app/page.tsx line 93)
- [ ] Test build locally
- [ ] Deploy fix
- [ ] Add Google verification code
- [ ] Deploy verification code

**THIS WEEK:**
- [ ] Configure Google Search Console property
- [ ] Verify domain ownership via DNS
- [ ] Grant service account access
- [ ] Submit sitemap.xml
- [ ] Request indexing for top 10 pages
- [ ] Submit to Local.ch
- [ ] Submit to Search.ch
- [ ] Submit to Cylex.ch
- [ ] Submit to Hotfrog.ch
- [ ] Submit to Swiss Cleantech

**NEXT WEEK:**
- [ ] Improve Lugano page titles/descriptions
- [ ] Improve mit-speicher page titles/descriptions
- [ ] Improve kosten page titles/descriptions
- [ ] Start expanding Lugano page content (1,500+ words)
- [ ] Monitor GSC daily for indexing progress

**WEEK 3-4:**
- [ ] Complete Lugano page expansion
- [ ] Expand Zürich page
- [ ] Expand Basel page
- [ ] Expand Bern page
- [ ] Expand Genf page
- [ ] Check weekly metrics in GSC
- [ ] Identify new opportunities from query data

---

## QUESTIONS?

Refer to the comprehensive audit report:
`TECHNICAL_SEO_AUDIT_NOVEMBER_2025.md`

That report contains:
- Detailed analysis of all issues
- Complete content expansion strategy
- Backlink building plan
- Budget estimates
- 12-month timeline
- Success metrics

---

## FINAL NOTE

**The most important thing:** Fix the breadcrumb schema bug TODAY. It's the only critical technical error, and it's easy to fix.

Everything else is optimization and improvement. The bug fix + GSC configuration will give you visibility. The content expansion and backlinks will give you rankings.

But start with the bug. It's 2 minutes of work that could be holding you back significantly.

**After the bug fix is deployed, you'll be in good shape to start the real work of content creation and authority building.**

---

**Ready to start? Fix the bug first, then configure GSC, then directories. You got this!**
