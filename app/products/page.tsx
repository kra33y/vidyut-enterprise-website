import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, featuredProducts } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Products",
  "Explore earthing electrodes, lightning arrestors, copper products, GI products and cable trays from Vidyut Enterprise.",
  "/products"
);

export default function ProductsPage() {
  return (
    <main>
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
          <SectionHeading kicker="Popular Enquiries" title="Featured products" />
          <div className="grid three">
            {featuredProducts.map((product) => (
              <div className="card card-pad" key={product.title}>
                <h3 style={{ color: "var(--navy)" }}>{product.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{product.description}</p>
                <Link className="button-secondary" href={product.href}>
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
