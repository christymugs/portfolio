import Page from '../components/Page'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <Page>
      <SectionHeading
        eyebrow="Skills"
        title="Tools & Technologies"
        subtitle="Languages, frameworks, and platforms I use to build software and run robotics research."
      />

      <div className="space-y-16">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.05}>
            <h2 className="font-display text-lg font-medium text-ink mb-6">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-6 text-center hover:border-border-strong hover:-translate-y-0.5 transition-all"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 p-1.5">
                    <img src={skill.icon} alt={skill.name} className="h-full w-full object-contain" />
                  </span>
                  <span className="text-xs text-ink-muted">{skill.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  )
}
