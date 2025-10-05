"use client";

import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    // Organization Schema - Clean without duplicate product definitions
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.oceanflo.in/#organization",
      name: "OCEANFLO",
      alternateName: "ओशनफ्लो",
      legalName: "OM SAI RAM AQUA PRODUCTS",
      description:
        "OCEANFLO is a premium packaged water bottle manufacturing brand offering RO purified water bottles in 250ML, 500ML, 1L sizes and 10L, 20L Alkaline water jars. Advanced RO technology with fully automatic plant for quality assurance.",
      url: "https://www.oceanflo.in",
      logo: {
        "@type": "ImageObject",
        url: "https://oceanflo.in/company_logo.png",
        width: 1200,
        height: 630,
        alt: "OCEANFLO Company Logo",
      },
      image: "https://oceanflo.in/company_logo.png",
      sameAs: [
        "https://www.instagram.com/oceanflowater",
        "https://www.linkedin.com/company/oceanflo",
        "https://www.x.com/oceanflowater",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-XXXXXXXXXX",
        contactType: "customer service",
        email: "help@oceanflo.in",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rajura Road, Near Zullulwar Petrol Pump, Bamni",
        addressLocality: "Ballarpur",
        addressRegion: "Maharashtra",
        postalCode: "442701",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.8762,
        longitude: 79.3433,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      foundingDate: "2024",
      brand: {
        "@type": "Brand",
        name: "OCEANFLO",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      knowsAbout: [
        "RO Water Purification",
        "Water Manufacturing",
        "Packaged Drinking Water",
        "Alkaline Water",
        "Water Quality Assurance",
        "FSSAI Compliance",
        "ISO Standards",
      ],
      award: ["FSSAI Certified", "ISO Certified", "Quality Assured"],
      serviceType: "Water Manufacturing and Distribution",
      slogan: "HYDRATE TO NEW HEIGHTS WITH OCEANFLO",
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.oceanflo.in/#localbusiness",
      name: "OCEANFLO",
      legalName: "OM SAI RAM AQUA PRODUCTS",
      description:
        "Premium packaged water bottle manufacturing company in Ballarpur, Maharashtra",
      url: "https://www.oceanflo.in",
      telephone: "+91-XXXXXXXXXX",
      email: "help@oceanflo.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rajura Road, Near Zullulwar Petrol Pump, Bamni",
        addressLocality: "Ballarpur",
        addressRegion: "Maharashtra",
        postalCode: "442701",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.8762,
        longitude: 79.3433,
      },
      openingHours: "Mo-Fr 08:00-18:00",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      areaServed: "Maharashtra, India",
      hasMap: "https://maps.google.com/?q=19.8762,79.3433",
      priceRange: "₹₹",
      servesCuisine: "Water Manufacturing",
      foundingDate: "2024",
      numberOfEmployees: "25-50",
      industry: "Water Manufacturing",
      serviceType: "Packaged Drinking Water Manufacturing",
      award: [
        "FSSAI Certified",
        "ISO Certified",
        "Quality Assured",
        "Advanced RO Technology",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "14:00",
        },
      ],
    };

    // Individual Product Schema 1 - 1L RO Purified Water Bottle
    const product1LSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://www.oceanflo.in/#product-1l",
      name: "OCEANFLO 1L RO Purified Water Bottle",
      description:
        "Premium 1L RO purified water bottle with advanced purification technology",
      brand: {
        "@type": "Brand",
        name: "OCEANFLO",
      },
      category: "Packaged Drinking Water",
      image: "https://oceanflo.in/company_logo.png",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        price: "20",
        priceValidUntil: "2025-12-31",
        seller: {
          "@type": "Organization",
          name: "OCEANFLO",
          "@id": "https://www.oceanflo.in/#organization",
        },
        url: "https://www.oceanflo.in/#our-products",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Verified Customer",
          },
          reviewBody:
            "Excellent quality water with great taste. Highly recommended!",
        },
      ],
    };

    // Individual Product Schema 2 - 500ML RO Purified Water Bottle
    const product500MLSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://www.oceanflo.in/#product-500ml",
      name: "OCEANFLO 500ML RO Purified Water Bottle",
      description:
        "Convenient 500ML RO purified water bottle for on-the-go hydration",
      brand: {
        "@type": "Brand",
        name: "OCEANFLO",
      },
      category: "Packaged Drinking Water",
      image: "https://oceanflo.in/company_logo.png",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        price: "15",
        priceValidUntil: "2025-12-31",
        seller: {
          "@type": "Organization",
          name: "OCEANFLO",
          "@id": "https://www.oceanflo.in/#organization",
        },
        url: "https://www.oceanflo.in/#our-products",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "120",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Verified Customer",
          },
          reviewBody:
            "Perfect size for travel and daily use. Great quality water!",
        },
      ],
    };

    // Individual Product Schema 3 - 10L Alkaline Water Jar
    const product10LSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://www.oceanflo.in/#product-10l",
      name: "OCEANFLO 10L Alkaline Water Jar",
      description: "Premium 10L alkaline water jar for homes and offices",
      brand: {
        "@type": "Brand",
        name: "OCEANFLO",
      },
      category: "Alkaline Water",
      image: "https://oceanflo.in/company_logo.png",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        price: "80",
        priceValidUntil: "2025-12-31",
        seller: {
          "@type": "Organization",
          name: "OCEANFLO",
          "@id": "https://www.oceanflo.in/#organization",
        },
        url: "https://www.oceanflo.in/#our-products",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "85",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Verified Customer",
          },
          reviewBody:
            "Best alkaline water jar for home use. Excellent quality and taste!",
        },
      ],
    };

    // Individual Product Schema 4 - 250ML RO Purified Water Bottle
    const product250MLSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://www.oceanflo.in/#product-250ml",
      name: "OCEANFLO 250ML RO Purified Water Bottle",
      description:
        "Compact 250ML RO purified water bottle perfect for kids and quick hydration",
      brand: {
        "@type": "Brand",
        name: "OCEANFLO",
      },
      category: "Packaged Drinking Water",
      image: "https://oceanflo.in/company_logo.png",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        price: "10",
        priceValidUntil: "2025-12-31",
        seller: {
          "@type": "Organization",
          name: "OCEANFLO",
          "@id": "https://www.oceanflo.in/#organization",
        },
        url: "https://www.oceanflo.in/#our-products",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "95",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Verified Customer",
          },
          reviewBody:
            "Perfect size for kids and quick hydration needs. Great quality!",
        },
      ],
    };

    // Individual Product Schema 5 - 20L Alkaline Water Jar
    const product20LSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": "https://www.oceanflo.in/#product-20l",
      name: "OCEANFLO 20L Alkaline Water Jar",
      description:
        "Large capacity 20L alkaline water jar ideal for offices and large families",
      brand: {
        "@type": "Brand",
        name: "OCEANFLO",
      },
      category: "Alkaline Water",
      image: "https://oceanflo.in/company_logo.png",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        price: "140",
        priceValidUntil: "2025-12-31",
        seller: {
          "@type": "Organization",
          name: "OCEANFLO",
          "@id": "https://www.oceanflo.in/#organization",
        },
        url: "https://www.oceanflo.in/#our-products",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "65",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Verified Customer",
          },
          reviewBody:
            "Excellent large capacity jar for our office. Keeps water fresh and alkaline!",
        },
      ],
    };

    // Product Collection Schema - Simple reference to individual products
    const productCollectionSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "OCEANFLO Water Products Collection",
      description:
        "Complete range of RO purified water bottles and alkaline water jars - 250ML, 500ML, 1L bottles and 10L, 20L alkaline water jars",
      url: "https://www.oceanflo.in/#our-products",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://www.oceanflo.in/#product-250ml",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": "https://www.oceanflo.in/#product-500ml",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": "https://www.oceanflo.in/#product-1l",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@id": "https://www.oceanflo.in/#product-10l",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@id": "https://www.oceanflo.in/#product-20l",
          },
        },
      ],
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.oceanflo.in/#website",
      name: "OCEANFLO",
      url: "https://www.oceanflo.in",
      description:
        "Official website of OCEANFLO - Premium RO Purified Water Manufacturer",
      publisher: {
        "@type": "Organization",
        name: "OCEANFLO",
        legalName: "OM SAI RAM AQUA PRODUCTS",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.oceanflo.in/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.oceanflo.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.oceanflo.in/#our-products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Company",
          item: "https://www.oceanflo.in/#company",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Contact",
          item: "https://www.oceanflo.in/#contact",
        },
      ],
    };

    // Add all schemas to the page
    const addSchemaToPage = (schema: Record<string, unknown>) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    // FAQ Schema for better search results
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OCEANFLO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OCEANFLO is a premium packaged water bottle manufacturing brand that offers RO purified water bottles in 250ML, 500ML, 1L sizes and 10L, 20L alkaline water jars. We use advanced RO technology with a fully automatic plant for quality assurance.",
          },
        },
        {
          "@type": "Question",
          name: "What products does OCEANFLO offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OCEANFLO offers a complete range of water products: 250ML, 500ML, and 1L RO purified water bottles for daily hydration needs, plus 10L and 20L alkaline water jars for homes and offices. All products are manufactured using advanced RO technology.",
          },
        },
        {
          "@type": "Question",
          name: "Is OCEANFLO water certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, OCEANFLO is FSSAI and ISO certified, ensuring the highest quality standards for all our water products.",
          },
        },
        {
          "@type": "Question",
          name: "Where is OCEANFLO located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OCEANFLO is located at Rajura Road, Near Zullulwar Petrol Pump, Bamni, Ballarpur, Maharashtra - 442701, India.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact OCEANFLO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact OCEANFLO at help@oceanflo.in or visit our website at https://www.oceanflo.in for more information about our products and services.",
          },
        },
        {
          "@type": "Question",
          name: "What technology does OCEANFLO use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OCEANFLO uses advanced RO (Reverse Osmosis) technology with a fully automatic plant to ensure the highest quality of purified water.",
          },
        },
      ],
    };

    // Add all schemas
    addSchemaToPage(organizationSchema);
    addSchemaToPage(localBusinessSchema);
    addSchemaToPage(product1LSchema);
    addSchemaToPage(product500MLSchema);
    addSchemaToPage(product10LSchema);
    addSchemaToPage(product250MLSchema);
    addSchemaToPage(product20LSchema);
    addSchemaToPage(productCollectionSchema);
    addSchemaToPage(websiteSchema);
    addSchemaToPage(breadcrumbSchema);
    addSchemaToPage(faqSchema);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default StructuredData;
