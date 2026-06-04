import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { knowledgeArticles } from "@/lib/lead-gen-content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industrial Electrical Knowledge Center",
  "Technical articles about earthing, lightning protection, cable trays, grounding and industrial electrical procurement.",
  "/blog"
);

const clusters = ["Earthing", "Lightning Protection", "Electrical Infrastructure"] as const;

export default function BlogPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" }
        ])}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Blog</div>
          <h1>Industrial electrical knowledge center</h1>
          <p className="lead">
            Structured topic clusters for earthing, lightning protection and electrical infrastructure buyers.
          </p>
        </div>
      </section>

      {clusters.map((cluster, index) => (
        <section className={index % 2 === 0 ? "section" : "section alt"} key={cluster}>
          <div className="container">
            <SectionHeading
              kicker="Knowledge Cluster"
              title={cluster}
              copy="Practical articles with internal links, commercial CTAs and FAQ support for industrial decision-makers."
            />
            <div className="grid three">
              {knowledgeArticles
                .filter((article) => article.cluster === cluster)
                .map((article) => (
                  <article className="card card-pad" key={article.slug}>
                    <span className="tag">
                      <CalendarDays size={14} /> {article.date}
                    </span>
                    <h2 style={{ color: "var(--navy)", marginTop: 16, fontSize: 24 }}>{article.title}</h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{article.excerpt}</p>
                    <Link className="button-secondary" href={`/blog/${article.slug}`}>
                      Read Guide
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section alt">
        <div className="container">
          <ConversionPanel title="Need technical help with a product or BOQ?" />
        </div>
      </section>
    </main>
  );
}
