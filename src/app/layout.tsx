import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "A-Navi Agency | Boat Tours & Rafting in Omiš, Croatia",
  description:
    "Five boat tours from Omiš harbour: glass boat, taxi boat, rent a boat, semi submarine & Cetina rafting. Departures from Cetina promenade — from €15.",
  keywords: [
    "boat tours",
    "Omiš",
    "Croatia",
    "glass boat",
    "rafting",
    "Cetina river",
    "Adriatic",
    "boat rental",
  ],
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
      <body>{children}</body>
    </html>
  );
}
