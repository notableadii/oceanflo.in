"use client";

import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "OCEANFLO - Premium RO Purified Water Bottles | Advanced Water Technology",
  description = "OCEANFLO offers premium RO purified water bottles (250ML, 500ML, 1L) and alkaline water jars (10L, 20L). Advanced RO technology, fully automatic plant, FSSAI & ISO certified. Contact us at help@oceanflo.in",
  keywords = [
    "RO purified water",
    "packaged drinking water",
    "alkaline water",
    "water bottles",
    "FSSAI certified",
    "ISO certified",
    "Maharashtra",
    "India",
    "water manufacturing",
    "OCEANFLO",
    "OM SAI RAM AQUA PRODUCTS",
  ],
  image = "https://oceanflo.in/company_logo.png",
  url = "https://www.oceanflo.in",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "OCEANFLO",
  section = "Water Manufacturing",
  tags = ["RO Water", "Purified Water", "Alkaline Water", "Water Bottles"],
}) => {
  const fullTitle = title.includes("OCEANFLO") ? title : `${title} | OCEANFLO`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="OCEANFLO - Premium RO Purified Water Manufacturer"
      />
      <meta property="og:site_name" content="OCEANFLO" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="OCEANFLO - Premium RO Purified Water Manufacturer"
      />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="OCEANFLO" />

      {/* Article Meta Tags (if applicable) */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Ballarpur, Maharashtra" />
      <meta name="geo.position" content="19.8762;79.3433" />
      <meta name="ICBM" content="19.8762, 79.3433" />

      {/* Business Meta Tags */}
      <meta
        name="business:contact_data:street_address"
        content="Rajura Road, Near Zullulwar Petrol Pump, Bamni"
      />
      <meta name="business:contact_data:locality" content="Ballarpur" />
      <meta name="business:contact_data:region" content="Maharashtra" />
      <meta name="business:contact_data:postal_code" content="442701" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta
        name="business:contact_data:phone_number"
        content="+91-XXXXXXXXXX"
      />
      <meta name="business:contact_data:email" content="help@oceanflo.in" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://vercel.live" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//vercel.live" />
    </Head>
  );
};

export default SEOHead;
