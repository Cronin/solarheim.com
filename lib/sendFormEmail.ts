/**
 * Send form data via Web3Forms API
 * Sends email notification to localclark@gmail.com
 */

import { FormData } from './formSchema';

export async function sendFormEmail(formData: FormData): Promise<boolean> {
  try {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your-access-key-here') {
      console.error('Web3Forms access key not configured');
      // In development, just log and return true to allow testing
      if (process.env.NODE_ENV === 'development') {
        console.log('Form data (dev mode):', formData);
        return true;
      }
      return false;
    }

    // Get current domain (works for all 31 domains automatically!)
    const currentDomain = typeof window !== 'undefined'
      ? window.location.hostname
      : 'solarheim.ch';

    // Formatta i dati in modo leggibile per Web3Forms
    const propertyLabels: Record<string, string> = {
      einfamilienhaus: 'Einfamilienhaus',
      mehrfamilienhaus: 'Mehrfamilienhaus',
      gewerbegebaeude: 'Gewerbegebäude',
    };

    const consumptionLabels: Record<string, string> = {
      'unter-2000': 'Unter 2.000 kWh/Jahr',
      '2000-4000': '2.000-4.000 kWh/Jahr',
      '4000-6000': '4.000-6.000 kWh/Jahr',
      'ueber-6000': 'Über 6.000 kWh/Jahr',
    };

    const batteryLabels: Record<string, string> = {
      ja: 'Ja, interessiert',
      nein: 'Nein',
      unsicher: 'Noch unsicher',
    };

    const roofLabels: Record<string, string> = {
      flachdach: 'Flachdach',
      schraegdach: 'Schrägdach',
      gemischt: 'Gemischt',
      'weiss-nicht': 'Weiss nicht',
    };

    // Format form data for email
    // Usiamo custom fields con nomi leggibili per una migliore visualizzazione
    const emailBody = {
      access_key: accessKey,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone || 'Nicht angegeben',
      subject: `🌞 Neue Anfrage: ${formData.firstName} ${formData.lastName} | ${formData.city}`,
      message: `Neue Solaranlage-Anfrage von ${formData.firstName} ${formData.lastName} aus ${formData.city}.\n\nBitte prüfen Sie die Details unten und kontaktieren Sie den Kunden innerhalb von 2-5 Werktagen.`,

      // Reply-To: quando rispondi, va a info@domain invece dell'utente
      replyto: `info@${currentDomain}`,

      // Auto-response al cliente (email di conferma automatica)
      autoresponse: formatAutoResponseMessage(formData, currentDomain),

      // Custom fields con label chiare (Web3Forms li mostra in formato pulito!)
      '🏠 Immobilientyp': propertyLabels[formData.propertyType] || formData.propertyType,
      '👤 Eigentumsstatus': formData.ownershipStatus === 'eigentuemer' ? 'Eigentümer' : 'Mieter',
      '⚡ Stromverbrauch': consumptionLabels[formData.annualConsumption] || formData.annualConsumption,
      '🔋 Batteriespeicher': batteryLabels[formData.batteryInterest] || formData.batteryInterest,
      '📍 PLZ': formData.postalCode,
      '🏙️ Stadt': formData.city,
      '🏘️ Dachtyp': roofLabels[formData.roofType] || formData.roofType,
      '🌐 Quelle': currentDomain,
      '📅 Eingereicht am': new Date().toLocaleString('de-CH', {
        dateStyle: 'full',
        timeStyle: 'short'
      }),

      // Technical fields (hidden but searchable in dashboard)
      _property_type: formData.propertyType,
      _city: formData.city,
      _postal_code: formData.postalCode,
      _domain: currentDomain,

      // Honeypot field for spam protection (empty = human)
      botcheck: '',
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Form email sent successfully via Web3Forms');
      console.log('📧 Email sent to: localclark@gmail.com');
      console.log('🌐 From domain:', currentDomain);
      return true;
    } else {
      console.error('❌ Web3Forms error:', result);
      console.error('📋 Response status:', response.status);
      console.error('🔍 Error details:', JSON.stringify(result, null, 2));
      return false;
    }
  } catch (error) {
    console.error('Error sending form email:', error);
    return false;
  }
}

/**
 * Format auto-response message for customer
 * Questo messaggio viene inviato automaticamente al cliente
 */
