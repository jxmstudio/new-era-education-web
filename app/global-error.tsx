'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Critical Error
              </CardTitle>
              <p className="text-gray-600">
                We encountered a critical error that prevented the application from loading properly.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-red-800 mb-2">Error details:</p>
                <p className="text-xs text-red-600 font-mono break-all">
                  {error.message || 'Unknown critical error occurred'}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-500 mt-1">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={reset}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                
                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="flex-1"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  If this problem persists, please contact our support team at{' '}
                  <a 
                    href="mailto:info@neweraeducation.com.au" 
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    info@neweraeducation.com.au
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
} 