import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeCheck, Download, Send } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, downloads, featuredProducts, productPages, site } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

type Category = (typeof categories)[number];
type ProductDetail = (typeof productPages)[number];

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    ...productPages.map((product) => ({ slug: product.slug }))
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const product = productPages.find((item) => item.slug === slug);

  if (product) {
    return pageMetadata(
      `${product.title} Supplier in Visakhapatnam`,
      `${product.summary} Contact Vidyut Enterprise for ${product.title.toLowerCase()} supply and project support.`,
      `/products/${product.slug}`
    );
  }

  if (category) {
    return pageMetadata(
      `${category.title} Products Supplier`,
      `${category.title} products from Vidyut Enterprise: ${category.products.join(", ")}.`,
      `/products/${category.slug}`
    );
  }

  return pageMetadata("Products");
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  const product = productPages.find((item) => item.slug === slug);

  if (product) {
    return <ProductDetailPage product={product} />;
  }

  if (category) {
    return <ProductCategoryPage category={category} />;
  }

  notFound();
}

function ProductCategoryPage({ category }: { category: Category }) {
  const relatedProducts = featuredProducts.filter((product) => product.category === category.title);

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: category.title, path: `/products/${category.slug}` }
        ])}
      />

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
                Share BOQ, drawings or item list so the quotation can align product sizes, accessories, packing and
                dispatch requirements.
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

      <section className="section alt">
        <div className="container">
          <ConversionPanel title={`Need ${category.title.toLowerCase()} product support?`} />
        </div>
      </section>
    </main>
  );
}

function ProductDetailPage({ product }: { product: ProductDetail }) {
  const relatedProducts = featuredProducts.filter(
    (item) => item.category === product.category && item.title !== product.title
  );

  return (
    <main>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={faqJsonLd(product.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.title, path: `/products/${product.slug}` }
        ])}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Products / {product.title}</div>
          <h1>{product.title} supplier</h1>
          <p className="lead">{product.summary}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              <Send size={18} /> Request Quote
            </Link>
            <a className="button-light" href={`tel:${site.primaryPhone.replaceAll(" ", "")}`}>
              Call {site.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card product-image" style={{ aspectRatio: "5 / 4" }}>
            <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
          <div>
            <div className="section-kicker">{product.category}</div>
            <h2 className="section-title">{product.title}</h2>
            <p className="section-copy">{product.description}</p>
            <ul className="feature-list">
              {product.features.map((feature) => (
                <li key={feature}>
                  <BadgeCheck size={19} color="var(--electric)" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two">
          <div className="card card-pad">
            <div className="section-kicker">Specifications</div>
            <h2 className="section-title">Product details</h2>
            <table className="spec-table">
              <tbody>
                {Object.entries(product.specs).map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card card-pad">
            <div className="section-kicker">Applications</div>
            <h2 className="section-title">Common uses</h2>
            <ul className="feature-list">
              {product.applications.map((application) => (
                <li key={application}>
                  <BadgeCheck size={19} color="var(--electric)" /> {application}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="FAQ" title={`${product.title} questions`} />
          <div className="grid two">
            {product.faqs.map((faq) => (
              <div className="card card-pad" key={faq.question}>
                <h3 style={{ color: "var(--navy)" }}>{faq.question}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="section alt">
          <div className="container">
            <SectionHeading kicker="Related" title="Related product enquiries" />
            <div className="grid three">
              {relatedProducts.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">RFQ Details</div>
            <h2 className="section-title">Send your {product.title.toLowerCase()} requirement</h2>
            <p className="section-copy">
              Mention size, material, quantity, site location and delivery timeline for a faster response.
            </p>
          </div>
          <div className="card card-pad">
            <LeadForm type="product" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <ConversionPanel title={`Request ${product.title.toLowerCase()} quote support`} />
        </div>
      </section>
    </main>
  );
}

function ProductDetailPage({ product }: { product: ProductDetail }) {
  const relatedProducts = featuredProducts.filter(
    (item) => item.category === product.category && item.title !== product.title
  );

  return (
    <main>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={faqJsonLd(product.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.title, path: `/products/${product.slug}` }
        ])}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Products / {product.title}</div>
          <h1>{product.title} supplier</h1>
          <p className="lead">{product.summary}</p>
          <div className="hero-actions">
            <Link className="button" href="/request-quote">
              <Send size={18} /> Request Quote
            </Link>
            <a className="button-light" href={`tel:${site.primaryPhone.replaceAll(" ", "")}`}>
              Call {site.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card product-image" style={{ aspectRatio: "5 / 4" }}>
            <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
          <div>
            <div className="section-kicker">{product.category}</div>
            <h2 className="section-title">{product.title}</h2>
            <p className="section-copy">{product.description}</p>
            <ul className="feature-list">
              {product.features.map((feature) => (
                <li key={feature}>
                  <BadgeCheck size={19} color="var(--electric)" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid two">
          <div className="card card-pad">
            <div className="section-kicker">Specifications</div>
            <h2 className="section-title">Product details</h2>
            <table className="spec-table">
              <tbody>
                {Object.entries(product.specs).map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card card-pad">
            <div className="section-kicker">Applications</div>
            <h2 className="section-title">Common uses</h2>
            <ul className="feature-list">
              {product.applications.map((application) => (
                <li key={application}>
                  <BadgeCheck size={19} color="var(--electric)" /> {application}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="FAQ" title={`${product.title} questions`} />
          <div className="grid two">
            {product.faqs.map((faq) => (
              <div className="card card-pad" key={faq.question}>
                <h3 style={{ color: "var(--navy)" }}>{faq.question}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length ? (
        <section className="section alt">
          <div className="container">
            <SectionHeading kicker="Related" title="Related product enquiries" />
            <div className="grid three">
              {relatedProducts.map((item) => (
                <ProductCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">RFQ Details</div>
            <h2 className="section-title">Send your {product.title.toLowerCase()} requirement</h2>
            <p className="section-copy">
              Mention size, material, quantity, site location and delivery timeline for a faster response.
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