function formatAutoResponseMessage(data: FormData, domain: string = 'solarheim.ch'): string {
  const domainName = domain.replace('www.', '').split('.')[0];
  const capitalizedDomain = domainName.charAt(0).toUpperCase() + domainName.slice(1);

  return `
Guten Tag ${data.firstName} ${data.lastName},

Vielen Dank für Ihre Anfrage über ${capitalizedDomain}!

Wir haben Ihre Solaranlage-Anfrage erfolgreich erhalten und werden uns in Kürze bei Ihnen melden.

═══════════════════════════════════════════════════
📋 IHRE ANGABEN (Zusammenfassung)
═══════════════════════════════════════════════════

Immobilientyp: ${data.propertyType === 'einfamilienhaus' ? 'Einfamilienhaus' : data.propertyType === 'mehrfamilienhaus' ? 'Mehrfamilienhaus' : 'Gewerbegebäude'}
Standort: ${data.postalCode} ${data.city}
Jährlicher Stromverbrauch: ${data.annualConsumption} kWh
Kontakt: ${data.email} | ${data.phone}

═══════════════════════════════════════════════════
⏱️ WIE GEHT ES WEITER?
═══════════════════════════════════════════════════

1️⃣ PRÜFUNG (heute)
   Wir prüfen Ihre Anfrage und qualifizieren die Angaben.

2️⃣ VERMITTLUNG (1-2 Werktage)
   Wir kontaktieren bis zu 3 geprüfte Solarteure in Ihrer Region.

3️⃣ OFFERTEN (2-5 Werktage)
   Sie erhalten kostenlose, unverbindliche Angebote per E-Mail.

4️⃣ VERGLEICH & ENTSCHEIDUNG
   Sie wählen das beste Angebot aus - ohne Stress, ohne Verpflichtung.

═══════════════════════════════════════════════════
💡 WICHTIGE HINWEISE
═══════════════════════════════════════════════════

✓ Alle Angebote sind kostenlos und unverbindlich
✓ Ihre Daten werden nur an geprüfte Fachbetriebe weitergegeben
✓ Sie entscheiden selbst, ob und mit wem Sie zusammenarbeiten
✓ Durchschnittliche Ersparnis durch Vergleich: bis zu 30%

═══════════════════════════════════════════════════

Haben Sie Fragen? Kontaktieren Sie uns gerne:

📧 E-Mail: info@${domain}
📞 Telefon: +41 77 442 00 59
🌐 Website: https://${domain}

Mit sonnigen Grüssen
Ihr ${capitalizedDomain} Team

──────────────────────────────────────────────────
Diese E-Mail wurde automatisch generiert.
Bitte antworten Sie nicht direkt auf diese E-Mail.
Für Rückfragen nutzen Sie bitte info@${domain}
  `.trim();
}

/**
 * Format form data as HTML for email
 */
