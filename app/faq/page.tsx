"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, GraduationCap, BookOpen, Calendar } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { MotionWrapper } from "@/components/ui/motion-wrapper"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    question: "What qualifications do your tutors have?",
    answer: "All our tutors are qualified teachers with VIT (Victorian Institute of Teaching) registration. They have completed university degrees in education and have 10+ years of teaching experience in Victorian schools.",
    category: "General"
  },
  {
    question: "How much do tutoring sessions cost?",
    answer: "Our pricing varies based on the type of service and session length. We offer competitive rates starting from $60 per hour. Contact us for a detailed pricing structure and to discuss your specific needs.",
    category: "Pricing"
  },
  {
    question: "Do you offer online tutoring?",
    answer: "Yes, we offer both in-person and online tutoring sessions. Online sessions are conducted via secure video conferencing platforms and are just as effective as in-person sessions.",
    category: "Services"
  },
  {
    question: "What subjects do you tutor?",
    answer: "We specialise in English and Mathematics from Foundation to Year 12, including VCE English. We also offer school readiness programs for young children.",
    category: "Services"
  },
  {
    question: "How do I book a consultation?",
    answer: "You can book a free 30-minute consultation through our website booking form, by calling us, or by sending us an email. We'll discuss your child's needs and create a personalised learning plan.",
    category: "Booking"
  },
  {
    question: "Where is your tutoring available?",
    answer: "We’re located in Mickleham, in the northern suburbs of Victoria. We also provide online tutoring, bringing quality support to students across Melbourne and beyond.",
    category: "General"
  },
  {
    question: "How often should my child attend tutoring?",
    answer: "This depends on your child's needs and goals. Most students benefit from weekly sessions, but we can recommend a schedule based on their current academic level and objectives.",
    category: "Services"
  },
  {
    question: "Do you provide homework help?",
    answer: "Yes, we can help with homework, assignment preparation, and exam revision. Our tutors work with your child's school curriculum to provide targeted support.",
    category: "Services"
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours notice for session cancellations. This allows us to offer the time slot to other students. Emergency cancellations are handled on a case-by-case basis.",
    category: "Booking"
  },
  {
    question: "Do you offer group sessions (up to 6 students)?",
    answer: "We primarily offer one-on-one tutoring to ensure personalised attention. However, we can arrange small group sessions (up to 6 students) for siblings or friends studying the same subject.",
    category: "Services"
  },
  {
    question: "How do you track student progress?",
    answer: "We provide regular progress reports and maintain open communication with parents. We also conduct periodic assessments to measure improvement and adjust learning plans accordingly.",
    category: "General"
  },
  {
    question: "What age groups do you work with?",
    answer: "We work with students from Foundation (age 5-6) through to Year 12. Our school readiness program is designed for children aged 4-6 preparing for their first year of school.",
    category: "Services"
  }
]

const categories = ["All", "General", "Services", "Pricing", "Booking"]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat text-white min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]" 
               style={{ 
                 backgroundImage: `linear-gradient(to right, rgba(9, 47, 121, 0.7), rgba(0, 166, 138, 0.7)), url('/stock1.png')` 
               }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="text-center w-full">
            <MotionWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                Frequently Asked Questions
              </h1>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-sm">
                Find answers to common questions about our tutoring services, 
                booking process, and what to expect from our programs.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We understand that choosing the right tutoring service for your child is an important decision. 
              That's why we've compiled answers to the most common questions parents ask about our programs, 
              teaching methods, and booking process.
            </p>
          </MotionWrapper>
          
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Qualified Educators</h3>
                <p className="text-gray-600 text-sm">Learn about our teachers' qualifications and experience</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Our Programs</h3>
                <p className="text-gray-600 text-sm">Discover our range of subjects and age groups</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Booking Process</h3>
                <p className="text-gray-600 text-sm">Find out how easy it is to get started</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <MotionWrapper
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="mb-2 hover:scale-105 transition-transform duration-200"
                  >
                    {category}
                  </Button>
                </MotionWrapper>
              ))}
            </div>
          </MotionWrapper>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <Card className="hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {faq.question}
                      </CardTitle>
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {openItems.includes(index) && (
                    <MotionWrapper
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </MotionWrapper>
                  )}
                </Card>
              </MotionWrapper>
            ))}
          </div>

          {/* Contact CTA */}
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="mt-16 text-center">
              <Card className="bg-primary/5 border-primary/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary rounded-full blur-xl"></div>
                </div>
                
                <CardContent className="pt-6 relative z-10">
                  <MotionWrapper
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Still Have Questions?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Can't find the answer you're looking for? We're here to help! 
                      Contact us and we'll get back to you as soon as possible.
                    </p>
                  </MotionWrapper>
                  
                  <MotionWrapper
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <MotionWrapper
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.6,
                        type: "spring",
                        stiffness: 150 
                      }}
                      viewport={{ once: true }}
                    >
                      <Button asChild className="hover:scale-105 transition-transform duration-200">
                        <a href="/contact">Contact Us</a>
                      </Button>
                    </MotionWrapper>
                    
                    <MotionWrapper
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.8,
                        type: "spring",
                        stiffness: 150 
                      }}
                      viewport={{ once: true }}
                    >
                      <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-200">
                        <a href="/book">Book Consultation</a>
                      </Button>
                    </MotionWrapper>
                  </MotionWrapper>
                </CardContent>
              </Card>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, #2563eb 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px)`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Getting Started is Easy
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to begin your child's learning journey with New Era Education
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Book Consultation",
                description: "Schedule your free 30-minute consultation to discuss your child's needs and goals.",
                icon: <Calendar className="w-6 h-6" />
              },
              {
                step: "2", 
                title: "Create Learning Plan",
                description: "We'll develop a personalised learning plan tailored to your child's unique learning style.",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                step: "3",
                title: "Start Learning",
                description: "Begin your tutoring sessions and watch your child's confidence and skills grow!",
                icon: <GraduationCap className="w-6 h-6" />
              }
            ].map((item, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 mt-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
          
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild className="hover:scale-105 transition-transform duration-200">
              <a href="/book">Book Your Free Consultation</a>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      <Footer />
    </div>
  )
} 