import { Metadata } from 'next';
import CareersContent from './careers-content';

export const metadata: Metadata = {
  title: 'Careers at New Era Education | Teaching Jobs in Mickleham VIC',
  description: 'Join New Era Education in Mickleham. We are hiring qualified teachers and administrative staff. VIT-registered educators welcome. Apply now.',
  keywords: 'teaching jobs Mickleham, tutor jobs Melbourne, education careers Northern Melbourne, VIT registered teacher jobs',
  alternates: { canonical: 'https://neweralearning.com.au/careers' },
  robots: 'index, follow',
  openGraph: {
    title: 'Careers at New Era Education | Teaching Jobs in Mickleham VIC',
    description: 'Join New Era Education in Mickleham. We are hiring qualified teachers and administrative staff.',
    url: 'https://neweralearning.com.au/careers',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Careers at New Era Education Mickleham' }],
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
