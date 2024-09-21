import nodemailer from "nodemailer";
// Load environment variables from .env file


export default async function handler(req, res) {
    if (req.method === "POST") {

        const { name, email, subject, message } = req.body;

        // Configure Nodemailer to use Gmail
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.FROM_EMAIL_ADDRESS, 
                pass: process.env.FROM_EMAIL_PASS, 
            },
        });

        const mailOptions = {
            from: email, 
            to: process.env.TO_EMAIL_ADDRESS, 
            subject: `New Message from ${name}: ${subject}`, 
            text: `You have received a new message from your website:
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
            `
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);

            // Respond with success if email is sent
            res.status(200).json({ success: true, message: "Your message has been sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "There was an issue sending the message." });
        }
    } else {
        // If the request is not a POST, respond with method not allowed
        res.status(405).json({ error: "Method not allowed" });
    }
}
