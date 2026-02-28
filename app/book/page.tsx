import { CheckCircle, Clock, Users, Star } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BookingForm from "@/components/forms/BookingForm"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Free Consultation | New Era Education Tutoring in Mickleham VIC',
  description: 'Book a free 30-minute consultation for tutoring services in Mickleham and Northern Melbourne. Discuss your child\'s needs and create a personalised learning plan. Call 0458 498 170.',
  alternates: {
    canonical: 'https://neweralearning.com.au/book',
  },
  robots: 'index, follow',
};

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Free 30-Minute Consultation",
    description: "Get to know us and discuss your child's needs at no cost"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Qualified Teachers",
    description: "All our tutors are qualified teachers with 10+ years experience"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Proven Results",
    description: "Students consistently improve their grades and confidence"
  }
]

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Ready to give your child the academic support they need? 
              Book a free 30-minute consultation to discuss their educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Booking Form */}
            <div>
              <BookingForm />
            </div>

            {/* Benefits and Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our Consultation?
                </h2>
                <p className="text-gray-600 mb-8">
                  Our free consultation is the first step towards your child's academic success. 
                  We'll assess their needs and create a personalised learning plan.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Assessment of your child's current academic level</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Discussion of specific learning goals and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Overview of our teaching methods and approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Customized learning plan recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>No pressure to commit - consultation is completely free</span>
                  </li>
                </ul>
              </div>

              {/* What Happens Next */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <p className="text-gray-600 mb-3">
                  After you submit your booking request:
                </p>
                <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                  <li>We'll contact you within 24 hours to confirm your preferred time</li>
                  <li>You'll receive a confirmation email with session details</li>
                  <li>We'll send a reminder the day before your consultation</li>
                  <li>After the consultation, we'll provide a written summary and next steps</li>
                </ol>
                <p className="text-gray-600 mt-3">
                  Servicing families across Mickleham, Craigieburn, Greenvale, Roxburgh Park, Wollert, and surrounding Northern Melbourne areas.
                </p>
              </div>

              {/* Contact Info */}
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Questions?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our services or the consultation process, 
                  don't hesitate to reach out.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Phone:</strong> 0458 498 170 or (03) 8467 0773</p>
                  <p><strong>Email:</strong> info@neweralearning.com.au</p>
                  <p><strong>Hours:</strong> Mon-Fri 8AM-8PM, Sat 10AM-3PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 