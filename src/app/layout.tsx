import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import {
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  defaultOgImage,
} from "@/lib/structured-data";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  getSiteUrl,
  SITE_NAME,
} from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteTitle = `${SITE_NAME} | Boat Tours & Rafting in Omiš, Croatia`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: siteTitle,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: DEFAULT_DESCRIPTION,
    images: [defaultOgImage().url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} antialiased`}
    >
      <body>
        <JsonLd data={[buildLocalBusinessSchema(), buildWebSiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
