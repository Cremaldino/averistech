/**
 * AverisTech - Internationalization (i18n) Module
 * Supports bilingual switching (Italian / English) with localStorage persistence
 */

const translations = {
  it: {
    // Navigation (Corporate Tech Venture + Flagship IA)
    "nav-home": "Home",
    "nav-inquadra": "inQuadra",
    "nav-agentic": "Agentic AI",
    "nav-venture": "Venture Lab",
    "nav-company": "Azienda & Partner",
    "nav-contact": "Contatti",
    "nav-cta-demo": "Parla con Noi",
    "nav-about": "Azienda & Partner",
    "nav-portfolio": "inQuadra",
    "nav-innovation": "Agentic AI",

    // 1. Hero Section (Above the Fold — Digital Venture Builder & Tech Holding)
    "hero-badge": "Digital Venture Builder • Technology Holding • Agentic AI",
    "hero-title": "Progettiamo, Ingegnerizziamo e Scaliamo Piattaforme SaaS ed Ecosistemi AI.",
    "hero-subtitle": "AverisTech è un Digital Venture Builder e Technology Hub. Operiamo all'intersezione tra architetture software avanzate, Data Intelligence e innovazione di mercato per trasformare tecnologie complesse in soluzioni digitali ad alto valore per imprese e consumatori.",
    "hero-btn-primary": "Esplora l'Ecosistema",
    "hero-btn-secondary": "DNA & Track Record",
    "kpi-1-val": "20+ Anni",
    "kpi-1-label": "Eccellenza Direzionale IT",
    "kpi-2-val": "4 Piattaforme",
    "kpi-2-label": "Asset Proprietari Attivi",
    "kpi-3-val": "Agentic AI",
    "kpi-3-label": "Stack Cloud-Native & LLM",
    "kpi-4-val": "Zero-Trust",
    "kpi-4-label": "Isolamento Multi-Tenant & GDPR",

    // 2. Chi Siamo, Core Areas & Track Record
    "cred-tag": "Technology Hub • Core Areas & Governance",
    "cred-title": "DNA Enterprise, Agilità da Venture Builder.",
    "cred-desc": "AverisTech non è una software house tradizionale: uniamo una profonda esperienza direzionale nella consulenza tecnologica internazionale a un approccio lean per concepire, costruire e scalare prodotti digitali proprietari.",
    "ca-1-title": "Digital Venture Building & Software Engineering",
    "ca-1-desc": "Ideazione, progettazione architetturale e sviluppo end-to-end di prodotti digitali scalabili.",
    "ca-2-title": "AI Architecture & Agentic Workflows",
    "ca-2-desc": "Agenti AI autonomi, Vision AI e orchestrazione LLM con supervisione Human-in-the-loop.",
    "ca-3-title": "SaaS Platforms & Marketplace Ecosystems",
    "ca-3-desc": "Piattaforme cloud multi-tenant B2B, B2B2C e applicazioni native per ecosistemi verticali.",
    "ca-4-title": "Data Analytics & Market Intelligence",
    "ca-4-desc": "Motori di pricing predittivo, monitoraggio scostamenti e decisioni guidate dai dati in tempo reale.",
    "cred-c1-eyebrow": "Esperienza & Delivery",
    "cred-c1-title": "Oltre 20 anni di Eccellenza IT",
    "cred-c1-p1": "Guidiamo trasformazioni digitali complesse con la stessa rigorosa metodologia applicata nei progetti multi-milionari per le principali utility ed enterprise europee. Portiamo standard architetturali di livello enterprise (scalabilità, sicurezza Zero-Trust, governance) all'interno di soluzioni agili e verticali.",
    "cred-c2-eyebrow": "Trasferimento Tecnologico & R&D",
    "cred-c2-title": "Innovazione Validata dalla Ricerca",
    "cred-c2-p1": "Investiamo costantemente in attività di R&D interna e collaboriamo con il mondo universitario e della ricerca su temi avanzati quali Digital Twin, manutenzione predittiva e orchestrazione di Large Language Models, traducendo la ricerca scientifica in software stabili e conformi alle normative europee.",
    "about-vision-title": "La Nostra Vision",
    "about-vision-text": "Trasformare tecnologie complesse in soluzioni digitali intuitive e ad alto valore, capaci di abilitare sia le imprese che i consumatori finali attraverso ecosistemi interconnessi, sicuri e scalabili.",
    "about-mission-title": "La Nostra Mission",
    "about-mission-text": "Sviluppare piattaforme SaaS e agenti di Intelligenza Artificiale che eliminano i colli di bottiglia operativi, proteggono i margini aziendali e generano impatto misurabile fin dai primi giorni di utilizzo.",

    // 3. Ecosistema: Flagship Product (inQuadra) + Portfolio
    "core-tag": "Ecosistema Prodotti • Flagship B2B & Venture Portfolio",
    "core-title": "Le Piattaforme AverisTech: Da inQuadra al Venture Lab.",
    "core-desc": "Come technology hub alimentiamo un portafoglio diversificato di prodotti digitali scalabili, guidato dalla nostra piattaforma B2B flagship inQuadra e dai nostri ecosistemi verticali proprietari.",
    "core-pill-badge": "Flagship Product B2B",
    "core-sector-badge": "Logistica • GDO • Manifattura • Procurement ISO 9001",
    "core-inquadra-sub": "inQuadra: L'Intelligenza Applicata al Ciclo Passivo",
    "core-lead": "La riconciliazione manuale dei documenti di trasporto e delle fatture drena risorse, genera errori contabili e rallenta la chiusura dei bilanci. inQuadra è la piattaforma B2B SaaS che automatizza l'intero processo di riconciliazione a 3 vie.",
    "core-p1-title": "Riconciliazione a 3 Vie Automatizzata",
    "core-p1-desc": "Confronto semantico e numerico in tempo reale tra Ordini di Acquisto, DDT e Fatture Elettroniche (XML SDI). Evidenzia solo le anomalie, azzerando i tempi di verifica sulle transazioni conformi.",
    "core-p2-title": "Vision AI & OCR Avanzato",
    "core-p2-desc": "Estrazione intelligente da documenti cartacei e PDF non strutturati con comprensione del contesto logistico e commerciale della riga articolo.",
    "core-p3-title": "Price Intelligence & Vendor Rating",
    "core-p3-desc": "Monitoraggio costante degli scostamenti di prezzo e valutazione oggettiva delle performance fornitori per la compliance ISO 9001.",
    "core-p4-title": "Integrazione ERP Non Invasiva (API RESTful & Webhook)",
    "core-p4-desc": "Architettura a microservizi tech-agnostic basata su API RESTful e connettori asincroni per integrarsi senza attrito con TeamSystem, Danea, Zucchetti, SAP, Passepartout e flussi SDI.",
    "core-cta-primary": "Esplora la Piattaforma inQuadra →",
    "core-cta-roi": "Simula il ROI Aziendale",
    "core-arch-header": "INQUADRA ENGINE • MICROSERVIZI RESTFUL",
    "core-arch-live": "● ATTIVO IN PRODUZIONE",
    "core-arch-n1-title": "Vision AI & Ingestione XML SDI",
    "core-arch-n1-desc": "Comprensione semantica di PDF, scansioni DDT, Ordini e Fatture SDI",
    "core-arch-n1-badge": "Vision AI 99,4%",
    "core-arch-n2-title": "Riconciliazione a 3 Vie (Ordine • DDT • Fattura)",
    "core-arch-n2-desc": "Evidenziazione esclusiva delle anomalie e zero tempo sulle transazioni conformi",
    "core-arch-n2-badge": "< 1 sec / doc",
    "core-arch-n3-title": "Price Intelligence & Vendor Rating ISO 9001",
    "core-arch-n3-desc": "Analisi storica prezzi al singolo pezzo e KPI oggettivi di conformità fornitore",
    "core-arch-n3-badge": "Audit & KPI",
    "core-arch-n4-title": "Gateway API RESTful & Connettori ERP",
    "core-arch-n4-desc": "Sincronizzazione bidirezionale non invasiva con il gestionale ERP",
    "core-arch-n4-badge": "Zero Attrito ERP",
    "core-arch-erp-label": "Integrazione nativa senza attrito con:",
    "cred-venture-btn": "Esplora il Venture Lab completo →",

    // 4. Tech Stack & Architetture (Agentic AI & Cloud)
    "innov-tag": "Tech Stack • Architetture Cloud-Native & Agentiche",
    "innov-title": "Architetture Cloud & Sistemi Agentici.",
    "innov-desc": "Ogni piattaforma AverisTech poggia su un'infrastruttura cloud-native comune: architetture a microservizi leggere, performanti e self-hosted, progettate internamente e messe a disposizione anche per progetti enterprise ad alta complessità.",
    "arch-p1-eyebrow": "01 • Agentic AI & Automazione",
    "arch-p1-title": "Agenti Digitali Autonomi & Logiche Human-in-the-Loop",
    "arch-p1-desc": "Sviluppo di agenti digitali autonomi integrati con LLM (Large Language Models). Implementiamo logiche Human-in-the-loop dove l'IA analizza i dati (es. qualificazione automatica dei lead, triage del customer care, audit documentale) e il management approva le decisioni tramite gateway sicuri e asincroni.",
    "arch-p2-eyebrow": "02 • Cloud Infrastructure & Backend",
    "arch-p2-title": "Microservizi ad Alte Prestazioni & Risposta < 400ms",
    "arch-p2-desc": "Approccio technology-agnostic: scegliamo lo stack più adatto al caso d'uso (ad es. backend in Python/FastAPI, Node.js/TypeScript o Go, database relazionali e vettoriali come PostgreSQL e sistemi di caching distribuito come Redis) per garantire idempotenza, sicurezza e tempi di risposta sotto i 400ms.",
    "tech-1-title": "Architetture Cloud-Native & Microservizi",
    "tech-1-desc": "Sistemi distribuiti multi-tenant orientati agli eventi, leggeri, performanti e predisposti per il deployment self-hosted o cloud.",
    "tech-2-title": "Agentic AI & Data Analytics",
    "tech-2-desc": "Agenti autonomi e motori predittivi con validazione Human-in-the-loop per decisioni operative sicure e tracciabili.",
    "tech-3-title": "Ingegneria Backend & Data Layer Agnostica",
    "tech-3-desc": "Selezione mirata di runtime e motori dati (es. Python/FastAPI, TypeScript, PostgreSQL, Redis o alternative cloud-native) per transazioni idempotenti e latenze sotto i 400ms.",
    "tech-4-title": "Sicurezza Zero-Trust & GDPR",
    "tech-4-desc": "Sovranità del dato su server UE, isolamento rigoroso dei tenant e politica di Zero Data Retention sui modelli AI.",

    // 5. Venture Lab & Portfolio
    "vlab-sec-tag": "Venture Lab & R&D Portfolio",
    "vlab-sec-title": "Le Altre Piattaforme dell'Ecosistema",
    "vlab-sec-intro": "AverisTech è un incubatore continuo di tecnologia. Nel nostro Venture Lab progettiamo, testiamo e scaliamo piattaforme digitali proprietarie che affrontano sfide verticali complesse. Questi Proof of Concept operativi dimostrano la nostra capacità di esecuzione end-to-end.",
    "vlab-tag": "R&D • Incubatore Tecnologico & Spin-Off",
    "vlab-title": "Venture Lab & R&D Portfolio.",
    "vlab-intro": "AverisTech è un incubatore continuo di tecnologia. Nel nostro Venture Lab progettiamo, testiamo e scaliamo piattaforme digitali proprietarie che affrontano sfide verticali complesse. Questi Proof of Concept operativi dimostrano la nostra capacità di esecuzione end-to-end.",
    "vlab-status-poc": "Piattaforma Attiva",
    "vlab-wroomy-desc": "Motore SaaS di Market Intelligence per il settore automotive. Sfrutta l'algoritmo proprietario AutoScore™ per il pricing predittivo e la valutazione dei veicoli in tempo reale analizzando ampi set di dati di mercato.",
    "vlab-wroomy-b1": "Data Ingestion Real-Time: aggregazione e pulizia continua di migliaia di data-point dal mercato automotive secondario.",
    "vlab-wroomy-b2": "Algoritmo AutoScore™: stima predittiva del valore reale incrociando deprezzamento, chilometraggio, allestimento e domanda locale.",
    "vlab-wroomy-b3": "Modello B2B & B2C: dashboard analitica e API per dealer/flotte affiancate dal portale di valutazione per privati.",
    "vlab-petsgo-desc": "Ecosistema digitale integrato per il settore pet care e la telemedicina veterinaria. Un'infrastruttura ad alta scalabilità che connette app mobili native (iOS/Android) con dashboard cliniche B2B per libretti sanitari e prenotazioni.",
    "vlab-petsgo-b1": "App Mobile iOS & Android: pubblicata su App Store e Google Play per gestire libretto sanitario digitale, vaccini e profili pet.",
    "vlab-petsgo-b2": "Booking & CRM Strutture: piattaforma B2B2C che connette proprietari di animali con cliniche veterinarie e professionisti.",
    "vlab-petsgo-b3": "Architettura Headless Cloud: backend reattivo progettato per alte concorrenze, notifiche smart e triage assistito da AI.",
    "vlab-managed-title": "Infrastrutture Managed",
    "vlab-flh-desc": "Piattaforme di automazione per il deployment continuo e l'hosting ottimizzato, garantendo isolamento dei tenant, provisioning rapido e sicurezza Zero-Trust per professionisti e ambienti applicativi dedicati.",
    "vlab-flh-b1": "Cloud Provisioning Automatizzato: ambienti di hosting ottimizzati e gestione semplificata per sviluppatori e consulenti digitali.",
    "vlab-flh-b2": "Hub Tecnico & Community: osservatorio editoriale su strumenti cloud, produttività e infrastrutture per il lavoro indipendente.",
    "vlab-flh-b3": "Evoluzione Vendor Management: laboratorio per moduli B2B dedicati all'onboarding e gestione di collaboratori esterni per le PMI.",
    "vlab-card-cta": "Scheda Architetturale →",
    "vlab-explore-all": "Venture Lab →",
    "vlab-method-tag": "Metodo & Sinergia Industriale",
    "vlab-method-title": "Perché un Venture Lab Interno",
    "vlab-method-desc": "Ogni progetto del Venture Lab nasce con un doppio obiettivo: creare valore nel proprio mercato verticale e collaudare sul campo tecnologie che rendono più solide le nostre soluzioni B2B.",
    "vlab-m1-title": "1. Validazione su Carichi Reali",
    "vlab-m1-desc": "Non ci limitiamo a prototipi teorici: portiamo le nostre piattaforme in produzione con utenti attivi, app sugli store ufficiali e flussi di dati continui per testare tenuta, usabilità e performance.",
    "vlab-m2-title": "2. Componenti & IP Condivisa",
    "vlab-m2-desc": "Le pipeline di raccolta dati, i motori di Machine Learning e i moduli di autenticazione multi-tenant sviluppati nel Lab costituiscono una base tecnologica proprietaria già collaudata per i progetti Enterprise.",
    "vlab-m3-title": "3. Ingegneria Full-Stack In-House",
    "vlab-m3-desc": "Dal design delle interfacce e sviluppo nativo iOS/Android fino al deployment Cloud e all'addestramento dei modelli predittivi, ogni singolo componente è progettato e mantenuto dal team AverisTech.",
    "vlab-banner-title": "Vuoi applicare le nostre tecnologie AI ai processi della tua azienda?",
    "vlab-banner-desc": "Scopri come gli algoritmi e le architetture validate nel nostro Venture Lab alimentano la piattaforma B2B inQuadra.",

    // Legacy / Shared Keys (kept clean for secondary pages)
    "status-active": "Progetto Attivo",
    "inquadra-title": "inQuadra",
    "petsgo-title": "Petsgo",
    "wroomy-title": "Wroomy",
    "freelancerhost-title": "FreelancerHost",

    // Contact Section
    "contact-tag": "Consulenza, Partnership & Soluzioni",
    "contact-title": "Parla con Noi",
    "contact-desc": "Affianchiamo i nostri clienti nella trasformazione dei processi aziendali e nello sviluppo di ecosistemi digitali ad alto valore. Contattaci per approfondire le nostre piattaforme o richiedere una sessione dedicata.",
    "contact-location-label": "Sede Legale & Operativa",
    "contact-location-val": "Via del prato 27 — 00172 Roma (RM)",
    "contact-email-label": "Email Direzione & Demo",
    "contact-pec-label": "PEC Istituzionale",

    // Form Labels & Placeholders
    "form-name-label": "Nome e Cognome",
    "form-email-label": "Indirizzo Email",
    "form-subject-label": "Oggetto del Messaggio",
    "form-message-label": "Il tuo Messaggio",
    "form-btn-submit": "Invia Messaggio",
    "form-success": "Messaggio inviato con successo! Ti risponderemo a breve.",

    // Footer
    "footer-about-short": "AverisTech S.r.l. — Digital Venture Builder e Technology Holding dedicata alla progettazione, ingegnerizzazione e scaling di piattaforme SaaS ed ecosistemi AI-driven.",
    "footer-heading-links": "Architettura & Piattaforme",
    "footer-heading-legal": "Pubblicità Legale (Startup)",
    "footer-company-label": "Ragione Sociale: ",
    "footer-company-val": "AverisTech S.r.l. (Startup Innovativa)",
    "footer-piva-label": "P. IVA / C.F.: ",
    "footer-piva-val": "18664161009",
    "footer-rea-label": "Sede Legale: ",
    "footer-rea-val": "Via del prato 27 - 00172 - Roma (RM)",
    "footer-capitale-label": "Capitale Sociale: ",
    "footer-capitale-val": "€ 4.500,00 interamente versato",
    "footer-pec-label": "PEC Ufficiale: ",
    "footer-copy": "© 2026 AverisTech S.r.l. - Startup Innovativa - Tutti i diritti riservati.",
    "footer-privacy": "Informativa sulla Privacy",
    "footer-cookie": "Informativa sui Cookie",
    "footer-terms": "Note Legali",

    // Legal Policies (IT)
    "policy-back-btn": "← Torna alla Home",
    "privacy-page-title": "Informativa sulla Privacy (Privacy Policy)",
    "privacy-page-sub": "Ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR)",
    "privacy-s1-title": "1. Titolare del Trattamento",
    "privacy-s1-text": "Titolare del trattamento è AverisTech S.r.l., Startup Innovativa (in attesa di costituzione) con sede legale in Via del prato 27 - 00172 - Roma, PEC: averistech@pec.it.",
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
    "legal-s1-text": "AverisTech S.r.l. — Startup Innovativa (in attesa di costituzione). Sede Legale: Via del prato 27 - 00172 - Roma (RM), Italia. Partita IVA / Codice Fiscale: 18664161009. Capitale Sociale: € 4.500,00 interamente versato. PEC: averistech@pec.it. Iscrizione al Registro delle Imprese di Roma - Sezione Speciale Startup Innovative.",
    "legal-s2-title": "2. Oggetto Sociale e Progetti di Portafoglio",
    "legal-s2-text": "AverisTech opera come Startup ad alto valore tecnologico ai sensi della legislazione italiana, con oggetto sociale dedicato allo sviluppo, produzione e commercializzazione di prodotti e servizi innovativi, detenendo la proprietà intellettuale e lo sviluppo dei progetti: petsgo.it (ecosistema digitale per pet care e benessere), wroomy.it (mobilità intelligente e SaaS automotive) e freelancerhost.com (piattaforma per liberi professionisti e agenzie).",
    "legal-s3-title": "3. Proprietà Intellettuale e Copyright",
    "legal-s3-text": "Tutti i contenuti, marchi, loghi (inclusi i monogrammi AverisTech, Wroomy, Petsgo, FreelancerHost), testi, codice sorgente e layout presenti su questo sito sono tutelati dalle leggi sul diritto d'autore e proprietà industriale. È vietata la riproduzione non autorizzata.",

    // Project Pages Common
    "project-btn-visit": "Visita il sito live",
    "project-preview-tag": "UI/UX Design",
    "project-preview-title": "Anteprima Piattaforma",

    // Petsgo Detail Page
    "petsgo-page-tag": "Pet Care Ecosystem",
    "petsgo-hero-desc": "La piattaforma definitiva per il benessere degli animali domestici. Un ecosistema centralizzato per pet lovers e professionisti, basato su un'architettura headless ultra-veloce.",
    "petsgo-btn-appstore": "Scarica su App Store",
    "petsgo-c1-title": "La Sfida di Mercato",
    "petsgo-c1-desc": "Il settore pet care soffre di una cronica frammentazione. I pet lovers navigano tra decine di app diverse, mentre le cliniche utilizzano software B2B obsoleti, perdendo efficienza operativa.",
    "petsgo-c2-title": "L'Ecosistema Elettronico",
    "petsgo-c2-desc": "Un booking engine proprietario che automatizza appuntamenti e cartelle cliniche, integrando intelligenza artificiale per un triage virtuale preliminare e supporto utente 24/7.",
    "petsgo-c3-title": "Modello B2B2C",
    "petsgo-c3-desc": "Serve milioni di proprietari di animali con standard premium (B2C) e contemporaneamente fornisce a cliniche e toelettatori un SaaS (B2B) per azzerare i costi di acquisizione.",
    "petsgo-callout-tag": "Applicazione Mobile iOS & Android",
    "petsgo-callout-title": "Porta Petsgo sempre con te",
    "petsgo-callout-desc": "Scarica l'applicazione ufficiale per iOS e Android da Apple App Store o Google Play Store per gestire libretto sanitario, promemoria vaccini e consulti ovunque ti trovi.",
    "petsgo-callout-btn": "Scarica dall'App Store",

    // Wroomy Detail Page
    "wroomy-page-tag": "Automotive SaaS",
    "wroomy-hero-desc": "Il Motore Predittivo per la compravendita di veicoli usati. Valutazioni precise e in tempo reale guidate da un Autoscore Engine avanzato.",
    "wroomy-c1-title": "L'Inefficienza Sistemica",
    "wroomy-c1-desc": "Il mercato automotive soffre di opacità. I dealer perdono ore in valutazioni manuali su listini obsoleti, mentre il consumatore finale diffida delle quotazioni discordanti.",
    "wroomy-c2-title": "L'Oracolo dei Dati",
    "wroomy-c2-desc": "Wroomy introduce l'Autoscore Engine. Un algoritmo che aggrega, pulisce e normalizza migliaia di data-point in tempo reale tramite scraping asincrono e modelli AI predittivi.",
    "wroomy-c3-title": "Posizionamento Doppio",
    "wroomy-c3-desc": "Un modulo enterprise B2B (API e dashboard) per dealer e flotte aziendali, unito a un portale B2C per fornire ai guidatori privati quotazioni trasparenti e sicure.",

    // FreelancerHost Detail Page
    "flh-page-tag": "Community Hub & B2B Matchmaking",
    "flh-hero-desc": "La piattaforma editoriale e gestionale in evoluzione verso un SaaS per il Vendor Management di talenti e fornitori esterni.",
    "flh-c1-title": "La Gestione dei Fornitori",
    "flh-c1-desc": "PMI e agenzie digitali si affidano spesso a talenti esterni per scalare. Tuttavia, gestire una rete frammentata di professionisti comporta enormi sfide amministrative e comunicative.",
    "flh-c2-title": "Da Hub a B2B SaaS",
    "flh-c2-desc": "Nato come polo editoriale ricco di insight per il mercato freelance, è oggi in transizione verso un vero software di Vendor Management e onboarding automatizzato per aziende.",
    "flh-c3-title": "Ecosistema Ibrido",
    "flh-c3-desc": "Un'audience dinamica composta da prosumer digitali (freelance in cerca di risorse) e PMI in rapida crescita che necessitano di soluzioni B2B per l'un-scaling e l'outsourcing."
  },

  en: {
    // Navigation (Corporate Tech Venture + Flagship IA)
    "nav-home": "Home",
    "nav-inquadra": "inQuadra",
    "nav-agentic": "Agentic AI",
    "nav-venture": "Venture Lab",
    "nav-company": "Company & Partners",
    "nav-contact": "Contact",
    "nav-cta-demo": "Talk to Us",
    "nav-about": "Company & Partners",
    "nav-portfolio": "inQuadra",
    "nav-innovation": "Agentic AI",

    // 1. Hero Section (Above the Fold — Digital Venture Builder & Tech Holding)
    "hero-badge": "Digital Venture Builder • Technology Holding • Agentic AI",
    "hero-title": "Conceptualizing, Engineering, and Scaling Next-Gen SaaS & AI Ecosystems.",
    "hero-subtitle": "AverisTech is a digital venture builder and technology holding company. Operating at the intersection of advanced software architecture, data intelligence, and market innovation, we transform complex technology into high-value digital solutions for businesses and consumers alike.",
    "hero-btn-primary": "Explore the Ecosystem",
    "hero-btn-secondary": "DNA & Track Record",
    "kpi-1-val": "20+ Years",
    "kpi-1-label": "Executive IT Excellence",
    "kpi-2-val": "4 Platforms",
    "kpi-2-label": "Active Proprietary Assets",
    "kpi-3-val": "Agentic AI",
    "kpi-3-label": "Cloud-Native & LLM Stack",
    "kpi-4-val": "Zero-Trust",
    "kpi-4-label": "Multi-Tenant Isolation & GDPR",

    // 2. About Us, Core Areas & Track Record
    "cred-tag": "Technology Hub • Core Areas & Governance",
    "cred-title": "Enterprise DNA, Venture Builder Agility.",
    "cred-desc": "AverisTech is not a traditional software house: we combine deep executive experience in international technology consulting with a lean approach to conceptualize, engineer, and scale proprietary digital products.",
    "ca-1-title": "Digital Venture Building & Software Engineering",
    "ca-1-desc": "Strategic ideation, architectural design, and end-to-end engineering of scalable digital products.",
    "ca-2-title": "AI Architecture & Agentic Workflows",
    "ca-2-desc": "Autonomous AI agents, Vision AI, and LLM orchestration with Human-in-the-loop governance.",
    "ca-3-title": "SaaS Platforms & Marketplace Ecosystems",
    "ca-3-desc": "High-concurrency multi-tenant B2B, B2B2C platforms, and native applications for vertical ecosystems.",
    "ca-4-title": "Data Analytics & Market Intelligence",
    "ca-4-desc": "Predictive pricing engines, price deviation monitoring, and real-time data-driven decision pipelines.",
    "cred-c1-eyebrow": "Experience & Delivery",
    "cred-c1-title": "Over 20 Years of IT Excellence",
    "cred-c1-p1": "We lead complex digital transformations with the same rigorous methodology applied in multi-million euro projects for major European utilities and enterprises. We bring enterprise-grade architectural standards (scalability, Zero-Trust security, governance) into agile, vertical solutions.",
    "cred-c2-eyebrow": "Technology Transfer & R&D",
    "cred-c2-title": "Research-Validated Innovation",
    "cred-c2-p1": "We continuously invest in internal R&D and collaborate with the university and research ecosystem on advanced topics such as Digital Twins, predictive maintenance, and Large Language Model orchestration, translating scientific research into stable, EU-compliant industrial software.",
    "about-vision-title": "Our Vision",
    "about-vision-text": "Transforming complex technology into intuitive, high-value digital solutions that empower consumers and businesses alike through interconnected, secure, and scalable ecosystems.",
    "about-mission-title": "Our Mission",
    "about-mission-text": "Building SaaS platforms and Artificial Intelligence agents that eliminate operational bottlenecks, safeguard corporate margins, and deliver measurable business impact from day one.",

    // 3. Ecosystem: Flagship Product (inQuadra) + Venture Portfolio
    "core-tag": "Product Ecosystem • Flagship B2B & Venture Portfolio",
    "core-title": "AverisTech Platforms: From inQuadra to the Venture Lab.",
    "core-desc": "As a technology hub, AverisTech powers a diverse portfolio of scalable digital products, led by our flagship B2B SaaS platform inQuadra alongside our proprietary vertical ecosystems.",
    "core-pill-badge": "Flagship Product B2B",
    "core-sector-badge": "Logistics • Retail & FMCG • Manufacturing • ISO 9001 Procurement",
    "core-inquadra-sub": "inQuadra: Intelligence Applied to Accounts Payable",
    "core-lead": "Manual reconciliation of delivery notes and invoices drains resources, generates accounting errors, and slows down financial closing. inQuadra is the B2B SaaS platform that automates the entire 3-way reconciliation process.",
    "core-p1-title": "Automated 3-Way Reconciliation",
    "core-p1-desc": "Real-time semantic and numerical cross-checking between Purchase Orders, Delivery Notes (DDT), and Electronic Invoices (SDI XML). Highlights only anomalies, eliminating verification time on compliant transactions.",
    "core-p2-title": "Vision AI & Advanced OCR",
    "core-p2-desc": "Intelligent extraction from paper documents and unstructured PDFs with full comprehension of the logistical and commercial context of each line item.",
    "core-p3-title": "Price Intelligence & Vendor Rating",
    "core-p3-desc": "Continuous monitoring of price deviations and objective supplier performance evaluation supporting ISO 9001 compliance.",
    "core-p4-title": "Non-Invasive ERP Integration (RESTful APIs & Webhooks)",
    "core-p4-desc": "Tech-agnostic microservices architecture built on RESTful APIs and asynchronous connectors for frictionless integration with TeamSystem, Danea, Zucchetti, SAP, Passepartout, and SDI streams.",
    "core-cta-primary": "Explore the inQuadra Platform →",
    "core-cta-roi": "Simulate Corporate ROI",
    "core-arch-header": "INQUADRA ENGINE • RESTFUL MICROSERVICES",
    "core-arch-live": "● LIVE IN PRODUCTION",
    "core-arch-n1-title": "Vision AI & SDI XML Ingestion",
    "core-arch-n1-desc": "Semantic comprehension of PDFs, scanned delivery notes, POs, and SDI Invoices",
    "core-arch-n1-badge": "Vision AI 99.4%",
    "core-arch-n2-title": "3-Way Reconciliation (Order • Delivery Note • Invoice)",
    "core-arch-n2-desc": "Exclusive anomaly highlighting with zero time spent on compliant transactions",
    "core-arch-n2-badge": "< 1 sec / doc",
    "core-arch-n3-title": "Price Intelligence & ISO 9001 Vendor Rating",
    "core-arch-n3-desc": "Historical unit-price analysis and objective supplier compliance KPIs",
    "core-arch-n3-badge": "Audit & KPIs",
    "core-arch-n4-title": "RESTful API Gateway & ERP Connectors",
    "core-arch-n4-desc": "Non-invasive bidirectional synchronization with your ERP",
    "core-arch-n4-badge": "Zero ERP Friction",
    "core-arch-erp-label": "Frictionless native integration with:",
    "cred-venture-btn": "Explore the Full Venture Lab →",

    // 4. Tech Stack & Architectures (Agentic AI & Cloud)
    "innov-tag": "Tech Stack • Cloud-Native & Agentic Architectures",
    "innov-title": "Cloud Architectures & Agentic Systems.",
    "innov-desc": "Every AverisTech platform rests on a shared cloud-native foundation: lightweight, high-performance, self-hosted microservices architectures engineered in-house and also deployed for high-complexity enterprise initiatives.",
    "arch-p1-eyebrow": "01 • Agentic AI & Automation",
    "arch-p1-title": "Autonomous Digital Agents & Human-in-the-Loop Workflows",
    "arch-p1-desc": "Development of autonomous digital agents integrated with LLMs (Large Language Models). We implement Human-in-the-loop logic where AI analyzes data (e.g., automated lead qualification, customer care triage, document audit) and management approves decisions via secure asynchronous gateways.",
    "arch-p2-eyebrow": "02 • Cloud Infrastructure & Backend",
    "arch-p2-title": "High-Performance Microservices & < 400ms Latency",
    "arch-p2-desc": "Technology-agnostic engineering: we select the optimal stack for each domain (e.g., Python/FastAPI, Node.js/TypeScript or Go backends, relational and vector databases such as PostgreSQL, and distributed caching layers like Redis) to guarantee idempotency, security, and sub-400ms response times.",
    "tech-1-title": "Cloud-Native & Microservices Architecture",
    "tech-1-desc": "Event-driven multi-tenant distributed systems—lightweight, performant, and ready for self-hosted or cloud deployment.",
    "tech-2-title": "Agentic AI & Data Analytics",
    "tech-2-desc": "Autonomous agents and predictive engines with Human-in-the-loop validation for secure, traceable operational decisions.",
    "tech-3-title": "Stack-Agnostic Backend & Data Layer",
    "tech-3-desc": "Targeted selection of runtimes and data engines (e.g., Python/FastAPI, TypeScript, PostgreSQL, Redis, or cloud-native alternatives) for idempotent transactions and sub-400ms latency.",
    "tech-4-title": "Zero-Trust Security & GDPR",
    "tech-4-desc": "EU data sovereignty, strict multi-tenant isolation, and a Zero Data Retention policy across AI models.",

    // 5. Venture Lab & Portfolio
    "vlab-sec-tag": "Venture Lab & R&D Portfolio",
    "vlab-sec-title": "Other Ecosystem Platforms",
    "vlab-sec-intro": "AverisTech is a continuous technology incubator. In our Venture Lab we design, test, and scale proprietary digital platforms tackling complex vertical challenges. These operational Proof of Concepts demonstrate our end-to-end execution capability.",
    "vlab-tag": "R&D • Technology Incubator & Spin-Offs",
    "vlab-title": "Venture Lab & R&D Portfolio.",
    "vlab-intro": "AverisTech is a continuous technology incubator. In our Venture Lab we design, test, and scale proprietary digital platforms tackling complex vertical challenges. These operational Proof of Concepts demonstrate our end-to-end execution capability.",
    "vlab-status-poc": "Active Platform",
    "vlab-wroomy-desc": "Market Intelligence SaaS engine for the automotive sector. Leverages the proprietary AutoScore™ algorithm for predictive pricing and real-time vehicle valuation by analyzing large-scale market datasets.",
    "vlab-wroomy-b1": "Real-Time Data Ingestion: continuous aggregation and normalization of thousands of secondary automotive market data points.",
    "vlab-wroomy-b2": "AutoScore™ Algorithm: predictive fair-value estimation cross-referencing depreciation curves, mileage, trim, and local demand.",
    "vlab-wroomy-b3": "B2B & B2C Model: analytics dashboard and APIs for dealerships and fleets paired with a transparent consumer valuation portal.",
    "vlab-petsgo-desc": "Integrated digital ecosystem for the pet care sector and veterinary telemedicine. A high-scalability infrastructure connecting native mobile apps (iOS/Android) with B2B clinical dashboards for health records and bookings.",
    "vlab-petsgo-b1": "iOS & Android Mobile App: live on the App Store and Google Play to manage digital health records, vaccines, and pet profiles.",
    "vlab-petsgo-b2": "Clinic Booking & CRM: B2B2C platform connecting pet owners with veterinary clinics, groomers, and pet care professionals.",
    "vlab-petsgo-b3": "Headless Cloud Architecture: reactive backend engineered for high concurrency, smart notifications, and AI-assisted triage.",
    "vlab-managed-title": "Managed Infrastructures",
    "vlab-flh-desc": "Automation platforms for continuous deployment and optimized hosting, guaranteeing tenant isolation, rapid provisioning, and Zero-Trust security for digital professionals and dedicated application environments.",
    "vlab-flh-b1": "Automated Cloud Provisioning: optimized hosting environments and simplified management for developers and digital consultants.",
    "vlab-flh-b2": "Technical Hub & Community: editorial observatory covering cloud tools, productivity stacks, and independent work infrastructure.",
    "vlab-flh-b3": "Vendor Management Evolution: R&D lab for B2B modules dedicated to external contractor onboarding and governance for SMBs.",
    "vlab-card-cta": "Architectural Sheet →",
    "vlab-explore-all": "Venture Lab →",
    "vlab-method-tag": "Method & Industrial Synergy",
    "vlab-method-title": "Why an Internal Venture Lab",
    "vlab-method-desc": "Every Venture Lab initiative serves a dual purpose: delivering value in its vertical market while field-testing technologies that strengthen our enterprise B2B solutions.",
    "vlab-m1-title": "1. Validation Under Real Workloads",
    "vlab-m1-desc": "We go beyond theoretical prototypes: we launch live platforms with active users, official mobile store releases, and continuous data streams to stress-test reliability, usability, and performance.",
    "vlab-m2-title": "2. Shared Components & Proprietary IP",
    "vlab-m2-desc": "Data ingestion pipelines, Machine Learning engines, and multi-tenant authentication modules built in the Lab form a battle-tested proprietary foundation for our Enterprise projects.",
    "vlab-m3-title": "3. Full-Stack In-House Engineering",
    "vlab-m3-desc": "From UI/UX design and native iOS/Android development to Cloud deployment and predictive model training, every single component is architected and maintained by the AverisTech team.",
    "vlab-banner-title": "Want to apply our AI technologies to your enterprise processes?",
    "vlab-banner-desc": "Discover how the algorithms and architectures validated in our Venture Lab power the inQuadra B2B platform.",

    // Legacy / Shared Keys (kept clean for secondary pages)
    "status-active": "Active Project",
    "inquadra-title": "inQuadra",
    "petsgo-title": "Petsgo",
    "wroomy-title": "Wroomy",
    "freelancerhost-title": "FreelancerHost",

    // Contact Section
    "contact-tag": "CONSULTING, PARTNERSHIPS & SOLUTIONS",
    "contact-title": "Talk to Us",
    "contact-desc": "We support our clients in transforming business processes and building high-value digital ecosystems. Contact us to explore our platforms or request a dedicated session.",
    "contact-location-label": "Headquarters",
    "contact-location-val": "Via del prato 27 — 00172 Rome (RM)",
    "contact-email-label": "Executive & Demo Email",
    "contact-pec-label": "Certified Email (PEC)",

    // Form Labels & Placeholders
    "form-name-label": "Full Name",
    "form-email-label": "Email Address",
    "form-subject-label": "Subject",
    "form-message-label": "Your Message",
    "form-btn-submit": "Send Message",
    "form-success": "Message sent successfully! We will get back to you shortly.",

    // Footer
    "footer-about-short": "AverisTech S.r.l. — Digital venture builder and technology holding company dedicated to conceptualizing, engineering, and scaling next-generation SaaS platforms and AI-driven ecosystems.",
    "footer-heading-links": "Architecture & Platforms",
    "footer-heading-legal": "Corporate Disclosure (Startup)",
    "footer-company-label": "Company Name: ",
    "footer-company-val": "AverisTech S.r.l. (Innovative Startup)",
    "footer-piva-label": "VAT / Tax ID: ",
    "footer-piva-val": "18664161009",
    "footer-rea-label": "Registered Office: ",
    "footer-rea-val": "Via del prato 27 - 00172 - Rome (RM), Italy",
    "footer-capitale-label": "Share Capital: ",
    "footer-capitale-val": "€ 4,500.00 fully paid-in",
    "footer-pec-label": "Official PEC: ",
    "footer-copy": "© 2026 AverisTech S.r.l. - Innovative Startup - All rights reserved.",
    "footer-privacy": "Privacy Policy",
    "footer-cookie": "Cookie Policy",
    "footer-terms": "Legal Notes",

    // Legal Policies (EN)
    "policy-back-btn": "← Back to Home",
    "privacy-page-title": "Privacy Policy",
    "privacy-page-sub": "Pursuant to Articles 13 and 14 of EU Regulation 2016/679 (GDPR)",
    "privacy-s1-title": "1. Data Controller",
    "privacy-s1-text": "The Data Controller is AverisTech S.r.l., Innovative Startup (in the process of incorporation), registered office at Via del prato 27 - 00172 - Rome, Italy, PEC: averistech@pec.it.",
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
    "legal-s1-text": "AverisTech S.r.l. — Innovative Startup (in process of incorporation). Registered Office: Via del prato 27 - 00172 - Rome (RM), Italy. VAT / Tax ID: 18664161009. Share Capital: € 4,500.00 fully paid-in. PEC: averistech@pec.it. Registration with the Rome Business Register - Special Section for Innovative Startups.",
    "legal-s2-title": "2. Corporate Purpose and Portfolio Projects",
    "legal-s2-text": "AverisTech operates as an Innovative Startup with high technological value under Italian law, dedicated to the development, production, and commercialization of innovative products and services, holding intellectual property and development rights for: petsgo.it (pet care digital ecosystem), wroomy.it (smart mobility & automotive SaaS), and freelancerhost.com (platform for freelancers and agencies).",
    "legal-s3-title": "3. Intellectual Property and Copyright",
    "legal-s3-text": "All contents, trademarks, logos (including AverisTech, Petsgo, Wroomy, FreelancerHost emblems), text, source code, and layouts on this website are protected by copyright and intellectual property laws. Unauthorized reproduction is strictly prohibited.",

    // Project Pages Common
    "project-btn-visit": "Visit Live Site →",
    "project-preview-tag": "UI/UX Design",
    "project-preview-title": "Platform Preview",

    // Petsgo Detail Page
    "petsgo-page-tag": "Pet Care Ecosystem",
    "petsgo-hero-desc": "The ultimate platform for pet wellness. A centralized ecosystem for pet lovers and professionals, built on an ultra-fast headless architecture.",
    "petsgo-btn-appstore": "Download on App Store",
    "petsgo-c1-title": "Market Challenge",
    "petsgo-c1-desc": "The pet care industry suffers from chronic fragmentation. Pet owners navigate across dozens of disparate apps, while clinics rely on obsolete B2B software, losing operational efficiency.",
    "petsgo-c2-title": "Digital Ecosystem",
    "petsgo-c2-desc": "A proprietary booking engine automating appointments and clinical records, integrating artificial intelligence for virtual triage and 24/7 user support.",
    "petsgo-c3-title": "B2B2C Business Model",
    "petsgo-c3-desc": "Serves millions of pet owners with premium consumer standards (B2C) while providing veterinary clinics and groomers with a SaaS (B2B) that eliminates customer acquisition costs.",
    "petsgo-callout-tag": "iOS & Android Mobile Application",
    "petsgo-callout-title": "Always carry Petsgo with you",
    "petsgo-callout-desc": "Download the official iOS and Android application from the Apple App Store or Google Play Store to manage digital pet health records, vaccine reminders, and appointments wherever you are.",
    "petsgo-callout-btn": "Download on App Store",

    // Wroomy Detail Page
    "wroomy-page-tag": "Automotive SaaS",
    "wroomy-hero-desc": "The Predictive Engine for pre-owned vehicle transactions. Accurate, real-time vehicle valuations powered by an advanced Autoscore Engine.",
    "wroomy-c1-title": "Systemic Inefficiency",
    "wroomy-c1-desc": "The automotive secondary market lacks transparency. Dealerships waste hours on manual valuations with outdated price lists, while end consumers distrust conflicting appraisals.",
    "wroomy-c2-title": "Data-Driven Engine",
    "wroomy-c2-desc": "Wroomy introduces the Autoscore Engine: a proprietary algorithm aggregating, cleaning, and normalizing thousands of data points in real time via asynchronous ingestion and predictive AI models.",
    "wroomy-c3-title": "Dual Market Positioning",
    "wroomy-c3-desc": "An enterprise B2B module (API and analytics dashboard) for car dealers and fleet operators, combined with a high-conversion B2C portal giving private drivers clear, secure valuations.",

    // FreelancerHost Detail Page
    "flh-page-tag": "Community Hub & B2B Matchmaking",
    "flh-hero-desc": "The editorial and management platform evolving into an enterprise SaaS for Vendor Management of external talent and suppliers.",
    "flh-c1-title": "Vendor Management",
    "flh-c1-desc": "SMBs and digital agencies frequently rely on external contractors to scale. However, managing a fragmented network of freelancers creates substantial administrative and operational overhead.",
    "flh-c2-title": "From Hub to B2B SaaS",
    "flh-c2-desc": "Born as an editorial powerhouse packed with freelance market insights, it is now transitioning into a full Vendor Management software with automated contractor onboarding for enterprises.",
    "flh-c3-title": "Hybrid Ecosystem",
    "flh-c3-desc": "A high-engagement audience of digital prosumers (freelancers seeking tools and opportunities) paired with fast-growing SMBs that need dedicated B2B solutions for agile outsourcing."
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

    // Update official App Store and Google Play badges
    const badgeElements = document.querySelectorAll(".app-store-badge-img");
    badgeElements.forEach(img => {
      img.src = lang === "it" ? "media/app-store-badge-it.svg" : "media/app-store-badge-en.svg";
      img.alt = lang === "it" ? "Scarica su App Store" : "Download on the App Store";
    });

    const playBadgeElements = document.querySelectorAll(".google-play-badge-img");
    playBadgeElements.forEach(img => {
      img.src = lang === "it" ? "media/google-play-badge-it.svg" : "media/google-play-badge-en.svg";
      img.alt = lang === "it" ? "Disponibile su Google Play" : "Get it on Google Play";
    });
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
