import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message ,phone } = await request.json();

  const clinicEmail = process.env.CLINIC_EMAIL;
  const clinicPassword = process.env.CLINIC_EMAIL_PASSWORD;
  const userEmail = process.env.USER_EMAIL;
  const userPassword = process.env.USER_EMAIL_PASSWORD;
  const clinicRecipientEmail = process.env.CLINIC_RECIPIENT_EMAIL || userEmail;

  if (!clinicEmail || !clinicPassword || !userEmail || !userPassword) {
    return new Response(
      JSON.stringify({ message: "Email configuration is missing" }), 
      { status: 500 }
    );
  }

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
      user: "mohamednewton1356@gmail.com",       // إيميل العيادة
      pass: "vfml ziwn kzyx hdzi ",          
    },
  });

  // إرسال البيانات للعيادة
  const mailToClinic = {
    from: '"Clinify Patient" <clinifyspatient@gmail.com>', // الاسم الظاهر + إيميل فعلي
    to: "mohamednewton1356@gmail.com",                        // وصول الرسالة للعيادة
    replyTo: email,                                       // لو حابة تردي للمستخدم مباشرة
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nNumber:${phone}`,
  };

  // إرسال رسالة تأكيد للمستخدم
  const mailToUser = {
    from: '"SupportClinify" <mohamednewton1356@gmail.com>',
    to: email,
    subject: "Form Submission Received",
    text: `Hi ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.`,
  };

  try {
    await clinicTransporter.sendMail(mailToClinic);
    await userTransporter.sendMail(mailToUser);
    return new Response(JSON.stringify({ message: "Emails sent!" }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), { status: 500 });
  }
}