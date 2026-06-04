import Link from "next/link";
import { Download, MessageCircle, Phone, Send } from "lucide-react";
import { downloads, site } from "@/lib/site";

type ConversionPanelProps = {
  title?: string;
  copy?: string;
};

export function ConversionPanel({
  title = "Need help choosing the right electrical or earthing solution?",
  copy = "Share your BOQ, drawings, product list, site photos or maintenance issue. Vidyut Enterprise can support material selection, site visit planning, technical consultation and quotation."
}: ConversionPanelProps) {
  return (
    <div className="cta-panel">
      <div>
        <div className="section-kicker">Enquiry Support</div>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <div className="cta-actions">
        <Link className="button" href="/request-quote">
          <Send size={18} /> Request Quote
        </Link>
        <Link className="button-secondary" href="/contact">
          Request Site Visit
        </Link>
        <Link className="button-secondary" href="/contact">
          Technical Consultation
        </Link>
        <Link className="button-secondary" href="/request-quote">
          BOQ Support
        </Link>
        <Link className="button-secondary" href="/downloads">
          Company Profile
        </Link>
        <a className="button-secondary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a className="button-secondary" href={`tel:${site.primaryPhone.replaceAll(" ", "")}`}>
          <Phone size={18} /> Call
        </a>
        <a className="button-secondary" href={downloads[0].href} download>
          <Download size={18} /> Product Catalogue
        </a>
      </div>
    </div>
  );
}
