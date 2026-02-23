export interface Soft {
  name: string
  color: string
}

export interface ExperienceDialog {
  title: string
  location: string
  entreprise: string
  date: string
  description: string
  softs: Soft[]
}