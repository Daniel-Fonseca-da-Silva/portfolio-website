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
  keywords = "Daniel Fonseca, Daniel Fonseca da Silva, Daniel Fonseca da Silva desenvolvedor, Daniel Fonseca da Silva programador, Daniel Fonseca da Silva developer, Daniel Fonseca da Silva software engineer, Daniel Fonseca da Silva European developer, Daniel Fonseca da Silva desenvolvedor europeu, Daniel Fonseca da Silva Europe, Daniel Fonseca da Silva EU, Systems Architect, Full Stack Developer, Software Engineer, Daniel Fonseca engenheiro informatico, Daniel Fonseca programador, Daniel Fonseca developer, Daniel Fonseca software developer, Daniel Fonseca web developer, Daniel Fonseca Portugal, Daniel Fonseca Lisboa, Daniel Fonseca Lisbon, Daniel Fonseca Porto, Daniel Fonseca Oporto, Daniel Fonseca Europa, Daniel Fonseca Europe, Daniel Fonseca European, Daniel Fonseca EU, Daniel Fonseca desenvolvedor europeu, Daniel Fonseca European developer, Daniel Fonseca European programmer, Daniel Fonseca programador na Europa, Daniel Fonseca programmer in Europe, Daniel Fonseca empresa, Daniel Fonseca company, Daniel Fonseca fundador, Daniel Fonseca founder, Daniel Fonseca CEO, Daniel Fonseca Dafon, CEO Dafon, Dafon founder, Dafon CEO, Dafon company, Dafon Portugal, Dafon Europe, Dafon European company, Dafon technology, Dafon solutions, Dafon software, Dafon development, Tech Lead, Technical Leader, Engineering Manager, Software Architect, Solution Architect, Cloud Architect, European Software Architect, Europe Software Development, European Software Development, EU Software Development, Software Development Europe, Software Development Portugal, Software Development Porto, Development Porto, Development in Europe, Tech in Europe, Tech in Porto, Technology Europe, Technology Porto, European Tech, EU Tech, Porto Tech, Tech Porto, DafonCV, DafonCV Creator, DafonCV founder, DafonCV platform, DafonCV AI, DafonCV Europe, AI CV Platform, AI CV Generator, CV Platform, Resume Builder, European SaaS, SaaS Europe, SaaS Developer, SaaS Founder, SaaS Platform, Daniel Fonseca resume, Daniel Fonseca CV, Daniel Fonseca portfolio, Portfolio, Professional Portfolio, Developer Portfolio, European Portfolio, Europe Portfolio, React Developer, React Developer Europe, React Developer Porto, React Developer Portugal, Next.js Developer, Next.js Developer Europe, Next.js Developer Porto, TypeScript Developer, TypeScript Europe, TypeScript Porto, Golang Developer, Golang Europe, Golang Porto, Go Developer, Go Developer Europe, Go Developer Porto, NestJS Developer, NestJS Porto, Node.js Developer, Node.js Porto, Java Developer, Java Developer Europe, Java Developer Porto, Spring Developer, Spring Boot, JavaScript Developer, JavaScript Europe, Frontend Engineer, Frontend Engineer Europe, Frontend Engineer Porto, Backend Engineer, Backend Engineer Europe, Backend Engineer Porto, Full Stack Engineer, Full Stack Engineer Europe, Full Stack Engineer Porto, Full Stack Developer Porto, European Full Stack, Europe Full Stack, Porto Full Stack, Cloud Infrastructure, Cloud Computing, Cloud Solutions, Cloud Europe, AWS Developer, AWS Architect, AWS Solutions, AWS Europe, Amazon Web Services, Docker, Docker Containers, Docker Europe, Kubernetes, Kubernetes Europe, K8s, Container Orchestration, Microservices Architecture, Microservices Developer, Microservices Europe, Microservices Design, RESTful API, REST API, API Development, API Development Europe, API Design, GraphQL, System Design, System Architecture, Software Design, Software Development, Software Development in Europe, European Software Engineer, Europe Software Engineer, EU Software Engineer, Agile Development, Scrum Master, Kanban, DevOps Engineer, DevOps Europe, DevOps Practices, CI/CD, Continuous Integration, Continuous Deployment, Git, GitHub, Version Control, Portugal Developer, Portuguese Developer, Lisbon Developer, Lisboa Developer, Porto Developer, Oporto Developer, Developer Porto, Developer Oporto, Programador Porto, Desenvolvedor Porto, Software Engineer Porto, Engineer Porto, European Developer, EU Developer, Europe Developer, Developer in Europe, Programmer in Europe, Programador na Europa, Desenvolvedor na Europa, Software Engineer in Europe, Engineer in Europe, Backend Developer, Backend Development, Backend Europe, Frontend Developer, Frontend Development, Frontend Europe, Web Developer, Web Development, Web Development Europe, European Web Developer, Mobile Development, Entrepreneur, Tech Entrepreneur, European Entrepreneur, Europe Entrepreneur, Startup Founder, Startup Europe, European Startup, EU Startup, Business Founder, Daniel Fonseca empresario, Daniel Fonseca empreendedor, Innovation, Innovation Europe, Digital Transformation, Technology Solutions, Software Solutions, Enterprise Solutions, European Enterprise, Scalable Systems, High Performance Systems, Distributed Systems, Web Applications, Progressive Web Apps, PWA, Single Page Applications, SPA, Server Side Rendering, SSR, Tailwind CSS, CSS Framework, Responsive Design, UI/UX, User Interface, User Experience, Framer Motion, Animation, Web Animation, PostgreSQL, Database Design, SQL, NoSQL, MongoDB, Redis, Message Queues, RabbitMQ, Kafka, Event Driven Architecture, Domain Driven Design, DDD, Test Driven Development, TDD, Unit Testing, Integration Testing, Code Quality, Clean Code, SOLID Principles, Design Patterns, Refactoring, Performance Optimization, Web Performance, SEO Optimization, Web Security, Authentication, Authorization, JWT, OAuth, API Security, Solidity, Smart Contracts, Blockchain, Blockchain Europe, Web3, Web3 Europe, Cryptocurrency, DeFi, NFT, Ethereum, Web 3.0, Decentralized Applications, dApps, Artificial Intelligence, AI Integration, AI Europe, Machine Learning, ML, AI Development, AI Solutions, ChatGPT Integration, OpenAI, AI Automation, Prometheus, Grafana, Monitoring, Observability, Logging, Metrics, Tracing, Infrastructure as Code, IaC, Terraform, CloudFormation, Serverless, Lambda Functions, API Gateway, Load Balancing, Auto Scaling, High Availability, Disaster Recovery, Backup Solutions, Security Best Practices, OWASP, Penetration Testing, Code Review, Technical Documentation, Software Documentation, Agile Methodologies, Project Management, Team Leadership, Mentoring, Code Mentoring, Technical Consulting, Consulting Europe, Freelance Developer, Freelance Europe, Remote Work, Remote Developer, Remote Europe, Digital Nomad, Digital Nomad Europe, Tech Community, Tech Community Europe, Open Source, GitHub Projects, Technical Writing, Tech Blog, Software Engineering Blog, Technology Innovation, Startup Culture, Product Development, MVP Development, Rapid Prototyping, Proof of Concept, POC, Technical Strategy, Technology Roadmap, Software Consulting, IT Consulting, IT Consulting Europe, Digital Solutions, Business Intelligence, Data Analysis, Analytics, Performance Metrics, KPI Tracking, Growth Hacking, Conversion Optimization, A/B Testing, Feature Flags, Blue Green Deployment, Canary Deployment, Rolling Updates, Zero Downtime Deployment, European Technology, Europe Technology Solutions, EU Technology, Tech Leader Europe, CTO Europe, Engineering Lead Europe, Software Craftsmanship, Code Craftsman, Professional Developer Europe, Senior Developer Europe, Lead Developer Europe, Principal Engineer Europe, Staff Engineer Europe",
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
