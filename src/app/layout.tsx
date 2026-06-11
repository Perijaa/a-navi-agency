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
  title: "A-Navi Agency | Touring Agency in Omiš, Croatia",
  description:
    "Discover the Adriatic with A-Navi Agency. Glass boat tours, semi-submarine adventures, boat rentals, taxi boats, and Cetina river rafting in Omiš, Croatia.",
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
