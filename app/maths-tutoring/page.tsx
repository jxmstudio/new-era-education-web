import { Metadata } from 'next';
import MathsTutoringContent from './maths-tutoring-content';

export const metadata: Metadata = {
  title: 'Maths Tutoring in Mickleham VIC | Foundation to Year 12 | New Era Education',
  description: 'Expert mathematics tutoring in Mickleham and Northern Melbourne. Problem solving, exam preparation, and building strong maths foundations. Foundation to Year 12. Book a free consultation.',
  keywords: 'maths tutoring Mickleham, maths tutor Craigieburn, mathematics tutoring Northern Melbourne, Year 12 maths tutor Greenvale, primary maths tutor, maths help Melbourne',
  alternates: { canonical: 'https://neweralearning.com.au/maths-tutoring' },
  robots: 'index, follow',
  openGraph: {
    title: 'Maths Tutoring in Mickleham VIC | Foundation to Year 12 | New Era Education',
    description: 'Expert mathematics tutoring in Mickleham and Northern Melbourne. Problem solving, exam preparation, and building strong foundations.',
    url: 'https://neweralearning.com.au/maths-tutoring',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Maths Tutoring at New Era Education Mickleham' }],
  },
};

export default function MathsTutoringPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Mathematics Tutoring - Foundation to Year 12',
    description:
      'Expert mathematics tutoring including problem solving, exam preparation, and building strong maths foundations.',
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
    url: 'https://neweralearning.com.au/maths-tutoring',
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
      <MathsTutoringContent />
    </>
  );
}