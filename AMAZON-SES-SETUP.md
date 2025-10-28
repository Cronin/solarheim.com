# Amazon SES Setup per 31 Domini - Guida Completa

## 🎯 Perché Amazon SES?

**Costo:**
- $0.10 per 1,000 email inviati
- $10 = 100,000 email
- **10x più economico di Resend/SendGrid/Mailgun**

**Vantaggi:**
- ✅ Illimitati domini (gratis)
- ✅ Scalabile infinitamente
- ✅ Affidabilità Amazon (99.9% uptime)
- ✅ Integrazione facile con Vercel
- ✅ Supporta HTML templates bellissimi

---

## 📋 Setup Completo (30 minuti)

### Step 1: Crea Account AWS

1. Vai su: https://aws.amazon.com
2. Click "Create AWS Account"
3. Inserisci carta di credito (non verrà addebitato nulla nel free tier)
4. Conferma account

---

### Step 2: Attiva Amazon SES

1. **Login AWS Console**: https://console.aws.amazon.com
2. **Cerca "SES"** nella search bar
3. **Seleziona Region**: EU (Frankfurt) o US East (Virginia)
4. **Click**: "Get Started"

---

### Step 3: Verifica Primo Dominio (solarheim.ch)

#### 3.1 Aggiungi Dominio

1. **SES Console** → **Verified identities** → **Create identity**
2. **Identity type**: Domain
3. **Domain**: `solarheim.ch`
4. **Advanced DKIM settings**: Easy DKIM (consigliato)
5. **DKIM signing key length**: RSA_2048_BIT
6. **Click**: Create identity

#### 3.2 Configura DNS su Cloudflare

AWS ti darà 3 record da aggiungere:

**1. DKIM Records (3x CNAME):**
```
Type: CNAME
Name: abc123._domainkey.solarheim.ch
Value: abc123.dkim.amazonses.com
```

**2. Custom MAIL FROM (2x MX + 1x TXT):**
```
Type: MX
Name: mail.solarheim.ch
Value: 10 feedback-smtp.eu-west-1.amazonses.com

Type: TXT
Name: mail.solarheim.ch
Value: v=spf1 include:amazonses.com ~all
```

**Aggiungi questi records su Cloudflare:**
1. Vai su Cloudflare → solarheim.ch → DNS
2. Add record per ognuno
3. **IMPORTANTE**: Proxy status = "DNS only" (cloud grigio, non arancione!)

#### 3.3 Attendi Verifica

- Verifica DKIM: 5-10 minuti
- Status cambierà da "Pending" a "Verified"
- Controlla su SES Console → Verified identities

---

### Step 4: Esci da Sandbox Mode

**AWS SES inizia in "Sandbox Mode":**
- ❌ Puoi inviare solo a email verificate
- ❌ Limite 200 email/giorno
- ❌ Non puoi usare in produzione

**Per uscire:**

1. **SES Console** → **Account dashboard** → **Request production access**
2. **Mail type**: Transactional
3. **Website URL**: https://solarheim.ch
4. **Use case description**:
```
We operate 31 solar comparison websites across Switzerland, Germany, and Austria.
Users submit solar installation quote requests through our contact forms.

We need to send:
1. Lead notifications to our sales team (localclark@gmail.com)
2. Auto-response confirmations to customers

Expected volume:
- 100-500 emails per day initially
- May scale to 1000+ emails per day

All emails are opt-in form submissions. We handle bounces and complaints properly.
We will monitor bounce rates and maintain good sending reputation.
```
5. **Additional info**: Mention compliance with GDPR (Swiss/EU data protection)
6. **Submit request**

**Timeline:**
- AWS risponde in 24-48 ore
- Se rifiutano (raro), puoi rispondere con più dettagli

---

### Step 5: Ottieni SMTP Credentials

1. **SES Console** → **SMTP Settings** → **Create SMTP credentials**
2. **IAM User Name**: `ses-smtp-solarheim`
3. **Click**: Create user
4. **SALVA LE CREDENZIALI** (non puoi recuperarle dopo!):
   - SMTP Username: `AKIAIOSFODNN7EXAMPLE`
   - SMTP Password: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
5. **SMTP Endpoint**: `email-smtp.eu-west-1.amazonaws.com`
6. **Port**: 587 (TLS) o 465 (SSL)

---

### Step 6: Aggiungi a Vercel

1. **Vercel Dashboard** → solarheim.com → **Settings** → **Environment Variables**

