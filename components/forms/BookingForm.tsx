"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Calendar, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface BookingFormData {
  name: string
  email: string
  phone: string
  "child-age": string
  service: string
  "preferred-time": string
  "preferred-day": string
  message: string
}

interface BookingFormProps {
  variant?: "default" | "hero"
}

export default function BookingForm({ variant = "default" }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    "child-age": "",
    service: "",
    "preferred-time": "",
    "preferred-day": "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      // Send to Google Apps Script
      await fetch("https://script.google.com/macros/s/AKfycbxKGshzFGUPzx2sCFkx7cvD9JorIpxlKuvGc79k270yjQY6neAUIwN_DUsA9iOlspIvYA/exec", {
        method: "POST",
        mode: "no-cors",
        body: formDataObj
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        "child-age": "",
        service: "",
        "preferred-time": "",
        "preferred-day": "",
        message: ""
      })

      // Show success popup
      setShowPopup(true)
    } catch (error) {
      console.error("Submission failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Consultation</h3>
          <p className="text-gray-600">Get started with a free 30-minute consultation to discuss your child's needs</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your full name"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your phone number"
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="child-age" className="block text-sm font-medium text-gray-700 mb-1">
                Child's Age
              </label>
              <select
                id="child-age"
                name="child-age"
                value={formData["child-age"]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              >
                <option value="">Select age range</option>
                <option value="3-5">3-5 years (School Readiness)</option>
                <option value="6-8">6-8 years (Foundation - Year 2)</option>
                <option value="9-12">9-12 years (Years 3-6)</option>
                <option value="13-15">13-15 years (Years 7-9)</option>
                <option value="16-18">16-18 years (Years 10-12)</option>
              </select>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              >
                <option value="">Select service</option>
                <option value="school-readiness">School Readiness Program</option>
                <option value="english">English Tutoring</option>
                <option value="maths">Mathematics Tutoring</option>
                <option value="one-on-one">One-on-One Tutoring</option>
                <option value="art-workshops">Art Workshops</option>
                <option value="homeschooling">Homeschooling Support</option>
              </select>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="preferred-day" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Day
              </label>
              <select
                id="preferred-day"
                name="preferred-day"
                value={formData["preferred-day"]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              >
                <option value="">Select day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="saturday">Saturday</option>
              </select>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <select
                id="preferred-time"
                name="preferred-time"
                value={formData["preferred-time"]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              >
                <option value="">Select time</option>
                <option value="8:00-am">8:00 AM</option>
                <option value="9:00-am">9:00 AM</option>
                <option value="10:00-am">10:00 AM</option>
                <option value="11:00-am">11:00 AM</option>
                <option value="12:00-pm">12:00 PM</option>
                <option value="1:00-pm">1:00 PM</option>
                <option value="2:00-pm">2:00 PM</option>
                <option value="3:00-pm">3:00 PM</option>
                <option value="4:00-pm">4:00 PM</option>
                <option value="5:00-pm">5:00 PM</option>
                <option value="6:00-pm">6:00 PM</option>
                <option value="7:00-pm">7:00 PM</option>
              </select>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your child's needs and any specific concerns..."
              className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary resize-none"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-md px-4 py-2 font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Booking...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </div>
              )}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              Book Your Session
            </CardTitle>
            <p className="text-gray-600">
              Schedule a tutoring session that fits your family's schedule
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your phone number"
                />
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="child-age" className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Age
                  </label>
                  <select
                    id="child-age"
                    name="child-age"
                    value={formData["child-age"]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="">Select age range</option>
                    <option value="3-5">3-5 years (School Readiness)</option>
                    <option value="6-8">6-8 years (Foundation - Year 2)</option>
                    <option value="9-12">9-12 years (Years 3-6)</option>
                    <option value="13-15">13-15 years (Years 7-9)</option>
                    <option value="16-18">16-18 years (Years 10-12)</option>
                  </select>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="">Select service</option>
                    <option value="school-readiness">School Readiness Program</option>
                    <option value="english">English Tutoring</option>
                    <option value="maths">Mathematics Tutoring</option>
                    <option value="one-on-one">One-on-One Tutoring</option>
                    <option value="art-workshops">Art Workshops</option>
                    <option value="homeschooling">Homeschooling Support</option>
                  </select>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="preferred-day" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Day
                  </label>
                  <select
                    id="preferred-day"
                    name="preferred-day"
                    value={formData["preferred-day"]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="">Select day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferred-time"
                    name="preferred-time"
                    value={formData["preferred-time"]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="">Select time</option>
                    <option value="8:00-am">8:00 AM</option>
                    <option value="9:00-am">9:00 AM</option>
                    <option value="10:00-am">10:00 AM</option>
                    <option value="11:00-am">11:00 AM</option>
                    <option value="12:00-pm">12:00 PM</option>
                    <option value="1:00-pm">1:00 PM</option>
                    <option value="2:00-pm">2:00 PM</option>
                    <option value="3:00-pm">3:00 PM</option>
                    <option value="4:00-pm">4:00 PM</option>
                    <option value="5:00-pm">5:00 PM</option>
                    <option value="6:00-pm">6:00 PM</option>
                    <option value="7:00-pm">7:00 PM</option>
                  </select>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your child's needs and any specific concerns..."
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-md px-4 py-2 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Booking...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Book Session</span>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/40 z-50"
              onClick={closePopup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 text-center z-50 max-w-md w-full mx-4"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Check className="w-8 h-8 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">🎉 Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Your session has been booked successfully. We'll contact you shortly to confirm the details.
              </p>
              <motion.button 
                onClick={closePopup}
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-md px-4 py-2 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 