"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const demos = [
  {
    number: "01",
    href: "/kanban-demo/",
    category: {
      en: "INTERACTIVE BOARD · WEB DEMO",
      es: "TABLERO INTERACTIVO · DEMO WEB",
    },
    title: { en: "Kanban Board", es: "Tablero Kanban" },
    description: {
      en: "A hands-on task board with draggable cards, editable columns, and quick card creation.",
      es: "Un tablero de tareas interactivo con tarjetas movibles, columnas editables y creación rápida de tarjetas.",
    },
  },
  {
    number: "02",
    href: "/game/",
    category: {
      en: "BROWSER GAME · 3D FPS",
      es: "JUEGO DE NAVEGADOR · FPS 3D",
    },
    title: { en: "Arena One", es: "Arena One" },
    description: {
      en: "A compact first-person arena duel against a computer opponent, built to play in the browser.",
      es: "Un duelo compacto en primera persona contra un rival controlado por la computadora, para jugar en el navegador.",
    },
  },
];

export function DemosSection() {
  const { locale, copy } = useLanguage();

  return (
    <section className="demos-section" id="demos">
      <div className="page-width">
        <div className="section-kicker">
          <span>04</span>
          <span>{copy.demos.kicker}</span>
        </div>
        <div className="demos-heading">
          <h2>{copy.demos.heading}</h2>
          <p>{copy.demos.intro}</p>
        </div>
        <div className="demo-list">
          {demos.map((demo) => (
            <a className="demo-row" href={demo.href} key={demo.href}>
              <span className="demo-number">{demo.number}</span>
              <div className="demo-copy">
                <p className="demo-category">{demo.category[locale]}</p>
                <h3>{demo.title[locale]}</h3>
                <p className="demo-description">{demo.description[locale]}</p>
              </div>
              <span className="demo-action">
                {copy.demos.open}
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
