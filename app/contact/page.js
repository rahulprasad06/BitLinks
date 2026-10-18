
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')

    // Connect this form to a backend/API to send messages.
    setStatus('Your message form is ready. Connect an API to send it.')
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-5 pb-20 pt-32 text-white sm:px-8">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-72 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <section className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Contact BitLinks
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let's start a
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            Have a question, found an issue, or have an idea to improve
            BitLinks? Send us a message.
          </p>
        </section>

        {/* Contact content */}
        <section className="grid gap-7 lg:grid-cols-5">

          {/* Left information panel */}
          <div className="space-y-5 lg:col-span-2">

            <div className="rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                ✉
              </div>

              <h2 className="text-2xl font-bold">Get in touch</h2>

              <p className="mt-3 leading-7 text-neutral-400">
                We value your feedback. Reach out with questions, suggestions,
                or problems you encounter while using the service.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                    ↗
                  </div>
                  <div>
                    <h3 className="font-semibold">General enquiries</h3>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">
                      Questions and suggestions about BitLinks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                    ◈
                  </div>
                  <div>
                    <h3 className="font-semibold">Report an issue</h3>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">
                      Let us know if a link or feature isn't working correctly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                    ♡
                  </div>
                  <div>
                    <h3 className="font-semibold">Share feedback</h3>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">
                      Tell us how we can make BitLinks better.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small note */}
            <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-blue-500/[0.10] to-cyan-400/[0.04] p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold text-cyan-300">
                Have an idea?
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Your feedback can help shape the next version of BitLinks.
                We appreciate you taking the time to reach out.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-white/[0.09] bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-9 lg:col-span-3">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-neutral-300">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#111113] px-4 py-3 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="General enquiry">General enquiry</option>
                  <option value="Technical issue">Technical issue</option>
                  <option value="Feedback">Feedback or suggestion</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={3000}
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                />
                <p className="mt-2 text-right text-xs text-neutral-500">
                  {form.message.length}/3000
                </p>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-white transition hover:bg-cyan-500"
              >
                Send Message
                <span className="transition-transform group-hover:translate-x-1">
                </span>
              </button>

              {status && (
                <p
                  role="status"
                  className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-6 text-amber-200"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Bottom navigation */}
        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-7 text-sm text-neutral-500 sm:flex-row">
          <Link href="/" className="text-lg font-extrabold tracking-wide">
            <span className="text-white">BIT</span>
            <span className="text-cyan-400">LINKS</span>
          </Link>

          <p>Making every link simpler.</p>

          <Link href="/about" className="transition hover:text-cyan-400">
            About BitLinks ↗
          </Link>
        </footer>

      </div>
    </main>
  )
}
