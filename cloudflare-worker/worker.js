/**
 * Cloudflare Worker: inQuadra Lead Ingestion & Email Dispatcher
 * AverisTech (https://www.averistech.it)
 * 
 * Riceve i dati dal form di inquadra.html, valida i dati e invia un'email HTML
 * professionale e brandizzata a info@averistech.it tramite Resend (o altro provider REST).
 */

export default {
  async fetch(request, env) {
    // 1. Gestione CORS Preflight (OPTIONS)
    if (request.method === "OPTIONS") {
      return handleCors(request);
    }

    // 2. Accetta solo richieste POST
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Metodo non consentito. Richiesto POST." }), {
        status: 405,
        headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
      });
    }

    try {
      const data = await request.json();

      // Controllo antispam honeypot (se presente e compilato, scarta silenziosamente)
      if (data._honeypot && data._honeypot.trim() !== "") {
        return new Response(JSON.stringify({ success: true, message: "Ricevuto." }), {
          status: 200,
          headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
        });
      }

      // 3. Estrazione e validazione campi
      const name = (data.name || "").trim();
      const email = (data.email || "").trim();
      const phone = (data.phone || "").trim();
      const company = (data.company || "").trim();
      const erp = (data.erp || "Non specificato").trim();
      const volume = (data.volume_documenti || "Non specificato").trim();
      const notes = (data.notes || "").trim();

      if (!name || !email || !phone || !company) {
        return new Response(
          JSON.stringify({ error: "Campi obbligatori mancanti: Nome, Email, Telefono e Azienda sono richiesti." }),
          {
            status: 400,
            headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
          }
        );
      }

      // Validazione sintattica email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: "Indirizzo email non valido." }),
          {
            status: 400,
            headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
          }
        );
      }

      // 4. Formattazione data e ora (Fuso orario italiano)
      const now = new Date();
      const formattedDate = new Intl.DateTimeFormat("it-IT", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Europe/Rome",
      }).format(now);

      // 5. Configurazione API Email (Resend)
      // La chiave API si imposta nei Secrets di Cloudflare (RESEND_API_KEY)
      const apiKey = env.RESEND_API_KEY;
      if (!apiKey) {
        console.error("Variabile d'ambiente RESEND_API_KEY non configurata nei Secrets del Worker.");
        return new Response(
          JSON.stringify({
            error: "Configurazione server incompleta: chiave email non trovata nei secrets.",
          }),
          {
            status: 500,
            headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
          }
        );
      }

      const recipientEmail = env.DESTINATION_EMAIL || "info@averistech.it";
      const senderEmail = env.SENDER_EMAIL || "inQuadra Leads <onboarding@resend.dev>";

      // 6. Template HTML Premium per l'email a info@averistech.it
      const emailHtml = `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #0f172a; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #090e17 0%, #0d282e 100%); padding: 32px 28px; text-align: left; border-bottom: 3px solid #00d2b4; }
    .badge { display: inline-block; background: rgba(0,210,180,0.15); color: #00d2b4; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 28px; }
    .alert-box { background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; font-size: 14px; color: #0f766e; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    .table td.label { width: 35%; color: #64748b; font-weight: 600; background: #fafafa; }
    .table td.val { width: 65%; color: #0f172a; font-weight: 500; }
    .val strong { color: #008775; font-size: 15px; }
    .btn-row { text-align: center; margin: 28px 0 10px 0; }
    .btn { display: inline-block; background: #008775; color: #ffffff !important; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,135,117,0.25); }
    .footer { background: #f8fafc; padding: 18px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="badge">Nuovo Lead Qualificato</div>
      <h1>Richiesta Informazioni / Assessment inQuadra</h1>
      <p>Ricevuta il ${formattedDate} da averistech.it/inquadra.html</p>
    </div>
    <div class="content">
      <div class="alert-box">
        🎯 <strong>Nuova opportunità B2B:</strong> Un responsabile aziendale ha completato il form sul simulatore ROI di inQuadra.
      </div>
      
      <table class="table">
        <tr>
          <td class="label">Azienda</td>
          <td class="val"><strong>${escapeHtml(company)}</strong></td>
        </tr>
        <tr>
          <td class="label">Referente</td>
          <td class="val">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td class="label">Email Aziendale</td>
          <td class="val"><a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td class="label">Telefono Diretto</td>
          <td class="val"><a href="tel:${escapeHtml(phone)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(phone)}</a></td>
        </tr>
        <tr>
          <td class="label">Gestionale / ERP</td>
          <td class="val"><strong>${escapeHtml(erp)}</strong></td>
        </tr>
        <tr>
          <td class="label">Volume Documenti</td>
          <td class="val" style="color: #059669; font-weight: 700;">${escapeHtml(volume)}</td>
        </tr>
        ${notes ? `<tr><td class="label">Note Aggiuntive</td><td class="val">${escapeHtml(notes)}</td></tr>` : ""}
      </table>

      <div class="btn-row">
        <a href="mailto:${escapeHtml(email)}?subject=Re:%20Richiesta%20inQuadra%20per%20${encodeURIComponent(company)}" class="btn">
          ✉️ Rispondi Direttamente al Cliente
        </a>
      </div>
    </div>
    <div class="footer">
      Messaggio generato in automatico dal motore inQuadra su <strong>averistech.it</strong>.<br>
      IP mittente: ${request.headers.get("cf-connecting-ip") || "n/d"} • Cloudflare Edge Network
    </div>
  </div>
</body>
</html>
      `;

      // 7. Spedizione tramite Resend API
      let resendPayload = {
        from: senderEmail,
        to: [recipientEmail],
        reply_to: email, // Permette di cliccare semplicemente 'Rispondi' da Outlook/Thunderbird
        subject: `[inQuadra Lead] ${company} - Richiesta Assessment (${volume})`,
        html: emailHtml,
      };

      let resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resendPayload),
      });

      let resendResult = await resendResponse.json();

      // Se Resend è in Sandbox e richiede di inviare all'email registrata dell'account (es. vincenzo.cesarini@averistech.it)
      const resendErrMsg = typeof resendResult.message === "string" ? resendResult.message : "";
      if (!resendResponse.ok && resendErrMsg.includes("only send testing emails to your own email address")) {
        const match = resendErrMsg.match(/\(([^)]+)\)/);
        const sandboxOwnerEmail = match ? match[1] : "vincenzo.cesarini@averistech.it";

        console.warn(`Resend è in Sandbox mode. Reindirizzamento automatico a: ${sandboxOwnerEmail}`);
        resendPayload.to = [sandboxOwnerEmail];

        resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resendPayload),
        });
        resendResult = await resendResponse.json();
      }

      if (!resendResponse.ok) {
        console.error("Errore risposta Resend:", resendResult);
        return new Response(
          JSON.stringify({
            error: "Errore durante la consegna dell'email dal provider.",
            details: resendResult.message || resendResult,
          }),
          {
            status: 502,
            headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
          }
        );
      }

      // 8. Risposta positiva al frontend
      return new Response(
        JSON.stringify({
          success: true,
          message: "Richiesta registrata con successo.",
          id: resendResult.id,
        }),
        {
          status: 200,
          headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
        }
      );
    } catch (err) {
      console.error("Errore Worker:", err);
      return new Response(
        JSON.stringify({ error: "Errore interno durante l'elaborazione della richiesta." }),
        {
          status: 500,
          headers: getCorsHeaders(request, { "Content-Type": "application/json" }),
        }
      );
    }
  },
};

/**
 * Gestione CORS: permette chiamate dal dominio averistech.it e localhost (dev)
 */
function getCorsHeaders(request, additionalHeaders = {}) {
  const origin = request.headers.get("Origin") || "*";
  const allowedOrigins = [
    "https://www.averistech.it",
    "https://averistech.it",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:5500",
    "http://127.0.0.1:5500"
  ];

  const allowOrigin = allowedOrigins.includes(origin) ? origin : "*";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Max-Age": "86400",
    ...additionalHeaders,
  };
}

function handleCors(request) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
