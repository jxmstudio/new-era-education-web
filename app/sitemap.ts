import { MetadataRoute } from 'next'

const suburbs = [
  'craigieburn',
  'greenvale',
  'roxburgh-park',
  'wollert',
  'beveridge',
  'wallan',
  'epping',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neweralearning.com.au'

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    '/school-readiness',
    '/english-tutoring',
    '/maths-tutoring',
    '/one-on-one',
    '/workshops',
    '/homeschooling-support',
    '/ndis',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const infoPages: MetadataRoute.Sitemap = [
    { path: '/book', priority: 0.9 },
    { path: '/contact', priority: 0.8 },
    { path: '/comparison', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/team', priority: 0.7 },
    { path: '/careers', priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const locationPages: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${baseUrl}/tutoring/${suburb}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...mainPages, ...servicePages, ...infoPages, ...locationPages]
}
