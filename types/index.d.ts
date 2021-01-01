type NavItem = {
  label: string
  link: string
}

type NavMenu = NavItem[]

type Project = {
  id: string
  title: string
  color?: string
  category: string
  workType: string
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
}

type ProjectCardType = 'work' | 'music'
