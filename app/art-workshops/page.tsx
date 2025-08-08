'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Palette, Clock, Users, Star, Brush, Heart, Coffee } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/ui/feature-card';
import TestimonialCard from '@/components/ui/testimonial-card';

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Creative Expression",
    description: "Explore various art mediums and techniques to express creativity and imagination."
  },
  {
    icon: <Brush className="w-6 h-6" />,
    title: "Fine Motor Skills",
    description: "Develop essential fine motor skills through drawing, painting, and crafting activities."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Group Learning",
    description: "Collaborative art projects that build social skills and teamwork."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Art Appreciation",
    description: "Learn about famous artists and different art styles from around the world."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Self-Confidence",
    description: "Build confidence through creative achievement and artistic self-expression."
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Holiday Programs",
    description: "Special themed workshops during school holidays for intensive creative experiences."
  }
];

const testimonials = [
  {
    content: "The art workshops have boosted my daughter's confidence so much. She's always excited to show us her latest creations and has developed a real love for painting.",
    name: "Sarah M.",
    role: "Parent of 8-year-old",
    rating: 5,
    service: "Art Workshops"
  },
  {
    content: "My son's fine motor skills have improved dramatically through the art workshops. The teachers are patient and encouraging with all the children.",
    name: "David K.",
    role: "Parent of 6-year-old",
    rating: 5,
    service: "Art Workshops"
  },
  {
    content: "I love coming to art workshops! We get to try different materials and techniques, and I've learned so much about colors and shapes.",
    name: "Emma",
    role: "Age 9",
    rating: 5,
    service: "Art Workshops"
  }
];

const scheduleInfo = [
  {
    day: "Friday",
    time: "10:00 AM - 11:00 AM",
    type: "Regular Workshop"
  },
  {
    day: "Saturday", 
    time: "10:00 AM - 11:00 AM",
    type: "Regular Workshop"
  },
  {
    day: "Sunday",
    time: "10:00 AM - 11:00 AM", 
    type: "Regular Workshop"
  }
];

export default function ArtWorkshopsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-purple-500 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Art Workshops
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Creative expression through art, fostering imagination and fine motor skills development
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Join our engaging art workshops where children explore creativity, develop essential skills, and discover the joy of artistic expression in a supportive environment.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  <a href="/book">Book Art Workshop</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What Makes Our Art Workshops Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our creative art workshops are designed to inspire imagination while developing essential skills that benefit children academically and personally.
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

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Workshop Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Regular art workshops throughout the week with special holiday programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {scheduleInfo.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 font-bold text-lg mb-2">
                  {schedule.day}
                </div>
                <div className="text-gray-900 font-semibold mb-2">
                  {schedule.time}
                </div>
                <div className="text-sm text-gray-600">
                  {schedule.type}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-purple-100 rounded-xl p-6 inline-block">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Holiday Programs Available
              </h3>
              <p className="text-purple-700">
                Join our themed art workshops during school holidays for intensive creative experiences.
              </p>
            </div>
          </motion.div>
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
              Hear from parents and students about their art workshop experiences
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
              Ready to Unleash Your Child's Creativity?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join our art workshops and watch your child develop artistic skills, confidence, and a love for creative expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Book Art Workshop
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