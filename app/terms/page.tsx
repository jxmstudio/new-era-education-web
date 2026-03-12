import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for New Era Education tutoring services in Mickleham, Melbourne.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://neweralearning.com.au/terms' },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the New Era Education website (neweralearning.com.au) and our tutoring services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Our Services</h2>
              <p className="text-gray-600 leading-relaxed">
                New Era Education provides tutoring and educational support services including school readiness programs, English and mathematics tutoring, one-on-one tutoring, workshops, homeschooling support, and NDIS capacity building. All services are delivered by VIT-registered teachers at our Mickleham centre or online as specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Bookings and Enrolment</h2>
              <p className="text-gray-600 leading-relaxed mb-3">When booking our services:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All bookings are subject to availability</li>
                <li>A free initial consultation is offered to assess your child&apos;s needs</li>
                <li>Enrolment is confirmed upon agreement of session schedule and payment terms</li>
                <li>We reserve the right to refuse service at our discretion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cancellation Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We require at least 24 hours&apos; notice for session cancellations. Late cancellations or no-shows may be charged at the full session rate. We understand that emergencies occur and will consider these on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Payment is due as agreed at the time of enrolment. We accept various payment methods as communicated during the booking process. Prices are subject to change with reasonable notice provided to enrolled families.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Duty of Care</h2>
              <p className="text-gray-600 leading-relaxed">
                We maintain a safe learning environment for all students. All our educators hold current Working with Children Checks (WWCC) and are VIT-registered. Our centre has secure key pass entry for the safety of all students.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on our website, including text, images, logos, and materials, is the property of New Era Education and is protected by Australian copyright law. You may not reproduce, distribute, or use any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to provide the highest quality educational support, we do not guarantee specific academic outcomes. Our services are designed to supplement, not replace, formal education. We are not liable for any indirect or consequential losses arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after any changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-1 mt-3">
                <li>Email: info@neweralearning.com.au</li>
                <li>Phone: (03) 8467 0773</li>
                <li>Address: Suite 4 Level 3, 21 Cityside Dr, Mickleham VIC 3064</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
