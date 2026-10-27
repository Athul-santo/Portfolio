
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold text-white">
              Athul<span className="text-cyan-400">.</span>
            </Link>

            <p className="mt-2 text-sm text-slate-500">
              Building useful things for the web.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="transition hover:text-cyan-400"
            >
              Email ↗
            </a>

            <a
              href="#"
              onClick={(event) => {
                event.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="transition hover:text-cyan-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-500">
            © {currentYear} Athul Santo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
