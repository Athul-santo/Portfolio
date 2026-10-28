import { useEffect, useRef, useState } from 'react'
import profileImage from '../assets/profile.jpg'
import { EMAIL, RESUME_FILENAME, RESUME_URL } from '../contact'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech stack', href: '#tech-stack' },
  { label: 'Back to top', href: '#home' },
]

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fall back to the older clipboard API.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    textarea.remove()
  }
}

function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState('idle')
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const copyResetTimer = useRef(null)

  const closeMenu = () => {
    setOpen(false)
    setCopyStatus('idle')
    clearTimeout(copyResetTimer.current)
  }

  const toggleMenu = () => {
    if (open) {
      closeMenu()
      return
    }

    setOpen(true)
  }

  const handleCopyEmail = async () => {
    const copied = await copyToClipboard(EMAIL)
    setCopyStatus(copied ? 'copied' : 'error')
    clearTimeout(copyResetTimer.current)
    copyResetTimer.current = setTimeout(() => setCopyStatus('idle'), 2000)
  }

  useEffect(() => {
    if (!open) return undefined

    const close = () => {
      setOpen(false)
      setCopyStatus('idle')
      clearTimeout(copyResetTimer.current)
    }

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        close()
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close()
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

  useEffect(() => () => clearTimeout(copyResetTimer.current), [])

  const isCopied = copyStatus === 'copied'
  const isError = copyStatus === 'error'

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
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

          <button
            type="button"
            onClick={handleCopyEmail}
            title={isCopied ? 'Copied' : 'Copy email address'}
            aria-label={isCopied ? 'Email address copied' : `Copy email address ${EMAIL}`}
            className={`group mt-3 flex w-full cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition ${
              isCopied
                ? 'border-success/30 bg-success/10'
                : isError
                  ? 'border-error/30 bg-error/10'
                  : 'border-primary/20 bg-primary/10 hover:border-primary/40 hover:bg-primary/15'
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                isCopied
                  ? 'bg-success text-success-content'
                  : isError
                    ? 'bg-error text-error-content'
                    : 'bg-primary text-primary-content'
              }`}
            >
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
              <span
                aria-live="polite"
                className={`block text-[10px] uppercase tracking-wider ${
                  isCopied ? 'text-success' : isError ? 'text-error' : 'text-base-content/50'
                }`}
              >
                {isCopied ? 'Copied!' : isError ? 'Copy failed' : 'Email'}
              </span>
              <span
                className={`block truncate text-sm font-medium ${
                  isCopied ? 'text-success' : isError ? 'text-error' : 'text-primary'
                }`}
              >
                {EMAIL}
              </span>
            </span>

            {isCopied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4 shrink-0 text-success"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            ) : isError ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-4 w-4 shrink-0 text-error"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-4 w-4 shrink-0 text-primary/70 transition group-hover:text-primary"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="13" height="13" rx="2" />
                <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>

          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="group mt-2 flex w-full items-center justify-between rounded-lg border border-base-content/10 bg-base-100/50 px-3 py-2 text-sm text-base-content/70 transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            <span className="flex items-center gap-2">
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
                  d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4.5 19.5h15"
                />
              </svg>
              Download resume
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-wider text-base-content/40">
              PDF
            </span>
          </a>

          <div className="mt-3 border-t border-base-content/10 pt-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
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
