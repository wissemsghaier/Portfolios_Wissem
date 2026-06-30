const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
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
    ".about-grid article, .about-focus-grid article, .knowledge-grid article, .tool-group, .experience-card, .achievement-grid article, .cert-card, .education-grid article, .timeline article, .repo-card, .contact-grid a, .profile-card, .tools-block, .skill-card"
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

const certifications = [
  {
    title: "Introduction to Serverless on Kubernetes (LFS157)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Apr 2025",
    skills: "Serverless, Kubernetes",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-5e1c18fd-c9bb-4ae9-a8f6-658912967efb-certificate.pdf",
    logo: "https://training.linuxfoundation.org/wp-content/uploads/2024/04/LF-training-logo.png"
  },
  {
    title: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Mar 2025",
    skills: "Kubernetes",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-5e39da2b-6d70-485f-9a2c-1627fc106393-certificate.pdf",
    logo: "https://training.linuxfoundation.org/wp-content/uploads/2024/04/LF-training-logo.png"
  },
  {
    title: "Introduction to DevOps and Site Reliability Engineering (LFS162)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Mar 2025",
    skills: "DevOps, SRE",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-da4d80d0-c094-4b19-a8e0-f6c844e9b2d7-certificate.pdf",
    logo: "https://training.linuxfoundation.org/wp-content/uploads/2024/04/LF-training-logo.png"
  },
  {
    title: "Introduction to DevSecOps for Managers (LFS180)",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "Apr 2025",
    skills: "DevSecOps",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-fb7e0de3-c0ec-4a99-9642-d2e2970218ed-certificate.pdf",
    logo: "https://training.linuxfoundation.org/wp-content/uploads/2024/04/LF-training-logo.png"
  },
  {
    title: "Linux Foundation Certificate",
    issuer: "The Linux Foundation",
    issuerUrl: "https://www.linkedin.com/company/the-linux-foundation/",
    issued: "2025",
    skills: "Cloud and DevOps",
    credentialUrl:
      "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/397bca9f-270d-4514-9f40-8c835614d54a-wissem-sghaer-62a15b08-01cc-41d7-a159-892732b35cd9-certificate.pdf",
    logo: "https://training.linuxfoundation.org/wp-content/uploads/2024/04/LF-training-logo.png"
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
    return `${years}y ago`;
  }
  if (delta >= month) {
    const months = Math.floor(delta / month);
    return `${months}mo ago`;
  }
  const days = Math.max(1, Math.floor(delta / day));
  return `${days}d ago`;
}

function truncate(text, maxLength) {
  if (!text) {
    return "No description provided.";
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
      const language = repo.language || "Mixed";
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
          <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noreferrer">Open repository</a>
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
        <h3>No LinkedIn projects added yet</h3>
        <p>Edit the linkedinProjects array in script.js to add your project history.</p>
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
        ? `<a class="repo-link" href="${project.link}" target="_blank" rel="noreferrer">Open on LinkedIn</a>`
        : "";

      return `
        <article class="repo-card cinematic-panel">
          <div class="repo-top">
            <h3>${project.title}</h3>
            <span class="repo-lang">${project.period || "Project"}</span>
          </div>
          <p>${project.description || "No description."}</p>
          <div class="repo-meta">
            <span><i class="ri-building-line"></i> ${project.company || "Independent"}</span>
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
        <h3>No certifications yet</h3>
        <p>Add your certifications in the certifications array inside script.js.</p>
      </article>
    `;
    registerCardAnimations(certificationGrid);
    applyTiltEffects(certificationGrid);
    return;
  }

  certificationGrid.innerHTML = certifications
    .map((certificate, index) => {
      const expiresMarkup = certificate.expires
        ? `<li><i class="ri-calendar-check-line"></i> Expires: ${certificate.expires}</li>`
        : "";
      const skillsMarkup = certificate.skills
        ? `<p class="cert-skills"><strong>Skills:</strong> ${certificate.skills}</p>`
        : "";

      return `
        <article class="cert-card cinematic-panel" style="--i:${index};">
          <div class="cert-head">
            <img class="cert-logo" src="${certificate.logo}" alt="${certificate.issuer} logo" loading="lazy" />
            <span class="cert-verified"><i class="ri-checkbox-circle-fill"></i>Verified</span>
          </div>
          <h3>${certificate.title}</h3>
          <p class="cert-issuer">
            <a href="${certificate.issuerUrl || '#'}" target="_blank" rel="noreferrer">${certificate.issuer}</a>
          </p>
          <ul class="cert-meta">
            <li><i class="ri-calendar-line"></i> Issued: ${certificate.issued}</li>
            ${expiresMarkup}
          </ul>
          ${skillsMarkup}
          <a class="cert-link" href="${certificate.credentialUrl}" target="_blank" rel="noreferrer">
            <i class="ri-external-link-line"></i>
            Show credential
          </a>
        </article>
      `;
    })
    .join("");

  registerCardAnimations(certificationGrid);
  applyTiltEffects(certificationGrid);
}

async function loadGitHubProfile() {
  const profileUrl = `https://api.github.com/users/${GITHUB_USERNAME}`;
  const response = await fetch(profileUrl);
  if (!response.ok) {
    throw new Error("Cannot load GitHub profile");
  }
  const profile = await response.json();

  const avatar = document.getElementById("profileAvatar");
  const profileName = document.getElementById("profileName");
  const profileRole = document.getElementById("profileRole");
  const profileLocation = document.getElementById("profileLocation");
  const statRepos = document.getElementById("statRepos");
  const statFollowers = document.getElementById("statFollowers");
  const statFollowing = document.getElementById("statFollowing");

  if (avatar && profile.avatar_url) {
    avatar.src = profile.avatar_url;
  }
  if (profileName) {
    profileName.textContent = profile.name || GITHUB_USERNAME;
  }
  if (profileRole) {
    profileRole.textContent = profile.company || "DevOps Engineer";
  }
  if (profileLocation) {
    profileLocation.textContent = profile.location || "Italy";
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
    ".repo-card, .about-grid article, .about-focus-grid article, .knowledge-grid article, .experience-card, .achievement-grid article, .cert-grid article, .education-grid article, .timeline article, .profile-card, .tools-block, .skill-card"
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

registerCardAnimations();
applyTiltEffects();
renderCertifications();
loadGitHubProfile().catch(() => {});
normalizeSkillCardHeights();

window.addEventListener("load", normalizeSkillCardHeights);

let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(normalizeSkillCardHeights, 120);
});
