import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.warn('[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not set — POST /api/contact will return 500 until configured.');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json({ limit: '10kb' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many messages sent from this device. Please try again later.' },
});

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ success: false, error: 'Name is required.' });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ success: false, error: 'A valid email is required.' });
  }
  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Message is required.' });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ success: false, error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` });
  }

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return res.status(500).json({ success: false, error: 'Email service is not configured on the server.' });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: cleanEmail,
      subject: `New Portfolio Contact — ${cleanName}`,
      text: `New message from your portfolio\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #163A5F; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('[contact] Failed to send email:', err instanceof Error ? err.message : err);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
