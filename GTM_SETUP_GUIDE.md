# Google Tag Manager - Setup Completo Solarheim.ch

## 📋 Overview

Questa guida ti porta passo-passo nel setup completo di GTM per tracciare tutte le conversioni.

---

## 🔧 Step 1: Variabili DataLayer (Setup Iniziale)

Prima di tutto, dobbiamo creare le variabili per leggere i dati dal dataLayer.

### In GTM: Variables → User-Defined Variables → New

Crea queste **5 variabili**:

#### 1. dlv - conversionLabel
- **Variable Type:** Data Layer Variable
- **Data Layer Variable Name:** `conversionLabel`
- **Name:** `dlv - conversionLabel`

#### 2. dlv - conversionType
- **Variable Type:** Data Layer Variable
- **Data Layer Variable Name:** `conversionType`
- **Name:** `dlv - conversionType`

#### 3. dlv - value
- **Variable Type:** Data Layer Variable
- **Data Layer Variable Name:** `value`
- **Name:** `dlv - value`

#### 4. dlv - currency
- **Variable Type:** Data Layer Variable
- **Data Layer Variable Name:** `currency`
- **Name:** `dlv - currency`

#### 5. dlv - scrollDepth
- **Variable Type:** Data Layer Variable
- **Data Layer Variable Name:** `scrollDepth`
- **Name:** `dlv - scrollDepth`

**✅ Salva tutte le variabili**

---

## 🎯 Step 2: Triggers (Uno per ogni conversione)

Vai in **Triggers → New** e crea questi trigger:

### Trigger 1: Conversion - Scroll 50%
```
Name: Conversion - Scroll 50%
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | SCROLL_50
```

### Trigger 2: Conversion - Form Start
```
Name: Conversion - Form Start
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | FORM_START
```

### Trigger 3: Conversion - Calculator Used
```
Name: Conversion - Calculator Used
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | CALCULATOR_USED
```

### Trigger 4: Conversion - Form Step 1
```
Name: Conversion - Form Step 1
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | FORM_STEP_1
```

### Trigger 5: Conversion - Form Step 2
```
Name: Conversion - Form Step 2
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | FORM_STEP_2
```

### Trigger 6: Conversion - Form Step 3
```
Name: Conversion - Form Step 3
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | FORM_STEP_3
```

### Trigger 7: Conversion - Form Step 4
```
Name: Conversion - Form Step 4
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | FORM_STEP_4
```

### Trigger 8: Conversion - Lead Complete
```
Name: Conversion - Lead Complete
Trigger Type: Custom Event
Event name: conversion
This trigger fires on: Some Custom Events
Condition: dlv - conversionLabel | equals | LEAD_COMPLETE
```

**✅ Salva tutti i trigger**

---

## 🏷️ Step 3: Tags GA4 (Per Google Analytics 4)

**IMPORTANTE:** Prima crea il Tag di configurazione GA4 base

### Tag 0: Google Analytics: GA4 Configuration
```
Name: GA4 - Configuration
Tag Type: Google Analytics: GA4 Configuration
Measurement ID: G-XXXXXXXXXX (il tuo GA4 ID)
Triggering: All Pages
```

Poi crea questi event tags:

### Tag 1: GA4 Event - Scroll 50%
```
Name: GA4 Event - Scroll 50%
Tag Type: Google Analytics: GA4 Event
Configuration Tag: GA4 - Configuration
Event Name: scroll_50
Event Parameters:
  - engagement_type: scroll
  - scroll_depth: {{dlv - scrollDepth}}
  - value: {{dlv - value}}
Triggering: Conversion - Scroll 50%
```

### Tag 2: GA4 Event - Form Start
```
Name: GA4 Event - Form Start
Tag Type: Google Analytics: GA4 Event
Configuration Tag: GA4 - Configuration
Event Name: form_start
Event Parameters:
  - form_name: solar_lead_form
  - value: {{dlv - value}}
Triggering: Conversion - Form Start
```

### Tag 3: GA4 Event - Calculator Used
```
Name: GA4 Event - Calculator Used
Tag Type: Google Analytics: GA4 Event
Configuration Tag: GA4 - Configuration
Event Name: calculator_used
Event Parameters:
  - tool_name: solar_calculator
  - value: {{dlv - value}}
Triggering: Conversion - Calculator Used
```

### Tag 4-7: GA4 Event - Form Steps
```
Name: GA4 Event - Form Step 1
Tag Type: Google Analytics: GA4 Event
Configuration Tag: GA4 - Configuration
Event Name: form_step_1_complete
Event Parameters:
  - form_step: 1
  - value: {{dlv - value}}
Triggering: Conversion - Form Step 1
```
*Ripeti per Step 2, 3, 4 cambiando i numeri*

