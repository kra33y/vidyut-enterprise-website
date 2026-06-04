import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { knowledgeArticles } from "@/lib/lead-gen-content";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = knowledgeArticles.find((item) => item.slug === slug);
  if (!article) return pageMetadata("Blog");

  return pageMetadata(article.title, article.metaDescription, `/blog/${article.slug}`);
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = knowledgeArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  const paragraphs = [
    `${article.title} is an important topic for industrial buyers, contractors, consultants and maintenance teams because it connects safety, uptime, material selection and long-term inspection. A good decision is not based only on the lowest material price; it depends on site condition, system purpose, accessories, execution method and future service access.`,
    article.excerpt,
    `For ${article.cluster.toLowerCase()} planning, the best results come when the BOQ, drawings, old readings, photographs and site constraints are reviewed together. This helps identify whether the site needs new material, maintenance, testing, additional earth points, lightning protection accessories or a cleaner procurement list.`,
    "Vidyut Enterprise uses these guides to help serious buyers frame better enquiries. If you are comparing products, checking an existing installation, planning a factory upgrade or preparing a project quotation, the article points below can help you ask the right questions before ordering material."
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path: `/blog/${article.slug}` }
        ])}
      />
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd data={faqJsonLd(article.faqs)} />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Blog / {article.cluster}</div>
          <h1>{article.title}</h1>
          <p className="lead">{article.metaDescription}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              Request BOQ Support
            </Link>
            <Link className="button-light" href="/contact">
              Technical Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-prose">
          <SectionHeading kicker={article.cluster} title="Practical industrial guidance" />
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Key Points" title="What to check before procurement or installation" />
          <div className="grid two">
            {article.points.map((point) => (
              <div className="card card-pad" key={point}>
                <span className="icon-box">
                  <CheckCircle2 size={20} />
                </span>
                <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: 0 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card card-pad article-prose">
            <h2 style={{ color: "var(--navy)" }}>How Vidyut Enterprise can help</h2>
            <p>
              The team can review product requirements, suggest related accessories, connect the topic to suitable
              service support and prepare an enquiry-ready material list. This is useful when a project has mixed
              requirements across earthing electrodes, copper products, GI products, lightning protection and cable
              management.
            </p>
            <p>
              A stronger enquiry includes the product name, quantity, site location, expected finish, drawings, old test
              readings and timeline. These details help reduce back-and-forth and make the quotation more useful for
              purchase approval.
            </p>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Related services and products</h3>
            <div className="link-list">
              {[...article.relatedServices, ...article.relatedProducts].map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="FAQ" title={`${article.title} questions`} />
          <div className="grid two">
            {article.faqs.map((faq) => (
              <div className="card card-pad" key={faq.question}>
                <h3 style={{ color: "var(--navy)" }}>{faq.question}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ConversionPanel title="Need help applying this guide to your project?" />
        </div>
      </section>
    </main>
  );
}
