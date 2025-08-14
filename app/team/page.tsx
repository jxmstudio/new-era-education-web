import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Calculator, Star, Quote } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { MotionWrapper } from "@/components/ui/motion-wrapper"

interface TeamMember {
  name: string
  role: string
  specialties: string[]
  experience: string
  image?: string
}

const educator: TeamMember = {
  name: "Adelaine Matthews",
  role: "Founder & Lead Educator",
  specialties: ["Individualised Support", "Homeschool Guidance", "Literacy & Numeracy Foundations", "NDIS Certified"],
  experience: "10+ years working with students across learning levels and abilities",
  image: "/adelaine.jpg"
}

const values = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Excellence in Education",
    description: "We maintain the highest standards in our teaching methods and curriculum delivery."
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Personalised Learning",
    description: "Every student receives a customised learning plan tailored to their unique needs."
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Evidence-Based Methods",
    description: "Our teaching approaches are grounded in proven educational research and best practices."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Continuous Improvement",
    description: "We constantly evolve our methods to provide the best possible educational experience."
  }
]

export default function TeamPage() {
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
                Meet Our Team
              </h1>
            </MotionWrapper>
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-white/90 max-w-4xl mx-auto drop-shadow-sm">
                Our experienced educator is here to guide every student with personalised, evidence-based support.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
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
              Dedicated to Your Child's Success
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At New Era Education, we believe that great education starts with passionate, qualified educators. 
              Our founder brings years of teaching experience and a deep commitment to helping every student reach their potential.
            </p>
          </MotionWrapper>
          
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">VIT</h3>
                <p className="text-gray-600">Registered Teacher</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">NDIS</h3>
                <p className="text-gray-600">Certified Support</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">All</h3>
                <p className="text-gray-600">Learning Styles</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Educator Profile */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <MotionWrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-center">
              <Card className="w-full max-w-3xl group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-lg"></div>
              
              <CardHeader className="text-center pb-8 pt-10 relative">
                {/* Enhanced profile image with larger size and glow effect - responsive sizing */}
                <MotionWrapper
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 mx-auto mb-8 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 ring-4 sm:ring-6 lg:ring-8 ring-white shadow-2xl">
                    {educator.image ? (
                      <img 
                        src={educator.image} 
                        alt={educator.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                      </div>
                    )}
                  </div>
                    {/* Subtle rotating ring animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-pulse"></div>
                  </div>
                </MotionWrapper>

                {/* Enhanced name with larger size */}
                <MotionWrapper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <CardTitle className="text-3xl lg:text-4xl mb-3 font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {educator.name}
                  </CardTitle>
                </MotionWrapper>
                
                {/* Enhanced role with gradient text */}
                <MotionWrapper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <CardDescription className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    {educator.role}
                  </CardDescription>
                </MotionWrapper>
              </CardHeader>
              
              <CardContent className="space-y-6 sm:space-y-8 px-6 sm:px-8 lg:px-10 pb-8 lg:pb-10 relative">
                {/* Enhanced Specialties section */}
                <MotionWrapper
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h4 className="font-bold text-gray-900 mb-5 text-center text-lg">Specialties</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                      {educator.specialties.map((specialty, idx) => (
                        <MotionWrapper
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 1.0 + (idx * 0.1),
                            ease: "easeOut" 
                          }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="secondary"
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 text-xs sm:text-sm font-semibold border border-blue-200/50 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                          >
                            ✨ {specialty}
                          </Badge>
                        </MotionWrapper>
                      ))}
                    </div>
                  </div>
                </MotionWrapper>
                
                {/* Enhanced Experience section */}
                <MotionWrapper
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Experience</h4>
                    <p className="text-gray-700 text-xl leading-relaxed font-medium">
                      {educator.experience}
                    </p>
                  </div>
                </MotionWrapper>
              </CardContent>
              </Card>
            </div>
          </MotionWrapper>

          {/* Inspirational Quote Section */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16 text-center relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-3xl transform -rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 rounded-3xl transform rotate-1"></div>
            
            <MotionWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative z-10"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/40 relative overflow-hidden">
                {/* Large Quote Icon Background */}
                <div className="absolute -top-8 -right-8 opacity-5 transform rotate-12">
                  <Quote className="w-32 h-32 text-primary" />
                </div>
                
                <div className="relative">
                  {/* Decorative Quote marks */}
                  <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">"</div>
                  <div className="absolute -bottom-8 -right-2 text-6xl text-secondary/20 font-serif">"</div>
                  
                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 leading-relaxed italic mb-4 sm:mb-6 relative z-10">
                    I believe every child deserves support tailored to their learning style. That's why I built New Era Education — to nurture confidence and growth through meaningful, personalised learning.
                  </blockquote>
                  
                  <footer className="text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    — Adelaine Matthews
                  </footer>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl pointer-events-none"></div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do in our mission to support student success.
            </p>
          </MotionWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-30px" }}
                className="group"
              >
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50 relative overflow-hidden">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Educator */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 30% 30%, #3b82f6 2px, transparent 2px),
                                  radial-gradient(circle at 70% 70%, #8b5cf6 2px, transparent 2px)`,
                 backgroundSize: '50px 50px'
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
              Why Choose Our Educator?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Adelaine's unique approach combines professional expertise with genuine care for each student's individual needs
            </p>
          </MotionWrapper>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Learning Plans",
                description: "Every student receives a customized approach based on their learning style, strengths, and areas for growth.",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "NDIS Support Specialist", 
                description: "Certified to provide specialised support for students with diverse learning needs and abilities.",
                icon: <Star className="w-6 h-6" />
              },
              {
                title: "Evidence-Based Methods",
                description: "Uses proven literacy and numeracy teaching strategies grounded in educational research.",
                icon: <GraduationCap className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, #2563eb 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, #f59e0b 2px, transparent 2px)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>
        
        {/* Brand-colored outline */}
        <div className="absolute inset-4 border-2 border-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20"></div>
        <div className="absolute inset-0 border border-primary/10 rounded-2xl m-2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a free consultation to meet our teachers and discuss how we can help 
              your child achieve their academic goals.
            </p>
          </MotionWrapper>
          
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MotionWrapper
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4,
                type: "spring",
                stiffness: 150 
              }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                asChild
                className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary"
              >
                <a href="/book" className="relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Consultation
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </Button>
            </MotionWrapper>
            
            <MotionWrapper
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6,
                type: "spring",
                stiffness: 150 
              }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group hover:scale-105 transition-all duration-300 border-2 border-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl"
              >
                <a href="/contact" className="relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-current rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                  </span>
                </a>
              </Button>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </section>

      <Footer />
    </div>
  )
} 