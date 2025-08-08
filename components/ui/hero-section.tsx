"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Star, Users, Clock } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  features?: Array<{
    icon: React.ReactNode
    text: string
  }>
  backgroundImage?: string
  variant?: "default" | "gradient" | "image"
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  features = [],
  backgroundImage,
  variant = "default"
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getBackgroundClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-br from-primary via-primary-dark to-primary-dark"
      case "image":
        return `bg-cover bg-center bg-no-repeat relative`
      default:
        return "bg-gradient-to-br from-gray-50 to-white"
    }
  }

  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${getBackgroundClasses()}`}>
      {/* Background Image Overlay */}
      {variant === "image" && backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-500/70 to-green-500/80" />
        </>
      )}

      {/* Gradient Overlay for gradient variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <span className="text-white drop-shadow-lg">
                {title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl text-white/90 leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/80 leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>

            {/* Single Button */}
            <motion.div 
              variants={itemVariants}
              className="pt-4"
            >
              <Button 
                size="lg" 
                asChild
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <a href={primaryButtonHref}>
                  {primaryButtonText}
                </a>
              </Button>
            </motion.div>

            {/* Features */}
            {features.length > 0 && (
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2 text-sm text-white/80"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white/20">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right side - empty space or could be used for future content */}
          <div className="hidden lg:block">
            {/* This space intentionally left empty to match the screenshot layout */}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-1/4 left-10 w-24 h-24 bg-white/10 rounded-full blur-3xl"
      />
    </section>
  )
} 