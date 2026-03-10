import { Metadata } from 'next';
import WorkshopsContent from './workshops-content';

export const metadata: Metadata = {
  title: 'Learning Workshops in Mickleham VIC | Study Skills, Literacy & Numeracy | New Era Education',
  description: 'Educational workshops in Mickleham and Northern Melbourne: study skills, time management, reading, spelling, number fluency, and holiday programs. Small groups, expert-led sessions.',
  keywords: 'workshops Mickleham, study skills Craigieburn, literacy workshops Northern Melbourne, numeracy programs Greenvale, school holiday programs Roxburgh Park, learning workshops Wollert',
  alternates: {
    canonical: 'https://neweralearning.com.au/workshops',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Learning Workshops in Mickleham VIC | New Era Education',
    description: 'Educational workshops in Mickleham and Northern Melbourne: study skills, literacy, numeracy, and holiday programs.',
    url: 'https://neweralearning.com.au/workshops',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Workshops at New Era Education Mickleham' }],
  },
};

export default function WorkshopsPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Learning Workshops',
    description:
      'Educational workshops covering study skills, time management, reading, spelling, number fluency, and holiday programs.',
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
    url: 'https://neweralearning.com.au/workshops',
    coursePrerequisites: 'None',
    educationalLevel: 'Foundation to Year 12',
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
      <WorkshopsContent />
    </>
  );
}
