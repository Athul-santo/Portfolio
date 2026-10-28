import { Link } from 'react-router-dom'
import {
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_FILENAME,
  RESUME_URL,
} from '../contact'
import { ArrowDownIcon, ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

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
              <SocialLink href={GITHUB_URL} label="GitHub">
                <GitHubIcon />
              </SocialLink>

              <SocialLink href={LINKEDIN_URL} label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>

              <SocialLink href={EMAIL_URL} label="Email">
                <MailIcon />
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
              <ArrowDownIcon className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`${utilityLinkClass} cursor-pointer`}
            >
              Back to top
              <ArrowUpIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
