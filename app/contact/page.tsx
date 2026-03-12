import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, BookOpen, Calculator, Baby, Users, Home, Award, GraduationCap, ChevronRight } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ContactForm from "@/components/forms/ContactForm"
import dynamic from "next/dynamic"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact New Era Education | Tutoring in Mickleham VIC & Northern Melbourne',
  description: 'Contact New Era Education for tutoring enquiries in Mickleham, Craigieburn, and Northern Melbourne. Phone: 0458 498 170 | Email: info@neweralearning.com.au | Mon-Fri 9AM-8PM, Sat 10AM-3PM',
  alternates: {
    canonical: 'https://neweralearning.com.au/contact',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Contact New Era Education | Tutoring in Mickleham VIC',
    description: 'Contact New Era Education for tutoring enquiries in Mickleham and Northern Melbourne.',
    url: 'https://neweralearning.com.au/contact',
    type: 'website',
    images: [{ url: '/hero-bg.jpg', width: 1200, height: 630, alt: 'Contact New Era Education Mickleham' }],
  },
};

const GoogleMapEmbed = dynamic(() => import("@/components/GoogleMapEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] rounded-xl bg-gray-200 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Have a question about our tutoring services in Mickleham or Northern Melbourne? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to get started? Contact us today to discuss your child's educational needs 
                  and how we can help them achieve their goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Mickleham, Melbourne, Victoria</p>
                    <p className="text-gray-600">Serving surrounding areas including Craigieburn, Greenvale, and Beveridge</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+61458498170" className="hover:text-secondary transition-colors">0458 498 170</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+61384670773" className="hover:text-secondary transition-colors">(03) 8467 0773</a>
                    </p>
                    <p className="text-gray-600 text-sm">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@neweralearning.com.au</p>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Have Questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  Check out our frequently asked questions for quick answers to common inquiries.
                </p>
                <a 
                  href="/faq" 
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  View FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Us on Google Maps</h3>
            <p className="text-lg text-gray-600">
              We are conveniently located in Mickleham, serving families from surrounding areas including
              Craigieburn, Greenvale, Beveridge, Wallan, and Epping.
            </p>
          </div>
          <GoogleMapEmbed />
        </div>
      </section>

      {/* Explore Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Our Tutoring Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'School Readiness', href: '/school-readiness', icon: Baby, desc: 'Ages 3-6' },
              { title: 'English Tutoring', href: '/english-tutoring', icon: BookOpen, desc: 'Foundation-Year 12' },
              { title: 'Maths Tutoring', href: '/maths-tutoring', icon: Calculator, desc: 'Foundation-Year 12' },
              { title: 'One-on-One', href: '/one-on-one', icon: Users, desc: 'Personalised sessions' },
              { title: 'Workshops', href: '/workshops', icon: GraduationCap, desc: 'Study skills & more' },
              { title: 'Homeschooling', href: '/homeschooling-support', icon: Home, desc: 'Curriculum support' },
              { title: 'NDIS Support', href: '/ndis', icon: Award, desc: 'Capacity building' },
              { title: 'Why Choose Us', href: '/comparison', icon: ChevronRight, desc: 'See the difference' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors"
              >
                <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <span className="font-medium text-gray-900 group-hover:text-primary transition-colors text-sm">{service.title}</span>
                  <p className="text-xs text-gray-500">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 