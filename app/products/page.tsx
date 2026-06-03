import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, featuredProducts, productPages } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Products",
  "Explore earthing electrodes, lightning arrestors, copper products, GI products and cable trays from Vidyut Enterprise.",
  "/products"
);

export default function ProductsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" }
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Products</div>
          <h1>Industrial electrical product range</h1>
          <p className="lead">
            Product categories organized for fast enquiry, technical review and project procurement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Categories"
            title="Browse by product family"
            copy="Each category includes high-demand items, specification guidance and enquiry-ready product cards."
          />
          <div className="grid three">
            {categories.map((category) => (
              <article className="card product-card" key={category.slug}>
                <Link className="product-image" href={`/products/${category.slug}`}>
                  <Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
                </Link>
                <div className="card-pad">
                  <span className="tag">{category.products.length} products</span>
                  <h3 style={{ color: "var(--navy)", marginTop: 14, fontSize: 26 }}>{category.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{category.summary}</p>
                  <ul className="feature-list">
                    {category.products.slice(0, 5).map((item) => (
                      <li key={item}>
                        <BadgeCheck size={18} color="var(--electric)" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="card-actions">
                    <Link className="button" href={`/products/${category.slug}`}>
                      View Category <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            kicker="Popular Enquiries"
            title="Featured product pages"
            copy="Detailed product pages for common searches and RFQ requirements."
          />
          <div className="grid three">
            {featuredProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="SEO Product Pages" title="Common product requirements" />
          <div className="category-nav">
            {productPages.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug}>
                {product.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
