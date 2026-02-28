"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                <img src="/logo.jpg" alt="New Era Education Logo" className="w-full h-full object-cover rounded-xl" />
              </div>
              <span className="text-xl font-bold">New Era Education</span>
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Premium education support and intervention, servicing Mickleham and wider Melbourne.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61577979322687" 
                target="_blank" 
                rel="noopener" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/newera.education_/" 
                target="_blank" 
                rel="noopener" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {[
                { href: "/school-readiness", label: "School Readiness Program" },
                { href: "/english-tutoring", label: "English Tutoring" },
                { href: "/maths-tutoring", label: "Mathematics Tutoring" },
                { href: "/one-on-one", label: "One-on-One Tutoring" },
                { href: "/workshops", label: "Workshops" },
                { href: "/homeschooling-support", label: "Homeschooling Support" }
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/#about", label: "About Us" },
                { href: "/#testimonials", label: "Testimonials" },
                { href: "/#contact", label: "Contact" },
                { href: "/faq", label: "FAQ" },
                { href: "/ndis", label: "NDIS" }
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=New+Era+Education+Suite+4+Level+3+21+Cityside+Dr+Mickleham+VIC+3064" 
                  target="_blank" 
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <a 
                      href="tel:+61458498170" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      0458 498 170
                    </a>
                  </div>
                  <div>
                    <a 
                      href="tel:+61384670773" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      (03) 8467 0773
                    </a>
                  </div>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">info@neweralearning.com.au</span>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 8AM-8PM, Sat: 10AM-3PM</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-sm">
            &copy; 2025 New Era Education. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 