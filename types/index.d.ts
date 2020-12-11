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
