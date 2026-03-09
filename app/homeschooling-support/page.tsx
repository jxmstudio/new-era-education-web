import { Metadata } from 'next';
import HomeschoolingContent from './homeschooling-support-content';

export const metadata: Metadata = {
  title: 'Homeschooling Support in Mickleham VIC & Melbourne | New Era Education',
  description: 'Professional homeschooling support in Mickleham and Melbourne. Curriculum guidance, assessment support, and educational resources for homeschooling families. VIT-registered teachers.',
  keywords: 'homeschooling support Melbourne, homeschool tutor Mickleham, homeschooling curriculum Victoria, homeschool resources Craigieburn, home education support Northern Melbourne',
  alternates: { canonical: 'https://neweralearning.com.au/homeschooling-support' },
  robots: 'index, follow',
  openGraph: {
    title: 'Homeschooling Support in Mickleham VIC & Melbourne | New Era Education',
    description: 'Professional homeschooling support in Mickleham and Melbourne. Curriculum guidance, assessment support, and educational resources.',
    url: 'https://neweralearning.com.au/homeschooling-support',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Homeschooling Support at New Era Education Mickleham' }],
  },
};

export default function HomeschoolingPage() {
  return <HomeschoolingContent />;
}
