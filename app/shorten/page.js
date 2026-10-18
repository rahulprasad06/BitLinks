
'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState('')
  const [shorturl, setshorturl] = useState('')
  const [generated, setgenerated] = useState(false)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState('')

  const generate = async (e) => {
    e.preventDefault()
    seterror('')

    if (!url.trim() || !shorturl.trim()) {
      seterror('Please enter both the URL and your preferred short URL.')
      return
    }

    try {
      const parsedUrl = new URL(url.trim())

      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        seterror('Please enter a valid HTTP or HTTPS URL.')
        return
      }
    } catch {
      seterror('Please enter a valid URL, including https://')
      return
    }

    setloading(true)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url.trim(),
          shorturl: shorturl.trim(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Unable to generate your link.')
      }

      // Preserve your existing API and short-link format.
      const host = process.env.NEXT_PUBLIC_HOST || window.location.origin
      const baseUrl = host.replace(/\/+$/, '')
      const path = shorturl.trim().replace(/^\/+/, '')

      setgenerated(`${baseUrl}/${path}`)
      seturl('')
      setshorturl('')

      alert(result.message)
    } catch (err) {
      seterror(err.message || 'Something went wrong. Please try again.')
    } finally {
      setloading(false)
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generated)
      alert('Short link copied!')
    } catch {
      seterror('Could not copy automatically. Please copy the link manually.')
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-5 pb-20 pt-32 text-white sm:px-8">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute -right-40 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <section className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            BitLinks URL Shortener
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Shorten your links.
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Share smarter.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-neutral-400 sm:text-lg">
            Turn long URLs into short, memorable links in just a few clicks.
            Simple, fast, and ready to share.
          </p>
        </section>

        {/* Shortener card */}
        <section className="mx-auto max-w-3xl rounded-3xl border border-white/[0.12] bg-white/[0.045] p-5 shadow-[0_20px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-9">

          <div className="mb-7">
            <h2 className="text-2xl font-bold">Generate your short URL</h2>
            <p className="mt-2 text-sm text-neutral-400">
              Enter your destination URL and choose a custom short name.
            </p>
          </div>

          <form onSubmit={generate} className="space-y-6">

            {/* Original URL */}
            <div>
              <label
                htmlFor="original-url"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                Destination URL
              </label>

              <input
                id="original-url"
                type="url"
                value={url}
                placeholder="https://example.com/your/long/link"
                required
                onChange={(e) => seturl(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            {/* Custom short URL */}
            <div>
              <label
                htmlFor="short-url"
                className="mb-2 block text-sm font-medium text-neutral-300"
              >
                Your preferred short URL
              </label>

              <div className="flex overflow-hidden rounded-xl border border-white/10 bg-black/30 transition focus-within:border-cyan-400/60 focus-within:ring-2 focus-within:ring-cyan-400/10">
                <span className="flex items-center border-r border-white/10 bg-white/[0.04] px-3 text-sm text-cyan-300 sm:px-4">
                  bitlinks/
                </span>

                <input
                  id="short-url"
                  type="text"
                  value={shorturl}
                  placeholder="my-link"
                  required
                  maxLength={100}
                  onChange={(e) => setshorturl(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-neutral-600"
                />
              </div>

              <p className="mt-2 text-xs text-neutral-500">
                Choose a memorable name for your link.
              </p>
            </div>

            {/* Error */}
            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-400/20 bg-red-400/[0.06] p-3 text-sm text-red-300"
              >
                {error}
              </p>
            )}

            {/* Generate button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Generating...' : 'Generate Short URL'}

              {!loading && (
                <span className="transition-transform group-hover:translate-x-1">
                  
                </span>
              )}
            </button>
          </form>

          {/* Generated URL */}
          {generated && (
            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                  ✓
                </span>
                <h3 className="font-semibold text-white">
                  Your short link is ready!
                </h3>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={generated}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 flex-1 break-all rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-cyan-300 transition hover:text-cyan-200"
                >
                  {generated}
                </Link>

                <button
                  type="button"
                  onClick={copyLink}
                  className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  Copy link
                </button>
              </div>

              <p className="mt-3 text-xs text-neutral-500">
                Keep this link handy and share it wherever you need.
              </p>
            </div>
          )}
        </section>

        {/* How it works */}
        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            {
              number: '01',
              title: 'Paste your URL',
              text: 'Enter the long link you want to shorten.',
            },
            {
              number: '02',
              title: 'Choose an alias',
              text: 'Give your short link a memorable name.',
            },
            {
              number: '03',
              title: 'Share it anywhere',
              text: 'Copy your new link and share it with others.',
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl"
            >
              <span className="text-sm font-bold tracking-widest text-cyan-400">
                {step.number}
              </span>
              <h3 className="mt-3 font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                {step.text}
              </p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-7 text-sm text-neutral-500 sm:flex-row">
          <Link href="/" className="text-lg font-extrabold tracking-wide">
            <span className="text-white">BIT</span>
            <span className="text-cyan-400">LINKS</span>
          </Link>

          <p>Making every link simpler.</p>

          <Link
            href="/contact"
            className="transition hover:text-cyan-400"
          >
            Contact Us ↗
          </Link>
        </footer>

      </div>
    </main>
  )
}

export default Shorten
