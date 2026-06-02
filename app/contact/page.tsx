import Link from "next/link";
import { MapPin } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { contactMethods, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Contact Vidyut Enterprise for earthing electrodes, lightning arrestors, copper products, GI products and cable trays.",
  "/contact"
);

export default function ContactPage() {
  return (
    <main>
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
                return (
                  <a className="card card-pad" href={method.href} key={method.label}>
                    <span className="icon-box">
                      <Icon size={22} />
                    </span>
                    <h3 style={{ color: "var(--navy)", marginTop: 16 }}>{method.label}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{method.value}</p>
                  </a>
                );
              })}
            </div>
            <a
  href="https://maps.google.com/?q=31-33-102/C Sri Vishnu Plaza Opposite Leela Mahal Theater Dabagardens Visakhapatnam"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div className="map-placeholder" style={{ marginTop: 18 }}>
    <div>
      <iframe
  src="https://maps.google.com/maps?q=31-33-102/C,%20Sri%20Vishnu%20Plaza,%20Opp.%20Leela%20Mahal%20Theater,%20Dabagardens,%20Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="350"
  style={{ border: 0, borderRadius: "12px" }}
  loading="lazy"
  allowFullScreen
/>
    </div>
  </div>
</a>
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
