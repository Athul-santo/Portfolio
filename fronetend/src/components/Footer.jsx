import { Link } from 'react-router-dom'
import { EMAIL_URL, RESUME_FILENAME, RESUME_URL } from '../contact'

const currentYear = new Date().getFullYear()

const connectIconClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-base-content/10 bg-base-100/50 text-base-content/60 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-200'

const utilityLinkClass =
  'inline-flex items-center gap-1.5 text-xs text-base-content/40 transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none'

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={connectIconClass}
    >
      {children}
    </a>
  )
}

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

            <div className="flex flex-wrap items-center gap-2.5">
              <SocialLink href="https://github.com/YOUR_USERNAME" label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </SocialLink>

              <SocialLink href="https://linkedin.com/in/YOUR_PROFILE" label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </SocialLink>

              <SocialLink href={EMAIL_URL} label="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75A1.75 1.75 0 0 1 5.5 5h13a1.75 1.75 0 0 1 1.75 1.75v10.5A1.75 1.75 0 0 1 18.5 19h-13a1.75 1.75 0 0 1-1.75-1.75V6.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 7 8 5.5L20 7"
                  />
                </svg>
              </SocialLink>
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
