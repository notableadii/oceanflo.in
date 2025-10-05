import type { Metadata } from "next";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "../components/GoogleAnalytics";
import StructuredData from "../components/StructuredData";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import { SmoothScrollProvider } from "../components/SmoothScrollContext";

export const metadata: Metadata = {
  title: "OCEANFLO - Premium RO Purified Water Bottles",
  description:
    "OCEANFLO is a premium packaged water bottle manufacturing brand offering RO purified water bottles in 1L, 500ML sizes and 10L Alkaline water jars. Advanced RO technology with fully automatic plant for quality assurance.",
  keywords: [
    "OCEANFLO",
    "oceanflo",
    "oceanflo.in",
    "OceanFlo",
    "RO purified water",
    "packaged drinking water",
    "water bottles",
    "alkaline water",
    "water manufacturing",
    "OM SAI RAM AQUA PRODUCTS",
    "purified water bottles",
    "1L water bottles",
    "250ML water bottles",
    "500ML water bottles",
    "10L alkaline water",
    "RO technology",
    "water purification",
    "packaged water",
    "drinking water",
    "water supplier",
    "water manufacturer",
    "FSSAI certified water",
    "ISO certified water",
    "Maharashtra water company",
    "Chandrapur water company",
    "Chandrapur water supplier",
    "Chandrapur water manufacturer",
    "Chandrapur water bottles",
    "Chandrapur water jars",
    "Chandrapur water purification",
    "Chandrapur water packaging",
    "Chandrapur water distribution",
    "Chandrapur water transport",
    "Chandrapur water storage",
    "Chandrapur water treatment",
    "Chandrapur water distribution",
    "Chandrapur water transport",
    "Ballarpur water company",
    "Ballarpur water supplier",
    "Ballarpur water manufacturer",
    "Ballarpur water bottles",
    "Ballarpur water jars",
    "Ballarpur water purification",
    "Ballarpur water packaging",
    "Rajura water company",
    "Rajura water supplier",
    "Rajura water manufacturer",
    "Rajura water bottles",
    "Rajura water jars",
    "Rajura water purification",
    "Rajura water packaging",
    "Rajura water distribution",
  ],
  authors: [{ name: "OCEANFLO", url: "https://www.oceanflo.in" }],
  creator: "OCEANFLO",
  publisher: "OM SAI RAM AQUA PRODUCTS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.oceanflo.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.oceanflo.in",
    siteName: "OCEANFLO",
    title: "OCEANFLO - Premium RO Purified Water Bottles",
    description:
      "OCEANFLO is a premium packaged water bottle manufacturing brand offering RO purified water bottles in 1L, 500ML, 250ML sizes and 10L Alkaline water jars. Advanced RO technology with fully automatic plant for quality assurance.",
    images: [
      {
        url: "https://oceanflo.in/company_logo.png",
        width: 1200,
        height: 630,
        alt: "OCEANFLO Company Logo - Premium RO Purified Water Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCEANFLO - Premium RO Purified Water Bottles",
    description:
      "OCEANFLO is a premium packaged water bottle manufacturing brand offering RO purified water bottles in 1L, 500ML, 250ML sizes and 10L Alkaline water jars.",
    images: ["https://oceanflo.in/company_logo.png"],
    creator: "@oceanflo",
    site: "@oceanflo",
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "Manufacturing",
  classification: "Water Manufacturing",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Ballarpur, Maharashtra",
    "geo.position": "19.8762;79.3433",
    ICBM: "19.8762, 79.3433",
    "DC.title": "OCEANFLO - Premium RO Purified Water Bottles",
    "DC.creator": "OCEANFLO",
    "DC.subject":
      "RO Purified Water, Packaged Drinking Water, Water Manufacturing",
    "DC.description":
      "Premium packaged water bottle manufacturing brand with advanced RO technology",
    "DC.publisher": "OM SAI RAM AQUA PRODUCTS",
    "DC.contributor": "OCEANFLO",
    "DC.date": "2025",
    "DC.type": "Website",
    "DC.format": "text/html",
    "DC.identifier": "https://www.oceanflo.in",
    "DC.language": "en",
    "DC.coverage": "India, Maharashtra",
    "DC.rights": "Copyright © 2025 OCEANFLO. All rights reserved.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <GoogleAnalytics />
        <link rel="canonical" href="https://www.oceanflo.in" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link
          rel="preload"
          as="image"
          href="/background-optimized.jpg"
          type="image/jpeg"
        />
        <link
          rel="preload"
          as="font"
          href="/styles/font.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="https://oceanflo.in/company_logo.png"
          type="image/png"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <StructuredData />
        <PerformanceOptimizer />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
