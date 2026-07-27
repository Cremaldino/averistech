/**
 * AverisTech - Internationalization (i18n) Module
 * Supports bilingual switching (Italian / English) with localStorage persistence
 */

const translations = {
  it: {
    // Navigation
    "nav-about": "Chi Siamo",
    "nav-portfolio": "Progetti",
    "nav-innovation": "Innovazione",
    "nav-contact": "Contatti",

    // Hero Section
    "hero-badge": "Startup Italiana",
    "hero-title": "Plasmiamo il futuro delle piattaforme digitali.",
    "hero-subtitle": "AverisTech è la startup per lo sviluppo e l'incubazione di ecosistemi tecnologici ad alto impatto. Coniughiamo ingegneria software moderna e design d'eccellenza per creare esperienze scalabili.",
    "hero-btn-primary": "Esplora i Progetti",
    "hero-btn-secondary": "Contattaci",

    // About Section
    "about-tag": "La Nostra Identità",
    "about-title": "Ingegneria d'eccellenza per la crescita digitale",
    "about-desc": "Nata con l'obiettivo di rivoluzionare interi settori di mercato, AverisTech progetta, lancia e scala piattaforme SaaS e applicazioni digitali native nel cloud.",
    "about-text-p1": "Siamo una startup che opera al crocevia tra tecnologia all'avanguardia e analisi strategica del mercato. Ogni nostro progetto nasce da una rigorosa ricerca di usabilità, affidabilità architetturale e scalabilità globale.",
    "about-text-p2": "Nel nostro portafoglio incubiamo iniziative proprietarie con il potenziale di ridefinire il modo in cui persone e imprese comunicano, operano e collaborano ogni giorno.",

    // Core Values
    "val-1-title": "Innovazione Tecnologica",
    "val-1-desc": "Adozione costante delle migliori stack e metodologie agili per garantire piattaforme ultra-veloci, moderne e sicure.",
    "val-2-title": "Affidabilità & Sicurezza",
    "val-2-desc": "Infrastrutture Zero-Trust, conformità alle normative europee sulla protezione dei dati e stabilità operativa garantita 99.9%.",
    "val-3-title": "Scalabilità Globale",
    "val-3-desc": "Architetture pensate per crescere senza limiti, supportando carichi elevati e mercati internazionali in rapida evoluzione.",

    // Portfolio Section
    "portfolio-tag": "Il Nostro Portafoglio",
    "portfolio-title": "Le nostre iniziative tecnologiche",
    "portfolio-desc": "Tre piattaforme verticali in rapida espansione, progettate e sviluppate per eccellere nei rispettivi settori di mercato.",
    "status-active": "Progetto Attivo",

    // Project 1: wroomy.it
    "wroomy-title": "Wroomy",
    "wroomy-desc": "Piattaforma digitale avanzata per la mobilità intelligente e i servizi automotive ad alto valore aggiunto. Connette guidatori, flotte e servizi dedicati all'auto con un'esperienza digitale fluida e all'avanguardia.",
    "wroomy-link": "Visita wroomy.it →",

    // Project 2: petsgo.it
    "petsgo-title": "Petsgo",
    "petsgo-desc": "L'ecosistema tecnologico di riferimento per il benessere e la cura dei nostri animali domestici. Una piattaforma modulare che connette pet lover, veterinari e strutture di servizio con strumenti intuitivi e affidabili.",
    "petsgo-link": "Visita petsgo.it →",

    // Project 3: freelancerhost.com
    "freelancerhost-title": "FreelancerHost",
    "freelancerhost-desc": "Infrastruttura cloud e servizi di hosting ad alte prestazioni progettati su misura per la nuova generazione di liberi professionisti, sviluppatori indipendenti e agenzie digitali.",
    "freelancerhost-link": "Visita freelancerhost.com →",

    // Innovation & Tech Section
    "innov-tag": "Competenze & R&D",
    "innov-title": "Fondamenta tecnologiche solide",
    "innov-desc": "Costruiamo ogni piattaforma partendo dai principi più moderni dell'ingegneria del software.",
    "tech-1-title": "Cloud-Native API",
    "tech-1-desc": "Microservizi serverless, elasticità automatica e continuità operativa.",
    "tech-2-title": "AI & Data Analytics",
    "tech-2-desc": "Motori predittivi e telemetria in tempo reale per decisioni data-driven.",
    "tech-3-title": "Eccellenza UI/UX",
    "tech-3-desc": "Design interattivo orientato all'utente ed estetica di livello superiore.",
    "tech-4-title": "Zero-Trust Security",
    "tech-4-desc": "Crittografia end-to-end e protocolli di protezione enterprise.",

    // Contact Section
    "contact-tag": "Parliamo del Futuro",
    "contact-title": "Entra in contatto con noi",
    "contact-desc": "Siamo sempre aperti a sinergie istituzionali, investitori, talenti tecnici e partner strategici. Scrivici per scoprire come possiamo collaborare.",
    "contact-location-label": "Sede Operativa",
    "contact-location-val": "Italia — Incubatore d'Impresa",
    "contact-email-label": "Email Istituzionale",
    "contact-pec-label": "PEC Ufficiale",

    // Form Labels & Placeholders
    "form-name-label": "Nome e Cognome",
    "form-email-label": "Indirizzo Email",
    "form-subject-label": "Oggetto del Messaggio",
    "form-message-label": "Il tuo Messaggio",
    "form-btn-submit": "Invia Messaggio",
    "form-success": "Messaggio inviato con successo! Ti risponderemo a breve.",

    // Footer
    "footer-about-short": "AverisTech — Startup ad alto contenuto tecnologico specializzata in ecosistemi di mobilità, pet care e infrastruttura cloud professionale.",
    "footer-heading-links": "Navigazione Rapida",
    "footer-heading-legal": "Pubblicità Legale (Startup)",
    "footer-piva-label": "P. IVA / C.F.: ",
    "footer-rea-label": "REA / Sede Legale: ",
    "footer-capitale-label": "Capitale Sociale: ",
    "footer-pec-label": "PEC Ufficiale: ",
    "footer-copy": "© 2026 AverisTech S.r.l. - Startup - Tutti i diritti riservati.",
    "footer-privacy": "Informativa sulla Privacy",
    "footer-cookie": "Informativa sui Cookie",
    "footer-terms": "Note Legali",

    // Legal Policies (IT)
    "policy-back-btn": "← Torna alla Home",
    "privacy-page-title": "Informativa sulla Privacy (Privacy Policy)",
    "privacy-page-sub": "Ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR)",
    "privacy-s1-title": "1. Titolare del Trattamento",
    "privacy-s1-text": "Titolare del trattamento è AverisTech S.r.l., Startup in attesa di costituzione con sede legale in Via del prato 27 - 00172 - Roma, PEC: averistech@pec.it.",
    "privacy-s2-title": "2. Tipologie di Dati Raccolti",
    "privacy-s2-text": "La navigazione sui siti societari (averistech.it, wroomy.it, petsgo.it, freelancerhost.com) comporta la raccolta di dati di navigazione standard (indirizzi IP, log tecnici). L'invio del modulo di contatto comporta l'acquisizione di Nome, Cognome, Indirizzo Email e contenuto del messaggio.",
    "privacy-s3-title": "3. Finalità e Base Giuridica",
    "privacy-s3-text": "I dati conferiti sono trattati esclusivamente per rispondere alle richieste di contatto e collaborazione (esecuzione di misure precontrattuali ai sensi dell'art. 6 par. 1 lett. b del GDPR) e per la sicurezza informatica dei sistemi.",
    "privacy-s4-title": "4. Diritti dell'Interessato",
    "privacy-s4-text": "In ogni momento, l'interessato può esercitare i diritti di accesso, rettifica, cancellazione e opposizione al trattamento inviando una comunicazione formale alla PEC: averistech@pec.it.",

    "cookie-page-title": "Informativa sui Cookie (Cookie Policy)",
    "cookie-page-sub": "Trasparenza sulla gestione dei cookie tecnici e di preferenza",
    "cookie-s1-title": "1. Cookie Tecnici Strettamente Necessari",
    "cookie-s1-text": "I siti di AverisTech utilizzano esclusivamente cookie tecnici e meccanismi di archiviazione locale (come localStorage per memorizzare la preferenza di lingua IT/EN). Questi strumenti non richiedono il consenso preventivo dell'utente ai sensi della Direttiva ePrivacy 2002/58/CE e dell'art. 122 del Codice Privacy.",
    "cookie-s2-title": "2. Cookie di Profilazione e Terze Parti",
    "cookie-s2-text": "Non utilizziamo cookie di profilazione pubblicitaria o tracker di tracciamento invasivi di terze parti. Il nostro obiettivo è offrire una navigazione veloce, sicura e rispettosa della privacy su wroomy.it, petsgo.it e freelancerhost.com.",
    "cookie-s3-title": "3. Gestione dalle Impostazioni del Browser",
    "cookie-s3-text": "L'utente può comunque limitare, bloccare o eliminare i cookie e il localStorage modificando le impostazioni sulla privacy del proprio browser (Chrome, Firefox, Safari, Edge).",

    "legal-page-title": "Note Legali e Pubblicità Societaria",
    "legal-page-sub": "Dati societari ai sensi della legislazione vigente e art. 2250 c.c.",
    "legal-s1-title": "1. Denominazione e Sede Legale",
    "legal-s1-text": "AverisTech S.r.l. — Startup (in attesa di costituzione). Sede Legale: Via del prato 27 - 00172 - Roma (RM), Italia. Capitale Sociale: € 4.500,00 interamente versato.",
    "legal-s2-title": "2. Oggetto Sociale e Progetti di Portafoglio",
    "legal-s2-text": "AverisTech opera come Startup ad alto contenuto tecnologico ai sensi della legislazione italiana, detenendo la proprietà intellettuale e lo sviluppo dei progetti: wroomy.it (mobilità intelligente e SaaS automotive), petsgo.it (ecosistema digitale per pet care e benessere) e freelancerhost.com (infrastruttura cloud e hosting professionale).",
    "legal-s3-title": "3. Proprietà Intellettuale e Copyright",
    "legal-s3-text": "Tutti i contenuti, loghi (inclusi i marchi e monogrammi AverisTech, Wroomy, Petsgo, FreelancerHost), testi, codice sorgente e layout presenti su questo sito sono tutelati dalle leggi sul diritto d'autore e proprietà industriale. È vietata la riproduzione non autorizzata."
  },

  en: {
    // Navigation
    "nav-about": "About Us",
    "nav-portfolio": "Portfolio",
    "nav-innovation": "Innovation",
    "nav-contact": "Contact Us",

    // Hero Section
    "hero-badge": "Italian Startup",
    "hero-title": "Engineering the future of digital platforms.",
    "hero-subtitle": "AverisTech is the startup for building and incubating high-impact technological ecosystems. We blend modern software engineering with premium design to create scalable experiences.",
    "hero-btn-primary": "Explore Projects",
    "hero-btn-secondary": "Contact Us",

    // About Section
    "about-tag": "OUR IDENTITY",
    "about-title": "Engineering excellence for digital growth",
    "about-desc": "Founded with the mission to revolutionize key market sectors, AverisTech architects, deploys, and scales cloud-native SaaS platforms and digital applications.",
    "about-text-p1": "We are a startup operating at the intersection of cutting-edge technology and strategic market intelligence. Every project we launch is born from rigorous research in usability, architectural reliability, and global scalability.",
    "about-text-p2": "Within our portfolio, we incubate proprietary platforms with the power to redefine how people and businesses connect, operate, and collaborate every day.",

    // Core Values
    "val-1-title": "Technological Innovation",
    "val-1-desc": "Continuous adoption of top-tier cloud stacks and agile methodologies to ensure ultra-fast, modern, and secure platforms.",
    "val-2-title": "Reliability & Security",
    "val-2-desc": "Zero-Trust infrastructures, strict compliance with European data protection regulations, and 99.9% guaranteed uptime.",
    "val-3-title": "Global Scalability",
    "val-3-desc": "Architectures engineered to scale without boundaries, seamlessly handling high traffic and fast-evolving international markets.",

    // Portfolio Section
    "portfolio-tag": "OUR PORTFOLIO",
    "portfolio-title": "Our technological initiatives",
    "portfolio-desc": "Three fast-growing vertical platforms, designed and built to excel in their respective market sectors.",
    "status-active": "Active Project",

    // Project 1: wroomy.it
    "wroomy-title": "Wroomy",
    "wroomy-desc": "Advanced digital platform for smart mobility and value-added automotive services. Connecting drivers, fleets, and vehicle services with an intuitive, cutting-edge digital experience.",
    "wroomy-link": "Visit wroomy.it →",

    // Project 2: petsgo.it
    "petsgo-title": "Petsgo",
    "petsgo-desc": "The benchmark technological ecosystem for pet wellness and care. A modular platform connecting pet lovers, veterinarians, and service facilities with intuitive, reliable tools.",
    "petsgo-link": "Visit petsgo.it →",

    // Project 3: freelancerhost.com
    "freelancerhost-title": "FreelancerHost",
    "freelancerhost-desc": "High-performance cloud infrastructure and managed hosting services tailored for the next generation of freelancers, independent developers, and digital agencies.",
    "freelancerhost-link": "Visit freelancerhost.com →",

    // Innovation & Tech Section
    "innov-tag": "CORE COMPETENCIES & R&D",
    "innov-title": "Rock-solid technological foundations",
    "innov-desc": "We build every platform starting from the most modern principles of software engineering.",
    "tech-1-title": "Cloud-Native API",
    "tech-1-desc": "Serverless microservices, automatic elasticity, and guaranteed operational continuity.",
    "tech-2-title": "AI & Data Analytics",
    "tech-2-desc": "Predictive engines and real-time telemetry for smarter data-driven decisions.",
    "tech-3-title": "UI/UX Excellence",
    "tech-3-desc": "User-centric interactive design and state-of-the-art visual aesthetics.",
    "tech-4-title": "Zero-Trust Security",
    "tech-4-desc": "End-to-end encryption and enterprise-grade protection protocols.",

    // Contact Section
    "contact-tag": "LET'S TALK FUTURE",
    "contact-title": "Get in touch with us",
    "contact-desc": "We are always open to institutional synergies, investors, tech talents, and strategic partners. Write to us to explore how we can collaborate.",
    "contact-location-label": "Headquarters",
    "contact-location-val": "Italy — Business Incubator",
    "contact-email-label": "Institutional Email",
    "contact-pec-label": "Certified Email (PEC)",

    // Form Labels & Placeholders
    "form-name-label": "Full Name",
    "form-email-label": "Email Address",
    "form-subject-label": "Subject",
    "form-message-label": "Your Message",
    "form-btn-submit": "Send Message",
    "form-success": "Message sent successfully! We will get back to you shortly.",

    // Footer
    "footer-about-short": "AverisTech — Startup specializing in smart mobility ecosystems, pet care, and professional cloud hosting infrastructure.",
    "footer-heading-links": "Quick Navigation",
    "footer-heading-legal": "Legal Information (Startup)",
    "footer-piva-label": "VAT / Tax ID: ",
    "footer-rea-label": "REA / Legal Office: ",
    "footer-capitale-label": "Share Capital: ",
    "footer-pec-label": "Official PEC: ",
    "footer-copy": "© 2026 AverisTech S.r.l. - Startup - All rights reserved.",
    "footer-privacy": "Privacy Policy",
    "footer-cookie": "Cookie Policy",
    "footer-terms": "Legal Notes",

    // Legal Policies (EN)
    "policy-back-btn": "← Back to Home",
    "privacy-page-title": "Privacy Policy",
    "privacy-page-sub": "Pursuant to Articles 13 and 14 of EU Regulation 2016/679 (GDPR)",
    "privacy-s1-title": "1. Data Controller",
    "privacy-s1-text": "The Data Controller is AverisTech S.r.l., Startup in the process of incorporation, registered office at Via del prato 27 - 00172 - Rome, Italy, PEC: averistech@pec.it.",
    "privacy-s2-title": "2. Types of Data Collected",
    "privacy-s2-text": "Browsing our websites (averistech.it, wroomy.it, petsgo.it, freelancerhost.com) involves collecting standard navigation data (IP addresses, technical logs). Submitting the contact form involves acquiring Full Name, Email Address, and message content.",
    "privacy-s3-title": "3. Purposes and Legal Basis",
    "privacy-s3-text": "Data provided is processed solely to respond to contact and collaboration inquiries (execution of pre-contractual measures under Art. 6(1)(b) GDPR) and for IT infrastructure security.",
    "privacy-s4-title": "4. Data Subject Rights",
    "privacy-s4-text": "At any time, data subjects may exercise their rights of access, rectification, erasure, and objection by sending a formal request to PEC: averistech@pec.it.",

    "cookie-page-title": "Cookie Policy",
    "cookie-page-sub": "Transparency regarding technical and preference cookies",
    "cookie-s1-title": "1. Strictly Necessary Technical Cookies",
    "cookie-s1-text": "AverisTech websites use exclusively technical cookies and local storage mechanisms (such as localStorage to store your language preference IT/EN). These tools do not require prior user consent under ePrivacy Directive 2002/58/EC and Art. 122 of the Privacy Code.",
    "cookie-s2-title": "2. Profiling and Third-Party Cookies",
    "cookie-s2-text": "We do not use advertising profiling cookies or invasive third-party tracking scripts. Our goal is to provide fast, secure, and privacy-respecting browsing across wroomy.it, petsgo.it, and freelancerhost.com.",
    "cookie-s3-title": "3. Managing Settings in Your Browser",
    "cookie-s3-text": "Users can restrict, block, or delete cookies and localStorage at any time by adjusting their browser privacy settings (Chrome, Firefox, Safari, Edge).",

    "legal-page-title": "Legal Notes and Corporate Disclosures",
    "legal-page-sub": "Corporate disclosures pursuant to applicable regulations and Art. 2250 Italian Civil Code",
    "legal-s1-title": "1. Company Name and Registered Office",
    "legal-s1-text": "AverisTech S.r.l. — Startup (in process of incorporation). Registered Office: Via del prato 27 - 00172 - Rome (RM), Italy. Share Capital: € 4.500,00 fully paid-in.",
    "legal-s2-title": "2. Corporate Purpose and Portfolio Projects",
    "legal-s2-text": "AverisTech operates as a Startup with high technological value under Italian law, holding intellectual property and development rights for: wroomy.it (smart mobility & automotive SaaS), petsgo.it (pet care digital ecosystem), and freelancerhost.com (cloud infrastructure & professional hosting).",
    "legal-s3-title": "3. Intellectual Property and Copyright",
    "legal-s3-text": "All contents, logos (including AverisTech, Wroomy, Petsgo, FreelancerHost trademarks and emblems), text, source code, and layouts on this website are protected by copyright and intellectual property laws. Unauthorized reproduction is strictly prohibited."
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem("averistech_lang") || "it";
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupEventListeners();
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem("averistech_lang", lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang;

    // Update text content for elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders for form fields with data-i18n-placeholder
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute("placeholder", translations[lang][key]);
      }
    });

    // Toggle active classes on language buttons
    const btnIt = document.getElementById("btn-lang-it");
    const btnEn = document.getElementById("btn-lang-en");
    if (btnIt && btnEn) {
      if (lang === "it") {
        btnIt.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnIt.classList.remove("active");
      }
    }
  }

  setupEventListeners() {
    const btnIt = document.getElementById("btn-lang-it");
    const btnEn = document.getElementById("btn-lang-en");

    if (btnIt) {
      btnIt.addEventListener("click", () => this.setLanguage("it"));
    }
    if (btnEn) {
      btnEn.addEventListener("click", () => this.setLanguage("en"));
    }
  }
}

// Instantiate and expose globally on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.i18nManager = new I18nManager();
});
