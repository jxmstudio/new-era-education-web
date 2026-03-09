/**
 * Unified tracking utility for GA4 and Meta Pixel.
 * Centralises all conversion tracking to prevent double-firing.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export function trackLead(source: 'booking_form' | 'contact_form') {
  // GA4 - recommended event name
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'form_submission',
      event_label: source,
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: source,
    });
  }
}

export function trackPhoneClick(phoneNumber: string) {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      event_category: 'engagement',
      event_label: 'phone_click',
      method: 'phone',
      phone_number: phoneNumber,
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'phone_click',
    });
  }
}

export function trackViewContent(contentName: string, contentCategory?: string) {
  // Meta Pixel - for tracking service page views from ads
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      content_category: contentCategory || 'service_page',
    });
  }
}
