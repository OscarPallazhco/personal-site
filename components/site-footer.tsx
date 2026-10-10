"use client";

import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter({ builtAt }: { builtAt: string }) {
  const { locale, copy } = useLanguage();
  const formattedBuildTime = new Intl.DateTimeFormat(
    locale === "es" ? "es-EC" : "en-US",
    {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Guayaquil",
    },
  ).format(new Date(builtAt));

  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark">OP</span>
          <span className="wordmark-name">OSCAR PALLAZHCO</span>
        </a>
        <span>{copy.footer.location}</span>
        <span className="footer-updated">
          <span>{copy.footer.updated}:</span>{" "}
          <time dateTime={builtAt}>{formattedBuildTime}</time>{" "}
          <span>{copy.footer.timeZone}</span>
        </span>
        <a href="#top">{copy.footer.backToTop}</a>
        <a href={profile.whatsapp} target="_blank" rel="noreferrer">
          WHATSAPP
        </a>
        <span>© {new Date().getFullYear()} OSCAR PALLAZHCO</span>
      </div>
    </footer>
  );
}
