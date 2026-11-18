const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const TRANSLATIONS = {
  en: {
    htmlLang: "en",
    title: "Wissem Sghaier | DevOps Engineer",
    metaDescription:
      "Wissem Sghaier - DevOps Engineer portfolio. CI/CD, Kubernetes, Docker, GitOps, observability, and cloud automation.",
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navCertifications: "Certifications",
    navContact: "Contact",
    heroGreeting: "Hello, I'm",
    heroRole: "DevOps Engineer",
    homeAboutTitle: "About Me",
    homeAboutText: "With practical cloud and CI/CD experience, I help teams scale and deploy with confidence.",
    homeWhatTitle: "What I Do",
    homeWhatText: "I deliver secure pipelines and automation workflows for reliable software delivery across domains.",
    homePassionTitle: "My Passion",
    homePassionText: "I continuously learn emerging DevOps tools to build resilient and innovative platforms.",
    homeCta: "Let's Connect",
    aboutEyebrow: "About Me",
    aboutHeadingHtml: "Turning complexity into<br /><span class=\"gradient-text\">secure, reliable delivery</span>",
    aboutSubline:
      "DevSecOps and cybersecurity engineering: secure CI/CD pipelines, Kubernetes, and SOC automation (SIEM/SOAR).",
    aboutStoryTitle: "DevSecOps Engineer | Cybersecurity | Secure CI/CD Pipelines & SOC Automation (SIEM/SOAR)",
    aboutStoryP1:
      "DevOps and DevSecOps engineer specializing in deployment automation, CI/CD pipeline security, and container orchestration. My expertise covers the full software delivery lifecycle: continuous integration and deployment, containerization with Docker, Kubernetes orchestration, GitOps practices, and observability. I integrate security at every stage — code quality analysis, vulnerability detection, secret management, and configuration compliance — and I have solid experience in security operations, including detection engineering, incident response automation, and SIEM monitoring. Rigorous, results-driven, and passionate about my field, I am committed to delivering reliable infrastructures and measurable value to every team I work with.",
    skillsEyebrow: "Tools & Technologies",
    experienceEyebrow: "Work Experience",
    experienceHeadingHtml: "Building the future<br /><span>one deployment at a time</span>",
    experienceSubline: "Professional experience, responsibilities, and technologies from my CV.",
    projectsEyebrow: "Selected Work",
    projectsHeadingHtml: "Projects that<br /><span>make an impact</span>",
    projectsSubline: "Cloud-native delivery and security automation, built for real-world operations.",
    shopProjectDescription: "Designed a cloud-native e-commerce platform built from independent services for authentication, products, orders, and notifications. Asynchronous RabbitMQ events decouple order processing, while Kubernetes, Helm, and Argo CD bring secure, repeatable GitOps delivery.",
    socProjectDescription: "Built an AI-driven SOC lab that turns Linux and Windows security events into actionable incidents. Custom Wazuh detections feed TheHive, while Cortex and MISP enrich observables and Shuffle orchestrates analyst-approved response workflows.",
    intelligentSocProjectDescription: "Extended a Wazuh-based SOC with three Dockerized Python APIs: an ML service for labeled-alert classification, anomaly detection and enrichment; a read-only Copilot that summarizes Wazuh alerts with local Ollama; and a token-protected response API with host/action allowlists and explicit analyst approval. The ML model is trained on reviewed lab data, and response actions remain disabled until securely configured.",
    projectArchitectureLink: "Deployment & GitOps",
    projectPlatformLink: "Microservices platform",
    projectArchitectureLabel: "Platform architecture",
    projectArchitectureCaption: "End-to-end integration flow across CI/CD, application services, security, and infrastructure.",
    projectArchitectureOpen: "View full image",
    intelligentSocArchitectureLabel: "Intelligent SOC architecture",
    intelligentSocArchitectureCaption: "Wazuh detection flows through enrichment and ML scoring to approval-gated response, with incident traceability.",
    socArchitectureLabel: "Home lab SOC architecture",
    socArchitectureCaption: "Security event flow from detection and investigation to threat intelligence and response.",
    projectRepositoryLink: "View SOC lab on GitHub",
    certificationsEyebrow: "Credentials",
    certificationsHeadingHtml: "Licenses and<br /><span>certifications</span>",
    certificationsIntro: "Professional certifications validating expertise in cloud platforms and DevOps practices.",
    academicEyebrow: "Academic",
    academicHeadingHtml: "Academic<br /><span>foundation</span>",
    academicMasterTitle: "Master in Systems, Networks and Cloud Computing",
    academicMasterDesc:
      "Specialized in cloud architectures, distributed systems, and modern infrastructure operations with a practical focus on DevOps and automation.",
    academicEngTitle: "Engineering Degree in Computer Science",
    academicEngDesc:
      "Strong foundation in software engineering, algorithms, and application design, supporting reliable delivery and problem-solving in production environments.",
    contactEyebrow: "Let's Connect",
    contactHeadingHtml: "Ready to build<br /><span>something amazing?</span>",
    contactSubline: "Let's discuss how my DevOps expertise can accelerate your next project.",
    contactEmailAction: "Send Email",
    contactLinkedinAction: "Connect on LinkedIn",
    contactLocationAction: "View map",
    footerRole: "DevOps Engineer",
    verified: "Verified",
    issued: "Issued",
    expires: "Expires",
    skillsLabel: "Skills",
    experiencePresent: "Present",
    showCredential: "Show credential",
    noCertificationsYet: "No certifications yet",
    addCertificationsHint: "Add your certifications in the certifications array inside script.js.",
    noExperienceDataYet: "No experience data available yet. Add entries to workExperiences in script.js.",
    noDescription: "No description provided.",
    openRepository: "Open repository",
    noLinkedinProjects: "No LinkedIn projects added yet",
    editLinkedinProjects: "Edit the linkedinProjects array in script.js to add your project history.",
    openOnLinkedin: "Open on LinkedIn",
    profileDefaultRole: "DevSecOps Engineer",
    profileDefaultLocation: "Italy",
    independent: "Independent",
    mixed: "Mixed",
    projectLabel: "Project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    yearsAgo: "y ago",
    monthsAgo: "mo ago",
    daysAgo: "d ago"
  },
  fr: {
    htmlLang: "fr",
    title: "Wissem Sghaier | Ingenieur DevOps",
    metaDescription:
      "Portfolio de Wissem Sghaier - Ingenieur DevOps. CI/CD, Kubernetes, Docker, GitOps, observabilite et automatisation cloud.",
    navHome: "Accueil",
    navAbout: "A propos",
    navSkills: "Competences",
    navExperience: "Experience",
    navProjects: "Projets",
    navCertifications: "Certifications",
    navContact: "Contact",
    heroGreeting: "Bonjour, je suis",
    heroRole: "Ingenieur DevOps",
    homeAboutTitle: "A propos de moi",
    homeAboutText: "Avec une experience pratique du cloud et du CI/CD, j'aide les equipes a monter en charge et deployer avec confiance.",
    homeWhatTitle: "Ce que je fais",
    homeWhatText: "Je livre des pipelines securises et des workflows d'automatisation pour une livraison logicielle fiable.",
    homePassionTitle: "Ma passion",
    homePassionText: "J'apprends en continu les outils DevOps emergents pour construire des plateformes resilientes et innovantes.",
    homeCta: "Connectons-nous",
    aboutEyebrow: "A propos",
    aboutHeadingHtml: "Transformer la complexité en<br /><span class=\"gradient-text\">livraisons sûres et fiables</span>",
    aboutSubline:
      "Ingénierie DevSecOps et cybersécurité : pipelines CI/CD sécurisés, Kubernetes et automatisation SOC (SIEM/SOAR).",
    aboutStoryTitle: "Ingénieur DevSecOps | Cybersécurité | Pipelines CI/CD sécurisés et automatisation SOC (SIEM/SOAR)",
    aboutStoryP1:
      "Ingénieur DevOps et DevSecOps, spécialisé dans l'automatisation des déploiements, la sécurisation des pipelines CI/CD et l'orchestration de conteneurs. Mon expertise couvre l'ensemble du cycle de livraison logicielle : intégration et déploiement continus, conteneurisation avec Docker, orchestration Kubernetes, pratiques GitOps et observabilité. J'intègre la sécurité à chaque étape — analyse de la qualité du code, détection des vulnérabilités, gestion des secrets et conformité des configurations — et je dispose d'une solide expérience en opérations de sécurité : ingénierie de détection, automatisation de la réponse aux incidents et supervision SIEM. Rigoureux, orienté résultats et passionné par mon métier, je m'engage à livrer des infrastructures fiables et une valeur mesurable à chaque équipe que je rejoins.",
    skillsEyebrow: "Outils et technologies",
    experienceEyebrow: "Experience professionnelle",
    experienceHeadingHtml: "Construire le futur<br /><span>deploiement apres deploiement</span>",
    experienceSubline: "Experiences professionnelles, missions et technologies issues de mon CV.",
    projectsEyebrow: "Projets selectionnes",
    projectsHeadingHtml: "Des projets qui<br /><span>ont un impact</span>",
    projectsSubline: "Livraison cloud-native et automatisation de la securite, pensees pour des usages concrets.",
    shopProjectDescription: "Conception d'une plateforme e-commerce cloud-native composee de services independants pour l'authentification, les produits, les commandes et les notifications. Les evenements RabbitMQ decouplent le traitement des commandes, tandis que Kubernetes, Helm et Argo CD assurent une livraison GitOps securisee et reproductible.",
    socProjectDescription: "Creation d'un lab SOC oriente IA qui transforme les evenements de securite Linux et Windows en incidents exploitables. Les detections Wazuh alimentent TheHive, Cortex et MISP enrichissent les observables, et Shuffle orchestre des workflows de reponse valides par l'analyste.",
    intelligentSocProjectDescription: "Extension d'un SOC base sur Wazuh avec trois API Python conteneurisees : analyse ML des alertes labellisees, detection d'anomalies et enrichissement ; Copilot en lecture seule qui synthetise les alertes avec Ollama local ; et API de reponse protegee par token, avec listes d'hotes et d'actions autorisees et approbation explicite d'un analyste. Le modele est entraine sur des donnees de lab verifiees et les actions restent desactivees tant que la configuration securisee n'est pas faite.",
    projectArchitectureLink: "Deploiement et GitOps",
    projectPlatformLink: "Plateforme microservices",
    projectArchitectureLabel: "Architecture de la plateforme",
    projectArchitectureCaption: "Flux d'integration de bout en bout : CI/CD, services applicatifs, securite et infrastructure.",
    projectArchitectureOpen: "Voir l'image en grand",
    intelligentSocArchitectureLabel: "Architecture du SOC intelligent",
    intelligentSocArchitectureCaption: "La detection Wazuh alimente l'enrichissement et le scoring ML, puis une reponse soumise a approbation et tracee.",
    socArchitectureLabel: "Architecture du lab SOC",
    socArchitectureCaption: "Flux des evenements de securite, de la detection et l'investigation au renseignement et a la reponse.",
    projectRepositoryLink: "Voir le lab SOC sur GitHub",
    certificationsEyebrow: "Diplomes",
    certificationsHeadingHtml: "Licences et<br /><span>certifications</span>",
    certificationsIntro: "Certifications professionnelles validant l'expertise en cloud et en pratiques DevOps.",
    academicEyebrow: "Academique",
    academicHeadingHtml: "Base<br /><span>academique</span>",
    academicMasterTitle: "Master en Systemes, Reseaux et Cloud Computing",
    academicMasterDesc:
      "Specialisation en architectures cloud, systemes distribues et operations d'infrastructure modernes avec un focus pratique DevOps et automatisation.",
    academicEngTitle: "Diplome d'ingenieur en informatique",
    academicEngDesc:
      "Solide base en genie logiciel, algorithmes et conception applicative, au service d'une livraison fiable en production.",
    contactEyebrow: "Contact",
    contactHeadingHtml: "Pret a construire<br /><span>quelque chose d'exceptionnel ?</span>",
    contactSubline: "Discutons de la facon dont mon expertise DevOps peut accelerer votre prochain projet.",
    contactEmailAction: "Envoyer un email",
    contactLinkedinAction: "Me contacter sur LinkedIn",
    contactLocationAction: "Voir la carte",
    footerRole: "Ingenieur DevOps",
    verified: "Verifie",
    issued: "Delivre",
    expires: "Expire",
    skillsLabel: "Competences",
    experiencePresent: "Aujourd'hui",
    showCredential: "Voir le certificat",
    noCertificationsYet: "Aucune certification pour le moment",
    addCertificationsHint: "Ajoutez vos certifications dans le tableau certifications de script.js.",
    noExperienceDataYet: "Aucune experience disponible. Ajoutez des entrees dans workExperiences dans script.js.",
    noDescription: "Aucune description fournie.",
    openRepository: "Ouvrir le depot",
    noLinkedinProjects: "Aucun projet LinkedIn ajoute",
    editLinkedinProjects: "Modifiez le tableau linkedinProjects dans script.js pour ajouter votre historique.",
    openOnLinkedin: "Ouvrir sur LinkedIn",
    profileDefaultRole: "Ingénieur DevSecOps",
    profileDefaultLocation: "Italie",
    independent: "Independant",
    mixed: "Mixte",
    projectLabel: "Projet",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    yearsAgo: "a",
    monthsAgo: "mo",
    daysAgo: "j"
  },
  it: {
    htmlLang: "it",
    title: "Wissem Sghaier | Ingegnere DevOps",
    metaDescription:
      "Portfolio di Wissem Sghaier - Ingegnere DevOps. CI/CD, Kubernetes, Docker, GitOps, osservabilita e automazione cloud.",
    navHome: "Home",
    navAbout: "Chi sono",
    navSkills: "Competenze",
    navExperience: "Esperienza",
    navProjects: "Progetti",
    navCertifications: "Certificazioni",
    navContact: "Contatto",
    heroGreeting: "Ciao, sono",
    heroRole: "Ingegnere DevOps",
    homeAboutTitle: "Chi sono",
    homeAboutText: "Con esperienza pratica in cloud e CI/CD, aiuto i team a scalare e distribuire con fiducia.",
    homeWhatTitle: "Cosa faccio",
    homeWhatText: "Realizzo pipeline sicure e workflow di automazione per una delivery software affidabile.",
    homePassionTitle: "La mia passione",
    homePassionText: "Studio continuamente strumenti DevOps emergenti per creare piattaforme resilienti e innovative.",
    homeCta: "Restiamo in contatto",
    aboutEyebrow: "Chi sono",
    aboutHeadingHtml: "Dalla complessità a<br /><span class=\"gradient-text\">rilasci sicuri e affidabili</span>",
    aboutSubline:
      "Ingegneria DevSecOps e cybersecurity: pipeline CI/CD sicure, Kubernetes e automazione SOC (SIEM/SOAR).",
    aboutStoryTitle: "Ingegnere DevSecOps | Cybersecurity | Pipeline CI/CD sicure e automazione SOC (SIEM/SOAR)",
    aboutStoryP1:
      "Ingegnere DevOps e DevSecOps, specializzato nell'automazione dei deployment, nella sicurezza delle pipeline CI/CD e nell'orchestrazione di container. La mia competenza copre l'intero ciclo di delivery del software: integrazione e distribuzione continua, containerizzazione con Docker, orchestrazione Kubernetes, pratiche GitOps e osservabilità. Integro la sicurezza in ogni fase — analisi della qualità del codice, rilevamento delle vulnerabilità, gestione dei segreti e conformità delle configurazioni — e possiedo una solida esperienza nelle operazioni di sicurezza: ingegneria del rilevamento, automazione della risposta agli incidenti e monitoraggio SIEM. Rigoroso, orientato ai risultati e appassionato del mio lavoro, mi impegno a fornire infrastrutture affidabili e valore misurabile a ogni team con cui collaboro.",
    skillsEyebrow: "Strumenti e tecnologie",
    experienceEyebrow: "Esperienza lavorativa",
    experienceHeadingHtml: "Costruire il futuro<br /><span>un deployment alla volta</span>",
    experienceSubline: "Esperienze professionali, responsabilita e tecnologie tratte dal mio CV.",
    projectsEyebrow: "Progetti selezionati",
    projectsHeadingHtml: "Progetti che<br /><span>fanno la differenza</span>",
    projectsSubline: "Delivery cloud-native e automazione della sicurezza progettate per scenari reali.",
    shopProjectDescription: "Progettazione di una piattaforma e-commerce cloud-native composta da servizi indipendenti per autenticazione, prodotti, ordini e notifiche. Gli eventi RabbitMQ disaccoppiano l'elaborazione degli ordini, mentre Kubernetes, Helm e Argo CD garantiscono una delivery GitOps sicura e ripetibile.",
    socProjectDescription: "Realizzazione di un lab SOC orientato all'AI che trasforma gli eventi di sicurezza Linux e Windows in incidenti operativi. Le rilevazioni Wazuh alimentano TheHive, Cortex e MISP arricchiscono gli observable e Shuffle orchestra workflow di risposta approvati dagli analisti.",
    intelligentSocProjectDescription: "Estensione di un SOC basato su Wazuh con tre API Python containerizzate: analisi ML degli alert etichettati, rilevamento anomalie e arricchimento; Copilot in sola lettura che riassume gli alert tramite Ollama locale; e API di risposta protetta da token, con allowlist di host e azioni e approvazione esplicita dell'analista. Il modello si addestra su dati di laboratorio verificati e le azioni restano disabilitate finche la configurazione sicura non e completata.",
    projectArchitectureLink: "Deployment e GitOps",
    projectPlatformLink: "Piattaforma microservizi",
    projectArchitectureLabel: "Architettura della piattaforma",
    projectArchitectureCaption: "Flusso di integrazione end-to-end tra CI/CD, servizi applicativi, sicurezza e infrastruttura.",
    projectArchitectureOpen: "Apri immagine completa",
    intelligentSocArchitectureLabel: "Architettura SOC intelligente",
    intelligentSocArchitectureCaption: "Il rilevamento Wazuh alimenta arricchimento e scoring ML, quindi una risposta soggetta ad approvazione e tracciata.",
    socArchitectureLabel: "Architettura del SOC home lab",
    socArchitectureCaption: "Flusso degli eventi di sicurezza dal rilevamento e dall'indagine alla threat intelligence e alla risposta.",
    projectRepositoryLink: "Apri il SOC lab su GitHub",
    certificationsEyebrow: "Credenziali",
    certificationsHeadingHtml: "Licenze e<br /><span>certificazioni</span>",
    certificationsIntro: "Certificazioni professionali che convalidano competenze in cloud e pratiche DevOps.",
    academicEyebrow: "Formazione",
    academicHeadingHtml: "Base<br /><span>accademica</span>",
    academicMasterTitle: "Master in Sistemi, Reti e Cloud Computing",
    academicMasterDesc:
      "Specializzazione in architetture cloud, sistemi distribuiti e operazioni infrastrutturali moderne con focus pratico su DevOps e automazione.",
    academicEngTitle: "Laurea in Ingegneria Informatica",
    academicEngDesc:
      "Solida base in ingegneria del software, algoritmi e progettazione applicativa per una delivery affidabile in produzione.",
    contactEyebrow: "Contatto",
    contactHeadingHtml: "Pronto a costruire<br /><span>qualcosa di straordinario?</span>",
    contactSubline: "Parliamo di come la mia esperienza DevOps puo accelerare il tuo prossimo progetto.",
    contactEmailAction: "Invia email",
    contactLinkedinAction: "Connettiti su LinkedIn",
    contactLocationAction: "Apri mappa",
    footerRole: "Ingegnere DevOps",
    verified: "Verificato",
    issued: "Rilasciato",
    expires: "Scade",
    skillsLabel: "Competenze",
    experiencePresent: "Attuale",
    showCredential: "Mostra certificato",
    noCertificationsYet: "Nessuna certificazione al momento",
    addCertificationsHint: "Aggiungi le certificazioni nell'array certifications dentro script.js.",
    noExperienceDataYet: "Nessuna esperienza disponibile. Aggiungi voci a workExperiences in script.js.",
    noDescription: "Nessuna descrizione disponibile.",
    openRepository: "Apri repository",
    noLinkedinProjects: "Nessun progetto LinkedIn aggiunto",
    editLinkedinProjects: "Modifica l'array linkedinProjects in script.js per aggiungere la tua storia progetti.",
    openOnLinkedin: "Apri su LinkedIn",
    profileDefaultRole: "Ingegnere DevSecOps",
    profileDefaultLocation: "Italia",
    independent: "Indipendente",
    mixed: "Misto",
    projectLabel: "Progetto",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    yearsAgo: "a",
    monthsAgo: "m",
    daysAgo: "g"
  }
};

