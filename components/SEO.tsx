import Head from "next/head";
import { SITE_URL } from "@/lib/site-config";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
  keywords?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const DEFAULT_IMAGE_WIDTH = 1424;
const DEFAULT_IMAGE_HEIGHT = 752;

const DEFAULT_TITLE = "Daniel Fonseca da Silva | Full-Stack Software Engineer";
const DEFAULT_DESCRIPTION =
  "Full-Stack Software Engineer and Full-Cycle Developer with 10+ years building cloud-native, high-availability systems with Java, Spring Boot, Go, Next.js and AWS for enterprises in Europe, the US and Brazil.";
const DEFAULT_KEYWORDS =
  "software developer, full-stack developer, full-stack engineer, full-cycle engineer, full-cycle developer, software engineer, Java developer, Spring Boot developer, Golang developer, Next.js developer, TypeScript, AWS cloud engineer, Kubernetes, microservices, SaaS, Daniel Fonseca da Silva, Portugal, Lisbon, Europe, United States, Brazil";

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${SITE_URL}/assets/images/daniel-fonseca-da-silva-open-graph.png`,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  url = SITE_URL,
  keywords = DEFAULT_KEYWORDS,
  type = "website",
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const jsonLdItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Daniel Fonseca da Silva" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={`${title} — Open Graph image`} />
      <meta property="og:site_name" content="Daniel Fonseca da Silva — Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`${title} — Open Graph image`} />

      {/* Page-specific JSON-LD */}
      {jsonLdItems.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
};

export default SEO;
