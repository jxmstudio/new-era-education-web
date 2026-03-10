import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for New Era Education. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://neweralearning.com.au/privacy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                New Era Education (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of our students, their families, and visitors to our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at neweralearning.com.au or use our tutoring services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contact information (name, email address, phone number, postal address)</li>
                <li>Student information (name, age, school, year level)</li>
                <li>Enquiry and booking details submitted through our website forms</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Website usage data collected through cookies and analytics tools (Google Analytics, Meta Pixel)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and manage our tutoring services</li>
                <li>Respond to enquiries and booking requests</li>
                <li>Communicate with you about your child&apos;s progress</li>
                <li>Send relevant updates about our programs and services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses Google Analytics 4 (GA4) and Meta Pixel to understand how visitors interact with our site. These tools use cookies and similar technologies to collect anonymous usage data. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How We Protect Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS encryption, and we limit access to personal information to authorised staff only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sharing Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                Under the Australian Privacy Act 1988, you have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
