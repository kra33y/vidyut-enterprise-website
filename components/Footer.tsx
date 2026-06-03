import Image from "next/image";
import Link from "next/link";
import { categories, downloads, navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/" style={{ color: "white" }}>
            <Image
              className="brand-mark"
              src="/images/brand/vidyut-enterprise-logo.png"
              alt="Vidyut Enterprise logo"
              width={64}
              height={64}
            />
            <span>VIDYUT ENTERPRISE</span>
          </Link>
          <p style={{ lineHeight: 1.7, marginTop: 16 }}>{site.description}</p>
          <p style={{ lineHeight: 1.7 }}>
            {site.address}
            <br />
            Phone: {site.phone}
            <br />
            Email: {site.email}
            <br />
            GST: {site.gst}
            <br />
            MSME: {site.msme}
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            {categories.map((item) => (
              <li key={item.slug}>
                <Link href={`/products/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Downloads</h4>
          <ul>
            {downloads.map((item) => (
              <li key={item.href}>
                <a href={item.href} download>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="download-actions">
            <Link className="button" href="/contact">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 34, paddingTop: 20 }}
      >
        <p style={{ margin: 0, color: "#9fb3cc" }}>
          &copy; 2026 Vidyut Enterprise. Industrial electrical and earthing solutions.
        </p>
      </div>
    </footer>
  );
}
