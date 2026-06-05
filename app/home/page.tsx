import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Download, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Zap } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, downloads, featuredProducts, industries, site, trustItems, whyChooseUs } from "@/lib/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Chemical Earthing Electrode & Lightning Protection System Manufacturer India",
  "Vidyut Enterprise is a leading manufacturer and supplier of chemical earthing electrodes, copper bonded earthing rods, earthing compounds, lightning protection systems and cable management solutions for industrial, commercial and infrastructure projects across India."
);

const homeFaqs = [
  {
    question: "What products does Vidyut Enterprise supply?",
    answer:
      "Vidyut Enterprise supplies chemical earthing electrodes, copper bonded rods, lightning arrestors, copper products, GI products, cable trays, earth pit covers and earthing accessories."
  },
  {
    question: "Does Vidyut Enterprise provide earthing installation services?",
    answer:
      "Yes. The company supports earthing installation, site guidance, testing support and lightning protection system requirements for industrial and commercial projects."
  },
  {
    question: "Where is Vidyut Enterprise located?",
    answer:
      "Vidyut Enterprise is located at Sri Vishnu Plaza, Dabagardens, Visakhapatnam, Andhra Pradesh."
  }
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <Zap size={16} /> Chemical Earthing • Grounding • Lightning Protection
            </span>
            <h1>
Chemical Earthing Electrode Manufacturer & Lightning Protection System Supplier
</h1>
              <p>
  Vidyut Enterprise is a leading manufacturer and supplier of Chemical Earthing Electrodes, Copper Bonded Earthing Rods, Earthing Compounds, Lightning Protection Systems and Grounding Solutions for industrial, commercial and infrastructure projects across India.
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
            copy="Vidyut Enterprise helps industries, contractors, consultants and infrastructure projects implement safe, maintenance-free earthing systems and lightning protection solutions that comply with modern electrical safety standards."
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
            title="Earthing, Grounding & Lightning Protection Products"
            copy="Comprehensive earthing and lightning protection products designed to improve electrical safety, reduce fault current risks and provide long-term grounding performance."
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
            <h2>
Earthing Contractor and Supplier in Visakhapatnam
</h2>

<p>
Based in Visakhapatnam, Andhra Pradesh, Vidyut Enterprise supplies chemical earthing electrodes,
lightning arresters, copper bonded rods and grounding materials to industries across Andhra Pradesh,
Odisha, Telangana, Tamil Nadu and Karnataka.
</p>
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
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                Download product catalogues for your purchase team.
              </h2>
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
        <div className="container">
          <SectionHeading
            kicker="Reviews"
            title="Customer reviews"
            copy="Trusted by industrial buyers, contractors and businesses for practical product guidance and dependable supply support."
          />
          <div className="review-panel card card-pad">
            <div>
              <span className="tag">Google Reviews</span>
              <h3>5-star Google-rated business</h3>
              <p>See customer feedback for Vidyut Enterprise or share your own experience.</p>
            </div>
            <a
              href="https://g.page/r/CVh69S0mATSAEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View and Write Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Location</div>
            <h2 className="section-title">Visit or contact Vidyut Enterprise</h2>
            <p className="section-copy">{site.address}</p>
            <div className="contact-actions">
              {site.phoneNumbers.map((phone) => (
                <a className="button-secondary" href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                  <Phone size={18} /> {phone}
                </a>
              ))}
              <a className="button-secondary" href={`mailto:${site.email}`}>
                <Mail size={18} /> {site.email}
              </a>
              <a className="button-secondary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a className="button" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={18} /> Open Google Maps
              </a>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              title="Vidyut Enterprise Google Maps location"
              src={site.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
<section>
<h2>Chemical Earthing Electrode Manufacturer in India</h2>

<p>
Chemical earthing electrodes provide a low-resistance path for fault current discharge,
ensuring equipment protection and personnel safety. Vidyut Enterprise manufactures and
supplies maintenance-free chemical earthing systems for industrial plants, substations,
telecom towers, commercial buildings and renewable energy projects.
</p>

<h3>Our Earthing Solutions</h3>

<ul>
<li>Copper Bonded Earthing Rods</li>
<li>GI Earthing Electrodes</li>
<li>Earthing Enhancement Compound</li>
<li>Lightning Protection Systems</li>
<li>Earth Pit Covers</li>
<li>Earthing Accessories</li>
</ul>
</section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="FAQ" title="Common questions" />
          <div className="grid three">
            {homeFaqs.map((faq) => (
              <div className="card card-pad" key={faq.question}>
                <h3 style={{ color: "var(--navy)" }}>{faq.question}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
