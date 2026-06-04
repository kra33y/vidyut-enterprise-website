import type { MetadataRoute } from "next";
import { allLeadGenRoutes } from "@/lib/lead-gen-content";
import { categories, productPages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-04");
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/projects",
    "/gallery",
    "/downloads",
    "/blog",
    "/contact",
    "/earthing-installation",
    "/request-quote"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...categories.map((category) => ({
      url: `${site.url}/products/${category.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    ...productPages.map((product) => ({
      url: `${site.url}/products/${product.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95
    })),
    ...allLeadGenRoutes.serviceRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.92
    })),
    ...allLeadGenRoutes.localRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    ...allLeadGenRoutes.locationHubRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.86
    })),
    ...allLeadGenRoutes.projectRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.84
    })),
    ...allLeadGenRoutes.articleRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.78
    }))
  ];
}
