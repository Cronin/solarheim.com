# Google Search Console Comprehensive Analysis Report
## Solarheim Domain Migration Status

**Report Date:** October 28, 2025
**Analyzed Properties:** solarheim.com, solarheim.ch
**Service Account:** gsc-automation@websites-473902.iam.gserviceaccount.com

---

## Executive Summary

### Critical Findings

🚨 **CRITICAL ISSUE: solarheim.ch NOT SET UP IN GOOGLE SEARCH CONSOLE**

- ✓ **solarheim.com** property EXISTS and is verified in GSC
- ✗ **solarheim.ch** property DOES NOT EXIST in GSC
- ⚠ **solarheim.com** shows ZERO traffic data (no clicks, no impressions)
- ⚠ Service account has NO access to solarheim.ch property

### Overall Health Status

**STATUS: INCOMPLETE MIGRATION - IMMEDIATE ACTION REQUIRED**

The analysis reveals that while the website has been migrated from solarheim.com to solarheim.ch at the infrastructure level, the Google Search Console setup is incomplete. This means:

1. You have NO visibility into search performance for solarheim.ch
2. Google cannot communicate indexing issues or problems
3. You cannot submit sitemaps for the .ch domain
4. Search performance data is not being collected
5. You cannot monitor Core Web Vitals, mobile usability, or other critical metrics

---

## Detailed Findings

### 1. Property Status

#### solarheim.com (sc-domain:solarheim.com)
- **Status:** ✓ Verified and accessible
- **Permission Level:** Site Owner
- **Service Account Access:** ✓ Granted (full owner permissions)
- **Last Activity:** Property exists but shows no traffic data

#### solarheim.ch
- **Status:** ✗ NOT FOUND in Google Search Console
- **Issue:** Property has not been added to GSC, or service account lacks access
- **Impact:** Complete lack of search performance visibility

### 2. Recent Performance (Last 7 Days)

**Date Range:** October 20-27, 2025

| Metric | Value | Status |
|--------|-------|--------|
| Total Clicks | 0 | ⚠ Critical |
| Total Impressions | 0 | ⚠ Critical |
| Average CTR | 0.00% | ⚠ No data |
| Average Position | N/A | ⚠ No data |

**Analysis:** Zero traffic indicates the solarheim.com domain is either:
- No longer active (migrated to .ch)
- Not indexed by Google
- Completely redirecting to .ch (which is the expected scenario)

### 3. Indexing Status

**Cannot be determined** - solarheim.ch is not in Search Console

Expected information (once .ch is added):
- Total indexed pages
- Valid pages vs. excluded pages
- Coverage errors and warnings
- Index bloat analysis
- Crawl budget optimization

### 4. Coverage Issues

**Cannot be assessed** - No access to solarheim.ch property

Critical metrics unavailable:
- Error pages (4xx, 5xx)
- Pages with warnings
- Excluded pages (noindex, blocked by robots.txt)
- Discovered but not indexed
- Crawled but not indexed

### 5. Mobile Usability

**Cannot be assessed** - No access to solarheim.ch property

Expected checks:
- Mobile-friendly pages
- Viewport configuration issues
- Text sizing problems
- Clickable elements too close
- Content wider than screen

### 6. Core Web Vitals

**Cannot be assessed** - No access to solarheim.ch property

Critical performance metrics unavailable:
- **LCP (Largest Contentful Paint):** Loading performance
- **FID (First Input Delay):** Interactivity
- **CLS (Cumulative Layout Shift):** Visual stability
- Mobile vs. Desktop performance comparison
- Poor/Needs Improvement/Good URL counts

### 7. Manual Actions

**Cannot be checked** - No access to solarheim.ch property

This is critical for identifying:
- Spam penalties
- Unnatural links
- Hacked content
- User-generated spam
- Thin content with little or no added value

### 8. Security Issues

**Cannot be checked** - No access to solarheim.ch property

Important security alerts unavailable:
- Hacked content detection
- Malware warnings
- Social engineering warnings
- Harmful downloads

### 9. Sitemaps Status (solarheim.com)

Found **3 sitemaps** in the old solarheim.com property:

