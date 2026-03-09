import type { Metadata } from 'next';
import NDISContent from './ndis-content';

export const metadata: Metadata = {
  title: 'NDIS Capacity Building & Learning Support in Mickleham VIC | New Era Education',
  description: 'NDIS capacity building supports in Mickleham, Craigieburn, and Northern Melbourne. Functional literacy, numeracy, and life skills development for NDIS participants. Self-managed and plan-managed welcome.',
  keywords: 'NDIS support Mickleham, NDIS capacity building Melbourne, NDIS learning support Victoria, functional literacy NDIS, NDIS plan managed Craigieburn, capacity building Roxburgh Park',
  alternates: {
    canonical: 'https://neweralearning.com.au/ndis',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'NDIS Capacity Building & Learning Support in Mickleham VIC | New Era Education',
    description: 'NDIS capacity building supports in Mickleham, Craigieburn, and Northern Melbourne.',
    url: 'https://neweralearning.com.au/ndis',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'NDIS Support at New Era Education Mickleham' }],
  },
};

export default function NDISPage() {
  return <NDISContent />;
}
