import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { SITE_URL } from '@/lib/site-config';
import { SKILL_SLUGS } from '@/lib/sitemap/static-routes';

interface SkillPageProps {
  skill: string;
  data: {
    title: string;
    description: string;
    experience: string;
    projects: string[];
  };
}

export default function SkillPage({ skill, data }: SkillPageProps) {
  const skillUrl = `${SITE_URL}/skills/${skill}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Skills",
        "item": `${SITE_URL}/skills`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": skillUrl,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${data.title} — Daniel Fonseca`}
        description={data.description}
        url={skillUrl}
        jsonLd={breadcrumb}
      />
      <Navbar />
      <main className="max-w-container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-textGreen">{data.title}</h1>
        <p className="text-textDark mt-4">{data.description}</p>
        <p className="mt-8">{data.experience}</p>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: SKILL_SLUGS.map(skill => ({ params: { skill } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { skill: string } }) {
  const skillsData: Record<string, SkillPageProps['data']> = {
    react: {
      title: 'React Developer',
      description: 'Expert React developer with 10+ years building scalable applications',
      experience: '10+ years of experience with React, Redux, Hooks...',
      projects: ['DafonCV', 'Portfolio'],
    },
    golang: {
      title: 'Golang Developer',
      description: 'Backend specialist in Golang microservices architecture',
      experience: 'Building high-performance APIs with Go...',
      projects: ['DafonCV', 'TechCuisine'],
    },
    typescript: {
      title: 'TypeScript Developer',
      description: 'Full-stack TypeScript expert building type-safe applications',
      experience: 'Extensive experience with TypeScript in frontend and backend development',
      projects: ['DafonCV', 'Portfolio', 'Enterprise Applications'],
    },
    docker: {
      title: 'Docker & Containerization Expert',
      description: 'Specialist in containerization and orchestration with Docker and Kubernetes',
      experience: 'Building and deploying containerized microservices at scale',
      projects: ['Microservices Architecture', 'CI/CD Pipelines'],
    },
    aws: {
      title: 'AWS Cloud Architect',
      description: 'Cloud solutions architect specializing in AWS infrastructure',
      experience: 'Designing and implementing scalable cloud solutions on AWS',
      projects: ['Cloud Migration', 'Serverless Applications'],
    },
    nextjs: {
      title: 'Next.js Developer',
      description: 'Expert in building performant React applications with Next.js',
      experience: 'Building SEO-optimized, server-side rendered applications',
      projects: ['DafonCV', 'Portfolio', 'Dafon Website'],
    },
    java: {
      title: 'Java Developer',
      description: 'Senior Java developer with enterprise application expertise',
      experience: 'Building robust enterprise applications with Java and Spring ecosystem',
      projects: ['Enterprise Systems', 'Banking Applications'],
    },
    spring: {
      title: 'Spring Framework Expert',
      description: 'Specialist in Spring Boot and Spring Cloud microservices',
      experience: 'Developing scalable microservices with Spring ecosystem',
      projects: ['Microservices Platform', 'REST APIs'],
    },
    rabbitmq: {
      title: 'RabbitMQ Messaging Expert',
      description: 'Message queue specialist with RabbitMQ for distributed systems',
      experience: 'Implementing event-driven architectures with RabbitMQ',
      projects: ['Event-Driven Systems', 'Async Processing'],
    },
    'google-pubsub': {
      title: 'Google Pub/Sub Expert',
      description: 'Cloud messaging specialist using Google Pub/Sub',
      experience: 'Building scalable messaging systems with Google Cloud Pub/Sub',
      projects: ['Real-time Data Processing', 'Event Streaming'],
    },
    angular: {
      title: 'Angular Developer',
      description: 'Frontend expert building enterprise applications with Angular',
      experience: 'Developing complex SPAs with Angular framework',
      projects: ['Enterprise Dashboards', 'Admin Panels'],
    },
    vuejs: {
      title: 'Vue.js Developer',
      description: 'Frontend specialist creating reactive applications with Vue.js',
      experience: 'Building modern web applications with Vue.js ecosystem',
      projects: ['Interactive UIs', 'Progressive Web Apps'],
    },
    postgresql: {
      title: 'PostgreSQL Database Expert',
      description: 'Database architect specializing in PostgreSQL',
      experience: 'Designing and optimizing PostgreSQL databases for high performance',
      projects: ['Database Architecture', 'Data Migration'],
    },
    sqlserver: {
      title: 'SQL Server Expert',
      description: 'Microsoft SQL Server specialist for enterprise databases',
      experience: 'Managing and optimizing SQL Server databases',
      projects: ['Enterprise Data Solutions', 'Database Optimization'],
    },
    mysql: {
      title: 'MySQL Database Developer',
      description: 'MySQL expert for scalable database solutions',
      experience: 'Building and maintaining MySQL databases at scale',
      projects: ['DafonCV Database', 'High-traffic Applications'],
    },
  };

  const data = skillsData[params.skill];
  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      skill: params.skill,
      data,
    },
  };
}