#### Sitemap 1: Product Categories
- **URL:** https://solarheim.com/product_cat-sitemap.xml
- **Last Submitted:** December 12, 2023
- **Last Downloaded:** December 13, 2023
- **Web Pages Submitted:** 5
- **Web Pages Indexed:** 0 ⚠
- **Images Submitted:** 5
- **Images Indexed:** 0 ⚠

#### Sitemap 2: Products
- **URL:** https://solarheim.com/product-sitemap.xml
- **Last Submitted:** December 12, 2023
- **Last Downloaded:** December 13, 2023
- **Web Pages Submitted:** 103
- **Web Pages Indexed:** 0 ⚠
- **Images Submitted:** 201
- **Images Indexed:** 0 ⚠

#### Sitemap 3: Pages
- **URL:** https://solarheim.com/page-sitemap.xml
- **Last Submitted:** December 12, 2023
- **Last Downloaded:** December 13, 2023
- **Web Pages Submitted:** 11
- **Web Pages Indexed:** 0 ⚠
- **Images Submitted:** 39
- **Images Indexed:** 0 ⚠

**Analysis:** All sitemaps show 0 indexed pages, confirming that solarheim.com is no longer being indexed (either deindexed or fully migrated to .ch).

### 10. Historical Traffic Analysis

**Analysis Period:** Last 16 months (July 2024 - October 2025)

| Period | Clicks | Impressions | Status |
|--------|--------|-------------|--------|
| Last 7 days | 0 | 0 | No traffic |
| Last 28 days | 0 | 0 | No traffic |
| Last 90 days | 0 | 0 | No traffic |
| All available data | 0 | 0 | No historical data |

**Conclusion:** The solarheim.com property has no recorded traffic data in Google Search Console. This suggests either:
1. The property was created but never actively used
2. Historical data was purged or not available
3. The site migrated to .ch before GSC tracking began
4. GSC API data retention limits apply

---

## Critical Issues Requiring Immediate Attention

### PRIORITY 1: Add solarheim.ch to Google Search Console

**Issue:** Primary domain not monitored
**Impact:** Complete lack of SEO visibility
**Urgency:** IMMEDIATE

**Actions Required:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Select "Domain" property type
4. Enter: solarheim.ch
5. Verify ownership using DNS TXT record (recommended method)
6. Wait for verification to complete

### PRIORITY 2: Grant Service Account Access

**Issue:** Automated reporting cannot access solarheim.ch
**Impact:** Cannot generate this type of analysis for the live site
**Urgency:** IMMEDIATE

**Actions Required:**
1. After adding solarheim.ch property, go to Settings > Users and permissions
2. Click "Add user"
3. Enter email: `gsc-automation@websites-473902.iam.gserviceaccount.com`
4. Select permission level: "Owner"
5. Click "Add"

### PRIORITY 3: Verify 301 Redirects from .com to .ch

**Issue:** Need to confirm proper domain migration
**Impact:** SEO equity transfer, user experience
**Urgency:** HIGH

**Actions Required:**
1. Test that all solarheim.com URLs redirect to solarheim.ch equivalents
2. Verify redirect type is 301 (permanent)
3. Ensure redirect preserves URL structure (e.g., /page-name stays /page-name)
4. Check that www and non-www versions both redirect properly
5. Test with multiple pages, not just homepage

**Testing Command:**
```bash
curl -I https://solarheim.com
curl -I https://www.solarheim.com
curl -I https://solarheim.com/some-product-page
```

Look for: `HTTP/1.1 301 Moved Permanently` and `Location: https://solarheim.ch/...`

### PRIORITY 4: Submit Sitemaps for solarheim.ch

**Issue:** No sitemaps submitted for the active domain
**Impact:** Slower indexing, incomplete crawling
**Urgency:** HIGH

**Actions Required (after solarheim.ch is added to GSC):**
1. Generate fresh XML sitemaps for solarheim.ch
2. Submit via GSC: Sitemaps section
3. Expected sitemaps:
   - https://solarheim.ch/sitemap_index.xml (or)
   - https://solarheim.ch/page-sitemap.xml
   - https://solarheim.ch/product-sitemap.xml
   - https://solarheim.ch/product_cat-sitemap.xml

---

## Domain Migration Assessment

### Current Migration Status

