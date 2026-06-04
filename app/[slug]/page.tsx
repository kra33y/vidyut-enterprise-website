import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ShieldCheck } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { localSeoPages } from "@/lib/lead-gen-content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localSeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = localSeoPages.find((item) => item.slug === slug);
  if (!page) return pageMetadata("Vidyut Enterprise");

  return pageMetadata(page.title, page.metaDescription, `/${page.slug}`);
}

export default async function LocalSeoPage({ params }: Props) {
  const { slug } = await params;
  const page = localSeoPages.find((item) => item.slug === slug);
  if (!page) notFound();

  const paragraphs = [
    page.hero,
    `${page.service} in ${page.location} needs a practical local approach. Industrial buyers and contractors often need fast answers on site visit feasibility, material availability, accessory compatibility and installation timing. Vidyut Enterprise supports these requirements from Visakhapatnam with a focus on earthing, lightning protection and industrial electrical infrastructure.`,
    page.serviceArea,
    `The service is useful for purchase teams, consultants, facility managers and contractors who want one conversation around products, site conditions and execution support. Instead of treating the enquiry as only a price request, the response can include product suggestions, related accessories, BOQ review, testing needs and maintenance considerations.`,
    `For ${page.location} projects, a strong enquiry should include product names, approximate quantities, site address, photos, drawings, old readings if available and the expected delivery or work timeline. These details help the team identify whether the requirement is mainly material supply, installation support, testing, maintenance or a wider electrical contracting package.`,
    `The most common mistake in local electrical project procurement is ordering the main product while missing the smaller connected accessories. Earthing work may need strips, clamps, backfill compound and chambers. Lightning protection may need masts, base plates, down conductors and test links. Electrical contracting may need switchgear, cables, cable glands, lugs, junction boxes and control accessories.`,
    `Vidyut Enterprise keeps the approach practical for industrial buyers: understand the site, clarify the BOQ, identify the related products, prepare an RFQ-friendly list and support the buyer with quotation or site visit next steps. This helps contractors, maintenance teams and purchase departments reduce delays caused by unclear specifications.`,
    `The service pages for ${page.location} also connect to relevant products and technical guides so visitors can move from a local search to a useful decision path. This improves enquiry quality because the buyer can compare the service scope, product family and support process before contacting the team.`,
    `Local service pages are intended to help serious buyers quickly connect with the right support. Share your site location, product list, drawings, old test readings or photos, and the team can guide you toward a suitable quotation, site visit or technical consultation.`
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: page.title, path: `/${page.slug}` }
        ])}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd
        data={serviceJsonLd({
          name: page.title,
          description: page.metaDescription,
          path: `/${page.slug}`
        })}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / {page.location} / {page.service}</div>
          <h1>{page.title}</h1>
          <p className="lead">{page.metaDescription}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              Request Quote
            </Link>
            <Link className="button-light" href="/contact">
              Contact Local Team
            </Link>
            <a className="button-light" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} /> View Location
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-prose">
          <SectionHeading kicker="Local SEO" title={`${page.service} support in ${page.location}`} />
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Industrial Focus</div>
            <h2 className="section-title">What the service can include</h2>
            <ul className="feature-list">
              {page.industrialFocus.map((item) => (
                <li key={item}>
                  <ShieldCheck size={20} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Local business details</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{site.address}</p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Phone: {site.phone}
              <br />
              Email: {site.email}
            </p>
            <Link className="button" href="/contact">
              Contact Vidyut Enterprise
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="Related Pages" title="Helpful internal links" />
          <div className="category-nav">
            {page.internalLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="FAQ" title={`${page.service} in ${page.location} questions`} />
          <div className="grid two">
            {page.faqs.map((faq) => (
              <div className="card card-pad" key={faq.question}>
                <h3 style={{ color: "var(--navy)" }}>{faq.question}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ConversionPanel title={`Request ${page.service} support in ${page.location}`} />
        </div>
      </section>
    </main>
  );
}
