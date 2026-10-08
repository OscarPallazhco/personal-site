import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export function WorkSection() {
  return (
    <section className="work section-light" id="work">
      <div className="page-width">
        <div className="section-kicker"><span>03</span><span>SELECTED WORK</span></div>
        <div className="work-heading"><h2>Three problems.<br /><span>Three different scales.</span></h2><p>The portfolio is taking shape. For now, here&apos;s a closer look at the products and challenges behind my recent work.</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-stack">{project.stack}</p></div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={21} strokeWidth={1.5} /></span>
            </article>
          ))}
        </div>
        <p className="portfolio-note"><span className="note-mark">+</span> Detailed case studies coming soon</p>
      </div>
    </section>
  );
}