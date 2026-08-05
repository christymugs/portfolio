import Page from '../components/Page'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import { ExternalLink, PlayCircle } from 'lucide-react'
import GithubMark from '../components/icons/GithubMark'

export default function Projects() {
  return (
    <Page>
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        subtitle="A selection of software projects, from full-stack apps to data pipelines and a voice assistant."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.06}>
            <div className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-surface hover:border-border-strong transition-colors">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display font-medium text-ink">{project.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors"
                    >
                      <GithubMark size={14} />
                      Code
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors"
                    >
                      <PlayCircle size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  )
}
