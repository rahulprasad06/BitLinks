
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] px-5 pb-20 pt-32 text-white sm:px-8">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Hero */}
        <section className="py-16 text-center sm:py-24">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            About BitLinks
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Links made
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              simple & smarter.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            BitLinks makes sharing long URLs effortless. Turn lengthy links
            into short, clean, and easy-to-share URLs in just a few clicks.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/shorten"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-white transition hover:bg-cyan-500"
            >
              Shorten a Link 
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              Back to Home
            </Link>
          </div>
        </section>

        {/* Mission cards */}
        <section className="grid gap-5 md:grid-cols-3">

          <div className="group rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
              ↗
            </div>
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              Make links easier to share, easier to remember, and more
              convenient to use across the digital world.
            </p>
          </div>

          <div className="group rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-2xl text-blue-300">
              ◈
            </div>
            <h2 className="text-xl font-bold">Our Approach</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              A clean interface and a straightforward experience that helps
              you create short links without unnecessary complexity.
            </p>
          </div>

          <div className="group rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-2xl text-purple-300">
              ⌘
            </div>
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              Build a simple, useful link-sharing tool that makes connecting
              people with online content feel effortless.
            </p>
          </div>

        </section>

        {/* How it works */}
        <section className="mt-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Simple by design
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              How BitLinks works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              Three simple steps between a long URL and a shareable link.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Paste your URL',
                description:
                  'Enter the long web address you want to make shorter.',
              },
              {
                number: '02',
                title: 'Create your link',
                description:
                  'BitLinks generates a compact link that points to your destination.',
              },
              {
                number: '03',
                title: 'Share anywhere',
                description:
                  'Copy your shortened URL and share it wherever you need.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.055] to-transparent p-7"
              >
                <span className="text-sm font-bold tracking-widest text-cyan-400">
                  STEP {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.035] to-cyan-400/[0.07] px-6 py-14 text-center backdrop-blur-2xl sm:px-12 sm:py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to make your links shorter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-neutral-400">
            Spend less time managing long URLs and more time sharing what matters.
          </p>
          <Link
            href="/shorten"
            className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3.5 font-bold text-white transition hover:scale-[1.03] hover:bg-cyan-500"
          >
            Get Started with BitLinks 
          </Link>
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
            Get in touch ↗
          </Link>
        </footer>

      </div>
    </main>
  )
}
