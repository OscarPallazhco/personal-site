import { Braces, Cloud, Cpu, PanelsTopLeft } from "lucide-react";

const capabilities = [
  { icon: PanelsTopLeft, label: "Product interfaces", detail: "React · Flutter · Angular" },
  { icon: Braces, label: "Full-stack systems", detail: "Python · JavaScript · APIs" },
  { icon: Cloud, label: "Cloud & delivery", detail: "AWS · Azure · Terraform" },
  { icon: Cpu, label: "Applied AI", detail: "AI agents · evaluation · prompt engineering" },
];

export function AboutSection() {
  return (
    <section className="about section-light" id="about">
      <div className="page-width about-grid">
        <div className="section-kicker"><span>01</span><span>THE SHORT VERSION</span></div>
        <div className="about-content">
          <h2>Engineer by craft.<br /><span>Builder by instinct.</span></h2>
          <div className="about-columns">
            <p className="about-lead">From the first sketch to the cloud deployment, I enjoy understanding how the whole system fits together.</p>
            <div className="about-copy">
              <p>Over the past few years, I&apos;ve helped build products in fundraising, marketing automation, and AI. My work moves between interface details, backend services, third-party integrations, and the infrastructure that gets software into people&apos;s hands.</p>
              <p>I&apos;ve also mentored developers, contributed to hiring and training, and stepped into technical leadership when the team needed it. I value clear thinking, collaborative teams, and solutions that hold up beyond the demo.</p>
            </div>
          </div>
          <div className="capabilities-grid">
            {capabilities.map(({ icon: Icon, label, detail }) => (
              <div className="capability" key={label}>
                <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                <div><h3>{label}</h3><p>{detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}