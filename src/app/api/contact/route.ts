import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const contactSchema = z.object({
  fullName: z.string().min(2, 'שם מלא חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().min(9, 'מספר טלפון חייב להכיל לפחות 9 ספרות'),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Check if mailer environment variables exist
    const hasResend = !!process.env.RESEND_API_KEY;
    const hasSmtp =
      !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS;

    if (hasResend || hasSmtp) {
      try {
        await sendEmail(validatedData);
        return NextResponse.json({
          success: true,
          message: 'ההודעה נשלחה בהצלחה',
        });
      } catch (error) {
        console.error('Email sending failed:', error);
        return NextResponse.json(
          { success: false, message: 'שגיאה בשליחת האימייל' },
          { status: 500 }
        );
      }
    }

    // Demo fallback - no mailer configured
    console.log('Contact form submission (demo mode):', {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    return NextResponse.json({
      success: true,
      message: 'ההודעה נשלחה בהצלחה (מצב הדגמה)',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'נתונים לא תקינים', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'שגיאה פנימית בשרת' },
      { status: 500 }
    );
  }
}

async function sendEmail(data: z.infer<typeof contactSchema>) {
  const from = process.env.FROM_EMAIL || 'noreply@etoot.co.il';
  const to = process.env.TO_EMAIL || 'info@etoot.co.il';
  const subject = `פנייה חדשה מאתר איתות - ${data.fullName}`;
  const html = `
    <div dir="rtl" style="font-family: Arial, sans-serif;">
      <h2>פנייה חדשה מאתר איתות</h2>
      <p><strong>שם מלא:</strong> ${data.fullName}</p>
      <p><strong>אימייל:</strong> ${data.email}</p>
      <p><strong>טלפון:</strong> ${data.phone}</p>
      ${data.message ? `<p><strong>הודעה:</strong> ${data.message}</p>` : ''}
      <p><strong>תאריך:</strong> ${new Date().toLocaleString('he-IL')}</p>
    </div>
  `;

  // Resend
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import('resend');
    const client = new Resend(process.env.RESEND_API_KEY);
    await client.emails.send({ from, to, subject, html });
    return;
  }

  // Nodemailer
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const { default: nodemailer } = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({ from, to, subject, html });
    return;
  }

  throw new Error('No mailer configuration found');
}
