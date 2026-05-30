import { FileText, MessageCircle } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { categories, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Request Quote",
  "Request a quote for earthing electrodes, lightning protection systems, copper products, GI products and cable trays.",
  "/request-quote"
);

export default function RequestQuotePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Request Quote</div>
          <h1>Request a quotation</h1>
          <p className="lead">
            Submit product, quantity, size, drawing or project details for earthing, lightning protection and industrial
            electrical products.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container quote-grid">
          <div>
            <div className="card card-pad">
              <span className="icon-box">
                <FileText size={22} />
              </span>
              <h2 style={{ color: "var(--navy)", marginTop: 18 }}>Quote details to include</h2>
              <ul className="feature-list">
                <li>Product name and category</li>
                <li>Material, size, coating or finish</li>
                <li>Approximate quantity and delivery location</li>
                <li>BOQ, site drawing or project reference if available</li>
              </ul>
            </div>
            <div className="card card-pad" style={{ marginTop: 18 }}>
              <span className="icon-box">
                <MessageCircle size={22} />
              </span>
              <h3 style={{ color: "var(--navy)", marginTop: 18 }}>Prefer WhatsApp?</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Send product photos, RFQ list or BOQ directly on WhatsApp.
              </p>
              <a className="button" href={`https://wa.me/${site.whatsapp}`}>
                WhatsApp Enquiry
              </a>
            </div>
          </div>
          <div className="card card-pad">
            <h2 style={{ color: "var(--navy)", fontSize: 34 }}>RFQ Form</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Categories covered: {categories.map((item) => item.title).join(", ")}.
            </p>
            <LeadForm type="quote" />
          </div>
        </div>
      </section>
    </main>
  );
}
