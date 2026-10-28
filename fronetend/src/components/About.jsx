import profileImage from '../assets/profile.jpg'

const focusAreas = [
  {
    title: 'Frontend',
    tools: 'React · Tailwind CSS',
    description: 'Responsive interfaces that feel right on every screen.',
  },
  {
    title: 'Backend',
    tools: 'Node.js · Express',
    description: 'APIs and server-side logic that hold everything together.',
  },
  {
    title: 'Data',
    tools: 'MySQL · PostgreSQL · MongoDB',
    description: 'Clean, structured data and the queries that make it useful.',
  },
]

const facts = [
  { label: 'education', value: 'BCA' },
  { label: 'experience', value: 'Internship at Aionpixel Technologies' },
  { label: 'stack', value: 'MERN stack' },
  { label: 'mindset', value: 'Always learning' },
]

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-base-content/10 bg-base-100"
    >
      <div className="px-6 py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Story */}
          <div className="lg:col-span-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              About me
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Full stack, real-world experience
              <span className="text-primary">.</span>
            </h2>

            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-base-content/70">
              <p>
                I&apos;m Athul Santo, a Full Stack Developer with a BCA
                (Bachelor of Computer Applications) background and hands-on
                experience building web applications using modern technologies.
                I enjoy turning ideas into practical, user-friendly digital
                experiences.
              </p>

              <p>
                During my internship at Aionpixel Technologies, I worked on web
                application modules, REST API integration, database
                interactions, and frontend-backend communication. This
                experience helped me understand how real-world applications are
                developed and maintained.
              </p>

              <p>
                My current focus is on strengthening my skills in the MERN
                stack, writing clean and maintainable code, and building
                projects that solve real-world problems. I&apos;m always eager
                to learn new technologies, collaborate with others, and grow as
                a software developer.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl border border-base-content/10 bg-base-200/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-base-200"
                >
                  <h3 className="font-semibold text-base-content">{area.title}</h3>

                  <p className="mt-1 font-mono text-xs text-primary">
                    {area.tools}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-base-content/70">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* At a glance */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-base-content/10 bg-base-200/60 p-6 sm:p-8">
              <div className="flex items-center gap-4 border-b border-base-content/10 pb-6">
                <img
                  src={profileImage}
                  alt="Athul Santo"
                  className="h-16 w-16 rounded-full border-2 border-primary object-cover object-top"
                />

                <div>
                  <p className="font-semibold text-base-content">Athul Santo</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              <dl className="mt-6 space-y-5">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[5.5rem_1fr] items-start gap-4"
                  >
                    <dt className="font-mono text-xs uppercase leading-6 tracking-wider text-base-content/50">
                      {fact.label}
                    </dt>
                    <dd className="text-sm leading-6 text-base-content/80">
                      {fact.value}
                    </dd>
                  </div>
                ))}

                <div className="grid grid-cols-[5.5rem_1fr] items-start gap-4">
                  <dt className="font-mono text-xs uppercase leading-6 tracking-wider text-base-content/50">
                    status
                  </dt>
                  <dd className="flex items-center gap-2 text-sm leading-6 text-success">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                    Open to opportunities
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
