'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  initial?: any
  whileInView?: any
  transition?: any
  viewport?: any
}

export function MotionWrapper({ 
  children, 
  className, 
  initial, 
  whileInView, 
  transition, 
  viewport 
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}