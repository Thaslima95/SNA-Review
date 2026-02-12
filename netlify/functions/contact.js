const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "thaslibanujas7@gmail.com", // Your receiving email
      from: "nizuthasli15@gmail.com", // Must be verified in SendGrid
      subject:
        "[Singapore Neuroscience Association] New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2 style="color:#991b1b;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f8f8f8; padding:10px; border-radius:5px;">
            ${message}
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
};
