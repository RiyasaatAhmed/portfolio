import { MetadataRoute } from 'next'
import { PORTFOLIO } from '@/constants/urls'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PORTFOLIO,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
