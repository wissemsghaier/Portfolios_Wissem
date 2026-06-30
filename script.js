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
    aboutHeadingHtml: "Meet your next <span class=\"gradient-text\">DevOps partner</span>",
    aboutSubline:
      "Hands-on DevOps experience delivering scalable infrastructure and automation solutions for modern applications.",
    aboutStoryTitle: "DevOps Engineer",
    aboutStoryP1:
      "I am an experienced DevOps Engineer focused on secure CI/CD, container orchestration, and platform automation across modern cloud-native environments.",
    aboutStoryP2:
      "My work combines release engineering, observability, and DevSecOps practices to deliver resilient infrastructures and reliable software delivery workflows.",
    skillsEyebrow: "Tools & Technologies",
    experienceEyebrow: "Work Experience",
    experienceHeadingHtml: "Building the future<br /><span>one deployment at a time</span>",
    experienceSubline: "Experiences imported from LinkedIn profile, showing the 6 most recent roles.",
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
    showCredential: "Show credential",
    noCertificationsYet: "No certifications yet",
    addCertificationsHint: "Add your certifications in the certifications array inside script.js.",
    noExperienceDataYet: "No experience data available yet. Update linkedinExperiences in script.js.",
    noDescription: "No description provided.",
    openRepository: "Open repository",
    noLinkedinProjects: "No LinkedIn projects added yet",
    editLinkedinProjects: "Edit the linkedinProjects array in script.js to add your project history.",
    openOnLinkedin: "Open on LinkedIn",
    profileDefaultRole: "DevOps Engineer",
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
    aboutHeadingHtml: "Votre prochain <span class=\"gradient-text\">partenaire DevOps</span>",
    aboutSubline:
      "Experience DevOps terrain pour livrer des infrastructures evolutives et des solutions d'automatisation pour des applications modernes.",
    aboutStoryTitle: "Ingenieur DevOps",
    aboutStoryP1:
      "Je suis un ingenieur DevOps experimente, focalise sur le CI/CD securise, l'orchestration de conteneurs et l'automatisation de plateformes cloud-native.",
    aboutStoryP2:
      "Mon travail combine release engineering, observabilite et pratiques DevSecOps pour livrer des infrastructures resilientes et des workflows fiables.",
    skillsEyebrow: "Outils et technologies",
    experienceEyebrow: "Experience professionnelle",
    experienceHeadingHtml: "Construire le futur<br /><span>deploiement apres deploiement</span>",
    experienceSubline: "Experiences importees depuis LinkedIn, affichant les 6 roles les plus recents.",
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
    showCredential: "Voir le certificat",
    noCertificationsYet: "Aucune certification pour le moment",
    addCertificationsHint: "Ajoutez vos certifications dans le tableau certifications de script.js.",
    noExperienceDataYet: "Aucune experience disponible. Mettez a jour linkedinExperiences dans script.js.",
    noDescription: "Aucune description fournie.",
    openRepository: "Ouvrir le depot",
    noLinkedinProjects: "Aucun projet LinkedIn ajoute",
    editLinkedinProjects: "Modifiez le tableau linkedinProjects dans script.js pour ajouter votre historique.",
    openOnLinkedin: "Ouvrir sur LinkedIn",
    profileDefaultRole: "Ingenieur DevOps",
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
    aboutHeadingHtml: "Il tuo prossimo <span class=\"gradient-text\">partner DevOps</span>",
    aboutSubline:
      "Esperienza DevOps pratica nel fornire infrastrutture scalabili e soluzioni di automazione per applicazioni moderne.",
    aboutStoryTitle: "Ingegnere DevOps",
    aboutStoryP1:
      "Sono un Ingegnere DevOps con esperienza, focalizzato su CI/CD sicuro, orchestrazione di container e automazione di piattaforme cloud-native.",
    aboutStoryP2:
      "Il mio lavoro unisce release engineering, osservabilita e pratiche DevSecOps per infrastrutture resilienti e delivery affidabile.",
    skillsEyebrow: "Strumenti e tecnologie",
    experienceEyebrow: "Esperienza lavorativa",
    experienceHeadingHtml: "Costruire il futuro<br /><span>un deployment alla volta</span>",
    experienceSubline: "Esperienze importate da LinkedIn, con i 6 ruoli piu recenti.",
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
    showCredential: "Mostra certificato",
    noCertificationsYet: "Nessuna certificazione al momento",
    addCertificationsHint: "Aggiungi le certificazioni nell'array certifications dentro script.js.",
    noExperienceDataYet: "Nessuna esperienza disponibile. Aggiorna linkedinExperiences in script.js.",
    noDescription: "Nessuna descrizione disponibile.",
    openRepository: "Apri repository",
    noLinkedinProjects: "Nessun progetto LinkedIn aggiunto",
    editLinkedinProjects: "Modifica l'array linkedinProjects in script.js per aggiungere la tua storia progetti.",
    openOnLinkedin: "Apri su LinkedIn",
    profileDefaultRole: "Ingegnere DevOps",
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
  if (navLinks.length >= 6) {
    navLinks[0].textContent = t("navHome");
    navLinks[1].textContent = t("navAbout");
    navLinks[2].textContent = t("navSkills");
    navLinks[3].textContent = t("navExperience");
    navLinks[4].textContent = t("navCertifications");
    navLinks[5].textContent = t("navContact");
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
  updateText(".about-story-tile h3", t("aboutStoryTitle"));
  const storyParagraphs = document.querySelectorAll(".about-story-tile p");
  if (storyParagraphs[0]) {
    storyParagraphs[0].textContent = t("aboutStoryP1");
  }
  if (storyParagraphs[1]) {
    storyParagraphs[1].textContent = t("aboutStoryP2");
  }

  updateText(".skills-heading .eyebrow", t("skillsEyebrow"));

  updateText(".experience-heading .eyebrow", t("experienceEyebrow"));
  updateHtml(".experience-heading h2", t("experienceHeadingHtml"));
  updateText(".experience-subline", t("experienceSubline"));

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

  renderExperiences(6);
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

const linkedinExperiences = [
  {
    role: "DevOps Engineer",
    company: "Informatica Soluzioni Aziendali",
    period: "Sep 2025 - Present",
    summary:
      "Building and operating a 3-tier PERN platform with full containerization, GitOps delivery, and observability for production workloads.",
    icon: "ri-terminal-window-line",
    pills: [
      { title: "PERN", detail: "PostgreSQL + Node.js", icon: "ri-stack-line" },
      { title: "GitOps", detail: "ArgoCD continuous deploy", icon: "ri-git-branch-line" },
      { title: "Kubernetes", detail: "Cluster operations", icon: "ri-steering-2-line" },
      { title: "Monitoring", detail: "Loki + Grafana", icon: "ri-line-chart-line" },
      { title: "Registry", detail: "Nexus artifacts", icon: "ri-store-2-line" },
      { title: "Docker", detail: "Platform containerization", icon: "ri-ship-2-line" }
    ]
  },
  {
    role: "DevOps Engineer",
    company: "Nouvelair",
    period: "Jan 2025 - Sep 2025",
    summary:
      "Implemented an end-to-end DevSecOps pipeline with policy checks, image scanning, runtime detection, and automated Kubernetes deployment.",
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
    period: "Jun 2024 - Sep 2024",
    summary:
      "Designed multi-framework CI/CD pipelines and integrated quality gates, artifact management, and performance testing for delivery reliability.",
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
    period: "Jun 2024 - Jun 2024",
    summary:
      "Developed secure authentication and role-based authorization workflows with REST APIs in a full MERN architecture.",
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
    period: "Jan 2023 - Aug 2023",
    summary:
      "Built dedicated CI and CD pipelines for Laravel and Next.js, with automated testing, quality controls, and environment deployments.",
    icon: "ri-settings-4-line",
    pills: [
      { title: "CI", detail: "Unit tests and linting", icon: "ri-test-tube-line" },
      { title: "CD", detail: "Staging and production", icon: "ri-send-plane-2-line" },
      { title: "Jenkins", detail: "Pipeline orchestration", icon: "ri-hammer-line" },
      { title: "SonarQube", detail: "Quality checks", icon: "ri-shield-check-line" },
      { title: "Docker", detail: "Deployment packaging", icon: "ri-ship-2-line" },
      { title: "Nexus", detail: "Artifact flow", icon: "ri-store-2-line" }
    ]
  }
];

function renderExperiences(limit = 6) {
  const experienceGrid = document.getElementById("experienceGrid");
  if (!experienceGrid) {
    return;
  }

  const items = linkedinExperiences.slice(0, Math.max(0, limit));
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
      const pills = (item.pills || [])
        .map(
          (pill) =>
            `<li class="experience-pill"><i class="${pill.icon || "ri-checkbox-circle-line"}"></i><div><strong>${pill.title}</strong><small>${pill.detail}</small></div></li>`
        )
        .join("");

      const accentClass = index % 2 === 1 ? " accent" : "";

      return `
        <article class="experience-card cinematic-panel timeline-card" style="--i:${index};">
          <span class="experience-timeline-marker" aria-hidden="true"></span>
          <div class="experience-top">
            <span class="experience-emblem${accentClass}"><i class="${item.icon || "ri-briefcase-line"}"></i></span>
            <div>
              <h3 class="experience-role">${item.role}</h3>
              <p class="experience-company">${item.company}</p>
              <p class="experience-period">${item.period}</p>
            </div>
          </div>
          <p class="experience-summary">${item.summary}</p>
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
          <a class="cert-link" href="${certificate.credentialUrl}" target="_blank" rel="noreferrer">
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
    profileRole.textContent = profile.company || t("profileDefaultRole");
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

renderExperiences(6);
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
