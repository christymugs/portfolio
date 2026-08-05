import { asset } from '../lib/asset'

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

const icon = (file: string) => asset(`assets/icons/${file}`)

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: icon('java.svg') },
      { name: 'Python', icon: icon('python.svg') },
      { name: 'TypeScript', icon: icon('typescript.svg') },
      { name: 'JavaScript', icon: icon('JavaScript.svg') },
      { name: 'HTML', icon: icon('HTML.svg') },
      { name: 'CSS', icon: icon('CSS.svg') },
      { name: 'MySQL', icon: icon('mysql.svg') },
      { name: 'PostgreSQL', icon: icon('PostgreSQL.svg') },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', icon: icon('React.svg') },
      { name: 'Node.js', icon: icon('NodeJS.svg') },
      { name: 'Angular', icon: icon('Angular.svg') },
      { name: 'Spring Boot', icon: icon('Spring.svg') },
      { name: 'Flutter', icon: icon('Flutter.svg') },
      { name: 'Git', icon: icon('Git.svg') },
    ],
  },
  {
    title: 'Robotics & AI',
    skills: [
      { name: 'MuJoCo', icon: icon('mujoco.svg') },
    ],
  },
  {
    title: 'Platforms',
    skills: [
      { name: 'AWS', icon: icon('aws.svg') },
      { name: 'Linux', icon: icon('Linux.svg') },
      { name: 'Ubuntu', icon: icon('Ubuntu.svg') },
      { name: 'macOS', icon: icon('macos.svg') },
      { name: 'Windows', icon: icon('Windows.svg') },
      { name: 'Apple iOS', icon: icon('ios.svg') },
      { name: 'Firebase', icon: icon('Firebase.svg') },
      { name: 'Cloudflare', icon: icon('cloudfare.svg') },
    ],
  },
  {
    title: 'Design & Prototyping',
    skills: [
      { name: 'Figma', icon: icon('figma.svg') },
      { name: 'Photoshop', icon: icon('Photoshop.svg') },
    ],
  },
]
