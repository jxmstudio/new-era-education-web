import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MapPin,
  Mail,
  BookOpen,
  Calculator,
  Users,
  Pencil,
  Heart,
  Target,
  Check,
} from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'School Readiness Program | Ages 3-6 | New Era Education',
  description:
    'Is your child ready for school? Our School Readiness Program prepares children aged 3-6 with literacy, numeracy, social skills, and confidence. VIT-registered teachers in Mickleham, Melbourne.',
  robots: { index: false, follow: false },
  openGraph: {
    title:
      'School Readiness Program | Is Your Child Ready? | New Era Education',
    description:
      'Prepare your child for school success. Expert program for ages 3-6 by VIT-registered teachers.',
    url: 'https://neweralearning.com.au/get-started/school-readiness',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://neweralearning.com.au/get-started/school-readiness',
  },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const painPoints = [
  {
    emoji: '📖',
    text: 'Struggling to keep up with classmates in reading and writing',
  },
  {
    emoji: '🗣️',
    text: 'Difficulty following instructions and classroom routines',
  },
  {
    emoji: '😔',
    text: 'Low confidence and reluctance to participate',
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: 'Early Literacy',
    items: [
      'Letter recognition',
      'Phonics awareness',
      'Pre-reading skills',
      'Vocabulary building',
    ],
  },
  {
    icon: Calculator,
    title: 'Numeracy Foundations',
    items: [
      'Number recognition',
      'Counting',
      'Basic patterns',
      'Spatial awareness',
    ],
  },
  {
    icon: Heart,
    title: 'Social & Emotional Skills',
    items: [
      'Following instructions',
      'Sharing and turn-taking',
      'Classroom routines',
      'Building confidence',
    ],
  },
  {
    icon: Pencil,
    title: 'Fine Motor Development',
    items: [
      'Pencil grip and control',
      'Cutting and pasting',
      'Drawing and tracing',
      'Hand-eye coordination',
    ],
  },
];

const steps = [
  {
    number: '1',
    title: 'Free Assessment',
    description:
      'We assess your child\u2019s current skills and identify areas for growth',
  },
  {
    number: '2',
    title: 'Personalised Plan',
    description:
      'A custom learning plan designed around your child\u2019s unique needs',
  },
  {
    number: '3',
    title: 'Weekly Sessions',
    description:
      'Fun, engaging sessions that build skills progressively',
  },
  {
    number: '4',
    title: 'School Ready',
    description:
      'Your child starts school confident, capable, and excited to learn',
  },
];

/* ------------------------------------------------------------------ */
/*  HELPERS                                                           */
/* ------------------------------------------------------------------ */

