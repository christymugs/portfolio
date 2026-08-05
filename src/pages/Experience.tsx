import Page from '../components/Page'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <Page>
      <SectionHeading eyebrow="Experience" title="Professional Experience" />

      <div className="space-y-6">
        {experience.map((entry, i) => (
          <Reveal key={entry.role} delay={i * 0.06}>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-start gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/95 p-2">
                  <img src={entry.icon} alt={entry.org} className="h-full w-full object-contain" />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-medium text-ink">{entry.role}</h3>
                    <span className="font-mono text-xs text-ink-faint">{entry.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">
                    {entry.org} — {entry.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {entry.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  )
}
