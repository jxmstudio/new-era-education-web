'use client'

import { useState, useEffect, useRef } from "react"
import { Users, BookOpen, Shield, Star, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

interface ComparisonFeature {
  name: string
  newEra: string
  other: string
  icon?: React.ReactNode
}

const features: ComparisonFeature[] = [
  {
    name: "Caring, Qualified Teachers",
    newEra: "Led by experienced educators who know the Victorian Curriculum.",
    other: "Often unqualified or not teacher-trained.",
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    name: "Personalised Support",
    newEra: "Sessions tailored to your child's pace, strengths and needs.",
    other: "One-size-fits-all programs with little flexibility.",
    icon: <Star className="w-5 h-5 text-secondary" />
  },
  {
    name: "Support for Learning Difficulties",
    newEra: "Specialists in supporting diverse learners with patience and care.",
    other: "Limited experience with additional needs.",
    icon: <Shield className="w-5 h-5 text-green-600" />
  },
  {
    name: "Evidence-Based Teaching",
    newEra: "Our methods are grounded in research and proven classroom practice.",
    other: "Approaches can be inconsistent or outdated.",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />
  },
  {
    name: "Face-to-Face Focus",
    newEra: "In-person sessions that build focus, trust, and real engagement.",
    other: "Mostly online, less personal interaction.",
    icon: <Users className="w-5 h-5 text-purple-600" />
  },
  {
    name: "NDIS Registered",
    newEra: "We work with families using NDIS and understand the process.",
    other: "May not be NDIS approved or supportive.",
    icon: <Shield className="w-5 h-5 text-emerald-600" />
  },
  {
    name: "Confidence & Motivation Building",
    newEra: "Helping students feel proud, capable, and motivated to learn.",
    other: "Often rush to cover content without building confidence.",
    icon: <Star className="w-5 h-5 text-yellow-600" />
  },
  {
    name: "Aligned with Victorian Curriculum",
    newEra: "Learning that connects directly with what's taught at school.",
    other: "May not follow current curriculum standards.",
    icon: <BookOpen className="w-5 h-5 text-indigo-600" />
  },
  {
    name: "Parent Support",
    newEra: "New Era – Clear feedback helps you understand where your child is at in line with their stage of learning.",
    other: "Limited clarity on a child's progress toward age-appropriate goals.",
    icon: <Users className="w-5 h-5 text-teal-600" />
  }
]

export function ComparisonChart() {
  const [showSwipeHint, setShowSwipeHint] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-hide swipe hint after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSwipeHint(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      if (!hasScrolled && container.scrollLeft > 0) {
        setHasScrolled(true)
        setShowSwipeHint(false)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display px-4">
          Why More Parents Are Choosing New Era Education
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
          At New Era Education, every child's pathway is unique. Our approach is caring and personalised — grounded in proven teaching practices that help students thrive in and out of the classroom.
        </p>
      </div>

      <div className="relative">
        {/* Horizontal scroll container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto -mx-4 sm:mx-0 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          <div className="min-w-[600px] sm:min-w-0 px-4 sm:px-0">
            <Card className="overflow-hidden shadow-xl border-0 relative">
              {/* Swipe hint - mobile only */}
              {showSwipeHint && !hasScrolled && (
                <div 
                  className="absolute top-20 right-4 z-10 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1 animate-pulse sm:hidden pointer-events-none"
                  role="status"
                  aria-live="polite"
                  aria-label="Swipe to see more content"
                >
                  <span>Swipe</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              )}

              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-4 sm:p-6 snap-start">
                <CardTitle className="text-lg sm:text-2xl font-bold text-center">
                  OVERVIEW
                </CardTitle>
              </CardHeader>
            
              <CardContent className="p-0">
                {/* Column headers */}
                <div className="grid grid-cols-3 text-xs sm:text-sm lg:text-base snap-start">
                  <div className="p-2 sm:p-4 bg-gray-50 border-b border-gray-200"></div>
                  <div className="p-2 sm:p-4 bg-primary text-white text-center font-bold border-b border-primary/20">New Era Education</div>
                  <div className="p-2 sm:p-4 bg-secondary text-white text-center font-bold border-b border-secondary/20">Typical Tutoring Services</div>
                </div>

                {/* Feature rows - render per-row to guarantee alignment */}
                <div className="divide-y divide-gray-200">
                  {features.map((feature, index) => (
                    <div key={feature.name} className="grid grid-cols-3 text-xs sm:text-sm lg:text-base snap-start">
                      {/* Name + icon */}
                      <div className="p-3 sm:p-5 bg-gray-50 flex items-center gap-2 sm:gap-3">
                        <div className="flex-shrink-0">{feature.icon}</div>
                        <span className="font-medium text-gray-800">{feature.name}</span>
                      </div>

                      {/* New Era cell */}
                      <div className={`${index % 2 === 0 ? 'bg-primary/5' : 'bg-accent/5'} p-3 sm:p-5 flex items-center justify-center text-center`}> 
                        <p className="text-gray-900 leading-normal sm:leading-relaxed font-medium">
                          {feature.newEra}
                        </p>
                      </div>

                      {/* Other providers cell */}
                      <div className={`${index % 2 === 0 ? 'bg-orange-50' : 'bg-amber-50'} p-3 sm:p-5 flex items-center justify-center text-center`}>
                        <p className="text-gray-700 leading-normal sm:leading-relaxed">
                          {feature.other}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right-edge gradient fade overlay - mobile only */}
        <div 
          className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none sm:hidden"
          aria-hidden="true"
        />

        {/* Right chevron indicator - mobile only */}
        <div 
          className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 pointer-events-none sm:hidden"
          aria-hidden="true"
        >
          <ChevronRight className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Contact information */}
      <div className="text-center mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          To book your next tutor visit us at{" "}
          <a href="mailto:info@neweralearning.com.au" className="text-primary hover:text-primary-dark font-semibold">
            info@neweralearning.com.au
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          or call{" "}
          <a href="tel:+61458498170" className="text-primary hover:text-primary-dark font-semibold">
            0458 498 170
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/book" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Book a Free Consultation
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
