export interface SectionItem {
  title: string
  description: string
  dialog: ExperienceDialog
}

export interface Section {
  tooltip: {
    trigger: string
    content: string
  }
  items: SectionItem[]
}

export interface ExperienceDialog {
  title: string
  location: string
  entreprise: string
  date: string
  description: string
  softs: Soft[]
}

export interface Soft {
  name: string
  color: string
}

