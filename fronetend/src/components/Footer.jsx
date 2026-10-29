import { Link } from 'react-router-dom'
import { ArrowUpIcon } from './icons'

const currentYear = new Date().getFullYear()

const footerLinkClass =
  'inline-flex items-center gap-1.5 text-xs text-base-content/40 transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none'

function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-200/30">
      <div className="flex flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            to="/"
            className="inline-block text-xl font-bold tracking-tight text-base-content transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
          >
            Athul Santo
          </Link>

          <p className="mt-2 text-sm leading-6 text-base-content/50">
            Building useful things for the web.
          </p>

          <p className="mt-4 border-l-2 border-primary/40 pl-3 text-xs italic leading-6 text-base-content/45">
            “With great power comes great responsibility.”
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-base-content/40">
          <p>
            © {currentYear} Athul Santo. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${footerLinkClass} cursor-pointer`}
          >
            Back to top
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
