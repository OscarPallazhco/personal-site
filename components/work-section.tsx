"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function WorkSection() {
  const { locale, copy } = useLanguage();

  return (
    <section className="work section-light" id="work">
      <div className="page-width">
        <div className="section-kicker">
          <span>03</span>
          <span>{copy.work.kicker}</span>
        </div>
        <div className="work-heading">
          <h2>
            {copy.work.heading[0]}
            <br />
            <span>{copy.work.heading[1]}</span>
          </h2>
          <p>{copy.work.intro}</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-category">
                  {locale === "es" ? project.categoryEs : project.category}
                </p>
                <h3>{locale === "es" ? project.titleEs : project.title}</h3>
                <p className="project-description">
                  {locale === "es"
                    ? project.descriptionEs
                    : project.description}
                </p>
                <p className="project-stack">{project.stack}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">
                <ArrowUpRight size={21} strokeWidth={1.5} />
              </span>
            </article>
          ))}
        </div>
        <p className="portfolio-note">
          <span className="note-mark">+</span> {copy.work.note}
        </p>
      </div>
    </section>
  );
}
