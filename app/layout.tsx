import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.neweralearning.com.au'),
  title: 'VCE Tutoring Melbourne | High School Tutoring Near Me | New Era Learning',
  description: 'Expert VCE tutoring and high school tutoring in Mickleham, Melbourne. Qualified teachers with 10+ years experience. English, Maths, School Readiness. Book your free consultation today!',
  keywords: 'VCE tutoring Melbourne, high school tutoring near me, tutoring Mickleham, English tutoring, Maths tutoring, school readiness program, Craigieburn, Greenvale, Beveridge, Wallan, Epping, Melbourne tutoring, Year 12 tutoring',
  authors: [{ name: 'New Era Learning' }],
  creator: 'New Era Learning',
  publisher: 'New Era Learning',
  robots: 'index, follow',
  openGraph: {
    title: 'New Era Learning - Premium Tutoring Services',
    description: 'Qualified teachers with 10+ years’ experience. Evidence-based literacy & numeracy methods. Book your session today!',
    url: '/',
    siteName: 'New Era Learning',
    images: [
      {
        url: '/assets/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'New Era Learning - Premium Tutoring Services',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Era Learning - Premium Tutoring Services',
    description: 'Qualified teachers with 10+ years experience. Evidence-based literacy & numeracy methods. Book your session today!',
    images: ['/assets/hero-bg.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': 'AU-VIC',
    'geo.placename': 'Mickleham, Melbourne',
    'geo.position': '-37.5167;144.8833',
    'ICBM': '-37.5167, 144.8833',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
                             "name": "New Era Learning",
               "description": "Premium tutoring services in Mickleham, Melbourne with qualified teachers and evidence-based methods",
               "url": "https://www.neweralearning.com.au",
              "telephone": "+61-XXX-XXX-XXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mickleham, Melbourne",
                "addressLocality": "Mickleham",
                "addressRegion": "Victoria",
                "postalCode": "3064",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.5167,
                "longitude": 144.8833
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
              "sameAs": [
                "https://facebook.com/neweraeducation",
                "https://instagram.com/neweraeducation"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tutoring Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "School Readiness Program",
                      "description": "Prepare your child for school with comprehensive readiness program"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "English Tutoring",
                      "description": "Comprehensive English support from Foundation to Year 12"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 