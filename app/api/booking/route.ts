import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically send the data to your Google Apps Script endpoint
    // For now, we'll simulate a successful submission
    const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    if (subject) formData.append('subject', subject)
    if (message) formData.append('message', message)
    formData.append('type', 'booking')

    // Uncomment this when you have your Google Apps Script set up
    /*
    const response = await fetch(googleAppsScriptUrl, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Failed to submit to Google Apps Script')
    }
    */

    // For development, we'll just return success
    console.log('Booking submission:', { name, email, phone, subject, message })

    return NextResponse.json(
      { message: 'Booking submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking' },
      { status: 500 }
    )
  }
} 