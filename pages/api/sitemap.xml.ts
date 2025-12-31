import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllRoutes } from '../../lib/sitemap/routes';
import { generateSitemapXml } from '../../lib/sitemap/generator';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const routes = await getAllRoutes();
    const sitemap = generateSitemapXml(routes);

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
