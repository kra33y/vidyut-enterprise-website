import Link from "next/link";
import { ShieldCheck, Zap, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Earthing Installation & Consultancy Services",
  "Professional earthing installation, testing, consultancy and lightning protection services.",
  "/earthing-installation"
);

export default function EarthingInstallationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Services</div>

          <h1>Earthing Installation & Consultancy Services</h1>

          <p className="lead">
            Complete earthing system design, installation,
            testing and consultancy for industrial,
            commercial and infrastructure projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Our Services"
            title="Professional Earthing Solutions"
            copy="From site survey to final testing, we provide complete earthing services."
          />

          <div className="grid three">
            <div className="card card-pad">
              <h3>Chemical Earthing Installation</h3>
            </div>

            <div className="card card-pad">
              <h3>Lightning Protection Systems</h3>
            </div>

            <div className="card card-pad">
              <h3>Earthing Resistance Testing</h3>
            </div>

            <div className="card card-pad">
              <h3>Site Survey & Consultancy</h3>
            </div>

            <div className="card card-pad">
              <h3>Industrial Earthing Projects</h3>
            </div>

            <div className="card card-pad">
              <h3>Maintenance & Upgrades</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            kicker="Industries"
            title="Industries We Serve"
          />

          <ul className="feature-list">
            <li><ShieldCheck size={20} /> Manufacturing Plants</li>
            <li><ShieldCheck size={20} /> Commercial Buildings</li>
            <li><ShieldCheck size={20} /> Hospitals</li>
            <li><ShieldCheck size={20} /> Data Centres</li>
            <li><ShieldCheck size={20} /> Telecom Sites</li>
            <li><ShieldCheck size={20} /> Power Projects</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Get Started"
            title="Need Earthing Installation?"
          />

          <Link className="button" href="/contact">
            Request Site Visit
          </Link>
        </div>
      </section>
    </main>
  );
}