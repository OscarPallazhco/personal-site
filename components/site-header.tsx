"use client";

import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { locale, setLocale, copy } = useLanguage();

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#top"
        aria-label="Oscar Pallazhco, back to top"
      >
        <span className="wordmark-mark">OP</span>
        <span className="wordmark-name">OSCAR PALLAZHCO</span>
      </a>
      <nav className="main-nav" aria-label={copy.navigation.label}>
        <a href="#about">{copy.navigation.about}</a>
        <a href="#career">{copy.navigation.career}</a>
        <a href="#work">{copy.navigation.work}</a>
        <a href="#demos">{copy.navigation.demos}</a>
      </nav>
      <div className="header-actions">
        <div
          className="language-switch"
          role="group"
          aria-label={copy.languageLabel}
        >
          <button
            type="button"
            className={
              locale === "en" ? "language-option is-active" : "language-option"
            }
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={
              locale === "es" ? "language-option is-active" : "language-option"
            }
            aria-pressed={locale === "es"}
            onClick={() => setLocale("es")}
          >
            ES
          </button>
        </div>
        <a className="header-contact" href={`mailto:${profile.email}`}>
          {copy.navigation.contact}{" "}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
