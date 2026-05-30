import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Building2, Download, Factory, ShieldCheck, Zap } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, downloads, featuredProducts, industries, site, trustItems, whyChooseUs } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industrial Electrical, Earthing and Lightning Protection Supplier",
  "Vidyut Enterprise supplies earthing electrodes, lightning arrestors, copper products, GI products and cable trays for industrial projects in India.",
  "/home"
);

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <Zap size={16} /> Electrical & Earthing Solutions
            </span>
            <h1>Industrial electrical products built for reliable site performance.</h1>
            <p>
              Vidyut Enterprise is a manufacturer, supplier, stockist, distributor and contractor for earthing systems,
              lightning protection, copper products, GI products and cable management solutions.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/request-quote">
                Request Quote <ArrowRight size={18} />
              </Link>
              <a className="button-light" href="/downloads/vidyut-earthing-catalog.pdf" download>
                <Download size={18} /> Download Catalogue
              </a>
            </div>
            <div className="metric-row">
              <div className="metric">
                <strong>5+</strong>
                Product verticals
              </div>
              <div className="metric">
                <strong>10+</strong>
                Industries served
              </div>
              <div className="metric">
                <strong>GST</strong>
                Registered supplier
              </div>
              <div className="metric">
                <strong>MSME</strong>
                Registered enterprise
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Company"
            title="Trusted industrial supply and execution support"
            copy="From product selection to site-ready procurement, Vidyut Enterprise supports contractors, factories, consultants and purchase teams with practical electrical infrastructure solutions."
          />
          <div className="grid three">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="card card-pad">
                    <span className="icon-box">
                      <Icon size={22} />
                    </span>
                    <h3 style={{ color: "var(--navy)", marginTop: 18 }}>{item.title}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{item.value}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            kicker="Products"
            title="Core product categories"
            copy="Organized around high-demand industrial requirements: grounding, lightning safety, conductivity, galvanized supports and cable routing."
          />
          <div className="grid three">
            {categories.map((category) => (
              <article className="card product-card" key={category.slug}>
                <Link className="product-image" href={`/products/${category.slug}`}>
                  <Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </Link>
                <div className="card-pad">
                  <h3 style={{ color: "var(--navy)", fontSize: 24 }}>{category.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{category.summary}</p>
                  <ul className="feature-list">
                    {category.products.slice(0, 4).map((item) => (
                      <li key={item}>
                        <BadgeCheck size={18} color="var(--electric)" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Featured"
            title="High-demand industrial products"
            copy="Selected products from the supplied catalog range, ready for RFQs, project supply and procurement comparison."
          />
          <div className="grid three">
            {featuredProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHeading
            kicker="Industries"
            title="Built for project sites and procurement teams"
            copy="Supplying reliable electrical and earthing material for critical infrastructure, plants and commercial installations."
            dark
          />
          <div className="grid four">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div className="card card-pad industry-card" key={industry.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 style={{ color: "var(--navy)", marginTop: 18 }}>{industry.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Why choose us</div>
            <h2 className="section-title">Technical supply with dependable documentation</h2>
            <ul className="feature-list" style={{ marginTop: 26 }}>
              {whyChooseUs.map((item) => (
                <li key={item}>
                  <ShieldCheck size={20} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card card-pad">
            <div className="section-kicker">Enquiry</div>
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Tell us your requirement</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Share item, size, quantity, site location or drawing details. The sales team can respond with suitable options.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="download-panel">
            <div>
              <div className="section-kicker">Catalogues</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Download product catalogues for your purchase team.</h2>
              <p className="lead">Earthing and electrical catalogues are included as ready-to-download PDFs.</p>
            </div>
            <div className="grid">
              {downloads.map((item) => (
                <a className="button-light" href={item.href} download key={item.href}>
                  <item.icon size={18} /> {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Location</div>
            <h2 className="section-title">Visit or contact Vidyut Enterprise</h2>
            <p className="section-copy">{site.address}</p>
            <p className="section-copy">Phone: {site.phone} | Email: {site.email}</p>
            <Link className="button" href="/contact">
              Contact Details
            </Link>
          </div>
          <div className="map-placeholder">
  <iframe
    src="https://maps.google.com/maps?q=31-33-102/C,%20Sri%20Vishnu%20Plaza,%20Opp.%20Leela%20Mahal%20Theater,%20Dabagardens,%20Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
  />
</div>
          </div>
        </div>
      </section>
    </main>
  );
}
