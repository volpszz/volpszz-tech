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
    number: "01",
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
    number: "02",
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
    number: "03",
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
            v<span>.</span>
            <span className="wordmark-name">
              volpsz<span className="accent">/</span>
            </span>
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
              <span className="status-dot" /> SOFTWARE & SECURITY · @VOLPSZZ
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
            <div className="hero-caption">
              <span>ENGINEERING STUDENT</span>
              <span className="caption-line" />
              <span>ALWAYS BUILDING</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-grid" />
            <span className="art-coordinate top">
              FIG. 001 — THE BUILDER’S MINDSET
            </span>
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="monogram">
              av<span>.</span>
            </div>
            <span className="floating-tag tag-one">&lt; build /&gt;</span>
            <span className="floating-tag tag-two">secure by curiosity</span>
            <div className="art-bottom">
              <span>RUST · PYTHON · C</span>
              <span>↗</span>
            </div>
          </div>
        </section>
        <div className="focus-strip">
          <div className="container strip-inner">
            <span className="eyebrow">MY EXPLORATION SPACE</span>
            <span>Software engineering</span>
            <span className="accent">✳</span>
            <span>Systems & networking</span>
            <span className="accent">✳</span>
            <span>Security engineering</span>
          </div>
        </div>
        <section id="work" className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow accent">01 / SELECTED WORK</p>
              <h2>
                Less talk.
                <br />
                More <span className="serif">building.</span>
              </h2>
            </div>
            <p className="section-description">
              Experiments turned into working projects.
              <br />
              Open source, hands-on, always evolving.
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
                  {category === "All" && <span>03</span>}
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
                    <span>
                      {project.number} / {project.category}
                    </span>
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
              <p className="eyebrow accent">02 / THE PERSON BEHIND THE CODE</p>
              <h2>
                Understanding
                <br />
                how things <span className="serif">work.</span>
              </h2>
              <div className="about-signature">
                Arthur Volpato <span>/ volpsz</span>
              </div>
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
                className="stack-items"
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
              <div className="about-facts">
                <div>
                  <span className="eyebrow">CURRENTLY</span>
                  <strong>Systems & security in practice</strong>
                </div>
                <div>
                  <span className="eyebrow">NEXT CHAPTER</span>
                  <strong>A career in Information Security</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="stack" className="container section stack-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow accent">03 / TOOLKIT</p>
              <h2>
                The tools behind
                <br />
                the <span className="serif">ideas.</span>
              </h2>
            </div>
            <p className="section-description">
              A growing toolkit.
              <br />
              Fundamentals first, frameworks second.
            </p>
          </div>
          <div className="stack-grid">
            {[
              {
                number: "01",
                title: "Languages",
                detail: "The building blocks",
                items: ["Rust", "Python", "C", "JavaScript"],
              },
              {
                number: "02",
                title: "Web",
                detail: "Learning & building",
                items: ["HTML", "CSS", "React", "Next.js"],
              },
              {
                number: "03",
                title: "Systems, networking & tools",
                detail: "Under the hood",
                items: [
                  "Linux", "Bash", "PowerShell", "Git", "GitHub", "Windows",
                ],
              },
            ].map((group) => (
              <div className="stack-card" key={group.title}>
                <span className="stack-number">{group.number} ↗</span>
                <h3>{group.title}</h3>
                <p>{group.detail}</p>
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
                <p className="eyebrow accent">04 / WHAT’S NEXT</p>
                <h2>
                  A clear direction.
                  <br />
                  Practical <span className="serif">next steps.</span>
                </h2>
              </div>
              <p className="section-description">
                Continuous learning. A career in cybersecurity.
                <br />
                Foundations, practice and evidence.
              </p>
            </div>
            <div className="goals-grid">
              {[
                {
                  number: "01",
                  label: "CONTINUOUS LEARNING",
                  title: "Industry certifications",
                  description:
                    "I’m continuously learning and actively pursuing industry certifications to strengthen my cybersecurity foundations. CompTIA Network+ and Security+ are examples of certifications I’m working toward.",
                  steps: [
                    "Connect structured study with hands-on practice",
                    "Explore new certifications as my career develops",
                  ],
                },
                {
                  number: "02",
                  label: "HANDS-ON PRACTICE",
                  title: "Cyber labs & CTFs",
                  description:
                    "Practice in authorized labs and capture-the-flag challenges to develop my security reasoning and problem-solving skills.",
                  steps: [
                    "Explore tools in controlled environments",
                    "Document approaches and lessons learned",
                  ],
                },
                {
                  number: "03",
                  label: "PORTFOLIO GOAL",
                  title: "Knowledge into projects",
                  description:
                    "Build security-focused projects that show how I use tools, investigate problems and turn technical knowledge into working solutions.",
                  steps: [
                    "Publish code with reproducible instructions",
                    "Explain decisions, results and limitations",
                  ],
                },
              ].map((goal) => (
                <article className="goal-card" key={goal.number}>
                  <div className="goal-topline">
                    <span className="goal-number">{goal.number}</span>
                    <span className="goal-label">{goal.label}</span>
                  </div>
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                  <ul>
                    {goal.steps.map((step) => <li key={step}>{step}</li>)}
                  </ul>
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
            <p className="eyebrow">05 / START A CONVERSATION</p>
            <span className="accent">✳</span>
          </div>
          <h2>
            Good things start
            <br />
            with a <span className="serif">hello.</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Have a project, an opportunity or an idea?
              <br />
              Let’s connect and see where it goes.
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
