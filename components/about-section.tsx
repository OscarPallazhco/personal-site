"use client";

import { Braces, Cloud, Cpu, PanelsTopLeft } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const capabilityIcons = [PanelsTopLeft, Braces, Cloud, Cpu];

export function AboutSection() {
  const { copy } = useLanguage();

  return (
    <section className="about section-light" id="about">
      <div className="page-width about-grid">
        <div className="section-kicker">
          <span>01</span>
          <span>{copy.about.kicker}</span>
        </div>
        <div className="about-content">
          <h2>
            {copy.about.heading[0]}
            <br />
            <span>{copy.about.heading[1]}</span>
          </h2>
          <div className="about-columns">
            <p className="about-lead">{copy.about.lead}</p>
            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="capabilities-grid">
            {copy.about.capabilities.map(({ label, detail }, index) => {
              const Icon = capabilityIcons[index];
              return (
                <div className="capability" key={label}>
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3>{label}</h3>
                    <p>{detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
