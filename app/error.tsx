'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong
          </CardTitle>
          <p className="text-gray-600">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Error details:</p>
            <p className="text-xs text-gray-500 font-mono break-all">
              {error.message || 'Unknown error occurred'}
            </p>
            {error.digest && (
              <p className="text-xs text-gray-400 mt-1">
                Error ID: {error.digest}
              </p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={reset}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
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
              Need help? Contact us at{' '}
              <a 
                href="mailto:info@neweralearning.com.au" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                info@neweralearning.com.au
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 