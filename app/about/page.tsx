import Link from "next/link";
import { Award, BadgeCheck, Building2, Factory, ShieldCheck, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, site, whyChooseUs } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Vidyut Enterprise",
  "Learn about Vidyut Enterprise, a Visakhapatnam based industrial electrical, earthing and lightning protection supplier.",
  "/about"
);

export default function AboutPage() {
  const capabilities = [
    { title: "Manufacturer", icon: Factory },
    { title: "Supplier", icon: Building2 },
    { title: "Stockist", icon: BadgeCheck },
    { title: "Distributor", icon: Award },
    { title: "Contractor", icon: ShieldCheck },
    { title: "Technical Support", icon: Zap }
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / About</div>
          <h1>Electrical and earthing product partner for industrial projects.</h1>
          <p className="lead">
            Vidyut Enterprise supports procurement teams, consultants, contractors and plant engineers with reliable product
            supply, project documentation and practical technical guidance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <div className="section-kicker">Company Profile</div>
            <h2 className="section-title">Premium B2B supply for critical electrical infrastructure</h2>
            <p className="section-copy">
              Based in Visakhapatnam, Vidyut Enterprise serves industrial electrical requirements across earthing systems,
              lightning protection systems, copper products, GI products and cable management solutions. The business combines
              product availability with contractor-oriented site understanding, helping buyers select suitable materials for
              performance, durability and compliance.
            </p>
            <p className="section-copy">
              Our goal is simple: make industrial electrical procurement dependable, clear and fast. Whether the requirement is
              a single product enquiry, bulk material supply or a project package, we focus on responsive communication,
              suitable product matching and professional documentation.
            </p>
            <Link className="button" href="/request-quote">
              Request Company Quote
            </Link>
          </div>
          <div className="card card-pad">
            <h3 style={{ color: "var(--navy)", fontSize: 28 }}>Registration Details</h3>
            <table className="spec-table">
              <tbody>
                <tr>
                  <th>Company</th>
                  <td>{site.legalName}</td>
                </tr>
                <tr>
                  <th>GST</th>
                  <td>{site.gst}</td>
                </tr>
                <tr>
                  <th>MSME</th>
                  <td>{site.msme}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{site.address}</td>
                </tr>
                <tr>
                  <th>Business Type</th>
                  <td>Manufacturer, Supplier, Stockist, Distributor, Contractor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            kicker="Capabilities"
            title="A practical partner for purchase and project teams"
            copy="The site is structured for fast enquiry generation, but the company positioning stays deeply industrial and trust-led."
          />
          <div className="grid three">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div className="card card-pad" key={item.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 style={{ color: "var(--navy)", marginTop: 16 }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                    Product sourcing, technical selection and documentation support for industrial electrical projects.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div>
            <SectionHeading kicker="Product Range" title="Focused on electrical safety and infrastructure" />
            <div className="grid">
              {categories.map((category) => (
                <div className="card card-pad" key={category.slug}>
                  <h3 style={{ color: "var(--navy)" }}>{category.title}</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{category.summary}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading kicker="Why Buyers Choose Us" title="Built for dependable procurement" />
            <ul className="feature-list">
              {whyChooseUs.map((item) => (
                <li key={item}>
                  <ShieldCheck size={20} color="var(--electric)" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
