import { useEffect, useRef, useState } from 'react'
import { THEMES } from '../theme'

function CheckIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function ChevronIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function ThemeGrid({ theme, onSelect }) {
  return (
    <div role="group" aria-label="Color themes" className="grid grid-cols-2 gap-1.5">
      {THEMES.map((option) => {
        const isActive = option.name === theme

        return (
          <button
            key={option.name}
            type="button"
            onClick={() => onSelect(option.name)}
            aria-pressed={isActive}
            className={`flex min-w-0 items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs transition ${
              isActive
                ? 'border-primary/30 bg-primary/15 font-medium text-primary'
                : 'border-base-content/10 bg-base-100/50 text-base-content/70 hover:border-primary/30 hover:bg-base-content/10 hover:text-base-content'
            }`}
          >
            <span
              data-theme={option.name}
              aria-hidden="true"
              className="flex shrink-0 items-center gap-0.5 rounded-full border border-base-content/10 bg-base-100 px-1 py-0.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <span className="min-w-0 flex-1 truncate">{option.label}</span>

            {isActive && <CheckIcon className="h-3.5 w-3.5 shrink-0" />}
          </button>
        )
      })}
    </div>
  )
}

function ThemeMenu({ theme, onSelect, variant = 'desktop' }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (variant !== 'desktop' || !open) return undefined

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
  }, [open, variant])

  const handleSelect = (name) => {
    onSelect(name)

    if (variant === 'desktop') {
      setOpen(false)
    }
  }

  if (variant === 'mobile') {
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="theme-menu-mobile"
          className={`flex w-full items-center justify-between transition ${
            open ? 'text-primary' : 'text-base-content/75 hover:text-primary'
          }`}
        >
          <span>ThemeMenu</span>
          <ChevronIcon
            className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {open && (
          <div id="theme-menu-mobile" className="pt-3">
            <ThemeGrid theme={theme} onSelect={handleSelect} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="theme-menu-desktop"
        className={`flex items-center gap-1.5 transition-colors duration-200 ${
          open ? 'text-primary' : 'text-base-content/60 hover:text-primary'
        }`}
      >
        ThemeMenu
        <ChevronIcon
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          id="theme-menu-desktop"
          role="dialog"
          aria-label="Choose a theme"
          className="absolute left-0 top-full z-50 mt-7 w-80 rounded-box border border-base-content/10 bg-base-200 p-3 shadow-2xl"
        >
          <p className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content/50">
            Choose theme
          </p>

          <ThemeGrid theme={theme} onSelect={handleSelect} />
        </div>
      )}
    </div>
  )
}

export default ThemeMenu
