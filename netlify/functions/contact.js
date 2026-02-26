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
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;font-family:Arial,sans-serif;">
        
        <!-- HEADER -->
        <tr>
          <td style="padding:25px 30px;border-bottom:1px solid #e5e7eb;">
            <table width="100%">
              <tr>
                <td width="160">
                  <img 
                    src="https://neuroscience.sg/sna-logo.png"
                    alt="Singapore Neuroscience Association"
                    width="130"
                    style="display:block;"
                  />
                </td>
                <td align="left">
                  <h2 style="margin:0;font-size:20px;color:#991b1b;font-weight:700;">
                    New Contact Form Submission
                  </h2>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:35px 40px;color:#374151;font-size:15px;line-height:1.7;">
            
            <p style="margin-top:0;">
              A new enquiry has been submitted via the SNA website.
            </p>

            <!-- Name -->
            <div style="margin-top:25px;">
              <p style="margin:0 0 5px 0;font-weight:600;color:#111827;">Name</p>
              <div style="background:#f9fafb;padding:12px 15px;border-radius:6px;border:1px solid #e5e7eb;">
                ${name}
              </div>
            </div>

            <!-- Email -->
            <div style="margin-top:20px;">
              <p style="margin:0 0 5px 0;font-weight:600;color:#111827;">Email</p>
              <div style="background:#f9fafb;padding:12px 15px;border-radius:6px;border:1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color:#991b1b;text-decoration:none;font-weight:600;">
                  ${email}
                </a>
              </div>
            </div>

            <!-- Message -->
            <div style="margin-top:20px;">
              <p style="margin:0 0 5px 0;font-weight:600;color:#111827;">Message</p>
              <div style="background:#f3f4f6;padding:15px;border-radius:8px;border:1px solid #e5e7eb;">
                ${message.replace(/\n/g, "<br/>")}
              </div>
            </div>

          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f9fafb;padding:20px;font-size:12px;color:#6b7280;text-align:center;">
            This notification was automatically generated from the SNA website.<br/>
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
      to: "secretariatneuroscience@gmail.com",
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
                <a href="mailto:secretariatneuroscience@gmail.com"
                   style="color:#991b1b;font-weight:bold;text-decoration:none;font-size:16px;">
                  secretariatneuroscience@gmail.com
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
