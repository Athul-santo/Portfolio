import { useEffect, useRef, useState } from 'react'

const highlights = [
  'Contributed to the development and maintenance of a School ERP application using React, Node.js, Express, and PostgreSQL.',
  'Built Exam Module workflows covering assessment creation, marks entry, result approvals, and grade books.',
  'Supported Scholastic, Co-Scholastic, and Holistic Progress Card (HPC) assessments with different scoring and evaluation rules.',
  'Implemented marks entry and bulk Excel uploads with data validation and assessment-specific rules.',
  'Integrated REST APIs and database operations across submission, approval, rejection, and result-calculation workflows.',
  'Maintained mobile app features aligned with the web platform.',
  'Joined client discussions to clarify requirements and requested changes.',
  'Used Git, GitHub, and Docker throughout the development workflow.',
]

const technologies = [
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'REST APIs',
  'Docker',
  'Git & GitHub',
]

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true

    return (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
    )
  })

  useEffect(() => {
    if (visible) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return [ref, visible]
}

function Experience() {
  const [revealRef, revealed] = useReveal()

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 overflow-hidden border-t border-base-content/10 bg-base-100"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="experience-orb absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="experience-orb experience-orb-right absolute -right-40 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-secondary/10 blur-[110px]" />
        <div className="experience-grid absolute inset-0 text-base-content opacity-[0.06]" />
      </div>

      <div className="relative px-6 py-14 sm:py-16">
        <div
          ref={revealRef}
          className={`mx-auto max-w-6xl transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Section intro */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Experience
            </p>

            <h2
              id="experience-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Where I&apos;ve worked
              <span className="text-primary">.</span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-base-content/70">
              I spent three months as a Full Stack Developer Intern at Aionpixel
              Technologies, building and supporting School ERP features across
              web and mobile.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-6 pl-5 sm:pl-8">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-7 w-px bg-gradient-to-b from-primary/70 via-primary/25 to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-base-100"
            />

            <article className="group relative overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/40 transition-colors duration-300 hover:border-primary/25">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              />

              <header className="relative p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-base-content sm:text-xl">
                      Full Stack Developer Intern
                    </h3>
                    <p className="mt-1 text-sm text-base-content/60">
                      Aionpixel Technologies
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      School ERP · Exam Module
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-base-content/55">
                      June 2026 – Aug 2026
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      3 months
                    </span>
                  </div>
                </div>
              </header>

              <div className="relative border-t border-base-content/10 px-6 py-6 sm:px-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-base-content/40">
                  What I did
                </p>

                <ul className="mt-4 grid gap-x-10 gap-y-3 text-sm leading-6 text-base-content/70 md:grid-cols-2 md:gap-y-4">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 transition-colors duration-300 group-hover:bg-primary"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative border-t border-base-content/10 px-6 py-5 sm:px-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-base-content/40">
                  Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1.5 rounded-md border border-base-content/10 bg-base-100/50 px-2.5 py-1 text-[11px] text-base-content/65"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-primary/70"
                      />
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
