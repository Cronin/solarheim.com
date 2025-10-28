# Email Routing Testing Guide

## Quick Test Commands

### Test MX Records (DNS Propagation)

```bash
# Test each domain's MX records
dig MX surfcampuluwatu.com +short
dig MX surflessonsbali.id +short
dig MX surflessonscanggu.com +short
dig MX surflessonscangguvibes.com +short
dig MX surflessonsuluwatu.com +short
dig MX textclark.com +short
dig MX textclark.xyz +short
dig MX thereconquista.com +short
dig MX saunakøbenhavn.dk +short
dig MX schlüsseldienstzug.ch +short
dig MX yourgptva.com +short
```

Expected output for each domain:
```
[priority] route1.mx.cloudflare.net.
[priority] route2.mx.cloudflare.net.
[priority] route3.mx.cloudflare.net.
```

### Test SPF Records

```bash
# Check SPF configuration for each domain
dig TXT surfcampuluwatu.com +short | grep spf
dig TXT surflessonsbali.id +short | grep spf
dig TXT surflessonscanggu.com +short | grep spf
dig TXT surflessonscangguvibes.com +short | grep spf
dig TXT surflessonsuluwatu.com +short | grep spf
dig TXT textclark.com +short | grep spf
dig TXT textclark.xyz +short | grep spf
dig TXT thereconquista.com +short | grep spf
dig TXT saunakøbenhavn.dk +short | grep spf
dig TXT schlüsseldienstzug.ch +short | grep spf
dig TXT yourgptva.com +short | grep spf
```

Expected output:
```
"v=spf1 include:_spf.mx.cloudflare.net ~all"
```

### Test DKIM Records

```bash
# Check DKIM configuration
dig TXT cf2024-1._domainkey.surfcampuluwatu.com +short
dig TXT cf2024-1._domainkey.surflessonsbali.id +short
# ... (repeat for each domain)
```

Expected: Long TXT record starting with "v=DKIM1; h=sha256; k=rsa; p=..."

---

## Email Testing Scenarios

### Test 1: Specific Rule (info@domain.com)

Send test emails to:
- info@surfcampuluwatu.com
- info@surflessonsbali.id
- info@surflessonscanggu.com
- info@surflessonscangguvibes.com
- info@surflessonsuluwatu.com
- info@textclark.com
- info@textclark.xyz
- info@thereconquista.com
- info@saunakøbenhavn.dk
- info@schlüsseldienstzug.ch
- info@yourgptva.com

Expected: All emails should arrive at localclark@gmail.com

### Test 2: Catch-All Rule (any address)

Send test emails to random addresses:
- test@surfcampuluwatu.com
- hello@surflessonsbali.id
- contact@surflessonscanggu.com
- support@surflessonscangguvibes.com
- sales@surflessonsuluwatu.com
- admin@textclark.com
- webmaster@textclark.xyz
- anything@thereconquista.com
- random@saunakøbenhavn.dk
- catchall@schlüsseldienstzug.ch
- anything123@yourgptva.com

Expected: All emails should arrive at localclark@gmail.com

### Test 3: Different Email Providers

Send test emails from:
- Gmail account
- Outlook/Hotmail account
- Yahoo account
- Custom domain email
- Contact form on website

This ensures compatibility across different email systems.

---

## Testing Checklist

### Initial Setup Verification
- [ ] Verify destination email localclark@gmail.com is confirmed
- [ ] Check Email Routing status in Cloudflare Dashboard shows "Ready"
- [ ] Confirm DNS records have been created automatically

### DNS Propagation (Wait 0-48 hours)
- [ ] MX records resolve correctly for all 11 domains
- [ ] SPF records are present for all 11 domains
- [ ] DKIM records are present for all 11 domains

### Email Delivery Testing
- [ ] Send test to info@surfcampuluwatu.com → Received
- [ ] Send test to info@surflessonsbali.id → Received
- [ ] Send test to info@surflessonscanggu.com → Received
- [ ] Send test to info@surflessonscangguvibes.com → Received
- [ ] Send test to info@surflessonsuluwatu.com → Received
- [ ] Send test to info@textclark.com → Received
- [ ] Send test to info@textclark.xyz → Received
- [ ] Send test to info@thereconquista.com → Received
- [ ] Send test to info@saunakøbenhavn.dk → Received
- [ ] Send test to info@schlüsseldienstzug.ch → Received
- [ ] Send test to info@yourgptva.com → Received

### Catch-All Testing
- [ ] Send test to random@surfcampuluwatu.com → Received
- [ ] Send test to test@textclark.com → Received
- [ ] Send test to anything@yourgptva.com → Received

### Email Content Verification
- [ ] Check email headers show correct forwarding path
- [ ] Verify "From" address is preserved
- [ ] Confirm no email content is modified
- [ ] Check attachments are forwarded correctly

---

## Monitoring Email Routing

### View Logs in Cloudflare Dashboard

1. Log in to https://dash.cloudflare.com
2. Select a domain
3. Go to Email → Email Routing → Logs
4. Review recent email activity

### What to Monitor
- Delivery success rate
- Bounce messages
- Spam filtering (check spam folder regularly)
- Failed forwards

---

## Common Issues and Solutions

### Issue: Emails Not Arriving

