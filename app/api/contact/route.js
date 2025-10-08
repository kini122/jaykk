import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    // parse body safely from a cloned request to avoid consuming the original stream
    const text = await request.clone().text()
    let data = {}
    try {
      data = text ? JSON.parse(text) : {}
    } catch (parseErr) {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    const { name, email, message } = data || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, and message are required.' }, { status: 400 })
    }

    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS

    if (!user || !pass) {
      return NextResponse.json({ error: 'Email transporter is not configured.' }, { status: 500 })
    }

    // create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    })

    const htmlBody = `
      <h2>New Website Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <div>${escapeHtml(message).replace(/\n/g, '<br/>')}</div>
    `

    await transporter.sendMail({
      from: user,
      to: user,
      subject: 'New Website Enquiry',
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    // Avoid logging entire error objects that may contain streams; log message and stack for debugging
    const errMsg = err && typeof err === 'object' && 'message' in err ? err.message : String(err)
    const errStack = err && typeof err === 'object' && 'stack' in err ? err.stack : undefined
    console.error('Error sending contact email:', errMsg)
    if (errStack) console.error(errStack)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}

function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
