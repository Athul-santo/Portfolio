import { useEffect, useRef, useState } from 'react'
import profileImage from '../assets/profile.jpg'

const EMAIL = 'athulsanto14@gmail.com'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech stack', href: '#tech-stack' },
  { label: 'Back to top', href: '#home' },
]

function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open quick links"
        aria-haspopup="dialog"
        aria-controls="profile-menu"
        aria-expanded={open}
        className="rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
      >
        <img
          src={profileImage}
          alt="Athul Santo"
          className={`h-11 w-11 rounded-full border-2 object-cover object-top transition ${
            open ? 'border-primary' : 'border-primary/70 hover:border-primary'
          }`}
        />
      </button>

      {open && (
        <div
          id="profile-menu"
          role="dialog"
          aria-label="Quick links"
          className="absolute right-0 top-full z-50 mt-3 w-80 max-w-[calc(100vw-3rem)] rounded-box border border-base-content/10 bg-base-200 p-4 shadow-2xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content/50">
            Quick links
          </p>

          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setOpen(false)}
            className="group mt-3 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 p-3 transition hover:border-primary/40 hover:bg-primary/15"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase tracking-wider text-base-content/50">
                Email
              </span>
              <span className="block truncate text-sm font-medium text-primary">
                {EMAIL}
              </span>
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-4 w-4 shrink-0 text-primary/70 transition group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0-6-6m6 6-6 6"
              />
            </svg>
          </a>

          <div className="mt-3 border-t border-base-content/10 pt-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-base-content/70 transition hover:bg-base-content/10 hover:text-base-content"
              >
                {link.label}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-3.5 w-3.5 text-base-content/40"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
