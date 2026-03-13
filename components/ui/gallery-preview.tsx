'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GALLERY_PREVIEW_ITEMS } from '@/lib/gallery'
import { MotionWrapper } from '@/components/ui/motion-wrapper'

export default function GalleryPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4">
            Our Environment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 font-[var(--font-poppins)]">
            See Our Learning Environment
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A warm, supportive space where every child feels welcome and inspired to learn
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {GALLERY_PREVIEW_ITEMS.map((item, index) => (
            <MotionWrapper
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="bg-white px-4 py-3">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            View Full Gallery &rarr;
          </Link>
        </MotionWrapper>
      </div>
    </section>
  )
}
