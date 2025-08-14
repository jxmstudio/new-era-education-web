import { Users, BookOpen, Shield, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

interface ComparisonFeature {
  name: string
  newEra: string
  other: string
  icon?: React.ReactNode
}

const features: ComparisonFeature[] = [
  {
    name: "Caring, Qualified Teachers",
    newEra: "Led by experienced educators who know the Victorian Curriculum.",
    other: "Often unqualified or not teacher-trained.",
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    name: "Personalised Support",
    newEra: "Sessions tailored to your child's pace, strengths and needs.",
    other: "One-size-fits-all programs with little flexibility.",
    icon: <Star className="w-5 h-5 text-secondary" />
  },
  {
    name: "Support for Learning Difficulties",
    newEra: "Specialists in supporting diverse learners with patience and care.",
    other: "Limited experience with additional needs.",
    icon: <Shield className="w-5 h-5 text-green-600" />
  },
  {
    name: "Evidence-Based Teaching",
    newEra: "Our methods are grounded in research and proven classroom practice.",
    other: "Approaches can be inconsistent or outdated.",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />
  },
  {
    name: "Face-to-Face Focus",
    newEra: "In-person sessions that build focus, trust, and real engagement.",
    other: "Mostly online, less personal interaction.",
    icon: <Users className="w-5 h-5 text-purple-600" />
  },
  {
    name: "NDIS Registered",
    newEra: "We work with families using NDIS and understand the process.",
    other: "May not be NDIS approved or supportive.",
    icon: <Shield className="w-5 h-5 text-emerald-600" />
  },
  {
    name: "Confidence & Motivation Building",
    newEra: "Helping students feel proud, capable, and motivated to learn.",
    other: "Often rush to cover content without building confidence.",
    icon: <Star className="w-5 h-5 text-yellow-600" />
  },
  {
    name: "Aligned with Victorian Curriculum",
    newEra: "Learning that connects directly with what's taught at school.",
    other: "May not follow current curriculum standards.",
    icon: <BookOpen className="w-5 h-5 text-indigo-600" />
  }
]

export function ComparisonChart() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
          Why More Parents Are Choosing New Era Education
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At New Era Education, every child’s pathway is unique. Our approach is caring and personalised — grounded in proven teaching practices that help students thrive in and out of the classroom.
        </p>
      </div>

      <Card className="overflow-hidden shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-6">
          <CardTitle className="text-2xl font-bold text-center">
            OVERVIEW
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Column headers */}
          <div className="grid grid-cols-3">
            <div className="p-4 bg-gray-50 border-b border-gray-200"></div>
            <div className="p-4 bg-primary text-white text-center font-bold text-lg border-b border-primary/20">New Era Education</div>
            <div className="p-4 bg-secondary text-white text-center font-bold text-lg border-b border-secondary/20">Typical Tutoring Services</div>
          </div>

          {/* Feature rows - render per-row to guarantee alignment */}
          <div className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <div key={feature.name} className="grid grid-cols-3">
                {/* Name + icon */}
                <div className="p-5 bg-gray-50 flex items-center gap-3">
                  {feature.icon}
                  <span className="font-medium text-gray-800">{feature.name}</span>
                </div>

                {/* New Era cell */}
                <div className={`${index % 2 === 0 ? 'bg-primary/5' : 'bg-accent/5'} p-5 flex items-center justify-center text-center`}> 
                  <p className="text-gray-900 leading-relaxed font-medium">
                    {feature.newEra}
                  </p>
                </div>

                {/* Other providers cell */}
                <div className={`${index % 2 === 0 ? 'bg-orange-50' : 'bg-amber-50'} p-5 flex items-center justify-center text-center`}>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.other}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact information */}
      <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
        <p className="text-lg text-gray-700 mb-4">
          To book your next tutor visit us at{" "}
          <a href="mailto:info@neweralearning.com.au" className="text-primary hover:text-primary-dark font-semibold">
            info@neweralearning.com.au
          </a>
        </p>
        <p className="text-gray-600 mb-6">
          or call{" "}
          <a href="tel:+61458498170" className="text-primary hover:text-primary-dark font-semibold">
            0458 498 170
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
