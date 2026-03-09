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
  return <MathsTutoringContent />;
}