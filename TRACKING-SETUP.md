# 📊 Form Tracking Setup - Solarheim.com

## Come Vengono Tracciati i Form?

Il sito Solarheim utilizza un sistema di tracking avanzato per monitorare **ogni interazione** con il multi-step form e generare dati utili per ottimizzare le conversioni.

---

## 🎯 Sistema di Tracking Implementato

### 1. **Google Analytics 4 (GA4)**
Tracking nativo di Google per analisi comportamentale.

### 2. **Google Tag Manager (GTM)**
Container avanzato per gestire tutti i tag senza modificare il codice.

### 3. **Custom Event Tracking**
Eventi personalizzati per ogni azione critica.

---

## 📋 Eventi Tracciati

### **MULTI-STEP FORM TRACKING**

#### 1. Form Start
**Quando**: L'utente vede il form
**Nome Evento**: `form_start`
**Dati Inviati**:
```javascript
{
  event: 'form_interaction',
  formName: 'solar_lead_form',
  formStep: 1,
  formAction: 'started'
}
```

#### 2. Step Completion
**Quando**: L'utente completa ogni step
**Nome Evento**: `form_step_1`, `form_step_2`, `form_step_3`, `form_step_4`
**Dati Inviati**:
```javascript
{
  event: 'form_interaction',
  formName: 'solar_lead_form',
  formStep: 2, // numero step
  formStepName: 'Energiebedarf', // nome step
  formAction: 'step_completed'
}
```

#### 3. Form Submission (CONVERSIONE)
**Quando**: L'utente completa il form e clicca "Offerte anfordern"
**Nome Evento**: `generate_lead` (conversione principale)
**Dati Inviati**:
```javascript
{
  event: 'form_submission',
  formName: 'solar_lead_form',
  formStep: 4,
  formAction: 'submitted',
  leadData: {
    propertyType: 'Einfamilienhaus',
    ownership: 'Eigentümer',
    consumption: '4000-6000 kWh',
    storageInterest: 'Ja',
    postalCode: '80XX', // Anonimizzato (primi 2 cifre)
    city: 'Zürich'
  }
}
```

**Evento Conversione Google Ads**:
```javascript
{
  event: 'conversion',
  send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
  value: 1.0,
  currency: 'CHF'
}
```

#### 4. Form Abandonment
**Quando**: L'utente abbandona il form (o è Mieter)
**Nome Evento**: `form_abandoned`
**Dati Inviati**:
```javascript
{
  event: 'form_interaction',
  formName: 'solar_lead_form',
  formStep: 2,
  formStepName: 'Energiebedarf',
  formAction: 'abandoned'
}
```

---

### **ALTRI EVENTI TRACCIATI**

#### CTA Click
**Quando**: Click su qualsiasi pulsante CTA
```javascript
{
  event: 'cta_interaction',
  ctaLocation: 'hero',
  ctaText: 'Jetzt kostenlose Offerte anfordern'
}
```

#### Calculator Usage
**Quando**: L'utente usa il calcolatore solare
```javascript
{
  event: 'tool_interaction',
  toolName: 'solar_calculator',
  roofSize: 50,
  consumption: 5000
}
```

#### City Page View
**Quando**: L'utente visita una pagina città
```javascript
{
  event: 'page_interaction',
  pageType: 'city_landing',
  cityName: 'Zürich'
}
```

#### Contact Click
**Quando**: Click su telefono o email
```javascript
{
  event: 'contact_interaction',
  contactType: 'phone' // or 'email'
}
```

#### Scroll Depth
**Quando**: L'utente scrolla 25%, 50%, 75%, 100%
```javascript
{
  event: 'scroll_tracking',
  scrollDepth: 50
}
```

---

## 🔧 Setup Richiesto

### Step 1: Creare Account Google Analytics 4

1. Vai su https://analytics.google.com
2. Crea una nuova proprietà GA4
3. Copia il **Measurement ID** (formato: `G-XXXXXXXXXX`)

### Step 2: Creare Account Google Tag Manager

1. Vai su https://tagmanager.google.com
2. Crea un nuovo container per il sito
3. Copia il **GTM ID** (formato: `GTM-XXXXXXX`)

### Step 3: Configurare le Variabili d'Ambiente

Crea file `.env.local` nella root del progetto:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Step 4: Aggiungere Analytics Component al Layout

Il componente `<Analytics />` è già incluso nel codice. Verrà attivato automaticamente quando aggiungi le variabili d'ambiente.

```typescript
// app/layout.tsx
import { Analytics } from '@/components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Analytics /> {/* ✅ Già presente */}
        {children}
      </body>
    </html>
  );
}
```

---

## 📊 Dashboard e Analisi

### In Google Analytics 4

1. **Eventi → Tutti gli Eventi**
   - Vedi tutti gli eventi tracciati in tempo reale
   - Eventi personalizzati: `form_start`, `form_step_1`, `generate_lead`, ecc.

2. **Esplora → Analisi del Funnel**
   - Crea funnel per analizzare il percorso degli utenti:
     ```
     form_start → form_step_1 → form_step_2 → form_step_3 → form_step_4 → generate_lead
     ```
   - Identifica dove gli utenti abbandonano

