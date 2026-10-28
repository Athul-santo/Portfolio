function MapPinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function ChartIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
      <path strokeLinecap="round" d="M8 16v-4M12 16V8M16 16v-6" />
    </svg>
  )
}

function DropletIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.7"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"
      />
      <path strokeLinecap="round" d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  )
}

const projects = [
  {
    title: 'Finds',
    category: 'MERN Stack',
    date: 'Academic Project',
    icon: MapPinIcon,
    highlights: [
      'Built a location-based local services discovery platform where users select a location and category to view nearby vendors and services.',
      'Displayed vendor details including shop name, owner name, contact information, images, and precise location via latitude/longitude.',
      'Implemented a local transportation module to help users find transport options within their selected locality.',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Amazon Audio Products Analytics & Recommendation System',
    category: 'Data Analytics & Recommendation',
    date: 'Mar 2026 – Apr 2026',
    icon: ChartIcon,
    highlights: [
      'Collected, cleaned, and analyzed 1,500+ Amazon audio product records to identify product-category and pricing patterns.',
      'Built a classification and K-Means clustering workflow; reported approximately 87% recommendation accuracy.',
      'Created an interactive Power BI dashboard tracking 10+ KPIs and developed a Python-based recommendation application.',
    ],
    tags: ['Python', 'K-Means', 'Power BI'],
  },
  {
    title: 'Irrigation Need Prediction',
    category: 'Machine Learning & Analytics',
    date: 'Feb 2026 – Mar 2026',
    icon: DropletIcon,
    highlights: [
      'Performed exploratory data analysis on 100K+ environmental and soil records to identify features associated with irrigation demand.',
      'Trained a Random Forest classifier with reported 98% accuracy across low, medium, and high irrigation-demand classes.',
      'Built a Power BI dashboard to present irrigation-demand predictions by zone and soil type.',
    ],
    tags: ['Python', 'Random Forest', 'Power BI'],
  },
]

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article className="flex h-full flex-col rounded-2xl border border-base-content/10 bg-base-200/40 p-6 transition-colors duration-300 hover:border-primary/30 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
          <Icon />
        </span>

        <span className="rounded-full border border-base-content/10 bg-base-100/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-base-content/50">
          {project.date}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-base-content">
        {project.title}
      </h3>

      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-primary">
        {project.category}
      </p>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-base-content/70">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2.5">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-2 border-t border-base-content/10 pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-base-content/10 bg-base-100/60 px-2.5 py-1 text-[11px] text-base-content/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-base-content/10 bg-base-100"
    >
      <div className="px-6 py-14 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Projects
          </p>

          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Things I&apos;ve built<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 leading-7 text-base-content/70">
            A selection of full-stack, data, and machine learning projects
            focused on practical, real-world problems.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
