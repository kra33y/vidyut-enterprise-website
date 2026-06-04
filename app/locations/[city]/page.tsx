import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ShieldCheck } from "lucide-react";
import { ConversionPanel } from "@/components/ConversionPanel";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { cityServiceLocations } from "@/lib/lead-gen-content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return cityServiceLocations.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cityServiceLocations.find((item) => item.slug === citySlug);
  if (!city) return pageMetadata("Locations");

  return pageMetadata(
    `Electrical, Earthing and Lightning Protection Services in ${city.name}`,
    `Vidyut Enterprise supports ${city.name} projects with earthing installation, lightning protection and electrical contractor services.`,
    `/locations/${city.slug}`
  );
}

export default async function CityLocationPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cityServiceLocations.find((item) => item.slug === citySlug);
  if (!city) notFound();

  const cityLinks = [
    { label: `Earthing Installation in ${city.name}`, href: `/earthing-installation-${city.slug}` },
    { label: `Lightning Protection in ${city.name}`, href: `/lightning-protection-${city.slug}` },
    { label: `Electrical Contractor in ${city.name}`, href: `/electrical-contractor-${city.slug}` }
  ];

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: city.name, path: `/locations/${city.slug}` }
        ])}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Locations / {city.name}</div>
          <h1>Electrical and earthing services in {city.name}</h1>
          <p className="lead">
            Local hub for earthing installation, lightning protection installation and electrical contractor services in
            {` ${city.name}`}.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <div className="article-prose">
            <SectionHeading kicker="City Hub" title={`${city.name} industrial support`} />
            <p>
              Vidyut Enterprise supports {city.name} requirements connected to {city.note}. The focus is practical
              support for industrial electrical, earthing, lightning protection, switchgear and electrical infrastructure
              enquiries across Andhra Pradesh.
            </p>
            <p>
              Use this hub to reach the right city-specific service page. Share BOQ details, drawings, site photos,
              product names, quantities and delivery location for faster quotation and technical consultation.
            </p>
          </div>
          <div className="card card-pad">
            <span className="icon-box">
              <MapPin size={20} />
            </span>
            <h2 style={{ color: "var(--navy)", marginTop: 18 }}>Available city pages</h2>
            <div className="link-list">
              {cityLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeading kicker="Support" title="Common requirements in this city" />
          <div className="grid three">
            {["Earthing installation and testing", "Lightning protection and down conductor support", "Switchgear, cables, glands and lugs supply"].map((item) => (
              <div className="card card-pad" key={item}>
                <ShieldCheck size={20} color="var(--electric)" />
                <h3 style={{ color: "var(--navy)", marginTop: 14 }}>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ConversionPanel title={`Request support for a ${city.name} project`} />
        </div>
      </section>
    </main>
  );
}
