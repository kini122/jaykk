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
      return jsonResponse({ error: 'Invalid JSON body.' }, 400)
    }

    const { name, email, message } = data || {}

    if (!name || !email || !message) {
      return jsonResponse({ error: 'Missing required fields: name, email, and message are required.' }, 400)
    }

    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS

    console.log('Contact request data:', { name, email, message: message ? `${String(message).slice(0,80)}...` : message })
    console.log('Email user present:', Boolean(user))

    if (!user || !pass) {
      console.error('Email transporter not configured - missing credentials')
      return jsonResponse({ error: 'Email transporter is not configured.' }, 500)
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

    // verify transporter to provide clearer errors
    try {
      await transporter.verify()
      console.log('Nodemailer transporter verified')
    } catch (verifyErr) {
      console.error('Transporter verification failed:', verifyErr && verifyErr.message ? verifyErr.message : String(verifyErr))
      return jsonResponse({ error: 'Email transporter verification failed.' }, 500)
    }

    const htmlBody = `
      <h2>New Website Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <div>${escapeHtml(message).replace(/\n/g, '<br/>')}</div>
    `

    try {
      await transporter.sendMail({
        from: user,
        to: user,
        subject: 'New Website Enquiry',
        html: htmlBody,
      })
    } catch (sendErr) {
      console.error('sendMail failed:', sendErr && sendErr.message ? sendErr.message : String(sendErr))
      return jsonResponse({ error: 'Failed to send email.' }, 500)
    }

    return jsonResponse({ success: true }, 200)
  } catch (err) {
    // Avoid logging entire error objects that may contain streams; log message and stack for debugging
    const errMsg = err && typeof err === 'object' && 'message' in err ? err.message : String(err)
    const errStack = err && typeof err === 'object' && 'stack' in err ? err.stack : undefined
    console.error('Error sending contact email:', errMsg)
    if (errStack) console.error(errStack)
    return jsonResponse({ error: 'Failed to send email.' }, 500)
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

// handle CORS preflight requests from preview/remote origins
function jsonResponse(payload, status = 200) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  return NextResponse.json(payload, { status, headers })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
