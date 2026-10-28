import { Link } from 'react-router-dom'
import { EMAIL_URL, RESUME_FILENAME, RESUME_URL } from '../contact'

const currentYear = new Date().getFullYear()

const connectLinkClass =
  'group inline-flex items-center gap-1.5 text-sm text-base-content/60 transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none'

const utilityLinkClass =
  'inline-flex items-center gap-1.5 text-xs text-base-content/40 transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none'

function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-200/30">
      <div className="px-6 py-12 sm:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight text-base-content transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
            >
              Athul Santo
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-base-content/50">
              Building useful things for the web.
            </p>
          </div>

          {/* Connect */}
          <nav aria-label="Connect" className="flex flex-col gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-base-content/40">
              Connect
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className={connectLinkClass}
              >
                GitHub
                <span
                  aria-hidden="true"
                  className="text-[0.7em] text-base-content/35 transition-colors group-hover:text-primary"
                >
                  ↗
                </span>
              </a>

              <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                className={connectLinkClass}
              >
                LinkedIn
                <span
                  aria-hidden="true"
                  className="text-[0.7em] text-base-content/35 transition-colors group-hover:text-primary"
                >
                  ↗
                </span>
              </a>

              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={connectLinkClass}
              >
                Email
                <span
                  aria-hidden="true"
                  className="text-[0.7em] text-base-content/35 transition-colors group-hover:text-primary"
                >
                  ↗
                </span>
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-base-content/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-base-content/40">
            © {currentYear} Athul Santo. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              aria-label="Download resume PDF"
              className={utilityLinkClass}
            >
              Resume
              <span aria-hidden="true" className="text-[0.7em]">
                ↓
              </span>
            </a>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`${utilityLinkClass} cursor-pointer`}
            >
              Back to top
              <span aria-hidden="true" className="text-[0.7em]">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