const I18N_STORAGE_KEY = "portfolio-lang";
let currentLanguage = localStorage.getItem(I18N_STORAGE_KEY) || "en";
if (!TRANSLATIONS[currentLanguage]) {
  currentLanguage = "en";
}

function t(key) {
  const pack = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return pack[key] || TRANSLATIONS.en[key] || "";
}

function applyTranslations() {
  const html = document.documentElement;
  html.lang = t("htmlLang") || "en";

  document.title = t("title");

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", t("metaDescription"));
  }

  const navLinks = document.querySelectorAll(".main-nav .nav-link");
  if (navLinks.length >= 7) {
    navLinks[0].textContent = t("navHome");
    navLinks[1].textContent = t("navAbout");
    navLinks[2].textContent = t("navSkills");
    navLinks[3].textContent = t("navExperience");
    navLinks[4].textContent = t("navProjects");
    navLinks[5].textContent = t("navCertifications");
    navLinks[6].textContent = t("navContact");
  }

  const label = document.querySelector('label[for="langSelect"]');
  if (label) {
    label.textContent = "Select language";
  }

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.setAttribute("aria-label", "Select language");
    langSelect.value = currentLanguage;
  }

  const navToggle = document.getElementById("navToggle");
  if (navToggle) {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", isExpanded ? t("closeMenu") : t("openMenu"));
  }

  const updateText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value;
    }
  };

  const updateHtml = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = value;
    }
  };

  updateText(".hero-greeting", t("heroGreeting"));
  updateText(".hero-role", t("heroRole"));
  updateText(".home-mini-card:nth-of-type(1) .home-mini-head h3", t("homeAboutTitle"));
  updateText(".home-mini-card:nth-of-type(1) p", t("homeAboutText"));
  updateText(".home-mini-card:nth-of-type(2) .home-mini-head h3", t("homeWhatTitle"));
  updateText(".home-mini-card:nth-of-type(2) p", t("homeWhatText"));
  updateText(".home-mini-card:nth-of-type(3) .home-mini-head h3", t("homePassionTitle"));
  updateText(".home-mini-card:nth-of-type(3) p", t("homePassionText"));
  updateText(".home-cta-row .home-action", t("homeCta"));

  updateText(".about-showcase-head .eyebrow", t("aboutEyebrow"));
  updateHtml(".about-showcase-head h2", t("aboutHeadingHtml"));
  updateText(".about-showcase-sub", t("aboutSubline"));
  updateText("#profileRole", t("profileDefaultRole"));
  updateText(".about-story-tile h3", t("aboutStoryTitle"));
  updateText(".about-story-tile p", t("aboutStoryP1"));

  updateText(".skills-heading .eyebrow", t("skillsEyebrow"));

  updateText(".experience-heading .eyebrow", t("experienceEyebrow"));
  updateHtml(".experience-heading h2", t("experienceHeadingHtml"));
  updateText(".experience-subline", t("experienceSubline"));

  updateText(".project-heading .eyebrow", t("projectsEyebrow"));
  updateHtml(".project-heading h2", t("projectsHeadingHtml"));
  updateText(".project-subline", t("projectsSubline"));
  renderProjects();

  updateText(".cert-heading .eyebrow", t("certificationsEyebrow"));
  updateHtml(".cert-heading h2", t("certificationsHeadingHtml"));
  updateText(".cert-intro", t("certificationsIntro"));

  updateText(".cert-academic-heading .eyebrow", t("academicEyebrow"));
  updateHtml(".cert-academic-heading h2", t("academicHeadingHtml"));
  updateText(".cert-academic-card:nth-of-type(1) h4", t("academicMasterTitle"));
  updateText(".cert-academic-card:nth-of-type(1) .cert-academic-desc", t("academicMasterDesc"));
  updateText(".cert-academic-card:nth-of-type(2) h4", t("academicEngTitle"));
  updateText(".cert-academic-card:nth-of-type(2) .cert-academic-desc", t("academicEngDesc"));

  updateText(".contact-heading .eyebrow", t("contactEyebrow"));
  updateHtml(".contact-heading h2", t("contactHeadingHtml"));
  updateText(".contact-subline", t("contactSubline"));
  updateText('.contact-card[href^="mailto:"] .contact-action', t("contactEmailAction"));
  updateText('.contact-card[href*="linkedin.com"] .contact-action', t("contactLinkedinAction"));
  updateText('.contact-card[href*="maps.google.com"] .contact-action', t("contactLocationAction"));

  const footerRole = document.querySelector(".footer-text small");
  if (footerRole) {
    footerRole.textContent = t("footerRole");
  }

  renderExperiences();
  renderCertifications();
}

