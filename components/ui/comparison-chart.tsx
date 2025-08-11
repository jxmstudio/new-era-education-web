import { Check, X, Clock, DollarSign, Shield, Users, BookOpen, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

interface ComparisonFeature {
  name: string
  newEra: string | boolean
  other: string | boolean
  icon?: React.ReactNode
}

const features: ComparisonFeature[] = [
  {
    name: "Risk-free trial",
    newEra: "7-DAY TRIAL",
    other: false,
    icon: <Shield className="w-5 h-5 text-green-600" />
  },
  {
    name: "Learn Anywhere",
    newEra: true,
    other: false,
    icon: <BookOpen className="w-5 h-5 text-blue-600" />
  },
  {
    name: "Pre-vetted Teachers",
    newEra: "LIVE 1-1 INTERVIEW",
    other: false,
    icon: <Users className="w-5 h-5 text-purple-600" />
  },
  {
    name: "Time Required",
    newEra: "30 MINUTES",
    other: "3 HOURS MINIMUM",
    icon: <Clock className="w-5 h-5 text-orange-600" />
  },
  {
    name: "Payment Model",
    newEra: "Monthly (Flat)",
    other: "Pay 100% Upfront Plus Registration Fee",
    icon: <DollarSign className="w-5 h-5 text-green-600" />
  },
  {
    name: "Cost/Lesson",
    newEra: "$$$",
    other: "$$$$",
    icon: <Star className="w-5 h-5 text-yellow-600" />
  }
]

export function ComparisonChart() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
          New Era vs. Other Tutor Programs
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At New Era our memberships have access to handpicked professional tutors and the ability to book on-the-go and around your busy schedule.
        </p>
      </div>

      <Card className="overflow-hidden shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-6">
          <CardTitle className="text-2xl font-bold text-center">
            OVERVIEW
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-3 gap-0">
            {/* Feature names column */}
            <div className="bg-gray-50">
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`p-4 border-b border-gray-200 flex items-center gap-3 ${
                    index === 0 ? 'bg-gray-100 font-semibold' : ''
                  }`}
                >
                  {feature.icon}
                  <span className="font-medium text-gray-700">{feature.name}</span>
                </div>
              ))}
            </div>

            {/* New Era column */}
            <div className="bg-gradient-to-b from-primary/10 to-accent/10">
              <div className="p-4 bg-primary text-white text-center font-bold text-lg border-b border-primary/20">
                NEW ERA
              </div>
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`p-4 border-b border-primary/20 flex items-center justify-center ${
                    index === 0 ? 'bg-primary/5 font-semibold' : ''
                  }`}
                >
                  {typeof feature.newEra === 'boolean' ? (
                    feature.newEra ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-red-600" />
                    )
                  ) : (
                    <span className="text-center font-medium text-gray-800">
                      {feature.newEra}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Other column */}
            <div className="bg-gradient-to-b from-secondary/10 to-gray-100">
              <div className="p-4 bg-secondary text-white text-center font-bold text-lg border-b border-secondary/20">
                OTHER
              </div>
              {features.map((feature, index) => (
                <div 
                  key={feature.name}
                  className={`p-4 border-b border-secondary/20 flex items-center justify-center ${
                    index === 0 ? 'bg-secondary/5 font-semibold' : ''
                  }`}
                >
                  {typeof feature.other === 'boolean' ? (
                    feature.other ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-red-600" />
                    )
                  ) : (
                    <span className="text-center font-medium text-gray-800">
                      {feature.other}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact information */}
      <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
        <p className="text-lg text-gray-700 mb-4">
          To book your next tutor visit us at{" "}
          <a href="mailto:contact@neweraeducation.com" className="text-primary hover:text-primary-dark font-semibold">
            contact@neweraeducation.com
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          or call{" "}
          <a href="tel:+61415186680" className="text-primary hover:text-primary-dark font-semibold">
            +61 415 186 680
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/book" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Book a Free Consultation
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
