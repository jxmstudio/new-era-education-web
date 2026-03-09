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
  return <EnglishTutoringContent />;
}