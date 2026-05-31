import Head from "next/head";
import { SITE_URL, ECOSYSTEM_SITES } from "@/lib/site-config";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_ID = `${ECOSYSTEM_SITES.company}/#organization`;
const DAFONCV_ID = `${ECOSYSTEM_SITES.dafoncv}/#softwareapplication`;
const TECHCUISINE_ID = `${ECOSYSTEM_SITES.techcuisine}/#softwareapplication`;

const OrganizationSchema = () => {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        "name": "Daniel Fonseca da Silva",
        "url": SITE_URL,
        "image": `${SITE_URL}/assets/images/Daniel_Fonseca_da_Silva_Professional.jpg`,
        "jobTitle": ["Systems Architect", "Full Stack Developer", "CTO"],
        "description":
          "Systems Architect and Full Stack Developer with 10+ years building cloud-native platforms on AWS. Enterprise experience at MEO Altice and Leroy Merlin. Founder & CTO at Dafon Online.",
        "email": "dafondeveloper@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lisbon",
          "addressCountry": "PT",
        },
        "sameAs": [
          "https://www.linkedin.com/in/daniel-fonseca-da-silva",
          "https://github.com/Daniel-Fonseca-da-Silva",
          ECOSYSTEM_SITES.company,
          ECOSYSTEM_SITES.dafoncv,
        ],
        "worksFor": { "@id": ORG_ID },
        "founder": { "@id": ORG_ID },
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
          "Kubernetes",
          "AWS",
          "Microservices",
          "RESTful API",
          "SaaS Development",
          "AI Integration",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        "url": SITE_URL,
        "name": "Daniel Fonseca da Silva — Portfolio",
        "publisher": { "@id": PERSON_ID },
        "inLanguage": "en",
      },
      {
        "@type": "Organization",
        "@id": ORG_ID,
        "name": "Dafon",
        "url": ECOSYSTEM_SITES.company,
        "logo": `${ECOSYSTEM_SITES.company}/logo.png`,
        "description":
          "Innovative solutions company delivering transformative technology services across Europe and South America",
        "founder": { "@id": PERSON_ID },
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Lisbon",
            "addressCountry": "PT",
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressCountry": "BR",
          },
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "dafondeveloper@gmail.com",
          "telephone": "+351913619053",
          "contactType": "customer service",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": DAFONCV_ID,
        "name": "DafonCV",
        "url": ECOSYSTEM_SITES.dafoncv,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description":
          "AI-powered CV creation platform that transforms professional experience into unique, ATS-optimized CVs",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
        },
        "creator": { "@id": PERSON_ID },
        "publisher": { "@id": ORG_ID },
        "featureList": [
          "AI-powered CV generation",
          "100+ professional templates",
          "Real-time analysis",
          "Job-specific optimization",
          "Multi-language support",
        ],
        "screenshot": `${ECOSYSTEM_SITES.dafoncv}/screenshot.png`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": TECHCUISINE_ID,
        "name": "TechCuisine",
        "url": ECOSYSTEM_SITES.techcuisine,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description":
          "AI-powered kitchen cost management platform for recipe costing, menu engineering, batch scaling, and margin control",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "7-day free trial",
        },
        "creator": { "@id": PERSON_ID },
        "publisher": { "@id": ORG_ID },
        "featureList": [
          "AI-powered recipe cost analysis",
          "Yield-corrected food cost percentage",
          "Menu matrix engineering",
          "Batch scaling",
          "Supplier price tracking",
        ],
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </Head>
  );
};

export default OrganizationSchema;
