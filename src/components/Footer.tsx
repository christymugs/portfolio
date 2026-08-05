import { ArrowUpRight } from 'lucide-react'
import GithubMark from './icons/GithubMark'

const RESUME_URL =
  'https://docs.google.com/document/d/158prlZIDxY_40MHvJdaKA_QiJsSAwAsXnFSJejgcPh0/edit?usp=sharing'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-ink">Christy Mugomba</p>
          <p className="text-sm text-ink-faint mt-1">
            Software Engineer &amp; Robotics/AI Researcher
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/christymugs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
          >
            <GithubMark size={16} />
            GitHub
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink transition-colors"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <p className="text-xs text-ink-faint">
          © {new Date().getFullYear()} Christy Mugomba. Built with React, TypeScript &amp; Tailwind.
        </p>
      </div>
    </footer>
  )
}
