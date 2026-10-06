"use client";

import Link from "next/link";
import { useState } from "react";
import {
  careerAreas,
  copy,
  github,
  linkedin,
  projects,
  toolkit,
  type Category,
} from "./content";
import { useLanguage } from "./language-provider";
import {
  Arrow,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "./components/site-shell";

export default function Portfolio() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const [filter, setFilter] = useState<Category | "all">("all");
  const visibleProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  return (
    <>
      <SiteHeader home />
      <main id="main">
        <section id="home" className="container hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.heroLine}
              <br />
              <span>{t.heroAccent}</span>
            </h1>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                {t.viewWork}
                <Arrow />
              </a>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-band">
          <div className="container section">
            <SectionHeading
              number="01"
              label={t.workLabel}
              title={t.workTitle}
              description={t.workDescription}
            />
            <div className="work-toolbar">
              <div className="filters" role="group" aria-label={t.filterLabel}>
                {(["all", "systems", "web", "security"] as const).map(
                  (category) => (
                    <button
                      type="button"
                      key={category}
                      aria-pressed={filter === category}
                      onClick={() => setFilter(category)}
                    >
                      {t.filters[category]}
                    </button>
                  ),
                )}
              </div>
              <a
                className="text-link repo-link"
                href={`${github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.allRepos}
                <Arrow diagonal />
              </a>
            </div>
            <div className="projects-grid" aria-live="polite">
              {visibleProjects.map((project) => (
                <article key={project.slug} className="project-card">
                  <div className="project-text">
                    <div className="project-meta">
                      <span>{t.filters[project.category]}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.summary[locale]}</p>
                    <div className="tags">
                      {project.stack.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <Link
                        className="text-link case-link"
                        href={`/projects/${project.slug}/`}
                        aria-label={`${t.details}: ${project.name}`}
                      >
                        {t.details}
                        <Arrow />
                      </Link>
                      <a
                        className="source-link"
                        href={`${github}/${project.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.sourceCode}: ${project.name}`}
                      >
                        GitHub
                        <Arrow diagonal />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container section about-section">
          <SectionHeading
            number="02"
            label={t.aboutLabel}
            title={t.aboutTitle}
          />
          <div className="about-grid">
            <div className="about-identity">
              <span className="identity-monogram" aria-hidden="true">
                AV
              </span>
              <div>
                <strong>Arthur Volpato</strong>
                <span>volpsz / @volpszz</span>
              </div>
            </div>
            <div className="about-copy">
              <p>{t.aboutFirst}</p>
              <p>{t.aboutSecond}</p>
              <div className="career-block">
                <p className="eyebrow">{t.careerLabel}</p>
                <div
                  className="career-interests"
                  role="group"
                  aria-label={t.careerAria}
                >
                  {careerAreas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-band toolkit-section">
          <div className="container section">
            <SectionHeading
              number="03"
              label={t.stackLabel}
              title={t.stackTitle}
              description={t.stackDescription}
            />
            <div className="stack-grid">
              {toolkit.map((group) => (
                <article className="stack-card" key={group.id}>
                  <h3>{t.stackNames[group.id]}</h3>
                  <div className="stack-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="goals" className="container section goals-section">
          <SectionHeading
            number="04"
            label={t.goalsLabel}
            title={t.goalsTitle}
            description={t.goalsDescription}
          />
          <div className="goals-grid">
            {t.goals.map((goal, index) => (
              <article className="goal-row" key={index}>
                <span className="goal-index">0{index + 1}</span>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </article>
            ))}
          </div>
          <p className="goals-note">{t.goalNote}</p>
        </section>

        <section id="contact" className="section-band contact-section">
          <div className="container section">
            <SectionHeading
              number="05"
              label={t.contactLabel}
              title={t.contactTitle}
            />
            <div className="contact-bottom">
              <p>{t.contactDescription}</p>
              <a
                href={linkedin}
                className="button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contactButton}
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
