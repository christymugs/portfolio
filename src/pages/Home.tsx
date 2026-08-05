import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronDown, Code2, Cpu, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

const pillars = [
  {
    icon: Code2,
    title: 'Software Engineering',
    body: 'Full-stack development across web platforms — React front ends, Node/Spring backends, and cloud-deployed data pipelines.',
  },
  {
    icon: Cpu,
    title: 'AI & Robotics Research',
    body: 'Investigating embodied intelligence: how a simulated robot’s physical morphology shapes how fast it can learn new skills.',
  },
  {
    icon: GraduationCap,
    title: 'Queen Mary, London',
    body: 'MSc candidate in Robotics & AI, following a BSc and MSc in Computer Science from Georgia State and Vanderbilt.',
  },
]

const featured = projects.filter((p) => p.featured)

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 right-0 h-[26rem] w-[26rem] rounded-full bg-accent-2/20 blur-[110px]"
        />

        <div className="relative mx-auto max-w-6xl px-6 w-full">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Software Engineer · Robotics &amp; AI Researcher
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] text-ink max-w-3xl">
              Building intelligence,
              <br />
              <span className="text-gradient">embodied.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg text-ink-muted leading-relaxed">
              I'm Christy Mugomba — an MSc Robotics &amp; AI candidate at Queen Mary University
              of London, researching how a robot's body shapes how quickly it learns, and
              building software along the way.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg hover:brightness-110 transition"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
              >
                About Me
              </Link>
            </div>
          </Reveal>
        </div>

        <a
          href="#pillars"
          aria-label="Scroll to learn more"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-faint hover:text-accent transition-colors animate-bounce"
        >
          <ChevronDown size={22} />
        </a>
      </section>

      <section id="pillars" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 hover:border-border-strong transition-colors">
                <Icon className="text-accent" size={22} />
                <h3 className="mt-5 font-display text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink">Featured projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent transition-colors"
            >
              View all
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <a
                href={project.links.website ?? project.links.github}
                target="_blank"
                rel="noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-surface hover:border-border-strong transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium text-ink">{project.title}</h3>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-faint group-hover:text-accent transition-colors"
                    />
                  </div>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            to="/projects"
            className="md:hidden mt-8 inline-flex items-center gap-1 text-sm text-ink-muted hover:text-accent transition-colors"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