function setupLanguageSwitcher() {
  const langSelect = document.getElementById("langSelect");
  if (!langSelect) {
    return;
  }

  langSelect.value = currentLanguage;
  langSelect.addEventListener("change", (event) => {
    const nextLanguage = event.target.value;
    if (!TRANSLATIONS[nextLanguage]) {
      return;
    }
    currentLanguage = nextLanguage;
    localStorage.setItem(I18N_STORAGE_KEY, currentLanguage);
    applyTranslations();
  });
}

function setupMobileNav() {
  const topbarRight = document.querySelector(".topbar-right");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!topbarRight || !navToggle || !nav) {
    return;
  }

  const setOpen = (open) => {
    topbarRight.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? t("closeMenu") : t("openMenu"));
    const icon = navToggle.querySelector("i");
    if (icon) {
      icon.className = open ? "ri-close-line" : "ri-menu-line";
    }
  };

  setOpen(false);

  navToggle.addEventListener("click", () => {
    const isOpen = topbarRight.classList.contains("nav-open");
    setOpen(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setOpen(false);
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => {
  const delay = Number(element.dataset.delay || 0);
  const duration = Number(element.dataset.duration || 680);
  element.style.setProperty("--delay", `${delay}ms`);
  element.style.setProperty("--dur", `${duration}ms`);
  revealObserver.observe(element);
});

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sectionElements = Array.from(document.querySelectorAll("main section[id]"));

if (navLinks.length > 0 && !navLinks.some((link) => link.classList.contains("active"))) {
  navLinks[0].classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) {
      return;
    }
    const target = document.querySelector(href);
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const cardObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("card-in-view");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px"
  }
);

