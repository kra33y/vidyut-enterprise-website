import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(title: string, description?: string, path = ""): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = `${site.url}${path}`;
  const image = `${site.url}/images/brand/vidyut-enterprise-logo.png`;

  return {
    title,
    description: description ?? site.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: description ?? site.description,
      url,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 1200 }],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description ?? site.description,
      images: [image]
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
    telephone: site.phoneNumbers,
    email: site.email,
    hasMap: site.mapUrl,
    priceRange: "$$",
    identifier: [
      { "@type": "PropertyValue", name: "GST", value: site.gst },
      { "@type": "PropertyValue", name: "MSME", value: site.msme }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "31-33-102/C, Sri Vishnu Plaza, Ground Floor, Opposite Leela Mahal Theater, Dabagardens",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      postalCode: "530020",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.713931493245905,
      longitude: 83.29655331078334
    },
    description: site.description,
    areaServed: [
      "Visakhapatnam",
      "Andhra Pradesh",
      "India"
    ],
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

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`
    }))
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function productJsonLd(product: {
  title: string;
  summary: string;
  image: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.summary,
    image: `${site.url}${product.image}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: site.name
    },
    url: `${site.url}/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: site.name
      }
    }
  };
}

export function serviceJsonLd(service: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneNumbers,
      email: site.email
    },
    areaServed: "India",
    url: `${site.url}${service.path}`
  };
}
