'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { MotionWrapper } from '@/components/ui/motion-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface ApplicationFormState {
  name: string
  email: string
  phone: string
  suburb: string
  subjects: string
  availability: string
  message: string
  file?: File | null
}

export default function CareersPage() {
  const [form, setForm] = useState<ApplicationFormState>({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    subjects: '',
    availability: '',
    message: '',
    file: null
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    // Validate file type and size (PDF/DOC up to 10MB)
    const isValidType = /(pdf|doc|docx)$/i.test(file.name)
    const isUnder10mb = file.size <= 10 * 1024 * 1024
    if (!isValidType || !isUnder10mb) {
      setError('Please upload a PDF or DOC/DOCX file up to 10MB.')
      return
    }
    setError(null)
    setForm(prev => ({ ...prev, file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return

    // Required validations
    if (!form.name || !form.email || !form.phone) {
      setError('Please fill in your name, email, and phone.')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      // Submit to Google Apps Script (same sheet) with formType=carrers
      const formDataObj = new FormData()
      formDataObj.append('formType', 'careers')
      formDataObj.append('name', form.name)
      formDataObj.append('email', form.email)
      formDataObj.append('phone', form.phone)
      formDataObj.append('suburb', form.suburb)
      formDataObj.append('subjects', form.subjects)
      formDataObj.append('availability', form.availability)
      formDataObj.append('message', form.message)
      if (form.file) {
        // Include file metadata
        formDataObj.append('fileName', form.file.name)
        formDataObj.append('fileSize', String(form.file.size))
        formDataObj.append('cvMime', form.file.type || 'application/octet-stream')
        // Read file as base64 for Apps Script (size limit applies)
        const base64 = await fileToBase64(form.file)
        formDataObj.append('cvBase64', base64.split(',')[1] || '')
      }

      await fetch('https://script.google.com/macros/s/AKfycbwr3Ti4T2o076Gm3bu8tgoDGIK_WM99ieX9C0TGa8N_NkZHI01OlrW0v8y9SMPli7uG2A/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj,
      })

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: `linear-gradient(to right, rgba(9, 47, 121, 0.7), rgba(0, 166, 138, 0.7)), url('/stock2.png')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <MotionWrapper initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join the Team at New Era Education</h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-white/95 mb-6">We are currently hiring for tutors</h2>
              <p className="text-lg text-white/90 mb-4">Are you an enthusiastic educator who loves inspiring students and making a real impact?</p>
              <p className="text-lg text-white/90 mb-4">New Era Education is growing, and we’re looking for dedicated tutors to join our dynamic team! We offer flexible hours, a supportive professional environment.</p>
              <p className="text-lg text-white/90">Whether you’re a qualified teacher, university student, or experienced tutor, if you’re passionate about helping learners thrive—we’d love to hear from you!</p>
            </MotionWrapper>

            {/* Checklist badge */}
            <MotionWrapper initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
              <Card className="bg-white/95 text-gray-900 rounded-2xl shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">What We’re Looking For:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[ 
                      'Valid Working Children’s Check',
                      'Driver’s licence',
                      'Strong subject knowledge',
                      'Strong communication skills',
                      'Teaching experience preferred'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700"><Check className="w-3 h-3" /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm text-gray-700">VIT registered highly favourable</div>
                </CardContent>
              </Card>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Key Responsibilities – Maths Tutor (Years 9–12, VIC Curriculum 2.0)</h3>
          {/* TODO: Insert exact bullet list from provided attachment; using placeholder until provided */}
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Deliver engaging, curriculum-aligned lessons for Years 9–12 mathematics.</li>
            <li>Assess student understanding and provide targeted feedback.</li>
            <li>Develop lesson plans and resources aligned to VIC Curriculum 2.0.</li>
            <li>Track progress and communicate with parents/carers regularly.</li>
            <li>Support exam preparation and study strategies.</li>
          </ul>
        </div>
      </section>

      {/* Administration & Marketing Support Assistant Role */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Administration & Marketing Support Assistant (entry or junior level)</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Support with general day-to-day administrative tasks</li>
                <li>Help manage and update social media accounts and online presence daily</li>
                <li>Assist in preparing print and digital resources for students and parents</li>
                <li>Assist with marketing communications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Skills & Attributes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Strong organisational and time-management skills</li>
                <li>Excellent written and verbal communication skills</li>
                <li>Comfortable using social media platforms professionally (Facebook, Instagram, etc.)</li>
                <li>Ability to work independently and as part of a team</li>
                <li>Proficient with Microsoft Office (Word, Excel, Outlook) or similar software</li>
                <li>Friendly, approachable, and customer-focused attitude</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Join Us:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Be part of a supportive, mission-driven team focused on student success</li>
              <li>Gain valuable experience in administration, education, and social media</li>
              <li>Opportunities for professional development and growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl mb-4">Apply now and shape the future with New Era Education!</p>
          <Button asChild className="bg-white text-primary hover:bg-gray-100">
            <a href="mailto:info@neweralearning.com.au">Email your application here</a>
          </Button>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Apply to Join Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-green-700">Thanks! We’ll be in touch soon.</div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full name *</label>
                    <input id="name" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded-md px-3 py-2" />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded-md px-3 py-2" />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone *</label>
                    <input id="phone" name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded-md px-3 py-2" />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="suburb" className="block text-sm font-medium mb-2">Suburb</label>
                    <input id="suburb" name="suburb" value={form.suburb} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="subjects" className="block text-sm font-medium mb-2">Subjects/Year levels</label>
                    <input id="subjects" name="subjects" value={form.subjects} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="availability" className="block text-sm font-medium mb-2">Availability</label>
                    <input id="availability" name="availability" value={form.availability} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="file" className="block text-sm font-medium mb-2">Upload CV/Resume (PDF/DOC up to 10MB)</label>
                    <input id="file" name="file" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className="w-full border rounded-md px-3 py-2" />
                  </div>
                  {error && (
                    <div className="md:col-span-2 text-sm text-red-600">{error}</div>
                  )}
                  <div className="md:col-span-2">
                    <Button type="submit" disabled={submitting} className="w-full md:w-auto">
                      {submitting ? 'Submitting…' : 'Submit application'}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (err) => reject(err)
    reader.readAsDataURL(file)
  })
}


