# Solarheim.ch - Quick Action Checklist
## Critical GSC Setup Required

---

## IMMEDIATE ACTIONS (Do This Now)

### ✓ Step 1: Add solarheim.ch to Google Search Console

1. Go to: https://search.google.com/search-console
2. Click the property selector dropdown (top left)
3. Click "Add property"
4. Select **"Domain"** (not URL prefix)
5. Enter: `solarheim.ch`
6. Click "Continue"
7. You'll see DNS verification instructions
8. Copy the TXT record value

**DNS Verification:**
- Go to your domain registrar/DNS provider
- Add a TXT record to solarheim.ch
- Host/Name: `@` or blank
- Value: The verification code from GSC (e.g., `google-site-verification=xxxxxxx`)
- TTL: 3600 or auto
- Save and wait 5-60 minutes
- Return to GSC and click "Verify"

✓ **Expected Result:** "Ownership verified" message

---

### ✓ Step 2: Grant Service Account Access

1. In Google Search Console, ensure solarheim.ch is selected
2. Click the ⚙️ icon (Settings) in the left sidebar
3. Click "Users and permissions"
4. Click "Add user" button
5. Enter this email exactly: `gsc-automation@websites-473902.iam.gserviceaccount.com`
6. Select permission: **"Owner"**
7. Click "Add"

✓ **Expected Result:** Service account appears in the user list with "Owner" permission

---

### ✓ Step 3: Verify 301 Redirects

**Test the redirects are working:**

Open Terminal and run:

```bash
# Test homepage
curl -I https://solarheim.com

# Test www version
curl -I https://www.solarheim.com

# Test a specific page (use a real page from your site)
curl -I https://solarheim.com/products/solar-panel-example
```

**What to look for:**
```
HTTP/1.1 301 Moved Permanently
Location: https://solarheim.ch/
```

**OR test in browser:**
- Visit https://solarheim.com in Chrome
- Open DevTools (F12)
- Go to Network tab
- Refresh page
- Check if first request shows "301" and redirects to solarheim.ch

⚠ **If redirects are NOT working:**
- Check your web server configuration (nginx, Apache, etc.)
- Verify .htaccess rules (if using Apache)
- Check Vercel/Netlify redirect rules (if using those platforms)

---

### ✓ Step 4: Test the Analysis Script

After completing Steps 1-3, wait 10-15 minutes, then run:

```bash
cd /Users/claudiocronin/websites/sites/solarheim.com
python3 gsc_analyze_solarheim_ch.py
```

✓ **Expected Result:** Script connects successfully and shows property status

⚠ **If it fails:** Wait another 15 minutes (DNS/permissions can take time to propagate)

---

## SHORT-TERM ACTIONS (This Week)

### ✓ Step 5: Submit Sitemaps

**Find your sitemap URL(s):**
- Most WordPress sites: `https://solarheim.ch/sitemap_index.xml`
- Or check: `https://solarheim.ch/robots.txt` (usually lists sitemaps)

**Submit in GSC:**
1. Go to Google Search Console
2. Select solarheim.ch property
3. Click "Sitemaps" in left sidebar
4. Enter sitemap URL (e.g., `sitemap_index.xml`)
5. Click "Submit"

**Check your sitemaps exist first:**
- Visit https://solarheim.ch/sitemap_index.xml in browser
- Should show an XML file with URLs
- If 404 error, your sitemap needs to be generated first

✓ **Expected Result:** Sitemap shows as "Success" after a few hours

---

### ✓ Step 6: Request Indexing for Key Pages

1. In GSC, go to "URL Inspection" tool (top of page)
2. Enter your homepage: `https://solarheim.ch`
3. Click "Test live URL"
4. Click "Request indexing"
5. Repeat for your 10 most important pages:
   - Main product/service pages
   - About page
   - Contact page
   - Top blog posts or content pages

⚠ **Note:** You can only request indexing for a limited number of URLs per day

---

### ✓ Step 7: Check for Issues

In Google Search Console, check these sections:

**Overview:**
- Any critical errors shown?

**Index Coverage:**
- Navigate to: Experience > Page indexing
- Look for "Errors" section
- Fix any errors found

**Mobile Usability:**
- Navigate to: Experience > Mobile usability
- Check for mobile issues

**Core Web Vitals:**
- Navigate to: Experience > Core Web Vitals
- Check if pages pass assessment

**Manual Actions:**
- Navigate to: Security & Manual Actions > Manual actions
- Should say "No issues detected"

**Security Issues:**
- Navigate to: Security & Manual Actions > Security issues
- Should say "No issues detected"

---

## MONITORING (Ongoing)

