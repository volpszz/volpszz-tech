"use client";

import { useState } from "react";

const github = "https://github.com/volpszz";
const linkedin = "https://www.linkedin.com/in/arthur-volpatoo/";
const projects = [
  {
    name: "Hardware Monitor",
    slug: "hardware-monitor",
    category: "Systems",
    language: "Rust",
    description:
      "A Windows terminal monitor for CPU, RAM and GPU. Built around real sensor readings, native APIs and a persistent PowerShell bridge.",
    tags: ["Rust", "Windows APIs", "PowerShell"],
    visual: "hardware",
  },
  {
    name: "CyberShield",
    slug: "cybershield-website",
    category: "Web",
    language: "JavaScript",
    description:
      "A full-stack learning application with authentication, protected sessions and SQLite persistence. Security concepts put into practice — not a live security service.",
    tags: ["JavaScript", "Express", "SQLite"],
    visual: "web",
  },
  {
    name: "TCP Port Scanner",
    slug: "simple-port-scanner",
    category: "Security",
    language: "Python",
    description:
      "An educational TCP scanner exploring sockets, hostname resolution and network reconnaissance. For owned systems or explicitly authorized testing only.",
    tags: ["Python", "Sockets", "TCP/IP"],
    visual: "scanner",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className={`project-visual ${kind}`} aria-hidden="true">
      {kind === "hardware" ? (
        <div className="mini-terminal">
          <div className="terminal-title">
            <span>● ● ●</span> hardware-monitor.exe
          </div>
          <div className="terminal-body">
            <p className="accent">HARDWARE MONITOR</p>
            <p>Windows · Rust · Native sensors</p>
            <div className="sensor">
              <span>CPU</span>
              <i style={{ width: "63%" }} />
              <b>sysinfo</b>
            </div>
            <div className="sensor">
              <span>RAM</span>
              <i style={{ width: "42%" }} />
              <b>GiB</b>
            </div>
            <div className="sensor">
              <span>GPU</span>
              <i style={{ width: "76%" }} />
              <b>DXGI</b>
            </div>
            <p className="terminal-muted">
              Interface illustration · not live readings
            </p>
          </div>
        </div>
      ) : kind === "web" ? (
        <div className="mini-browser">
          <div className="browser-bar">
            <span>● ● ●</span>
            <span>cybershield / local app</span>
          </div>
          <div className="shield-content">
            <span className="shield-symbol">⌘</span>
            <strong>
              Security starts
              <br />
              with the fundamentals.
            </strong>
            <div className="mock-button">
              Authentication & sessions <Arrow />
            </div>
            <div className="mock-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : (
        <div className="scanner-art">
          <div className="scan-rings">
            <i />
            <i />
            <i />
            <span>+</span>
          </div>
          <div className="scan-label">
            <span>NETWORK RECONNAISSANCE</span>
            <strong>TCP / SOCKETS</strong>
            <p>Educational tooling. Authorized targets.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home" aria-label="volpsz home">
            volpsz<span className="accent">/</span>
          </a>
          <nav
            className={menuOpen ? "navigation open" : "navigation"}
            aria-label="Main navigation"
          >
            {[
              ["Work", "work"],
              ["About", "about"],
              ["Stack", "stack"],
              ["Goals", "goals"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s connect <Arrow diagonal />
            </a>
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close −" : "Menu +"}
          </button>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              ARTHUR VOLPATO · SOFTWARE & CYBERSECURITY
            </p>
            <h1>
              Curious by nature.
              <br />
              Builder by <span className="serif">choice.</span>
            </h1>
            <p className="hero-description">
              I’m Arthur Volpato. Exploring the intersection of software,
              systems and security — one real project at a time.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow accent">WORK</p>
              <h2>Selected projects.</h2>
            </div>
            <p className="section-description">
              Open-source projects in software, systems and security.
            </p>
          </div>
          <div className="work-toolbar">
            <div className="filters" role="group" aria-label="Filter projects">
              {["All", "Systems", "Web", "Security"].map((category) => (
                <button
                  type="button"
                  aria-pressed={filter === category}
                  key={category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <a
              className="text-link repo-link"
              href={`${github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              All repositories <Arrow diagonal />
            </a>
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <a
                  href={`${github}/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="visual-link"
                >
                  <ProjectVisual kind={project.visual} />
                  <span className="visual-arrow">
                    <Arrow diagonal />
                  </span>
                </a>
                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>
                      <i
                        className={`language-dot ${project.language.toLowerCase()}`}
                      />
                      {project.language}
                    </span>
                  </div>
                  <h3>
                    <a
                      href={`${github}/${project.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow accent">ABOUT</p>
              <h2>
                Software foundations.
                <br />
                Security mindset.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m a Software Engineering student at UniCesumar and work in
                Help Desk N1 at an ISP/IoT company.
              </p>
              <p>
                I’m building with Rust, Python and C while learning JavaScript,
                React and Next.js. I’m pursuing a career in Information Security,
                with interests in Blue Team, Red Team, Purple Team and Security
                Engineering — developing skills across cyber defense, authorized
                offensive security and collaboration between both.
              </p>
              <div
                className="career-interests"
                role="group"
                aria-label="Cybersecurity career interests"
              >
                {[
                  "Blue Team",
                  "Red Team",
                  "Purple Team",
                  "Security Engineering",
                ].map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="stack" className="container section stack-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow accent">STACK</p>
              <h2>My toolkit.</h2>
            </div>
            <p className="section-description">
              Building with Rust, Python and C. Expanding into the web.
            </p>
          </div>
          <div className="stack-grid">
            {[
              {
                title: "Languages",
                items: ["Rust", "Python", "C", "JavaScript"],
              },
              {
                title: "Web",
                items: ["HTML", "CSS", "React", "Next.js"],
              },
              {
                title: "Systems, networking & tools",
                items: [
                  "Linux",
                  "Bash",
                  "PowerShell",
                  "Git",
                  "GitHub",
                  "Windows",
                ],
              },
            ].map((group) => (
              <div className="stack-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="stack-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="goals" className="goals-section">
          <div className="container section">
            <div className="section-heading">
              <div>
                <p className="eyebrow accent">GOALS</p>
                <h2>What’s next.</h2>
              </div>
              <p className="section-description">
                Continuous learning toward a career in Information Security.
              </p>
            </div>
            <div className="goals-grid">
              {[
                {
                  title: "Industry certifications",
                  description:
                    "I’m continuously learning and actively pursuing industry certifications to strengthen my cybersecurity foundations. CompTIA Network+ and Security+ are examples of certifications I’m working toward.",
                },
                {
                  title: "Cyber labs & CTFs",
                  description:
                    "Practice in authorized labs and CTFs, explore security tools and document the approaches and lessons learned.",
                },
                {
                  title: "Knowledge into projects",
                  description:
                    "Build security-focused projects that demonstrate my knowledge of tools, with reproducible instructions and clear results and limitations.",
                },
              ].map((goal) => (
                <article className="goal-card" key={goal.title}>
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                </article>
              ))}
            </div>
            <p className="goals-note">
              Certification names are examples of my current learning goals,
              not credentials I already hold. Labs and projects support that
              journey.
            </p>
          </div>
        </section>
        <section id="contact" className="container contact-section">
          <div className="contact-top">
            <p className="eyebrow accent">CONTACT</p>
          </div>
          <h2>Let’s connect.</h2>
          <div className="contact-bottom">
            <p>
              Have a project, an opportunity or an idea? Let’s talk.
            </p>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Connect on LinkedIn <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="footer-brand" href="#home">
          volpsz<span className="accent">/</span>
        </a>
        <p>Built with curiosity. And Next.js.</p>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub <Arrow diagonal />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Arrow diagonal />
          </a>
          <a href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}