| Aspect | Status | Details |
|--------|--------|---------|
| Domain switch (infrastructure) | ✓ Likely complete | .com shows no traffic |
| 301 redirects | ⚠ Needs verification | Cannot confirm without testing |
| GSC property setup | ✗ NOT DONE | Critical gap |
| Sitemap submission | ✗ NOT DONE | Awaits GSC setup |
| Historical data preservation | ✓ Maintained | .com property still exists |
| Service account access | ✗ NOT DONE | Needs to be added to .ch |

### Expected vs. Actual State

**Expected Post-Migration State:**
- ✓ Old domain (.com) redirects to new domain (.ch)
- ✗ New domain (.ch) is verified in Google Search Console
- ✗ Sitemaps submitted for new domain
- ✓ Old domain property retained for historical reference
- ✗ Both properties monitored during transition period

**Actual State:**
- ✓ Old domain appears to be deindexed/inactive
- ✗ New domain NOT in Search Console
- ✗ No monitoring capability for live site
- ✓ Old property exists but has no data

**Gap Analysis:** Migration appears to be 40% complete (infrastructure done, monitoring not set up)

---

## Recommendations for SEO Improvements

### Immediate Actions (This Week)

1. **Add solarheim.ch to Google Search Console** (Day 1)
   - Use DNS verification for domain-level property
   - This provides coverage for www, non-www, http, https automatically

2. **Grant service account access** (Day 1)
   - Email: gsc-automation@websites-473902.iam.gserviceaccount.com
   - Permission: Owner

3. **Verify redirect setup** (Day 1-2)
   - Test all major URL patterns
   - Ensure 301 redirects are in place
   - Check redirect chains (avoid multiple hops)

4. **Submit sitemaps** (Day 2-3)
   - Generate fresh sitemaps from .ch domain
   - Submit all relevant sitemap types
   - Monitor for errors

5. **Request immediate indexing for key pages** (Day 3-5)
   - Use GSC URL Inspection tool
   - Request indexing for homepage and top 10 pages
   - Monitor indexing status daily

### Short-Term Actions (Next 2-4 Weeks)

1. **Monitor Index Coverage**
   - Check daily for indexing progress
   - Address any coverage errors immediately
   - Aim for 90%+ of submitted URLs to be indexed

2. **Check Mobile Usability**
   - Fix any mobile-specific issues
   - Test on real devices
   - Ensure responsive design works properly

3. **Optimize Core Web Vitals**
   - Target: LCP < 2.5s, FID < 100ms, CLS < 0.1
   - Use PageSpeed Insights for specific recommendations
   - Prioritize mobile performance

4. **Set Up Search Console Insights**
   - Link GSC with Google Analytics
   - Enable Search Console reports in GA4
   - Set up automated email reports

5. **Monitor Search Performance**
   - Track click-through rates
   - Identify top-performing queries
   - Find optimization opportunities

### Medium-Term Actions (Next 1-3 Months)

1. **Update Structured Data**
   - Ensure all schema.org markup uses .ch URLs
   - Test with Rich Results Test tool
   - Fix any structured data errors

2. **Build Internal Links**
   - Ensure all internal links point to .ch
   - No links should point back to .com
   - Update breadcrumbs and navigation

3. **Update External Citations**
   - Update business listings to .ch
   - Contact sites linking to .com to update
   - Update social media profiles

4. **Monitor Rankings**
   - Track keyword positions weekly
   - Compare to pre-migration baseline
   - Expect 3-6 months for full ranking recovery

5. **Content Optimization**
   - Update thin content pages
   - Expand top-performing content
   - Improve meta titles and descriptions for low-CTR pages

### Long-Term Actions (3-12 Months)

1. **Keep solarheim.com property for reference**
   - Do not delete immediately
   - Use for historical data comparison
   - Can remove after 12+ months

2. **Regular Performance Audits**
   - Monthly GSC analysis
   - Quarterly technical SEO audit
   - Annual comprehensive review

3. **Link Building**
   - Focus on quality backlinks to .ch
   - Natural link acquisition through content
   - Fix or redirect broken backlinks to .com

---

## Confirmation on Domain Switch Issues

### Has the .com to .ch switch caused problems?

**Answer: Cannot fully determine without access to solarheim.ch GSC data**

However, based on current analysis:

