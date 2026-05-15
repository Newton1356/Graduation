import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message ,phone } = await request.json();

  const clinicTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "clinifyspatient@gmail.com",       // إيميل مرسل للعيادة
      pass: "snkctwfzddcrpwjf",           // App Password من Gmail
    },
  });

  const userTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nadaemad271@gmail.com",       // إيميل العيادة
      pass: "pxrgarecawctrqoi",          
    },
  });

  // إرسال البيانات للعيادة
 const mailToClinic = {
  from: '"Clinify Patient" <clinifyspatient@gmail.com>',
  to: "nadaemad271@gmail.com",
  replyTo: email,
  subject: "New Form Submission",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f8fb; padding: 40px 20px;">
    
    <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.06);">
      
      <!-- Header -->
      <div style="background-color: #11A4D4; padding: 25px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; letter-spacing: 1px;">
        Patient Message
        </h2>
      </div>
      
      <!-- Body -->
      <div style="padding: 35px;">
        
        <p style="color: #333; font-size: 15px; margin-bottom: 25px;">
          You have received a new message from the contact form.
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          
          <tr>
            <td style="padding: 12px; background: #f1f6f9; font-weight: bold;">Name</td>
            <td style="padding: 12px;">${name}</td>
          </tr>

          <tr>
            <td style="padding: 12px; background: #f1f6f9; font-weight: bold;">Email</td>
            <td style="padding: 12px;">${email}</td>
          </tr>

          <tr>
            <td style="padding: 12px; background: #f1f6f9; font-weight: bold;">Phone</td>
            <td style="padding: 12px;">${phone}</td>
          </tr>

          <tr>
            <td style="padding: 12px; background: #f1f6f9; font-weight: bold;">Message</td>
            <td style="padding: 12px; line-height: 1.6;">${message}</td>
          </tr>

        </table>

      </div>

      <!-- Footer -->
      <div style="
          background: #f1f6f9;
          text-align: center;
          padding: 18px;
          font-size: 12px;
          color: #777;
      ">
        Clinify System Notification • ${new Date().getFullYear()}
      </div>

    </div>

  </div>
  `,
};
  // إرسال رسالة تأكيد للمستخدم
 const mailToUser = {
  from: '"SupportClinify" <nadaemad271@gmail.com>',
  to: email,
  subject: "Form Submission Received",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f8fb; padding: 40px 20px;">
    
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.06);">
      
      <!-- Header -->
      <div style="background-color: #11A4D4; padding: 25px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; letter-spacing: 1px;">
        Clinify
        </h2>
      </div>
      
      <!-- Body -->
      <div style="padding: 35px;">
        <h3 style="color: #333; margin-top: 0;">
          Hi ${name},
        </h3>

        <p style="color: #555; line-height: 1.7; font-size: 15px;">
          Thank you for reaching out to us. We have successfully received your message.
          Our support team will review your request and get back to you shortly.
        </p>

        <div style="text-align: center; margin: 35px 0;">
          <a href="https://yourwebsite.com"
             style="
                background-color: #11A4D4;
                color: #ffffff;
                padding: 14px 28px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: bold;
                display: inline-block;
                font-size: 14px;
             ">
            Visit Our Website
          </a>
        </div>

        <p style="color: #888; font-size: 13px;">
          If you didn’t submit this request, you can safely ignore this email.
        </p>
      </div>

      <!-- Footer -->
      <div style="
          background: #f1f6f9;
          text-align: center;
          padding: 18px;
          font-size: 12px;
          color: #777;
      ">
        © ${new Date().getFullYear()} SupportClinify. All rights reserved.
      </div>

    </div>

  </div>
  `,
};

  try {
    await clinicTransporter.sendMail(mailToClinic);
    await userTransporter.sendMail(mailToUser);
    return new Response(JSON.stringify({ message: "Emails sent!" }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}