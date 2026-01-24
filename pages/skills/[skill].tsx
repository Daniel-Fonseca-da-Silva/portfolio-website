import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  return (
    <>
      <Head>
        <title>{data.title} - Daniel Fonseca</title>
        <meta name="description" content={data.description} />
      </Head>
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
  const skills = [
    'react', 
    'golang', 
    'typescript', 
    'docker', 
    'aws', 
    'nextjs', 
    'java', 
    'spring',
    'rabbitmq',
    'google-pubsub',
    'angular',
    'vuejs',
    'postgresql',
    'sqlserver',
    'mysql'
  ];
  
  return {
    paths: skills.map(skill => ({ params: { skill } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { skill: string } }) {
  const skillsData: Record<string, any> = {
    react: {
      title: 'React Developer - Daniel Fonseca',
      description: 'Expert React developer with 10+ years building scalable applications',
      experience: '10+ years of experience with React, Redux, Hooks...',
      projects: ['DafonCV', 'Portfolio']
    },
    golang: {
      title: 'Golang Developer - Daniel Fonseca',
      description: 'Backend specialist in Golang microservices architecture',
      experience: 'Building high-performance APIs with Go...',
      projects: ['DafonCV', 'PDF Extractor']
    },
    typescript: {
      title: 'TypeScript Developer - Daniel Fonseca',
      description: 'Full-stack TypeScript expert building type-safe applications',
      experience: 'Extensive experience with TypeScript in frontend and backend development',
      projects: ['DafonCV', 'Portfolio', 'Enterprise Applications']
    },
    docker: {
      title: 'Docker & Containerization Expert - Daniel Fonseca',
      description: 'Specialist in containerization and orchestration with Docker and Kubernetes',
      experience: 'Building and deploying containerized microservices at scale',
      projects: ['Microservices Architecture', 'CI/CD Pipelines']
    },
    aws: {
      title: 'AWS Cloud Architect - Daniel Fonseca',
      description: 'Cloud solutions architect specializing in AWS infrastructure',
      experience: 'Designing and implementing scalable cloud solutions on AWS',
      projects: ['Cloud Migration', 'Serverless Applications']
    },
    nextjs: {
      title: 'Next.js Developer - Daniel Fonseca',
      description: 'Expert in building performant React applications with Next.js',
      experience: 'Building SEO-optimized, server-side rendered applications',
      projects: ['DafonCV', 'Portfolio', 'Dafon Website']
    },
    java: {
      title: 'Java Developer - Daniel Fonseca',
      description: 'Senior Java developer with enterprise application expertise',
      experience: 'Building robust enterprise applications with Java and Spring ecosystem',
      projects: ['Enterprise Systems', 'Banking Applications']
    },
    spring: {
      title: 'Spring Framework Expert - Daniel Fonseca',
      description: 'Specialist in Spring Boot and Spring Cloud microservices',
      experience: 'Developing scalable microservices with Spring ecosystem',
      projects: ['Microservices Platform', 'REST APIs']
    },
    rabbitmq: {
      title: 'RabbitMQ Messaging Expert - Daniel Fonseca',
      description: 'Message queue specialist with RabbitMQ for distributed systems',
      experience: 'Implementing event-driven architectures with RabbitMQ',
      projects: ['Event-Driven Systems', 'Async Processing']
    },
    'google-pubsub': {
      title: 'Google Pub/Sub Expert - Daniel Fonseca',
      description: 'Cloud messaging specialist using Google Pub/Sub',
      experience: 'Building scalable messaging systems with Google Cloud Pub/Sub',
      projects: ['Real-time Data Processing', 'Event Streaming']
    },
    angular: {
      title: 'Angular Developer - Daniel Fonseca',
      description: 'Frontend expert building enterprise applications with Angular',
      experience: 'Developing complex SPAs with Angular framework',
      projects: ['Enterprise Dashboards', 'Admin Panels']
    },
    vuejs: {
      title: 'Vue.js Developer - Daniel Fonseca',
      description: 'Frontend specialist creating reactive applications with Vue.js',
      experience: 'Building modern web applications with Vue.js ecosystem',
      projects: ['Interactive UIs', 'Progressive Web Apps']
    },
    postgresql: {
      title: 'PostgreSQL Database Expert - Daniel Fonseca',
      description: 'Database architect specializing in PostgreSQL',
      experience: 'Designing and optimizing PostgreSQL databases for high performance',
      projects: ['Database Architecture', 'Data Migration']
    },
    sqlserver: {
      title: 'SQL Server Expert - Daniel Fonseca',
      description: 'Microsoft SQL Server specialist for enterprise databases',
      experience: 'Managing and optimizing SQL Server databases',
      projects: ['Enterprise Data Solutions', 'Database Optimization']
    },
    mysql: {
      title: 'MySQL Database Developer - Daniel Fonseca',
      description: 'MySQL expert for scalable database solutions',
      experience: 'Building and maintaining MySQL databases at scale',
      projects: ['DafonCV Database', 'High-traffic Applications']
    }
  };

  return {
    props: {
      skill: params.skill,
      data: skillsData[params.skill] || skillsData.react
    }
  };
}
