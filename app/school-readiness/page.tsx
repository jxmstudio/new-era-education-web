'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, GraduationCap, BookOpen, Calculator, Users, Star, Baby, Clock, Target, TrendingUp } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Literacy Foundations",
    description: "Phonics, letter recognition, early reading skills, and vocabulary development to build strong foundations."
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Numeracy Skills",
    description: "Number recognition, counting, basic shapes, and early mathematical concepts for school success."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Social Development",
    description: "Communication skills, sharing, cooperation, and emotional regulation in group settings."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Fine Motor Skills",
    description: "Pencil grip, cutting, drawing, and other essential hand-eye coordination skills."
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "School Readiness",
    description: "Transition preparation including routine management and classroom behaviour expectations."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Individual Assessment", 
    description: "Personalised evaluation to identify strengths and areas for development before starting school."
  }
]

const programStructure = [
  {
    age: "4-5 years",
    focus: "Early preparation and skill building",
    activities: ["Letter and number recognition", "Basic phonics", "Social skills development"]
  },
  {
    age: "5-6 years",
    focus: "School readiness preparation",
    activities: ["Reading readiness", "Writing skills", "Mathematical thinking"]
  },
  {
    age: "6+ years",
    focus: "Foundation year support",
    activities: ["School transition support", "Homework assistance", "Confidence building"]
  }
]

const benefits = [
  "Smooth transition to formal schooling",
  "Builds confidence and independence",
  "Develops essential learning skills",
  "Reduces anxiety about starting school",
  "Creates a love for learning",
  "Prepares children for academic success"
]

const testimonials = [
  {
    content: "The school readiness program gave my daughter the confidence she needed to start school. She was well-prepared and excited to learn!",
    name: "Sarah M.",
    role: "Parent of Foundation student",
    rating: 5,
    service: "School Readiness"
  },
  {
    content: "My son's literacy and numeracy skills improved dramatically. The program made the transition to school so much easier.",
    name: "Michael T.", 
    role: "Parent of Year 1 student",
    rating: 5,
    service: "School Readiness"
  },
  {
    content: "The social skills development was invaluable. My child learned how to work with others and communicate effectively.",
    name: "Emma R.",
    role: "Parent of Foundation student", 
    rating: 5,
    service: "School Readiness"
  }
]

export default function SchoolReadinessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-emerald-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                School Readiness Program — Coming soon…
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Taking interest for group session enrolments now! Our comprehensive school readiness program builds the essential skills and confidence children need to thrive in their first years of school.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <a href="/book">Join Class</a>
                </Button>
              </div>
            </div>
            <div className="bg-white/95 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Are you a parent wondering…</h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">•</span>
                  <span>How can I give my child the best start to school?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">•</span>
                  <span>How can I make these early years meaningful and productive?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3">•</span>
                  <span>Will they be confident and resilient in new social situations?</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                If these questions sound familiar, you've come to the right place. We help the process for your child's early development.
              </p>
            </div>
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
              What Our Program Covers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive school readiness program addresses all essential areas of development needed for a successful start to school.
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
                accentColor="emerald"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
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
              Program Structure
            </h2>
            <p className="text-xl text-gray-600">
              Age-appropriate programs designed to meet your child's developmental needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programStructure.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="text-green-600 font-bold text-xl mb-3">
                  {program.age}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {program.focus}
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {program.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
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
              Benefits of Our Program
            </h2>
            <p className="text-xl text-gray-600">
              Why our school readiness program delivers superior outcomes for children
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
              Real results from our school readiness programs
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Prepare Your Child for School Success?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Start with a free consultation to discuss your child's needs and create a personalised school readiness plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
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