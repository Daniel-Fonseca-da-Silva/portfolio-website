import Head from "next/head";
import { SITE_URL } from "@/lib/site-config";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

const DEFAULT_TITLE = "Daniel Fonseca da Silva | Systems Architect & Full Stack Developer";
const DEFAULT_DESCRIPTION =
  "Systems Architect and Full Stack Developer with 10+ years building cloud-native platforms on AWS. Enterprise experience at MEO Altice and Leroy Merlin. Founder & CTO at Dafon Online.";
const DEFAULT_KEYWORDS =
  "Daniel Fonseca da Silva, Systems Architect, Full Stack Developer, Software Engineer, Golang, Next.js, TypeScript, AWS, Docker, Dafon, DafonCV, TechCuisine, Portugal, Lisbon, SaaS founder, Cloud Architecture, Microservices";

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${SITE_URL}/assets/images/open-graph-daniel.png`,
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
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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
