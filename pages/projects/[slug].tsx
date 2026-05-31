import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Image from 'next/image';
import { BsGithub, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs';
import { SITE_URL, ECOSYSTEM_SITES } from '@/lib/site-config';
import { PROJECT_SLUGS } from '@/lib/sitemap/static-routes';

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${ECOSYSTEM_SITES.company}/#organization`;

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
    externalUrl?: string;
  };
}

function buildProjectJsonLd(project: ProjectPageProps['project']) {
  const pageUrl = `${SITE_URL}/projects/${project.slug}`;
  const base = {
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "mainEntityOfPage": pageUrl,
    "creator": { "@id": PERSON_ID },
    "publisher": { "@id": ORG_ID },
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
  };

  if (project.externalUrl) {
    return { ...base, "url": project.externalUrl };
  }
  return base;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const absoluteImage = project.image.startsWith('http')
    ? project.image
    : `${SITE_URL}${project.image}`;

  return (
    <>
      <SEO
        title={`${project.title} — Daniel Fonseca`}
        description={project.description}
        image={absoluteImage}
        url={`${SITE_URL}/projects/${project.slug}`}
        type="article"
        jsonLd={buildProjectJsonLd(project)}
      />
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
  return {
    paths: PROJECT_SLUGS.map(slug => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const projectsData: Record<string, ProjectPageProps['project']> = {
    dafoncv: {
      slug: 'dafoncv',
      title: 'DafonCV — AI-Powered CV Platform',
      description: 'A smart SaaS solution for creating ATS-optimized resumes with AI assistance',
      longDescription:
        'DafonCV is a comprehensive SaaS platform that revolutionizes the resume creation process. Built with Next.js and Golang, it leverages AI to help users create professional, ATS-optimized resumes in minutes. The platform includes real-time editing, multiple templates, and intelligent suggestions to improve content quality.',
      image: '/assets/images/slug/dafon-cv-system.jpg',
      technologies: ['Next.js', 'Golang', 'TypeScript', 'Tailwind CSS', 'MySQL', 'AI Integration'],
      github: 'https://github.com/Daniel-Fonseca-da-Silva/dafon-cv-api',
      website: ECOSYSTEM_SITES.dafoncv,
      linkedin: 'https://www.linkedin.com/company/dafoncv/',
      externalUrl: ECOSYSTEM_SITES.dafoncv,
      category: 'SaaS',
      year: '2025',
    },
    techcuisine: {
      slug: 'techcuisine',
      title: 'TechCuisine',
      description: 'AI-powered kitchen cost management for chefs and restaurateurs',
      longDescription:
        'Most restaurants close because of food costs, not bad food. TechCuisine helps restaurants and food businesses take control of ingredient costs, recipes, suppliers, and margins with next-generation AI. Build smart recipe sheets with yield-corrected costing, get trusted food cost percentages, engineer menus around profit, scale batches without surprises, and turn waste into actionable financial data — so every pricing decision is backed by numbers, not gut feeling.',
      image: '/assets/images/slug/techcuisine-banner.png',
      technologies: ['Python', 'Next', 'MongoDB'],
      website: ECOSYSTEM_SITES.techcuisine,
      linkedin: 'https://www.linkedin.com/company/tech-cuisine-ai',
      externalUrl: ECOSYSTEM_SITES.techcuisine,
      category: 'SaaS',
      year: '2026',
    },
    'dafon-website': {
      slug: 'dafon-website',
      title: 'Dafon Corporate Website',
      description: 'Corporate website showcasing AI-powered and cloud-native software development services',
      longDescription:
        'We build modern software solutions powered by AI and cloud. The Dafon corporate site is the digital front door for a company that delivers scalable, secure systems — web apps, mobile, enterprise platforms, and APIs — with agile delivery and end-to-end support from idea to launch.',
      image: '/assets/projects/dafon-banner.png',
      technologies: ['Next', 'Prisma', 'Tailwind'],
      website: ECOSYSTEM_SITES.company,
      linkedin: 'https://www.linkedin.com/company/dafon-sistemas',
      externalUrl: ECOSYSTEM_SITES.company,
      category: 'Website',
      year: '2024',
    },
    'microservices-platform': {
      slug: 'microservices-platform',
      title: 'Microservices Platform',
      description: 'Scalable microservices architecture with event-driven design',
      longDescription:
        'Enterprise-grade microservices platform built with Golang and Java Spring. Features event-driven architecture, service mesh, distributed tracing, and comprehensive monitoring with Prometheus and Grafana.',
      image: '/assets/images/slug/microservices-platform.jpg',
      technologies: ['Golang', 'Java', 'Spring Cloud', 'RabbitMQ', 'Kubernetes', 'Docker'],
      category: 'Architecture',
      year: '2023',
    },
    'e-commerce-solution': {
      slug: 'e-commerce-solution',
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration',
      longDescription:
        'Complete e-commerce platform with product management, shopping cart, payment gateway integration, order tracking, and admin dashboard. Built for scalability and performance.',
      image: '/assets/images/slug/e-commerce-solution.jpg',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'E-Commerce',
      year: '2023',
    },
    'banking-api': {
      slug: 'banking-api',
      title: 'Banking API System',
      description: 'Secure banking API with transaction processing',
      longDescription:
        'High-security banking API system handling transactions, account management, and financial operations. Implements industry-standard security protocols and compliance requirements.',
      image: '/assets/images/slug/dafon-cv-safebank.jpg',
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JWT', 'OAuth2'],
      category: 'FinTech',
      year: '2022',
    },
  };

  const project = projectsData[params.slug];
  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}
