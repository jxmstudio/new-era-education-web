'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, PenTool, Users, Star, Clock, Target, TrendingUp, User, GraduationCap } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "VCE English Preparation",
    description: "Comprehensive preparation for VCE English Units 1-4, including text analysis, essay writing, and exam techniques."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Essay Writing Skills",
    description: "Develop strong analytical and creative writing skills with structured approaches to different essay types."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Text Analysis",
    description: "Master the art of analyzing texts, understanding themes, and developing critical thinking skills."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Creative Writing",
    description: "Enhance creative writing abilities with techniques for storytelling, character development, and narrative structure."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Individual Attention",
    description: "Personalised learning plans tailored to each student's specific strengths and areas for improvement."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progress Tracking", 
    description: "Regular assessments and detailed progress reports to monitor improvement and guide learning."
  }
]

const testimonials = [
  {
    content: "The English tutoring helped my daughter develop confidence in her writing and analysis skills. Her VCE English scores improved dramatically.",
    name: "Rachel P.",
    role: "Parent of Year 12 student",
    rating: 5,
    service: "English Tutoring"
  },
  {
    content: "My son's essay writing went from struggling to excelling. The tutors really understand how to teach English comprehension and writing skills.",
    name: "Mark T.", 
    role: "Parent of Year 10 student",
    rating: 5,
    service: "English Tutoring"
  },
  {
    content: "The text analysis techniques I learned helped me understand literature in a completely new way. I actually enjoy English class now!",
    name: "Sophie K.",
    role: "Year 11 student",
    rating: 5, 
    service: "English Tutoring"
  }
]

const yearLevels = [
  {
    level: "Foundation - Year 2",
    focus: "Phonics, reading comprehension, basic writing skills, and vocabulary development."
  },
  {
    level: "Years 3-6",
    focus: "Reading comprehension strategies, creative writing, grammar, and spelling improvement."
  },
  {
    level: "Years 7-10",
    focus: "Essay writing, text analysis, persuasive writing, and preparation for senior years."
  },
  {
    level: "VCE English",
    focus: "Units 1-4 preparation, text analysis, comparative essays, and exam techniques."
  }
]

const benefits = [
  "Qualified English teachers with VIT registration",
  "Personalised learning plans tailored to individual needs",
  "Small group and one-on-one sessions available",
  "Regular progress tracking and parent communication",
  "Homework support and assignment assistance",
  "Exam preparation and study skills development"
]

export default function EnglishTutoringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-blue-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Expert English Tutoring
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                From Foundation to VCE - comprehensive English education support
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Our qualified English teachers help students develop strong literacy skills, critical thinking, and a genuine love for reading and writing across all year levels.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
              What Makes Our English Tutoring Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive English support designed to build confidence, improve academic performance, and foster a genuine love for literature and writing.
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
                accentColor="blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Year Levels */}
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
              From early literacy to VCE preparation, we have programs designed for every stage of learning
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
                <div className="text-blue-600 font-bold text-lg mb-3">
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
              Why Choose Our English Tutoring?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of expert English instruction with qualified teachers
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
              Real results from our English tutoring programs
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Excel in English?
            </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
               Start with a free consultation to discuss your child's needs and create a personalised English learning plan.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
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