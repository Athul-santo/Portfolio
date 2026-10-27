
import { Link } from 'react-router-dom'
import { EMAIL_URL } from '../contact'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-base-content/10 bg-base-100">
      <div className="px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold text-base-content">
              Athul<span className="text-primary">.</span>
            </Link>

            <p className="mt-2 text-sm text-base-content/50">
              Building useful things for the web.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-6 text-sm text-base-content/60">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary"
            >
              LinkedIn ↗
            </a>

            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-primary"
            >
              Email ↗
            </a>

            <a
              href="#"
              onClick={(event) => {
                event.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="transition hover:text-primary"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-base-content/10 pt-6">
          <p className="text-sm text-base-content/50">
            © {currentYear} Athul Santo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
