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
      lastModified: new Date('2026-03-11'),
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
    lastModified: new Date('2026-03-11'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Note: /get-started and /get-started/school-readiness are excluded from
  // the sitemap because they have noindex set. Including noindex pages in
  // the sitemap sends conflicting signals to Google.

  const infoPages: MetadataRoute.Sitemap = [
    { path: '/book', priority: 0.9 },
    { path: '/contact', priority: 0.8 },
    { path: '/comparison', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/team', priority: 0.7 },
    { path: '/careers', priority: 0.6 },
    // Note: /privacy and /terms are excluded — low-value pages that waste
    // index budget. They have noindex set and are linked from the footer.
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-03-11'),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const locationHubPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tutoring`,
      lastModified: new Date('2026-03-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  const locationPages: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${baseUrl}/tutoring/${suburb}`,
    lastModified: new Date('2026-03-11'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...mainPages, ...servicePages, ...infoPages, ...locationHubPage, ...locationPages]
}
