/**
 * AverisTech - Main Interactive UI Script
 * Handles navbar scroll effects, mobile hamburger menu, smooth scrolling,
 * and contact form submission with Toast notifications.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL NAVBAR GLASSMORPHISM EFFECT
  const navbar = document.getElementById("navbar");
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. MOBILE HAMBURGER MENU TOGGLE
  const navToggleBtn = document.getElementById("nav-toggle");
  const navLinksList = document.getElementById("nav-links");

  if (navToggleBtn && navLinksList) {
    navToggleBtn.addEventListener("click", () => {
      const isOpen = navLinksList.classList.toggle("open");
      navToggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggleBtn.textContent = isOpen ? "✕" : "☰";
    });

    // Close mobile menu when clicking a link
    const navLinks = navLinksList.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinksList.classList.remove("open");
        navToggleBtn.setAttribute("aria-expanded", "false");
        navToggleBtn.textContent = "☰";
      });
    });
  }

  // 3. CONTACT FORM SUBMISSION (MAILTO METHOD) & TOAST NOTIFICATION
  const contactForm = document.getElementById("contact-form");
  const toastNotification = document.getElementById("toast-notification");

  if (contactForm && toastNotification) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("form-name")?.value.trim() || "Visitatore";
      const email = document.getElementById("form-email")?.value.trim() || "";
      const subject = document.getElementById("form-subject")?.value.trim() || "Contatto dal sito web";
      const message = document.getElementById("form-message")?.value.trim() || "";

      const targetEmail = "info@averistech.it";
      const mailtoSubject = encodeURIComponent(`[AverisTech Contatto] ${subject}`);
      const mailtoBody = encodeURIComponent(
        `Nome / Azienda: ${name}\nEmail del mittente: ${email}\n\nMessaggio:\n${message}`
      );
      const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show Toast Notification
      toastNotification.classList.add("show");

      // Open email client with pre-filled message
      window.location.href = mailtoUrl;

      // Clear Form Fields
      contactForm.reset();

      // Automatically hide toast after 4.5 seconds
      setTimeout(() => {
        toastNotification.classList.remove("show");
      }, 4500);
    });
  }

  // 4. INQUADRA LEAD FORM SUBMISSION (DIRECT AJAX TO info@averistech.it)
  const roiLeadForm = document.getElementById("roi-lead-form");
  const btnSubmitLead = document.getElementById("btn-submit-lead");
  const toastMessage = document.getElementById("toast-message");

  if (roiLeadForm) {
    roiLeadForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nome = document.getElementById("form-nome")?.value.trim() || "";
      const email = document.getElementById("form-email")?.value.trim() || "";
      const tel = document.getElementById("form-tel")?.value.trim() || "";
      const azienda = document.getElementById("form-azienda")?.value.trim() || "";
      const erp = document.getElementById("form-erp")?.value || "Non specificato";
      const docs = document.getElementById("form-docs")?.value || "500";

      // 1. Loading UI State
      const originalBtnHtml = btnSubmitLead ? btnSubmitLead.innerHTML : "Richiedi Informazioni";
      if (btnSubmitLead) {
        btnSubmitLead.disabled = true;
        btnSubmitLead.innerHTML = `
          <svg style="display:inline-block; vertical-align:middle; width:18px; height:18px; margin-right:8px; animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
          Invio in corso...
        `;
      }

      // Check if running directly as a local file (file://)
      if (window.location.protocol === "file:") {
        setTimeout(() => {
          if (btnSubmitLead) {
            btnSubmitLead.innerHTML = "✓ Test Locale Completato";
            btnSubmitLead.style.background = "var(--iq-emerald, #059669)";
            btnSubmitLead.style.borderColor = "var(--iq-emerald, #059669)";
          }
          if (toastMessage) {
            toastMessage.textContent = "Modalità test locale: i browser bloccano le chiamate API esterne dai file aperti direttamente (file://). Per l'invio reale apri http://localhost:8000/inquadra.html o la pagina online.";
          }
          if (toastNotification) {
            toastNotification.classList.add("show");
          }

          roiLeadForm.reset();
          const docsInput = document.getElementById("form-docs");
          const calcDocs = document.getElementById("calc-docs");
          if (docsInput && calcDocs) {
            docsInput.value = calcDocs.value;
          }

          setTimeout(() => {
            if (btnSubmitLead) {
              btnSubmitLead.disabled = false;
              btnSubmitLead.innerHTML = originalBtnHtml;
              btnSubmitLead.style.background = "";
              btnSubmitLead.style.borderColor = "";
            }
            if (toastNotification) {
              toastNotification.classList.remove("show");
            }
          }, 4500);
        }, 500);
        return;
      }

      try {
        // 2. Direct Background POST via AJAX (on http/https)
        const response = await fetch("https://formsubmit.co/ajax/info@averistech.it", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `[inQuadra] Nuova Richiesta Lead - ${azienda || nome}`,
            _template: "table",
            _captcha: "false",
            "Nome e Cognome": nome,
            "Ragione Sociale": azienda,
            "Email Aziendale": email,
            "Telefono Diretto": tel,
            "Gestionale / ERP": erp,
            "Volume Documenti Stimato": `${docs} doc/mese`,
            "Origine": "Landing Page inQuadra (averistech.it)"
          })
        });

        const result = await response.json();

        if (response.ok && (result.success === "true" || result.success === true)) {
          // Success State
          if (btnSubmitLead) {
            btnSubmitLead.innerHTML = "✓ Richiesta Inviata!";
            btnSubmitLead.style.background = "var(--iq-emerald, #059669)";
            btnSubmitLead.style.borderColor = "var(--iq-emerald, #059669)";
          }

          if (toastMessage) {
            toastMessage.textContent = "Richiesta inviata con successo! Un nostro analista ti contatterà entro 24 ore.";
          }
          if (toastNotification) {
            toastNotification.classList.add("show");
          }

          // Reset Form and restore slider docs value
          roiLeadForm.reset();
          const docsInput = document.getElementById("form-docs");
          const calcDocs = document.getElementById("calc-docs");
          if (docsInput && calcDocs) {
            docsInput.value = calcDocs.value;
          }

          setTimeout(() => {
            if (btnSubmitLead) {
              btnSubmitLead.disabled = false;
              btnSubmitLead.innerHTML = originalBtnHtml;
              btnSubmitLead.style.background = "";
              btnSubmitLead.style.borderColor = "";
            }
          }, 4500);
        } else if (result.message && result.message.toLowerCase().includes("activation")) {
          // One-time FormSubmit email activation notice
          if (btnSubmitLead) {
            btnSubmitLead.innerHTML = "✓ Verifica inviata a info@averistech.it";
            btnSubmitLead.style.background = "var(--iq-amber, #d97706)";
            btnSubmitLead.style.borderColor = "var(--iq-amber, #d97706)";
          }

          if (toastMessage) {
            toastMessage.textContent = "Attivazione richiesta: FormSubmit ha inviato un'email a info@averistech.it. Clicca su 'Activate Form' nell'email per abilitare la ricezione definitiva.";
          }
          if (toastNotification) {
            toastNotification.classList.add("show");
          }

          setTimeout(() => {
            if (btnSubmitLead) {
              btnSubmitLead.disabled = false;
              btnSubmitLead.innerHTML = originalBtnHtml;
              btnSubmitLead.style.background = "";
              btnSubmitLead.style.borderColor = "";
            }
          }, 6000);
        } else {
          throw new Error(result.message || "Errore durante la trasmissione");
        }
      } catch (err) {
        console.error("Errore invio form inQuadra:", err);

        // Error State
        if (btnSubmitLead) {
          btnSubmitLead.disabled = false;
          btnSubmitLead.innerHTML = originalBtnHtml;
        }

        if (toastMessage) {
          toastMessage.textContent = "Errore durante l'invio. Riprova tra poco o scrivi direttamente a info@averistech.it.";
        }
        if (toastNotification) {
          toastNotification.classList.add("show");
        }
      } finally {
        setTimeout(() => {
          if (toastNotification) {
            toastNotification.classList.remove("show");
          }
        }, 5500);
      }
    });
  }
});
