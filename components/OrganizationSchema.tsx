import Head from "next/head";

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.dafon.online/#organization",
        "name": "Dafon",
        "url": "https://www.dafon.online",
        "logo": "https://www.dafon.online/logo.png",
        "description": "Innovative solutions company delivering transformative technology services across Europe and South America",
        "founder": {
          "@type": "Person",
          "name": "Daniel Fonseca da Silva",
          "url": "https://www.daniel-fonseca.online"
        },
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Lisbon",
            "addressCountry": "PT"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressCountry": "BR"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "dafondeveloper@gmail.com",
          "telephone": "+351913619053",
          "contactType": "customer service"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.dafoncv.online/#softwareapplication",
        "name": "DafonCV",
        "url": "https://www.dafoncv.online",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "AI-powered CV creation platform that transforms professional experience into unique and personalized CVs",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        },
        "creator": {
          "@type": "Person",
          "name": "Daniel Fonseca da Silva",
          "url": "https://www.daniel-fonseca.online"
        },
        "featureList": [
          "AI-powered CV generation",
          "100+ professional templates",
          "Real-time analysis",
          "Job-specific optimization",
          "Multi-language support"
        ],
        "screenshot": "https://www.dafoncv.online/screenshot.png"
      },
      {
        "@type": "WebApplication",
        "name": "Dafon PDF Extractor API",
        "description": "Python-based API for extracting company names, NIFs and business data from PDF documents",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "creator": {
          "@type": "Organization",
          "name": "Dafon",
          "url": "https://www.dafon.online"
        },
        "programmingLanguage": "Python"
      }
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </Head>
  );
};

export default OrganizationSchema;

