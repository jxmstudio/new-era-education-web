'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { GALLERY_ITEMS } from '@/lib/gallery'
import Lightbox from '@/components/ui/lightbox'
import { MotionWrapper } from '@/components/ui/motion-wrapper'

export default function GalleryContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-200 uppercase bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              Inside Our Centre
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-poppins)] tracking-tight">
              Our Gallery
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              See learning in action at New Era Education. Every session is filled with curiosity, creativity, and meaningful growth.
            </p>
          </MotionWrapper>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8">
            {GALLERY_ITEMS.map((item, index) => (
              <MotionWrapper
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-50px' }}
                className="break-inside-avoid mb-6 sm:mb-8"
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  {item.type === 'image' ? (
                    <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[9/16] bg-slate-900">
                      <video
                        preload="metadata"
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                        <source src={item.src} type="video/quicktime" />
                      </video>
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 h-7 text-blue-600 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Caption */}
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed px-1 group-hover:text-gray-700 transition-colors duration-300">
                    {item.caption}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}

      <Footer />
    </>
  )
}
