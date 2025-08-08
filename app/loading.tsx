import { Card, CardContent } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="relative">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <div className="absolute inset-0 w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Loading...
            </h2>
            <p className="text-gray-600">
              Please wait while we prepare your content
            </p>
          </div>
          
          <div className="mt-6 flex space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 