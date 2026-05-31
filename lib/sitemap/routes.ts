import { SITE_URL } from '@/lib/site-config';
import { PROJECT_SLUGS, SKILL_SLUGS } from './static-routes';

export interface Route {
  path: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export async function getAllRoutes(): Promise<Route[]> {
  const now = new Date();

  const routes: Route[] = [
    { path: '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
  ];

  for (const slug of PROJECT_SLUGS) {
    routes.push({
      path: `/projects/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  for (const skill of SKILL_SLUGS) {
    routes.push({
      path: `/skills/${skill}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return routes;
}

export function getBaseUrl(): string {
  return SITE_URL;
}
