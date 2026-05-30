import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Download, Send } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, downloads, featuredProducts } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) return pageMetadata("Products");
  return pageMetadata(
    `${category.title} Supplier`,
    `${category.title} products from Vidyut Enterprise: ${category.products.join(", ")}.`,
    `/products/${category.slug}`
  );
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  const relatedProducts = featuredProducts.filter((product) => product.href.endsWith(category.slug));

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Products / {category.title}</div>
          <h1>{category.title} products supplier</h1>
          <p className="lead">{category.summary}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              <Send size={18} /> Request Quote
            </Link>
            <a className="button-light" href={downloads[0].href} download>
              <Download size={18} /> Download Catalogue
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card product-image" style={{ aspectRatio: "5 / 4" }}>
            <Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
          <div>
            <div className="section-kicker">Product List</div>
            <h2 className="section-title">{category.title}</h2>
            <p className="section-copy">
              The following products are positioned for industrial purchase, project supply and contractor requirements.
              Sizes, finishes and packaging can be aligned to site drawings and RFQ details.
            </p>
            <ul className="feature-list">
              {category.products.map((item) => (
                <li key={item}>
                  <BadgeCheck size={19} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Technical Scope" title="Common specification considerations" />
          <div className="grid three">
            <div className="card card-pad">
              <h3 style={{ color: "var(--navy)" }}>Material and Finish</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Material grades, coating, surface finish and corrosion exposure should be selected based on the site
                environment and system design.
              </p>
            </div>
            <div className="card card-pad">
              <h3 style={{ color: "var(--navy)" }}>Project Quantity</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Share BOQ, drawings or item list so the quotation can align product sizes, accessories, packing and dispatch
                requirements.
              </p>
            </div>
            <div className="card card-pad">
              <h3 style={{ color: "var(--navy)" }}>Installation Support</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                Contractor-oriented support is available for earthing, lightning protection and related electrical
                infrastructure packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="section">
          <div className="container">
            <SectionHeading kicker="Featured" title={`Popular ${category.title} products`} />
            <div className="grid three">
              {relatedProducts.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">RFQ Details</div>
            <h2 className="section-title">Send your {category.title.toLowerCase()} enquiry</h2>
            <p className="section-copy">
              Mention product name, quantity, size, finish, site location and preferred delivery timeline.
            </p>
          </div>
          <div className="card card-pad">
            <LeadForm type="product" />
          </div>
        </div>
      </section>
    </main>
  );
}
