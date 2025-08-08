import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  Calculator, 
  GraduationCap, 
  Users, 
  Star, 
  Clock,
  Baby,
  Palette,
  Home,
  Award,
  Heart,
  TrendingUp,
  Shield,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Check,
  Facebook,
  Instagram
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ContactForm from "@/components/forms/ContactForm"
import ServiceCard from "@/components/services/ServiceCard"
import HeroSection from "@/components/ui/hero-section"
import TestimonialCard from "@/components/ui/testimonial-card"
import FeatureCard from "@/components/ui/feature-card"
import Timetable from "@/components/ui/timetable"
import type { TimetableRow } from "@/components/ui/timetable"
import { MotionWrapper } from "@/components/ui/motion-wrapper"
import GoogleMapEmbed from "@/components/GoogleMapEmbed"

const services = [
  {
    title: "School Readiness Program",
    age: "Ages 3-5",
    description: "Prepare your child for school with our comprehensive readiness program focusing on literacy, numeracy, and social skills.",
    icon: <Baby className="w-6 h-6" />,
    features: [
      "Early literacy development",
      "Basic numeracy skills", 
      "Social interaction skills",
      "Fine motor development"
    ],
    href: "/school-readiness"
  },
  {
    title: "English Tutoring",
    age: "Foundation - Year 12",
    description: "Comprehensive English support from foundational reading skills to advanced VCE preparation.",
    icon: <BookOpen className="w-6 h-6" />,
    features: [
      "Reading comprehension",
      "Creative writing",
      "Essay writing", 
      "VCE exam preparation"
    ],
    href: "/english-tutoring"
  },
  {
    title: "Mathematics Tutoring",
    age: "Foundation - Year 8",
    description: "Build strong mathematical foundations with our evidence-based numeracy programs.",
    icon: <Calculator className="w-6 h-6" />,
    features: [
      "Number sense development",
      "Problem-solving strategies",
      "Algebraic thinking",
      "Year 9-12 coming soon"
    ],
    href: "/maths-tutoring"
  },
  {
    title: "One-on-One Tutoring",
    age: "All Ages",
    description: "Personalized learning plans tailored to your child's unique needs and learning style.",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Individual attention",
      "Custom learning plans",
      "Face-to-face & online",
      "Weekly progress reports"
    ],
    href: "/one-on-one"
  },
  {
    title: "Art Workshops",
    age: "All Ages",
    description: "Creative expression through art, fostering imagination and fine motor skills development.",
    icon: <Palette className="w-6 h-6" />,
    features: [
      "Creative expression",
      "Fine motor skills",
      "Art appreciation",
      "Holiday programs"
    ],
    href: "/art-workshops"
  },
  {
    title: "Homeschooling Support",
    age: "All Ages",
    description: "Specialized support for homeschooling families in literacy and numeracy development.",
    icon: <Home className="w-6 h-6" />,
    features: [
      "Curriculum guidance",
      "Assessment support",
      "Resource recommendations",
      "Parent consultation"
    ],
    href: "/homeschooling-support"
  }
]

const benefits = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Qualified Tutors",
    description: "All tutors are vetted professionals with real classroom experience and proven track records."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Proven Results",
    description: "We track progress and deliver outcomes that matter, with measurable improvements in student performance."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Scheduling",
    description: "After-school, weekends, or online – whatever suits your family's busy schedule and learning preferences."
  }
]

const aboutFeatures = [
  {
    icon: <Award className="w-5 h-5" />,
    title: "Qualified Teachers",
    description: "All our educators hold teaching qualifications with 10+ years of classroom experience."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Inclusive Environment",
    description: "We welcome students with learning difficulties and create supportive learning spaces."
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Evidence-Based Methods",
    description: "Our teaching methods are grounded in research and proven educational strategies."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Safe Learning Centre",
    description: "Secure key pass entry system ensures a safe environment for all students."
  }
]

const testimonials = [
  {
    content: "New Era Education has transformed my daughter's confidence in reading. The teachers are amazing and the progress reports keep me informed every week.",
    author: "Sarah M.",
    role: "Parent of Year 3 student"
  },
  {
    content: "The school readiness program prepared my son perfectly for kindergarten. He was confident and ready to learn from day one.",
    author: "Michael T.",
    role: "Parent of 5-year-old"
  },
  {
    content: "The one-on-one tutoring has helped my child overcome their learning difficulties. The teachers are patient and understanding.",
    author: "Lisa K.",
    role: "Parent of Year 6 student"
  }
]

