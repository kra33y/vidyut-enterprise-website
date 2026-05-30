import Link from "next/link";
import { Building2, CheckCircle2, Factory, Sun, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Projects",
  "Project supply capabilities for earthing, lightning protection and industrial electrical infrastructure.",
  "/projects"
);

export default function ProjectsPage() {
  const projects = [
    { title: "Industrial Plant Earthing Package", icon: Factory, scope: "Electrodes, backfill compound, earth pit covers, copper strips and accessories." },
    { title: "Commercial Building Lightning Protection", icon: Building2, scope: "ESE arrestor, air terminal, down conductor, clamps, test links and mounting accessories." },
    { title: "Solar Project Grounding Material", icon: Sun, scope: "GI and copper earthing material, rods, plates, flats, conductors and chambers." },
    { title: "Cable Tray Supply Package", icon: Zap, scope: "Perforated trays, ladder trays, bends, reducers, tees, brackets, rods and fasteners." }
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects</div>
          <h1>Project supply and contractor-oriented support</h1>
          <p className="lead">
            The website positions Vidyut Enterprise for enquiries from contractors, consultants, purchase teams and facility
            owners.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading kicker="Project Scope" title="Typical project packages" />
          <div className="grid two">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="card card-pad" key={project.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 style={{ color: "var(--navy)", marginTop: 18 }}>{project.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{project.scope}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Process</div>
            <h2 className="section-title">Simple RFQ workflow</h2>
            <ul className="feature-list">
              {["Share BOQ or product list", "Confirm material grade, quantity and delivery location", "Receive product-matched quote", "Coordinate dispatch and documentation"].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Have a project requirement?</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>Send drawings, quantities or product names and request a project quote.</p>
            <Link className="button" href="/request-quote">Request Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
