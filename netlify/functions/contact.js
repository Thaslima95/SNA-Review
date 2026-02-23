const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "All fields are required" }),
      };
    }

    // ===============================
    // 1️⃣ ADMIN NOTIFICATION EMAIL
    // ===============================

    const adminHtml = `
       <body style="margin:0; padding:0; font-family:Arial,sans-serif; background:#f8fafc;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
          <tr>
              <td style="background:#ffffff; padding:25px 30px; border-bottom:1px solid #e5e7eb;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                          <td width="180" align="left">
                          <img 
  src="https://neuroscience.sg/sna-logo.png"
  alt="Singapore Neuroscience Association"
  width="140"
  style="display:block;" 
/>
                          </td>
                          <td align="left">
                              <h2 style="margin:0;font-family:Arial,sans-serif;font-size:22px;color:#991b1b;font-weight:700;">
                                  New Contact Form Submission
                              </h2>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="padding:30px;">
                  <p style="color:#374151;">A new enquiry has been received via the SNA website.</p>
                  <p style="font-weight:bold;margin-top:20px;">Name</p>
                  <p>${name}</p>
                  <p style="font-weight:bold;">Email</p>
                  <p><a href="mailto:${email}" style="color:#991b1b;">${email}</a></p>
                  <p style="font-weight:bold;">Message</p>
                  <div style="background:#f3f4f6;padding:15px;border-radius:8px;">
                      ${message}
                  </div>
              </td>
          </tr>
          <tr>
              <td style="background:#f9fafb;padding:20px;font-size:12px;color:#6b7280;text-align:center;">
                  Singapore Neuroscience Association<br/>
                  28 Medical Drive, Centre for Life Sciences<br/>
                  Singapore 117456
              </td>
          </tr>
      </table>
  </body>
    `;

    await resend.emails.send({
      from: "Singapore Neuroscience Association <no-reply@neuroscience.sg>",
      to: "thaslibanujas7@gmail.com",
      subject: "New Website Enquiry – Singapore Neuroscience Association",
      html: adminHtml,
    });

    // ===============================
    // 2️⃣ AUTO-REPLY TO USER
    // ===============================

    const autoReplyHtml = `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:#ffffff;padding:25px 30px;border-bottom:1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="180" align="left">
                    <img src="https://neuroscience.sg/sna-logo.png"
                      alt="Singapore Neuroscience Association"
                      width="140"
                      style="display:block;" />
                  </td>
                  <td align="left">
                    <h2 style="margin:0;font-family:Arial,sans-serif;font-size:22px;color:#991b1b;font-weight:700;">
                      Thank You for Your Enquiry
                    </h2>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:35px 40px;font-family:Arial,sans-serif;color:#374151;line-height:1.7;font-size:15px;">
              <p style="margin-top:0;">Dear ${name},</p>
              <p>
                Thank you for contacting the Singapore Neuroscience Association.
                We have received your message and our team will review it shortly.
              </p>
              <p>If your enquiry is urgent, please contact us directly at:</p>
              <p style="text-align:center;margin:15px 0;">
                <a href="mailto:secretariat@neuroscience.sg"
                   style="color:#991b1b;font-weight:bold;text-decoration:none;font-size:16px;">
                  secretariat@neuroscience.sg
                </a>
              </p>
              <p>
                We appreciate your interest in SNA and look forward to assisting you.
              </p>
              <p style="margin-top:30px;">
                Kind regards,<br/>
                <strong>Singapore Neuroscience Association</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;padding:20px;font-size:12px;color:#6b7280;text-align:center;">
              This is an automated confirmation email.<br/>
              © ${new Date().getFullYear()} Singapore Neuroscience Association
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
    `;

    await resend.emails.send({
      from: "Singapore Neuroscience Association <no-reply@neuroscience.sg>",
      to: email,
      subject:
        "Thank you for contacting the Singapore Neuroscience Association",
      html: autoReplyHtml,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" }),
    };
  } catch (error) {
    console.error("Resend Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email failed to send" }),
    };
  }
};
