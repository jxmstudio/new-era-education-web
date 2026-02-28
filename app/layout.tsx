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
  metadataBase: new URL('https://neweraeducation.com.au'),
  title: 'New Era Education | Premium Primary & Secondary Tutoring Melbourne',
  description: 'Premium tutoring in Melbourne for primary and secondary students. Expert teachers, tailored programs, and proven results for your child’s success.',
  keywords: 'VCE tutoring Melbourne, high school tutoring near me, tutoring Mickleham, English tutoring, Maths tutoring, school readiness program, Craigieburn, Greenvale, Beveridge, Wallan, Epping, Melbourne tutoring, Year 12 tutoring',
  authors: [{ name: 'New Era Learning' }],
  creator: 'New Era Learning',
  publisher: 'New Era Learning',
  robots: 'index, follow',
  openGraph: {
    title: 'New Era Education | Premium Primary & Secondary Tutoring Melbourne',
    description: 'Premium tutoring in Melbourne for primary and secondary students. Expert teachers, tailored programs, and proven results for your child’s success.',
    url: 'https://neweraeducation.com.au',
    siteName: 'New Era Education',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Era Education | Premium Primary & Secondary Tutoring Melbourne',
    description: 'Premium tutoring in Melbourne for primary and secondary students. Expert teachers, tailored programs, and proven results for your child’s success.',
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
              "openingHours": "Mo-Fr 08:00-20:00, Sa 10:00-15:00",
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