### Daily (First Week)
- [ ] Check indexing progress in GSC > Page indexing
- [ ] Monitor for any new errors
- [ ] Verify traffic is appearing in Analytics

### Weekly (First Month)
- [ ] Run: `python3 gsc_analyze_solarheim_ch.py`
- [ ] Review top performing queries
- [ ] Check Core Web Vitals scores
- [ ] Monitor average position trends

### Monthly (Ongoing)
- [ ] Full GSC review and analysis
- [ ] Compare to previous month
- [ ] Identify optimization opportunities
- [ ] Update content based on search queries

---

## VERIFICATION CHECKLIST

After completing all steps, verify:

- [ ] ✓ solarheim.ch appears in GSC property list
- [ ] ✓ Service account has "Owner" permission
- [ ] ✓ All .com URLs redirect to .ch with 301 status
- [ ] ✓ Analysis script runs without errors
- [ ] ✓ Sitemaps submitted and showing data
- [ ] ✓ Key pages submitted for indexing
- [ ] ✓ No critical errors in Index Coverage
- [ ] ✓ No manual actions or security issues
- [ ] ✓ Mobile usability is good
- [ ] ✓ Core Web Vitals are monitored

---

## TROUBLESHOOTING

### "Cannot access property" error in script

**Possible causes:**
1. Property not added to GSC yet → Complete Step 1
2. Service account not added as user → Complete Step 2
3. Permissions haven't propagated yet → Wait 15-30 minutes
4. Wrong property URL → Verify it's `sc-domain:solarheim.ch`

**Solution:** Run the check script:
```bash
python3 gsc_check_solarheim_properties.py
```

---

### "No data available yet"

**This is normal if:**
- Property was just added (data appears after 2-3 days)
- Site is new or recently migrated (indexing takes time)
- No traffic yet (check if site is actually indexed)

**Check:** Visit `site:solarheim.ch` in Google
- If pages appear → Good, indexed
- If no results → Indexing issue (check robots.txt, noindex tags)

---

### Redirects not working

**Check these files/settings:**

**For nginx:**
```nginx
server {
    listen 80;
    server_name solarheim.com www.solarheim.com;
    return 301 https://solarheim.ch$request_uri;
}
```

**For Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?solarheim\.com$ [NC]
RewriteRule ^(.*)$ https://solarheim.ch/$1 [R=301,L]
```

**For Vercel (vercel.json):**
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "solarheim.com"
        }
      ],
      "destination": "https://solarheim.ch/:path*",
      "permanent": true
    }
  ]
}
```

---

## CRITICAL URLS TO BOOKMARK

- **Google Search Console:** https://search.google.com/search-console
- **GSC Help Center:** https://support.google.com/webmasters
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

---

## SUPPORT FILES LOCATION

All scripts and reports are saved to:
```
/Users/claudiocronin/websites/sites/solarheim.com/
```

**Available files:**
- `GSC_SOLARHEIM_COMPREHENSIVE_REPORT.md` - Full detailed report
- `QUICK_ACTION_CHECKLIST.md` - This checklist
- `gsc_check_solarheim_properties.py` - Check which properties exist
- `gsc_solarheim_com_full_report.py` - Analyze .com property
- `gsc_analyze_solarheim_ch.py` - Analyze .ch property (use after setup)
- `gsc_historical_traffic_analysis.py` - Historical trends
- `gsc_comprehensive_analysis.py` - Generic analysis script

---

## TIMELINE EXPECTATIONS

**Day 1 (Today):**
- Complete Steps 1-4
- Submit sitemaps
- Request indexing for key pages

**Days 2-7:**
- Monitor indexing progress
- Fix any errors that appear
- First data appears in GSC (usually 2-3 days)

**Weeks 2-4:**
- More comprehensive data available
- Can start analyzing performance
- Optimize based on query data

**Months 2-6:**
- Rankings stabilize post-migration
- Traffic should recover to pre-migration levels
- Full migration considered complete

**Note:** Domain migrations typically take 3-6 months for full recovery

---

## QUESTIONS OR ISSUES?

If you encounter problems:

1. **First:** Run the diagnostic script
   ```bash
   python3 gsc_check_solarheim_properties.py
   ```

2. **Check:** Service account permissions in GSC

3. **Verify:** DNS changes have propagated
   ```bash
   dig TXT solarheim.ch
   ```

4. **Review:** The comprehensive report for details
   - See: `GSC_SOLARHEIM_COMPREHENSIVE_REPORT.md`

---

**Last Updated:** October 28, 2025
**Status:** Awaiting setup completion
**Priority:** URGENT - Complete Steps 1-4 immediately
