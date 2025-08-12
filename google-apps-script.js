// Google Apps Script for New Era Education Forms
// Deploy this as a web app to handle form submissions

function doPost(e) {
  try {
    // Get the form data
    const formData = e.parameter;
    
    // Determine form type based on field names
    const isBookingForm = formData.fullName && formData.subject && formData.dateTime;
    const isContactForm = formData.name && formData.message && formData.formType !== 'careers';
    const isCareersForm = formData.formType === 'careers' && formData.name && formData.email && formData.phone;
    
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
      
    } else if (isCareersForm) {
      // Careers form → append to a Careers sheet; optionally store CV in Drive and email
      const sheetId = '19GhX1X1UF0QBkXp-CTJO7CyAFts5VtoqeoPxgwlGs_o';
      const ss = SpreadsheetApp.openById(sheetId);
      let careersSheet = ss.getSheetByName('Careers');
      if (!careersSheet) {
        careersSheet = ss.insertSheet('Careers');
        careersSheet.appendRow([
          'Timestamp', 'Full Name', 'Email', 'Phone', 'Suburb', 'Subjects/Year levels', 'Availability', 'Message', 'CV File Name', 'CV File Size (bytes)', 'CV File URL'
        ]);
      }

      // Save CV to Drive if a base64 payload is provided
      var cvFileUrl = '';
      if (formData.cvBase64 && formData.fileName) {
        try {
          var folder = getOrCreateFolder_('Careers Applications');
          var bytes = Utilities.base64Decode(formData.cvBase64);
          var mime = formData.cvMime || 'application/octet-stream';
          var blob = Utilities.newBlob(bytes, mime, formData.fileName);
          var file = folder.createFile(blob);
          cvFileUrl = file.getUrl();
          // Email the application with the CV attached
          MailApp.sendEmail({
            to: 'neweraeducationptyltd@gmail.com',
            subject: 'New Tutor Application - ' + (formData.name || ''),
            body: 'A new tutor application has been submitted.\n\n'
              + 'Name: ' + (formData.name || '') + '\n'
              + 'Email: ' + (formData.email || '') + '\n'
              + 'Phone: ' + (formData.phone || '') + '\n'
              + 'Suburb: ' + (formData.suburb || '') + '\n'
              + 'Subjects/Year levels: ' + (formData.subjects || '') + '\n'
              + 'Availability: ' + (formData.availability || '') + '\n'
              + 'Message: ' + (formData.message || '') + '\n\n'
              + 'CV saved in Drive: ' + cvFileUrl,
            attachments: [blob]
          });
        } catch (err2) {
          Logger.log('CV save/email failed: ' + err2);
        }
      } else {
        // No CV payload — send email without attachment
        MailApp.sendEmail({
          to: 'neweraeducationptyltd@gmail.com',
          subject: 'New Tutor Application - ' + (formData.name || ''),
          body: 'A new tutor application has been submitted.\n\n'
            + 'Name: ' + (formData.name || '') + '\n'
            + 'Email: ' + (formData.email || '') + '\n'
            + 'Phone: ' + (formData.phone || '') + '\n'
            + 'Suburb: ' + (formData.suburb || '') + '\n'
            + 'Subjects/Year levels: ' + (formData.subjects || '') + '\n'
            + 'Availability: ' + (formData.availability || '') + '\n'
            + 'Message: ' + (formData.message || '')
        });
      }

      const rowData = [
        new Date().toISOString(),
        formData.name || '',
        formData.email || '',
        formData.phone || '',
        formData.suburb || '',
        formData.subjects || '',
        formData.availability || '',
        formData.message || '',
        formData.fileName || '',
        formData.fileSize || '',
        cvFileUrl
      ];
      careersSheet.appendRow(rowData);
      
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