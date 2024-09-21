import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, rating, good, bad, suggestion } = req.body;

    // Validate required fields
    if (!name || !email || !rating) {
      return res.status(400).json({ success: false, message: "Name, Email, and Rating are required." });
    }

    try {
      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.FROM_EMAIL_ADDRESS, 
          pass: process.env.FROM_EMAIL_PASS1, 
        },
      });

      
      const mailOptions = {
        from: process.env.FROM_EMAIL_ADDRESS, 
        to: process.env.TO_EMAIL_ADDRESS, 
    
        subject: `New Feedback from ${name}`,
        text: `
          You have received new feedback:
          
          Name: ${name}
          Email: ${email}
          Rating: ${rating}
          Good: ${good || "N/A"}
          Bad: ${bad || "N/A"}
          Suggestion: ${suggestion || "N/A"}
        `,
      };


      await transporter.sendMail(mailOptions);


      res.status(200).json({ success: true, message: "Thank you for your feedback!" });
    } catch (error) {
      console.error("Error sending email:", error);
      
      res.status(500).json({
        success: false,
        message: error?.message || "An error occurred while sending the feedback.",
      });
    }
  } else {
   
    res.status(405).json({ error: "Method not allowed" });
  }
}
