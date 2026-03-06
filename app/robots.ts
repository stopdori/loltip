import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*?side=', '/*?first='],
      },
    ],
    sitemap: 'https://www.loltip.com/sitemap.xml',
    host: 'https://www.loltip.com',
  }
}