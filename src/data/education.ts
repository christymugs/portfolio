export interface EducationEntry {
  school: string
  credential: string
  period: string
  current?: boolean
}

export const education: EducationEntry[] = [
  {
    school: 'Queen Mary University of London',
    credential: 'MSc Robotics & AI',
    period: '2025 — 2026',
    current: true,
  },
  {
    school: 'Vanderbilt University',
    credential: 'MSc Computer Science',
    period: 'Aug 2024 — May 2025',
  },
  {
    school: 'Georgia State University',
    credential: 'BSc Computer Science',
    period: 'Aug 2021 — Aug 2024',
  },
  {
    school: 'Loganville Christian Academy',
    credential: 'High School Diploma',
    period: '2015 — 2021',
  },
]
