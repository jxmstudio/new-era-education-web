import type { Metadata } from 'next'
import Script from 'next/script'
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
  metadataBase: new URL('https://neweralearning.com.au'),
  title: {
    default: 'New Era Education | Premium Primary & Secondary Tutoring in Mickleham, Melbourne',
    template: '%s | New Era Education',
  },
  description: 'Premium tutoring in Mickleham & Northern Melbourne for primary and secondary students. VIT-registered teachers, tailored programs, and proven results. Serving Craigieburn, Greenvale, Beveridge & surrounds.',
  keywords: 'tutoring Mickleham, VCE tutoring Melbourne, tutor Craigieburn, English tutoring Northern Melbourne, Maths tutoring Greenvale, school readiness program, NDIS tutoring Melbourne, private tutor Beveridge, Wallan tutor, Epping tutoring, Year 12 tutoring',
  authors: [{ name: 'New Era Education' }],
  creator: 'New Era Education',
  publisher: 'New Era Education',
  robots: 'index, follow',
  openGraph: {
    title: 'New Era Education | Premium Tutoring in Mickleham, Melbourne',
    description: 'Premium tutoring in Mickleham & Northern Melbourne. VIT-registered teachers, tailored programs, proven results. Book a free consultation today.',
    url: 'https://neweralearning.com.au',
    siteName: 'New Era Education',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'New Era Education - Premium Tutoring in Mickleham, Melbourne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Era Education | Premium Tutoring in Mickleham, Melbourne',
    description: 'Premium tutoring in Mickleham & Northern Melbourne. VIT-registered teachers, tailored programs, proven results.',
    images: ['/hero-bg.jpg'],
  },
  alternates: {
    canonical: 'https://neweralearning.com.au/',
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

        {/* Schema.org Structured Data - EducationalOrganization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              "name": "New Era Education",
              "description": "Premium tutoring services in Mickleham, Melbourne with VIT-registered teachers and evidence-based methods",
              "url": "https://neweralearning.com.au",
              "telephone": "+61384670773",
              "email": "info@neweralearning.com.au",
              "image": "https://neweralearning.com.au/hero-bg.jpg",
              "logo": "https://neweralearning.com.au/logo.jpg",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite 4 Level 3, 21 Cityside Dr",
                "addressLocality": "Mickleham",
                "addressRegion": "VIC",
                "postalCode": "3064",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.5167,
                "longitude": 144.8833
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "15:00"
                }
              ],
              "areaServed": [
                { "@type": "City", "name": "Mickleham" },
                { "@type": "City", "name": "Craigieburn" },
                { "@type": "City", "name": "Greenvale" },
                { "@type": "City", "name": "Roxburgh Park" },
                { "@type": "City", "name": "Wollert" },
                { "@type": "City", "name": "Beveridge" },
                { "@type": "City", "name": "Wallan" },
                { "@type": "City", "name": "Epping" }
              ],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61577979322687",
                "https://www.instagram.com/newera.education_/"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "21",
                "bestRating": "5"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tutoring Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "School Readiness Program",
                      "description": "Comprehensive school readiness program for children ages 3-6 in Mickleham"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "English Tutoring",
                      "description": "English tutoring from Foundation to Year 12, including VCE preparation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Mathematics Tutoring",
                      "description": "Maths tutoring from Foundation to Year 12 in Mickleham and Northern Melbourne"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "One-on-One Tutoring",
                      "description": "Personalised one-on-one tutoring sessions for all subjects and year levels"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Workshops",
                      "description": "Study skills, literacy, numeracy workshops and holiday programs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Homeschooling Support",
                      "description": "Curriculum guidance, assessment support and resources for homeschooling families"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "NDIS Capacity Building",
                      "description": "NDIS capacity building supports including functional literacy and numeracy"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RB5W9LWWZR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RB5W9LWWZR', {
              page_path: window.location.pathname + window.location.search,
            });
          `}
        </Script>

        {/* Auto-track phone link clicks (tel:) for GA4 + Meta Pixel */}
        <Script id="phone-click-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href^="tel:"]');
              if (link) {
                var phone = link.getAttribute('href').replace('tel:', '');
                if (typeof gtag === 'function') {
                  gtag('event', 'contact', {
                    event_category: 'engagement',
                    event_label: 'phone_click',
                    method: 'phone',
                    phone_number: phone
                  });
                }
                if (typeof fbq === 'function') {
                  fbq('track', 'Contact', { content_name: 'phone_click' });
                }
              }
            });
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];
t=b.createElement(e);t.async=!0;
t.src=v;
s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '2173960733444460');
fbq('track', 'PageView');
`}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2173960733444460&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
