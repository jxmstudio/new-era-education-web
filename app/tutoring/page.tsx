import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Clock, ChevronRight, Navigation, GraduationCap, BookOpen, Calculator, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tutoring in Northern Melbourne | Craigieburn, Greenvale & Surrounds | New Era Education',
  description: 'Find expert tutoring near you in Northern Melbourne. New Era Education serves Craigieburn, Greenvale, Roxburgh Park, Wollert, Beveridge, Wallan, and Epping from our Mickleham centre.',
  alternates: {
    canonical: 'https://neweralearning.com.au/tutoring',
  },
  openGraph: {
    title: 'Tutoring in Northern Melbourne | Craigieburn, Greenvale & Surrounds',
    description: 'Find expert tutoring near you in Northern Melbourne. New Era Education serves Craigieburn, Greenvale, Roxburgh Park, Wollert, Beveridge, Wallan, and Epping from our Mickleham centre.',
    url: 'https://neweralearning.com.au/tutoring',
    siteName: 'New Era Education',
    locale: 'en_AU',
    type: 'website',
  },
};

const locations = [
  {
    name: 'Mickleham',
    slug: '',
    driveTime: 'Our Centre',
    postcode: '3064',
    description: 'Home of New Era Education. Our purpose-built learning centre on Cityside Drive.',
    isCentre: true,
  },
  {
    name: 'Craigieburn',
    slug: 'craigieburn',
    driveTime: '5 min drive',
    postcode: '3064',
    description: 'Just minutes from our centre, Craigieburn families enjoy quick and easy access to expert tutoring.',
    isCentre: false,
  },
  {
    name: 'Roxburgh Park',
    slug: 'roxburgh-park',
    driveTime: '8 min drive',
    postcode: '3064',
    description: 'Personalised tutoring for Roxburgh Park students in English, maths, and school readiness.',
    isCentre: false,
  },
  {
    name: 'Greenvale',
    slug: 'greenvale',
    driveTime: '10 min drive',
    postcode: '3059',
    description: 'Premium tutoring support for Greenvale families, straight up Mickleham Road.',
    isCentre: false,
  },
  {
    name: 'Wollert',
    slug: 'wollert',
    driveTime: '12 min drive',
    postcode: '3750',
    description: 'Supporting families in one of Melbourne\'s fastest-growing suburbs with quality education.',
    isCentre: false,
  },
  {
    name: 'Beveridge',
    slug: 'beveridge',
    driveTime: '15 min drive',
    postcode: '3753',
    description: 'Expert tutoring for Beveridge students preparing for school and excelling in their studies.',
    isCentre: false,
  },
  {
    name: 'Epping',
    slug: 'epping',
    driveTime: '15 min drive',
    postcode: '3076',
    description: 'Comprehensive tutoring programs for Epping families seeking personalised learning support.',
    isCentre: false,
  },
  {
    name: 'Wallan',
    slug: 'wallan',
    driveTime: '20 min drive',
    postcode: '3756',
    description: 'Quality tutoring worth the drive for Wallan families looking for qualified teachers.',
    isCentre: false,
  },
];

const services = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'English Tutoring',
    description: 'Foundation to Year 12',
    href: '/english-tutoring',
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'Maths Tutoring',
    description: 'Foundation to Year 12',
    href: '/maths-tutoring',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'School Readiness',
    description: 'Ages 3-5',
    href: '/school-readiness',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'One-on-One Tutoring',
    description: 'All ages',
    href: '/one-on-one',
  },
];

