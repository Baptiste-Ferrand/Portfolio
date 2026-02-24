export interface InformationSection {
  title: string
  description1: string
  description2?: string  
  img?: string
  sources?: Array<{      
    label: string
    url: string
  }>
}