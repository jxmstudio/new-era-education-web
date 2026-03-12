import { Metadata } from 'next'
import Link from 'next/link'
import { ComparisonChart } from "@/components/ui/comparison-chart"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { MotionWrapper } from "@/components/ui/motion-wrapper"
import { BookOpen, Calculator, Baby, Users, Home, Award, GraduationCap, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose New Era Education | Tutoring Comparison | Mickleham VIC',
  description: 'See why families in Mickleham and Northern Melbourne choose New Era Education. Compare our VIT-registered tutors, personalised programs, and proven results.',
  alternates: { canonical: 'https://neweralearning.com.au/comparison' },
  robots: 'index, follow',
  openGraph: {
    title: 'Why Choose New Era Education | Tutoring Comparison',
    description: 'See why families in Mickleham and Northern Melbourne choose New Era Education.',
    url: 'https://neweralearning.com.au/comparison',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Why Choose New Era Education Mickleham' }],
  },
}

const services = [
  {
    icon: Baby,
    title: 'School Readiness',
    description: 'Prepare children aged 3-6 for school with our structured program covering literacy, numeracy, and social skills.',
    href: '/school-readiness',
  },
  {
    icon: BookOpen,
    title: 'English Tutoring',
    description: 'Foundation to Year 12 English support including reading, writing, text analysis, and VCE preparation.',
    href: '/english-tutoring',
  },
  {
    icon: Calculator,
    title: 'Maths Tutoring',
    description: 'Build strong numeracy and problem-solving skills from Foundation through to Year 12 and VCE.',
    href: '/maths-tutoring',
  },
  {
    icon: Users,
    title: 'One-on-One Tutoring',
    description: 'Personalised private sessions tailored to your child\'s specific learning needs and goals.',
    href: '/one-on-one',
  },
  {
    icon: GraduationCap,
    title: 'Workshops',
    description: 'Study skills, literacy and numeracy workshops, plus holiday programs in small group settings.',
    href: '/workshops',
  },
  {
    icon: Home,
    title: 'Homeschooling Support',
    description: 'Curriculum guidance, assessment support, and resources for homeschooling families in Melbourne.',
    href: '/homeschooling-support',
  },
  {
    icon: Award,
    title: 'NDIS Capacity Building',
    description: 'Functional literacy, numeracy, and life skills development for NDIS participants.',
    href: '/ndis',
  },
]

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
              Why Choose New Era Education?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare to other tutoring programs and discover the New Era advantage
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ComparisonChart />
          </MotionWrapper>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The New Era Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the comparison, here is what makes us truly special
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Personalised Learning Plans</h3>
              <p className="text-gray-600">
                Every student at New Era Education begins with a diagnostic assessment. We identify specific strengths and gaps, then build a customised learning plan that targets exactly what your child needs. Unlike franchise centres that follow rigid, one-size-fits-all worksheets, our plans evolve as your child progresses.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">VIT-Registered Teachers</h3>
              <p className="text-gray-600">
                Every educator at New Era Education holds current Victorian Institute of Teaching registration. This means they have formal teaching qualifications, undergo regular professional development, and meet strict professional standards. Many tutoring centres use university students or unqualified staff — we believe your child deserves a real teacher.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Flexible In-Person and Online</h3>
              <p className="text-gray-600">
                Choose face-to-face sessions at our Mickleham centre or online tutoring from home. Our in-person sessions build strong engagement and focus, while online options provide flexibility for families in Craigieburn, Greenvale, Roxburgh Park, and beyond. Both formats deliver the same quality, personalised teaching.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Victorian Curriculum Aligned</h3>
              <p className="text-gray-600">
                Our programs are built around the Victorian Curriculum, so every session directly supports what your child is learning at school. This means your child is not doing disconnected busywork — they are reinforcing and extending their classroom learning with expert guidance.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Regular Parent Communication</h3>
              <p className="text-gray-600">
                We provide clear, regular feedback so you always know how your child is progressing. After each session block, you receive updates on your child's achievements, areas of focus, and next steps. You are a partner in your child's learning journey, not left in the dark.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Small Group Sizes</h3>
              <p className="text-gray-600">
                We keep our groups small so every student receives meaningful attention. While other centres pack 15 or more students into a session, our small class sizes ensure your child can ask questions, get immediate feedback, and stay engaged throughout. It is closer to one-on-one teaching than traditional tutoring.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Explore Our Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From early learning to VCE preparation, we offer programs for every stage of your child's education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-gray-50 hover:bg-primary/5 rounded-lg p-6 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2 flex items-center gap-1">
                      {service.title}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See the Difference?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation and discover how personalised tutoring from VIT-registered teachers can help your child thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
