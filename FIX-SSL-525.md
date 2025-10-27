# Fix SSL Error 525 - solarheim.ch

## ❌ Problema

Error 525: SSL handshake failed tra Cloudflare e Vercel

```
Cloudflare is unable to establish an SSL connection to the origin server.
```

## ✅ Soluzione

Il problema è che l'SSL mode su Cloudflare è impostato su "Flexible" invece che "Full".

### Step-by-Step Fix:

1. **Vai su Cloudflare Dashboard**
   - https://dash.cloudflare.com
   - Seleziona **solarheim.ch**

2. **Apri SSL/TLS Settings**
   - Nel menu laterale: **SSL/TLS**
   - Tab: **Overview**

3. **Cambia SSL Mode**
   - Attualmente: `Flexible` ❌
   - Cambia in: `Full` ✅ o `Full (strict)` ✅

4. **Salva**
   - Le modifiche si applicano immediatamente
   - Attendi 1-2 minuti per propagazione

5. **Test**
   ```bash
   curl https://solarheim.ch
   ```

   Dovrebbe funzionare! ✅

## 📋 Perché Succede?

### Flexible Mode (SBAGLIATO per Vercel)
```
Browser --[HTTPS]--> Cloudflare --[HTTP]--> Vercel
```
- Cloudflare parla HTTP con Vercel
- Vercel rifiuta connessioni HTTP
- **Errore 525** ❌

### Full Mode (CORRETTO per Vercel)
```
Browser --[HTTPS]--> Cloudflare --[HTTPS]--> Vercel
```
- Cloudflare parla HTTPS con Vercel
- Vercel accetta connessioni HTTPS
- **Tutto funziona** ✅

## 🎯 Impostazioni Corrette per Vercel

```
SSL/TLS encryption mode: Full
```

**Oppure** (ancora meglio):

```
SSL/TLS encryption mode: Full (strict)
```

La differenza:
- **Full**: Cloudflare accetta qualsiasi certificato da Vercel (anche self-signed)
- **Full (strict)**: Cloudflare verifica che il certificato sia valido e trusted

**Per Vercel usa "Full (strict)"** perché Vercel usa certificati validi Let's Encrypt.

## ⚡ Quick Fix (Vai su Cloudflare ora)

1. https://dash.cloudflare.com
2. solarheim.ch → SSL/TLS → Overview
3. Full (strict)
4. Done!

## 🔧 Alternative: Via API (se vuoi automatizzare)

```bash
# Zone ID per solarheim.ch (devi trovarlo)
ZONE_ID="YOUR_ZONE_ID"

curl -X PATCH "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/settings/ssl" \
  -H "Authorization: Bearer YOUR_CLOUDFLARE_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"value":"full"}'
```

Ma per ora, il metodo manuale è più veloce (1 minuto).

## ✅ Dopo il Fix

Una volta cambiato SSL mode a "Full":

```bash
# Test che funziona
curl -I https://solarheim.ch
# Dovresti vedere: HTTP/2 200

# Apri nel browser
open https://solarheim.ch
# Dovrebbe caricare il sito! ✅
```

## 📊 Altri Check Necessari

Dopo aver fixato SSL, verifica anche:

### 1. Custom Domain su Vercel
```bash
# Vai su Vercel project settings
# Domains → Add solarheim.ch
# Vercel ti dirà quali DNS records servono
```

### 2. DNS Records su Cloudflare
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel)
Proxy: ✅ Proxied (arancione)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
Proxy: ✅ Proxied (arancione)
```

**IMPORTANTE**: I record devono essere **Proxied** (nuvola arancione) per usare Cloudflare SSL!

## 🎬 Riassunto

1. ✅ **Fix SSL Mode**: Cloudflare Dashboard → Full (strict)
2. ✅ **Verifica solarheim.ch**: `curl https://solarheim.ch`
3. ✅ **Add custom domain**: Vercel project → solarheim.ch
4. ✅ **Verifica DNS**: A record + CNAME con Proxy ON

Fatto questo, tutto dovrebbe funzionare! 🚀
