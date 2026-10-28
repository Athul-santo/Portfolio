import {
  ClaudeIcon,
  DaisyUIIcon,
  ExpressIcon,
  GitIcon,
  GitHubTechIcon,
  JavaScriptIcon,
  KiroIcon,
  MongoDBIcon,
  MySQLIcon,
  NodeIcon,
  OpenCodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  TailwindIcon,
} from './techIcons'

const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', Icon: JavaScriptIcon },
      { name: 'Python', Icon: PythonIcon },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', Icon: ReactIcon },
      { name: 'Tailwind CSS', Icon: TailwindIcon },
      { name: 'daisyUI', Icon: DaisyUIIcon },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', Icon: NodeIcon },
      { name: 'Express.js', Icon: ExpressIcon },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MySQL', Icon: MySQLIcon },
      { name: 'PostgreSQL', Icon: PostgreSQLIcon },
      { name: 'MongoDB', Icon: MongoDBIcon },
      { name: 'Redis', Icon: RedisIcon },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', Icon: GitIcon },
      { name: 'GitHub', Icon: GitHubTechIcon },
    ],
  },
  {
    label: 'AI',
    items: [
      { name: 'Claude', Icon: ClaudeIcon },
      { name: 'Kiro', Icon: KiroIcon },
      { name: 'OpenCode', Icon: OpenCodeIcon },
    ],
  },
]

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-20 border-t border-base-content/10 bg-base-200/40"
    >
      <div className="px-6 py-20 sm:py-24">
        {/* Section heading */}
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 leading-7 text-base-content/70">
            Tools and technologies I use to build, test, and improve web
            applications.
          </p>
        </div>

        {/* Compact, grouped technology cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {groups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-base-content/10 bg-base-100 p-3 sm:p-4"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-base-content/40">
                {group.label}
              </p>

              <ul className="mt-3 space-y-1">
                {group.items.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 rounded-lg px-1.5 py-1.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-primary/15 bg-primary/10">
                      <Icon className="h-5 w-5 text-base-content/80" />
                    </span>

                    <span className="min-w-0 text-sm font-medium leading-5 text-base-content/80">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