Aggiungi:
```bash
AWS_SES_SMTP_HOST=email-smtp.eu-west-1.amazonaws.com
AWS_SES_SMTP_PORT=587
AWS_SES_SMTP_USER=AKIAIOSFODNN7EXAMPLE
AWS_SES_SMTP_PASSWORD=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_SES_REGION=eu-west-1
```

---

### Step 7: Codice Vercel API (Nodemailer)

**Installa dipendenze:**
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

**Crea API route:**

```typescript
// app/api/send-lead-email/route.ts
import nodemailer from 'nodemailer';

// Configura SES transporter
const transporter = nodemailer.createTransport({
  host: process.env.AWS_SES_SMTP_HOST,
  port: parseInt(process.env.AWS_SES_SMTP_PORT || '587'),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.AWS_SES_SMTP_USER,
    pass: process.env.AWS_SES_SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const domain = formData.domain || 'solarheim.ch';

    // Email 1: Notification a te
    await transporter.sendMail({
      from: `SolarHeim <info@${domain}>`,
      to: 'localclark@gmail.com',
      replyTo: formData.email,
      subject: `🌞 Neue Anfrage: ${formData.firstName} ${formData.lastName} | ${formData.city}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #10b981; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
            Neue Solaranlage Anfrage
          </h1>

          <h2 style="color: #333; margin-top: 30px;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f3f4f6;">
              <td style="padding: 12px; font-weight: bold; width: 40%;">Name:</td>
              <td style="padding: 12px;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Email:</td>
              <td style="padding: 12px;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr style="background: #f3f4f6;">
              <td style="padding: 12px; font-weight: bold;">Telefon:</td>
              <td style="padding: 12px;"><a href="tel:${formData.phone}">${formData.phone}</a></td>
            </tr>
          </table>

          <h2 style="color: #333; margin-top: 30px;">Immobilie</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f3f4f6;">
              <td style="padding: 12px; font-weight: bold; width: 40%;">Typ:</td>
              <td style="padding: 12px;">${formData.propertyType}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Standort:</td>
              <td style="padding: 12px;">${formData.postalCode} ${formData.city}</td>
            </tr>
            <tr style="background: #f3f4f6;">
              <td style="padding: 12px; font-weight: bold;">Verbrauch:</td>
              <td style="padding: 12px;">${formData.annualConsumption}</td>
            </tr>
          </table>

          <div style="margin-top: 40px; padding: 20px; background: #f0fdf4; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #059669; font-weight: bold;">
              📧 Antworten Sie auf diese Email um direkt mit dem Kunden zu kommunizieren
            </p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #f9fafb; text-align: center; border-radius: 8px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Quelle: <strong>${domain}</strong> | ${new Date().toLocaleString('de-CH')}
            </p>
          </div>
        </div>
      `,
    });

    // Email 2: Auto-response al cliente
    await transporter.sendMail({
      from: `SolarHeim <info@${domain}>`,
      to: formData.email,
      subject: `Vielen Dank für Ihre Anfrage bei ${domain.split('.')[0]}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #10b981;">Vielen Dank ${formData.firstName}!</h1>

          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Wir haben Ihre Anfrage erfolgreich erhalten und werden uns
            <strong>innerhalb von 2-5 Werktagen</strong> bei Ihnen melden.
          </p>

          <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 30px 0;">
            <h3 style="margin-top: 0; color: #059669;">📋 Ihre Angaben:</h3>
            <ul style="line-height: 1.8;">
              <li><strong>Immobilie:</strong> ${formData.propertyType}</li>
              <li><strong>Standort:</strong> ${formData.postalCode} ${formData.city}</li>
              <li><strong>Verbrauch:</strong> ${formData.annualConsumption}</li>
            </ul>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px;">
            <h3 style="margin-top: 0;">⏱️ Wie geht es weiter?</h3>
            <ol style="line-height: 2;">
              <li>Wir prüfen Ihre Anfrage (heute)</li>
              <li>Wir kontaktieren Solarteure in Ihrer Region (1-2 Tage)</li>
              <li>Sie erhalten bis zu 3 kostenlose Offerten (2-5 Tage)</li>
            </ol>
          </div>

          <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
            Haben Sie Fragen? Kontaktieren Sie uns:
            <a href="mailto:info@${domain}" style="color: #10b981;">info@${domain}</a>
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

---

### Step 8: Aggiorna FormContainer per Chiamare API

