import Image from "next/image";
import Link from "next/link";
import { FileText, MessageCircle } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <>
      <div className="top-strip">
        <div className="container" style={{ minHeight: 38 }}>
          <span>{site.address}</span>
          <span>GST: {site.gst} | MSME: {site.msme}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-inner" style={{ minHeight: 78 }}>
          <Link className="brand" href="/home" aria-label="Vidyut Enterprise home">
            <Image
              className="brand-mark"
              src="/images/brand/vidyut-enterprise-logo.png"
              alt="Vidyut Enterprise logo"
              width={64}
              height={64}
              priority
            />
            <span>VIDYUT ENTERPRISE</span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button" href="/request-quote">
            <FileText size={18} /> Get Quote
          </Link>
        </div>
      </header>
      <a className="floating-whatsapp" href={`https://wa.me/${site.whatsapp}`} aria-label="Chat on WhatsApp">
        <MessageCircle size={26} />
      </a>
      <Link className="button sticky-enquiry" href="/request-quote">
        Enquiry
      </Link>
    </>
  );
}
