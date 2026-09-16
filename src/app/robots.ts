import type { MetadataRoute } from "next";

// Metadata routes are Route Handlers; a static export needs them marked static
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://davidmcclung.work/sitemap.xml",
  };
}