function registerCardAnimations(scope = document) {
  const root = scope && typeof scope.querySelectorAll === "function" ? scope : document;
  const cards = root.querySelectorAll(
    ".home-mini-grid article, .about-grid article, .about-focus-grid article, .about-skill-level-grid article, .knowledge-grid article, .tool-group, .experience-card, .achievement-grid article, .cert-card, .cert-academic-card, .education-grid article, .timeline article, .repo-card, .contact-grid a, .profile-card, .tools-block, .skill-card"
  );

  cards.forEach((card) => {
    if (card.dataset.cardAnim === "1") {
      return;
    }
    card.dataset.cardAnim = "1";
    card.classList.add("card-animate");

    const siblings = card.parentElement ? Array.from(card.parentElement.children) : [card];
    const index = Math.max(0, siblings.indexOf(card));
    card.style.setProperty("--stagger", `${Math.min(index * 65, 420)}ms`);
    cardObserver.observe(card);
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("is-current");
        return;
      }
      const activeId = entry.target.getAttribute("id");
      sectionElements.forEach((section) => section.classList.remove("is-current"));
      entry.target.classList.add("is-current");
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${activeId}`);
      });
    });
  },
  {
    rootMargin: "-30% 0px -55% 0px",
    threshold: 0.01
  }
);

sectionElements.forEach((section) => sectionObserver.observe(section));

const GITHUB_USERNAME = document.body.dataset.githubUser || "wissemsghaier";

const featuredProjects = [
  {
    title: "DevSecOps & GitOps E-commerce Platform",
    period: "01 Aug 2026 - Present",
    descriptionKey: "shopProjectDescription",
    icon: "ri-shopping-bag-3-line",
    technologies: [
      ["Kubernetes", "kubernetes-plain"], ["Helm", "helm-original"], ["Argo CD", "argocd-plain"],
      ["GitLab CI", "ri-gitlab-fill"], ["Vault", "vault-plain"], ["Docker", "docker-plain"],
      ["RabbitMQ", "rabbitmq-original"], ["PostgreSQL", "postgresql-plain"], ["SonarQube", "sonarqube-plain"]
    ],
    links: [
      { labelKey: "projectArchitectureLink", url: "https://github.com/wissemsghaier/Deployment_Application_Shop", icon: "ri-git-repository-line" },
      { labelKey: "projectPlatformLink", url: "https://github.com/wissemsghaier/Plateforme_Shop", icon: "ri-code-box-line" }
    ],
    architecture: {
      image: "assets/architecture_projects/Platform Architecture Integration Flow.png",
      alt: "End-to-end e-commerce platform architecture integration flow",
      labelKey: "projectArchitectureLabel",
      captionKey: "projectArchitectureCaption",
      openKey: "projectArchitectureOpen"
    }
  },
  {
    title: "AI-Driven SOC Lab Automation",
    period: "Security Operations",
    descriptionKey: "socProjectDescription",
    icon: "ri-shield-keyhole-line",
    technologies: [
      ["Wazuh", "ri-shield-check-line"], ["TheHive", "ri-bug-2-line"], ["Cortex", "python-plain"],
      ["MISP", "ri-radar-line"], ["Shuffle SOAR", "ri-flow-chart"], ["Python", "python-plain"],
      ["Linux", "linux-plain"], ["PowerShell", "powershell-plain"]
    ],
    links: [
      { labelKey: "projectRepositoryLink", url: "https://github.com/wissemsghaier/Soc-Lab-Automation", icon: "ri-github-line" }
    ],
    architecture: {
      image: "assets/architecture_projects/home-lab-soc-architecture.png",
      alt: "Home lab SOC architecture for detection, investigation, threat intelligence, and response",
      labelKey: "socArchitectureLabel",
      captionKey: "socArchitectureCaption",
      openKey: "projectArchitectureOpen"
    }
  },
  {
    title: "Intelligent SOC Platform — ML & SOAR",
    period: "Machine Learning & Response",
    descriptionKey: "intelligentSocProjectDescription",
    icon: "ri-brain-line",
    technologies: [
      ["Python", "python-plain"], ["FastAPI", "ri-code-s-slash-line"], ["Docker", "docker-plain"],
      ["Wazuh", "ri-shield-check-line"], ["XGBoost", "ri-bar-chart-box-line"], ["Ollama", "ri-chat-3-line"],
      ["Shuffle SOAR", "ri-flow-chart"], ["TheHive", "ri-bug-2-line"], ["MISP", "ri-radar-line"]
    ],
    links: [
      { labelKey: "projectRepositoryLink", url: "https://github.com/wissemsghaier/Plateforme-SOC-intelligente", icon: "ri-github-line" }
    ],
    architecture: {
      image: "assets/architecture_projects/Intelligent SOC Architecture Infographic.png",
      alt: "Intelligent SOC architecture showing Wazuh detection, enrichment and machine learning, approval-gated response, and traceability",
      labelKey: "intelligentSocArchitectureLabel",
      captionKey: "intelligentSocArchitectureCaption",
      openKey: "projectArchitectureOpen"
    }
  }
];

function renderProjects() {
  const projectGrid = document.getElementById("projectGrid");
  if (!projectGrid) {
    return;
  }

  projectGrid.innerHTML = featuredProjects
    .map((project, index) => {
      const technologies = project.technologies
        .map(([name, icon]) => {
          const iconClass = icon.startsWith("ri-") ? icon : `devicon-${icon}`;
          return `<li><i class="${iconClass}" aria-hidden="true"></i><span>${name}</span></li>`;
        })
        .join("");
      const links = project.links
        .map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noreferrer"><i class="${link.icon}" aria-hidden="true"></i>${t(link.labelKey)}</a>`)
        .join("");
      const architecture = project.architecture
        ? `
          <figure class="project-architecture">
            <a class="project-architecture-image" href="${project.architecture.image}" target="_blank" rel="noreferrer" aria-label="${t(project.architecture.openKey)}">
              <img src="${project.architecture.image}" alt="${project.architecture.alt}" loading="lazy" />
            </a>
            <figcaption>
              <span><strong>${t(project.architecture.labelKey)}</strong>${t(project.architecture.captionKey)}</span>
              <a href="${project.architecture.image}" target="_blank" rel="noreferrer">${t(project.architecture.openKey)}<i class="ri-arrow-up-right-line" aria-hidden="true"></i></a>
            </figcaption>
          </figure>
        `
        : "";

      return `
        <article class="project-card${project.architecture ? " project-card--architecture" : ""} cinematic-panel" style="--i:${index};">
          <div class="project-card-content">
            <div class="project-card-top">
              <span class="project-emblem"><i class="${project.icon}" aria-hidden="true"></i></span>
              <span class="project-period">${project.period}</span>
            </div>
            <h3>${project.title}</h3>
            <p class="project-description">${t(project.descriptionKey)}</p>
            <ul class="project-tech-list">${technologies}</ul>
            <div class="project-links">${links}</div>
          </div>
          ${architecture}
        </article>
      `;
    })
    .join("");

  registerCardAnimations(projectGrid);
  applyTiltEffects(projectGrid);
}

// Add all LinkedIn projects here. Each item is rendered automatically.
const linkedinProjects = [
  {
    title: "3-Tier PERN Business Platform",
    period: "2025 - Present",
    company: "Informatica Soluzioni Aziendali",
    description:
      "Designed and deployed a scalable 3-tier platform (PostgreSQL, Express, React, Node.js) with full containerization and GitOps rollout.",
    tags: ["PERN", "Docker", "Kubernetes", "ArgoCD", "Nexus"],
    link: "https://www.linkedin.com/in/sghaier-wissem/"
  },
  {
    title: "DevSecOps CI/CD Pipeline for Airline Workloads",
    period: "2025",
    company: "Nouvelair",
    description:
      "Implemented secure CI/CD with OPA, Trivy, Falco, Helm deployments, Slack notifications, and Vault secret management.",
    tags: ["GitLab CI/CD", "Jenkins", "OPA", "Trivy", "Falco", "Vault"],
    link: "https://www.linkedin.com/in/sghaier-wissem/"
  },
  {
    title: "Multi-Framework Delivery Automation",
    period: "2024",
    company: "Artificial Insight",
    description:
      "Built pipelines for Next.js, NestJS, Spring Boot, Angular, Flutter, Lumen, and Go-Gin with SonarQube quality gates and Nexus artifact storage.",
    tags: ["SonarQube", "Nexus", "Next.js", "NestJS", "Spring Boot"],
    link: "https://www.linkedin.com/in/sghaier-wissem/"
  }
];

