import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, BookOpen, Calculator, Baby, Users, Home, Award, ChevronRight, Play } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Get Started | Free Consultation | New Era Education',
  description: 'Book a free 30-minute consultation with New Era Education. Expert tutoring from VIT-registered teachers in Mickleham, Melbourne. School readiness, English, maths, and more.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Get Started with New Era Education | Free Consultation',
    description: 'Expert tutoring from VIT-registered teachers. 5-star rated. Book your free consultation today.',
    url: 'https://neweralearning.com.au/get-started',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://neweralearning.com.au/get-started' },
};

const services = [
  {
    icon: Baby,
    title: 'School Readiness',
    description: 'Ages 3-6 — Build confidence before big school',
    href: '/school-readiness',
  },
  {
    icon: BookOpen,
    title: 'English Tutoring',
    description: 'Foundation-Year 12 — Reading, writing & VCE prep',
    href: '/english-tutoring',
  },
  {
    icon: Calculator,
    title: 'Maths Tutoring',
    description: 'Foundation-Year 12 — Numeracy & problem-solving',
    href: '/maths-tutoring',
  },
  {
    icon: Users,
    title: 'One-on-One',
    description: 'All subjects — Personalised learning plans',
    href: '/one-on-one',
  },
  {
    icon: Home,
    title: 'Homeschooling Support',
    description: 'All ages — Curriculum guidance & assessment',
    href: '/homeschooling-support',
  },
  {
    icon: Award,
    title: 'NDIS Support',
    description: 'Capacity building — Functional literacy & numeracy',
    href: '/ndis',
  },
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)]">
      {/* ===== FUNNEL HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm ring-1 ring-slate-200 group-hover:ring-blue-300 transition-all">
                <Image src="/logo.jpg" alt="New Era Education" width={36} height={36} className="w-9 h-9 object-contain rounded-lg" priority />
              </div>
              <span className="text-base font-bold text-slate-900 hidden sm:block">New Era Education</span>
            </Link>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="tel:+61384670773"
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(03) 8467 0773</span>
              </a>
              <a
                href="tel:+61384670773"
                className="sm:hidden flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="#enquire"
                className="inline-flex items-center justify-center h-11 px-5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden"
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Warm glow accents */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            {/* Trust badges - mobile: stacked, desktop: inline */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 animate-[fadeInUp_0.6s_ease-out_both]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-amber-300 text-xs sm:text-sm font-medium border border-white/10">
                <span className="text-amber-400">&#9733;</span> 5.0 Google Rating
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-emerald-300 text-xs sm:text-sm font-medium border border-white/10">
                <span className="text-emerald-400">&#10003;</span> VIT Registered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blue-200 text-xs sm:text-sm font-medium border border-white/10">
                10+ Years Experience
              </span>
            </div>

            <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-[fadeInUp_0.6s_ease-out_0.15s_both]">
              Every Child Deserves Expert, Personalised Education
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
              VIT-Registered Teachers&ensp;&middot;&ensp;5-Star Rated&ensp;&middot;&ensp;Mickleham, Melbourne
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.6s_ease-out_0.45s_both]">
              <a
                href="#enquire"
                className="inline-flex items-center justify-center h-14 sm:h-13 px-8 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-base sm:text-lg font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 w-full sm:w-auto"
              >
                Book Your Free Consultation
              </a>
              <a
                href="tel:+61384670773"
                className="inline-flex items-center justify-center h-14 sm:h-13 px-8 border-2 border-white/30 hover:border-white/60 text-white text-base sm:text-lg font-semibold rounded-xl transition-all hover:bg-white/5 w-full sm:w-auto gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (03) 8467 0773
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== VSL / MEET OUR FOUNDER ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              A Message From Our Founder
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear Adelaine&apos;s story and why she created New Era Education
            </p>
          </div>

          {/* Video container */}
          <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 group cursor-pointer">
            {/* Placeholder play button — replace this div's contents with YouTube/Vimeo iframe */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                {/* Play button */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:bg-white/25 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Founder bio */}
          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl font-[var(--font-poppins)]">AM</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-slate-900 text-lg">Adelaine Matthews</p>
              <p className="text-slate-500 text-sm mb-2">Founder &amp; Director &middot; 10+ Years in Education</p>
              <p className="text-slate-600 leading-relaxed">
                With over a decade of experience in education and a deep commitment to nurturing every student&apos;s potential, Adelaine founded New Era Education to create an exclusive, supportive learning space where children are truly seen, understood, and empowered to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (GOOGLE BRANDED) ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Google-branded header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-3">
              {/* Google "G" logo */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FBBC04"/>
                <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#EA4335"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#34A853"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#4285F4"/>
              </svg>
              <span className="text-4xl sm:text-5xl font-bold text-slate-900 font-[var(--font-poppins)]">5.0</span>
            </div>
            {/* 5 stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-500 text-sm sm:text-base font-medium">Based on 20+ Google Reviews</p>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed text-[15px] flex-1 mb-5">
                &ldquo;We&apos;ve had such a <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">wonderful experience</mark> with New Era Education, and especially with Addy as my daughter&apos;s teacher. Addy is <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">incredibly kind, patient, and understanding</mark>, and from the very first session she made my daughter feel <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">comfortable and at ease</mark>. She takes the time to explain things in a way that really connects, never rushes, and always <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">encourages confidence rather than pressure</mark>. My daughter <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">genuinely enjoys her sessions</mark> and feels supported, which has made such a difference to her learning and self-belief. I&apos;m so grateful to have found a tutor who not only teaches well but <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">truly cares</mark>. Highly recommend both New Era Education and Addy.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">Jessica Cootes</p>
                <svg className="w-5 h-5 opacity-40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FBBC04"/>
                  <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#EA4335"/>
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#34A853"/>
                  <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#4285F4"/>
                </svg>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed text-[15px] flex-1 mb-5">
                &ldquo;I&apos;ve had a fantastic experience with New Era Education. The team is <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">professional, supportive, and truly committed</mark> to my sons success. They take the time to understand his goals and provide <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">clear guidance every step of the way</mark> and are dedicating to helping him achieve his best possible outcomes. Communication is always <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">prompt and transparent</mark>, and they make the entire process feel <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">smooth and stress-free</mark>. I highly recommend New Era Education to anyone looking for reliable and <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">high-quality educational support</mark> for their child.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">Olivia Dal Bo</p>
                <svg className="w-5 h-5 opacity-40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FBBC04"/>
                  <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#EA4335"/>
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#34A853"/>
                  <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#4285F4"/>
                </svg>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed text-[15px] flex-1 mb-5">
                &ldquo;So grateful to the tutors at New Era Education. I homeschool 2 primary school aged children. Their assessments and assistance with <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">filling gaps I have missed has been a life saver</mark>. <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">Beautiful environment</mark>, <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">flexible schedules</mark> and <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">very skilled</mark> in helping children learn in a way that <mark className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium">not only helps them understand the curriculum but excel in it</mark>. Thank you New Era Team! Highly recommend them if you are after a great tutor!&rdquo;
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">Elke Hanisch</p>
                <svg className="w-5 h-5 opacity-40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FBBC04"/>
                  <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#EA4335"/>
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#34A853"/>
                  <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#4285F4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY FORM ===== */}
      <section id="enquire" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4">
              Free Consultation
            </span>
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Start Your Child&apos;s Journey
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Takes less than 2 minutes &middot; No obligations &middot; We&apos;ll be in touch within 24 hours
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Comprehensive Programs for Every Stage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From early learners to Year 12, we have a program tailored to your child&apos;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Ready to Start Your Child&apos;s Learning Journey?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-4 leading-relaxed">
            Book a free 30-minute consultation to discuss your child&apos;s needs.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-200 text-sm sm:text-base mb-10">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center h-14 sm:h-13 px-8 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-base sm:text-lg font-semibold rounded-xl transition-all shadow-lg shadow-black/15 hover:shadow-xl w-full sm:w-auto"
            >
              Book Your Free Consultation
            </a>
            <a
              href="tel:+61384670773"
              className="inline-flex items-center justify-center h-14 sm:h-13 px-8 border-2 border-white/30 hover:border-white/60 text-white text-base sm:text-lg font-semibold rounded-xl transition-all hover:bg-white/10 w-full sm:w-auto gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (03) 8467 0773
            </a>
          </div>
        </div>
      </section>

      {/* ===== SIMPLE FOOTER ===== */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Image src="/logo.jpg" alt="New Era Education" width={40} height={40} className="w-10 h-10 object-contain rounded-lg" />
                </div>
                <span className="text-lg font-bold text-white">New Era Education</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Premium tutoring in Mickleham, Melbourne. Empowering students from school readiness through to Year 12.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                  <span>Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</span>
                </li>
                <li>
                  <a href="tel:+61384670773" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0 text-slate-500" />
                    <span>(03) 8467 0773</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@neweralearning.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 flex-shrink-0 text-slate-500" />
                    <span>info@neweralearning.com.au</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61577979322687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/newera.education_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            &copy; 2025 New Era Education. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
