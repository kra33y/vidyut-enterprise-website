import { Download } from "lucide-react";
import { downloads } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Downloads",
  "Download Vidyut Enterprise earthing and electrical product catalogues.",
  "/downloads"
);

export default function DownloadsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Downloads</div>
          <h1>Catalogues and product downloads</h1>
          <p className="lead">Download PDF catalogues for purchase review, BOQ matching and technical discussion.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid two">
            {downloads.map((item) => (
              <article className="card card-pad" key={item.href}>
                <span className="icon-box">
                  <item.icon size={22} />
                </span>
                <h2 style={{ color: "var(--navy)", marginTop: 18 }}>{item.title}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{item.description}</p>
                <a className="button" href={item.href} download>
                  <Download size={18} /> Download PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
