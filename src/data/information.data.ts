import type { InformationSection } from '@/types/information'

export const informationSections: InformationSection[] = [
  {
    title: 'Architecture Hexagonale',
    description1: `L'architecture hexagonale (aussi appelée "Ports & Adapters") est une façon d'organiser son code pour le rendre indépendant des frameworks, des bases de données et des interfaces externes.

L'idée centrale : ton code métier (le "domaine") ne doit rien savoir de ce qui l'entoure.`,
    img: '/src/assets/diagrams/hexagonal.png',
    description2: `Concrètement, si tu veux changer d'ORM, de framework ou brancher un CLI, tu n'as qu'à créer un nouvel adaptateur. Le reste du code ne bouge pas.`,
    sources: [
      { label: 'Martin Fowler', url: 'https://martinfowler.com/bliki/HexagonalArchitecture.html' },
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)' },
    ],
  },
  {
    title: 'Watchtower',
    description1: `Watchtower est un outil qui surveille tes containers Docker et les met à jour automatiquement dès qu'une nouvelle image est disponible sur le registry.`,
    sources: [
      { label: 'Watchtower Docs', url: 'https://containrrr.dev/watchtower/' },
    ],
  },
]