**Solutions:**
1. Check spam/junk folder in localclark@gmail.com
2. Verify MX records have propagated: `dig MX domain.com`
3. Wait 24-48 hours for full DNS propagation
4. Check Email Routing logs in Cloudflare Dashboard
5. Verify destination email is still verified

### Issue: MX Records Not Resolving

**Solutions:**
1. Wait for DNS propagation (can take up to 48 hours)
2. Clear local DNS cache: `sudo dscacheutil -flushcache` (macOS)
3. Test with different DNS servers: `dig @8.8.8.8 MX domain.com`
4. Check domain nameservers point to Cloudflare

### Issue: Emails Going to Spam

**Solutions:**
1. Add Cloudflare's sending addresses to contacts
2. Mark test emails as "Not Spam"
3. Verify SPF and DKIM records are configured
4. Check email headers for authentication results
5. Wait a few days for email reputation to build

### Issue: Specific Email Not Forwarding

**Solutions:**
1. Check if sender domain has strict DMARC policy
2. Review Email Routing logs for error messages
3. Verify rule is enabled in Cloudflare Dashboard
4. Check if Gmail has filters that might be affecting delivery

---

## Advanced Testing with Command Line

### Send Test Email via Command Line (Linux/macOS)

```bash
# Install swaks if not already installed
# macOS: brew install swaks
# Linux: apt-get install swaks

# Send test email to info@surfcampuluwatu.com
swaks --to info@surfcampuluwatu.com \
      --from your-email@gmail.com \
      --server smtp.gmail.com:587 \
      --auth LOGIN \
      --auth-user your-email@gmail.com \
      --tls \
      --header "Subject: Email Routing Test" \
      --body "This is a test of Cloudflare Email Routing"

# Send test to catch-all
swaks --to test123@surfcampuluwatu.com \
      --from your-email@gmail.com \
      --server smtp.gmail.com:587 \
      --auth LOGIN \
      --auth-user your-email@gmail.com \
      --tls \
      --header "Subject: Catch-All Test" \
      --body "Testing catch-all rule"
```

### Test Email Headers

After receiving test email, view full headers in Gmail:
1. Open the email
2. Click three dots menu (⋮)
3. Select "Show original"
4. Look for:
   - `Return-Path:` (should show Cloudflare routing)
   - `Received:` headers (should show route through Cloudflare MX servers)
   - `Authentication-Results:` (should pass SPF and DKIM)

---

## API Verification Commands

### Check Email Routing Status

```bash
# Get routing status for a domain (replace ZONE_ID)
curl -X GET "https://api.cloudflare.com/client/v4/zones/ZONE_ID/email/routing" \
  -H "X-Auth-Email: 24prontocom@gmail.com" \
  -H "X-Auth-Key: [API_KEY]" \
  -H "Content-Type: application/json" | jq .
```

### List Email Routing Rules

```bash
# List all rules for a domain (replace ZONE_ID)
curl -X GET "https://api.cloudflare.com/client/v4/zones/ZONE_ID/email/routing/rules" \
  -H "X-Auth-Email: 24prontocom@gmail.com" \
  -H "X-Auth-Key: [API_KEY]" \
  -H "Content-Type: application/json" | jq .
```

### Check DNS Records

```bash
# Check DNS records for a domain (replace ZONE_ID)
curl -X GET "https://api.cloudflare.com/client/v4/zones/ZONE_ID/email/routing/dns" \
  -H "X-Auth-Email: 24prontocom@gmail.com" \
  -H "X-Auth-Key: [API_KEY]" \
  -H "Content-Type: application/json" | jq .
```

---

## Expected Timeline

- **Immediate (0-5 minutes):**
  - Email Routing enabled in Cloudflare
  - Rules created and active
  - DNS records added to Cloudflare

- **Within 1 hour:**
  - DNS propagation begins
  - Test emails from same network may work

- **Within 24 hours:**
  - Full DNS propagation to most servers
  - Email routing should work globally

- **Within 48 hours:**
  - Complete DNS propagation worldwide
  - All email routing fully operational

---

## Support Resources

### Cloudflare Documentation
- Email Routing Overview: https://developers.cloudflare.com/email-routing/
- DNS Records: https://developers.cloudflare.com/dns/
- Troubleshooting: https://developers.cloudflare.com/email-routing/troubleshooting/

### Online Tools
- MXToolbox: https://mxtoolbox.com/ (Check MX, SPF, DKIM)
- DNS Checker: https://dnschecker.org/ (Check DNS propagation)
- Mail Tester: https://www.mail-tester.com/ (Test email deliverability)

### Contact Support
- Cloudflare Community: https://community.cloudflare.com/
- Cloudflare Support: https://dash.cloudflare.com/?to=/:account/support

---

## Success Criteria

Email routing is working correctly when:
- ✓ All 11 domains show "Ready" status in Cloudflare Dashboard
- ✓ MX records resolve to route[1-3].mx.cloudflare.net
- ✓ SPF and DKIM records are present
- ✓ Test emails to info@domain.com arrive at localclark@gmail.com
- ✓ Test emails to any@domain.com arrive at localclark@gmail.com
- ✓ Email headers show proper authentication (SPF/DKIM pass)
- ✓ No emails in Cloudflare error logs

---

**Testing completed and documented on 2025-10-27**
