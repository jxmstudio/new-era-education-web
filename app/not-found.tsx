'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </CardTitle>
          <p className="text-gray-600">
            The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Error 404</p>
            <p className="text-xs text-gray-500">
              The requested page could not be found on our server.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            
            <Link href="/" className="flex-1">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/english-tutoring">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  English Tutoring
                </Button>
              </Link>
              <Link href="/maths-tutoring">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Maths Tutoring
                </Button>
              </Link>
              <Link href="/school-readiness">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  School Readiness
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a 
                href="mailto:info@neweraeducation.com.au" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                info@neweraeducation.com.au
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 