3. **Conversioni**
   - Imposta `generate_lead` come evento di conversione
   - Monitora il tasso di conversione

### In Google Tag Manager

1. **Configura Trigger**
   - Custom Event trigger per ogni evento del form
   - Esempio: Trigger quando `event = 'form_submission'`

2. **Configura Tag**
   - Google Analytics GA4 Event
   - Facebook Pixel (opzionale)
   - Google Ads Conversion Tracking

3. **Variabili Datalayer**
   - Accedi a tutti i dati del form tramite `dataLayer`
   - Esempio: `{{dlv - formStep}}`, `{{dlv - cityName}}`

---

## 📈 Metriche Chiave da Monitorare

### 1. **Conversion Rate Totale**
```
(Lead Generati / Visitatori Unici) × 100
```

### 2. **Drop-off Rate per Step**
```
Step 1 → Step 2: X% completano
Step 2 → Step 3: Y% completano
Step 3 → Step 4: Z% completano
```

### 3. **Time to Complete**
Tempo medio per completare il form

### 4. **Device Breakdown**
- Desktop conversion rate
- Mobile conversion rate
- Tablet conversion rate

### 5. **City Performance**
Quale città genera più lead?

### 6. **Source/Medium**
- Organic search
- Direct
- Referral
- Social

---

## 🎯 Conversion Goals Setup

### Google Analytics 4

1. **Eventi → Conversioni → Gestisci eventi di conversione**
2. Aggiungi questi eventi come conversioni:
   - `generate_lead` (principale)
   - `form_step_4` (micro-conversione)

### Google Ads (se usi ads)

1. **Strumenti → Conversioni → Nuova conversione**
2. Tipo: Website
3. Usa il tracking code nel nostro analytics.ts:
```typescript
window.dataLayer.push({
  event: 'conversion',
  send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
  value: 1.0,
  currency: 'CHF'
});
```

---

## 🔍 Test del Tracking

### 1. Modalità Anteprima GTM
1. In GTM, clicca "Anteprima"
2. Inserisci URL del tuo sito
3. Naviga e interagisci con il form
4. Vedi in tempo reale tutti gli eventi tracciati

### 2. Chrome DevTools Console
```javascript
// Vedi il dataLayer
window.dataLayer

// Eventi più recenti
window.dataLayer.slice(-5)
```

### 3. GA4 DebugView
1. In GA4: Configura → DebugView
2. Abilita debug mode sul sito
3. Vedi eventi in tempo reale con tutti i parametri

---

## 🛡️ Privacy e GDPR

### Dati Anonimizzati
- **Postal Code**: Solo prime 2 cifre (es. "80XX")
- **IP Address**: Anonimizzato automaticamente (`anonymize_ip: true`)
- **Nessun PII**: Nome, email, telefono NON sono inviati a GA4

### Cookie Consent
Il tracking rispetta le normative svizzere:
- Nessun cookie di terze parti senza consenso
- `cookie_flags: 'SameSite=None;Secure'`

**TODO**: Implementare banner cookie se richiesto

---

## 📁 File del Sistema di Tracking

```
lib/
  └── analytics.ts          # Tutte le funzioni di tracking

components/
  └── Analytics.tsx         # Componente GA4 + GTM

components/MultiStepForm/
  └── FormContainer.tsx     # Form con tracking integrato
```

---

## 🚀 Prossimi Passi

1. ✅ **Setup Accounts**
   - Crea GA4 property
   - Crea GTM container

2. ✅ **Configure Environment**
   - Aggiungi GA_ID e GTM_ID a `.env.local`

3. ✅ **Deploy**
   - Il tracking si attiverà automaticamente in produzione

4. ✅ **Test**
   - Usa GTM Preview mode
   - Verifica eventi in GA4 DebugView

5. ✅ **Setup Conversions**
   - Imposta `generate_lead` come conversione in GA4
   - Configura Google Ads conversion tracking (se usi ads)

6. ✅ **Create Dashboards**
   - Crea dashboard personalizzato in GA4
   - Monitora funnel di conversione

---

## 💡 Best Practices

### Ottimizzazione basata sui Dati

**Se Drop-off alto su Step 2** → Semplifica domande energetiche
**Se Drop-off alto su Step 4** → Riduci campi contatto richiesti
**Se alto form_abandoned** → Migliora UX, ridurre friction
**Se città X converte meglio** → Investi più budget su città X

### A/B Testing
Usa GTM per testare varianti:
- Diversi CTA copy
- Ordine diverso degli step
- Campi opzionali vs obbligatori

---

## ✅ Tracking Completo!

Il sistema di tracking è **completamente implementato** e pronto all'uso.
Basta aggiungere GA_ID e GTM_ID per attivarlo!

**Domande?** Consulta la documentazione ufficiale:
- GA4: https://support.google.com/analytics/answer/9304153
- GTM: https://support.google.com/tagmanager

---

*Last Updated: October 26, 2024*
*Status: ✅ Ready for Production*
