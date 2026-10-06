"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { copy, github, linkedin } from "../content";
import { useLanguage } from "../language-provider";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function SiteHeader({
  home = false,
  title,
}: {
  home?: boolean;
  title?: string;
}) {
  const { locale, setLocale } = useLanguage();
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.title = title ?? t.pageTitle;
  }, [title, t.pageTitle]);

  useEffect(() => {
    if (!home) return;
    const ids = ["home", "about", "work", "stack", "goals", "contact"];
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = "home";
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 130) current = id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8
      )
        current = "contact";
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, [home]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <div className="container header-inner">
          <Link className="wordmark" href="/" aria-label={t.home}>
            volpsz<span className="brand-dot">.</span>
          </Link>
          <nav
            id="site-navigation"
            className={`navigation${menuOpen ? " open" : ""}`}
            aria-label={t.navigation}
          >
            {t.nav.map(([label, id]) => (
              <Link
                key={id}
                href={home ? `#${id}` : `/#${id}`}
                aria-current={
                  (home ? activeSection : "work") === id
                    ? "location"
                    : undefined
                }
                onClick={() => {
                  setMenuOpen(false);
                  if (home) setActiveSection(id);
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-controls">
            <div
              className="language-switch"
              role="group"
              aria-label={t.language}
            >
              {(["pt", "en"] as const).map((language) => (
                <button
                  type="button"
                  key={language}
                  aria-label={t.languageNames[language]}
                  aria-pressed={locale === language}
                  onClick={() => setLocale(language)}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              className="menu-button"
              ref={menuButton}
              type="button"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? t.close : t.menu}
              <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span className="section-number">{number}</span>
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function SiteFooter() {
  const { locale } = useLanguage();
  const t = copy[locale];
  return (
    <footer className="container footer">
      <Link className="wordmark" href="/">
        volpsz<span className="brand-dot">.</span>
      </Link>
      <p>{t.footer}</p>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow diagonal />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <Arrow diagonal />
        </a>
        <a href="#main" aria-label={t.top}>
          ↑
        </a>
      </div>
    </footer>
  );
}
