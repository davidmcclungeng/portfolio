import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidmcclung.work"),
  alternates: { canonical: "/" },
  title: "David McClung | Aspiring Software Developer",
  description:
    "Aspiring software developer and MSc AI in Business student at Queen's University Belfast, using AI to automate manual work. Available now for software and AI / automation roles in Belfast.",
  // Link previews on LinkedIn, Slack, email and X; the image comes from app/opengraph-image.png
  openGraph: {
    title: "David McClung | Aspiring Software Developer",
    description:
      "Aspiring software developer looking for software and AI / automation roles in Belfast. Available now.",
    url: "/",
    siteName: "David McClung",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David McClung | Aspiring Software Developer",
    description:
      "Aspiring software developer looking for software and AI / automation roles in Belfast. Available now.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint so scroll-reveal hiding only applies when JS is running */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
