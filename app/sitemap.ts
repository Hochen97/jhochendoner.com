import { MetadataRoute } from 'next';

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jhochendoner.com/',
      lastModified: new Date(),
    },
  ];
}
