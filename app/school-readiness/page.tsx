import { Metadata } from 'next';
import SchoolReadinessContent from './school-readiness-content';
import { getServiceBySlug } from '@/lib/services';

const service = getServiceBySlug('school-readiness');

export const metadata: Metadata = {
  title: 'School Readiness Program in Mickleham VIC | Ages 3-6 | New Era Education',
  description: 'School readiness program in Mickleham for children ages 3-6. Build literacy, numeracy, and social skills before starting school. Serving Craigieburn, Greenvale and Northern Melbourne.',
  keywords: 'school readiness program Mickleham, prep tutoring Craigieburn, kinder readiness Northern Melbourne, early learning Greenvale, school preparation Roxburgh Park',
  alternates: { canonical: 'https://neweralearning.com.au/school-readiness' },
  robots: 'index, follow',
  openGraph: {
    title: 'School Readiness Program in Mickleham VIC | Ages 3-6 | New Era Education',
    description: 'School readiness program in Mickleham for children ages 3-6. Build literacy, numeracy, and social skills before starting school.',
    url: 'https://neweralearning.com.au/school-readiness',
    type: 'website',
    images: [{ url: service?.image ?? '/hero-bg.jpg', width: 1200, height: 630, alt: service?.imageAlt ?? 'School Readiness Program at New Era Education Mickleham' }],
  },
};

export default function SchoolReadinessPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'School Readiness Program',
    description:
      'School readiness program for children ages 3-6. Build literacy, numeracy, and social skills before starting school.',
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
    url: 'https://neweralearning.com.au/school-readiness',
    coursePrerequisites: 'None - suitable for children ages 3-6',
    educationalLevel: 'Preschool / Early Years',
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
      <SchoolReadinessContent />
    </>
  );
}