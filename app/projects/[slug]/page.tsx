import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { projectCaseStudies } from "@/lib/lead-gen-content";
import { breadcrumbJsonLd, pageMetadata, projectJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);
  if (!project) return pageMetadata("Projects");

  return pageMetadata(project.title, project.metaDescription, `/projects/${project.slug}`);
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` }
        ])}
      />
      <JsonLd data={projectJsonLd(project)} />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Projects / {project.title}</div>
          <h1>{project.title}</h1>
          <p className="lead">{project.metaDescription}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              Request Similar Project Support
            </Link>
            <Link className="button-light" href="/contact">
              Discuss Scope
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="article-prose">
            <SectionHeading kicker="Project Overview" title={project.industry} />
            <p>{project.overview}</p>
            <p>
              This case study is a realistic example of how Vidyut Enterprise supports industrial buyers with material
              mapping, accessory coordination, site-ready planning and enquiry conversion. Each project begins with the
              same practical questions: what does the site need, which products fit the scope, what accessories are
              missing and how will the work remain testable after handover?
            </p>
            <p>
              For factories, substations, commercial buildings and infrastructure sites, the right result depends on
              coordination between product supply, installation access, testing expectations and documentation. That is
              why the project support approach connects technical review with request-for-quote readiness.
            </p>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Scope of work</h3>
            <ul className="feature-list">
              {project.scope.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Case Study Details" title="Challenges, solution and results" />
          <div className="grid three">
            <ProjectList title="Challenges" items={project.challenges} />
            <ProjectList title="Solution" items={project.solution} />
            <ProjectList title="Results" items={project.results} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <ProjectList title="Materials used" items={project.materials} />
          <ProjectList title="Benefits delivered" items={project.benefits} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Internal Links" title="Related services, products and guides" />
          <div className="grid three">
            <ProjectLinks title="Related Services" links={project.relatedServices} />
            <ProjectLinks title="Related Products" links={project.relatedProducts} />
            <ProjectLinks title="Related Articles" links={project.relatedArticles} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ConversionPanel title="Have a similar industrial project requirement?" />
        </div>
      </section>
    </main>
  );
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card card-pad">
      <h3 style={{ color: "var(--navy)" }}>{title}</h3>
      <ul className="feature-list">
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={20} color="var(--electric)" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectLinks({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div className="card card-pad">
      <h3 style={{ color: "var(--navy)" }}>{title}</h3>
      <div className="link-list">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
