import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
        {eyebrow}
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-ink">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  )
}
