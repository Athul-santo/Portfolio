import {
  EMAIL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_FILENAME,
  RESUME_URL,
} from '../contact'
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons'

function ContactRow({
  href,
  label,
  value,
  icon,
  download,
  external = true,
}) {
  return (
    <a
      href={href}
      {...(external && !download
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      {...(download ? { download } : {})}
      className="group flex flex-col rounded-xl border border-base-content/10 bg-base-200/50 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:p-5"
    >
      <span className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-base-content/10 bg-base-100/60 text-base-content/60 transition group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
          {icon}
        </span>

        <span
          aria-hidden="true"
          className="mt-0.5 text-base-content/30 transition-colors group-hover:text-primary"
        >
          {download ? (
            <ArrowDownIcon className="h-4 w-4" />
          ) : (
            <ArrowUpRightIcon className="h-4 w-4" />
          )}
        </span>
      </span>

      <span className="mt-5 min-w-0">
        <span className="block text-xs font-medium uppercase tracking-wider text-base-content/40">
          {label}
        </span>
        <span className="mt-1 block truncate text-sm font-medium text-base-content/80 transition-colors group-hover:text-primary">
          {value}
        </span>
      </span>
    </a>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-base-content/10 bg-base-100"
    >
      <div className="px-6 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contact
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-base-content/70">
              I&apos;m open to opportunities. For questions, project ideas, or
              just to connect, email is the best way to reach me.
            </p>

            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-content transition duration-200 hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
            >
              Send an email
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>

          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-base-content/40">
              Get in touch
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ContactRow
                href={EMAIL_URL}
                label="Email"
                value={EMAIL}
                icon={<MailIcon />}
              />

              <ContactRow
                href={GITHUB_URL}
                label="GitHub"
                value="github.com/Athul-santo"
                icon={<GitHubIcon />}
              />

              <ContactRow
                href={LINKEDIN_URL}
                label="LinkedIn"
                value="linkedin.com/in/athul-santo"
                icon={<LinkedInIcon />}
              />

              <ContactRow
                href={RESUME_URL}
                label="Resume"
                value="Download PDF"
                icon={<DownloadIcon />}
                download={RESUME_FILENAME}
                external={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
