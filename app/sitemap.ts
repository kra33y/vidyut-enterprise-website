import type { MetadataRoute } from "next";
import { categories, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/home",
    "/about",
    "/products",
    "/industries",
    "/projects",
    "/gallery",
    "/downloads",
    "/blog",
    "/contact",
    "/request-quote"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/home" ? 1 : 0.8
    })),
    ...categories.map((category) => ({
      url: `${site.url}/products/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    }))
  ];
}
