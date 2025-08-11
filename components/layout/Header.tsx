"use client"

import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white sticky top-0 z-50 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 min-h-[72px]">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <img src="/logo.jpg" alt="New Era Education" className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold leading-none hidden sm:block group-hover:text-primary transition-colors duration-300">New Era Education</span>
            </Link>
          </motion.div>
          
          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/#home" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
                Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/#about" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
                About
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <div className="relative group">
              <motion.button
                className="flex items-center gap-1 whitespace-nowrap hover:text-gray-200 transition font-medium leading-none"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-xl border border-gray-700 py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {[
                      { href: "/school-readiness", label: "School Readiness" },
                      { href: "/english-tutoring", label: "English Tutoring" },
                      { href: "/maths-tutoring", label: "Maths Tutoring" },
                      { href: "/one-on-one", label: "One-on-One" },
                      { href: "/workshops", label: "Workshops" },
                      { href: "/homeschooling-support", label: "Homeschooling Support" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/faq" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
                FAQ
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/comparison" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
                Why Choose Us
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/team" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
                Team
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/#contact" className="whitespace-nowrap hover:text-gray-200 transition font-medium leading-none">
                Contact
              </Link>
            </motion.div>
          </nav>
          
          {/* Right: Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 whitespace-nowrap">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="https://new-era-education.ud.io"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 rounded-xl px-3 py-2 font-medium leading-none hover:bg-white/10"
              >
                Parent Portal
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/#contact"
                className="border border-white/20 rounded-xl px-3 py-2 font-medium leading-none hover:bg-white/10"
              >
                Enquire Now
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/book"
                className="bg-blue-600 rounded-xl px-3 py-2 font-medium leading-none hover:bg-blue-700"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-white/15"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/comparison", label: "Why Choose Us" },
                { href: "/team", label: "Team" },
                { href: "/#contact", label: "Contact" }
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="block hover:text-gray-200 transition font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Services Dropdown */}
              <div>
                <motion.button 
                  className="flex items-center justify-between w-full hover:text-gray-200 transition font-medium"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-2 overflow-hidden"
                    >
                      {[
                        { href: "/school-readiness", label: "School Readiness" },
                        { href: "/english-tutoring", label: "English Tutoring" },
                        { href: "/maths-tutoring", label: "Maths Tutoring" },
                        { href: "/one-on-one", label: "One-on-One" },
                        { href: "/workshops", label: "Workshops" },
                        { href: "/homeschooling-support", label: "Homeschooling Support" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link 
                            href={item.href} 
                            className="block text-gray-300 hover:text-gray-100 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-2 space-y-2">
                <motion.div whileHover={{ y: -1 }}>
                  <Link
                    href="https://new-era-education.ud.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border border-white/20 rounded-xl px-3 py-2 font-medium leading-none hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Parent Portal
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1 }}>
                  <Link
                    href="/#contact"
                    className="block text-center border border-white/20 rounded-xl px-3 py-2 font-medium leading-none hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enquire Now
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -1 }}>
                  <Link
                    href="/book"
                    className="block text-center bg-blue-600 rounded-xl px-3 py-2 font-medium leading-none hover:bg-blue-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 