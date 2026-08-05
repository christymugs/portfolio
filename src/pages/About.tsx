import Page from '../components/Page'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { asset } from '../lib/asset'

export default function About() {
  return (
    <Page>
      <SectionHeading eyebrow="About" title="About Me" />

      <div className="grid gap-14 md:grid-cols-[280px_1fr]">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={asset('assets/me.jpg')} alt="Christy Mugomba" className="w-full object-cover" />
          </div>
          <div className="mt-6 space-y-3 text-sm">
            <div>
              <p className="text-ink-faint">Based in</p>
              <p className="text-ink">London, UK</p>
            </div>
            <div>
              <p className="text-ink-faint">Studying</p>
              <p className="text-ink">MSc Robotics &amp; AI, Queen Mary University of London</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <h2 className="font-display text-xl font-medium text-ink mb-4">Background</h2>
            <p className="text-ink-muted leading-relaxed">
              I hold a Bachelor of Science in Computer Science from Georgia State University and
              a Master of Science in Computer Science from Vanderbilt University, and I'm
              currently pursuing a second Master of Science, in Robotics &amp; AI, at Queen Mary
              University of London. My journey in technology started with a love of building
              software, and has grown into a deep fascination with embodied intelligence — how
              AI and humanoid robots learn to sense, move, and adapt in the physical world. I
              relish the challenge of solving complex problems and continuously expanding my
              knowledge across both fields.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-medium text-ink mb-4">Current Research</h2>
            <p className="text-ink-muted leading-relaxed">
              Right now I'm working on my dissertation, <em className="text-ink not-italic font-medium">
              Embodying Intelligence in Real Robots</em>, which asks a simple question: does a
              robot's body shape how easily it can learn? Most robotics research designs a body
              first and trains a controller for it afterward, so the body itself is never
              evaluated as part of the learning process. My project evolves simulated robot
              morphologies alongside their controllers and selects directly for{' '}
              <span className="text-ink font-medium">learnability</span> — rather than final
              performance alone — to see whether that produces different, faster-learning body
              designs, with an eye toward what that means for real-world, physical robots.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-medium text-ink mb-4">Beyond the Code</h2>
            <p className="text-ink-muted leading-relaxed">
              Beyond my technical pursuits, I am an avid reader who finds solace in the pages of
              books that transport me to different worlds and expand my perspectives. Traveling
              is another passion of mine, as it allows me to explore diverse cultures and embrace
              new experiences. I also enjoy building Legos, a creative outlet that brings out my
              problem-solving skills in a fun and tangible way. I'm a devoted dog lover and share
              my life with a mini golden doodle named Ace, who loves everything from toys to
              cuddles to movies and hikes.
            </p>
          </Reveal>

          <Reveal>
            <blockquote className="border-l-2 border-accent pl-6 text-lg text-ink italic">
              "If you have the courage to begin, you have the courage to succeed."
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Page>
  )
}
