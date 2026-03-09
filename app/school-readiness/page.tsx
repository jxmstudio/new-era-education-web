import { Metadata } from 'next';
import SchoolReadinessContent from './school-readiness-content';

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
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'School Readiness Program at New Era Education Mickleham' }],
  },
};

export default function SchoolReadinessPage() {
  return <SchoolReadinessContent />;
}