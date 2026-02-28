import { Metadata } from 'next';
import WorkshopsContent from './workshops-content';

export const metadata: Metadata = {
  title: 'Learning Workshops in Mickleham VIC | Study Skills, Literacy & Numeracy | New Era Education',
  description: 'Educational workshops in Mickleham and Northern Melbourne: study skills, time management, reading, spelling, number fluency, and holiday programs. Small groups, expert-led sessions.',
  keywords: 'workshops Mickleham, study skills Craigieburn, literacy workshops Northern Melbourne, numeracy programs Greenvale, school holiday programs Roxburgh Park, learning workshops Wollert',
  alternates: {
    canonical: 'https://neweralearning.com.au/workshops',
  },
  robots: 'index, follow',
};

export default function WorkshopsPage() {
  return <WorkshopsContent />;
}
