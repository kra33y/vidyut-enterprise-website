import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { projectCaseStudies } from "@/lib/lead-gen-content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industrial Electrical Project Case Studies",
  "Industrial earthing, lightning protection, cable tray and electrical upgrade case studies from Vidyut Enterprise.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" }
        ])}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects</div>
          <h1>Industrial electrical project case studies</h1>
          <p className="lead">
            Realistic project examples for earthing, lightning protection, industrial electrical upgrades and grounding
            material supply.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Case Studies"
            title="Project experience and enquiry-ready scopes"
            copy="Each case study shows typical challenges, material planning, solution approach and enquiry points for industrial buyers."
          />
          <div className="grid three">
            {projectCaseStudies.map((project) => (
              <article className="card card-pad" key={project.slug}>
                <span className="tag">{project.industry}</span>
                <h2 style={{ color: "var(--navy)", marginTop: 16, fontSize: 26 }}>{project.title}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{project.overview}</p>
                <ul className="feature-list">
                  {project.scope.slice(0, 3).map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={18} color="var(--electric)" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="card-actions">
                  <Link className="button-secondary" href={`/projects/${project.slug}`}>
                    View Case Study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <ConversionPanel title="Planning an industrial electrical or earthing project?" />
        </div>
      </section>
    </main>
  );
}
