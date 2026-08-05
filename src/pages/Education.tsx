import Page from '../components/Page'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { education } from '../data/education'

export default function Education() {
  return (
    <Page>
      <SectionHeading eyebrow="Education" title="Education" />

      <div className="relative border-l border-border pl-8 space-y-10">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 0.06}>
            <div className="relative">
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                  entry.current ? 'bg-accent shadow-[0_0_10px_2px_var(--color-accent)]' : 'bg-ink-faint'
                }`}
              />
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium text-ink">{entry.school}</h3>
              <p className="mt-1 text-ink-muted">{entry.credential}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  )
}
