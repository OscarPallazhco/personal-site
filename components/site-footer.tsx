import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">OP</span><span className="wordmark-name">OSCAR PALLAZHCO</span></a>
        <span>SOFTWARE ENGINEER · GUAYAQUIL, EC</span>
        <a href="#top">BACK TO TOP ↑</a>
        <a href={profile.whatsapp} target="_blank" rel="noreferrer">WHATSAPP</a>
        <span>© {new Date().getFullYear()} OSCAR PALLAZHCO</span>
      </div>
    </footer>
  );
}