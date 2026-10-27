
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 -top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-40 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* Introduction */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Athul Santo<span className="text-cyan-400">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            I build responsive web applications and enjoy turning ideas
            into practical digital experiences. With hands-on experience
            in frontend and backend development, I'm continuously improving
            my skills and building projects that solve real problems.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              View Projects ↗
            </Link>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Developer code card */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-cyan-400/10 blur-2xl" />

          <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl sm:p-8">
            {/* Window header */}
            <div className="mb-8 flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto font-mono text-xs text-slate-500">
                developer.js
              </span>
            </div>

            {/* Code content */}
            <div className="overflow-x-auto font-mono text-sm leading-8 sm:text-base">
              <p>
                <span className="text-fuchsia-400">const</span>{' '}
                <span className="text-cyan-300">developer</span> = {'{'}
              </p>

              <p className="pl-5">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-emerald-300">'Athul Santo'</span>,
              </p>

              <p className="pl-5">
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-emerald-300">'Full Stack Developer'</span>,
              </p>

              <p className="pl-5">
                <span className="text-slate-400">stack:</span> [
              </p>

              <p className="pl-10 text-emerald-300">'React', 'Node.js',</p>
              <p className="pl-10 text-emerald-300">'Express', 'MongoDB'</p>
              <p className="pl-5">],</p>

              <p className="pl-5">
                <span className="text-slate-400">mindset:</span>{' '}
                <span className="text-emerald-300">'Always learning'</span>
              </p>

              <p>{'}'}</p>
            </div>

            <div className="mt-7 rounded-xl border border-cyan-400/10 bg-cyan-400/5 p-4">
              <p className="text-sm leading-6 text-slate-300">
                <span className="mr-2 text-cyan-400">→</span>
                Learning, building, and improving one line of code at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
