import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, CheckCircle, GraduationCap, BookOpen, Calculator, Users, Star, Baby, Home, Award, Clock, ChevronRight, Navigation, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuburbFAQ {
  question: string;
  answer: string;
}

interface SuburbData {
  name: string;
  slug: string;
  driveTime: string;
  postcode: string;
  description: string;
  localSchools: string[];
  nearbyAreas: string[];
  population: string;
  educationContext: string;
  directions: string;
  faqs: SuburbFAQ[];
  highlights: string[];
}

const suburbs: SuburbData[] = [
  {
    name: 'Craigieburn',
    slug: 'craigieburn',
    driveTime: '5 minutes',
    postcode: '3064',
    population: '~70,000',
    description: 'Craigieburn families trust New Era Education for quality tutoring just minutes away. Our Mickleham centre is conveniently located off Cityside Drive, making it easy for Craigieburn students to access expert tutoring in English, maths, and more. As one of the closest suburbs to our centre, Craigieburn students can arrive within minutes, minimising travel time and maximising learning.',
    educationContext: 'Craigieburn is one of Melbourne\'s fastest-growing northern suburbs with a strong focus on family and education. With multiple primary and secondary schools, families here prioritise academic achievement and seek quality supplementary education. The suburb\'s rapid growth has brought diverse educational needs, and many parents are actively looking for tutoring that goes beyond what large classroom settings can offer.',
    directions: 'Take Craigieburn Road East towards Mickleham Road, then turn onto Cityside Drive. Our centre is in the Cloverton commercial precinct.',
    localSchools: ['Craigieburn South Primary School', 'Aitken Creek Primary School', 'Hume Anglican Grammar', 'Mount Ridley P-12 College', 'Craigieburn Primary School', 'Willmott Park Primary School'],
    nearbyAreas: ['Mickleham', 'Roxburgh Park', 'Greenvale'],
    highlights: [
      'Closest suburb to our centre — just a 5-minute drive',
      'Tailored programs aligned with local school curricula',
      'Flexible after-school and weekend sessions for busy Craigieburn families',
    ],
    faqs: [
      {
        question: 'How far is New Era Education from Craigieburn?',
        answer: 'Our Mickleham centre is just a 5-minute drive from Craigieburn. We are located at Suite 4 Level 3, 21 Cityside Drive, Mickleham VIC 3064 — right off Mickleham Road in the Cloverton commercial precinct, making it one of the most convenient tutoring options for Craigieburn families.',
      },
      {
        question: 'What tutoring services are available for Craigieburn students?',
        answer: 'We offer comprehensive tutoring for Craigieburn students including English tutoring (Foundation to Year 12), maths tutoring (Foundation to Year 12), school readiness programs for children aged 3-6, one-on-one tutoring across all subjects, homeschooling support, and NDIS-funded capacity building. All programs are delivered by VIT-registered teachers.',
      },
      {
        question: 'Do you support students from Craigieburn schools like Mount Ridley and Hume Anglican Grammar?',
        answer: 'Yes, we work with students from all Craigieburn schools including Mount Ridley P-12 College, Hume Anglican Grammar, Aitken Creek Primary, Craigieburn South Primary, and more. Our tutors are familiar with the curricula and assessment standards used by these schools, so we can tailor sessions to complement what your child is learning in the classroom.',
      },
      {
        question: 'What ages do you tutor at New Era Education?',
        answer: 'We tutor students from age 3 through to Year 12. Our school readiness program caters to children aged 3-6 who are preparing for primary school. We also support primary students (Foundation to Year 6), secondary students (Years 7-10), and senior students preparing for VCE (Years 11-12).',
      },
    ],
  },
  {
    name: 'Greenvale',
    slug: 'greenvale',
    driveTime: '10 minutes',
    postcode: '3059',
    population: '~15,000',
    description: 'Greenvale students benefit from premium tutoring at our nearby Mickleham centre. With VIT-registered teachers and personalised learning plans, we help Greenvale families achieve outstanding academic results. Our centre offers the kind of focused, expert teaching that complements the high standards set by Greenvale\'s well-regarded schools.',
    educationContext: 'Greenvale is an established, family-oriented suburb in Melbourne\'s north-west. Known for its quality schools and community spirit, Greenvale families value education excellence and personalised learning support. Many families in the area choose independent and Catholic schools, reflecting a strong commitment to providing every educational advantage for their children.',
    directions: 'Head north on Mickleham Road towards Craigieburn, then turn right onto Cityside Drive. The centre is easily accessible from Greenvale.',
    localSchools: ['Greenvale Primary School', 'Kolbe Catholic College', 'Aitken College', 'Green Gully Primary School', 'Holy Child Primary School'],
    nearbyAreas: ['Mickleham', 'Craigieburn', 'Roxburgh Park', 'Attwood'],
    highlights: [
      'Easy 10-minute drive straight up Mickleham Road',
      'Experienced with the curricula used by Greenvale\'s independent schools',
      'Small group and one-on-one options to suit your child\'s learning style',
    ],
    faqs: [
      {
        question: 'Is New Era Education accessible from Greenvale?',
        answer: 'Absolutely. Our Mickleham centre is approximately 10 minutes north of Greenvale via Mickleham Road. You simply head north and turn right onto Cityside Drive — it is a straightforward trip with no highway driving required.',
      },
      {
        question: 'Can you help my child prepare for selective school entry from Greenvale?',
        answer: 'Yes, we support students preparing for selective school entry exams and scholarship tests. Our VIT-registered teachers can design a targeted preparation program covering reading comprehension, mathematical reasoning, and writing skills — all critical components of selective school assessments.',
      },
      {
        question: 'Do you offer after-school tutoring sessions for Greenvale students?',
        answer: 'We offer flexible scheduling including after-school and weekend sessions to accommodate Greenvale families. Many of our Greenvale students attend sessions after school during the week, but we also have Saturday options for families who prefer weekend learning.',
      },
      {
        question: 'How are your tutoring programs different from other centres near Greenvale?',
        answer: 'Unlike franchise tutoring centres that rely on worksheets and unqualified staff, every educator at New Era Education is a VIT-registered teacher with over 10 years of classroom experience. We create personalised learning plans based on diagnostic assessments, and our small class sizes ensure your child receives the attention they need to thrive.',
      },
    ],
  },
  {
    name: 'Roxburgh Park',
    slug: 'roxburgh-park',
    driveTime: '10 minutes',
    postcode: '3064',
    population: '~30,000',
    description: 'Roxburgh Park families choose New Era Education for personalised tutoring that makes a real difference. Our experienced educators provide tailored support to help every student reach their full potential. Located just 10 minutes away in Mickleham, our centre is an easy after-school stop for families in the Roxburgh Park area.',
    educationContext: 'Roxburgh Park is a vibrant multicultural suburb in Melbourne\'s north. With diverse educational needs across its growing population, families here seek personalised tutoring to help students reach their full potential. The suburb is home to families from many cultural backgrounds who share a common value: giving their children the best possible education and future opportunities.',
    directions: 'Take Somerton Road or Pascoe Vale Road north to Mickleham Road, then continue to Cityside Drive in Mickleham.',
    localSchools: ['Roxburgh Park Primary School', 'Roxburgh Rise Primary School', 'Hume Central Secondary College', 'Holy Child Primary School Roxburgh Park', 'Meadows Primary School'],
    nearbyAreas: ['Craigieburn', 'Meadow Heights', 'Coolaroo'],
    highlights: [
      'Multicultural teaching expertise to support diverse learning needs',
      'Personalised programs that build on your child\'s school curriculum',
      'Proven track record with students from Roxburgh Park schools',
    ],
    faqs: [
      {
        question: 'How do I get to New Era Education from Roxburgh Park?',
        answer: 'From Roxburgh Park, take Somerton Road or Pascoe Vale Road north until you reach Mickleham Road. Continue north on Mickleham Road and turn onto Cityside Drive. The trip takes approximately 10 minutes and our centre is at Suite 4 Level 3, 21 Cityside Drive, Mickleham.',
      },
      {
        question: 'Do your tutors have experience with students from multicultural backgrounds?',
        answer: 'Yes. Our VIT-registered teachers have extensive experience working with students from diverse cultural and linguistic backgrounds. We understand that each child has unique learning needs, and we tailor our approach accordingly. For students where English is an additional language, we provide targeted literacy support to build confidence and competence.',
      },
      {
        question: 'What support do you offer for Roxburgh Park students struggling with maths?',
        answer: 'We offer dedicated maths tutoring from Foundation to Year 12. For students who are struggling, we begin with a diagnostic assessment to identify specific gaps in understanding. Our tutors then build a personalised plan that addresses foundational skills while keeping pace with school curriculum requirements, so your child catches up without feeling overwhelmed.',
      },
      {
        question: 'Is there NDIS tutoring available for Roxburgh Park families?',
        answer: 'Yes, New Era Education is a registered NDIS provider. We offer capacity-building tutoring support for students with disabilities, funded through NDIS plans. Our experienced teachers create individualised programs that help students develop literacy, numeracy, and learning skills in a supportive, patient environment.',
      },
    ],
  },
  {
    name: 'Wollert',
    slug: 'wollert',
    driveTime: '10 minutes',
    postcode: '3750',
    population: '~20,000',
    description: 'Wollert is one of Melbourne\'s fastest-growing suburbs, and New Era Education is here to support local families with expert tutoring. Our Mickleham centre is a short drive away, offering English, maths, and school readiness programs. As new estates continue to develop in Wollert, families appreciate having a trusted tutoring centre close by with qualified teachers.',
    educationContext: 'Wollert is one of Melbourne\'s newest and fastest-growing suburbs, with young families moving in rapidly. As new schools are still being established, many families seek additional educational support for their children. The suburb\'s demographics skew young, meaning there is strong demand for early learning, school readiness, and primary school tutoring programs.',
    directions: 'Head west along Epping Road or use Donnybrook Road to connect to Mickleham Road, then proceed to Cityside Drive.',
    localSchools: ['Edgars Creek Primary School', 'Hazel Glen College', 'Wollert Primary School', 'Kiama Park Primary School', 'Merriang P-9'],
    nearbyAreas: ['Epping', 'South Morang', 'Mickleham'],
    highlights: [
      'School readiness programs ideal for Wollert\'s young family demographic',
      'Support while new local schools are still establishing their programs',
      'Convenient 10-minute drive from most Wollert estates',
    ],
    faqs: [
      {
        question: 'Is New Era Education a good option for Wollert families with young children?',
        answer: 'Absolutely. We have a dedicated school readiness program for children aged 3-6, which is very popular with Wollert families. This program helps young children develop early literacy, numeracy, fine motor skills, and social confidence before they start school — giving them a strong head start in their education journey.',
      },
      {
        question: 'How long does it take to drive from Wollert to New Era Education?',
        answer: 'The drive from Wollert to our Mickleham centre takes approximately 10 minutes. You can head west along Epping Road or use Donnybrook Road to connect to Mickleham Road, then proceed to 21 Cityside Drive in the Cloverton precinct.',
      },
      {
        question: 'Can you help my child transition to a new school in Wollert?',
        answer: 'Yes. Many families moving to Wollert\'s new estates come from different school systems or states. We can help your child adjust to their new school\'s curriculum, fill any learning gaps from the transition, and build confidence in their new learning environment. Our diagnostic assessments help us pinpoint exactly where your child is at so we can provide targeted support.',
      },
      {
        question: 'Do you offer weekend tutoring for Wollert students?',
        answer: 'Yes, we offer both weekday after-school sessions and Saturday sessions to accommodate the busy schedules of Wollert families. Many parents find weekend sessions work best, especially when managing school pickups and extracurricular activities during the week.',
      },
    ],
  },
  {
    name: 'Beveridge',
    slug: 'beveridge',
    driveTime: '15 minutes',
    postcode: '3753',
    population: '~8,000',
    description: 'Beveridge families seeking quality education support can rely on New Era Education in nearby Mickleham. Our VIT-registered teachers provide personalised tutoring programs designed for every stage of learning. Though Beveridge is a growing suburb with new schools emerging, families appreciate the depth of experience and proven results our established centre delivers.',
    educationContext: 'Beveridge is a rapidly developing suburb on Melbourne\'s northern fringe. As the community grows, families are looking for quality educational support options beyond the local school system. With major new housing developments bringing thousands of young families to the area, the demand for reliable, high-quality tutoring has never been greater in Beveridge.',
    directions: 'Travel south on the Hume Freeway or Old Sydney Road to Mickleham Road, then to Cityside Drive in Mickleham.',
    localSchools: ['Beveridge Primary School', 'Mandalay Estate schools', 'Wallan Primary School', 'Northern Bay College'],
    nearbyAreas: ['Wallan', 'Mickleham', 'Craigieburn'],
    highlights: [
      'Serving a growing community where quality tutoring options are limited',
      'Diagnostic assessments to identify and address learning gaps early',
      'Supportive environment for students from newly established schools',
    ],
    faqs: [
      {
        question: 'Is it worth driving from Beveridge to New Era Education for tutoring?',
        answer: 'Many Beveridge families tell us the 15-minute drive is well worth it for the quality of education their children receive. Our VIT-registered teachers, personalised learning plans, and proven track record set us apart from closer alternatives. Families often combine the trip with errands along Mickleham Road, making it a convenient part of their routine.',
      },
      {
        question: 'What tutoring do you offer for primary school students from Beveridge?',
        answer: 'We offer comprehensive primary school tutoring in English and maths from Foundation to Year 6. Our programs are designed to build strong foundational skills in reading, writing, spelling, grammar, number sense, and problem-solving. We align our teaching with the Victorian Curriculum so that sessions directly complement what your child is learning at Beveridge Primary or other local schools.',
      },
      {
        question: 'Can New Era Education help with VCE preparation for Beveridge students?',
        answer: 'Yes. We provide expert VCE tutoring in English and maths, including support for study design, SAC preparation, and exam technique. Our teachers have extensive experience with the VCE curriculum and can help your child develop the skills and confidence needed to achieve their best possible ATAR.',
      },
      {
        question: 'Do you provide homeschooling support for Beveridge families?',
        answer: 'We do. Our homeschooling support program helps Beveridge families navigate the Victorian Curriculum, identify learning gaps, and ensure their children are meeting key educational benchmarks. Whether you need full curriculum guidance or targeted support in specific subjects, our experienced teachers can help.',
      },
    ],
  },
  {
    name: 'Wallan',
    slug: 'wallan',
    driveTime: '20 minutes',
    postcode: '3756',
    population: '~15,000',
    description: 'Wallan students travel to our Mickleham centre for premium tutoring they can\'t find closer to home. With expert VCE preparation, school readiness, and one-on-one support, the drive is well worth it. Families from Wallan consistently tell us they chose New Era Education because of the quality of our teachers and the measurable improvement in their children\'s results.',
    educationContext: 'Wallan is a thriving township north of Melbourne with a strong sense of community. Families here often travel to access specialised educational services not available locally, making quality tutoring a valued resource. As Wallan continues to grow rapidly, parents are increasingly looking for academic support that matches the township\'s aspirations for its young people.',
    directions: 'Head south on the Hume Freeway towards Craigieburn, exit at Donnybrook Road, and follow signs to Cityside Drive, Mickleham.',
    localSchools: ['Wallan Primary School', 'Wallan Secondary College', 'Assumption College Kilmore', 'Wallan Kindergarten'],
    nearbyAreas: ['Beveridge', 'Kilmore', 'Upper Plenty'],
    highlights: [
      'Worth the 20-minute drive for expert VCE and exam preparation',
      'Specialised support not available in the Wallan area',
      'Flexible scheduling to accommodate the longer commute',
    ],
    faqs: [
      {
        question: 'Why do Wallan families choose to travel to New Era Education?',
        answer: 'Wallan families choose us because our VIT-registered teachers offer a level of expertise and personalised attention that is difficult to find in the Wallan area. Every session is tailored to your child\'s specific needs, using diagnostic assessments and ongoing progress tracking. The 20-minute drive pays off through measurable academic improvement and genuine confidence building.',
      },
      {
        question: 'Can you help Wallan Secondary College students with VCE subjects?',
        answer: 'Yes. We have extensive experience supporting VCE students with English (including EAL) and maths subjects. Our teachers are familiar with VCE study designs, assessment criteria, and exam formats. We help students with SAC preparation, essay writing, problem-solving skills, and exam technique to maximise their ATAR outcomes.',
      },
      {
        question: 'Do you offer any online tutoring for Wallan students?',
        answer: 'Currently, our sessions are held in-person at our Mickleham centre. However, many Wallan families have found that the in-person experience — with access to our resources, face-to-face interaction with our teachers, and a dedicated learning environment — delivers significantly better results than online alternatives. We schedule flexibly to make the commute as manageable as possible.',
      },
      {
        question: 'What makes New Era Education different from tutoring apps and online platforms?',
        answer: 'Unlike tutoring apps that rely on pre-recorded content or unqualified tutors, every session at New Era Education is delivered by a VIT-registered teacher with over 10 years of experience. Your child receives a personalised learning plan, face-to-face expert instruction, and ongoing progress reporting. We build genuine relationships with our students, which makes a real difference to their motivation and outcomes.',
      },
    ],
  },
  {
    name: 'Epping',
    slug: 'epping',
    driveTime: '15 minutes',
    postcode: '3076',
    population: '~35,000',
    description: 'Epping families looking for expert tutoring choose New Era Education in Mickleham. Our personalised approach, VIT-registered teachers, and comprehensive programs set us apart from generic tutoring centres. With a well-established education scene in Epping, families here know the difference quality teaching makes — and that is exactly what we deliver.',
    educationContext: 'Epping is a well-established suburb in Melbourne\'s north with a diverse population and numerous schools. Families here seek expert tutoring to give their children an academic edge and support their school learning. With a mix of government and independent schools, Epping families have high expectations for education quality and appreciate tutoring that is aligned with their children\'s specific school programs.',
    directions: 'Travel north on High Street or Dalton Road to Mickleham Road, then continue north to Cityside Drive in Mickleham.',
    localSchools: ['Epping Primary School', 'Epping Secondary College', 'Peter Lalor Secondary College', 'St Peter\'s Primary School Epping', 'Epping Views Primary School'],
    nearbyAreas: ['South Morang', 'Wollert', 'Mill Park', 'Thomastown'],
    highlights: [
      'Experienced with curricula from Epping\'s diverse range of schools',
      'Small class sizes that large Epping centres cannot match',
      'Diagnostic-led approach to identify and target your child\'s specific gaps',
    ],
    faqs: [
      {
        question: 'What is the best route from Epping to New Era Education?',
        answer: 'The easiest route is to travel north on High Street or Dalton Road until you reach Mickleham Road. Continue north on Mickleham Road and turn onto Cityside Drive. The trip takes approximately 15 minutes depending on traffic, and our centre is at Suite 4 Level 3, 21 Cityside Drive, Mickleham VIC 3064.',
      },
      {
        question: 'Do you help Epping Secondary College students with exam preparation?',
        answer: 'Yes. We support students from Epping Secondary College and other local schools with comprehensive exam preparation. This includes VCE subject tutoring, SAC preparation, practice exams, essay writing techniques, and time management strategies. Our teachers understand the expectations and assessment standards of Northern Melbourne schools.',
      },
      {
        question: 'How much does tutoring cost for Epping families?',
        answer: 'Our tutoring rates are competitive and reflect the quality of our VIT-registered teachers. We offer a free 30-minute consultation where we discuss your child\'s needs, conduct an initial assessment, and recommend a program. Contact us on (03) 8467 0773 or book online to learn about our current pricing and session options.',
      },
      {
        question: 'Can you support students from Epping who need help with reading and writing?',
        answer: 'Absolutely. English literacy is one of our core specialties. We help students of all ages improve their reading comprehension, creative and persuasive writing, spelling, grammar, and vocabulary. Whether your child is in early primary or preparing for VCE English, our teachers will develop a targeted plan to build their skills and confidence.',
      },
    ],
  },
];