function formatFormDataAsHTML(data: FormData, domain: string = 'solarheim.ch'): string {
  const propertyTypeLabels: Record<string, string> = {
    einfamilienhaus: 'Einfamilienhaus',
    mehrfamilienhaus: 'Mehrfamilienhaus',
    gewerbe: 'Gewerbegebäude',
  };

  const ownershipLabels: Record<string, string> = {
    eigentuemer: 'Eigentümer',
    mieter: 'Mieter',
  };

  const batteryLabels: Record<string, string> = {
    ja: 'Ja, interessiert',
    nein: 'Nein',
    unsure: 'Noch unsicher',
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
        Neue Solaranlage Anfrage 🌞
      </h2>

      <h3 style="color: #333; margin-top: 30px;">Kontaktdaten</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Name:</td>
          <td style="padding: 8px;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Email:</td>
          <td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        ${data.phone ? `
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Telefon:</td>
          <td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td>
        </tr>
        ` : ''}
      </table>

      <h3 style="color: #333; margin-top: 30px;">Immobilie</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Immobilientyp:</td>
          <td style="padding: 8px;">${propertyTypeLabels[data.propertyType] || data.propertyType}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Eigentumsstatus:</td>
          <td style="padding: 8px;">${ownershipLabels[data.ownershipStatus] || data.ownershipStatus}</td>
        </tr>
      </table>

      <h3 style="color: #333; margin-top: 30px;">Energiebedarf</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Jährlicher Verbrauch:</td>
          <td style="padding: 8px;">${data.annualConsumption} kWh</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Interesse an Batteriespeicher:</td>
          <td style="padding: 8px;">${batteryLabels[data.batteryInterest] || data.batteryInterest}</td>
        </tr>
      </table>

      <h3 style="color: #333; margin-top: 30px;">Standort</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold; width: 40%;">Postleitzahl:</td>
          <td style="padding: 8px;">${data.postalCode}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Stadt:</td>
          <td style="padding: 8px;">${data.city}</td>
        </tr>
        <tr>
          <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Dachtyp:</td>
          <td style="padding: 8px;">${data.roofType}</td>
        </tr>
      </table>

      ${data.comments ? `
      <h3 style="color: #333; margin-top: 30px;">Zusätzliche Informationen</h3>
      <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #10b981; margin-top: 10px;">
        ${data.comments}
      </div>
      ` : ''}

      <div style="margin-top: 40px; padding: 20px; background: #f3f4f6; border-radius: 8px; text-align: center;">
        <p style="margin: 0; color: #666; font-size: 14px;">
          Diese Anfrage wurde über das Kontaktformular auf <strong>${domain}</strong> gesendet
        </p>
        <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
          Zeitstempel: ${new Date().toLocaleString('de-CH')}
        </p>
      </div>
    </div>
  `;
}

/**
 * Format form data as plain text for email (clean and professional)
 */
export function formatFormDataAsText(data: FormData, domain: string = 'solarheim.ch'): string {
  const propertyTypeLabels: Record<string, string> = {
    einfamilienhaus: 'Einfamilienhaus',
    mehrfamilienhaus: 'Mehrfamilienhaus',
    gewerbegebaeude: 'Gewerbegebäude',
  };

  const ownershipLabels: Record<string, string> = {
    eigentuemer: 'Eigentümer',
    mieter: 'Mieter',
  };

  const consumptionLabels: Record<string, string> = {
    'unter-2000': 'Unter 2.000 kWh',
    '2000-4000': '2.000 - 4.000 kWh',
    '4000-6000': '4.000 - 6.000 kWh',
    'ueber-6000': 'Über 6.000 kWh',
  };

  const batteryLabels: Record<string, string> = {
    ja: 'Ja, interessiert',
    nein: 'Nein',
    unsicher: 'Noch unsicher',
  };

  const roofLabels: Record<string, string> = {
    flachdach: 'Flachdach',
    schraegdach: 'Schrägdach',
    gemischt: 'Gemischt',
    'weiss-nicht': 'Weiss nicht',
  };

  return `
═══════════════════════════════════════════════════
   NEUE SOLARANLAGE ANFRAGE
═══════════════════════════════════════════════════

📋 KONTAKTDATEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${data.firstName} ${data.lastName}
Email:    ${data.email}
Telefon:  ${data.phone || 'Nicht angegeben'}

🏠 IMMOBILIE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Immobilientyp:     ${propertyTypeLabels[data.propertyType] || data.propertyType}
Eigentumsstatus:   ${ownershipLabels[data.ownershipStatus] || data.ownershipStatus}

⚡ ENERGIEBEDARF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Jährlicher Verbrauch:        ${consumptionLabels[data.annualConsumption] || data.annualConsumption}
Batteriespeicher-Interesse:  ${batteryLabels[data.batteryInterest] || data.batteryInterest}

📍 STANDORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLZ:       ${data.postalCode}
Stadt:     ${data.city}
Dachtyp:   ${roofLabels[data.roofType] || data.roofType}

${data.comments ? `💬 ZUSÄTZLICHE INFORMATIONEN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.comments}
` : ''}
═══════════════════════════════════════════════════
🌐 Quelle: ${domain}
📅 Datum:  ${new Date().toLocaleString('de-CH', {
  dateStyle: 'full',
  timeStyle: 'short'
})}
═══════════════════════════════════════════════════

💡 NÄCHSTE SCHRITTE:
1. Anfrage prüfen und qualifizieren
2. Passende Solarteure kontaktieren (max. 3)
3. Offerten einholen und vergleichen
4. Kunde innerhalb 2-5 Werktagen kontaktieren

✉️  Antworten Sie auf diese Email mit info@${domain}
  `.trim();
}
