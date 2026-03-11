import { Metadata } from 'next';
import OneOnOneContent from './one-on-one-content';
import { getServiceBySlug } from '@/lib/services';

const service = getServiceBySlug('one-on-one');

export const metadata: Metadata = {
  title: 'One-on-One Tutoring in Mickleham VIC & Northern Melbourne | New Era Education',
  description: 'Expert one-on-one tutoring in Mickleham, Craigieburn, and Northern Melbourne. Personalised English and maths support for Foundation to Year 12 students. Face-to-face and online sessions available.',
  keywords: 'one-on-one tutoring Mickleham, private tutor Craigieburn, individual tutoring Northern Melbourne, personalised learning Greenvale, English tutor Roxburgh Park, maths tutor Wollert',
  alternates: {
    canonical: 'https://neweralearning.com.au/one-on-one',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'One-on-One Tutoring in Mickleham VIC & Northern Melbourne | New Era Education',
    description: 'Expert one-on-one tutoring in Mickleham, Craigieburn, and Northern Melbourne.',
    url: 'https://neweralearning.com.au/one-on-one',
    type: 'website',
    images: [{ url: service?.image ?? '/hero-bg.jpg', width: 1200, height: 630, alt: service?.imageAlt ?? 'One-on-One Tutoring at New Era Education Mickleham' }],
  },
};

export default function OneOnOnePage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'One-on-One Tutoring',
    description:
      'Personalised one-on-one tutoring for Foundation to Year 12 students. Individual English and maths support tailored to each student.',
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
    url: 'https://neweralearning.com.au/one-on-one',
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
      <OneOnOneContent />
    </>
  );
}