const googleReviews = [
  {
    text: "We've had such a wonderful experience with New Era Education, and especially with Addy as my daughter's teacher. Addy is incredibly kind, patient, and understanding, and from the very first session she made my daughter feel comfortable and at ease. She takes the time to explain things in a way that really connects, never rushes, and always encourages confidence rather than pressure. My daughter genuinely enjoys her sessions and feels supported, which has made such a difference to her learning and self-belief. I'm so grateful to have found a tutor who not only teaches well but truly cares. Highly recommend both New Era Education and Addy.",
    rating: 5,
  },
  {
    text: "I've had a fantastic experience with New Era Education. The team is professional, supportive, and truly committed to my sons success. They take the time to understand his goals and provide clear guidance every step of the way and are dedicating to helping him achieve his best possible outcomes. Communication is always prompt and transparent, and they make the entire process feel smooth and stress-free. I highly recommend New Era Education to anyone looking for reliable and high-quality educational support for their child.",
    rating: 5,
  },
  {
    text: "So grateful to the tutors at New Era Education. I homeschool 2 primary school aged children. Their assessments and assistance with filling gaps I have missed has been a life saver. Beautiful environment, flexible schedules and very skilled in helping children learn in a way that not only helps them understand the curriculum but excel in it. Thank you New Era Team! Highly recommend them if you are after a great tutor!",
    rating: 5,
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
    title: `Best Tutoring Near ${suburb.name} VIC ${suburb.postcode} | English & Maths | New Era Education`,
    description: `Expert English & maths tutoring for ${suburb.name} students — just ${suburb.driveTime} from ${suburb.name}. VIT-registered teachers, personalised learning plans, school readiness & NDIS support. Book a free consultation today.`,
    keywords: `tutoring ${suburb.name}, tutor ${suburb.name}, English tutor ${suburb.name}, maths tutor ${suburb.name}, ${suburb.name} tutoring centre, tutoring near ${suburb.name}, best tutor ${suburb.name}, private tutor ${suburb.name} VIC`,
    alternates: { canonical: `https://neweralearning.com.au/tutoring/${suburb.slug}` },
    robots: 'index, follow',
    openGraph: {
      title: `Best Tutoring Near ${suburb.name} VIC ${suburb.postcode} | New Era Education`,
      description: `Expert tutoring for ${suburb.name} students. Just ${suburb.driveTime} from ${suburb.name}. VIT-registered teachers, personalised programs, 20+ five-star Google reviews.`,
      url: `https://neweralearning.com.au/tutoring/${suburb.slug}`,
      type: 'website',
      images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: `Tutoring for ${suburb.name} Students - New Era Education` }],
    },
  };
}

