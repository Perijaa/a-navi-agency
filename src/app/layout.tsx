import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