### Tag 8: GA4 Event - Lead Complete
```
Name: GA4 Event - Lead Complete
Tag Type: Google Analytics: GA4 Event
Configuration Tag: GA4 - Configuration
Event Name: generate_lead
Event Parameters:
  - form_name: solar_lead_form
  - value: {{dlv - value}}
  - currency: CHF
Triggering: Conversion - Lead Complete
```

**✅ Salva tutti i tag GA4**

---

## 🎯 Step 4: Tags Google Ads (Farai dopo quando avrai Conversion ID)

**NOTA:** Questi tag li creerai DOPO aver impostato le conversioni in Google Ads, perché avrai bisogno del Conversion ID e Label.

### Template Tag Google Ads:
```
Name: Google Ads - Scroll 50%
Tag Type: Google Ads Conversion Tracking
Conversion ID: AW-XXXXXXXXX (dal tuo Google Ads account)
Conversion Label: abc123def456 (specifico per ogni conversione)
Conversion Value: {{dlv - value}}
Transaction ID: (lascia vuoto)
Currency Code: CHF
Triggering: Conversion - Scroll 50%
```

**Ripeterai questo per ogni conversione quando avrai i dati da Google Ads.**

---

## ✅ Step 5: Preview & Debug

Prima di pubblicare:

1. Click su **Preview** (in alto a destra)
2. Inserisci URL: `https://solarheim.ch`
3. Nel debugger:
   - Scrolla la pagina fino al 50%
   - Verifica che appare l'evento `conversion` con `conversionLabel: SCROLL_50`
   - Verifica che il Tag GA4 si è attivato
4. Testa anche:
   - Iniziare il form
   - Completare Step 1, 2, 3, 4
   - Usare il calculator (su /solarrechner)

**Se tutto funziona nel debugger, procedi!**

---

## 🚀 Step 6: Publish!

1. Click **Submit** (in alto a destra)
2. Dai un nome alla versione: `Setup Conversion Tracking - Solarheim`
3. Descrizione: `Added all conversion tracking events for Google Ads optimization`
4. Click **Publish**

---

## 📊 Step 7: Verifica su GA4

Dopo 5-10 minuti:

1. Vai su **Google Analytics 4** → Reports → Realtime
2. Visita il tuo sito in incognito
3. Scrolla, usa il form
4. Verifica che gli eventi appaiono in Realtime

---

## 🎯 Prossimi Passi (Google Ads)

Dopo aver pubblicato GTM:

1. Vai su **Google Ads** → Tools → Conversions
2. Crea le Conversion Actions
3. Copia Conversion ID + Label
4. Torna in GTM e crea i Tag Google Ads
5. Publish di nuovo

---

## 📝 Checklist Finale

- [ ] 5 Variabili DataLayer create
- [ ] 8 Triggers creati (uno per ogni conversione)
- [ ] 1 GA4 Configuration Tag creato
- [ ] 8 GA4 Event Tags creati
- [ ] Preview testato e funzionante
- [ ] Published su GTM
- [ ] Eventi visibili in GA4 Realtime

---

## 🆘 Troubleshooting

**Gli eventi non appaiono nel debugger?**
- Controlla che il GTM ID sia corretto in `.env.local`
- Verifica che il sito sia deployato in produzione
- Refresh hard del browser (Cmd+Shift+R)

**Eventi appaiono in debugger ma non in GA4?**
- Aspetta 5-10 minuti (ritardo normale)
- Verifica GA4 Measurement ID nel Configuration Tag
- Controlla che il Configuration Tag si attivi su "All Pages"

**Come trovo il mio GTM ID?**
- Vai su https://tagmanager.google.com
- Seleziona il container
- L'ID è in alto (es. GTM-XXXXXXX)

---

## 💡 Pro Tips

1. **Naming Convention**: Usa prefissi chiari (GA4 Event -, Conversion -, etc.)
2. **Folders**: Organizza Tags/Triggers in cartelle per tipo
3. **Notes**: Aggiungi note ai Tag per ricordare quando li hai creati
4. **Versions**: Dai nomi descrittivi alle versioni pubblicate
5. **Preview Mode**: Testa SEMPRE in preview prima di pubblicare

---

**Una volta fatto tutto questo, hai finito il setup GTM! 🎉**

Poi passerai a Google Ads per creare le Conversion Actions.
