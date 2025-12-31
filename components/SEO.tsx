import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  type?: string;
}

const SEO = ({
  title = "Daniel Fonseca da Silva - Systems Architect & Full Stack Developer",
  description = "A systems architect with more than 10 years of experience turning complex challenges into scalable, high-impact solutions.",
  image = "/assets/images/open-graph-daniel.png",
  url = "https://www.daniel-fonseca.online",
  keywords = "Daniel Fonseca, Systems Architect, Full Stack Developer, Software Engineer, CEO Dafon, Tech Lead, DafonCV Creator, AI CV Platform, SaaS Developer, Portfolio, React, Next.js, TypeScript, Golang, NestJS, Cloud Infrastructure, AWS, Docker, Kubernetes, Microservices, RESTful API, System Design, Portugal Developer, Lisbon Developer, Backend Developer, Frontend Developer, Entrepreneur, Startup Founder",
  type = "website",
}: SEOProps) => {
  const fullImageUrl = image.startsWith("http") ? image : `${url}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Daniel Fonseca da Silva",
    "url": url,
    "image": fullImageUrl,
    "jobTitle": ["Systems Architect", "Full Stack Developer", "CEO at Dafon", "Tech Lead"],
    "description": description,
    "email": "dafondeveloper@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lisbon",
      "addressCountry": "PT"
    },
    "sameAs": [
      "https://www.linkedin.com/in/daniel-fonseca-da-silva",
      "https://github.com/Daniel-Fonseca-da-Silva",
      "https://www.dafon.online",
      "https://www.dafoncv.online"
    ],
    "founder": {
      "@type": "Organization",
      "name": "Dafon",
      "url": "https://www.dafon.online",
      "description": "Innovative solutions company delivering transformative technology services"
    },
    "creator": [
      {
        "@type": "SoftwareApplication",
        "name": "DafonCV",
        "url": "https://www.dafoncv.online",
        "applicationCategory": "BusinessApplication",
        "description": "AI-powered CV creation platform",
        "operatingSystem": "Web"
      }
    ],
    "knowsAbout": [
      "System Architecture",
      "Full Stack Development",
      "Cloud Infrastructure",
      "React",
      "Next.js",
      "TypeScript",
      "Golang",
      "Docker",
      "Java",
      "Spring",
      "Grafana",
      "Prometheus",
      "Kubernetes",
      "AWS",
      "Microservices",
      "RESTful API",
      "System Design",
      "SaaS Development",
      "AI Integration",
      "Backend Development",
      "Frontend Development",
      "Software Engineering",
      "Software Architecture",
      "Tech Leadership",
      "Entrepreneurship"
    ]
  };

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
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
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
      <meta property="og:site_name" content="Daniel Fonseca da Silva - Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
};

export default SEO;
