export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectMedia = {
  primary: ProjectImage
  screenshots?: ProjectImage[]
}

export type Project = {
  id: string
  title: string
  featured: boolean
  year: string
  category: string
  shortDescription: string
  techStack: string[]
  media?: ProjectMedia
}

export const projects = {
  silondo: {
    id: 'silondo',
    title: 'SILONDO',
    featured: true,
    year: '2025',
    category: 'Government Information System',
    shortDescription: 'Digital services for Disdukcapil Depok.',
    techStack: ['Laravel', 'Go', 'MySQL'],
    media: {
      primary: {
        src: '/project-media/silondo-overview.svg',
        alt: 'Placeholder preview of the SILONDO service dashboard',
      },
      screenshots: [
        {
          src: '/project-media/silondo-services.svg',
          alt: 'Placeholder preview of the SILONDO services screen',
        },
      ],
    },
  },
  remtargo: {
    id: 'remtargo',
    title: 'Remtargo',
    featured: false,
    year: '2026',
    category: 'Web Application',
    shortDescription: 'A web application built with a team.',
    techStack: ['TBD'],
  },
  parkie: {
    id: 'parkie',
    title: 'Parkie',
    featured: false,
    year: '2025',
    category: 'Parking Management System',
    shortDescription: 'Digital parking availability and operations.',
    techStack: ['Go', 'React'],
  },
  'spp-payment-system': {
    id: 'spp-payment-system',
    title: 'SPP Payment System',
    featured: false,
    year: '2026',
    category: 'Payment System',
    shortDescription: 'School tuition billing and online payments.',
    techStack: ['Laravel', 'MySQL', 'Midtrans', 'Tailwind CSS'],
  },
  'telegram-schedule-bot': {
    id: 'telegram-schedule-bot',
    title: 'Telegram Schedule Bot',
    featured: false,
    year: '2026',
    category: 'Automation Bot',
    shortDescription: 'Schedules, notes, and reminders via Telegram.',
    techStack: ['TBD'],
  },
} satisfies Record<string, Project>
