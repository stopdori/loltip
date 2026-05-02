import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*?side=', '/*?first=', '/*?me=', '/*?enemy='],
      },
    ],
    sitemap: 'https://loltip.com/sitemap.xml',
    host: 'https://loltip.com',
  }
}