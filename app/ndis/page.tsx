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

const ndisFAQs = [
  {
    question: "Can I use my NDIS funding for tutoring services?",
    answer: "Yes, educational support like tutoring can be funded through your NDIS plan under specific categories such as Capacity Building (Improved Daily Living) or Core Supports (assistance related to learning participation). We recommend discussing this with your plan manager or support coordinator to ensure our services align with your plan goals."
  },
  {
    question: "What NDIS support categories cover educational support?",
    answer: "Educational support typically falls under 'Capacity Building: Improved Daily Living' for skill development and learning strategies, or 'Core Supports' for direct assistance with learning participation. The specific category depends on your individual plan and goals."
  },
  {
    question: "Do I need to be registered with NDIS to access your services?",
    answer: "While we work with NDIS participants, you don't need to have NDIS funding to access our tutoring services. We welcome all students and can discuss payment options that work for you, whether through NDIS funding, private payment, or a combination."
  },
  {
    question: "How do I claim tutoring through my NDIS plan?",
    answer: "If you self-manage or plan-manage your NDIS funding, we'll provide detailed invoices that you can submit for reimbursement. We include all necessary information aligned with your plan goals. For agency-managed plans, please speak with your support coordinator about how we can work together."
  }
];

export default function NDISPage() {
  const [openFAQItems, setOpenFAQItems] = useState<number[]>([]);

  const toggleFAQItem = (index: number) => {
    setOpenFAQItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
                New Era Education is proud to support NDIS participants with capacity building learning support. We work with families to align learning goals with NDIS plans, helping students build confidence, independence, and core skills.
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
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We support participants who self-manage or plan-manage their NDIS funding. 
              If you're unsure whether these supports fit your child's plan, get in touch with us first — we're happy to guide you. 
              We also provide clear, NDIS-aligned invoices and documentation. Your plan manager can then help confirm funding and categories.
            </p>
          </MotionWrapper>

          {/* Age-Based Comparison Table */}
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary-dark text-white">
                    <th className="px-6 py-4 text-left font-semibold">Area</th>
                    <th className="px-6 py-4 text-left font-semibold">Under 9</th>
                    <th className="px-6 py-4 text-left font-semibold">9 and Older</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Focus</td>
                    <td className="px-6 py-4 text-gray-600">Foundations & engagement</td>
                    <td className="px-6 py-4 text-gray-600">Independence & real-world skills</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Delivery</td>
                    <td className="px-6 py-4 text-gray-600">Play-based, visual, routine-focused</td>
                    <td className="px-6 py-4 text-gray-600">Practical, goal-driven</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Outcomes</td>
                    <td className="px-6 py-4 text-gray-600">Participation in routines</td>
                    <td className="px-6 py-4 text-gray-600">Community & work participation</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Role</td>
                    <td className="px-6 py-4 text-gray-600">Developmental support</td>
                    <td className="px-6 py-4 text-gray-600">Capacity building & transition support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Supporting Your Child's Independence */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Supporting Your Child's Independence
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              English & Maths Capacity-Building Supports (NDIS)
            </h3>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-600 leading-relaxed">
                We use practical English and maths to help children and young people grow their confidence, independence, and everyday life skills.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                This is not tutoring — it's NDIS capacity-building support focused on helping your child participate more independently at home, school, and in the community.
              </p>
            </div>
          </MotionWrapper>

          {/* Children 9 and Under */}
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl">Children 9 and Under</CardTitle>
                <p className="text-blue-100 mt-2">Building strong foundations through everyday learning</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  For younger children, we focus on learning through play, routines, and real-life experiences to support participation in daily activities.
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                    We Help With
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Understanding instructions and routines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Early reading, listening, and communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Counting and number awareness in everyday activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Confidence, attention, and engagement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">How Often?</h4>
                  <p className="text-gray-700 mb-2">🗓 1–2 sessions per week</p>
                  <p className="text-sm text-gray-600">Consistent sessions help build skills without overwhelming your child.</p>
                </div>

                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What Parents Often Notice</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      Better participation in daily routines
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      More confidence and willingness to try
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      Less frustration around learning
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* Children & Young People 9 and Over */}
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="text-2xl">Children & Young People 9 and Over</CardTitle>
                <p className="text-purple-100 mt-2">Building skills for independence and community life</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  For older children and teens, we focus on practical skills they need to manage daily life more independently.
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-2" />
                    We Help With
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Reading signs, timetables, forms, and instructions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Developing writing skills such as messages, emails, and simple forms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Money skills like budgeting and shopping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Time management and planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Speaking up and asking for help</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">How Often?</h4>
                  <p className="text-gray-700 mb-2">🗓 1–3 sessions per week</p>
                  <p className="text-sm text-gray-600">The number of sessions depends on your child's goals and support needs.</p>
                </div>

                <div className="bg-purple-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What Parents Often Notice</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      Greater independence
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      Improved confidence in everyday tasks
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      Less reliance on others
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* How does this fit in with NDIS support */}
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  How does this fit in with NDIS support?
                </h3>
                <ul className="space-y-4 max-w-3xl mx-auto">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Linked to your child's NDIS goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Focused on functional skills and participation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Designed to reduce long-term support needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </MotionWrapper>

          {/* Parent FAQ Guide */}
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Parent FAQ Guide
              </h3>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Is this the same as tutoring?</h4>
                  <p className="text-gray-700">No. These supports focus on life skills, not school curriculum. We use English and maths to help children function more independently at home, school, work, and in the community.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Can this be funded by the NDIS?</h4>
                  <p className="text-gray-700 mb-3">Yes. Supports are typically delivered under:</p>
                  <ul className="ml-6 space-y-1 text-gray-700">
                    <li className="list-disc">Capacity Building – Improved Daily Living</li>
                    <li className="list-disc">Capacity Building – Improved Learning</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">How do I know how many sessions my child needs?</h4>
                  <p className="text-gray-700 mb-3">We usually recommend:</p>
                  <ul className="ml-6 space-y-1 text-gray-700">
                    <li className="list-disc">1–2 sessions per week for children under 9</li>
                    <li className="list-disc">1–3 sessions per week for children 9 and over</li>
                  </ul>
                  <p className="text-gray-700 mt-3">This can change based on your child's goals, needs, and NDIS plan.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Will you work with parents and carers?</h4>
                  <p className="text-gray-700">Absolutely. We share strategies and tools so skills can be practised at home, helping your child make faster and more lasting progress.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Can these supports help with confidence and anxiety?</h4>
                  <p className="text-gray-700">Yes. Many children feel anxious around reading, writing, or numbers. We gently build confidence and reduce avoidance by breaking tasks into manageable steps.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Do you work alongside schools or other therapists?</h4>
                  <p className="text-gray-700">Yes, where appropriate. We focus on functional skills and can complement what your child is working on with teachers or allied health professionals.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">How will progress be tracked?</h4>
                  <p className="text-gray-700">We set clear goals, monitor progress, and provide updates that align with NDIS reporting requirements.</p>
                </div>
              </div>
            </div>
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

      {/* NDIS FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about NDIS funding and our educational support services
            </p>
          </MotionWrapper>

          <div className="space-y-4 mb-8">
            {ndisFAQs.map((faq, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleFAQItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      {openFAQItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </CardHeader>
                  {openFAQItems.includes(index) && (
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Have More Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Visit our general FAQ page for more information about our tutoring services, 
                  booking process, and what to expect.
                </p>
                <Button asChild variant="outline">
                  <a href="/faq">View All Frequently Asked Questions</a>
                </Button>
              </CardContent>
            </Card>
          </MotionWrapper>
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
