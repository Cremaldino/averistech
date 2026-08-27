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
    "about-title": "Ingegneria d'eccellenza per la crescita digitale globale",
    "about-desc": "Fondata con l'audace ambizione di re-ingegnerizzare i paradigmi di interi settori industriali, AverisTech si posiziona come un vero e proprio venture builder tecnologico. Ci occupiamo dell'intero ciclo di vita del prodotto: dall'ideazione strategica, alla progettazione architetturale, fino allo sviluppo, lancio e scaling globale di piattaforme SaaS e applicazioni native Cloud ad altissime prestazioni.",
    "about-mission-title": "La Nostra Mission",
    "about-mission-text": "La nostra missione è abbattere le barriere tecnologiche nei settori tradizionali. Progettiamo ecosistemi interconnessi che non si limitano a digitalizzare i processi, ma trasformano radicalmente il modo in cui le aziende operano. Crediamo in una tecnologia invisibile ma onnipresente, capace di risolvere sfide complesse attraverso strumenti incredibilmente intuitivi e scalabili.",
    "about-vision-title": "La Nostra Vision",
    "about-vision-text": "Miriamo a consolidarci come il faro dell'innovazione SaaS in Europa. Non ci accontentiamo di sviluppare software; costruiamo architetture resilienti e prodotti visionari progettati per durare nel tempo, capaci di anticipare le esigenze del mercato e di abilitare i nostri utenti a raggiungere traguardi prima inimmaginabili, ridefinendo gli standard di eccellenza digitale.",

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

    // Project 1: petsgo.it
    "petsgo-title": "Petsgo",
    "petsgo-desc": "L'ecosistema tecnologico di riferimento per il benessere e la cura dei nostri animali domestici. Una piattaforma modulare che connette pet lover, veterinari e strutture di servizio con strumenti intuitivi e affidabili.",
    "petsgo-link": "Scopri di più su Petsgo →",

    // Project 2: wroomy.it
    "wroomy-title": "Wroomy",
    "wroomy-desc": "Piattaforma digitale avanzata per la mobilità intelligente e i servizi automotive ad alto valore aggiunto. Connette guidatori, flotte e servizi dedicati all'auto con un'esperienza digitale fluida e all'avanguardia.",
    "wroomy-link": "Scopri di più su Wroomy →",

    // Project 3: freelancerhost.com
    "freelancerhost-title": "FreelancerHost",
    "freelancerhost-desc": "Blog e hub informativo in forte crescita, in evoluzione verso un software B2B dedicato alle PMI per la gestione semplificata dei fornitori esterni (Vendor Management).",
    "freelancerhost-link": "Scopri di più su FreelancerHost →",

    // Innovation & Tech Section
    "innov-tag": "Competenze & Ricerca",
    "innov-title": "Fondamenta tecnologiche inarrestabili",
    "innov-desc": "L'eccellenza ingegneristica è il nostro manifesto. Ogni ecosistema sviluppato da AverisTech poggia su scelte architetturali rigorose, nate da un continuo lavoro di R&D per garantire prestazioni, sicurezza e manutenibilità assolute.",
    "tech-1-title": "Architetture Cloud-Native & Microservizi",
    "tech-1-desc": "Progettiamo sistemi distribuiti orientati agli eventi. Sfruttiamo serverless computing, containerizzazione e orchestrazione avanzata per garantire un'elasticità automatica e zero downtime, anche sotto stress estremo.",
    "tech-2-title": "AI & Big Data Analytics",
    "tech-2-desc": "I nostri motori di raccomandazione e predizione integrano le più avanzate reti neurali. Elaboriamo terabyte di dati con pipeline di data engineering in tempo reale, per trasformare informazioni grezze in decisioni di business automatizzate.",
    "tech-3-title": "Esperienze Utente (UI/UX) Iper-Fluide",
    "tech-3-desc": "Rifiutiamo i compromessi tra estetica e performance. Creiamo interfacce reattive (SPA, PWA, Native) guidate dai dati comportamentali, con un'attenzione maniacale all'accessibilità, ai micro-interazioni e alla purezza visiva.",
    "tech-4-title": "Sicurezza Zero-Trust & Compliance",
    "tech-4-desc": "Implementiamo protocolli di protezione enterprise-grade a ogni livello dello stack. Dalla gestione delle identità (IAM), all'isolamento dei network, fino alla rigorosa conformità normativa (GDPR) by design.",

    // Methodology Section
    "method-tag": "Il Nostro Approccio Operativo",
    "method-title": "Dall'astrazione strategica all'impatto sul mercato",
    "method-desc": "Non lasciamo nulla al caso. Il nostro framework proprietario di venture building garantisce un percorso lineare e misurabile per validare, costruire e scalare prodotti digitali dirompenti con margini di rischio azzerati.",
    "method-s1-title": "1. Discovery & Architettura Iniziale",
    "method-s1-desc": "Un'immersione profonda nel dominio del problema. Analizziamo i modelli di business, eseguiamo stress-test concettuali e delineiamo diagrammi architetturali complessi prima che una singola linea di codice venga scritta.",
    "method-s2-title": "2. Sviluppo Agile Continuo & DevOps",
    "method-s2-desc": "Implementiamo cicli di sviluppo iper-veloci e pipeline CI/CD completamente automatizzate. I nostri team operano in sincronia per consegnare feature robuste, con centinaia di test automatici eseguiti ad ogni commit.",
    "method-s3-title": "3. Lancio, Telemetria & Hyper-Scaling",
    "method-s3-desc": "Il deploy in produzione è solo l'inizio. Integriamo sistemi di monitoraggio APM in tempo reale, metriche di osservabilità granulari e infrastrutture auto-scalanti per assorbire crescite esponenziali di traffico senza colli di bottiglia.",

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
    "footer-about-short": "AverisTech — Startup ad alto contenuto tecnologico specializzata in ecosistemi di pet care, mobilità e piattaforme digitali per la community freelance.",
    "footer-heading-links": "Navigazione Rapida",
    "footer-heading-legal": "Pubblicità Legale (Startup)",
    "footer-piva-label": "P. IVA / C.F.: ",
    "footer-rea-label": "REA / Sede Legale: ",
    "footer-capitale-label": "Capitale Sociale: ",
    "footer-pec-label": "PEC Ufficiale: ",
    "footer-copy": "© 2026 AverisTech - Startup - Tutti i diritti riservati.",
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
    "legal-s2-text": "AverisTech opera come Startup ad alto contenuto tecnologico ai sensi della legislazione italiana, detenendo la proprietà intellettuale e lo sviluppo dei progetti: petsgo.it (ecosistema digitale per pet care e benessere), wroomy.it (mobilità intelligente e SaaS automotive) e freelancerhost.com (blog e piattaforma di contatto per liberi professionisti e agenzie).",
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
    "about-tag": "OUR CORPORATE IDENTITY",
    "about-title": "Engineering excellence for exponential digital growth",
    "about-desc": "Founded with the bold ambition to re-engineer industry paradigms, AverisTech positions itself as a specialized technological venture builder. We oversee the entire product lifecycle: from strategic ideation and architectural design to the development, launch, and global scaling of high-performance SaaS platforms and cloud-native applications.",
    "about-mission-title": "Our Mission",
    "about-mission-text": "Our mission is to dismantle technological barriers in traditional sectors. We design interconnected ecosystems that do more than simply digitize processes—they radically transform how companies operate. We believe in invisible yet ubiquitous technology, capable of solving highly complex challenges through incredibly intuitive and scalable tools.",
    "about-vision-title": "Our Vision",
    "about-vision-text": "We aim to establish ourselves as the beacon of SaaS innovation in Europe. We do not settle for just writing software; we build resilient architectures and visionary products designed to withstand the test of time, anticipate market needs, and empower our users to reach previously unimaginable milestones.",

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

    // Project 1: petsgo.it
    "petsgo-title": "Petsgo",
    "petsgo-desc": "The benchmark technological ecosystem for pet wellness and care. A modular platform connecting pet lovers, veterinarians, and service facilities with intuitive, reliable tools.",
    "petsgo-link": "Discover more about Petsgo →",

    // Project 2: wroomy.it
    "wroomy-title": "Wroomy",
    "wroomy-desc": "Advanced digital platform for smart mobility and value-added automotive services. Connecting drivers, fleets, and vehicle services with an intuitive, cutting-edge digital experience.",
    "wroomy-link": "Discover more about Wroomy →",

    // Project 3: freelancerhost.com
    "freelancerhost-title": "FreelancerHost",
    "freelancerhost-desc": "A fast-growing blog and informational hub, currently evolving into a B2B SaaS for SMEs designed to streamline the management of external suppliers and freelancers.",
    "freelancerhost-link": "Discover more about FreelancerHost →",

    // Innovation & Tech Section
    "innov-tag": "COMPETENCIES & RESEARCH",
    "innov-title": "Unstoppable technological foundations",
    "innov-desc": "Engineering excellence is our manifesto. Every ecosystem developed by AverisTech rests on rigorous architectural choices, born from continuous R&D to guarantee absolute performance, security, and maintainability.",
    "tech-1-title": "Cloud-Native & Microservices Architecture",
    "tech-1-desc": "We design event-driven distributed systems. Leveraging serverless computing, containerization, and advanced orchestration to ensure automatic elasticity and zero downtime under extreme stress.",
    "tech-2-title": "AI & Big Data Analytics",
    "tech-2-desc": "Our recommendation and prediction engines integrate the most advanced neural networks. We process terabytes of data using real-time pipelines to turn raw insights into automated business decisions.",
    "tech-3-title": "Hyper-Fluid User Experiences",
    "tech-3-desc": "We reject compromises between aesthetics and performance. We create reactive interfaces driven by behavioral data, with obsessive attention to accessibility, micro-interactions, and visual purity.",
    "tech-4-title": "Zero-Trust Security & Compliance",
    "tech-4-desc": "We implement enterprise-grade protection protocols at every level of the stack. From Identity and Access Management (IAM) to strict regulatory compliance (GDPR) by design.",

    // Methodology Section
    "method-tag": "Our Operational Approach",
    "method-title": "From strategic abstraction to market impact",
    "method-desc": "We leave nothing to chance. Our proprietary venture building framework guarantees a linear and measurable path to validate, build, and scale disruptive digital products with mitigated risks.",
    "method-s1-title": "1. Discovery & Initial Architecture",
    "method-s1-desc": "A deep dive into the problem domain. We analyze business models, run conceptual stress-tests, and outline complex architectural diagrams before a single line of code is written.",
    "method-s2-title": "2. Continuous Agile & DevOps",
    "method-s2-desc": "We implement hyper-fast development cycles and fully automated CI/CD pipelines. Our teams work in sync to deliver robust features, with hundreds of automated tests running on every commit.",
    "method-s3-title": "3. Launch, Telemetry & Hyper-Scaling",
    "method-s3-desc": "Production deployment is just the beginning. We integrate real-time APM monitoring, granular observability metrics, and auto-scaling infrastructures to absorb exponential traffic surges.",

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
    "footer-about-short": "AverisTech — Startup specializing in pet care ecosystems, smart mobility, and digital platforms for the freelance community.",
    "footer-heading-links": "Quick Navigation",
    "footer-heading-legal": "Legal Information (Startup)",
    "footer-piva-label": "VAT / Tax ID: ",
    "footer-rea-label": "REA / Legal Office: ",
    "footer-capitale-label": "Share Capital: ",
    "footer-pec-label": "Official PEC: ",
    "footer-copy": "© 2026 AverisTech - Startup - All rights reserved.",
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
    "legal-s2-text": "AverisTech operates as a Startup with high technological value under Italian law, holding intellectual property and development rights for: petsgo.it (pet care digital ecosystem), wroomy.it (smart mobility & automotive SaaS), and freelancerhost.com (blog and networking platform for freelancers and agencies).",
    "legal-s3-title": "3. Intellectual Property and Copyright",
    "legal-s3-text": "All contents, logos (including AverisTech, Petsgo, Wroomy, FreelancerHost trademarks and emblems), text, source code, and layouts on this website are protected by copyright and intellectual property laws. Unauthorized reproduction is strictly prohibited."
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
