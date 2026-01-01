import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject }: ContactFormData = req.body;
    const mailFrom = process.env.MAIL_FROM;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return res.status(500).json({ error: 'RESEND_API_KEY environment variable is not configured' });
    }

    if (!name || !email || !subject) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!mailFrom) {
      return res.status(500).json({ error: 'MAIL_FROM environment variable is not configured' });
    }

    const mailTo = process.env.MAIL_TO;
    if (!mailTo) {
      return res.status(500).json({ error: 'MAIL_TO environment variable is not configured' });
    }

    const emailHtml = await render(EmailTemplate({ name, email, subject }));

    const { data, error } = await resend.emails.send({
      from: mailFrom,
      to: [mailTo],
      replyTo: email,
      subject: `Contact: ${subject}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ 
        error: 'Failed to send email',
        details: error.message || JSON.stringify(error)
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Unexpected error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return res.status(500).json({ 
      error: 'Error sending email',
      details: errorMessage
    });
  }
}