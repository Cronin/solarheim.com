# Google Ads Conversion Tracking - Solarheim.ch

## Overview

Il sito ha un sistema di tracking completo con **conversioni multiple** per ottimizzare le Google Ads in modo progressivo.

## Strategia di Ottimizzazione

### Fase 1: Raccolta Dati Iniziale (Prime 2-4 settimane)
Usa conversioni "facili" per raccogliere dati:
- ✅ **SCROLL_50** - User scrolls 50% of page (0.30 CHF)
- ✅ **FORM_START** - User starts the form (0.10 CHF)

### Fase 2: Ottimizzazione su Engagement (Settimane 4-8)
Passa a conversioni più qualificate:
- ✅ **CALCULATOR_USED** - User uses solar calculator (1.50 CHF)
- ✅ **FORM_STEP_1** - Completes property info (0.50 CHF)
- ✅ **FORM_STEP_2** - Completes energy info (2.00 CHF)

### Fase 3: Ottimizzazione su Lead Qualificati (Dopo 8 settimane)
Quando hai abbastanza dati, passa a:
- ✅ **FORM_STEP_3** - Completes location info (5.00 CHF)
- ✅ **FORM_STEP_4** - Completes contact info (10.00 CHF)
- ✅ **LEAD_COMPLETE** - Full lead submission (50.00 CHF)

## Conversioni Disponibili

### 🎯 Scroll Tracking (Engagement)
```
Event: conversion
conversionLabel: SCROLL_25 | SCROLL_50 | SCROLL_75 | SCROLL_100
value: 0.10 - 1.00 CHF
```

**Quando usare:**
- Inizio campagna per raccogliere dati velocemente
- Identificare keyword che portano traffico engaged
- SCROLL_50 è ideale per iniziare

---

### 📝 Form Start
```
Event: conversion
conversionLabel: FORM_START
value: 0.10 CHF
```

**Quando usare:**
- Fase iniziale per capire quali keyword portano utenti interessati
- Ottimizzare per volume

---

### 📊 Calculator Usage
```
Event: conversion
conversionLabel: CALCULATOR_USED
value: 1.50 CHF
```

**Quando usare:**
- Utenti che usano il calculator sono più qualificati
- Buon indicatore di intent commerciale

---

### 📋 Form Steps (Progressive Qualification)

#### Step 1: Property Type
```
Event: conversion
conversionLabel: FORM_STEP_1
value: 0.50 CHF
```

#### Step 2: Energy Consumption
```
Event: conversion
conversionLabel: FORM_STEP_2
value: 2.00 CHF
```

#### Step 3: Location
```
Event: conversion
conversionLabel: FORM_STEP_3
value: 5.00 CHF
```

#### Step 4: Contact Info
```
Event: conversion
conversionLabel: FORM_STEP_4
value: 10.00 CHF
```

**Quando usare:**
- Dopo aver raccolto dati con conversioni più facili
- Per ottimizzare verso lead sempre più qualificati
- Aumenta il valore progressivamente man mano che hai più dati

---

### 🏆 Lead Complete (Main Conversion)
```
Event: conversion
conversionLabel: LEAD_COMPLETE
value: 50.00 CHF
```

**Quando usare:**
- Quando hai abbastanza volume di lead (30+ al mese)
- Obiettivo finale: ottimizzare verso questa conversione
- Tracking del vero ROI

---

## Setup in Google Ads

### 1. Google Tag Manager
Tutti gli eventi sono pushati al dataLayer in questo formato:
```javascript
window.dataLayer.push({
  event: 'conversion',
  conversionType: 'form_step_1',
  conversionLabel: 'FORM_STEP_1',
  value: 0.50,
  currency: 'CHF'
});
```

### 2. Creare Conversion Actions

Per ogni conversion che vuoi trackare:

1. **Google Ads** → Tools → Conversions → "+" New Conversion Action
2. Scegli **Website**
3. Setup:
   - **Category**: Submit lead form (o appropriato)
   - **Value**: Usa i valori sopra o personalizza
   - **Count**: One (conta solo una volta per sessione)
   - **Attribution**: Data-driven (se disponibile)
4. **Tag Setup**: Use Google Tag Manager
5. In GTM, crea un Trigger:
   - Type: Custom Event
   - Event name: `conversion`
   - Condition: `conversionLabel equals FORM_STEP_1` (esempio)
6. Crea un Tag:
   - Type: Google Ads Conversion Tracking
   - Conversion ID: Il tuo AW-XXXXXXX
   - Conversion Label: Dal Google Ads
   - Conversion Value: `{{dlv - value}}` (variabile dataLayer)

### 3. Test Setup

Usa Google Tag Assistant per verificare:
```bash
# Visita il sito in Chrome
# Apri Developer Tools → Network
# Filtra per "google-analytics" o "gtag"
# Scrolla la pagina / compila il form
# Verifica che gli eventi vengano inviati
```

## Raccomandazioni

### Budget Allocation

**Budget Basso (<1000 CHF/mese)**
- Focus: SCROLL_50 + FORM_START
- Obiettivo: Raccogliere dati

**Budget Medio (1000-3000 CHF/mese)**
- Focus: FORM_STEP_2 + CALCULATOR_USED
- Obiettivo: Lead qualificati

**Budget Alto (>3000 CHF/mese)**
- Focus: FORM_STEP_4 + LEAD_COMPLETE
- Obiettivo: Massimizzare ROI

### Bid Strategy Progression

1. **Maximize Clicks** (Prime 2 settimane)
   - Raccogliere dati iniziali

2. **Maximize Conversions** (Settimane 3-8)
   - Con conversione su SCROLL_50 o FORM_STEP_1

3. **Target CPA** (Dopo 50+ conversioni)
   - Passa a conversioni più qualificate
   - Imposta Target CPA realistico

4. **Maximize Conversion Value** (Finale)
   - Quando hai volume sufficiente
   - Ottimizza per LEAD_COMPLETE

### Testing & Optimization

**Week 1-2:**
- Run ads con bidding su Maximize Clicks
- Conversione: SCROLL_50
- Raccogli baseline data

**Week 3-4:**
- Switch a Maximize Conversions
- Conversione: FORM_START o FORM_STEP_1
- Identifica keyword performanti

**Week 5-8:**
- Conversione: FORM_STEP_2 o CALCULATOR_USED
- Elimina keyword con basso quality score
- Aumenta bid su keyword qualificate

**Week 9+:**
- Conversione: FORM_STEP_3/4 o LEAD_COMPLETE
- Target CPA o Target ROAS
- Scale vincenti

## Monitoring

Verifica settimanalmente in Google Ads:
- **Conversion Rate** per ogni step
- **Cost per Conversion**
- **Conversion Value / Cost** (ROI)

In Google Analytics 4:
- Reports → Engagement → Conversions
- Custom Funnel: Form Start → Step 1 → Step 2 → Step 3 → Step 4 → Complete

## Environment Variables

Assicurati di avere configurato:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Files Modified

- ✅ `/lib/analytics.ts` - Tutte le funzioni di tracking con conversioni
- ✅ `/hooks/useScrollTracking.ts` - Hook per scroll tracking
- ✅ `/components/ScrollTracking.tsx` - Component per layout
- ✅ `/app/layout.tsx` - ScrollTracking attivato globalmente
- ✅ `/components/MultiStepForm/FormContainer.tsx` - Form step tracking
- ✅ `/components/SolarCalculator.tsx` - Calculator tracking (già presente)

## Support

Per domande o problemi:
1. Verifica Google Tag Assistant
2. Controlla GTM Preview Mode
3. Testa in Google Ads con "Test Conversion"
