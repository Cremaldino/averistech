# Guida Attivazione Cloudflare Worker per Lead inQuadra

Questa soluzione sostituisce FormSubmit con un'infrastruttura **100% enterprise, priva di pubblicità e scalabile**, ospitata sulla rete globale di Cloudflare.

---

## 📌 Come funziona
1. Il visitatore compila il form su `https://www.averistech.it/inquadra.html`.
2. Il JavaScript (`main.js`) invia una richiesta POST asincrona in JSON al tuo **Cloudflare Worker**.
3. Il Worker:
   * Valida i dati ed elimina i tentativi di spam (filtro honeypot).
   * Genera un'email HTML brandizzata con colori inQuadra/AverisTech e tabella riassuntiva di tutti i dettagli aziendali.
   * Consegna la mail a `info@averistech.it` impostando il **Reply-To** sull'email del cliente (basta cliccare "Rispondi" da Outlook per rispondergli direttamente).
4. Restituisce conferma immediata a video sul sito con notifica Toast verde.

---

## 🚀 Istruzioni di Attivazione Rapida (3 Minuti da Browser)

Non serve installare software sul PC: puoi fare tutto direttamente dal browser.

### Passo 1: Ottenere la chiave API gratuita di Resend
1. Vai su [resend.com](https://resend.com) e crea un account gratuito (basta l'email o login Google/GitHub).
2. Nel menu a sinistra clicca su **API Keys** -> **Create API Key**.
3. Copia la chiave generata (es. `re_123456789...`).
*(Il piano gratuito include 3.000 email al mese e 100 email al giorno, più che sufficienti per i lead commerciali).*

### Passo 2: Creare il Worker su Cloudflare
1. Accedi alla dashboard di Cloudflare su [dash.cloudflare.com](https://dash.cloudflare.com).
2. Nel menu a sinistra seleziona **Workers & Pages** -> clicca **Create application** (oppure **Create Worker**).
3. Dai un nome al Worker (ad esempio: `averistech-inquadra-lead`) e clicca **Deploy**.
4. Clicca su **Edit code**:
   * Cancella il codice di default.
   * Incolla tutto il contenuto del file `worker.js` presente in questa cartella.
   * Clicca su **Deploy** in alto a destra.

### Passo 3: Inserire la chiave API nei Secrets di Cloudflare
1. Torna nella pagina del Worker (scheda **Settings** / **Impostazioni**).
2. Vai su **Variables and Secrets** (o **Variabili d'ambiente**).
3. Clicca **Add secret**:
   * Nome: `RESEND_API_KEY`
   * Valore: la chiave copiata al Passo 1 (`re_...`)
   * Clicca **Save and deploy**.

### Passo 4: Collegare l'URL al sito
1. Cloudflare ti assegna un URL pubblico del tipo:  
   `https://averistech-inquadra-lead.<tuo-sottodominio>.workers.dev`
2. Copia questo URL e inseriscilo in `js/main.js` nella costante `CLOUDFLARE_WORKER_URL`.

---

## ⚠️ Nota Importante: Modalità Sandbox vs Produzione (Resend)

### Perché ricevi l'errore "You can only send testing emails to your own email address"?
Resend di default usa l'indirizzo mittente di test `onboarding@resend.dev`. In questa modalità (Sandbox):
* Resend consente di inviare email **esclusivamente all'indirizzo registrato sul tuo account Resend** (es. `vincenzo.cesarini@averistech.it`).
* Se provi a inviare a un indirizzo differente (es. `info@averistech.it`), Resend rifiuta la consegna con errore HTTP 502.

### Due opzioni per risolvere:

#### Opzione 1: Produzione Definitiva (Consigliata)
1. Vai su [resend.com/domains](https://resend.com/domains) e clicca **Add Domain** (`averistech.it`).
2. Copia i record DNS (DKIM, SPF, DMARC) forniti da Resend e incollali nel pannello DNS di Cloudflare per `averistech.it`.
3. Una volta verificato (pochi istanti), su Cloudflare Worker -> Settings -> Variables imposta:
   * `SENDER_EMAIL` = `inQuadra Leads <inquadra@averistech.it>`
   * `DESTINATION_EMAIL` = `info@averistech.it`

#### Opzione 2: Test Rapido (Sandbox)
Se vuoi fare un test immediato senza configurare i record DNS:
1. Su Cloudflare Worker -> Settings -> Variables, imposta:
   * `DESTINATION_EMAIL` = `vincenzo.cesarini@averistech.it` (la tua email di registrazione su Resend).
2. Assicurati che nel Worker sia incollata e salvata con **Deploy** l'ultima versione di `worker.js`.

---

## 🛠️ In alternativa: Deploy da Terminale con Wrangler (opzionale)
Se hai Node.js installato:
```bash
cd cloudflare-worker
npx wrangler secret put RESEND_API_KEY
npx wrangler deploy
```
