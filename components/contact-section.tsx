import { ArrowRight, ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="contact-band" id="contact">
      <div className="page-width contact-inner">
        <div className="section-kicker"><span>04</span><span>HAVE A GOOD PROBLEM?</span></div>
        <div className="contact-content">
          <h2>Let&apos;s build<br /><span>what&apos;s next.</span></h2>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" /> Email me <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}