const workExperiences = [
  {
    role: "DevSecOps Engineer | Cybersecurity",
    company: "Informatica Soluzioni Aziendali",
    location: "Ragusa, Italy",
    period: "01/09/2025 - Present",
    summary:
      "Secure CI/CD, SOC automation (SIEM/SOAR), and cloud-native platform engineering.",
    highlights: [
      "Developed and validated Wazuh detection rules for Linux and Windows, covering network scans, repeated authentication failures, ICMP anomalies, and Sysmon activity.",
      "Integrated Wazuh with TheHive using Python; normalized alerts, mapped severity, enriched observables, and removed duplicates.",
      "Automated TheHive-to-Shuffle analysis workflows and Telegram enrichment summaries, with analyst review of containment actions.",
      "Built seven Wazuh and OpenSearch dashboards for alert investigations, network activity, authentication failures, agent status, and file integrity monitoring.",
      "Designed a 3-tier e-commerce platform with React/Nginx, Node.js/Express APIs, and RabbitMQ; containerized services and automated CI/CD with GitLab, SonarQube, and Nexus.",
      "Deployed to Kubernetes with Helm, Traefik, and Argo CD; managed secrets with Vault and monitored services with Prometheus, Grafana, Loki, and Promtail."
    ],
    icon: "ri-shield-keyhole-line",
    pills: [
      { title: "SOC", detail: "Wazuh + TheHive + Shuffle", icon: "ri-radar-line" },
      { title: "DevSecOps", detail: "GitLab CI/CD + SonarQube", icon: "ri-shield-check-line" },
      { title: "Kubernetes", detail: "Helm + Traefik + Argo CD", icon: "ri-steering-2-line" },
      { title: "Platform", detail: "React + Node.js + RabbitMQ", icon: "ri-stack-line" },
      { title: "Observability", detail: "Prometheus + Grafana + Loki", icon: "ri-line-chart-line" },
      { title: "Secrets", detail: "HashiCorp Vault", icon: "ri-lock-2-line" }
    ]
  },
  {
    role: "DevOps Engineer",
    company: "Nouvelair",
    location: "Monastir, Tunisia",
    period: "01/01/2025 - 01/09/2025",
    summary:
      "Implemented an end-to-end DevSecOps pipeline for testing, security checks, Kubernetes deployments, and monitoring.",
    highlights: [
      "Integrated unit and dependency tests, mutation testing, and SonarQube code-quality analysis into CI/CD.",
      "Added OPA policy checks, Trivy Docker image scans, and Falco runtime intrusion detection.",
      "Deployed a three-tier application to Kubernetes with Helm, followed by performance and configuration scans.",
      "Configured Slack pipeline notifications, Prometheus and Grafana monitoring, and secure secret management with HashiCorp Vault."
    ],
    icon: "ri-shield-check-line",
    pills: [
      { title: "CI/CD", detail: "GitLab + Jenkins", icon: "ri-flow-chart" },
      { title: "Security", detail: "OPA + Trivy", icon: "ri-shield-keyhole-line" },
      { title: "Runtime", detail: "Falco intrusion detection", icon: "ri-radar-line" },
      { title: "Deploy", detail: "Helm on Kubernetes", icon: "ri-rocket-2-line" },
      { title: "Secrets", detail: "HashiCorp Vault", icon: "ri-lock-2-line" },
      { title: "Observability", detail: "Prometheus + Grafana", icon: "ri-dashboard-line" }
    ]
  },
  {
    role: "DevOps Engineer",
    company: "Artificial Insight",
    location: "Tunis, Tunisia",
    period: "01/06/2024 - 30/09/2024",
    summary:
      "Designed and implemented CI/CD pipelines for multiple frameworks and languages.",
    highlights: [
      "Built delivery pipelines for Next.js, NestJS, Spring Boot, Angular, Flutter, Lumen, and Go-Gin.",
      "Automated integration and delivery with GitLab CI and Jenkins, reducing manual release work.",
      "Integrated SonarQube code-quality checks, Nexus artifact management, and JMeter performance tests."
    ],
    icon: "ri-cpu-line",
    pills: [
      { title: "Pipelines", detail: "GitLab CI + Jenkins", icon: "ri-flow-chart" },
      { title: "Code Quality", detail: "SonarQube analysis", icon: "ri-search-eye-line" },
      { title: "Artifacts", detail: "Nexus repository", icon: "ri-archive-drawer-line" },
      { title: "Performance", detail: "JMeter testing", icon: "ri-speed-up-line" },
      { title: "Containers", detail: "Dockerized workloads", icon: "ri-box-3-line" },
      { title: "Frameworks", detail: "Next.js, NestJS, Spring", icon: "ri-code-s-slash-line" }
    ]
  },
  {
    role: "Junior Software Engineer",
    company: "Mobilite",
    location: "Monastir, Tunisia",
    period: "01/06/2024 - 30/06/2024",
    summary:
      "Developed a secure authentication and role-management system using the MERN stack.",
    highlights: [
      "Implemented login, registration, and password recovery with role-based access for Superadmin, Admin, and Developer.",
      "Managed user profiles and permissions according to each role's responsibilities.",
      "Built the application with MongoDB, Express.js, React.js, and Node.js, including REST APIs for frontend/backend communication."
    ],
    icon: "ri-code-box-line",
    pills: [
      { title: "MERN", detail: "MongoDB + React + Node", icon: "ri-stack-line" },
      { title: "Security", detail: "RBAC and auth flows", icon: "ri-shield-user-line" },
      { title: "APIs", detail: "REST integrations", icon: "ri-route-line" },
      { title: "Data", detail: "MongoDB modeling", icon: "ri-database-2-line" },
      { title: "Frontend", detail: "React interfaces", icon: "ri-layout-2-line" },
      { title: "Backend", detail: "Express services", icon: "ri-server-line" }
    ]
  },
  {
    role: "DevOps Engineer",
    company: "Quantum Solutions",
    location: "Tunis, Tunisia",
    period: "01/01/2023 - 01/08/2023",
    summary:
      "Created separate CI/CD pipelines tailored to Laravel and Next.js applications.",
    highlights: [
      "Automated unit tests, linting, and SonarQube quality analysis before integration.",
      "Configured continuous delivery to staging and production, publishing artifacts to Nexus and packaging deployments with Docker.",
      "Reduced release time and manual deployment risk through automated build, test, and deployment workflows."
    ],
    icon: "ri-settings-4-line",
    pills: [
      { title: "CI", detail: "Unit tests and linting", icon: "ri-test-tube-line" },
      { title: "CD", detail: "Staging and production", icon: "ri-send-plane-2-line" },
      { title: "Jenkins", detail: "Pipeline orchestration", icon: "ri-hammer-line" },
      { title: "SonarQube", detail: "Quality checks", icon: "ri-shield-check-line" },
      { title: "Docker", detail: "Deployment packaging", icon: "ri-ship-2-line" },
      { title: "Nexus", detail: "Artifact flow", icon: "ri-store-2-line" }
    ]
  },
  {
    role: "IT Technician",
    company: "Sartex Group",
    location: "Monastir, Tunisia",
    period: "01/07/2022 - 31/08/2022",
    summary: "Provided technical support and business network and Windows system administration.",
    highlights: [
      "Configured switches and routers to support reliable company networks.",
      "Provided technical support and administered Windows systems.",
      "Installed, configured, and maintained computer hardware."
    ],
    icon: "ri-tools-line",
    pills: [
      { title: "Networking", detail: "Switches + routers", icon: "ri-router-line" },
      { title: "Systems", detail: "Windows administration", icon: "ri-windows-line" },
      { title: "Hardware", detail: "Installation + maintenance", icon: "ri-cpu-line" }
    ]
  },
  {
    role: "IT Technician",
    company: "SOPAT",
    location: "Monastir, Tunisia",
    period: "01/03/2022 - 30/04/2022",
    summary: "Supported video surveillance, network infrastructure, and server configuration.",
    highlights: [
      "Installed, configured, and optimized surveillance cameras for effective security coverage.",
      "Implemented, configured, and monitored local and wide-area networks.",
      "Configured web, DHCP, and DNS services to maintain connectivity, IP addressing, and domain-name resolution."
    ],
    icon: "ri-computer-line",
    pills: [
      { title: "Surveillance", detail: "Camera installation", icon: "ri-cctv-line" },
      { title: "Networking", detail: "LAN + WAN", icon: "ri-router-line" },
      { title: "Servers", detail: "Web + DHCP + DNS", icon: "ri-server-line" }
    ]
  }
];

