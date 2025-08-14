import { ComparisonChart } from "@/components/ui/comparison-chart"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { MotionWrapper } from "@/components/ui/motion-wrapper"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
              Why Choose New Era Education?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare to other tutoring programs and discover the New Era advantage
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ComparisonChart />
          </MotionWrapper>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The New Era Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the comparison, here's what makes us truly special
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Personalised Approach</h3>
              <p className="text-gray-600">
                Every student gets a customized learning plan tailored to their unique needs and learning style.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-3">Expert Teachers</h3>
              <p className="text-gray-600">
                Our tutors are qualified educators with proven track records in their subject areas.
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">
                Learn from anywhere with our online platform or face-to-face sessions at your convenience.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
