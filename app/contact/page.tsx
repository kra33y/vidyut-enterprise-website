import Link from "next/link";
import { MapPin } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { contactMethods, site } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact Vidyut Enterprise in Visakhapatnam",
  "Contact Vidyut Enterprise for earthing electrodes, lightning arrestors, copper products, GI products, cable trays and earthing installation support.",
  "/contact"
);

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Contact</div>
          <h1>Contact Vidyut Enterprise</h1>
          <p className="lead">Send your enquiry, RFQ, BOQ or product list for a quick sales response.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="grid">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isExternal = method.href.startsWith("http");
                return (
                  <a
                    className="card card-pad"
                    href={method.href}
                    key={method.label}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="icon-box">
                      <Icon size={22} />
                    </span>
                    <h3 style={{ color: "var(--navy)", marginTop: 16 }}>{method.label}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{method.value}</p>
                  </a>
                );
              })}
            </div>

            <div className="map-embed" style={{ marginTop: 18 }}>
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
            <div className="contact-actions">
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="button">
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </div>

          <div className="card card-pad">
            <h2 style={{ color: "var(--navy)", fontSize: 34 }}>Send an enquiry</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              For faster response, mention product name, size, material, quantity and delivery location.
            </p>
            <LeadForm />
            <div className="download-actions">
              <Link className="button-secondary" href="/request-quote">
                Detailed RFQ Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
