# Resend Setup for solarheim.ch - Step by Step

## Step 1: Create Resend Account

1. Go to https://resend.com
2. Click "Start Building" or "Sign Up"
3. Sign up with: **localclark@gmail.com**
4. Verify your email
5. Complete onboarding

## Step 2: Add solarheim.ch Domain

1. In Resend Dashboard → **Domains** → **Add Domain**
2. Enter: `solarheim.ch`
3. Click "Add Domain"

You will see 3 DNS records to copy.

## Step 3: DNS Records to Add on Cloudflare

Once you add the domain to Resend, you'll get these records (values will be specific to your account):

### Record 1: DKIM (TXT) - For Email Authentication
```
Type: TXT
Name: resend._domainkey
Value: [Will be provided by Resend - looks like: "p=MIGfMA0GCS..."]
TTL: Auto
Proxy: DNS only (gray cloud)
```

### Record 2: SPF (TXT) - Sender Policy Framework
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
TTL: Auto
Proxy: DNS only (gray cloud)
```

**IMPORTANT**: If you already have an SPF record (which you do for Cloudflare Email Routing), you need to MERGE them:

**Current SPF**: `v=spf1 include:_spf.mx.cloudflare.net ~all`
**Resend SPF**: `v=spf1 include:_spf.resend.com ~all`

**Combined SPF** (what you should use):
```
v=spf1 include:_spf.mx.cloudflare.net include:_spf.resend.com ~all
```

So EDIT your existing SPF TXT record instead of adding a new one.

### Record 3: MX (OPTIONAL)
```
Type: MX
Name: @
Priority: 10
Value: mx.resend.com
TTL: Auto
```

**SKIP THIS** - You already have Cloudflare Email Routing MX records. You only need MX if you want to RECEIVE emails via Resend (which you don't).

## Step 4: How to Add DNS Records on Cloudflare

1. Go to https://dash.cloudflare.com
2. Select **solarheim.ch**
3. Go to **DNS** → **Records**
4. Click **Add record**

**For DKIM TXT**:
- Type: TXT
- Name: resend._domainkey
- Content: [paste DKIM value from Resend]
- Click Save

**For SPF TXT**:
- Find your existing TXT record with name "@" that contains "v=spf1"
- Click **Edit**
- Change the content to: `v=spf1 include:_spf.mx.cloudflare.net include:_spf.resend.com ~all`
- Click Save

## Step 5: Verify Domain on Resend

1. Go back to Resend Dashboard
2. Click **Verify** next to solarheim.ch
3. Wait 2-5 minutes for DNS propagation
4. Status should change to ✅ **Verified**

If not verified:
- Check DNS records on Cloudflare (exact match required)
- Wait up to 10 minutes
- Try verify again

## Step 6: Get API Key

1. Resend Dashboard → **API Keys**
2. Click **Create API Key**
3. Name: "SolarHeim Production"
4. Permissions: **Full Access** (or **Sending access** if you prefer)
5. Click **Add**
6. **COPY THE KEY** - you'll only see it once!
7. Save it somewhere safe (password manager)

Example key format: `re_123abc456def...`

## Step 7: Test Sending

### Option A: Test via SMTP (Gmail)

1. Gmail → Settings → Accounts and Import
2. "Send mail as" → **Add another email address**
3. Your name: "SolarHeim Support"
4. Email address: info@solarheim.ch
5. SMTP Server: smtp.resend.com
6. Port: 587 (TLS) or 465 (SSL)
7. Username: resend
8. Password: [your API key from Step 6]
9. Send test email

### Option B: Test via Resend Dashboard

1. Resend Dashboard → **Emails** → **Send Test Email**
2. From: info@solarheim.ch
3. To: localclark@gmail.com
4. Subject: "Test from SolarHeim"
5. Click Send

If it works: ✅ Setup complete!

## Step 8: Configure Email Clients

### For Sending Emails (any email client):

```
Outgoing Server (SMTP):
Host: smtp.resend.com
Port: 587 (TLS) or 465 (SSL)
Username: resend
Password: [your API key]
From: info@solarheim.ch
```

### For Receiving Emails:

**Already configured!** Cloudflare Email Routing forwards:
- info@solarheim.ch → localclark@gmail.com
- You receive in Gmail
- You send via Resend SMTP

Perfect setup! ✅

## What You Get

**Receiving** (Cloudflare Email Routing - FREE):
- info@solarheim.ch → localclark@gmail.com
- Unlimited forwarding
- No storage needed

**Sending** (Resend - FREE up to 3k/month):
- Send FROM info@solarheim.ch
- Excellent deliverability
- Analytics dashboard
- API + SMTP access

**Total Cost**: $0/month for solarheim.ch (up to 3,000 emails)

## Next Steps for Other Domains

Once solarheim.ch works, repeat for each domain:
1. Add domain to Resend
2. Copy 2 DNS records (DKIM + SPF update)
3. Add to Cloudflare DNS
4. Verify
5. Use same API key for all domains!

Same SMTP settings work for ALL domains, just change the "From" address.

## Troubleshooting

**Domain not verifying:**
- Check Cloudflare DNS records exactly match Resend
- Wait 5-10 minutes
- Use https://dnschecker.org to verify propagation

**Emails going to spam:**
- Make sure DKIM and SPF are verified ✅ on Resend
- Start with low volume (warm-up)
- Avoid spam trigger words

**Can't send:**
- Check API key is correct
- Verify domain status is ✅ Verified
- Check SMTP credentials (username is "resend", password is API key)

## Support

**Resend**: https://resend.com/docs
**This setup**: Ask me if you need help with other domains!
