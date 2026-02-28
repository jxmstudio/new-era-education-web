'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star, Target, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Study Skills & Time Management",
    description: "Learn effective study techniques, organisation strategies, and time management skills that support academic success across all subjects."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Reading & Spelling",
    description: "Build confidence in literacy through targeted reading comprehension, phonics, spelling patterns, and vocabulary development."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Small Group Learning",
    description: "Collaborative learning in small groups that encourage peer support, engagement, and active participation."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Number Fluency",
    description: "Develop mathematical confidence through number sense, mental computation, problem-solving strategies, and mathematical reasoning."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Specialised Approaches",
    description: "Evidence-based literacy and numeracy programs tailored for students with diverse learning needs and learning differences."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Holiday Programs",
    description: "Intensive workshop programs during school holidays to consolidate learning, close gaps, or get ahead for the coming term."
  }
];

const testimonials = [
  {
    content: "The study skills workshop gave my daughter practical tools she uses every day. Her organisation and confidence have improved dramatically.",
    name: "Sarah M.",
    role: "Parent of Year 7 student",
    rating: 5,
    service: "Workshops"
  },
  {
    content: "My son attended the number fluency holiday program and it made such a difference. He's now much more confident with mental maths and problem-solving.",
    name: "David K.",
    role: "Parent of Year 5 student",
    rating: 5,
    service: "Workshops"
  },
  {
    content: "The reading workshop helped me understand phonics patterns I'd been struggling with. Now reading feels so much easier!",
    name: "Emma",
    role: "Year 4 student",
    rating: 5,
    service: "Workshops"
  }
];

export default function WorkshopsContent() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-purple-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Learning Workshops in Mickleham VIC
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Targeted workshops to enhance study skills, literacy, numeracy, and learning strategies
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Join our engaging workshops where students across Mickleham, Craigieburn, and Northern Melbourne develop essential learning skills in a collaborative, supportive small-group environment. Perfect for building confidence, closing learning gaps, and preparing for academic success.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <a href="/book">Book Workshop</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Workshops list */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Workshop Programs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer a range of workshops designed to strengthen essential learning skills for students across Mickleham, Craigieburn, Greenvale, Roxburgh Park, Wollert, and Northern Melbourne. Each workshop is led by experienced educators and delivered in small groups to ensure personalised attention and active engagement.
            </p>
          </motion.div>

          <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
            <li><strong>Study skills and time management:</strong> Learn how to organise notes, plan assignments, manage study time effectively, and develop exam preparation strategies.</li>
            <li><strong>Reading and spelling:</strong> Build reading fluency, comprehension, phonics knowledge, spelling patterns, and vocabulary through evidence-based approaches.</li>
            <li><strong>Number fluency:</strong> Strengthen mental maths, number sense, problem-solving skills, and mathematical reasoning in a supportive group setting.</li>
            <li><strong>Specialised literacy & numeracy approaches:</strong> Targeted programs for students with learning differences, using multisensory and structured methods tailored to individual needs.</li>
            <li><strong>Holiday programs:</strong> Intensive workshop blocks during school holidays to consolidate learning, address specific skill gaps, or get ahead for the upcoming term.</li>
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 bg-purple-50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Who Are Workshops For?
            </h3>
            <p className="text-gray-700 mb-4">
              Our workshops suit students from Foundation to secondary school who benefit from small-group learning. They're ideal for students who want to build confidence, develop new strategies, or strengthen foundational skills in a collaborative environment.
            </p>
            <p className="text-gray-700">
              Workshop programs complement our <a href="/one-on-one" className="text-purple-600 hover:underline font-medium">one-on-one tutoring</a>, <a href="/english-tutoring" className="text-purple-600 hover:underline font-medium">English tutoring</a>, and <a href="/maths-tutoring" className="text-purple-600 hover:underline font-medium">maths tutoring</a> services. For NDIS-eligible students, capacity building supports may be available—learn more on our <a href="/ndis" className="text-purple-600 hover:underline font-medium">NDIS page</a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Workshops?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small group sessions that combine expert teaching, peer learning, and practical skill-building for lasting results.
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
                accentColor="purple"
              />
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
              What Families Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from parents and students about their workshop experiences
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Give Your Child Essential Learning Skills?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our workshops and help your child develop confidence, effective study strategies, and the foundational skills they need for academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Book a Workshop
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Ask Questions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
