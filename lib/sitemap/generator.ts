import { Route, getBaseUrl } from './routes';

export function generateSitemapXml(routes: Route[]): string {
  const baseUrl = getBaseUrl();
  
  const urlEntries = routes
    .map(route => createUrlEntry(route, baseUrl))
    .join('\n');

  return createSitemapDocument(urlEntries);
}

function createUrlEntry(route: Route, baseUrl: string): string {
  const url = formatUrl(baseUrl, route.path);
  const lastmod = formatDate(route.lastModified);
  
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
}

function createSitemapDocument(urlEntries: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`;
}

function formatUrl(baseUrl: string, path: string): string {
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBaseUrl}${cleanPath}`;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
