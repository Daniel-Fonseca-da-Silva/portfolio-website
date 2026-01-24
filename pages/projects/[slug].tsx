import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { BsGithub, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs';

interface ProjectPageProps {
  project: {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    github?: string;
    website?: string;
    linkedin?: string;
    category: string;
    year: string;
  };
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>{project.title} - Daniel Fonseca Projects</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
      </Head>
      <Navbar />
      <main className="max-w-container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-textGreen text-sm mb-4">{project.category} • {project.year}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-textLight mb-6">{project.title}</h1>
          <p className="text-xl text-textDark mb-8">{project.description}</p>
          
          <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold text-textGreen mb-4">About the Project</h2>
            <p className="text-textDark leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-textGreen mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-hoverColor border border-textGreen/20 text-textDark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 text-3xl">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-textGreen duration-300"
              >
                <BsGithub />
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-textGreen duration-300"
              >
                <BsGlobeAmericas />
              </a>
            )}
            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-textGreen duration-300"
              >
                <BsLinkedin />
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const projects = [
    'dafoncv',
    'pdf-extractor',
    'dafon-website',
    'cms-renault',
    'madeira-subsidies',
    'microservices-platform',
    'e-commerce-solution',
    'banking-api'
  ];

  return {
    paths: projects.map(slug => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const projectsData: Record<string, any> = {
    'dafoncv': {
      slug: 'dafoncv',
      title: 'DafonCV - AI-Powered CV Platform',
      description: 'A smart SaaS solution for creating ATS-optimized resumes with AI assistance',
      longDescription: 'DafonCV is a comprehensive SaaS platform that revolutionizes the resume creation process. Built with Next.js and Golang, it leverages AI to help users create professional, ATS-optimized resumes in minutes. The platform includes real-time editing, multiple templates, and intelligent suggestions to improve content quality.',
      image: '/assets/images/slug/dafon-cv-system.jpg',
      technologies: ['Next.js', 'Golang', 'TypeScript', 'Tailwind CSS', 'MySQL', 'AI Integration'],
      github: 'https://github.com/Daniel-Fonseca-da-Silva/dafon-cv-api',
      website: 'https://www.dafoncv.online',
      linkedin: 'https://www.linkedin.com/company/dafon-sistemas',
      category: 'SaaS',
      year: '2025'
    },
    'pdf-extractor': {
      slug: 'pdf-extractor',
      title: 'PDF Extractor API',
      description: 'Intelligent API for extracting company data from PDF documents',
      longDescription: 'A robust RESTful API built with Python that processes PDF documents to identify and extract company names, NIFs (Portuguese Tax Identification Numbers), and related business data. Features advanced OCR capabilities and data validation.',
      image: '/assets/images/slug/dafon-pdf-extractor-api-banner.jpg',
      technologies: ['Python', 'REST API', 'Docker', 'Swagger', 'OCR'],
      github: 'https://github.com/Daniel-Fonseca-da-Silva/Dafon-PDF-Extractor-API',
      category: 'API',
      year: '2024'
    },
    'dafon-website': {
      slug: 'dafon-website',
      title: 'Dafon Corporate Website',
      description: 'Modern corporate website with focus on performance and SEO',
      longDescription: 'The Dafon Website is a modern and responsive web application developed to present Dafon company, its innovative solutions, projects, locations, and contact information. Built with Next.js and optimized for performance, SEO, and user experience.',
      image: '/assets/images/slug/dafon-site.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      website: 'https://www.dafon.online',
      linkedin: 'https://www.linkedin.com/company/dafon-sistemas',
      category: 'Website',
      year: '2024'
    },
    'microservices-platform': {
      slug: 'microservices-platform',
      title: 'Microservices Platform',
      description: 'Scalable microservices architecture with event-driven design',
      longDescription: 'Enterprise-grade microservices platform built with Golang and Java Spring. Features event-driven architecture, service mesh, distributed tracing, and comprehensive monitoring with Prometheus and Grafana.',
      image: '/assets/images/slug/microservices-platform.jpg',
      technologies: ['Golang', 'Java', 'Spring Cloud', 'RabbitMQ', 'Kubernetes', 'Docker'],
      category: 'Architecture',
      year: '2023'
    },
    'e-commerce-solution': {
      slug: 'e-commerce-solution',
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration',
      longDescription: 'Complete e-commerce platform with product management, shopping cart, payment gateway integration, order tracking, and admin dashboard. Built for scalability and performance.',
      image: '/assets/images/slug/e-commerce-solution.jpg',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'E-Commerce',
      year: '2023'
    },
    'banking-api': {
      slug: 'banking-api',
      title: 'Banking API System',
      description: 'Secure banking API with transaction processing',
      longDescription: 'High-security banking API system handling transactions, account management, and financial operations. Implements industry-standard security protocols and compliance requirements.',
      image: '/assets/images/slug/dafon-cv-safebank.jpg',
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JWT', 'OAuth2'],
      category: 'FinTech',
      year: '2022'
    }
  };

  return {
    props: {
      project: projectsData[params.slug] || projectsData['dafoncv']
    }
  };
}
