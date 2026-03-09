import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, CheckCircle, GraduationCap, BookOpen, Calculator, Users, Star, Baby, Home, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuburbData {
  name: string;
  slug: string;
  driveTime: string;
  postcode: string;
  description: string;
  localSchools: string[];
  nearbyAreas: string[];
}

const suburbs: SuburbData[] = [
  {
    name: 'Craigieburn',
    slug: 'craigieburn',
    driveTime: '5 minutes',
    postcode: '3064',
    description: 'Craigieburn families trust New Era Education for quality tutoring just minutes away. Our Mickleham centre is conveniently located off Cityside Drive, making it easy for Craigieburn students to access expert tutoring in English, maths, and more.',
    localSchools: ['Craigieburn South Primary School', 'Aitken Creek Primary School', 'Hume Anglican Grammar', 'Mount Ridley P-12 College'],
    nearbyAreas: ['Mickleham', 'Roxburgh Park', 'Greenvale'],
  },
  {
    name: 'Greenvale',
    slug: 'greenvale',
    driveTime: '10 minutes',
    postcode: '3059',
    description: 'Greenvale students benefit from premium tutoring at our nearby Mickleham centre. With VIT-registered teachers and personalised learning plans, we help Greenvale families achieve outstanding academic results.',
    localSchools: ['Greenvale Primary School', 'Kolbe Catholic College', 'Aitken College'],
    nearbyAreas: ['Mickleham', 'Craigieburn', 'Roxburgh Park', 'Attwood'],
  },
  {
    name: 'Roxburgh Park',
    slug: 'roxburgh-park',
    driveTime: '10 minutes',
    postcode: '3064',
    description: 'Roxburgh Park families choose New Era Education for personalised tutoring that makes a real difference. Our experienced educators provide tailored support to help every student reach their full potential.',
    localSchools: ['Roxburgh Park Primary School', 'Roxburgh Rise Primary School', 'Hume Central Secondary College'],
    nearbyAreas: ['Craigieburn', 'Meadow Heights', 'Coolaroo'],
  },
  {
    name: 'Wollert',
    slug: 'wollert',
    driveTime: '10 minutes',
    postcode: '3750',
    description: 'Wollert is one of Melbourne\'s fastest-growing suburbs, and New Era Education is here to support local families with expert tutoring. Our Mickleham centre is a short drive away, offering English, maths, and school readiness programs.',
    localSchools: ['Edgars Creek Primary School', 'Hazel Glen College', 'Wollert Primary School'],
    nearbyAreas: ['Epping', 'South Morang', 'Mickleham'],
  },
  {
    name: 'Beveridge',
    slug: 'beveridge',
    driveTime: '15 minutes',
    postcode: '3753',
    description: 'Beveridge families seeking quality education support can rely on New Era Education in nearby Mickleham. Our VIT-registered teachers provide personalised tutoring programs designed for every stage of learning.',
    localSchools: ['Beveridge Primary School', 'Mandalay Estate schools'],
    nearbyAreas: ['Wallan', 'Mickleham', 'Craigieburn'],
  },
  {
    name: 'Wallan',
    slug: 'wallan',
    driveTime: '20 minutes',
    postcode: '3756',
    description: 'Wallan students travel to our Mickleham centre for premium tutoring they can\'t find closer to home. With expert VCE preparation, school readiness, and one-on-one support, the drive is well worth it.',
    localSchools: ['Wallan Primary School', 'Wallan Secondary College', 'Assumption College Kilmore'],
    nearbyAreas: ['Beveridge', 'Kilmore', 'Upper Plenty'],
  },
  {
    name: 'Epping',
    slug: 'epping',
    driveTime: '15 minutes',
    postcode: '3076',
    description: 'Epping families looking for expert tutoring choose New Era Education in Mickleham. Our personalised approach, VIT-registered teachers, and comprehensive programs set us apart from generic tutoring centres.',
    localSchools: ['Epping Primary School', 'Epping Secondary College', 'Peter Lalor Secondary College', 'Northern Bay College'],
    nearbyAreas: ['South Morang', 'Wollert', 'Mill Park', 'Thomastown'],
  },
];

export function generateStaticParams() {
  return suburbs.map((suburb) => ({
    suburb: suburb.slug,
  }));
}

