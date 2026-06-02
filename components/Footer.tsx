import Link from "next/link";
import Image from "next/image";
import { categories, downloads, navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/home" style={{ color: "white" }}>
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
      <div className="container" style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 34, paddingTop: 20 }}>
        <p style={{ margin: 0, color: "#9fb3cc" }}>© 2026 Vidyut Enterprise. Industrial electrical and earthing solutions.</p>
      </div>
      <a
  href="https://wa.me/917675873689"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    textDecoration: "none",
    zIndex: 9999,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
  }}
>
  💬
</a>
    </footer>
  );
}
