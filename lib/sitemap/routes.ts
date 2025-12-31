import fs from 'fs';
import path from 'path';

export interface Route {
  path: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://danielfonseca.dev';

export async function getAllRoutes(): Promise<Route[]> {
  const routes: Route[] = [];
  const pagesDirectory = path.join(process.cwd(), 'pages');

  const staticRoutes = getStaticRoutes(pagesDirectory);
  routes.push(...staticRoutes);

  return routes;
}

function getStaticRoutes(directory: string, baseRoute: string = ''): Route[] {
  const routes: Route[] = [];
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (shouldIgnoreEntry(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      const nestedRoutes = getStaticRoutes(fullPath, `${baseRoute}/${entry.name}`);
      routes.push(...nestedRoutes);
      continue;
    }

    if (entry.isFile() && isValidPageFile(entry.name)) {
      const route = createRouteFromFile(entry.name, baseRoute, fullPath);
      if (route) {
        routes.push(route);
      }
    }
  }

  return routes;
}

function shouldIgnoreEntry(name: string): boolean {
  const ignorePatterns = ['api', '_app', '_document', '_error', '404', '500'];
  return ignorePatterns.some(pattern => name.startsWith(pattern));
}

function isValidPageFile(filename: string): boolean {
  const validExtensions = ['.tsx', '.ts', '.jsx', '.js'];
  return validExtensions.some(ext => filename.endsWith(ext));
}

function createRouteFromFile(
  filename: string,
  baseRoute: string,
  fullPath: string
): Route | null {
  const routePath = getRoutePathFromFilename(filename, baseRoute);
  const stats = fs.statSync(fullPath);
  
  return {
    path: routePath,
    lastModified: stats.mtime,
    changeFrequency: determineChangeFrequency(routePath),
    priority: determinePriority(routePath),
  };
}

function getRoutePathFromFilename(filename: string, baseRoute: string): string {
  const nameWithoutExtension = filename
    .replace(/\.(tsx|ts|jsx|js)$/, '')
    .replace(/\[([^\]]+)\]/g, ':$1');

  if (nameWithoutExtension === 'index') {
    return baseRoute || '/';
  }

  return `${baseRoute}/${nameWithoutExtension}`;
}

function determineChangeFrequency(
  path: string
): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  if (path === '/') {
    return 'weekly';
  }
  
  if (path.includes('blog') || path.includes('news')) {
    return 'daily';
  }
  
  if (path.includes('projects') || path.includes('portfolio')) {
    return 'weekly';
  }
  
  return 'monthly';
}

function determinePriority(path: string): number {
  if (path === '/') {
    return 1.0;
  }
  
  if (path.includes('about') || path.includes('contact')) {
    return 0.8;
  }
  
  if (path.includes('projects') || path.includes('portfolio')) {
    return 0.8;
  }
  
  return 0.6;
}

export function getBaseUrl(): string {
  return BASE_URL;
}
