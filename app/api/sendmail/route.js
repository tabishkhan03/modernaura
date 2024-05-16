import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASS, // generated ethereal password
      },
    });

    // Email content
    let mailOptions = {
      from: '"Modern Aura" <no-reply@acme.com>', // sender address
      to: 'modernauraa09@gmail.com', // list of receivers
      subject: 'Client Contact', // Subject line
      html: `
        <div>
          <h1>Client Details</h1>
          <p>Name: ${firstName} ${lastName}</p>
          <p>Phone: ${phone}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>
        </div>
      `, // html body
    };

    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent', info }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
