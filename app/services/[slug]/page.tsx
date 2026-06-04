import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, CheckCircle2, Factory, MessageCircle } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { commonWhyChooseVidyut, servicePages } from "@/lib/lead-gen-content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) return pageMetadata("Services");

  return pageMetadata(page.title, page.metaDescription, `/services/${page.slug}`);
}

export default async function ServiceLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);
  if (!page) notFound();

  const overviewParagraphs = [
    page.hero,
    `${page.title} is most effective when the work is treated as a complete industrial electrical safety scope rather than a single material purchase. For Andhra Pradesh sites, the practical details matter: ${page.primaryNeed}. Vidyut Enterprise reviews these details so the final recommendation supports safety, procurement clarity and future maintenance.`,
    `The service focus is ${page.focus}. A typical requirement may involve ${page.materials.join(", ")} and supporting accessories. Each item must be selected with the site layout, load profile, corrosion exposure and available installation access in mind. This reduces the chance of missing clamps, undersized conductors, weak terminals or inaccessible inspection points.`,
    `The execution approach includes ${page.solution}. This creates a clearer path from enquiry to site visit, from site visit to quotation and from quotation to installation. Contractors and purchase teams can share BOQs, drawings, photos, product lists or old test reports so the response is practical rather than generic.`,
    `Vidyut Enterprise is based in Visakhapatnam and supports industrial electrical, earthing and lightning protection requirements with supplier, stockist, distributor and contractor capability. The goal is not only to supply material, but to help the buyer understand what should be installed, where it should be installed, which accessories are needed and how the system should remain inspectable after handover.`
  ];

  const technicalParagraphs = [
    `A dependable ${page.shortTitle.toLowerCase()} scope starts with visible site signals such as ${page.siteSignals.join(", ")}. These signals help decide whether the requirement is a simple replacement, a fresh installation, a maintenance correction or a larger electrical infrastructure package.`,
    `Industrial projects often fail at the small details: terminal access, conductor route, clamp quality, chamber placement, soil condition and material compatibility. By reviewing these points early, the service can be planned around safe execution, cleaner documentation and fewer last-minute procurement surprises.`,
    `The quotation stage should include the main material, accessory set, site support requirement, testing expectation and delivery location. This is especially important for factories, substations, commercial buildings, solar projects and warehouses where electrical work may need to happen around production or maintenance windows.`,
    `For long-term value, the installed system should remain easy to inspect. Test links, chambers, terminals, conductor routes and maintenance notes are not cosmetic details; they decide whether future readings, audits and upgrades can happen smoothly. That is why the service combines technical selection with practical site usability.`
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/earthing-installation" },
          { name: page.title, path: `/services/${page.slug}` }
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: page.title,
          description: page.metaDescription,
          path: `/services/${page.slug}`
        })}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Services / {page.title}</div>
          <h1>{page.title}</h1>
          <p className="lead">{page.metaDescription}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              Request Quote
            </Link>
            <Link className="button-light" href="/contact">
              Request Site Visit
            </Link>
            <a className="button-light" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-prose">
          <SectionHeading kicker="Service Overview" title={`${page.title} for industrial sites`} />
          {overviewParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Benefits" title="Why this service matters" />
          <div className="grid three">
            {page.benefits.map((benefit) => (
              <div className="card card-pad" key={benefit}>
                <span className="icon-box">
                  <BadgeCheck size={20} />
                </span>
                <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: 0 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Process</div>
            <h2 className="section-title">How the work is planned</h2>
            <div className="grid">
              {page.process.map((step, index) => (
                <div className="step-card" key={step}>
                  <strong>{index + 1}</strong>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card card-pad article-prose">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Technical planning notes</h3>
            {technicalParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Industries" title="Industries served" />
          <div className="grid four">
            {page.industries.map((industry) => (
              <div className="card card-pad" key={industry}>
                <span className="icon-box">
                  <Factory size={20} />
                </span>
                <h3 style={{ color: "var(--navy)", marginTop: 18 }}>{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Why Choose Vidyut Enterprise</div>
            <h2 className="section-title">Technical guidance with project-ready supply support</h2>
            <ul className="feature-list">
              {commonWhyChooseVidyut.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={20} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Send your site requirement</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Mention the site location, product requirement, drawings, BOQ, target reading or problem faced by the
              maintenance team.
            </p>
            <LeadForm type="service" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Internal Links" title="Related products, projects and guides" />
          <div className="grid three">
            <LinkList title="Related Products" links={page.relatedProducts} />
            <LinkList title="Related Projects" links={page.relatedProjects} />
            <LinkList title="Related Articles" links={page.relatedArticles} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="FAQ" title={`${page.shortTitle} questions`} />
          <div className="grid three">
            {page.faqs.map((faq) => (
              <div className="card card-pad" key={faq.question}>
                <h3 style={{ color: "var(--navy)" }}>{faq.question}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <ConversionPanel title={`Request ${page.shortTitle} support`} />
        </div>
      </section>
    </main>
  );
}

function LinkList({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
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
