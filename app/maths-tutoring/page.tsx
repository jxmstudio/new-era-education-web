'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calculator, Target, Users, Star, TrendingUp, Clock, User, GraduationCap } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';

const features = [
  // Removed explicit VCE Maths Methods feature per FAQ update
  {
    icon: <Target className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Develop critical thinking and problem-solving strategies to tackle complex mathematical concepts."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Foundation Skills",
    description: "Build strong mathematical foundations from basic arithmetic to advanced algebra and geometry."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Exam Preparation",
    description: "Master exam techniques, time management, and stress reduction strategies for mathematics assessments."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Tracking",
    description: "Regular assessments and detailed progress reports to monitor improvement and guide learning."
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Individual Attention",
    description: "Personalised learning plans tailored to each student's specific strengths and areas for improvement."
  }
]

const testimonials = [
  {
    content: "The maths tutoring has completely transformed my daughter's confidence. She went from struggling with basic concepts to excelling in Year 10 mathematics.",
    name: "Jennifer S.",
    role: "Parent of Year 10 student", 
    rating: 5,
    service: "Maths Tutoring"
  },
  {
    content: "The VCE Maths Methods preparation was excellent. My son's tutor helped him understand complex calculus concepts and he achieved a great study score.",
    name: "Robert M.",
    role: "Parent of VCE student",
    rating: 5,
    service: "Maths Tutoring"
  },
  {
    content: "I love how the tutors make maths fun and easy to understand. I actually enjoy solving problems now!",
    name: "Alex K.",
    role: "Year 8 student",
    rating: 5,
    service: "Maths Tutoring"
  }
]

const yearLevels = [
  {
    level: "Foundation - Year 2",
    focus: "Basic number sense, addition, subtraction, shapes, and early problem-solving skills."
  },
  {
    level: "Years 3-6",
    focus: "Multiplication, division, fractions, decimals, geometry, and mathematical reasoning."
  },
  {
    level: "Years 7-10",
    focus: "Algebra, geometry, statistics, probability, and preparation for senior mathematics."
  },
  {
    level: "VCE Maths",
    focus: "Methods and Specialist Mathematics, functions, calculus, and exam preparation."
  }
]

const benefits = [
  "Qualified mathematics teachers with VIT registration",
  "Step-by-step problem-solving approaches",
  "Visual and hands-on learning methods",
  "Regular practice with past exam questions",
  "Individual attention to address specific weaknesses",
  "Confidence-building through gradual skill development"
]

export default function MathsTutoringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-red-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Expert Maths Tutoring
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                From Foundation to VCE - build confidence in mathematics with qualified teachers
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Make mathematics accessible and enjoyable with our expert tutors. We provide personalised support to help students excel.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
              What Makes Our Maths Tutoring Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mathematics support designed to build confidence, improve problem-solving skills, and achieve academic success.
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
                accentColor="red"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Year Levels Section */}
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
              Programs for All Year Levels
            </h2>
            <p className="text-xl text-gray-600">
              From early numeracy to VCE preparation, we have programs designed for every stage of mathematical learning
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yearLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="text-red-600 font-bold text-lg mb-3">
                  {level.level}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {level.focus}
                </p>
              </motion.div>
            ))}
          </div>
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
              Why Choose Our Maths Tutoring?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of expert mathematics instruction with qualified teachers
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
              Real results from our maths tutoring programs
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Mathematics?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join our maths tutoring program and watch your child's confidence and skills grow with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
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