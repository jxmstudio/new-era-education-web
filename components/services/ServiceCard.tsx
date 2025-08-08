"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  age: string
  description: string
  icon: ReactNode
  features: string[]
  href: string
  index?: number
}

export default function ServiceCard({ 
  title, 
  age, 
  description, 
  icon, 
  features, 
  href, 
  index = 0 
}: ServiceCardProps) {
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
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300" />
        
        <CardHeader className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <div className="text-white">
                {icon}
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {age}
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
          {/* Features List */}
          <div className="space-y-3 mb-8">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: (index * 0.1) + (featureIndex * 0.05) + 0.2
                }}
                className="flex items-start space-x-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Button */}
          <Button 
            asChild 
            className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          >
            <Link href={href}>
              Book Now
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
} 