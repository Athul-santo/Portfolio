
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const codeLines = [
  [
    { text: 'const ', className: 'text-secondary' },
    { text: 'developer', className: 'text-primary' },
    { text: ' = {', className: '' },
  ],
  [
    { text: '  name: ', className: 'text-base-content/60' },
    { text: "'Athul Santo'", className: 'text-success' },
    { text: ',', className: '' },
  ],
  [
    { text: '  role: ', className: 'text-base-content/60' },
    { text: "'Full Stack Developer'", className: 'text-success' },
    { text: ',', className: '' },
  ],
  [
    { text: '  stack: ', className: 'text-base-content/60' },
    { text: '[', className: '' },
  ],
  [
    { text: "    'React', 'Node.js',", className: 'text-success' },
  ],
  [
    { text: "    'Express', 'MongoDB'", className: 'text-success' },
  ],
  [
    { text: '  ],', className: '' },
  ],
  [
    { text: '  mindset: ', className: 'text-base-content/60' },
    { text: "'Always learning'", className: 'text-success' },
  ],
  [
    { text: '}', className: '' },
  ],
]

const getLineLength = (line) =>
  line.reduce((sum, token) => sum + token.text.length, 0)

const totalChars = codeLines.reduce((sum, line) => sum + getLineLength(line), 0)

let offset = 0
const lineOffsets = codeLines.map((line) => {
  const start = offset
  offset += getLineLength(line)
  return start
})

function Hero() {
  const [typingStarted, setTypingStarted] = useState(false)
  const [typedChars, setTypedChars] = useState(0)

  useEffect(() => {
    const startTimer = setTimeout(() => setTypingStarted(true), 2200)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (!typingStarted) return

    const startedAt = performance.now()

    const intervalId = setInterval(() => {
      const elapsed = performance.now() - startedAt
      const next = Math.min(totalChars, Math.floor(elapsed / 18))
      setTypedChars(next)

      if (next >= totalChars) {
        clearInterval(intervalId)
      }
    }, 20)

    return () => clearInterval(intervalId)
  }, [typingStarted])

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 -top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-40 -z-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="grid items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* Introduction */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/10 px-4 py-2 text-sm text-success">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Open to opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Athul Santo<span className="text-primary"></span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-base-content/80 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-base-content/70">
            I build responsive web applications and enjoy turning ideas
            into practical digital experiences. With hands-on experience
            in frontend and backend development, I'm continuously improving
            my skills and building projects that solve real problems.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-content transition hover:-translate-y-1 hover:bg-primary/90"
            >
              View Projects ↗
            </Link>

            <a
              href="mailto:athulsanto14@gmail.com"
              className="rounded-lg border border-base-content/15 px-6 py-3 font-semibold text-base-content transition hover:border-primary hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex gap-6 text-sm text-base-content/60">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Developer code card */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-primary/15 blur-2xl" />

          <div className="relative rounded-2xl border border-base-content/10 bg-base-200/90 p-6 shadow-2xl sm:p-8">
            {/* Window header */}
            <div className="mb-8 flex items-center gap-2 border-b border-base-content/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-error" />
              <span className="h-3 w-3 rounded-full bg-warning" />
              <span className="h-3 w-3 rounded-full bg-success" />
              <span className="ml-auto font-mono text-xs text-base-content/50">
                developer.js
              </span>
            </div>

            {/* Code content */}
            <div className="min-h-[288px] overflow-x-auto font-mono text-sm leading-8 sm:text-base">
              {codeLines.map((line, lineIndex) => {
                const lineStart = lineOffsets[lineIndex]
                const lineLength = getLineLength(line)
                const visibleChars = Math.max(
                  0,
                  Math.min(lineLength, typedChars - lineStart),
                )
                const isActive =
                  typedChars >= lineStart && typedChars < lineStart + lineLength

                let remaining = visibleChars

                return (
                  <p key={lineIndex} className="whitespace-pre">
                    {line.map((token, tokenIndex) => {
                      if (remaining <= 0) return null

                      const visibleText = token.text.slice(0, remaining)
                      remaining -= visibleText.length

                      return (
                        <span key={tokenIndex} className={token.className}>
                          {visibleText}
                        </span>
                      )
                    })}

                    {isActive && (
                      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse rounded-full bg-primary align-middle" />
                    )}
                  </p>
                )
              })}
            </div>

            <div className="mt-7 rounded-xl border border-primary/15 bg-primary/5 p-4">
              <p className="text-sm leading-6 text-base-content/80">
                <span className="mr-2 text-primary">→</span>
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
