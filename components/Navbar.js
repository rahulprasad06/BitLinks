
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SHORTEN', href: '/shorten' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className="
          mx-auto flex max-w-7xl items-center justify-between
          rounded-full border border-white/[0.12]
          bg-neutral-900/70 px-6 py-4
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          transition-all duration-300
          sm:px-10
        "
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-extrabold tracking-[0.12em]"
        >
          <span className="text-white">BIT</span>
          <span className="text-cyan-400">LINKS</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative text-s  tracking-wider
                text-neutral-300 transition-colors duration-200
                hover:text-cyan-400
                after:absolute after:-bottom-2 after:left-0
                after:h-[2px] after:w-0 after:bg-cyan-400
                after:transition-all after:duration-300
                hover:after:w-full font-bold
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/shorten"
          className="
            hidden rounded-full border border-cyan-400/30
            bg-cyan-400/10 px-5 py-2.5 text-sm font-bold
            text-cyan-300 transition-all duration-300
            hover:border-cyan-300/70 hover:bg-cyan-400/20
            md:inline-flex
          "
        >
          Get Started 
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-neutral-900/90 p-4 shadow-xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold tracking-wide text-neutral-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/shorten"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-bold text-neutral-950 hover:bg-cyan-300"
            >
              Get Started ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