export default function TutoringLocationsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://neweralearning.com.au',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Tutoring Locations',
        'item': 'https://neweralearning.com.au/tutoring',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    'name': 'New Era Education',
    'description': 'Expert tutoring services across Northern Melbourne from our Mickleham centre. Serving Craigieburn, Greenvale, Roxburgh Park, Wollert, Beveridge, Wallan, and Epping.',
    'url': 'https://neweralearning.com.au/tutoring',
    'telephone': '+61384670773',
    'email': 'info@neweralearning.com.au',
    'image': 'https://neweralearning.com.au/hero-bg.jpg',
    'logo': 'https://neweralearning.com.au/logo.jpg',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Suite 4 Level 3, 21 Cityside Dr',
      'addressLocality': 'Mickleham',
      'addressRegion': 'VIC',
      'postalCode': '3064',
      'addressCountry': 'AU',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -37.5167,
      'longitude': 144.8833,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Saturday',
        'opens': '10:00',
        'closes': '15:00',
      },
    ],
    'areaServed': [
      { '@type': 'City', 'name': 'Mickleham' },
      { '@type': 'City', 'name': 'Craigieburn' },
      { '@type': 'City', 'name': 'Greenvale' },
      { '@type': 'City', 'name': 'Roxburgh Park' },
      { '@type': 'City', 'name': 'Wollert' },
      { '@type': 'City', 'name': 'Beveridge' },
      { '@type': 'City', 'name': 'Wallan' },
      { '@type': 'City', 'name': 'Epping' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 2px, transparent 2px),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-white font-medium">Tutoring Locations</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Tutoring Across Northern Melbourne
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-8">
              From our purpose-built learning centre in Mickleham, we proudly serve families across
              Northern Melbourne with expert, personalised tutoring delivered by qualified teachers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white !text-blue-900 hover:bg-gray-100 hover:!text-blue-800 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/book">Book a Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white !text-white hover:bg-white hover:!text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent transition-all"
              >
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Suburb Cards Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
              Find Tutoring Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Mickleham centre is centrally located for families across Northern Melbourne.
              Select your suburb to learn more about how we can support your child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) =>
              location.isCentre ? (
                <div
                  key="mickleham"
                  className="relative rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md"
                >
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3" />
                      Our Centre
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1 font-display">
                    {location.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{location.postcode}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {location.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <a
                      href="https://maps.google.com/?q=New+Era+Education+Suite+4+Level+3+21+Cityside+Dr+Mickleham+VIC+3064"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              ) : (
                <Link
                  key={location.slug}
                  href={`/tutoring/${location.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <MapPin className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-1 transition-colors font-display">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">
                    {location.driveTime} &middot; {location.postcode}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Our Mickleham Centre */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
                Our Mickleham Learning Centre
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the Cloverton commercial precinct at Suite 4 Level 3, 21 Cityside Drive,
                Mickleham VIC 3064, our centre is purpose-built for learning and designed with your
                child's comfort and success in mind.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Small class sizes for personalised attention',
                  'All educators are VIT-registered teachers',
                  'Secure key pass entry system for student safety',
                  'Quiet, focused learning environment',
                  'Free parking available on-site',
                  'Flexible after-school and weekend sessions',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <a
                      href="https://maps.google.com/?q=New+Era+Education+Suite+4+Level+3+21+Cityside+Dr+Mickleham+VIC+3064"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+61458498170" className="text-gray-600 hover:text-blue-600 transition-colors block">
                        0458 498 170
                      </a>
                      <a href="tel:+61384670773" className="text-gray-600 hover:text-blue-600 transition-colors block">
                        (03) 8467 0773
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat: 10:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="rounded-2xl h-72 lg:h-80 bg-cover bg-center shadow-lg overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(9, 47, 121, 0.6), rgba(0, 166, 138, 0.6)), url('/neweraphotos/IMG_3916.JPG')`,
                }}
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">7+</p>
                  <p className="text-sm text-gray-600 font-medium">Suburbs Served</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">5-20</p>
                  <p className="text-sm text-gray-600 font-medium">Minutes Away</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">10+</p>
                  <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-1">5.0</p>
                  <p className="text-sm text-gray-600 font-medium">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
              Programs Available at Our Centre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every program is delivered by VIT-registered teachers with personalised learning plans
              tailored to each student.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <div className="text-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 2px, transparent 2px),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-display">
            Ready to Start Your Child's Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book a free consultation to discuss your child's needs. Our qualified teachers will
            create a personalised learning plan to help them thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-white !text-blue-900 hover:bg-gray-100 hover:!text-blue-800 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/book">Book a Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white !text-white hover:bg-white hover:!text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent shadow-lg hover:shadow-xl transition-all"
            >
              <a href="tel:+61458498170">Call 0458 498 170</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
