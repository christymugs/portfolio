import { asset } from '../lib/asset'

export interface ProjectLinks {
  github?: string
  website?: string
  demo?: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  links: ProjectLinks
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'BookSwap',
    description:
      'Cloud-based platform hosted on AWS EC2 that lets users list, browse, and swap books. Built for scalable performance across EC2 instances with a Kafka-backed messaging layer.',
    image: asset('assets/projects/bookswap.png'),
    tags: ['Python', 'AWS', 'MySQL', 'Kafka'],
    links: { github: 'https://github.com/christymugs/BookSwap' },
    featured: true,
  },
  {
    title: 'RevenueFlow',
    description:
      'Automates collection, transformation, and analysis of e-commerce sales data. Orchestrates workflows with Apache Airflow and runs SQL queries to surface sales-by-product and sales-by-customer insights.',
    image: asset('assets/projects/revenueflow.png'),
    tags: ['Python', 'Apache Airflow', 'SQL'],
    links: { github: 'https://github.com/christymugs/RevenueFlow' },
    featured: true,
  },
  {
    title: 'Sales Data ETL Pipeline',
    description:
      'Extracts, transforms, and loads sales data from multiple sources into a PostgreSQL warehouse, with monthly aggregation for downstream analysis.',
    image: asset('assets/projects/sales.png'),
    tags: ['Python', 'Pandas', 'SQL', 'Apache Airflow', 'PostgreSQL'],
    links: { github: 'https://github.com/christymugs/DataPipeline' },
    featured: true,
  },
  {
    title: 'Flight Delay Prediction Model',
    description:
      'Analyzes a decade of historical flight data and trains a neural network to predict delays from air time and distance, with visualized exploratory analysis.',
    image: asset('assets/projects/flight.png'),
    tags: ['Python', 'Machine Learning'],
    links: { github: 'https://github.com/christymugs/flightdelaymodel' },
  },
  {
    title: 'Jarvis',
    description:
      'Voice-controlled Python assistant that plays music, answers time/date queries, pulls facts from Wikipedia, tells jokes, and solves math problems on command.',
    image: asset('assets/projects/jarvis.png'),
    tags: ['Python', 'speech_recognition', 'pywhatkit'],
    links: {
      github: 'https://github.com/christymugs/Jarvis',
      demo: 'https://youtu.be/X0AyCbuyQH8',
    },
  },
  {
    title: 'LuxVoyage',
    description:
      'Full-screen travel booking experience with immersive slides, blog pop-ups, and a streamlined booking flow built for modern travelers.',
    image: asset('assets/projects/luxvoyage.png'),
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/christymugs/LuxVoyage',
      website: 'https://christymugs.github.io/LuxVoyage/#',
    },
  },
  {
    title: 'Food Oasis',
    description:
      'Google Maps API-powered platform that helps health-conscious users locate organic food and drink vendors near them in real time.',
    image: asset('assets/projects/foodoasis.png'),
    tags: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
    links: {
      github: 'https://github.com/christymugs/foodoasis',
      website: 'https://christymugs.github.io/foodoasis/',
    },
  },
  {
    title: 'Travel Tales Unfolded',
    description:
      'Interactive travel-journaling platform with location-based content and animated pop-ups for discovering destinations and planning trips.',
    image: asset('assets/projects/travel.png'),
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/christymugs/Travel-Tales-Unfolded',
      website: 'https://christymugs.github.io/Travel-Tales-Unfolded/',
    },
  },
  {
    title: 'CryptoTrade',
    description:
      'Responsive cryptocurrency trading interface with real-time market data and a smooth, dynamic UI built with vanilla HTML, CSS, and JavaScript.',
    image: asset('assets/projects/cryptotrade.png'),
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/christymugs/CryptoTrade',
      website: 'https://christymugs.github.io/CryptoTrade/',
    },
  },
  {
    title: 'Music',
    description:
      'Sleek platform for discovering artists, albums, and tracks, with an integrated player and smooth navigation across the catalog.',
    image: asset('assets/projects/music.png'),
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/christymugs/music',
      website: 'https://christymugs.github.io/music/',
    },
  },
]
