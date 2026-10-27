
const technologies = [
  {
    name: 'JavaScript',
    category: 'Language',
    symbol: 'JS',
  },
  {
    name: 'React',
    category: 'Frontend',
    symbol: 'RE',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    symbol: 'NO',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    symbol: 'EX',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    symbol: 'DB',
  },
  {
    name: 'SQL',
    category: 'Database',
    symbol: 'SQ',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    symbol: 'TW',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    symbol: 'GT',
  },
]

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-24 border-t border-base-content/10 bg-base-200/40"
    >
      <div className="px-6 py-20 sm:py-24">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-base-content/70">
            Tools and technologies I use to build, test, and improve web
            applications.
          </p>
        </div>

        {/* Technology cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-xl border border-base-content/10 bg-base-100 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-base-200"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 font-mono text-sm font-bold text-primary transition group-hover:bg-primary group-hover:text-primary-content">
                {tech.symbol}
              </div>

              <h3 className="font-semibold text-base-content">
                {tech.name}
              </h3>

              <p className="mt-1 text-sm text-base-content/50">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
