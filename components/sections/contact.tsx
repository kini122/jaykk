"use client"

import type React from "react"
import { useState } from "react"
import { Instagram, Linkedin } from "lucide-react"

export function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus(null)
    setLoading(true)

    const payload = {
      firstName,
      lastName,
      email,
      subject,
      message,
      // include combined name for the backend
      name: `${firstName} ${lastName}`.trim(),
    }

    // Use explicit origin to avoid unexpected proxy/CORS rewrites in preview environments
    const url = `${window.location.origin}/api/contact`

    // Abort if request takes too long
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000)

    try {
      console.log('Submitting contact request to:', url)
      console.log('Contact payload preview:', {
        name: payload.name,
        email: payload.email,
        message: payload.message ? `${String(payload.message).slice(0, 80)}...` : payload.message,
      })

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      clearTimeout(timeout)

      if (res.ok) {
        console.log('Contact request succeeded with status', res.status)
        setStatus({ ok: true, message: "✅ Message sent successfully!" })
        setFirstName("")
        setLastName("")
        setEmail("")
        setSubject("")
        setMessage("")
      } else {
        let bodyText = ''
        try {
          bodyText = await res.text()
          console.error('Contact request failed', res.status, bodyText)
        } catch (readErr) {
          console.error('Failed to read error body from /api/contact', readErr)
        }
        setStatus({ ok: false, message: `❌ Failed to send message. (${res.status}) Please try again.` })
      }
    } catch (err) {
      // Log full error for debugging (network errors, CORS, TLS, aborts)
      console.error('Network error sending contact request:', err)

      // Provide helpful UX message while preserving details in the console
      if (err instanceof Error && err.name === 'AbortError') {
        setStatus({ ok: false, message: '❌ Request timed out. Please try again.' })
      } else {
        setStatus({ ok: false, message: '❌ Failed to send message. Network error.' })
      }
    } finally {
      clearTimeout(timeout)
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section section-muted">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Contact me</h2>
          <p className="mt-2 text-muted-foreground">Simply fill out the form and I&apos;ll be in touch soon!</p>

          <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name (required)
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email (required)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject (required)
              </label>
              <input
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message (required)
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
            {status && (
              <div className={`mt-2 text-sm ${status.ok ? "text-green-600" : "text-red-600"}`} role="status" aria-live="polite">
                {status.message}
              </div>
            )}
          </form>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F790f35fadef64566860a9626adb0c749%2F3a01ecc328e74b509b3f9d4d6b74e28d"
            alt="Abstract painting close up"
            className="w-full h-72 md:h-full object-cover rounded-md bg-muted"
          />
        </div>
      </div>
    </section>
  )
}
