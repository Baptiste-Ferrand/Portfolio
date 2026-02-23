import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    title: 'Track&Train',
    description: `Track&Train - Est une application de mise en relation de coachs et de client. 
    pour but le suivi d'entraînement sportif, de plan allimentaire et bien d'autres fonctionnalités.`,
    to: '/projects/track-and-train',
  },
  {
    title: 'Portfolio',
    description: 'Mon portfolio personnel développé avec Vue 3, TypeScript et Shadcn.',
    to: '/',
  },
  {
    title: 'WDWT',
    description: `What Do We Take? - Est une application pour partager la liste de ces compléments alimentaires, ces entrainements sont plan nutritive et bien dautres encore.
    (ce project est actuellement en cours de développement)`,
    to: '/projects/portfolio',
  },

]