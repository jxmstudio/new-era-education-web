'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Shield, Heart, Phone, Mail, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const supportAreas = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Goal-aligned capacity building supports (based on participant goals)",
    description: "We work closely with families and support coordinators across Mickleham, Craigieburn, and Greenvale to create personalised learning plans that align with NDIS goals and objectives. Our approach focuses on building skills that support your child's independence at home, school, and in the community."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Everyday literacy & numeracy for independence (e.g., instructions, forms, timetables, money skills)",
    description: "Comprehensive support in reading, writing, and mathematics, delivered in the format that works best for each participant. We focus on practical, real-world applications like reading public transport schedules, understanding forms, managing money, and following written instructions."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Executive functioning support (routines, planning, attention, task breakdown)",
    description: "Building essential skills for academic success and independent living, tailored to individual needs and abilities. We help participants develop strategies for organizing tasks, managing time, maintaining routines, and breaking complex activities into manageable steps."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Family collaboration strategies to support consistency at home",
    description: "Regular communication and collaboration with families across Northern Melbourne to ensure learning goals remain aligned with NDIS plans and family priorities. We provide practical strategies that families can use at home to reinforce skills and support independence."
  }
];

const supportCategories = [
  {
    category: "Capacity Building: Improved Daily Living",
    description: "Skills development and learning strategies to support daily living and independence. This includes functional literacy and numeracy that help participants navigate everyday situations with greater confidence."
  },
  {
    category: "Core Supports: assistance related to learning participation",
    description: "Direct support for learning participation where appropriate and aligned with NDIS plan goals. This may include assistance accessing community learning activities and developing skills for greater independence."
  }
];

const ndisFAQs = [
  {
    question: "Is this the same as tutoring?",
    answer: "No. Our sessions focus on capacity building and functional skills that support participation and independence. We may use everyday literacy and numeracy as tools (for example, routines, timetables, instructions, forms, or money skills), rather than delivering school curriculum tutoring. Our goal is to help participants function more independently in their daily lives."
  },
  {
    question: "What ages do you support?",
    answer: "We support children and young people with goals related to communication, routines, participation, and independence. For younger children, we use play-based and routine-based approaches aligned with early childhood supports. For older children and teens, we focus on practical life skills and community participation."
  },
  {
    question: "Can NDIS funding be used for these supports?",
    answer: "It depends on the participant's plan, goals, and plan management type. We work with self-managed and plan-managed participants across Mickleham, Craigieburn, Greenvale, Roxburgh Park, Wollert, and surrounding Northern Melbourne suburbs. We provide detailed invoices and session notes to help your plan manager assess claims."
  },
  {
    question: "What support categories might apply?",
    answer: "This depends on the plan. Supports are often linked to Capacity Building categories such as Improved Daily Living or Improved Learning. If you share your goals, we can help you describe the support so you can confirm with your plan manager. This is general information only, not funding advice."
  },
  {
    question: "Do you work with support coordinators and allied health providers?",
    answer: "Yes—where appropriate and with consent, we can collaborate with your support coordinator, occupational therapist, speech pathologist, or other providers to keep supports aligned with participant goals. Many of our participants across Northern Melbourne benefit from this coordinated approach."
  },
  {
    question: "How is progress tracked?",
    answer: "We agree on functional goals at the start, track progress over time using observation and practical assessment, and provide updates aligned to the participant's goals. Reports are available on request and formatted to meet NDIS reporting requirements."
  },
  {
    question: "Are you a registered NDIS provider?",
    answer: "We work with self-managed and plan-managed participants. Many participants in these plan management types can choose to work with non-registered providers. Please confirm with your plan manager whether our services align with your funding arrangement."
  },
  {
    question: "How do we get started?",
    answer: "Send an enquiry with your goals (or plan extracts you're comfortable sharing), and we'll recommend a simple starting plan and session frequency to trial. We serve families across Mickleham, Craigieburn, Greenvale, and surrounding Northern Melbourne areas."
  }
];

export default function NDISContent() {
  const [openFAQItems, setOpenFAQItems] = useState<number[]>([]);

  const toggleFAQItem = (index: number) => {
    setOpenFAQItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                NDIS Capacity Building & Learning Support in Mickleham VIC
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                We support NDIS participants with capacity-building supports that strengthen everyday communication, routines, confidence, and independence. Sessions focus on functional skills and participation at home, school, and in the community, aligned to the participant's goals and plan.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <a href="/contact">Get in Touch</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section id="supports" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How We Support Participants
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our supports are designed around the participant's NDIS plan goals and individual needs
              </p>
            </div>
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-blue-600">{area.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Progress notes and updates aligned to goals
              </h3>
              <p className="text-gray-700 mb-4">
                We provide clear progress notes and regular updates that align with participant goals. Reports are available on request and formatted to meet NDIS reporting requirements. We also work with <a href="/one-on-one" className="text-blue-600 hover:underline font-medium">one-on-one tutoring</a> approaches when appropriate for participant goals.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Using Your NDIS Funding */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Using Your NDIS Funding
              </h2>
              <p className="text-xl text-gray-600">
                We support self-managed and plan-managed participants across Mickleham and Northern Melbourne. Funding depends on plan goals and what's considered reasonable and necessary under the NDIS. If you're unsure, we can provide clear invoices and session notes for your plan manager to review.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Self-Managed Participants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    If you self-manage your NDIS plan, you have flexibility to choose your providers. We provide detailed invoices that you can submit for reimbursement. We'll work with you to ensure our supports align with your plan goals and budget.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Plan-Managed Participants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    If you have a plan manager, we can provide the documentation they need to process claims. Your plan manager will confirm whether our supports fit within your funding categories and budget. We're happy to discuss with your plan manager if needed.
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>

          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
              <p className="text-sm text-gray-700">
                <strong>Disclaimer:</strong> This information is general only and not funding advice. Always check with your plan manager or support coordinator to confirm whether specific supports are reasonable and necessary for your plan. For official NDIS guidance, visit{" "}
                <a 
                  href="https://www.ndis.gov.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  ndis.gov.au
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Support Categories
              </h2>
              <p className="text-xl text-gray-600">
                Our supports commonly align with the following NDIS categories. This is general information only—not funding advice.
              </p>
            </div>
          </MotionWrapper>

          <div className="space-y-6">
            {supportCategories.map((category, index) => (
              <MotionWrapper 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* NDIS FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                NDIS Support FAQs
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Common questions about our NDIS capacity building supports
              </p>
              <p className="text-base text-gray-600">
                For general tutoring questions, visit our{" "}
                <a href="/faq" className="text-blue-600 hover:underline font-medium">
                  main FAQ page
                </a>
              </p>
            </div>
          </MotionWrapper>

          <div className="space-y-4">
            {ndisFAQs.map((faq, index) => (
              <MotionWrapper 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => toggleFAQItem(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-start gap-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      {openFAQItems.includes(index) && (
                        <p className="text-gray-600 mt-2">{faq.answer}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      {openFAQItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                </Card>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your child's NDIS plan and how we can support their goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Enquiry
              </motion.a>
              <motion.a
                href="tel:+61458498170"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0458 498 170
              </motion.a>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
