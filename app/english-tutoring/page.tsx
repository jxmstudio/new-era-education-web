import { Metadata } from 'next';
import EnglishTutoringContent from './english-tutoring-content';

export const metadata: Metadata = {
  title: 'English Tutoring in Mickleham VIC | Foundation to Year 12 | New Era Education',
  description: 'Expert English tutoring in Mickleham and Northern Melbourne. VCE English preparation, essay writing, text analysis, and reading comprehension. Foundation to Year 12. Book a free consultation.',
  keywords: 'English tutoring Mickleham, VCE English tutor Craigieburn, English tutor Northern Melbourne, reading tutoring Greenvale, essay writing tutor, VCE English preparation Melbourne',
  alternates: { canonical: 'https://neweralearning.com.au/english-tutoring' },
  robots: 'index, follow',
  openGraph: {
    title: 'English Tutoring in Mickleham VIC | Foundation to Year 12 | New Era Education',
    description: 'Expert English tutoring in Mickleham and Northern Melbourne. VCE English preparation, essay writing, text analysis, and reading comprehension.',
    url: 'https://neweralearning.com.au/english-tutoring',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'English Tutoring at New Era Education Mickleham' }],
  },
};

export default function EnglishTutoringPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'English Tutoring - Foundation to Year 12',
    description:
      'Expert English tutoring including reading comprehension, essay writing, text analysis, and VCE English preparation.',
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
    url: 'https://neweralearning.com.au/english-tutoring',
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
      <EnglishTutoringContent />
    </>
  );
}