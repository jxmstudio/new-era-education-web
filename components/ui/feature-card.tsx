"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index?: number
  variant?: "default" | "highlighted"
  accentColor?: string
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  index = 0,
  variant = "default",
  accentColor = "blue"
}: FeatureCardProps) {
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
      <Card className={`h-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative ${
        variant === "highlighted" 
          ? "bg-gradient-to-br from-gray-50 to-white border border-gray-200" 
          : `bg-gray-800 border border-${accentColor}-500/20 hover:border-${accentColor}-400/40`
      }`}>
        {/* Decorative elements */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${accentColor}-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300`} />
        <div className={`absolute bottom-0 left-0 w-20 h-20 bg-${accentColor}-500/5 rounded-full translate-y-10 -translate-x-10`} />
        
        <CardHeader className="relative pb-4">
          <div className={`w-16 h-16 bg-gradient-to-br from-${accentColor}-500 to-${accentColor}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}>
            <div className="text-white">
              {icon}
            </div>
          </div>
          <CardTitle className={`text-xl font-bold ${variant === "highlighted" ? "text-gray-900" : "text-white"} group-hover:text-${accentColor}-400 transition-colors duration-300`}>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative">
          <p className={`leading-relaxed transition-colors duration-300 ${
            variant === "highlighted" 
              ? "text-gray-600 group-hover:text-gray-700" 
              : "text-gray-300 group-hover:text-gray-200"
          }`}>
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
} 