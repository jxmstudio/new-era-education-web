"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  service: string
  index?: number
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating, 
  service, 
  index = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="h-full bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group-hover:bg-white/100">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
          <Quote className="w-8 h-8" />
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary transition-all duration-300" />
        
        <CardContent className="p-6">
          {/* Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating 
                    ? "text-yellow-400 fill-current" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          
          {/* Content */}
          <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
            "{content}"
          </blockquote>
          
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
            
            <Badge variant="secondary" className="text-xs">
              {service}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 