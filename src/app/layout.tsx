import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${jakarta.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