const experienceTranslations = {
  fr: {
    "Informatica Soluzioni Aziendali": {
      role: "Ingénieur DevSecOps | Cybersécurité",
      location: "Raguse, Italie",
      summary: "Sécurisation du CI/CD, automatisation SOC (SIEM/SOAR) et ingénierie de plateformes cloud-native.",
      highlights: [
        "Développement et validation de règles Wazuh pour Linux et Windows : scans réseau, échecs répétés d'authentification, anomalies ICMP et activité Sysmon.",
        "Intégration de Wazuh et TheHive avec Python : normalisation des alertes, classification par sévérité, enrichissement des indicateurs et déduplication.",
        "Automatisation des analyses TheHive vers Shuffle et des synthèses d'enrichissement Telegram, avec validation des mesures de confinement par l'analyste.",
        "Création de sept tableaux de bord Wazuh et OpenSearch pour l'investigation des alertes, l'activité réseau, les échecs d'authentification, l'état des agents et l'intégrité des fichiers.",
        "Conception d'une plateforme e-commerce 3-tiers avec React/Nginx, des API Node.js/Express et RabbitMQ ; conteneurisation et CI/CD avec GitLab, SonarQube et Nexus.",
        "Déploiement sur Kubernetes avec Helm, Traefik et Argo CD ; gestion des secrets avec Vault et supervision via Prometheus, Grafana, Loki et Promtail."
      ],
      pills: [
        { title: "SOC", detail: "Wazuh + TheHive + Shuffle" },
        { title: "DevSecOps", detail: "GitLab CI/CD + SonarQube" },
        { title: "Kubernetes", detail: "Helm + Traefik + Argo CD" },
        { title: "Plateforme", detail: "React + Node.js + RabbitMQ" },
        { title: "Observabilité", detail: "Prometheus + Grafana + Loki" },
        { title: "Secrets", detail: "HashiCorp Vault" }
      ]
    },
    Nouvelair: {
      role: "Ingénieur DevOps",
      location: "Monastir, Tunisie",
      summary: "Mise en place d'un pipeline DevSecOps de bout en bout : tests, contrôles de sécurité, déploiements Kubernetes et supervision.",
      highlights: [
        "Intégration des tests unitaires et de dépendances, du mutation testing et de l'analyse qualité SonarQube au CI/CD.",
        "Ajout des contrôles de politiques OPA, de l'analyse des images Docker avec Trivy et de la détection d'intrusions à l'exécution avec Falco.",
        "Déploiement d'une application 3-tiers sur Kubernetes avec Helm, suivi de tests de performance et d'analyses de configuration.",
        "Configuration des notifications de pipeline sur Slack, de la supervision Prometheus/Grafana et de la gestion sécurisée des secrets avec HashiCorp Vault."
      ],
      pills: [
        { title: "CI/CD", detail: "GitLab + Jenkins" },
        { title: "Sécurité", detail: "OPA + Trivy" },
        { title: "Exécution", detail: "Détection d'intrusions Falco" },
        { title: "Déploiement", detail: "Helm sur Kubernetes" },
        { title: "Secrets", detail: "HashiCorp Vault" },
        { title: "Observabilité", detail: "Prometheus + Grafana" }
      ]
    },
    "Artificial Insight": {
      role: "Ingénieur DevOps",
      location: "Tunis, Tunisie",
      summary: "Conception et mise en œuvre de pipelines CI/CD pour plusieurs frameworks et langages.",
      highlights: [
        "Création de pipelines de livraison pour Next.js, NestJS, Spring Boot, Angular, Flutter, Lumen et Go-Gin.",
        "Automatisation de l'intégration et de la livraison avec GitLab CI et Jenkins afin de réduire les interventions manuelles.",
        "Intégration des contrôles qualité SonarQube, de la gestion des artefacts Nexus et des tests de performance JMeter."
      ],
      pills: [
        { title: "Pipelines", detail: "GitLab CI + Jenkins" },
        { title: "Qualité du code", detail: "Analyse SonarQube" },
        { title: "Artefacts", detail: "Dépôt Nexus" },
        { title: "Performance", detail: "Tests JMeter" },
        { title: "Conteneurs", detail: "Charges conteneurisées avec Docker" },
        { title: "Frameworks", detail: "Next.js, NestJS, Spring" }
      ]
    },
    Mobilite: {
      role: "Ingénieur logiciel junior",
      location: "Monastir, Tunisie",
      summary: "Développement d'un système sécurisé d'authentification et de gestion des rôles avec la stack MERN.",
      highlights: [
        "Mise en œuvre de la connexion, de l'inscription et de la récupération de mot de passe, avec des accès par rôle : Superadmin, Admin et Développeur.",
        "Gestion des profils utilisateurs et des autorisations selon les responsabilités de chaque rôle.",
        "Développement avec MongoDB, Express.js, React.js et Node.js, ainsi que d'API REST pour la communication entre frontend et backend."
      ],
      pills: [
        { title: "MERN", detail: "MongoDB + React + Node" },
        { title: "Sécurité", detail: "RBAC et authentification" },
        { title: "API", detail: "Intégrations REST" },
        { title: "Données", detail: "Modélisation MongoDB" },
        { title: "Frontend", detail: "Interfaces React" },
        { title: "Backend", detail: "Services Express" }
      ]
    },
    "Quantum Solutions": {
      role: "Ingénieur DevOps",
      location: "Tunis, Tunisie",
      summary: "Création de pipelines CI/CD distincts adaptés aux applications Laravel et Next.js.",
      highlights: [
        "Automatisation des tests unitaires, du linting et de l'analyse qualité SonarQube avant l'intégration.",
        "Configuration de la livraison continue vers les environnements de staging et de production, avec publication des artefacts sur Nexus et packaging Docker.",
        "Réduction des délais de livraison et des risques liés aux déploiements manuels grâce à l'automatisation du build, des tests et du déploiement."
      ],
      pills: [
        { title: "CI", detail: "Tests unitaires et linting" },
        { title: "CD", detail: "Staging et production" },
        { title: "Jenkins", detail: "Orchestration des pipelines" },
        { title: "SonarQube", detail: "Contrôles qualité" },
        { title: "Docker", detail: "Packaging des déploiements" },
        { title: "Nexus", detail: "Gestion des artefacts" }
      ]
    },
    "Sartex Group": {
      role: "Technicien informatique",
      location: "Monastir, Tunisie",
      summary: "Support technique, administration des réseaux d'entreprise et des systèmes Windows.",
      highlights: [
        "Configuration de switchs et de routeurs pour assurer le bon fonctionnement des réseaux de l'entreprise.",
        "Assistance technique et administration des systèmes Windows.",
        "Installation, configuration et maintenance du matériel informatique."
      ],
      pills: [
        { title: "Réseaux", detail: "Switchs + routeurs" },
        { title: "Systèmes", detail: "Administration Windows" },
        { title: "Matériel", detail: "Installation + maintenance" }
      ]
    },
    SOPAT: {
      role: "Technicien informatique",
      location: "Monastir, Tunisie",
      summary: "Intervention sur la vidéosurveillance, les réseaux et la configuration de serveurs.",
      highlights: [
        "Installation, configuration et optimisation de caméras de surveillance pour assurer une couverture de sécurité efficace.",
        "Mise en œuvre, configuration et supervision de réseaux locaux et étendus.",
        "Configuration des services Web, DHCP et DNS pour assurer la connectivité, la gestion des adresses IP et la résolution de noms de domaine."
      ],
      pills: [
        { title: "Vidéosurveillance", detail: "Installation de caméras" },
        { title: "Réseaux", detail: "LAN + WAN" },
        { title: "Serveurs", detail: "Web + DHCP + DNS" }
      ]
    }
  },
  it: {
    "Informatica Soluzioni Aziendali": {
      role: "Ingegnere DevSecOps | Cybersecurity",
      location: "Ragusa, Italia",
      summary: "Sicurezza CI/CD, automazione SOC (SIEM/SOAR) e ingegneria di piattaforme cloud-native.",
      highlights: [
        "Sviluppo e validazione di regole Wazuh per Linux e Windows: scansioni di rete, errori ripetuti di autenticazione, anomalie ICMP e attività Sysmon.",
        "Integrazione di Wazuh con TheHive tramite Python: normalizzazione degli alert, classificazione per gravità, arricchimento degli indicatori e deduplicazione.",
        "Automazione delle analisi da TheHive a Shuffle e dei riepiloghi di arricchimento su Telegram, con verifica delle azioni di contenimento da parte dell'analista.",
        "Realizzazione di sette dashboard Wazuh e OpenSearch per indagini sugli alert, attività di rete, errori di autenticazione, stato degli agent e integrità dei file.",
        "Progettazione di una piattaforma e-commerce a 3 livelli con React/Nginx, API Node.js/Express e RabbitMQ; containerizzazione e CI/CD con GitLab, SonarQube e Nexus.",
        "Deploy su Kubernetes con Helm, Traefik e Argo CD; gestione dei segreti con Vault e monitoraggio con Prometheus, Grafana, Loki e Promtail."
      ],
      pills: [
        { title: "SOC", detail: "Wazuh + TheHive + Shuffle" },
        { title: "DevSecOps", detail: "GitLab CI/CD + SonarQube" },
        { title: "Kubernetes", detail: "Helm + Traefik + Argo CD" },
        { title: "Piattaforma", detail: "React + Node.js + RabbitMQ" },
        { title: "Osservabilità", detail: "Prometheus + Grafana + Loki" },
        { title: "Segreti", detail: "HashiCorp Vault" }
      ]
    },
    Nouvelair: {
      role: "Ingegnere DevOps",
      location: "Monastir, Tunisia",
      summary: "Implementazione di una pipeline DevSecOps end-to-end con test, controlli di sicurezza, deploy Kubernetes e monitoraggio.",
      highlights: [
        "Integrazione nel CI/CD di test unitari e delle dipendenze, mutation testing e analisi della qualità del codice con SonarQube.",
        "Aggiunta di controlli delle policy con OPA, scansione delle immagini Docker con Trivy e rilevamento delle intrusioni runtime con Falco.",
        "Deploy di un'applicazione a tre livelli su Kubernetes con Helm, seguito da test di performance e scansioni della configurazione.",
        "Configurazione di notifiche della pipeline su Slack, monitoraggio con Prometheus e Grafana e gestione sicura dei segreti con HashiCorp Vault."
      ],
      pills: [
        { title: "CI/CD", detail: "GitLab + Jenkins" },
        { title: "Sicurezza", detail: "OPA + Trivy" },
        { title: "Runtime", detail: "Rilevamento intrusioni Falco" },
        { title: "Deploy", detail: "Helm su Kubernetes" },
        { title: "Segreti", detail: "HashiCorp Vault" },
        { title: "Monitoraggio", detail: "Prometheus + Grafana" }
      ]
    },
    "Artificial Insight": {
      role: "Ingegnere DevOps",
      location: "Tunisi, Tunisia",
      summary: "Progettazione e implementazione di pipeline CI/CD per diversi framework e linguaggi.",
      highlights: [
        "Creazione di pipeline di delivery per Next.js, NestJS, Spring Boot, Angular, Flutter, Lumen e Go-Gin.",
        "Automazione dell'integrazione e della delivery con GitLab CI e Jenkins, riducendo gli interventi manuali.",
        "Integrazione dei controlli di qualità SonarQube, della gestione degli artefatti Nexus e dei test di performance JMeter."
      ],
      pills: [
        { title: "Pipeline", detail: "GitLab CI + Jenkins" },
        { title: "Qualità del codice", detail: "Analisi SonarQube" },
        { title: "Artefatti", detail: "Repository Nexus" },
        { title: "Performance", detail: "Test JMeter" },
        { title: "Container", detail: "Workload containerizzati con Docker" },
        { title: "Framework", detail: "Next.js, NestJS, Spring" }
      ]
    },
    Mobilite: {
      role: "Ingegnere software junior",
      location: "Monastir, Tunisia",
      summary: "Sviluppo di un sistema sicuro di autenticazione e gestione dei ruoli con lo stack MERN.",
      highlights: [
        "Implementazione di accesso, registrazione e recupero password con autorizzazioni per i ruoli Superadmin, Admin e Sviluppatore.",
        "Gestione dei profili utente e dei permessi in base alle responsabilità di ciascun ruolo.",
        "Sviluppo con MongoDB, Express.js, React.js e Node.js, incluse API REST per la comunicazione tra frontend e backend."
      ],
      pills: [
        { title: "MERN", detail: "MongoDB + React + Node" },
        { title: "Sicurezza", detail: "RBAC e autenticazione" },
        { title: "API", detail: "Integrazioni REST" },
        { title: "Dati", detail: "Modellazione MongoDB" },
        { title: "Frontend", detail: "Interfacce React" },
        { title: "Backend", detail: "Servizi Express" }
      ]
    },
    "Quantum Solutions": {
      role: "Ingegnere DevOps",
      location: "Tunisi, Tunisia",
      summary: "Creazione di pipeline CI/CD distinte e specifiche per le applicazioni Laravel e Next.js.",
      highlights: [
        "Automazione di test unitari, linting e analisi della qualità SonarQube prima dell'integrazione.",
        "Configurazione della delivery continua verso staging e produzione, con pubblicazione degli artefatti su Nexus e packaging Docker.",
        "Riduzione dei tempi di rilascio e dei rischi dei deploy manuali automatizzando build, test e distribuzione."
      ],
      pills: [
        { title: "CI", detail: "Test unitari e linting" },
        { title: "CD", detail: "Staging e produzione" },
        { title: "Jenkins", detail: "Orchestrazione delle pipeline" },
        { title: "SonarQube", detail: "Controlli di qualità" },
        { title: "Docker", detail: "Packaging dei deploy" },
        { title: "Nexus", detail: "Gestione degli artefatti" }
      ]
    },
    "Sartex Group": {
      role: "Tecnico informatico",
      location: "Monastir, Tunisia",
      summary: "Supporto tecnico, amministrazione delle reti aziendali e dei sistemi Windows.",
      highlights: [
        "Configurazione di switch e router per garantire il corretto funzionamento delle reti aziendali.",
        "Assistenza tecnica e amministrazione dei sistemi Windows.",
        "Installazione, configurazione e manutenzione dell'hardware informatico."
      ],
      pills: [
        { title: "Reti", detail: "Switch + router" },
        { title: "Sistemi", detail: "Amministrazione Windows" },
        { title: "Hardware", detail: "Installazione + manutenzione" }
      ]
    },
    SOPAT: {
      role: "Tecnico informatico",
      location: "Monastir, Tunisia",
      summary: "Attività su videosorveglianza, reti e configurazione dei server.",
      highlights: [
        "Installazione, configurazione e ottimizzazione delle telecamere di sorveglianza per garantire un'efficace copertura di sicurezza.",
        "Implementazione, configurazione e monitoraggio di reti locali e geografiche.",
        "Configurazione dei servizi Web, DHCP e DNS per garantire connettività, gestione degli indirizzi IP e risoluzione dei nomi di dominio."
      ],
      pills: [
        { title: "Videosorveglianza", detail: "Installazione telecamere" },
        { title: "Reti", detail: "LAN + WAN" },
        { title: "Server", detail: "Web + DHCP + DNS" }
      ]
    }
  }
};

