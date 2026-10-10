"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function ContactSection() {
  const { copy } = useLanguage();

  return (
    <section className="contact-band" id="contact">
      <div className="page-width contact-inner">
        <div className="section-kicker">
          <span>04</span>
          <span>{copy.contact.kicker}</span>
        </div>
        <div className="contact-content">
          <h2>
            {copy.contact.heading[0]}
            <br />
            <span>{copy.contact.heading[1]}</span>
          </h2>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} aria-hidden="true" /> {copy.contact.email}{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" />{" "}
              {copy.contact.whatsapp}{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /> {copy.contact.linkedin}{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
