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

    // Format form data for email
    const emailBody = {
      access_key: accessKey,
      subject: `Neue Solaranlage Anfrage von ${formData.firstName} ${formData.lastName}`,
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formatFormDataAsHTML(formData),
      // Optional: Custom redirect after submit (handled client-side)
      redirect: 'https://solarheim.ch/danke',
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
      console.log('Form email sent successfully');
      return true;
    } else {
      console.error('Web3Forms error:', result);
      return false;
    }
  } catch (error) {
    console.error('Error sending form email:', error);
    return false;
  }
}

/**
 * Format form data as HTML for email
 */
function formatFormDataAsHTML(data: FormData): string {
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
          Diese Anfrage wurde über das Kontaktformular auf <strong>solarheim.ch</strong> gesendet
        </p>
        <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
          Zeitstempel: ${new Date().toLocaleString('de-CH')}
        </p>
      </div>
    </div>
  `;
}

/**
 * Format form data as plain text for email (fallback)
 */
export function formatFormDataAsText(data: FormData): string {
  return `
Neue Solaranlage Anfrage

KONTAKTDATEN:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ''}

IMMOBILIE:
Typ: ${data.propertyType}
Eigentum: ${data.ownershipStatus}

ENERGIEBEDARF:
Jährlicher Verbrauch: ${data.annualConsumption} kWh
Batteriespeicher: ${data.batteryInterest}

STANDORT:
PLZ: ${data.postalCode}
Stadt: ${data.city}
Dachtyp: ${data.roofType}

${data.comments ? `ZUSÄTZLICHE INFORMATIONEN:\n${data.comments}` : ''}

---
Anfrage von: solarheim.ch
Zeitstempel: ${new Date().toLocaleString('de-CH')}
  `.trim();
}
