"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black backdrop-blur-md shadow-sm border-b border-gray-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <img src="/logo.jpg" alt="New Era Education" className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold text-white hidden sm:block group-hover:text-primary transition-colors duration-300">New Era Education</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/#home" className="text-white hover:text-primary transition-colors font-medium">
                Home
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/#about" className="text-white hover:text-primary transition-colors font-medium">
                About
              </Link>
            </motion.div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <motion.button 
                className="flex items-center space-x-1 text-white hover:text-primary transition-colors font-medium"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
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
                      { href: "/art-workshops", label: "Art Workshops" },
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
                          className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary transition-colors"
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
              <Link href="/faq" className="text-white hover:text-primary transition-colors font-medium">
                FAQ
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/team" className="text-white hover:text-primary transition-colors font-medium">
                Team
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/#contact" className="text-white hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </motion.div>
          </div>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild className="border-blue-500 !text-blue-500 bg-white hover:bg-blue-500 hover:!text-white transition-all duration-300">
                <Link href="https://new-era-education.ud.io" target="_blank" rel="noopener noreferrer">Parent Portal</Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Link href="/#contact">Enquire Now</Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/book">Book Now</Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
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
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                { href: "/#home", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/faq", label: "FAQ" },
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
                    className="block text-white hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Services Dropdown */}
              <div>
                <motion.button 
                  className="flex items-center justify-between w-full text-white hover:text-primary transition-colors font-medium"
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
                        { href: "/art-workshops", label: "Art Workshops" },
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
                            className="block text-gray-300 hover:text-primary transition-colors"
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
              
              <div className="pt-4 space-y-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full border-blue-500 !text-blue-500 bg-white hover:bg-blue-500 hover:!text-white" asChild>
                    <Link href="https://new-era-education.ud.io" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Parent Portal</Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                    <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Enquire Now</Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary" asChild>
                    <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 