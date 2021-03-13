type NavItem = {
  label: string
  link: string
}

type NavMenu = NavItem[]

type Project = {
  id: string
  title: string
  color?: string
  hasIcon: boolean
  category: string
  workType: string
  shortDescription: string
  description: string
  link: string
  screenshots: string[]
}

type MusicRelease = {
  id: string
  title: string
  date: string
  genre: [string, string] | string
  description: string
  tracklist: string[]
  links: {
    bandcamp: string
    spotify: string
    apple: string
  }
  colors?: {
    background: string
    foreground: string
  }
}

type ProjectCardType = 'work' | 'music'
