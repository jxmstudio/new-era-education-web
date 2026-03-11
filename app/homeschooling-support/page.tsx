import { Metadata } from 'next';
import HomeschoolingContent from './homeschooling-support-content';
import { getServiceBySlug } from '@/lib/services';

const service = getServiceBySlug('homeschooling-support');

export const metadata: Metadata = {
  title: 'Homeschooling Support in Mickleham VIC & Melbourne | New Era Education',
  description: 'Professional homeschooling support in Mickleham and Melbourne. Curriculum guidance, assessment support, and educational resources for homeschooling families. VIT-registered teachers.',
  keywords: 'homeschooling support Melbourne, homeschool tutor Mickleham, homeschooling curriculum Victoria, homeschool resources Craigieburn, home education support Northern Melbourne',
  alternates: { canonical: 'https://neweralearning.com.au/homeschooling-support' },
  robots: 'index, follow',
  openGraph: {
    title: 'Homeschooling Support in Mickleham VIC & Melbourne | New Era Education',
    description: 'Professional homeschooling support in Mickleham and Melbourne. Curriculum guidance, assessment support, and educational resources.',
    url: 'https://neweralearning.com.au/homeschooling-support',
    type: 'website',
    images: [{ url: service?.image ?? '/hero-bg.jpg', width: 1200, height: 630, alt: service?.imageAlt ?? 'Homeschooling Support at New Era Education Mickleham' }],
  },
};

export default function HomeschoolingPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Homeschooling Support Program',
    description:
      'Professional homeschooling support including curriculum guidance, assessment support, and educational resources for homeschooling families.',
    provider: {
      '@type': 'Organization',
      name: 'New Era Education',
      url: 'https://neweralearning.com.au',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 4 Level 3, 21 Cityside Dr',
        addressLocality: 'Mickleham',
        addressRegion: 'VIC',
        postalCode: '3064',
        addressCountry: 'AU',
      },
    },
    url: 'https://neweralearning.com.au/homeschooling-support',
    coursePrerequisites: 'None',
    educationalLevel: 'Foundation to Year 12',
    inLanguage: 'en-AU',
    isAccessibleForFree: false,
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        location: {
          '@type': 'Place',
          name: 'New Era Education Mickleham',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Suite 4 Level 3, 21 Cityside Dr',
            addressLocality: 'Mickleham',
            addressRegion: 'VIC',
            postalCode: '3064',
            addressCountry: 'AU',
          },
        },
      },
      {
        '@type': 'CourseInstance',
        courseMode: 'online',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <HomeschoolingContent />
    </>
  );
}
