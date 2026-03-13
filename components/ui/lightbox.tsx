'use client'

import { useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GalleryItem } from '@/lib/gallery'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  const item = items[currentIndex]
  const triggerRef = useRef<Element | null>(null)

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length)
  }, [currentIndex, items.length, onNavigate])

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length)
  }, [currentIndex, items.length, onNavigate])

  // Store the element that triggered the lightbox so we can return focus
  useEffect(() => {
    triggerRef.current = document.activeElement
  }, [])

  // Body scroll lock
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, goNext, goPrev])

  // Return focus on close
  useEffect(() => {
    return () => {
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus()
      }
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label={item.caption}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/92 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-medium tracking-wider"
        >
          {currentIndex + 1} / {items.length}
        </motion.div>

        {/* Previous button */}
        {items.length > 1 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-3 sm:left-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}

        {/* Next button */}
        {items.length > 1 && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-3 sm:right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}

        {/* Content */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 flex flex-col items-center max-w-[90vw] max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {item.type === 'image' ? (
            <div className="relative w-[85vw] sm:w-[75vw] lg:w-[60vw] h-[65vh] sm:h-[70vh]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 75vw, 60vw"
                priority
              />
            </div>
          ) : (
            <div className="w-[85vw] sm:w-[75vw] lg:w-[60vw] aspect-[9/16] sm:aspect-video max-h-[70vh]">
              <video
                controls
                playsInline
                autoPlay
                className="w-full h-full rounded-lg bg-black object-contain"
              >
                <source src={item.src} type="video/mp4" />
                <source src={item.src} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/70 text-sm sm:text-base text-center max-w-2xl leading-relaxed px-4"
          >
            {item.caption}
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
