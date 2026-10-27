import { useEffect, useRef, useState } from 'react'

const THEMES = [
  { name: 'athuldark', label: 'Midnight' },
  { name: 'athullight', label: 'Daylight' },
  { name: 'cyberpunk', label: 'Cyberpunk' },
  { name: 'dracula', label: 'Dracula' },
  { name: 'forest', label: 'Forest' },
  { name: 'nord', label: 'Nord' },
  { name: 'retro', label: 'Retro' },
  { name: 'synthwave', label: 'Synthwave' },
]

const DEFAULT_THEME = 'athuldark'

const getInitialTheme = () => {
  if (typeof document === 'undefined') return DEFAULT_THEME

  const current = document.documentElement.getAttribute('data-theme')
  return THEMES.some((theme) => theme.name === current)
    ? current
    : DEFAULT_THEME
}

const initialTheme = getInitialTheme()

function ThemeChanger() {
  const [theme, setTheme] = useState(initialTheme)
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    try {
      localStorage.setItem('theme', theme)
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
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Change theme"
        className="btn btn-ghost btn-circle btn-sm border border-base-content/10 bg-base-200/60 text-base-content/70 hover:border-primary/40 hover:bg-base-200 hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-56 rounded-box border border-base-content/10 bg-base-200 p-2 shadow-2xl">
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50">
            Theme
          </p>

          <ul role="menu" className="menu menu-sm w-full p-0">
            {THEMES.map((option) => {
              const isActive = option.name === theme

              return (
                <li key={option.name} role="none">
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={isActive}
                    onClick={() => {
                      setTheme(option.name)
                      setOpen(false)
                    }}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-base-content/70 hover:bg-base-content/10 hover:text-base-content'
                    }`}
                  >
                    <span
                      data-theme={option.name}
                      className="flex shrink-0 items-center gap-1 rounded-full border border-base-content/10 bg-base-100 px-1.5 py-1"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                      <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    </span>

                    <span className="flex-1 text-left">{option.label}</span>

                    {isActive && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ThemeChanger