function renderExperiences(limit = workExperiences.length) {
  const experienceGrid = document.getElementById("experienceGrid");
  if (!experienceGrid) {
    return;
  }

  const items = workExperiences.slice(0, Math.max(0, limit));
  if (items.length === 0) {
    experienceGrid.innerHTML = `
      <article class="experience-card cinematic-panel">
        <p class="experience-summary">${t("noExperienceDataYet")}</p>
      </article>
    `;
    registerCardAnimations(experienceGrid);
    applyTiltEffects(experienceGrid);
    return;
  }

  experienceGrid.innerHTML = items
    .map((item, index) => {
      const localizedItems = experienceTranslations[currentLanguage] || {};
      const localized = localizedItems[item.company] || item;
      const pills = (localized.pills || item.pills || [])
        .map(
          (pill, pillIndex) => {
            const icon = (item.pills[pillIndex] || {}).icon || "ri-checkbox-circle-line";
            return `<li class="experience-pill"><i class="${icon}"></i><div><strong>${pill.title}</strong><small>${pill.detail}</small></div></li>`;
          }
        )
        .join("");
      const highlights = (localized.highlights || item.highlights || [])
        .map((highlight) => `<li>${highlight}</li>`)
        .join("");

      const accentClass = index % 2 === 1 ? " accent" : "";

      return `
        <article class="experience-card cinematic-panel timeline-card" style="--i:${index};">
          <span class="experience-timeline-marker" aria-hidden="true"></span>
          <div class="experience-top">
            <span class="experience-emblem${accentClass}"><i class="${item.icon || "ri-briefcase-line"}"></i></span>
            <div>
              <h3 class="experience-role">${localized.role || item.role}</h3>
              <p class="experience-company">${item.company}${localized.location || item.location ? ` · ${localized.location || item.location}` : ""}</p>
              <p class="experience-period">${item.period.replace("Present", t("experiencePresent"))}</p>
            </div>
          </div>
          <p class="experience-summary">${localized.summary || item.summary}</p>
          <ul class="experience-highlights">${highlights}</ul>
          <ul class="experience-pill-grid">${pills}</ul>
        </article>
      `;
    })
    .join("");

  registerCardAnimations(experienceGrid);
  applyTiltEffects(experienceGrid);
}

const certifications = [
  {
    title: "Introduction to Serverless on Kubernetes (LFS157)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Apr 2025",
    skills: "Serverless, Kubernetes",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-5e1c18fd-c9bb-4ae9-a8f6-658912967efb-certificate.pdf",
    logo: "assets/cert-logos/lfs157-badge.png"
  },
  {
    title: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Mar 2025",
    skills: "Kubernetes",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-5e39da2b-6d70-485f-9a2c-1627fc106393-certificate.pdf",
    logo: "assets/cert-logos/lfs158-badge.png"
  },
  {
    title: "Introduction to DevOps and Site Reliability Engineering (LFS162)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Mar 2025",
    skills: "DevOps, SRE",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-da4d80d0-c094-4b19-a8e0-f6c844e9b2d7-certificate.pdf",
    logo: "assets/cert-logos/lfs162-badge.png"
  },
  {
    title: "Introduction to DevSecOps for Managers (LFS180)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Apr 2025",
    skills: "DevSecOps",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-fb7e0de3-c0ec-4a99-9642-d2e2970218ed-certificate.pdf",
    logo: "assets/cert-logos/lfs180-badge.png"
  },
  {
    title: "Linux Foundation Certificate",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "2025",
    skills: "Cloud and DevOps",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-62a15b08-01cc-41d7-a159-892732b35cd9-certificate.pdf",
    logo: "assets/cert-logos/linux-foundation-logo.png"
  }
];

const fallbackRepos = [
  {
    name: "SITO-ISASRL",
    html_url: "https://github.com/wissemsghaier/SITO-ISASRL",
    description: "Portfolio and business web project.",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: new Date().toISOString()
  },
  {
    name: "e-commerce-microservice",
    html_url: "https://github.com/wissemsghaier/e-commerce-microservice",
    description: "Microservice architecture experiments.",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: new Date().toISOString()
  },
  {
    name: "project-next",
    html_url: "https://github.com/wissemsghaier/project-next",
    description: "Frontend project with TypeScript.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: new Date().toISOString()
  }
];

function formatRelativeDate(dateValue) {
  const now = Date.now();
  const value = new Date(dateValue).getTime();
  const delta = Math.max(0, now - value);
  const day = 1000 * 60 * 60 * 24;
  const month = day * 30;
  const year = day * 365;

  if (delta >= year) {
    const years = Math.floor(delta / year);
    return `${years}${t("yearsAgo")}`;
  }
  if (delta >= month) {
    const months = Math.floor(delta / month);
    return `${months}${t("monthsAgo")}`;
  }
  const days = Math.max(1, Math.floor(delta / day));
  return `${days}${t("daysAgo")}`;
}

