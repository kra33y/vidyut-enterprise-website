import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(title: string, description?: string, path = ""): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description: description ?? site.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: description ?? site.description,
      url,
      siteName: site.name,
      images: [{ url: "/images/brand/vidyut-enterprise-logo.png", width: 1200, height: 1200 }],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description ?? site.description,
      images: ["/images/brand/vidyut-enterprise-logo.png"]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalName,
    url: site.url,
    image: `${site.url}/images/brand/vidyut-enterprise-logo.png`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "31-33-102/C, Sri Vishnu Plaza, Ground Floor, Opposite Leela Mahal Theater, Dabagardens",
      addressLocality: "Visakhapatnam",
      postalCode: "530020",
      addressCountry: "IN"
    },
    description: site.description,
    areaServed: "India",
    knowsAbout: [
      "Earthing Electrode Supplier",
      "Chemical Earthing Electrode",
      "Copper Bonded Earthing Electrode",
      "Lightning Arrestor Supplier",
      "Industrial Electrical Supplier",
      "Lightning Protection System"
    ]
  };
}
