"use client";

import { roles } from "@/data/portfolio";
import { useLanguage } from "@/components/language-provider";

export function CareerSection() {
  const { locale, copy } = useLanguage();

  return (
    <section className="career dark-section" id="career">
      <div className="page-width">
        <div className="section-heading">
          <div className="section-kicker section-kicker-dark">
            <span>02</span>
            <span>{copy.career.kicker}</span>
          </div>
          <div className="heading-row">
            <h2>{copy.career.heading}</h2>
            <p>{copy.career.intro}</p>
          </div>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article
              className="timeline-item"
              key={`${role.company}-${role.period}`}
            >
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-date">
                {locale === "es" ? role.periodEs : role.period}
              </div>
              <div className="timeline-detail">
                <div className="timeline-title-row">
                  <h3>{locale === "es" ? role.titleEs : role.title}</h3>
                  <span className="company-name">{role.company}</span>
                </div>
                <p className="timeline-project">
                  {locale === "es" ? role.projectEs : role.project}
                </p>
                <p className="timeline-description">
                  {locale === "es" ? role.descriptionEs : role.description}
                </p>
                <div className="tag-list">
                  {role.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="education-row">
          <span className="education-label">{copy.career.education}</span>
          <div>
            <h3>Escuela Superior Politécnica del Litoral</h3>
            <p>
              {copy.career.degree} <span>·</span> 2015 — 2021
            </p>
          </div>
          <span className="education-location">GUAYAQUIL, ECUADOR</span>
        </div>
      </div>
    </section>
  );
}
