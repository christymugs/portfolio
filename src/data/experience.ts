import { asset } from '../lib/asset'

export interface ExperienceEntry {
  role: string
  org: string
  location: string
  period: string
  icon: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Frontend Developer Intern',
    org: 'Georgia State University',
    location: 'Atlanta, GA',
    period: 'Feb 2024 — Aug 2024',
    icon: asset('assets/icons/gsu.svg'),
    highlights: [
      'Architected responsive, cross-browser web interfaces using HTML, CSS, and JavaScript.',
      'Engineered custom JavaScript solutions, improving loading times by 25%.',
      'Integrated external APIs and data visualization tools for dynamic features.',
      'Translated wireframes into high-performance front-end code, boosting engagement.',
      'Streamlined media asset management, reducing deployment time by 40%.',
    ],
  },
  {
    role: 'Technical Support Representative',
    org: 'Apple, Inc.',
    location: 'Remote, USA',
    period: 'Feb 2022 — Dec 2022',
    icon: asset('assets/icons/apple.png'),
    highlights: [
      'Achieved a 90% resolution rate on first contact.',
      'Decreased customer escalations by 25%.',
      'Improved overall customer satisfaction ratings.',
    ],
  },
]
