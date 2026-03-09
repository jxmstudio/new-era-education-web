import { Metadata } from 'next';
import FAQContent from './faq-content';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Tutoring in Mickleham VIC | New Era Education',
  description: 'Find answers to common questions about tutoring at New Era Education in Mickleham. Pricing, qualifications, session details, NDIS support, and more.',
  keywords: 'tutoring FAQ Mickleham, tutoring questions Melbourne, tutor pricing Northern Melbourne, New Era Education questions',
  alternates: { canonical: 'https://neweralearning.com.au/faq' },
  robots: 'index, follow',
  openGraph: {
    title: 'Frequently Asked Questions | Tutoring in Mickleham VIC | New Era Education',
    description: 'Find answers to common questions about tutoring at New Era Education in Mickleham.',
    url: 'https://neweralearning.com.au/faq',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'FAQ - New Era Education Mickleham' }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What qualifications do your tutors have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All our tutors are qualified teachers with VIT (Victorian Institute of Teaching) registration. They have completed university degrees in education and have 10+ years of teaching experience in Victorian schools."
      }
    },
    {
      "@type": "Question",
      "name": "How much do tutoring sessions cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pricing varies based on the type of service and session length. We offer competitive rates starting from $60 per hour. Contact us for a detailed pricing structure and to discuss your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer online tutoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer both in-person and online tutoring sessions. Online sessions are conducted via secure video conferencing platforms and are just as effective as in-person sessions."
      }
    },
    {
      "@type": "Question",
      "name": "What subjects do you tutor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialise in English and Mathematics from Foundation to Year 12, including VCE English. We also offer school readiness programs for young children."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a free 30-minute consultation through our website booking form, by calling us, or by sending us an email. We'll discuss your child's needs and create a personalised learning plan."
      }
    },
    {
      "@type": "Question",
      "name": "Where is your tutoring available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're located in Mickleham, in the northern suburbs of Victoria. We also provide online tutoring, bringing quality support to students across Melbourne and beyond."
      }
    },
    {
      "@type": "Question",
      "name": "How often should my child attend tutoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on your child's needs and goals. Most students benefit from weekly sessions, but we can recommend a schedule based on their current academic level and objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide homework help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can help with homework, assignment preparation, and exam revision. Our tutors work with your child's school curriculum to provide targeted support."
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We require 8 hours notice for session cancellations. This allows us to offer the time slot to other students. We also offer make-up vouchers for missed sessions. See our policies for details."
      }
    },
    {
      "@type": "Question",
      "name": "How do group sessions work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily offer one-on-one tutoring to ensure personalised attention. However, we offer a range of small group sessions (up to 6 students) for siblings or peers at a similar level."
      }
    },
    {
      "@type": "Question",
      "name": "How do you track student progress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide regular progress reports and maintain open communication with parents. We also conduct periodic assessments to measure improvement and adjust learning plans accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "What age groups do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with students from Foundation (age 5-6) through to Year 12. Our school readiness program is designed for children aged 4-6 preparing for their first year of school."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContent />
    </>
  );
}
