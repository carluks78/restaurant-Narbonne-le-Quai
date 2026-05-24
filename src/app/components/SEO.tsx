import { useEffect } from "react";

const BASE_URL = "https://lequai-narbonne.fr";
const DEFAULT_OG_IMAGE = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTcxNzYxMjAwMHww&ixlib=rb-4.0.3&q=80&w=1200";

const baseRestaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
  "@id": `${BASE_URL}/#restaurant`,
  "name": "Restaurant Le Quai Narbonne",
  "alternateName": ["Le Quai", "Brasserie Le Quai", "Restaurant Le Quai Narbonne", "Le Quai Brasserie Narbonne"],
  "description": "Meilleur restaurant de Narbonne, en bord du canal de la Robine. Cuisine méditerranéenne raffinée, poissons frais de Méditerranée, pizzas artisanales, terrasse vue canal. Partenaire officiel RC Narbonne. Ouvert 7j/7.",
  "image": [
    DEFAULT_OG_IMAGE,
    "https://images.unsplash.com/photo-1663530761401-15eefb544889?w=1200&q=80"
  ],
  "logo": `${BASE_URL}/logo.png`,
  "url": BASE_URL,
  "telephone": "+33468906242",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Quai Vallière",
    "addressLocality": "Narbonne",
    "addressRegion": "Occitanie",
    "postalCode": "11100",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.1847,
    "longitude": 3.0034
  },
  "hasMap": "https://maps.google.com/?q=Le+Quai+Restaurant+12+Quai+Vallière+11100+Narbonne",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "23:00"
    }
  ],
  "servesCuisine": [
    "Méditerranéenne", "Française", "Italienne", "Languedoc", "Fruits de mer", "Poissons frais", "Pizzas artisanales"
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Carte bancaire",
  "menu": `${BASE_URL}/menu`,
  "acceptsReservations": "True",
  "reservationUrl": `${BASE_URL}/reservation`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "1375",
    "ratingCount": "1375"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Terrasse vue canal", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Climatisation", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Accessible PMR", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "WiFi gratuit", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Écrans sportifs", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true }
  ],
  "keywords": "restaurant Narbonne, meilleur restaurant Narbonne, restaurant centre ville Narbonne, restaurant bord canal Narbonne, cuisine méditerranéenne Narbonne, restaurant terrasse canal de la Robine, fruits de mer Narbonne, pizzas artisanales Narbonne, restaurant ouvert 7j7 Narbonne, où manger Narbonne, restaurant romantique Narbonne, brasserie Narbonne, restaurant poisson Narbonne, partenaire RC Narbonne",
  "sameAs": [
    "https://www.rcnarbonne.com",
    "https://maps.google.com/?q=Le+Quai+Restaurant+12+Quai+Vallière+11100+Narbonne"
  ]
};

export interface FAQItem {
  q: string;
  a: string;
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  additionalSchemas?: object[];
}

export function SEO({ title, description, path, keywords, ogImage, additionalSchemas }: SEOProps) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "fr";

    const setMeta = (nameOrProp: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Core meta
    setMeta("description", description);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("googlebot", "index, follow, max-snippet:-1, max-image-preview:large");
    setMeta("author", "Restaurant Le Quai Narbonne");
    setMeta("theme-color", "#4A4A4A");
    setMeta("mobile-web-app-capable", "yes");
    setMeta("apple-mobile-web-app-capable", "yes");
    setMeta("geo.region", "FR-11");
    setMeta("geo.placename", "Narbonne");
    setMeta("geo.position", "43.1847;3.0034");
    setMeta("ICBM", "43.1847, 3.0034");
    const fullKeywords = [
      "restaurant Narbonne",
      "meilleur restaurant Narbonne",
      "restaurant centre ville Narbonne",
      "restaurant bord canal Narbonne",
      "cuisine méditerranéenne Narbonne",
      "restaurant terrasse Narbonne",
      "où manger Narbonne",
      "brasserie Narbonne",
      "restaurant poisson Narbonne",
      "pizzeria Narbonne",
      "restaurant fruits de mer Narbonne",
      "Le Quai Narbonne",
      "restaurant Quai Vallière Narbonne",
      keywords || ""
    ].filter(Boolean).join(", ");
    setMeta("keywords", fullKeywords);

    // Canonical
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:type", "restaurant", true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", imageUrl, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Restaurant Le Quai Narbonne — Cuisine Méditerranéenne, Terrasse Canal", true);
    setMeta("og:site_name", "Restaurant Le Quai Narbonne", true);
    setMeta("og:locale", "fr_FR", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);
    setMeta("twitter:image:alt", "Restaurant Le Quai Narbonne");

    // Remove existing JSON-LD
    document.querySelectorAll('script[type="application/ld+json"]').forEach(s => s.remove());

    // Build schema list
    const schemas: object[] = [baseRestaurantSchema];

    // Breadcrumb
    const breadcrumbItems: object[] = [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL }
    ];
    if (path !== "/") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": title.split("|")[0].trim().split("—")[0].trim(),
        "item": canonicalUrl
      });
    }
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    });

    // Page-specific schemas
    if (additionalSchemas?.length) {
      schemas.push(...additionalSchemas);
    }

    // Inject all schemas
    schemas.forEach((schema) => {
      const s = document.createElement("script");
      s.setAttribute("type", "application/ld+json");
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    });

  }, [title, description, path, keywords, ogImage, additionalSchemas]);

  return null;
}
