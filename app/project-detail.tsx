"use client";

import Link from "next/link";
import { copy, github, projects, type Project } from "./content";
import { useLanguage } from "./language-provider";
import { Arrow, SiteFooter, SiteHeader } from "./components/site-shell";
import { ProjectArtwork } from "./components/project-artwork";

export default function ProjectDetail({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const t = copy[locale];
  const related = projects.filter((item) => item.slug !== project.slug);
  return (
    <>
      <SiteHeader title={`${project.name} | Arthur Volpato`} />
      <main id="main" className="case-main">
        <div className="container">
          <Link className="text-link back-link" href="/#work">
            <span aria-hidden="true">←</span>
            {t.back}
          </Link>
          <header className="case-hero">
            <p className="eyebrow">
              {t.caseLabel}
              <span className="label-separator">/</span>
              {t.filters[project.category]}
            </p>
            <h1>{project.name}</h1>
            <p>{project.summary[locale]}</p>
            <div className="case-meta">
              <span>{project.platform[locale]}</span>
              <span>{project.stack[0]}</span>
              <a
                href={`${github}/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <Arrow diagonal />
              </a>
            </div>
          </header>
          <div className="case-art">
            <ProjectArtwork project={project} locale={locale} />
            <p>{t.visualCaption}</p>
          </div>
          <div className="case-layout">
            <aside className="case-sidebar">
              <nav aria-label={t.caseNavigation} className="case-toc">
                {[
                  ["overview", t.overview],
                  ["features", t.features],
                  ["architecture", t.architecture],
                  ["decisions", t.decisions],
                  ["lessons", t.lessons],
                  ["limitations", t.limitations],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`}>
                    {label}
                  </a>
                ))}
              </nav>
              <div className="sidebar-stack">
                <p className="eyebrow">{t.technologies}</p>
                <div className="tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </aside>
            <div className="case-content">
              <section id="overview" className="case-section">
                <h2>{t.overview}</h2>
                {project.overview[locale].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
              <section id="features" className="case-section">
                <h2>{t.features}</h2>
                <ul className="feature-list">
                  {project.features[locale].map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
              <section id="architecture" className="case-section">
                <h2>{t.architecture}</h2>
                <ol className="architecture-list">
                  {project.flow[locale].map((step, index) => (
                    <li key={step.title}>
                      <span className="step-index">0{index + 1}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
              <section id="decisions" className="case-section">
                <h2>{t.decisions}</h2>
                <div className="decisions-list">
                  {project.decisions[locale].map((decision) => (
                    <article key={decision.title}>
                      <h3>{decision.title}</h3>
                      <p>{decision.text}</p>
                    </article>
                  ))}
                </div>
              </section>
              <section id="lessons" className="case-section">
                <h2>{t.lessons}</h2>
                <ul className="feature-list">
                  {project.lessons[locale].map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </section>
              <section id="limitations" className="case-section scope-section">
                <h2>{t.limitations}</h2>
                <ul>
                  {project.limitations[locale].map((limit) => (
                    <li key={limit}>{limit}</li>
                  ))}
                </ul>
              </section>
              <div className="case-source">
                <p>{t.sourceNote}</p>
                <a
                  className="button secondary"
                  href={`${github}/${project.slug}#readme`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.readme}
                  <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
          <section className="related-section">
            <h2>{t.moreProjects}</h2>
            <div className="related-grid">
              {related.map((item) => (
                <Link
                  className="related-project"
                  key={item.slug}
                  href={`/projects/${item.slug}/`}
                >
                  <div>
                    <span className="eyebrow">{t.filters[item.category]}</span>
                    <h3>{item.name}</h3>
                  </div>
                  <Arrow diagonal />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
