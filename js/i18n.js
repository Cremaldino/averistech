/**
 * AverisTech - Internationalization (i18n) Module
 * Supports bilingual switching (Italian / English) with localStorage persistence
 */

const translations = {
  it: {
    // Navigation (Corporate Tech Venture + Flagship IA)
    "nav-home": "Home",
    "nav-company": "Chi Siamo",
    "nav-agentic": "Agentic AI & Tech",
    "nav-inquadra": "inQuadra",
    "nav-venture": "Venture Lab",
    "nav-contact": "Contatti",
    "nav-cta-demo": "Parla con Noi",
    "nav-about": "Chi Siamo",
    "nav-portfolio": "inQuadra",
    "nav-innovation": "Agentic AI & Tech",

    // Hero Section (AverisTech = Tech Venture & Partner Tecnologico)
    "hero-badge": "Tech Venture • Agentic AI • Cloud Architectures",
    "hero-title": "Ingegneria del Software e Agentic AI per l'Impresa che Evolve.",
    "hero-subtitle": "AverisTech è una Tech Venture e partner tecnologico d'eccellenza. Progettiamo architetture Cloud-Native, agenti di Intelligenza Artificiale autonomi e piattaforme SaaS proprietarie per trasformare i processi critici delle aziende in vantaggio competitivo.",
    "hero-btn-primary": "Scopri AverisTech",
    "hero-btn-secondary": "Esplora le Soluzioni",
    "kpi-1-val": "20+ Anni",
    "kpi-1-label": "Esperienza Direzionale IT",
    "kpi-2-val": "Agentic AI",
    "kpi-2-label": "Automazione Cognitiva Processi",
    "kpi-3-val": "4 Asset",
    "kpi-3-label": "Piattaforme Proprietarie Attive",
    "kpi-4-val": "Zero-Trust",
    "kpi-4-label": "Architetture Cloud UE & GDPR",

    // Core Product Section (inQuadra Flagship B2B Showcase)
    "core-tag": "Soluzioni Proprietarie • Flagship Product B2B",
    "core-title": "Dalla Nostra Ricerca: inQuadra",
    "core-desc": "La massima espressione della tecnologia Agentic AI di AverisTech applicata al mondo Enterprise: la piattaforma SaaS per l'automazione del Ciclo Attivo e Passivo e la riconciliazione a 3 vie.",
    "core-pill-badge": "Flagship B2B SaaS",
    "core-sector-badge": "Logistica • GDO • Manifattura • Servizi",
    "core-lead": "Il copilota di Agentic AI sviluppato da AverisTech che trasforma l'amministrazione da centro di costo a presidio automatico della marginalità operativa.",
    "core-p1-title": "Abbattimento dei Tempi del Ciclo Passivo e Attivo",
    "core-p1-desc": "Acquisizione Vision AI istantanea di ordini clienti, bolle di consegna e fatture fornitore da PDF, email e portali, eliminando fino al 90% del data entry manuale.",
    "core-p2-title": "Zero Errori nella Riconciliazione a 3 Vie (Ordine-DDT-Fattura)",
    "core-p2-desc": "Verifica incrociata riga per riga al centesimo tra Ordine d'Acquisto, Documento di Trasporto e Fattura SDI, con blocco cautelativo dei pagamenti anomali e generazione automatica delle contestazioni.",
    "core-p3-title": "Integrazione Nativa e Non Invasiva con ERP",
    "core-p3-desc": "Connessione rapida con TeamSystem, Danea, Zucchetti, SAP, Passepartout e flussi SDI XML tramite tracciati standard o API pronte, senza toccare il codice del gestionale.",
    "core-cta-primary": "Vai alla Pagina di inQuadra →",
    "core-cta-roi": "Simula il ROI Aziendale",
    "core-arch-header": "MOTORE DI RICONCILIAZIONE A 3 VIE",
    "core-arch-live": "● PRODOTTO ATTIVO",
    "core-arch-n1-title": "1. Ingestione Multicanale & SDI XML",
    "core-arch-n1-desc": "Estrazione semantica da PDF, Email, EDI e Sistema di Interscambio",
    "core-arch-n1-badge": "Vision AI 99,4%",
    "core-arch-n2-title": "2. Quadratura a 3 Vie (Ordine • DDT • Fattura)",
    "core-arch-n2-desc": "Verifica automatica prezzi unitari, quantità consegnate e listini",
    "core-arch-n2-badge": "< 1 sec / doc",
    "core-arch-n3-title": "3. Sincronizzazione Nativa ERP",
    "core-arch-n3-desc": "Scrittura contabile validata e sblocco pagamenti autorizzati",
    "core-arch-n3-badge": "Zero Data Entry",
    "core-arch-erp-label": "Integrazione nativa senza attrito con:",

    // Credibility & Trust Section (Chi Siamo)
    "cred-tag": "Chi Siamo • Visione & Solidità",
    "cred-title": "Un Partner Tecnologico Affidabile, con il DNA di una Tech Venture",
    "cred-desc": "Uniamo l'esperienza esecutiva di chi governa architetture informatiche complesse da oltre due decenni con la capacità di sviluppare internamente prodotti proprietari ad alto impatto.",
    "cred-c1-eyebrow": "Leadership & Track Record",
    "cred-c1-title": "Oltre 20 Anni nella Guida di Trasformazioni Digitali Complesse",
    "cred-c1-p1": "Il team fondatore e direttivo di AverisTech porta in dote oltre vent'anni di esperienza sul campo nell'architettura di sistemi enterprise, nell'integrazione di processi industriali critici e nella governance tecnologica per aziende strutturate.",
    "cred-c1-p2": "Affianchiamo il management aziendale (CFO, COO, CIO) come partner tecnologico verticale: progettiamo architetture destinate a durare nel tempo, sicure e con ritorni operativi misurabili.",
    "cred-c2-eyebrow": "Ricerca Applicata & Venture Building",
    "cred-c2-title": "Dalla Ricerca sull'Agentic AI a Soluzioni Industriali Concrete",
    "cred-c2-p1": "Investiamo costantemente in attività di R&D interna e collaboriamo con il mondo universitario e della ricerca per portare in azienda soluzioni di Intelligenza Artificiale concrete, affidabili e verificabili sul campo.",
    "cred-c2-p2": "Ogni tecnologia che proponiamo ai nostri clienti nasce nel nostro laboratorio interno, viene validata su casi d'uso reali e rilasciata secondo i più rigorosi standard europei di sicurezza e sovranità del dato.",
    "cred-venture-title": "Oltre inQuadra: Esplora l'Incubatore AverisTech Venture Lab",
    "cred-venture-desc": "inQuadra è il nostro prodotto di punta B2B, ma il nostro ecosistema tecnologico comprende anche spin-off e piattaforme verticali proprietarie (Wroomy, PetsGo, FreelancerHost) dove sperimentiamo algoritmi predittivi e architetture ad alta scalabilità.",
    "cred-venture-btn": "Esplora il Venture Lab →",

    // Venture Lab Page
    "vlab-tag": "R&D • Incubatore Tecnologico & Spin-Off",
    "vlab-title": "AverisTech Venture Lab",
    "vlab-intro": "Sviluppiamo tecnologie scalabili. Il nostro Venture Lab è l'incubatore interno dove testiamo algoritmi di Machine Learning, architetture multi-tenant e app mobile native prima di portarle sul mercato.",
    "vlab-status-poc": "Iniziativa Attiva",
    "vlab-wroomy-desc": "Motore proprietario di Market Intelligence e pricing predittivo basato su algoritmi di Machine Learning (AutoScore™).",
    "vlab-wroomy-b1": "Data Ingestion Real-Time: aggregazione e pulizia continua di migliaia di data-point dal mercato automotive secondario.",
    "vlab-wroomy-b2": "Algoritmo AutoScore™: stima predittiva del valore reale incrociando deprezzamento, chilometraggio, allestimento e domanda locale.",
    "vlab-wroomy-b3": "Modello B2B & B2C: dashboard analitica e API per dealer/flotte affiancate dal portale di valutazione per privati.",
    "vlab-petsgo-desc": "Ecosistema digitale mobile e cloud ad alta scalabilità (iOS/Android) sviluppato interamente in-house.",
    "vlab-petsgo-b1": "App Mobile iOS & Android: pubblicata su App Store e Google Play per gestire libretto sanitario digitale, vaccini e profili pet.",
    "vlab-petsgo-b2": "Booking & CRM Strutture: piattaforma B2B2C che connette proprietari di animali con cliniche veterinarie e professionisti.",
    "vlab-petsgo-b3": "Architettura Headless Cloud: backend reattivo progettato per alte concorrenze, notifiche smart e triage assistito da AI.",
    "vlab-flh-desc": "Infrastruttura di hosting e gestione cloud automatizzata per professionisti del digitale.",
    "vlab-flh-b1": "Cloud Provisioning Automatizzato: ambienti di hosting ottimizzati e gestione semplificata per sviluppatori e consulenti digitali.",
    "vlab-flh-b2": "Hub Tecnico & Community: osservatorio editoriale su strumenti cloud, produttività e infrastrutture per il lavoro indipendente.",
    "vlab-flh-b3": "Evoluzione Vendor Management: laboratorio per moduli B2B dedicati all'onboarding e gestione di collaboratori esterni per le PMI.",
    "vlab-card-cta": "Scheda Progetto →",
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
    "portfolio-desc": "Le nostre piattaforme tecnologiche proprietarie e soluzioni SaaS B2B, progettate per innovare e creare valore tangibile.",
    "status-active": "Progetto Attivo",

    // Project 1: inQuadra (inquadra.html)
    "inquadra-title": "inQuadra",
    "inquadra-desc": "Copilota AI per l'automazione integrata di Ciclo Attivo e Passivo aziendale. Riconciliazione automatica a 3 vie (Ordini, DDT, Fatture elettroniche) e connettori nativi per i principali ERP (Zucchetti, TeamSystem, SAP, Passepartout).",
    "inquadra-link": "Scopri di più su inQuadra →",

    // Project 2: petsgo.it
    "petsgo-title": "Petsgo",
    "petsgo-desc": "L'ecosistema tecnologico di riferimento per il benessere e la cura dei nostri animali domestici. Una piattaforma modulare che connette pet lover, veterinari e strutture di servizio con strumenti intuitivi e affidabili.",
    "petsgo-link": "Scopri di più su Petsgo →",

    // Project 2: wroomy.it
    "wroomy-title": "Wroomy",
    "wroomy-desc": "Piattaforma digitale avanzata per la mobilità intelligente e i servizi automotive ad alto valore aggiunto. Connette guidatori, flotte e servizi dedicati all'auto con un'esperienza digitale fluida e all'avanguardia.",
    "wroomy-link": "Scopri di più su Wroomy →",

    // Project 3: freelancerhost.com
    "freelancerhost-title": "FreelancerHost",
    "freelancerhost-desc": "Blog e hub informativo, in evoluzione verso un software B2B dedicato alle PMI per la gestione semplificata dei fornitori esterni (Vendor Management).",
    "freelancerhost-link": "Scopri di più su FreelancerHost →",

    // Innovation & Tech Section
    "innov-tag": "Competenze Core & Tecnologie",
    "innov-title": "Specialisti in Agentic AI e Architetture Cloud Scalabili",
    "innov-desc": "Costruiamo piattaforme proprietarie e soluzioni enterprise poggiando su quattro pilastri ingegneristici pensati per garantire continuità, velocità e precisione operativa.",
    "tech-1-title": "Piattaforme SaaS Multi-Tenant",
    "tech-1-desc": "Architetture Cloud-Native a microservizi progettate per scalare su alti volumi garantendo isolamento dei dati ed elasticità automatica.",
    "tech-2-title": "Agentic AI & Automazione Cognitiva",
    "tech-2-desc": "Sviluppiamo agenti AI capaci di comprendere documenti complessi, incrociare dati eterogenei ed eseguire workflow operativi autonomi.",
    "tech-3-title": "Integrazione ERP & Sistemi Legacy",
    "tech-3-desc": "Connettori non invasivi, API gateway e pipeline di sincronizzazione che potenziano i gestionali esistenti senza bloccare l'operatività.",
    "tech-4-title": "Sicurezza Zero-Trust & GDPR",
    "tech-4-desc": "Infrastrutture ospitate in Europa, crittografia end-to-end e rigorosa politica di Zero Data Retention sui dati aziendali dei clienti.",

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
    "contact-tag": "Consulenza & Soluzioni",
    "contact-title": "Parla con Noi",
    "contact-desc": "Affianchiamo i nostri clienti nella trasformazione dei processi aziendali. Contattaci per approfondire le nostre soluzioni o richiedere una sessione dedicata.",
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
    "footer-about-short": "AverisTech S.r.l. — Startup Innovativa specializzata in piattaforme SaaS B2B multi-tenant, architetture Cloud-Native e soluzioni di Agentic AI per l'ottimizzazione dei processi aziendali critici.",
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
    "nav-company": "About Us",
    "nav-agentic": "Agentic AI & Tech",
    "nav-inquadra": "inQuadra",
    "nav-venture": "Venture Lab",
    "nav-contact": "Contact",
    "nav-cta-demo": "Talk to Us",
    "nav-about": "About Us",
    "nav-portfolio": "inQuadra",
    "nav-innovation": "Agentic AI & Tech",

    // Hero Section (AverisTech = Tech Venture & Technology Partner)
    "hero-badge": "Tech Venture • Agentic AI • Cloud Architectures",
    "hero-title": "Software Engineering & Agentic AI for the Evolving Enterprise.",
    "hero-subtitle": "AverisTech is a Tech Venture and specialized technology partner. We engineer Cloud-Native architectures, autonomous Artificial Intelligence agents, and proprietary SaaS platforms to turn critical corporate processes into a competitive advantage.",
    "hero-btn-primary": "Discover AverisTech",
    "hero-btn-secondary": "Explore Solutions",
    "kpi-1-val": "20+ Years",
    "kpi-1-label": "Executive IT Experience",
    "kpi-2-val": "Agentic AI",
    "kpi-2-label": "Cognitive Process Automation",
    "kpi-3-val": "4 Assets",
    "kpi-3-label": "Active Proprietary Platforms",
    "kpi-4-val": "Zero-Trust",
    "kpi-4-label": "EU Cloud & GDPR Compliance",

    // Core Product Section (inQuadra Flagship B2B Showcase)
    "core-tag": "Proprietary Solutions • Flagship B2B Product",
    "core-title": "From Our Research: inQuadra",
    "core-desc": "The flagship expression of AverisTech's Agentic AI technology applied to the Enterprise: our SaaS platform for Accounts Payable & Receivable automation and 3-way reconciliation.",
    "core-pill-badge": "Flagship B2B SaaS",
    "core-sector-badge": "Logistics • Retail & FMCG • Manufacturing • Services",
    "core-lead": "The Agentic AI copilot developed by AverisTech that transforms administration from a cost center into an automated safeguard for operational margins.",
    "core-p1-title": "Drastic Reduction of Passive & Active Cycle Times",
    "core-p1-desc": "Instant Vision AI ingestion of customer orders, delivery notes, and supplier invoices from PDFs, emails, and portals—eliminating up to 90% of manual data entry.",
    "core-p2-title": "Zero-Error 3-Way Reconciliation (Order-Delivery Note-Invoice)",
    "core-p2-desc": "Line-by-line cross-verification down to the cent between Purchase Orders, Delivery Notes (DDT), and SDI Electronic Invoices, with automatic payment holds and dispute drafting.",
    "core-p3-title": "Native, Non-Invasive ERP Integration",
    "core-p3-desc": "Rapid connection with TeamSystem, Danea, Zucchetti, SAP, Passepartout, and SDI XML streams via standard layouts or ready-to-use APIs—without touching your ERP source code.",
    "core-cta-primary": "Go to the inQuadra Page →",
    "core-cta-roi": "Simulate Corporate ROI",
    "core-arch-header": "3-WAY RECONCILIATION ENGINE",
    "core-arch-live": "● ACTIVE PRODUCT",
    "core-arch-n1-title": "1. Multi-Channel & SDI XML Ingestion",
    "core-arch-n1-desc": "Semantic extraction from PDF, Email, EDI, and National Exchange System",
    "core-arch-n1-badge": "Vision AI 99.4%",
    "core-arch-n2-title": "2. 3-Way Matching (PO • Delivery Note • Invoice)",
    "core-arch-n2-desc": "Automated verification of unit prices, delivered quantities, and price lists",
    "core-arch-n2-badge": "< 1 sec / doc",
    "core-arch-n3-title": "3. Native ERP Synchronization",
    "core-arch-n3-desc": "Validated accounting entries and authorized payment release",
    "core-arch-n3-badge": "Zero Data Entry",
    "core-arch-erp-label": "Frictionless native integration with:",

    // Credibility & Trust Section (About Us)
    "cred-tag": "About Us • Vision & Solidity",
    "cred-title": "A Reliable Technology Partner with the DNA of a Tech Venture",
    "cred-desc": "We combine the executive experience of managing complex IT architectures for over two decades with the capability to build high-impact proprietary products in-house.",
    "cred-c1-eyebrow": "Leadership & Track Record",
    "cred-c1-title": "Over 20 Years Leading Complex Digital Transformations",
    "cred-c1-p1": "AverisTech's founding and executive team brings over twenty years of field experience in enterprise systems architecture, mission-critical industrial process integration, and IT governance for structured organizations.",
    "cred-c1-p2": "We partner with executive leadership (CFO, COO, CIO) as a vertical technology partner: designing architectures built to last, secure by design, and delivering measurable operational returns.",
    "cred-c2-eyebrow": "Applied R&D & Venture Building",
    "cred-c2-title": "From Agentic AI Research to Concrete Industrial Solutions",
    "cred-c2-p1": "We continuously invest in internal R&D and collaborate with the university and research ecosystem to bring concrete, reliable, and field-verified Artificial Intelligence solutions into the enterprise.",
    "cred-c2-p2": "Every technology we bring to our clients is born in our internal lab, validated on real-world use cases, and released under the strictest European security and data sovereignty standards.",
    "cred-venture-title": "Beyond inQuadra: Explore the AverisTech Venture Lab",
    "cred-venture-desc": "inQuadra is our flagship B2B product, while our broader ecosystem includes proprietary vertical platforms and spin-offs (Wroomy, PetsGo, FreelancerHost) where we field-test predictive algorithms and high-scalability architectures.",
    "cred-venture-btn": "Explore the Venture Lab →",

    // Venture Lab Page
    "vlab-tag": "R&D • Technology Incubator & Spin-Offs",
    "vlab-title": "AverisTech Venture Lab",
    "vlab-intro": "We build scalable technologies. Our Venture Lab is the internal incubator where we test Machine Learning algorithms, multi-tenant architectures, and native mobile apps before bringing them to market.",
    "vlab-status-poc": "Active Initiative",
    "vlab-wroomy-desc": "Proprietary Market Intelligence and predictive pricing engine powered by Machine Learning algorithms (AutoScore™).",
    "vlab-wroomy-b1": "Real-Time Data Ingestion: continuous aggregation and normalization of thousands of secondary automotive market data points.",
    "vlab-wroomy-b2": "AutoScore™ Algorithm: predictive fair-value estimation cross-referencing depreciation curves, mileage, trim, and local demand.",
    "vlab-wroomy-b3": "B2B & B2C Model: analytics dashboard and APIs for dealerships and fleets paired with a transparent consumer valuation portal.",
    "vlab-petsgo-desc": "Highly scalable mobile and cloud digital ecosystem (iOS/Android) engineered entirely in-house.",
    "vlab-petsgo-b1": "iOS & Android Mobile App: live on the App Store and Google Play to manage digital health records, vaccines, and pet profiles.",
    "vlab-petsgo-b2": "Clinic Booking & CRM: B2B2C platform connecting pet owners with veterinary clinics, groomers, and pet care professionals.",
    "vlab-petsgo-b3": "Headless Cloud Architecture: reactive backend engineered for high concurrency, smart notifications, and AI-assisted triage.",
    "vlab-flh-desc": "Automated cloud hosting and management infrastructure for digital professionals.",
    "vlab-flh-b1": "Automated Cloud Provisioning: optimized hosting environments and simplified management for developers and digital consultants.",
    "vlab-flh-b2": "Technical Hub & Community: editorial observatory covering cloud tools, productivity stacks, and independent work infrastructure.",
    "vlab-flh-b3": "Vendor Management Evolution: R&D lab for B2B modules dedicated to external contractor onboarding and governance for SMBs.",
    "vlab-card-cta": "Project Case Study →",
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
    "portfolio-desc": "Proprietary vertical platforms and enterprise B2B SaaS solutions, engineered to lead their respective markets.",
    "status-active": "Active Project",

    // Project 1: inQuadra (inquadra.html)
    "inquadra-title": "inQuadra",
    "inquadra-desc": "AI Copilot for end-to-end automation of accounts payable and receivable. Automated 3-way matching (Purchase Orders, Delivery Notes, Invoices) and native connectors for major ERPs.",
    "inquadra-link": "Discover more about inQuadra →",

    // Project 2: petsgo.it
    "petsgo-title": "Petsgo",
    "petsgo-desc": "The benchmark technological ecosystem for pet wellness and care. A modular platform connecting pet lovers, veterinarians, and service facilities with intuitive, reliable tools.",
    "petsgo-link": "Discover more about Petsgo →",

    // Project 2: wroomy.it
    "wroomy-title": "Wroomy",
    "wroomy-desc": "Advanced digital platform for smart mobility and value-added automotive services. Connecting drivers, fleets, and vehicle services with an intuitive, cutting-edge digital experience.",
    "wroomy-link": "Discover more about Wroomy →",

    // Project 3: freelancerhost.com
    "freelancerhost-title": "FreelancerHost",
    "freelancerhost-desc": "Blog and informational hub, currently evolving into a B2B SaaS for SMEs designed to streamline the management of external suppliers and freelancers.",
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
    "contact-tag": "CONSULTING & SOLUTIONS",
    "contact-title": "Talk to Us",
    "contact-desc": "We support our clients in transforming their business processes. Contact us to explore our solutions or request a dedicated session.",
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
    "footer-about-short": "AverisTech — High-tech startup specializing in pet care ecosystems, smart mobility, and digital platforms for the freelance community.",
    "footer-heading-links": "Quick Navigation",
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