function truncate(text, maxLength) {
  if (!text) {
    return t("noDescription");
  }
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 1)}...`;
}

function renderRepoCards(repositories) {
  const repoGrid = document.getElementById("repoGrid");
  if (!repoGrid) {
    return;
  }

  const cards = repositories
    .map((repo) => {
      const language = repo.language || t("mixed");
      return `
        <article class="repo-card">
          <div class="repo-top">
            <h3>${repo.name}</h3>
            <span class="repo-lang">${language}</span>
          </div>
          <p>${truncate(repo.description, 120)}</p>
          <div class="repo-meta">
            <span><i class="ri-star-line"></i> ${repo.stargazers_count}</span>
            <span><i class="ri-git-branch-line"></i> ${repo.forks_count}</span>
            <span><i class="ri-time-line"></i> ${formatRelativeDate(repo.pushed_at)}</span>
          </div>
          <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noreferrer">${t("openRepository")}</a>
        </article>
      `;
    })
    .join("");

  repoGrid.innerHTML = cards;
  registerCardAnimations(repoGrid);
  applyTiltEffects(repoGrid);
}

function renderLinkedInProjects() {
  const linkedInGrid = document.getElementById("linkedinProjectGrid");
  if (!linkedInGrid) {
    return;
  }

  if (linkedinProjects.length === 0) {
    linkedInGrid.innerHTML = `
      <article class="repo-card">
        <h3>${t("noLinkedinProjects")}</h3>
        <p>${t("editLinkedinProjects")}</p>
      </article>
    `;
    registerCardAnimations(linkedInGrid);
    applyTiltEffects(linkedInGrid);
    return;
  }

  linkedInGrid.innerHTML = linkedinProjects
    .map((project) => {
      const tags = (project.tags || []).map((tag) => `<li>${tag}</li>`).join("");
      const linkMarkup = project.link
        ? `<a class="repo-link" href="${project.link}" target="_blank" rel="noreferrer">${t("openOnLinkedin")}</a>`
        : "";

      return `
        <article class="repo-card cinematic-panel">
          <div class="repo-top">
            <h3>${project.title}</h3>
            <span class="repo-lang">${project.period || t("projectLabel")}</span>
          </div>
          <p>${project.description || t("noDescription")}</p>
          <div class="repo-meta">
            <span><i class="ri-building-line"></i> ${project.company || t("independent")}</span>
          </div>
          <ul class="chips">${tags}</ul>
          ${linkMarkup}
        </article>
      `;
    })
    .join("");

  registerCardAnimations(linkedInGrid);
  applyTiltEffects(linkedInGrid);
}

function renderCertifications() {
  const certificationGrid = document.getElementById("certificationGrid");
  if (!certificationGrid) {
    return;
  }

  const toViewerUrl = (pdfUrl) => {
    if (!pdfUrl) {
      return "#";
    }
    return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(pdfUrl)}`;
  };

  if (certifications.length === 0) {
    certificationGrid.innerHTML = `
      <article class="cert-card">
        <h3>${t("noCertificationsYet")}</h3>
        <p>${t("addCertificationsHint")}</p>
      </article>
    `;
    registerCardAnimations(certificationGrid);
    applyTiltEffects(certificationGrid);
    return;
  }

  certificationGrid.innerHTML = certifications
    .map((certificate, index) => {
      const expiresMarkup = certificate.expires
        ? `<li><i class="ri-calendar-check-line"></i> ${t("expires")}: ${certificate.expires}</li>`
        : "";
      const skillsMarkup = certificate.skills
        ? `<p class="cert-skills"><strong>${t("skillsLabel")}:</strong> ${certificate.skills}</p>`
        : "";

      return `
        <article class="cert-card cinematic-panel" style="--i:${index};">
          <div class="cert-head">
            <span class="cert-logo-wrap">
              <img
                class="cert-logo"
                src="${certificate.logo || ""}"
                alt="${certificate.issuer} logo"
                loading="lazy"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"
              />
              <span class="cert-logo-fallback" aria-hidden="true"><i class="ri-award-line"></i></span>
            </span>
            <span class="cert-verified"><i class="ri-checkbox-circle-fill"></i>${t("verified")}</span>
          </div>
          <h3>${certificate.title}</h3>
          <p class="cert-issuer">
            <a href="${certificate.issuerUrl || '#'}" target="_blank" rel="noreferrer">${certificate.issuer}</a>
          </p>
          <ul class="cert-meta">
            <li><i class="ri-calendar-line"></i> ${t("issued")}: ${certificate.issued}</li>
            ${expiresMarkup}
          </ul>
          ${skillsMarkup}
          <a class="cert-link" href="${toViewerUrl(certificate.credentialUrl)}" target="_blank" rel="noreferrer">
            <i class="ri-external-link-line"></i>
            ${t("showCredential")}
          </a>
        </article>
      `;
    })
    .join("");

  registerCardAnimations(certificationGrid);
  applyTiltEffects(certificationGrid);
}

async function loadGitHubProfile() {
  const avatar = document.getElementById("profileAvatar");
  const profileName = document.getElementById("profileName");
  const profileRole = document.getElementById("profileRole");
  const profileLocation = document.getElementById("profileLocation");
  const statRepos = document.getElementById("statRepos");
  const statFollowers = document.getElementById("statFollowers");
  const statFollowing = document.getElementById("statFollowing");

  if (!avatar && !profileName && !profileRole && !profileLocation && !statRepos && !statFollowers && !statFollowing) {
    return;
  }

  const profileUrl = `https://api.github.com/users/${GITHUB_USERNAME}`;
  const response = await fetch(profileUrl);
  if (!response.ok) {
    throw new Error("Cannot load GitHub profile");
  }
  const profile = await response.json();

  if (avatar && profile.avatar_url) {
    avatar.src = profile.avatar_url;
  }
  if (profileName) {
    profileName.textContent = profile.name || GITHUB_USERNAME;
  }
  if (profileRole) {
    profileRole.textContent = t("profileDefaultRole");
  }
  if (profileLocation) {
    profileLocation.textContent = profile.location || t("profileDefaultLocation");
  }
  if (statRepos) {
    statRepos.textContent = String(profile.public_repos || 0);
    statRepos.dataset.count = String(profile.public_repos || 0);
  }
  if (statFollowers) {
    statFollowers.textContent = String(profile.followers || 0);
    statFollowers.dataset.count = String(profile.followers || 0);
  }
  if (statFollowing) {
    statFollowing.textContent = String(profile.following || 0);
    statFollowing.dataset.count = String(profile.following || 0);
  }

  animateCounters();
}

async function loadGitHubRepositories() {
  const reposUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;
  const response = await fetch(reposUrl);
  if (!response.ok) {
    throw new Error("Cannot load GitHub repositories");
  }

  const repos = await response.json();
  const selectedRepos = repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 8);

  if (selectedRepos.length === 0) {
    renderRepoCards(fallbackRepos);
    return;
  }

  renderRepoCards(selectedRepos);
}

async function initGitHubData() {
  try {
    await Promise.all([loadGitHubProfile(), loadGitHubRepositories()]);
  } catch (error) {
    renderRepoCards(fallbackRepos);
  }
}

function animateCounter(element, target) {
  const start = 0;
  const duration = 900;
  const startTime = performance.now();

  function step(timestamp) {
    const progress = Math.min(1, (timestamp - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + (target - start) * eased);
    element.textContent = String(value);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function animateCounters() {
  const stats = document.querySelectorAll(".stats-row strong[data-count]");
  stats.forEach((stat) => {
    const target = Number(stat.dataset.count || "0");
    animateCounter(stat, target);
  });
}

function normalizeSkillCardHeights() {
  const cards = Array.from(document.querySelectorAll(".skill-card"));
  if (cards.length === 0) {
    return;
  }

  cards.forEach((card) => {
    card.style.height = "";
    card.style.minHeight = "";
  });

  if (window.innerWidth < 981) {
    return;
  }

  const maxHeight = cards.reduce((max, card) => Math.max(max, card.offsetHeight), 0);
  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
    card.style.minHeight = `${maxHeight}px`;
  });
}

function applyTiltEffects(scope = document) {
  const root = scope && typeof scope.querySelectorAll === "function" ? scope : document;
  const tiltElements = root.querySelectorAll(
    ".home-mini-grid article, .repo-card, .about-grid article, .about-focus-grid article, .about-skill-level-grid article, .knowledge-grid article, .experience-card, .achievement-grid article, .cert-grid article, .cert-academic-card, .education-grid article, .timeline article, .profile-card, .tools-block, .skill-card"
  );

  tiltElements.forEach((element) => {
    if (element.dataset.tiltReady === "1") {
      return;
    }
    element.dataset.tiltReady = "1";

    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -4;
      const ry = ((x / rect.width) - 0.5) * 5;
      element.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      element.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    });

    element.addEventListener("mouseleave", () => {
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
    });
  });
}

function setupScrollProgress() {
  const root = document.documentElement;

  const updateProgress = () => {
    const scrollTop = root.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = Math.max(1, root.scrollHeight - root.clientHeight);
    const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function ensureCardVisibilityFallback() {
  window.setTimeout(() => {
    const revealed = document.querySelectorAll(".card-animate.card-in-view").length;
    if (revealed > 0) {
      return;
    }

    document.querySelectorAll(".card-animate").forEach((card) => {
      card.classList.add("card-in-view");
    });
  }, 950);
}

renderExperiences();
registerCardAnimations();
applyTiltEffects();
renderCertifications();
setupScrollProgress();
setupMobileNav();
setupLanguageSwitcher();
applyTranslations();
ensureCardVisibilityFallback();
loadGitHubProfile().catch(() => {});
normalizeSkillCardHeights();

window.addEventListener("load", normalizeSkillCardHeights);

let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(normalizeSkillCardHeights, 120);
});
