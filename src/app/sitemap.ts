import type { MetadataRoute } from "next";

// Metadata routes are Route Handlers; a static export needs them marked static
export const dynamic = "force-static";

// Single-page site, so one entry. No lastModified: it could only be the build
// time, which freezes into the output the same way a build-time year would
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://davidmcclung.work",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
