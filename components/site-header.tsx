import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Oscar Pallazhco, back to top">
        <span className="wordmark-mark">OP</span>
        <span className="wordmark-name">OSCAR PALLAZHCO</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#work">Selected work</a>
      </nav>
      <a className="header-contact" href={`mailto:${profile.email}`}>
        Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
  );
}