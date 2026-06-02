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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.651168248007!2d83.29655331078334!3d17.713931493245905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431bf9596e33%3A0x803401262df57a58!2sVidyut%20Enterprise%20-%20Excellence%20in%20Metals%20%26%20Earthing%20Supplies%2C%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1780381142556!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0, borderRadius: "12px" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
<div style={{ marginTop: "12px" }}>
  <a
    href="https://maps.app.goo.gl/B3FojcwWowp2v9Dz6"
    target="_blank"
    rel="noopener noreferrer"
    className="button"
  >
    Get Directions
  </a>
</div>
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
