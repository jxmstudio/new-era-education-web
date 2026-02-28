'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { User, Clock, Target, TrendingUp, BookOpen, Calculator, Star, CheckCircle, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';

const features = [
  {
    icon: <User className="w-6 h-6" />,
    title: "Individual Attention",
    description: "Dedicated one-on-one focus ensuring personalised learning and immediate feedback. Each session is tailored to your child's current understanding and learning pace."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Custom Learning Plans",
    description: "Tailored curriculum designed specifically for your child's unique needs and goals. We create learning pathways that address gaps, build strengths, and align with school requirements."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Scheduling",
    description: "Sessions available after-school, weekends, and online to fit your family's schedule. We offer convenient appointment times across Mickleham and Northern Melbourne."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Tracking",
    description: "Regular assessments and detailed progress reports to monitor improvement. Parents receive clear updates on learning milestones and next steps."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expert Tutors",
    description: "Qualified teachers with real classroom experience and proven track records. Our tutors understand curriculum requirements and effective teaching strategies."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parent Partnership",
    description: "Regular communication with parents to ensure alignment with learning goals. We work together to support your child's educational journey."
  }
];

const subjects = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "English",
    description: "Comprehensive reading, writing, comprehension, spelling, grammar, and VCE preparation. We support students with phonics foundations, essay writing, text analysis, and exam technique.",
    levels: "Foundation - Year 12"
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Mathematics",
    description: "Number skills, problem-solving, algebra, geometry, and mathematical reasoning. We build confidence through clear explanations and practical application of concepts.", 
    levels: "Foundation - Year 8"
  }
];

const benefits = [
  "Immediate feedback and correction to prevent misconceptions from forming",
  "Pace adjusted to your child's learning speed and comprehension level",
  "Focused attention on specific areas of difficulty without distraction", 
  "Build confidence in a supportive, judgment-free environment",
  "Flexible lesson content and structure tailored to individual goals",
  "Strong tutor-student relationship development for trust and engagement",
  "Customised resources and strategies matched to learning style",
  "Regular progress tracking with clear, measurable learning outcomes"
];

const testimonials = [
  {
    content: "The one-on-one sessions have been incredible for my daughter. Her tutor understands exactly how she learns best and has helped her confidence soar.",
    name: "Michelle T.",
    role: "Parent of Year 4 student",
    rating: 5,
    service: "One-on-One"
  },
  {
    content: "Having individual attention has made such a difference. My son actually looks forward to his tutoring sessions now and his grades have improved significantly.",
    name: "James R.",
    role: "Parent of Year 8 student",
    rating: 5,
    service: "One-on-One"
  },
  {
    content: "The personalised approach and weekly progress reports keep us informed every step of the way. We couldn't be happier with the results.",
    name: "Lisa K.",
    role: "Parent of Year 6 student",
    rating: 5,
    service: "One-on-One"
  }
];

export default function OneOnOneContent() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-orange-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                One-on-One Tutoring in Mickleham VIC & Northern Melbourne
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Personalised learning plans tailored to your child's unique needs and learning style
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Experience the power of individual attention with our expert tutors who create customised learning experiences designed to help your child reach their full potential. Servicing families across Mickleham, Craigieburn, Greenvale, Roxburgh Park, Wollert, and surrounding Northern Melbourne areas.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <a href="/book">Book Free Consultation</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose One-on-One Tutoring?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Individual tutoring provides the focused attention and customised approach that helps students across Mickleham, Craigieburn, Greenvale, and Northern Melbourne achieve their best possible outcomes. Every child learns differently—one-on-one support ensures teaching is adapted to their unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                accentColor="orange"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Available Subjects
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive one-on-one support across key learning areas for students in Mickleham, Craigieburn, and Northern Melbourne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="text-orange-600 mb-4 inline-block group-hover:scale-110 transition-transform">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {subject.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {subject.description}
                </p>
                <div className="text-sm font-medium text-orange-600 bg-orange-100 rounded-full px-3 py-1 inline-block">
                  {subject.levels}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-orange-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How One-on-One Tutoring Works
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Each session is designed around your child's specific learning needs. We begin with an initial assessment to identify strengths, areas for improvement, and learning preferences. From there, our experienced tutors create a customised learning plan that targets the exact skills your child needs to develop.
              </p>
              <p>
                Sessions are available face-to-face at our Mickleham location or online via video call. We offer flexible scheduling to accommodate busy family routines, with after-school, evening, and weekend appointments available. Whether your child needs help catching up, keeping up, or getting ahead, our one-on-one approach ensures they receive the focused attention and tailored instruction that makes a real difference.
              </p>
              <p>
                Our tutors use proven teaching strategies, engaging resources, and regular progress monitoring to keep learning on track. We also provide ongoing communication with parents, sharing updates on progress and offering strategies you can use at home to support your child's learning. For specialised support, explore our <a href="/english-tutoring" className="text-orange-600 hover:underline font-medium">English tutoring</a> and <a href="/maths-tutoring" className="text-orange-600 hover:underline font-medium">maths tutoring</a> programs, or learn about our <a href="/ndis" className="text-orange-600 hover:underline font-medium">NDIS capacity building supports</a> for eligible participants.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of Individual Tutoring
            </h2>
            <p className="text-xl text-gray-600">
              Why one-on-one sessions deliver superior learning outcomes for students in Northern Melbourne
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our one-on-one tutoring programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                service={testimonial.service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Give Your Child the Individual Attention They Deserve
            </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Start with a free consultation to discuss your child's needs and create a personalised learning plan.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Book Free Consultation
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
