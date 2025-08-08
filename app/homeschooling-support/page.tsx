'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, GraduationCap, BookOpen, Users, Calendar, Laptop, ClipboardList, TrendingUp, Clock, User, BarChart, MapPin, Phone, Mail, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';
import ContactForm from "@/components/forms/ContactForm";



const features = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Curriculum Guidance",
    description: "Expert advice on curriculum selection, planning, and implementation tailored to your child's learning needs."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Assessment Support",
    description: "Develop effective assessment strategies and track your child's progress with professional guidance."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Resource Recommendations",
    description: "Access curated lists of educational resources, books, and materials suitable for homeschooling environments."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Parent Consultation",
    description: "Receive personalized consultation to address your specific homeschooling challenges and questions."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Learning Plans",
    description: "Develop customized learning plans that balance structure with flexibility for your homeschooling environment."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Home Visits",
    description: "In-home consultations available to provide personalized support in your learning environment."
  }
];

const benefits = [
  "Flexible scheduling to fit your family's needs",
  "Individual consultations tailored to your situation",
  "Ongoing support and regular progress reviews",
  "Qualified teachers with homeschooling expertise",
  "Comprehensive curriculum guidance",
  "Access to quality educational resources"
];

const testimonials = [
  {
    content: "The homeschooling support has been invaluable. The curriculum guidance helped me create a structured learning plan that works for our family.",
    name: "Sarah L.",
    role: "Homeschooling parent",
    rating: 5,
    service: "Homeschooling Support"
  },
  {
    content: "The assessment support gave me confidence in tracking my children's progress. The resources recommended have been perfect for our learning style.",
    name: "Michael T.",
    role: "Homeschooling parent",
    rating: 5,
    service: "Homeschooling Support"
  },
  {
    content: "The parent consultation sessions have helped me overcome challenges and find creative solutions for teaching difficult subjects.",
    name: "Lisa K.",
    role: "Homeschooling parent",
    rating: 5,
    service: "Homeschooling Support"
  }
];

export default function HomeschoolingSupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-indigo-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Homeschooling Support
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Expert guidance and resources for successful homeschooling families
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Comprehensive support services for homeschooling families. From curriculum guidance to assessment support, we provide the expertise you need for a successful homeschooling journey.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
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
              Why Choose Our Homeschooling Support?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert guidance and support across all aspects of homeschooling, helping you create an effective and enjoyable learning environment for your children.
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
                accentColor="indigo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of Our Support Program
            </h2>
            <p className="text-xl text-gray-600">
              Why our homeschooling support delivers superior outcomes for families
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
      <section className="py-20 px-4">
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
              Real results from our homeschooling support programs
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
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Homeschooling Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our homeschooling support team to discuss how we can help your family succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
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