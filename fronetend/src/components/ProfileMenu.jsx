import { useEffect, useRef, useState } from 'react'
import profileImage from '../assets/profile.jpg'
import {
  initialTheme,
  THEMES,
  THEME_STORAGE_KEY,
} from '../theme'

const facts = [
  { label: 'stack', value: 'React, Node.js, Express, MongoDB' },
  { label: 'mindset', value: 'Always learning' },
]

function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(initialTheme)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Storage can be unavailable in private browsing.
    }
  }, [theme])

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

  const activeTheme = THEMES.find((option) => option.name === theme)

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open profile and theme settings"
        aria-haspopup="dialog"
        aria-controls="profile-menu"
        aria-expanded={open}
        className="rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
      >
        <img
          src={profileImage}
          alt="Athul Santo"
          className={`h-11 w-11 rounded-full border-2 object-cover object-top transition ${
            open
              ? 'border-primary'
              : 'border-primary/70 hover:border-primary'
          }`}
        />
      </button>

      {open && (
        <div
          id="profile-menu"
          role="dialog"
          aria-label="Profile and theme settings"
          className="absolute right-0 top-full z-50 mt-3 max-h-[calc(100vh-6rem)] w-84 max-w-[calc(100vw-3rem)] overflow-y-auto overscroll-contain rounded-box border border-base-content/10 bg-base-200 p-5 shadow-2xl"
        >
          <div className="flex items-center gap-3 border-b border-base-content/10 pb-4">
            <img
              src={profileImage}
              alt=""
              className="h-14 w-14 shrink-0 rounded-full border-2 border-primary object-cover object-top"
            />

            <div className="min-w-0">
              <p className="truncate font-semibold text-base-content">
                Athul Santo
              </p>
              <p className="mt-0.5 text-sm text-base-content/60">
                Full Stack Developer
              </p>
            </div>
          </div>

          <dl className="mt-4 space-y-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[4.5rem_1fr] gap-3"
              >
                <dt className="font-mono text-[10px] uppercase tracking-wider text-base-content/50">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-5 text-base-content/80">
                  {fact.value}
                </dd>
              </div>
            ))}

            <div className="grid grid-cols-[4.5rem_1fr] gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-base-content/50">
                status
              </dt>
              <dd className="flex items-center gap-2 text-sm leading-5 text-success">
                <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                Open to opportunities
              </dd>
            </div>
          </dl>

          <div className="mt-5 border-t border-base-content/10 pt-4">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content/50">
                Theme
              </p>
              <span className="text-[10px] uppercase tracking-wider text-base-content/40">
                {activeTheme?.label}
              </span>
            </div>

            <div
              role="group"
              aria-label="Color theme"
              className="grid grid-cols-2 gap-1.5"
            >
              {THEMES.map((option) => {
                const isActive = option.name === theme

                return (
                  <button
                    key={option.name}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setTheme(option.name)}
                    className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-xs transition ${
                      isActive
                        ? 'border-primary/60 bg-primary/10 text-primary'
                        : 'border-base-content/10 bg-base-100/50 text-base-content/70 hover:border-base-content/25 hover:text-base-content'
                    }`}
                  >
                    <span
                      data-theme={option.name}
                      className="flex shrink-0 gap-0.5 rounded-full border border-base-content/10 bg-base-100 p-1"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>

                    <span className="truncate">{option.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