export function generateMetadata({ params }: { params: { suburb: string } }): Metadata {
  const suburb = suburbs.find((s) => s.slug === params.suburb);
  if (!suburb) return {};

  return {
    title: `Tutoring in ${suburb.name} VIC | English & Maths Tutor Near ${suburb.name} | New Era Education`,
    description: `Expert tutoring for ${suburb.name} students. English, maths, school readiness, and NDIS support from VIT-registered teachers. Just ${suburb.driveTime} from ${suburb.name} at our Mickleham centre. Book a free consultation.`,
    keywords: `tutoring ${suburb.name}, tutor ${suburb.name}, English tutor ${suburb.name}, maths tutor ${suburb.name}, ${suburb.name} tutoring centre, tutoring near ${suburb.name}`,
    alternates: { canonical: `https://neweralearning.com.au/tutoring/${suburb.slug}` },
    robots: 'index, follow',
    openGraph: {
      title: `Tutoring in ${suburb.name} VIC | English & Maths | New Era Education`,
      description: `Expert tutoring for ${suburb.name} students. Just ${suburb.driveTime} from ${suburb.name}. VIT-registered teachers, personalised programs.`,
      url: `https://neweralearning.com.au/tutoring/${suburb.slug}`,
      type: 'website',
      images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: `Tutoring for ${suburb.name} Students - New Era Education` }],
    },
  };
}

const services = [
  { icon: BookOpen, title: 'English Tutoring', desc: 'Foundation to Year 12', href: '/english-tutoring' },
  { icon: Calculator, title: 'Maths Tutoring', desc: 'Foundation to Year 12', href: '/maths-tutoring' },
  { icon: Baby, title: 'School Readiness', desc: 'Ages 3-6', href: '/school-readiness' },
  { icon: Users, title: 'One-on-One Tutoring', desc: 'All subjects', href: '/one-on-one' },
  { icon: Home, title: 'Homeschooling Support', desc: 'Curriculum guidance', href: '/homeschooling-support' },
  { icon: Award, title: 'NDIS Support', desc: 'Capacity building', href: '/ndis' },
];

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const suburb = suburbs.find((s) => s.slug === params.suburb);
  if (!suburb) return null;

  const suburbSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "New Era Education",
    "description": `Expert tutoring services for ${suburb.name} students at our Mickleham centre`,
    "url": `https://neweralearning.com.au/tutoring/${suburb.slug}`,
    "telephone": "+61384670773",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite 4 Level 3, 21 Cityside Dr",
      "addressLocality": "Mickleham",
      "addressRegion": "VIC",
      "postalCode": "3064",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": suburb.name,
      "containedInPlace": { "@type": "State", "name": "Victoria" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "21",
      "bestRating": "5"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(suburbSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Expert Tutoring for {suburb.name} Students
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Just {suburb.driveTime} from {suburb.name} — premium tutoring at our Mickleham centre
              </p>
              <p className="text-lg text-white/80 mb-8">
                {suburb.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                  <Link href="/book">Book Free Consultation</Link>
                </Button>
                <a href="tel:+61384670773" className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5" />
                  Call (03) 8467 0773
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Families Choose Us */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why {suburb.name} Families Choose New Era Education
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by families across Northern Melbourne with 20+ five-star Google reviews
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">VIT-Registered Teachers</h3>
                <p className="text-gray-600">All our educators are qualified, VIT-registered teachers with 10+ years of classroom experience.</p>
              </div>
              <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                <Star className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">20+ Five-Star Reviews</h3>
                <p className="text-gray-600">Families across {suburb.name} and Northern Melbourne rate us 5 stars for our personalised approach and results.</p>
              </div>
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
                <MapPin className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Just {suburb.driveTime} Away</h3>
                <p className="text-gray-600">Our Mickleham centre at Cityside Drive is a quick {suburb.driveTime} drive from {suburb.name}.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Tutoring Services Available for {suburb.name} Students
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200">
                  <service.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local Schools We Support */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              Supporting Students from {suburb.name} Schools
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We work with students from schools across {suburb.name} and surrounding areas, tailoring our programs to complement their school curriculum.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {suburb.localSchools.map((school) => (
                  <div key={school} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{school}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
              Book a free 30-minute consultation to discuss your child&apos;s learning needs. We&apos;re just {suburb.driveTime} from {suburb.name}.
            </p>
            <div className="flex items-center justify-center gap-4 text-white/80 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Link href="/book">Book Free Consultation</Link>
              </Button>
              <a href="tel:+61384670773" className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" />
                (03) 8467 0773
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Also serving: {suburb.nearbyAreas.join(', ')} and surrounding areas
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
