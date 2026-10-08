import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="hero dark-section" id="top">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> GUAYAQUIL, EC</p>
          <h1>Good software<br />makes hard things<br /><span className="hero-emphasis">feel simple.</span></h1>
          <p className="hero-intro">
            I&apos;m Oscar, a product-minded engineer working across web, mobile, cloud, and AI. I like getting close to the problem, then building the right thing end to end.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#career">Explore my journey <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="text-link light-link" href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="hero-aside hero-portrait">
          <Image
            className="hero-portrait-image"
            src="/oscar-pallazhco.jpg"
            alt="Oscar Pallazhco"
            fill
            priority
            sizes="(max-width: 620px) 100vw, 40vw"
          />
          <div className="hero-aside-top"><span>ENGINEERING, END TO END</span><span>01 / 05</span></div>
          <figcaption className="hero-aside-bottom"><span>OSCAR PALLAZHCO</span><span>GUAYAQUIL, ECUADOR</span></figcaption>
          <span className="portrait-index" aria-hidden="true">OP<span>.</span></span>
        </figure>
      </div>
      <div className="hero-foot page-width">
        <span>SCROLL TO EXPLORE</span><span className="hero-foot-line" /><span>01 — 04</span>
      </div>
    </section>
  );
}