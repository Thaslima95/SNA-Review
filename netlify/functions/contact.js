const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // ===============================
    // 1️⃣ ADMIN NOTIFICATION EMAIL
    // ===============================

    const adminMsg = {
      to: "thaslibanujas7@gmail.com", // Admin receiving email
      from: "nizuthasli15@gmail.com", // MUST be verified in SendGrid
      subject: "New Website Enquiry – Singapore Neuroscience Association",
      html: `
      <body style="margin:0; padding:0; font-family:Arial,sans-serif; background:#f8fafc;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

                <!-- HEADER -->
                <tr>
                  <td style="background:#991b1b; padding:25px 30px;">
<img
  src="http://cdn.mcauto-images-production.sendgrid.net/1686faa544bc2bca/ffd6948e-7e80-4246-bf73-51116e3c72e3/617x312.png"
  alt="Singapore Neuroscience Association"
  width="140"
  style="display:block;"
/>

                    <h2 style="color:#ffffff; margin:0;">
                      New Contact Form Submission
                    </h2>
                  </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                  <td style="padding:30px;">
                    <p style="color:#374151;">A new enquiry has been received via the SNA website.</p>

                    <p style="font-weight:bold; margin-top:20px;">Name</p>
                    <p>${name}</p>

                    <p style="font-weight:bold;">Email</p>
                    <p><a href="mailto:${email}" style="color:#991b1b;">${email}</a></p>

                    <p style="font-weight:bold;">Message</p>
                    <div style="background:#f3f4f6; padding:15px; border-radius:8px;">
                      ${message}
                    </div>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="background:#f9fafb; padding:20px; font-size:12px; color:#6b7280; text-align:center;">
                    Singapore Neuroscience Association<br/>
                    28 Medical Drive, Centre for Life Sciences<br/>
                    Singapore 117456
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      `,
    };

    // ===============================
    // 2️⃣ AUTO-REPLY TO USER
    // ===============================

    const autoReply = {
      to: email,
      from: "nizuthasli15@gmail.com",
      subject:
        "Thank you for contacting the Singapore Neuroscience Association",
      html: `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6; padding:40px 0;">
    <tr>
      <td align="center">

        <!-- MAIN CONTAINER -->
        <table width="600" cellpadding="0" cellspacing="0" 
          style="background:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="background:#ffffff; padding:25px 30px; border-bottom:1px solid #e5e7eb;">

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>

                  <!-- LOGO LEFT -->
                  <td width="180" align="left">
                    <img
                      src="https://sna-review.netlify.app/sna-logo.png"
                      alt="Singapore Neuroscience Association"
                      width="140"
                      style="display:block;"
                    />
                  </td>

                  <!-- TITLE CENTER -->
                  <td align="center">
                    <h2 style="
                      margin:0;
                      font-family:Arial, sans-serif;
                      font-size:22px;
                      color:#991b1b;
                      font-weight:700;
                    ">
                      Thank You for Your Enquiry
                    </h2>
                  </td>

                  <!-- EMPTY RIGHT FOR BALANCE -->
                  <td width="180"></td>

                </tr>
              </table>

            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="
              padding:35px 40px;
              font-family:Arial, sans-serif;
              color:#374151;
              line-height:1.7;
              font-size:15px;
            ">

              <p style="margin-top:0;">Dear ${name},</p>

              <p>
                Thank you for contacting the Singapore Neuroscience Association.
                We have received your message and our team will review it shortly.
              </p>

              <p>
                If your enquiry is urgent, please contact us directly at:
              </p>

              <!-- CENTERED EMAIL ONLY -->
              <p style="text-align:center; margin:15px 0;">
                <a href="mailto:secretariat@neuroscience.sg" 
                   style="
                     color:#991b1b;
                     font-weight:bold;
                     text-decoration:none;
                     font-size:16px;
                   ">
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

          <!-- FOOTER -->
          <tr>
            <td style="
              background:#f9fafb;
              padding:20px;
              font-size:12px;
              color:#6b7280;
              text-align:center;
              font-family:Arial, sans-serif;
            ">
              This is an automated confirmation email.<br/>
              © ${new Date().getFullYear()} Singapore Neuroscience Association
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
  `,
    };
    const autoReply = {
      to: email,
      from: "nizuthasli15@gmail.com",
      subject:
        "Thank you for contacting the Singapore Neuroscience Association",
      html: `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6; padding:40px 0;">
    <tr>
      <td align="center">

        <!-- MAIN CONTAINER -->
        <table width="600" cellpadding="0" cellspacing="0" 
          style="background:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="background:#ffffff; padding:25px 30px; border-bottom:1px solid #e5e7eb;">

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>

                  <!-- LOGO LEFT -->
                  <td width="180" align="left">
                    <img
                      src="https://sna-review.netlify.app/sna-logo.png"
                      alt="Singapore Neuroscience Association"
                      width="140"
                      style="display:block;"
                    />
                  </td>

                  <!-- TITLE CENTER -->
                  <td align="center">
                    <h2 style="
                      margin:0;
                      font-family:Arial, sans-serif;
                      font-size:22px;
                      color:#991b1b;
                      font-weight:700;
                    ">
                      Thank You for Your Enquiry
                    </h2>
                  </td>

                  <!-- EMPTY RIGHT FOR BALANCE -->
                  <td width="180"></td>

                </tr>
              </table>

            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="
              padding:35px 40px;
              font-family:Arial, sans-serif;
              color:#374151;
              line-height:1.7;
              font-size:15px;
            ">

              <p style="margin-top:0;">Dear ${name},</p>

              <p>
                Thank you for contacting the Singapore Neuroscience Association.
                We have received your message and our team will review it shortly.
              </p>

              <p>
                If your enquiry is urgent, please contact us directly at:
              </p>

              <!-- CENTERED EMAIL ONLY -->
              <p style="text-align:center; margin:15px 0;">
                <a href="mailto:secretariat@neuroscience.sg" 
                   style="
                     color:#991b1b;
                     font-weight:bold;
                     text-decoration:none;
                     font-size:16px;
                   ">
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

          <!-- FOOTER -->
          <tr>
            <td style="
              background:#f9fafb;
              padding:20px;
              font-size:12px;
              color:#6b7280;
              text-align:center;
              font-family:Arial, sans-serif;
            ">
              This is an automated confirmation email.<br/>
              © ${new Date().getFullYear()} Singapore Neuroscience Association
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
  `,
    };

    // Send both emails
    await sgMail.send(adminMsg);
    await sgMail.send(autoReply);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email failed to send" }),
    };
  }
};