const services = [
  { icon: BookOpen, title: 'English Tutoring', desc: 'Reading, writing, grammar & comprehension from Foundation to Year 12', href: '/english-tutoring' },
  { icon: Calculator, title: 'Maths Tutoring', desc: 'Number skills, problem solving & exam prep from Foundation to Year 12', href: '/maths-tutoring' },
  { icon: Baby, title: 'School Readiness', desc: 'Early literacy, numeracy & social skills for ages 3-6', href: '/school-readiness' },
  { icon: Users, title: 'One-on-One Tutoring', desc: 'Fully personalised sessions across all subjects', href: '/one-on-one' },
  { icon: Home, title: 'Homeschooling Support', desc: 'Curriculum guidance, assessments & gap identification', href: '/homeschooling-support' },
  { icon: Award, title: 'NDIS Support', desc: 'Capacity building for literacy & numeracy skills', href: '/ndis' },
];

function GoogleStars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function SuburbPage({ params }: { params: { suburb: string } }) {
  const suburb = suburbs.find((s) => s.slug === params.suburb);
  if (!suburb) return null;

  const otherSuburbs = suburbs.filter((s) => s.slug !== suburb.slug);

  const combinedSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "New Era Education",
      "description": `Expert tutoring services for ${suburb.name} students at our Mickleham centre. English, maths, school readiness, and NDIS support from VIT-registered teachers.`,
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -37.5321,
        "longitude": 144.9001
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
      },
      "review": googleReviews.map((review, index) => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating.toString(),
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": ["Jessica Cootes", "Olivia Dal Bo", "Elke Hanisch"][index] || `Google Reviewer ${index + 1}`
        },
        "reviewBody": review.text,
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      })),
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "15:00"
        }
      ],
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": suburb.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://neweralearning.com.au"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tutoring",
          "item": "https://neweralearning.com.au/tutoring"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `Tutoring Near ${suburb.name}`,
          "item": `https://neweralearning.com.au/tutoring/${suburb.slug}`
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Header />
      <main>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-4 h-4 text-gray-400" /></li>
              <li>
                <Link href="/tutoring" className="hover:text-blue-600 transition-colors">Tutoring</Link>
              </li>
              <li><ChevronRight className="w-4 h-4 text-gray-400" /></li>
              <li>
                <span className="text-gray-900 font-medium">{suburb.name}</span>
              </li>
            </ol>
          </div>
        </nav>

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
              <p className="text-lg text-white/80 mb-4">
                {suburb.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-8">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Mickleham VIC 3064
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {suburb.driveTime} drive from {suburb.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4" />
                  5.0 stars — 20+ Google Reviews
                </span>
              </div>
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

        {/* Key Highlights for this Suburb */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {suburb.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              ))}
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
                Trusted by families across Northern Melbourne with 20+ five-star Google reviews and a commitment to genuine academic improvement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">VIT-Registered Teachers Only</h3>
                <p className="text-gray-600">Every educator at New Era Education is a qualified, VIT-registered teacher with 10+ years of real classroom experience. No university students or unqualified tutors — only professionals who understand how children learn.</p>
              </div>
              <div className="p-6 rounded-xl bg-green-50 border border-green-100">
                <Star className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">20+ Five-Star Google Reviews</h3>
                <p className="text-gray-600">Families across {suburb.name} and Northern Melbourne consistently rate us 5 stars. Our personalised approach, caring teachers, and measurable results speak for themselves.</p>
              </div>
              <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
                <MapPin className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Just {suburb.driveTime} from {suburb.name}</h3>
                <p className="text-gray-600">Our Mickleham centre at 21 Cityside Drive is a quick {suburb.driveTime} drive from {suburb.name}. Conveniently located with easy parking and a welcoming learning environment.</p>
              </div>
              <div className="p-6 rounded-xl bg-orange-50 border border-orange-100">
                <BookOpen className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalised Learning Plans</h3>
                <p className="text-gray-600">Every student receives a tailored learning plan based on comprehensive diagnostic assessments. We identify gaps, set goals, and track progress so you can see real improvement over time.</p>
              </div>
              <div className="p-6 rounded-xl bg-teal-50 border border-teal-100">
                <Users className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Groups & One-on-One</h3>
                <p className="text-gray-600">Choose between focused small group sessions or fully personalised one-on-one tutoring. Either way, your child gets the individual attention they need to succeed.</p>
              </div>
              <div className="p-6 rounded-xl bg-rose-50 border border-rose-100">
                <MessageCircle className="w-10 h-10 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Progress Updates</h3>
                <p className="text-gray-600">We keep {suburb.name} parents informed with regular progress reports and open communication. You will always know how your child is progressing and what areas we are focusing on.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews / Testimonials */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GoogleLogo />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  What Families Say About Us
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <GoogleStars />
                <span className="text-lg font-semibold text-gray-900">5.0</span>
              </div>
              <p className="text-gray-600">Based on 20+ Google Reviews from families across Northern Melbourne</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {googleReviews.map((review, index) => (
                <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <GoogleLogo />
                    <GoogleStars />
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed flex-grow text-sm">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-gray-500">— {["Jessica Cootes", "Olivia Dal Bo", "Elke Hanisch"][index]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tutoring Services Available for {suburb.name} Students
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From school readiness to VCE preparation, we offer comprehensive programs delivered by qualified teachers who genuinely care about your child&apos;s success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="group p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200">
                  <service.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Education in [Suburb] */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
                Education in {suburb.name}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4">
                  {suburb.educationContext}
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  {suburb.name} is home to several well-regarded schools including {suburb.localSchools.slice(0, 3).join(', ')}{suburb.localSchools.length > 3 ? `, and ${suburb.localSchools[3]}` : ''}. At New Era Education, we work closely with students from these schools to complement their classroom learning with targeted, personalised tutoring.
                </p>
                <p className="text-lg leading-relaxed">
                  Our VIT-registered teachers understand the Victorian Curriculum inside and out. Whether your child needs to catch up, keep up, or get ahead, we design programs that align with what they are learning at school — reinforcing key concepts, filling knowledge gaps, and building the confidence they need to excel in assessments and exams.
                </p>
              </div>
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
              We work with students from schools across {suburb.name} and surrounding areas, tailoring our programs to complement their specific school curriculum and assessment requirements.
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {suburb.localSchools.map((school) => (
                  <div key={school} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{school}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 mt-6 text-sm">
                Don&apos;t see your child&apos;s school listed? We support students from all schools in {suburb.name} and the wider Northern Melbourne region.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
                Frequently Asked Questions About Tutoring Near {suburb.name}
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Have a question? Find answers below or call us on{' '}
                <a href="tel:+61384670773" className="text-blue-600 hover:underline">(03) 8467 0773</a>.
              </p>
              <div className="space-y-4">
                {suburb.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
                  >
                    <summary
                      className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 text-lg hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden"
                      aria-label={faq.question}
                    >
                      <span>{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Find Us from [Suburb] */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How to Find Us from {suburb.name}
              </h2>
              <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 mb-8">
                <Navigation className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <p className="text-lg text-gray-700 mb-4">
                  {suburb.directions}
                </p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>Approximately {suburb.driveTime} drive from {suburb.name} {suburb.postcode}</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="tel:+61384670773" className="hover:text-blue-600 transition-colors">(03) 8467 0773</a>
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Suite+4+Level+3+21+Cityside+Dr+Mickleham+VIC+3064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions on Google Maps
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Nearby Suburbs Internal Linking */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              Tutoring for Nearby Suburbs
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              New Era Education proudly serves families across Northern Melbourne. Explore tutoring for other suburbs near {suburb.name}.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {otherSuburbs.map((otherSuburb) => (
                <Link
                  key={otherSuburb.slug}
                  href={`/tutoring/${otherSuburb.slug}`}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Tutoring Near {otherSuburb.name}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {otherSuburb.driveTime} from our centre
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Help Your {suburb.name} Child Succeed?
            </h2>
            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
              Book a free 30-minute consultation to discuss your child&apos;s learning needs. We&apos;ll conduct a diagnostic assessment, recommend a personalised program, and show you how we can help — no obligation.
            </p>
            <p className="text-white/80 mb-8">
              We&apos;re just {suburb.driveTime} from {suburb.name} at our Mickleham centre.
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
              Also serving families in {suburb.nearbyAreas.join(', ')}, and surrounding Northern Melbourne suburbs.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
