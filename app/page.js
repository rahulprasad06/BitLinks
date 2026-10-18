
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleShorten = async (e) => {
    e.preventDefault()
    setError('')
    setShortUrl('')

    try {
      const parsedUrl = new URL(url)

      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Please enter a valid HTTP or HTTPS URL.')
      }
    } catch {
      setError('Please enter a valid URL, including https://')
      return
    }

    setLoading(true)

    try {
      // Update this endpoint and payload to match your existing API.
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          shorturl: customAlias.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to shorten this URL.')
      }

      const result = data.shorturl || data.shortUrl

      if (!result) {
        throw new Error('The API did not return a short URL.')
      }

      setShortUrl(
        result.startsWith('http')
          ? result
          : `${window.location.origin}/${result}`
      )
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
    } catch {
      setError('Unable to copy automatically. Please copy the link manually.')
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.15] blur-[150px]" />
        <div className="absolute -left-48 top-[500px] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div className="absolute -right-48 top-[700px] h-[400px] w-[400px] rounded-full bg-blue-500/[0.08] blur-[130px]" />
      </div>

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            A simpler way to share links
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
            Shorten links.
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Share smarter.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            Turn long, messy URLs into short, clean links.
            One simple tool to make sharing across the internet effortless.
          </p>

         

          {/* Small highlights */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Easy to use
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Quick link creation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Share anywhere
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Why BitLinks?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              Less clutter. More connection.
            </h2>
            <p className="mt-5 leading-7 text-neutral-400">
              Everything you need to create and share compact links through
              a clean, straightforward experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <Feature
              icon="↗"
              title="Short & simple"
              description="Replace lengthy URLs with compact links that are easier to share in messages, posts, and documents."
            />

            <Feature
              icon="⌘"
              title="Your own alias"
              description="Choose a memorable custom alias when creating a link, if it is available and supported by your service."
            />

            <Feature
              icon="◇"
              title="Made for sharing"
              description="Use your shortened URLs across social media, chats, emails, and anywhere links are welcome."
            />

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-12 lg:p-16">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Three simple steps
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
              From long to link-ready.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Paste',
                description: 'Enter the long URL you want to shorten.',
              },
              {
                number: '02',
                title: 'Create',
                description: 'Generate your short link in a few clicks.',
              },
              {
                number: '03',
                title: 'Share',
                description: 'Copy the result and share it anywhere.',
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] font-bold text-cyan-300">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-7 text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Your next link starts
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              right here.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-neutral-400">
            Make your next link easier to share with BitLinks.
          </p>

          <Link
            href="/shorten"
            className=" mt-9 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-bold text-grey transition hover:scale-[1.03] hover:bg-cyan-300"
          >
            Explore BitLinks 
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Link href="/" className="text-xl font-extrabold tracking-wide">
            <span className="text-white">BIT</span>
            <span className="text-cyan-400">LINKS</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
            <Link href="/about" className="transition hover:text-cyan-400">
              About
            </Link>
            <Link href="/shorten" className="transition hover:text-cyan-400">
              Shorten
            </Link>
            <Link href="/contact" className="transition hover:text-cyan-400">
              Contact
            </Link>
          </div>

          <p className="text-sm text-neutral-500">
            Making every link simpler.
          </p>
        </div>
      </footer>
    </main>
  )
}

function Feature({ icon, title, description }) {
  return (
    <div className="group rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055] sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-2xl text-cyan-300 transition group-hover:bg-cyan-400/15">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-neutral-400">
        {description}
      </p>
    </div>
  )
}