```typescript
// components/MultiStepForm/FormContainer.tsx

const onSubmit = async (data: FormData) => {
  console.log('Form submitted:', data);
  setIsSubmitting(true);

  try {
    // Chiama la tua API invece di Web3Forms!
    const response = await fetch('/api/send-lead-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        domain: window.location.hostname,
      }),
    });

    if (!response.ok) {
      throw new Error('Email send failed');
    }

    // Track form completion
    trackFormComplete({...});

    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);

    // Redirect to thank you page
    router.push('/danke');
  } catch (error) {
    console.error('Error submitting form:', error);
    router.push('/danke'); // Graceful degradation
  } finally {
    setIsSubmitting(false);
  }
};
```

---

### Step 9: Aggiungi Altri 30 Domini (Automazione!)

Una volta che hai production access, puoi aggiungere tutti i domini via CLI:

```bash
# Installa AWS CLI
brew install awscli  # Mac
# oppure scarica da: https://aws.amazon.com/cli/

# Configura
aws configure
# Inserisci Access Key ID e Secret (crea in IAM Console)

# Script per aggiungere tutti i domini
for domain in solarheim.de solarheim.at solaranlage.ch ...; do
  aws ses verify-domain-identity --domain $domain --region eu-west-1
done
```

Poi aggiungi DNS records su Cloudflare per ognuno (puoi usare Cloudflare API per automatizzare!).

---

## 💰 Costi Previsti

### Scenario: 100 lead/giorno

**Email inviate al giorno:**
- 100 notifiche a te
- 100 auto-response ai clienti
- **Totale: 200 email/giorno**

**Costo mensile:**
- 200 email/day × 30 giorni = 6,000 email/mese
- 6,000 ÷ 1,000 = 6 unità
- 6 × $0.10 = **$0.60/mese**

**Costo annuale: $7.20**

### Confronto:

| Provider | 31 Domini | 6k email/mese | Note |
|----------|-----------|---------------|------|
| **Amazon SES** | $0 | **$0.60/mese** | ✅ Winner |
| Resend | $90/mo | $90/mo | Richiede Scale plan |
| SendGrid | $89.95/mo | $89.95/mo | Plan Scale |
| Mailgun | $35/mo | $35/mo | Foundation plan |
| Web3Forms | $0 | $0 | Ma email brutte |

**Amazon SES è 150x più economico!**

---

## ✅ Checklist Setup

```
☐ Crea account AWS
☐ Attiva Amazon SES (regione EU Frankfurt)
☐ Verifica primo dominio (solarheim.ch)
☐ Aggiungi DNS records su Cloudflare (DKIM, SPF)
☐ Attendi verifica dominio (10 min)
☐ Richiedi production access (24-48h attesa)
☐ Ottieni SMTP credentials
☐ Aggiungi env vars su Vercel
☐ Installa nodemailer
☐ Crea API route /api/send-lead-email
☐ Aggiorna FormContainer per chiamare API
☐ Test su localhost
☐ Deploy su Vercel
☐ Test su production
☐ Aggiungi altri 30 domini
☐ Monitor bounce rate su SES Console
```

---

## 🔍 Monitoraggio & Manutenzione

### Dashboard SES

**Metriche da monitorare:**
- **Bounce rate**: deve essere < 5%
- **Complaint rate**: deve essere < 0.1%
- **Sends**: quante email inviate
- **Reputation**: mantieni "High"

**Se bounce rate troppo alto:**
- Amazon sospende account
- Devi pulire lista email
- Rimuovi email invalide

### Setup SNS per Bounce/Complaint Handling

1. **SES Console** → **Configuration sets** → Create
2. **Add destination**: SNS topic
3. **Topic**: `ses-bounces`
4. **Lambda function** per processare bounces
5. Rimuovi email che bounciano dal database

---

## 🎯 Vantaggi Finali

✅ **Email HTML bellissime** (grassetto, colori, layout)
✅ **Mittente reale**: info@solarheim.ch
✅ **Reply-To al cliente**: risposte dirette
✅ **31 domini**: tutti funzionano
✅ **Costo ridicolo**: $0.60/mese per 6k email
✅ **Scalabile**: fino a milioni di email
✅ **Tracking**: bounce, delivery, complaints
✅ **Affidabilità**: Amazon infrastructure

---

## 🚀 Risultato

Avrai un sistema di email professionale, scalabile e praticamente gratis che funziona per tutti i 31 domini con email HTML bellissime! 🎉
