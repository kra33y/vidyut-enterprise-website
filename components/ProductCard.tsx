import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  category: string;
  image: string;
  href: string;
  description: string;
};

export function ProductCard({ title, category, image, href, description }: ProductCardProps) {
  return (
    <article className="card product-card">
      <Link className="product-image" href={href} aria-label={title}>
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" />
      </Link>
      <div className="card-pad">
        <span className="tag">{category}</span>
        <h3 style={{ color: "var(--navy)", marginTop: 14, fontSize: 22 }}>{title}</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{description}</p>
        <Link className="button-secondary" href={href}>
          View Details <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
