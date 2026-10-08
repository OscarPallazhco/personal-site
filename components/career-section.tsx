import { roles } from "@/data/portfolio";

export function CareerSection() {
  return (
    <section className="career dark-section" id="career">
      <div className="page-width">
        <div className="section-heading">
          <div className="section-kicker section-kicker-dark"><span>02</span><span>THE CAREER JOURNEY</span></div>
          <div className="heading-row"><h2>Each role, a wider lens.</h2><p>Product work, platform thinking, and a little more ownership at every step.</p></div>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article className="timeline-item" key={`${role.company}-${role.period}`}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="timeline-date">{role.period}</div>
              <div className="timeline-detail">
                <div className="timeline-title-row"><h3>{role.title}</h3><span className="company-name">{role.company}</span></div>
                <p className="timeline-project">{role.project}</p>
                <p className="timeline-description">{role.description}</p>
                <div className="tag-list">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="education-row">
          <span className="education-label">EDUCATION</span>
          <div><h3>Escuela Superior Politécnica del Litoral</h3><p>BSc, Computer Science <span>·</span> 2015 — 2021</p></div>
          <span className="education-location">GUAYAQUIL, ECUADOR</span>
        </div>
      </div>
    </section>
  );
}