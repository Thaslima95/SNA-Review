const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  // Allow only POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: "Method Not Allowed",
      }),
    };
  }

  try {
    // Check API key exists
    if (!process.env.SENDGRID_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "SendGrid API key not configured",
        }),
      };
    }

    const { name, email, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
      };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "thaslibanujas7@gmail.com", // Where you receive messages
      from: "nizuthasli15@gmail.com", // MUST be verified in SendGrid
      replyTo: email, // So you can reply directly
      subject:
        "[Singapore Neuroscience Association] New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2 style="color:#991b1b;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f8f8f8; padding:10px; border-radius:5px;">
            ${message}
          </div>
        </div>
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.response?.body || error.message,
      }),
    };
  }
};
