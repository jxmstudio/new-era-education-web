'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Shield, Heart, Phone, Mail, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const supportAreas = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Individualised learning plans aligned to participant goals",
    description: "We work closely with families and support coordinators to create personalised learning plans that align with NDIS goals and objectives."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Literacy and numeracy tutoring (face-to-face and online)",
    description: "Comprehensive support in reading, writing, and mathematics, delivered in the format that works best for each participant."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Study skills, time management, and learning strategies",
    description: "Building essential skills for academic success and independent learning, tailored to individual needs and abilities."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Collaboration with families and support coordinators",
    description: "Regular communication and collaboration to ensure learning goals remain aligned with NDIS plans and family priorities."
  }
];

const supportCategories = [
  {
    category: "Capacity Building: Improved Daily Living",
    description: "Skills development and learning strategies to support daily living and independence."
  },
  {
    category: "Core Supports: assistance related to learning participation",
    description: "Direct support for learning participation where appropriate and aligned with NDIS plan goals."
  }
];

export default function NDISPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat text-white min-h-[500px]" 
               style={{ 
                 backgroundImage: `linear-gradient(to right, rgba(9, 47, 121, 0.8), rgba(0, 166, 138, 0.8)), url('/stock1.png')` 
               }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[500px]">
          <div className="text-center w-full">
            <MotionWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <img 
                  src="/NDIS-logo.png" 
                  alt="NDIS Logo" 
                  className="h-16 w-auto drop-shadow-lg"
                />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                NDIS Support at New Era Education
              </h1>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-white/90 max-w-4xl mx-auto drop-shadow-sm">
                New Era Education is proud to support NDIS participants with personalised tutoring and learning support. We work with families to align learning goals with NDIS plans, helping students build confidence, independence, and core skills.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* How We Support NDIS Participants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              How We Support NDIS Participants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced educators provide comprehensive learning support tailored to NDIS goals and participant needs.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {supportAreas.map((area, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        {area.icon}
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Using Your NDIS Funding */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Using Your NDIS Funding
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We can support participants who self-manage or plan-manage their NDIS funding. We'll provide clear invoices and documentation aligned with your plan goals. For details on eligibility and funding categories, please speak with your plan manager or visit the NDIS website.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Support Categories
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Typical educational alignment; non-legal, informational
            </p>
          </MotionWrapper>

          <div className="space-y-6">
            {supportCategories.map((category, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {category.category}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Getting Started
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to discuss NDIS-aligned learning support? Contact our team to create a tailored plan.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary-dark px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/contact">Enquire Now</a>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            For official information about the National Disability Insurance Scheme (NDIS), visit the{" "}
            <a 
              href="https://www.ndis.gov.au/" 
              target="_blank" 
              rel="noopener"
              className="text-primary hover:text-primary-dark underline inline-flex items-center"
            >
              NDIS website
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
