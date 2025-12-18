import nodemailer from "nodemailer";

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields: name, email, and message are required." }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const clinicEmail = process.env.CLINIC_EMAIL;
    const clinicPassword = process.env.CLINIC_EMAIL_PASSWORD;
    const userEmail = process.env.USER_EMAIL;
    const userPassword = process.env.USER_EMAIL_PASSWORD;
    const clinicRecipientEmail = process.env.CLINIC_RECIPIENT_EMAIL || userEmail;

    if (!clinicEmail || !clinicPassword || !userEmail || !userPassword) {
      return new Response(
        JSON.stringify({ message: "Email configuration is missing. Please set CLINIC_EMAIL, CLINIC_EMAIL_PASSWORD, USER_EMAIL, and USER_EMAIL_PASSWORD environment variables." }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const clinicTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: clinicEmail,
        pass: clinicPassword,
      },
    });

    const userTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPassword.trim(), // Remove any trailing spaces
      },
    });

    // إرسال البيانات للعيادة
    const mailToClinic = {
      from: `"Clinify Patient" <${clinicEmail}>`,
      to: clinicRecipientEmail,
      replyTo: email,
      subject: "New Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #11A4D4;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name || '')}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || '')}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${escapeHtml(message || '').replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // إرسال رسالة تأكيد للمستخدم
    const mailToUser = {
      from: `"Clinify Support" <${userEmail}>`,
      to: email,
      subject: "Thank You for Contacting Clinify",
      text: `Hi ${name},\n\nThank you for contacting Clinify. We have received your message and will get back to you soon.\n\nBest regards,\nClinify Team`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #11A4D4;">Thank You for Contacting Clinify</h2>
          <p>Hi ${escapeHtml(name || '')},</p>
          <p>Thank you for contacting Clinify. We have received your message and will get back to you soon.</p>
          <p>Best regards,<br>Clinify Team</p>
        </div>
      `,
    };

    try {
      await clinicTransporter.sendMail(mailToClinic);
      await userTransporter.sendMail(mailToUser);
      return new Response(
        JSON.stringify({ message: "Emails sent!" }), 
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } catch (error: any) {
      console.error('Email sending error:', error);
      return new Response(
        JSON.stringify({ 
          message: error.message || 'Failed to send email. Please try again later.' 
        }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error: any) {
    console.error('Request parsing error:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Invalid request. Please check your input and try again.' 
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}