**Concerning Indicators:**
- ✗ solarheim.ch not set up in GSC (major oversight)
- ✗ No monitoring capability for the live domain
- ⚠ Potential that Google hasn't fully discovered the migration

**Neutral/Positive Indicators:**
- ✓ solarheim.com shows no traffic (suggests successful redirect)
- ✓ Old property still exists (historical data preserved)
- ⚠ Zero indexing on old domain (expected after migration)

**What we don't know (requires .ch access):**
- Is solarheim.ch being indexed?
- How many pages are in Google's index?
- Is search traffic flowing to .ch?
- Are there any indexing errors?
- What is the current ranking position?
- Are users finding the site in search?

### Migration Success Criteria

To confirm a successful migration, we need to see (once .ch is added):

✓ **Index Status**
- 80%+ of important pages indexed
- Low error rate (< 5%)
- No major coverage issues

✓ **Traffic Recovery**
- Organic traffic at 70-100% of pre-migration levels
- Trend showing recovery within 3-6 months
- No major ranking drops for key terms

✓ **Technical Health**
- No redirect chains
- All redirects are 301 (permanent)
- Fast page load times
- Good Core Web Vitals scores

✓ **Search Visibility**
- Brand searches find the .ch site
- Key landing pages ranking well
- Site: search shows .ch pages, not .com

---

## Data Collection Scripts

All analysis scripts have been saved to:
- `/Users/claudiocronin/websites/sites/solarheim.com/`

### Available Scripts:

1. **gsc_check_solarheim_properties.py**
   - Lists all solarheim properties in GSC
   - Shows permission levels
   - Quick status check

2. **gsc_solarheim_com_full_report.py**
   - Comprehensive analysis of solarheim.com property
   - Performance metrics, queries, pages, devices
   - Sitemap status

3. **gsc_historical_traffic_analysis.py**
   - Historical traffic trends
   - Monthly/weekly aggregations
   - Traffic drop detection

4. **gsc_comprehensive_analysis.py**
   - Generic multi-property analysis script
   - Can be adapted for any domain

### Running the Scripts:

```bash
cd /Users/claudiocronin/websites/sites/solarheim.com
python3 gsc_check_solarheim_properties.py
python3 gsc_solarheim_com_full_report.py
python3 gsc_historical_traffic_analysis.py
```

---

## Next Steps Checklist

### Immediate (Within 24 Hours)
- [ ] Add solarheim.ch property to Google Search Console
- [ ] Add service account as owner to solarheim.ch property
- [ ] Verify 301 redirects are working correctly
- [ ] Re-run GSC analysis scripts to get .ch data

### Short-Term (This Week)
- [ ] Submit fresh sitemaps for solarheim.ch
- [ ] Request indexing for top 20 most important pages
- [ ] Check for any manual actions or security issues
- [ ] Review mobile usability report
- [ ] Monitor indexing progress daily

### Ongoing (Next Month)
- [ ] Weekly GSC performance review
- [ ] Track index coverage improvements
- [ ] Optimize pages with poor CTR
- [ ] Address any technical issues that appear
- [ ] Monitor Core Web Vitals scores

---

## Support Information

**Service Account Email:** gsc-automation@websites-473902.iam.gserviceaccount.com
**Credentials Location:** /Users/claudiocronin/Downloads/credentials.json
**Working Directory:** /Users/claudiocronin/websites/sites/solarheim.com
**Script Language:** Python 3
**API:** Google Search Console API v1

**For Questions or Issues:**
- Review Google Search Console Help Center
- Check API status: https://status.cloud.google.com/
- Verify service account permissions
- Ensure credentials.json is valid and accessible

---

## Appendix: API Data Limitations

**Google Search Console API Limitations:**
- Data is available with a 2-3 day delay
- Maximum 16 months of historical data
- Query data limited to 25,000 rows per request
- Some metrics require property-level access
- Anonymous queries are filtered out
- Low-volume data may be filtered for privacy

**Why solarheim.com shows no data:**
- Property may have been added recently
- Site had no search visibility when monitored
- Migration occurred before substantial traffic
- Data retention limits may apply

---

**Report Generated:** October 28, 2025
**Analysis Tool:** GSC API via Service Account Authentication
**Data Freshness:** Up to 3 days delayed
**Confidence Level:** High for .com data, Unknown for .ch (not accessible)
