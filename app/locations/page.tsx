import Link from "next/link";
import { MapPin } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { cityServiceLocations } from "@/lib/lead-gen-content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Service Locations in Andhra Pradesh",
  "Vidyut Enterprise service location hubs for earthing installation, lightning protection and electrical contractor support across Andhra Pradesh.",
  "/locations"
);

export default function LocationsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" }
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Locations</div>
          <h1>Service locations across Andhra Pradesh</h1>
          <p className="lead">
            City hubs for earthing installation, lightning protection and industrial electrical contractor services.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Locations"
            title="Andhra Pradesh service coverage"
            copy="Each city hub links to local service pages for earthing, lightning protection and electrical contracting."
          />
          <div className="grid three">
            {cityServiceLocations.map((city) => (
              <article className="card card-pad" key={city.slug}>
                <span className="icon-box">
                  <MapPin size={20} />
                </span>
                <h2 style={{ color: "var(--navy)", marginTop: 16, fontSize: 26 }}>{city.name}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>{city.note}</p>
                <Link className="button-secondary" href={`/locations/${city.slug}`}>
                  View City Hub
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <ConversionPanel title="Need service support in your city?" />
        </div>
      </section>
    </main>
  );
}
