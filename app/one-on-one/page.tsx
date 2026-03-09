import { Metadata } from 'next';
import OneOnOneContent from './one-on-one-content';

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
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'One-on-One Tutoring at New Era Education Mickleham' }],
  },
};

export default function OneOnOnePage() {
  return <OneOnOneContent />;
}
