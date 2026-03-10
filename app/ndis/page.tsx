import type { Metadata } from 'next';
import NDISContent from './ndis-content';

export const metadata: Metadata = {
  title: 'NDIS Capacity Building & Learning Support in Mickleham VIC | New Era Education',
  description: 'NDIS capacity building supports in Mickleham, Craigieburn, and Northern Melbourne. Functional literacy, numeracy, and life skills development for NDIS participants. Self-managed and plan-managed welcome.',
  keywords: 'NDIS support Mickleham, NDIS capacity building Melbourne, NDIS learning support Victoria, functional literacy NDIS, NDIS plan managed Craigieburn, capacity building Roxburgh Park',
  alternates: {
    canonical: 'https://neweralearning.com.au/ndis',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'NDIS Capacity Building & Learning Support in Mickleham VIC | New Era Education',
    description: 'NDIS capacity building supports in Mickleham, Craigieburn, and Northern Melbourne.',
    url: 'https://neweralearning.com.au/ndis',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'NDIS Support at New Era Education Mickleham' }],
  },
};

export default function NDISPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'NDIS Capacity Building & Learning Support',
    description:
      'NDIS capacity building supports including functional literacy, numeracy, and life skills development for NDIS participants.',
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
    url: 'https://neweralearning.com.au/ndis',
    coursePrerequisites: 'Active NDIS plan with capacity building funding',
    educationalLevel: 'All levels',
    inLanguage: 'en-AU',
    isAccessibleForFree: false,
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <NDISContent />
    </>
  );
}