const timetableData: TimetableRow[] = [
  {
    time: "9:30 AM",
    monday: { type: "session", text: "Foundational Homeschool English", subject: "english" },
    tuesday: { type: "session", text: "Foundational Homeschool English", subject: "english" },
    wednesday: { type: "session", text: "Foundational Homeschool English", subject: "english" },
    thursday: { type: "closed", text: "Closed" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "10:30 AM",
    monday: { type: "session", text: "Foundational HS Maths Support", subject: "maths" },
    tuesday: { type: "session", text: "Foundational HS Maths Support", subject: "maths" },
    wednesday: { type: "session", text: "Foundational HS Maths Support", subject: "maths" },
    thursday: { type: "closed", text: "Closed" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "12:00 PM",
    monday: { type: "session", text: "English Senior Homeschool Support", subject: "english" },
    tuesday: { type: "session", text: "English Senior Homeschool Support", subject: "english" },
    wednesday: { type: "session", text: "English Senior Homeschool Support", subject: "english" },
    thursday: { type: "closed", text: "Closed" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "1:00 PM",
    monday: { type: "session", text: "Maths Senior HS Support", subject: "maths" },
    tuesday: { type: "session", text: "Maths Senior HS Support", subject: "maths" },
    wednesday: { type: "session", text: "Maths Senior HS Support", subject: "maths" },
    thursday: { type: "closed", text: "Closed" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "3:00 PM",
    monday: { type: "session", text: "1:1", subject: "1:1" },
    tuesday: { type: "session", text: "1:1", subject: "1:1" },
    wednesday: { type: "session", text: "1:1", subject: "1:1" },
    thursday: { type: "session", text: "1:1", subject: "1:1" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "4:30 PM",
    monday: { type: "session", text: "Group Session", subject: "group" },
    tuesday: { type: "session", text: "Group Session", subject: "group" },
    wednesday: { type: "session", text: "Group Session", subject: "group" },
    thursday: { type: "session", text: "Group Session", subject: "group" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "5:30 PM",
    monday: { type: "session", text: "Group Session", subject: "group" },
    tuesday: { type: "session", text: "Group Session", subject: "group" },
    wednesday: { type: "session", text: "Group Session", subject: "group" },
    thursday: { type: "session", text: "Group Session", subject: "group" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "6:30 PM",
    monday: { type: "session", text: "1:1", subject: "1:1" },
    tuesday: { type: "session", text: "1:1", subject: "1:1" },
    wednesday: { type: "session", text: "1:1", subject: "1:1" },
    thursday: { type: "session", text: "1:1", subject: "1:1" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "7:30 PM",
    monday: { type: "session", text: "1:1", subject: "1:1" },
    tuesday: { type: "session", text: "1:1", subject: "1:1" },
    wednesday: { type: "session", text: "1:1", subject: "1:1" },
    thursday: { type: "session", text: "1:1", subject: "1:1" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "8:30 PM",
    monday: { type: "closed", text: "Closed" },
    tuesday: { type: "closed", text: "Closed" },
    wednesday: { type: "closed", text: "Closed" },
    thursday: { type: "closed", text: "Closed" },
    friday: { type: "closed", text: "Closed" },
    saturday: { type: "session", text: "1:1", subject: "1:1" },
    sunday: { type: "closed", text: "Closed" }
  },
  {
    time: "10:00 AM",
    monday: { type: "closed", text: "Closed" },
    tuesday: { type: "closed", text: "Closed" },
    wednesday: { type: "closed", text: "Closed" },
    thursday: { type: "closed", text: "Closed" },
    friday: { type: "session", text: "Art Workshop", subject: "art" },
    saturday: { type: "session", text: "Art Workshop", subject: "art" },
    sunday: { type: "session", text: "Art Workshop", subject: "art" }
  }
]



const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    content: (
      <a href="https://maps.google.com/?q=New+Era+Education+Suite+4+Level+3+21+Cityside+Dr+Mickleham+VIC+3064" target="_blank" rel="noopener" className="hover:text-primary transition-colors">
        Suite 4 Level 3, 21 Cityside Dr<br />Mickleham VIC 3064
      </a>
    )
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    content: <a href="tel:+61384670773" className="hover:text-primary transition-colors">(03) 8467 0773</a>
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    content: "info@neweraeducation.com.au"
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Hours",
    content: (
      <div>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Monday:</span>
            <span>8:00 AM – 7:30 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Tuesday:</span>
            <span>8:00 AM – 7:30 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Wednesday:</span>
            <span>8:00 AM – 7:30 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Thursday:</span>
            <span>Closed</span>
          </div>
          <div className="flex justify-between">
            <span>Friday:</span>
            <span>Closed</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>9:00 AM – 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
        <p className="text-xs italic mt-2 text-gray-600">
          Bookings are essential — please use the Book Now button to secure your session.
        </p>
      </div>
    )
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Premium Tutoring for Every Stage of Learning"
        subtitle="Trusted by families across Mickleham and Melbourne"
        description="Expert tutoring services with qualified teachers and evidence-based methods. Personalized learning plans for every student, from school readiness to Year 12."
        primaryButtonText="Book a Free Consultation"
        primaryButtonHref="/book"
        secondaryButtonText="View Programs"
        secondaryButtonHref="/#services"
        features={[
          { icon: <GraduationCap className="w-4 h-4" />, text: "Qualified Teachers" },
          { icon: <Users className="w-4 h-4" />, text: "Personalized Learning" },
          { icon: <Clock className="w-4 h-4" />, text: "Flexible Scheduling" }
        ]}
        variant="image"
        backgroundImage="/stock1.png"
      />



      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose New Era Education?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide the foundation for academic success with our proven approach
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
                accentColor="blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Programs & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutoring solutions for every stage of your child's educational journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                age={service.age}
                description={service.description}
                icon={service.icon}
                features={service.features}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About New Era Education
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe every child deserves access to quality education that nurtures their unique potential. 
                Our qualified teachers bring over 10 years of experience to create an inclusive, supportive learning environment.
              </p>
              <div className="space-y-6">
                {aboutFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-cover bg-center bg-no-repeat rounded-2xl h-80 overflow-hidden shadow-lg"
                   style={{ 
                     backgroundImage: `linear-gradient(to right, rgba(9, 47, 121, 0.7), rgba(0, 166, 138, 0.7)), url('/stock2.png')` 
                   }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-2/3 w-28 h-28 bg-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who have experienced the New Era difference
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <TestimonialCard
                  name={testimonial.author}
                  role={testimonial.role}
                  content={testimonial.content}
                  rating={5}
                  service="Tutoring"
                  index={index}
                />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Tutoring Timetable Section */}
      <Timetable 
        data={timetableData}
        title="Weekly Tutoring Timetable"
        description="Explore our weekly tutoring schedule for primary and high school students across Melbourne. Sessions in Math, English, and Science are available throughout the week."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 2px, transparent 2px),
                                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Child's Learning Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Join our community of learners and watch your child thrive with personalized, evidence-based education.
            </p>
          </MotionWrapper>
          
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MotionWrapper
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4,
                type: "spring",
                stiffness: 150 
              }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                asChild
                className="group hover:scale-105 transition-all duration-300 bg-white !text-primary hover:bg-gray-100 hover:!text-primary-dark px-8 py-4 text-lg font-semibold border-0 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact" className="relative overflow-hidden flex items-center gap-2">
                  <span className="relative z-10">Enquire Now</span>
                  <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </Button>
            </MotionWrapper>
            
            <MotionWrapper
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6,
                type: "spring",
                stiffness: 150 
              }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group hover:scale-105 transition-all duration-300 border-2 border-white !text-white hover:bg-white hover:!text-primary px-8 py-4 text-lg font-semibold bg-transparent shadow-lg hover:shadow-xl"
              >
                <Link href="/book" className="relative overflow-hidden flex items-center gap-2">
                  <span className="relative z-10">Book a Session</span>
                  <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                </Link>
              </Button>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your child's educational needs? Contact us today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <div className="text-gray-600">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us on Google Maps</h3>
            <GoogleMapEmbed />
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              A Message From Our Founder
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <MotionWrapper
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-primary-dark/5 rounded-2xl p-8 lg:p-12"
              >
                <div className="relative">
                  <div className="text-6xl text-primary/20 absolute top-0 left-0 transform -translate-x-2 -translate-y-4">
                    "
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-6 relative z-10">
                    As the founder and owner of New Era Education, I'm passionate about helping children discover their unique path to learning. Our approach is built on care, trust, and proven practices — and every child is treated as the individual they are. Thank you for considering us.
                  </blockquote>
                  <div className="text-6xl text-primary/20 absolute bottom-0 right-0 transform translate-x-2 translate-y-4">
                    "
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-lg">Adelaine Matthews</p>
                    <p className="text-gray-600">Founder & Director, New Era Education</p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <Footer />
    </div>
  )
} 