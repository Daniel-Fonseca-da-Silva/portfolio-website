import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Image from 'next/image';
import { BsGithub, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs';
import { SITE_URL, ECOSYSTEM_SITES } from '@/lib/site-config';
import { PROJECT_SLUGS } from '@/lib/sitemap/static-routes';
import type { ComponentType } from 'react';
import {
  AutoCronicaLookupFlow,
  AutoCronicaSystemDiagram,
} from '@/components/projects/AutoCronicaArchitecture';

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${ECOSYSTEM_SITES.company}/#organization`;

interface ProjectSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

interface ProjectPageProps {
  project: {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    imageWidth?: number;
    imageHeight?: number;
    technologies: string[];
    github?: string;
    website?: string;
    linkedin?: string;
    category: string;
    year: string;
    externalUrl?: string;
    sections?: ProjectSection[];
  };
}

// Visual content that needs React components cannot live in getStaticProps data,
// so it is registered per project slug and rendered after the "About" block.
const projectDiagrams: Partial<Record<string, ComponentType[]>> = {
  autocronica: [AutoCronicaSystemDiagram, AutoCronicaLookupFlow],
};

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
        imageWidth={project.imageWidth}
        imageHeight={project.imageHeight}
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

          {(projectDiagrams[project.slug] ?? []).map((Diagram, index) => (
            <div key={index} className="mb-12 glass p-4 sm:p-6 md:p-8 rounded-xl">
              <Diagram />
            </div>
          ))}

          {project.sections?.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="text-2xl font-bold text-textGreen mb-4">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-textDark leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="list-disc pl-6 flex flex-col gap-2 text-textDark leading-relaxed">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

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
      title: 'DafonCV: AI-Powered CV Platform',
      description: 'A smart SaaS solution for creating ATS-optimized resumes with AI assistance',
      longDescription:
        'DafonCV is a comprehensive SaaS platform that revolutionizes the resume creation process. Built with Next.js and Golang, it leverages AI to help users create professional, ATS-optimized resumes in minutes. The platform includes real-time editing, multiple templates and intelligent suggestions to improve content quality.',
      image: '/assets/images/slug/dafon-cv-system.jpg',
      imageWidth: 4000,
      imageHeight: 2778,
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
      title: 'TechCuisine: AI-powered kitchen cost ',
      description: 'AI-powered kitchen cost management for chefs and restaurateurs',
      longDescription:
        'Most restaurants close because of food costs, not bad food. TechCuisine helps restaurants and food businesses take control of ingredient costs, recipes, suppliers, and margins with next-generation AI. Build smart recipe sheets with yield-corrected costing, get trusted food cost percentages, engineer menus around profit, scale batches without surprises and turn waste into actionable financial data so every pricing decision is backed by numbers, not gut feeling.',
      image: '/assets/images/slug/techcuisine-banner.png',
      imageWidth: 1024,
      imageHeight: 768,
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
        'We build modern software solutions powered by AI and cloud. The Dafon corporate site is the digital front door for a company that delivers scalable, secure systems web apps, mobile, enterprise platforms and APIs with agile delivery and end-to-end support from idea to launch.',
      image: '/assets/projects/dafon-banner.png',
      imageWidth: 1024,
      imageHeight: 768,
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
      imageWidth: 1024,
      imageHeight: 1024,
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
      imageWidth: 1024,
      imageHeight: 1024,
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
      imageWidth: 1024,
      imageHeight: 1024,
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JWT', 'OAuth2'],
      category: 'FinTech',
      year: '2022',
    },
    autocronica: {
      slug: 'autocronica',
      title: 'Auto Crónica: Chronic Reliability by Vehicle Model',
      description:
        'Known failures, severity, typical mileage and fixes for any vehicle make, model, year and engine',
      longDescription:
        'Auto Crónica answers one question: for this model, with this engine and from this year, what usually fails, at what mileage, how serious is it, and how is it fixed? The user picks a vehicle and gets a structured list of known issues with severity, typical mileage, sources, step-by-step fixes and community reviews. It is available on the web (autocronica.autos) and on Android (Google Play), with the interface and the vehicle content available in several languages, sharing one API and one catalog.',
      image: '/assets/images/slug/auto-cronica-banner.png',
      imageWidth: 1672,
      imageHeight: 941,
      technologies: [
        'Next.js 16',
        'React 19',
        'NestJS 11',
        'TypeScript',
        'FastAPI',
        'Python 3.11',
        'Flutter',
        'PostgreSQL 16',
        'Redis 7',
        'Cloudflare R2',
        'Gemini · Groq · OpenRouter',
        'Docker',
      ],
      website: ECOSYSTEM_SITES.autocronica,
      externalUrl: ECOSYSTEM_SITES.autocronica,
      category: 'SaaS',
      year: '2026',
      sections: [
        {
          title: 'The problem',
          paragraphs: [
            'People buying a used car, or who already own one, usually find out about the model\'s chronic faults too late. The information exists, but it is spread across forums, videos, ADAC and TÜV reports and Facebook groups, and rarely answers the question that matters.',
            'Auto Crónica puts that answer in one place, per configuration: make, model, engine, fuel type and the years it covers.',
          ],
        },
        {
          title: 'What it is not',
          paragraphs: [
            'It does not do VIN or plate history, odometer-fraud checks or accident records. Services such as carVertical, Certidão Automóvel or IPO cover that. The analysis is per model, not per individual vehicle.',
            'All AI-generated content is labelled as such and is indicative. It does not replace a mechanic.',
          ],
        },
        {
          title: 'Architecture decisions',
          items: [
            'A separate Python AI service keeps LLM SDKs, versioned prompts and failover out of the business backend. The API only knows a stable HTTP contract.',
            'Cache → database → AI: a vehicle is generated once per language. Other languages are translated from an existing set, which keeps content consistent and cheaper.',
            'Free-tier provider chain (Gemini → Groq → OpenRouter). One provider failing does not take the product down, and the cost stays at zero at this stage.',
            'Keyword RAG over a curated knowledge base versioned in Git, instead of a vector database. The corpus is small, and the service stays stateless and auditable. Embeddings are the planned next step.',
            'Web sessions use a BFF: the JWT lives in an httpOnly cookie on the web domain and never reaches browser JavaScript.',
            'After Google OAuth, the redirect carries a single-use, 60-second exchange code, so the JWT never travels in a URL.',
            'Both services refuse to serve fake AI output in production. Invented content never reaches users.',
          ],
        },
        {
          title: 'Security and privacy',
          items: [
            'Google OAuth2 is the only sign-in method. No passwords are stored.',
            'JWTs carry a jti; logout revokes it in a Redis denylist until it expires.',
            'Admin rights are enforced on the server for every admin route. The web only hides the UI.',
            'Anti-bot on the AI path only: Cloudflare Turnstile on the web, a per-IP quota on the app. Cached and stored results stay free to read.',
            'Prompt-injection defenses: strict input allow-list, delimited data, schema validation of LLM output, no HTML in generated text.',
            'Source URLs are filtered (https only, valid domains) and, with RAG, restricted to the URLs of retrieved entries.',
            'Uploads: JPEG, PNG or WebP up to 5 MB, keys generated by the server, comment images must belong to the R2 bucket.',
            'Distroless nonroot images for both backends. Account deletion anonymizes and soft-deletes the user.',
          ],
        },
        {
          title: 'Quality and delivery',
          items: [
            'Coverage gate of at least 90% in the API, the AI service, the web and the app.',
            'GitHub Actions on every pull request: lint, tests, build and a pip-audit job for the AI service.',
            'Database changes are TypeORM migrations, run as an explicit deployment step, never at app startup.',
            'Web on Vercel, API and AI service as separate containers, with the AI service reachable only by the API.',
          ],
        },
      ],
    },
  };

  const project = projectsData[params.slug];
  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}
