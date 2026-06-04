import Link from "next/link";
import { ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { servicePages } from "@/lib/lead-gen-content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  "Earthing Installation & Consultancy Services in Visakhapatnam",
  "Professional earthing installation, resistance testing, site survey, consultancy and lightning protection support for industrial and commercial projects.",
  "/earthing-installation"
);

const serviceFaqs = [
  {
    question: "Do you handle earthing installation for industrial sites?",
    answer:
      "Yes. Vidyut Enterprise supports industrial earthing installation, product supply, site guidance and project coordination based on BOQ and site requirements."
  },
  {
    question: "Can you support resistance testing and maintenance?",
    answer:
      "Yes. Earthing resistance testing, inspection support, maintenance guidance and upgrade recommendations can be handled as per project needs."
  },
  {
    question: "Which areas do you serve?",
    answer:
      "The company is based in Visakhapatnam and supports industrial, commercial and infrastructure requirements across India."
  }
];

const serviceCards = [
  {
    title: "Earthing Installation",
    copy: "Chemical earthing, copper bonded rods, GI electrodes, earth pits and accessories installed for project requirements.",
    icon: Wrench
  },
  {
    title: "Testing and Inspection",
    copy: "Resistance testing, earth pit inspection, documentation support and maintenance recommendations.",
    icon: ClipboardCheck
  },
  {
    title: "Lightning Protection",
    copy: "Lightning arrestor selection, down conductor support, clamps, masts, test links and earthing coordination.",
    icon: ShieldCheck
  }
];

export default function EarthingInstallationPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Earthing Installation", path: "/earthing-installation" }
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Earthing Installation and Consultancy Services",
          description:
            "Professional earthing installation, testing, site survey and lightning protection support by Vidyut Enterprise.",
          path: "/earthing-installation"
        })}
      />
      <JsonLd data={faqJsonLd(serviceFaqs)} />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Services</div>
          <h1>Earthing installation and consultancy services</h1>
          <p className="lead">
            Complete earthing system supply, installation, testing and consultancy for industrial, commercial and
            infrastructure projects.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              Request Site Visit
            </Link>
            <a className="button-light" href={`tel:${site.primaryPhone.replaceAll(" ", "")}`}>
              Call {site.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Services"
            title="Professional earthing solutions"
            copy="From site survey to final testing, Vidyut Enterprise supports complete earthing and lightning protection requirements."
          />
          <div className="grid three">
            {serviceCards.map((card) => {
              const Icon = card.icon;
              return (
                <div className="card card-pad" key={card.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 style={{ color: "var(--navy)", marginTop: 18 }}>{card.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{card.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            kicker="Service Landing Pages"
            title="Explore dedicated service support"
            copy="Detailed pages for chemical earthing, lightning protection, testing, consultancy, contracting, factory and substation requirements."
          />
          <div className="category-nav">
            {servicePages.map((page) => (
              <Link href={`/services/${page.slug}`} key={page.slug}>
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Scope</div>
            <h2 className="section-title">Built for site-ready execution</h2>
            <ul className="feature-list">
              <li>
                <ShieldCheck size={20} color="var(--electric)" /> Site survey, BOQ review and product selection.
              </li>
              <li>
                <ShieldCheck size={20} color="var(--electric)" /> Earthing electrode, backfill compound and chamber supply.
              </li>
              <li>
                <ShieldCheck size={20} color="var(--electric)" /> Earth resistance testing and inspection support.
              </li>
              <li>
                <ShieldCheck size={20} color="var(--electric)" /> Lightning protection and down conductor coordination.
              </li>
            </ul>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Send site details</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Share your site location, number of pits, soil condition, drawings or BOQ for a suitable response.
            </p>
            <LeadForm type="service" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Industries" title="Industries served" />
          <div className="grid three">
            {["Manufacturing plants", "Commercial buildings", "Hospitals", "Data centers", "Telecom sites", "Power projects"].map(
              (industry) => (
                <div className="card card-pad" key={industry}>
                  <h3 style={{ color: "var(--navy)" }}>{industry}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="FAQ" title="Earthing service questions" />
          <div className="grid three">
            {serviceFaqs.map((faq) => (
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
          <ConversionPanel title="Request earthing, testing or lightning protection support" />
        </div>
      </section>
    </main>
  );
}