/** Wrap every occurrence of `phrases` inside `text` with a <mark> */
function highlightText(text: string, phrases: string[]) {
  // build a single regex that matches any of the highlight phrases
  const escaped = phrases.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isHighlight = phrases.some(
      (p) => p.toLowerCase() === part.toLowerCase(),
    );
    if (isHighlight) {
      return (
        <mark
          key={i}
          className="bg-amber-100/80 text-inherit rounded-sm px-0.5 font-medium"
        >
          {part}
        </mark>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

/* Five amber stars */
function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-400 fill-amber-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

/* Google "G" SVG */
function GoogleG() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  REVIEW DATA                                                       */
/* ------------------------------------------------------------------ */

const reviews = [
  {
    text: "We've had such a wonderful experience with New Era Education, and especially with Addy as my daughter's teacher. Addy is incredibly kind, patient, and understanding, and from the very first session she made my daughter feel comfortable and at ease. She takes the time to explain things in a way that really connects, never rushes, and always encourages confidence rather than pressure. My daughter genuinely enjoys her sessions and feels supported, which has made such a difference to her learning and self-belief. I'm so grateful to have found a tutor who not only teaches well but truly cares. Highly recommend both New Era Education and Addy.",
    highlights: [
      'wonderful experience',
      'incredibly kind, patient, and understanding',
      'comfortable and at ease',
      'encourages confidence rather than pressure',
      'truly cares',
    ],
    author: 'Jessica Cootes',
  },
  {
    text: "I've had a fantastic experience with New Era Education. The team is professional, supportive, and truly committed to my sons success. They take the time to understand his goals and provide clear guidance every step of the way and are dedicating to helping him achieve his best possible outcomes. Communication is always prompt and transparent, and they make the entire process feel smooth and stress-free. I highly recommend New Era Education to anyone looking for reliable and high-quality educational support for their child.",
    highlights: [
      'professional, supportive, and truly committed',
      'clear guidance every step of the way',
      'smooth and stress-free',
      'high-quality educational support',
    ],
    author: 'Olivia Dal Bo',
  },
  {
    text: 'So grateful to the tutors at New Era Education. I homeschool 2 primary school aged children. Their assessments and assistance with filling gaps I have missed has been a life saver. Beautiful environment, flexible schedules and very skilled in helping children learn in a way that not only helps them understand the curriculum but excel in it. Thank you New Era Team! Highly recommend them if you are after a great tutor!',
    highlights: [
      'filling gaps I have missed has been a life saver',
      'Beautiful environment',
      'very skilled',
      'not only helps them understand the curriculum but excel in it',
    ],
    author: 'Elke Hanisch',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function SchoolReadinessLandingPage() {
  return (
    <div className="min-h-screen bg-white font-primary">
      {/* ============================================================ */}
      {/*  1. STICKY HEADER                                            */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm ring-1 ring-slate-200 group-hover:ring-blue-300 transition-all">
              <Image src="/logo.jpg" alt="New Era Education" width={36} height={36} className="w-9 h-9 object-contain rounded-lg" priority />
            </div>
            <span className="text-base font-bold text-slate-900 hidden sm:block">New Era Education</span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:0384670773"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (03) 8467 0773
            </a>
            <a
              href="tel:0384670773"
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="#enquire"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors shadow-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/*  2. HERO SECTION                                             */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/neweraphotos/IMG_3916.JPG"
          alt="New Era Education tutoring session"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 40%' }}
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-800/80 to-purple-900/85" />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Soft radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 sm:py-24 text-center">
          {/* Age badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 text-sm font-medium text-amber-200 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Target className="w-4 h-4" />
            For Children Aged 3-6
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Is Your Child Ready{' '}
            <span className="text-amber-400">for School?</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Our School Readiness Program gives children aged 3-6 the confidence
            and skills they need to thrive from day one.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
              <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              5.0 Google Rating
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
              <Check className="w-4 h-4 text-emerald-400" />
              VIT Registered Teachers
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
              <Users className="w-4 h-4 text-blue-300" />
              Ages 3-6
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquire"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Book a Free Assessment
            </a>
            <a
              href="tel:0384670773"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-all hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Call (03) 8467 0773
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. THE PROBLEM SECTION                                      */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-red-600 uppercase bg-red-50 rounded-full mb-4">
              The Challenge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Starting School Without Preparation{' '}
              <span className="text-red-500">Can Hold Children Back</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{point.emoji}</span>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-xl sm:text-2xl font-display font-semibold text-slate-800">
              But it doesn&apos;t have to be this way.
            </p>
            <p className="mt-2 text-lg text-blue-600 font-medium">
              With the right preparation, your child can start school with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. THE SOLUTION - OUR PROGRAM                               */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4">
              Our Program
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              The New Era{' '}
              <span className="text-blue-600">School Readiness Program</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              A comprehensive program designed by experienced educators to
              prepare your child for school success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const colors = [
                { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
                { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
                { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
                { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
              ];
              const c = colors[i];
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-8 border ${c.border} ${c.bg} hover:shadow-md transition-shadow`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} ${c.text} mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.text}`}
                        />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. VSL / VIDEO SECTION                                      */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-amber-50/60">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-100 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meet Adelaine &mdash;{' '}
              <span className="text-amber-600">Our Founder</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Founded by Adelaine Matthews, New Era Education was born from a
              passion for giving every child the best start in their learning
              journey. Our VIT-registered teachers bring warmth, patience, and
              expertise to every session.
            </p>
          </div>

          {/* Video — 9:16 portrait */}
          <div className="relative max-w-sm mx-auto aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/founder.mov#t=1" type="video/quicktime" />
              <source src="https://pub-ffc9a413470f4e69a929b4e0ce1199a7.r2.dev/founder.mov#t=1" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. TESTIMONIALS (Google-branded)                            */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Google header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <GoogleG />
              <span className="font-display text-xl font-bold text-slate-800">
                Google Reviews
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Stars />
              <span className="text-lg font-bold text-slate-900">5.0</span>
            </div>
            <p className="text-sm text-slate-500">
              Based on 20+ Google Reviews
            </p>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 flex flex-col"
              >
                {/* Stars */}
                <Stars />

                {/* Quote */}
                <blockquote className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed flex-1">
                  &ldquo;{highlightText(review.text, review.highlights)}&rdquo;
                </blockquote>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {review.author}
                    </p>
                  </div>
                  <GoogleG />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. WHAT TO EXPECT - TIMELINE                                */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4">
              The Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              What to Expect
            </h2>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-200" />

            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-5 sm:gap-6">
                  {/* Numbered circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-display font-bold text-lg sm:text-xl shadow-lg shadow-blue-600/20">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-1 sm:pt-2.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7.5 ENQUIRY FORM                                            */}
      {/* ============================================================ */}
      <section id="enquire" className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-700 uppercase bg-amber-50 rounded-full mb-4">
              Free Assessment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Book Your Child&apos;s Free Assessment
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Takes less than 2 minutes &middot; No obligations &middot; We&apos;ll be in touch within 24 hours
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8. FINAL CTA                                                */}
      {/* ============================================================ */}
      <section
        className="relative py-20 sm:py-28 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Give Your Child the{' '}
            <span className="text-amber-400">Best Start</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
            Book a free assessment to see where your child is at and how we can
            help.
          </p>

          {/* Address */}
          <div className="mt-6 flex items-center justify-center gap-2 text-blue-200/80 text-sm sm:text-base">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquire"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Book a Free Assessment
            </a>
            <a
              href="tel:0384670773"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-all hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Call (03) 8467 0773
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8.5 FIND US - GOOGLE MAP                                    */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Visit Our Learning Centre
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-lg">Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</p>
            </div>
          </div>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.8959786895587!2d144.92061142520066!3d-37.536401157337394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad653f7c3e4b2f7%3A0x4895e70aa591a0d6!2sNew%20Era%20Education!5e0!3m2!1sen!2sau!4v1754631303077!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0, width: '100%', height: '100%', borderRadius: '16px' }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Era Education Location"
              aria-label="Google Maps showing New Era Education location in Mickleham"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9. FOOTER                                                   */}
      {/* ============================================================ */}
      <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Image src="/logo.jpg" alt="New Era Education" width={40} height={40} className="w-10 h-10 object-contain rounded-lg" />
                </div>
                <span className="text-lg font-bold text-white">New Era Education</span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                Premium tutoring in Mickleham, Melbourne. Helping every child
                reach their full potential.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>
                  Suite 4 Level 3, 21 Cityside Dr,
                  <br />
                  Mickleham VIC 3064
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 flex-shrink-0 text-slate-500" />
                <a
                  href="tel:0384670773"
                  className="hover:text-white transition-colors"
                >
                  (03) 8467 0773
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 flex-shrink-0 text-slate-500" />
                <a
                  href="mailto:info@neweralearning.com.au"
                  className="hover:text-white transition-colors"
                >
                  info@neweralearning.com.au
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577979322687"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/newera.education_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="mt-10 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} New Era Education. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
