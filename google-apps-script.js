// Google Apps Script for New Era Education Forms
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Get the form data
    const formData = e.parameter;
    
    // Determine form type based on field names
    const isBookingForm = formData.fullName && formData.subject && formData.dateTime;
    const isContactForm = formData.name && formData.message;
    
    if (isBookingForm) {
      // Handle booking form - add to Google Sheets
      const sheetId = '19GhX1X1UF0QBkXp-CTJO7CyAFts5VtoqeoPxgwlGs_o';
      const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
      
      const rowData = [
        new Date().toISOString(), // Timestamp
        formData.fullName || '',
        formData.email || '',
        formData.phone || '',
        formData.subject || '',
        formData.dateTime || '',
        formData.notes || ''
      ];
      
      sheet.appendRow(rowData);
      
    } else if (isContactForm) {
      // Handle contact form - send email
      const emailSubject = "New Era Education - Contact Form Submission";
      const emailBody = `
New contact form submission from your website:

Full Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Child's Age/Year Level: ${formData['child-age'] || 'Not provided'}
Service of Interest: ${formData.service || 'Not provided'}
Inquiry Type: ${formData['inquiry-type'] || 'Not provided'}

Message:
${formData.message || 'No message provided'}

---
This message was sent from your website contact form.
Submitted on: ${new Date().toLocaleString()}
      `.trim();
      
      // Send email
      MailApp.sendEmail({
        to: "neweraeducationptyltd@gmail.com",
        subject: emailSubject,
        body: emailBody
      });
      
    } else {
      throw new Error('Unknown form type');
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testFunction() {
  console.log('Google Apps Script is working correctly');
} 