import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { blogPosts } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Blog",
  "Technical blog articles about earthing electrodes, lightning protection, cable trays and industrial electrical products.",
  "/blog"
);

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Blog</div>
          <h1>Industrial electrical knowledge base</h1>
          <p className="lead">SEO-ready article samples for earthing, lightning protection and electrical product buyers.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid three">
            {blogPosts.map((post) => (
              <article className="card card-pad" key={post.title}>
                <span className="tag">
                  <CalendarDays size={14} /> {post.date}
                </span>
                <h2 style={{ color: "var(--navy)", marginTop: 16, fontSize: 26 }}>{post.title}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{post.excerpt}</p>
                <Link className="button-secondary" href="/contact">
                  Discuss Requirement
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
