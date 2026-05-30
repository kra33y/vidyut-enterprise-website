import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { industries } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industries Served",
  "Vidyut Enterprise supplies earthing, lightning protection and electrical products for plants, solar, telecom, data centers, railways and commercial projects.",
  "/industries"
);

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Industries</div>
          <h1>Industrial sectors we serve</h1>
          <p className="lead">
            Reliable electrical products and earthing solutions for critical infrastructure, high-uptime facilities and
            project-based procurement.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Applications"
            title="From plant rooms to outdoor infrastructure"
            copy="Products are positioned for electrical safety, grounding reliability, surge protection, cable routing and long-term maintenance access."
          />
          <div className="grid four">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article className="card card-pad" key={industry.title}>
                  <span className="icon-box">
                    <Icon size={22} />
                  </span>
                  <h3 style={{ color: "var(--navy)", marginTop: 18 }}>{industry.title}</h3>
                  <ul className="feature-list">
                    <li>
                      <BadgeCheck size={18} color="var(--electric)" /> Earthing and bonding material
                    </li>
                    <li>
                      <BadgeCheck size={18} color="var(--electric)" /> Lightning protection accessories
                    </li>
                    <li>
                      <BadgeCheck size={18} color="var(--electric)" /> Cable management support
                    </li>
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="card card-pad" style={{ marginTop: 24 }}>
            <h2 style={{ color: "var(--navy)", fontSize: 30 }}>Project procurement support</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Share your BOQ, drawing schedule, product list or site photos. Vidyut Enterprise can help map requirements to
              available earthing electrodes, pit covers, backfill compound, copper products, GI products, arrestors and tray
              accessories.
            </p>
            <Link className="button" href="/request-quote">
              Send Project Requirement
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
