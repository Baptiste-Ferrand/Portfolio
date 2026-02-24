import type { Section } from '@/types/dialog'

export const sections: Section[] = [
  {
    tooltip: { trigger: 'Voici mon extraordinaire parcours scolaire', content: 'Pas dutout 🤐' },
    items: [
      {
        title: 'Mastere 2 Informatique Ynov Campus Lyon',
        description: 'Expert en développement logiciel et gestion de projets informatiques.',
        dialog: {
          title: 'Expert en développement logiciel – RNCP39583 – Niveau 7',
          location: 'Lyon',
          entreprise: 'Ynov Campus',
          date: '2022 - 2025',
          description: `Formation avancée en développement logiciel, architecture applicative et gestion de projets informatiques.
          Apprentissage de plusieurs frameworks front-end : Vue, React, Svelte et Angular.
          Apprentissage de frameworks fullstack : Next.js, Nuxt et SvelteKit.
          Apprentissage de frameworks back-end : FastAPI, Symfony et Express.
          Mise en pratique des méthodes de gestion de projet et d’organisation : Agile, cycle en V, Scrum, Kanban.
          Approche DevOps avec l’utilisation de GitHub Actions, d’outils tels qu’Ansible et Terraform, ainsi que des technologies de conteneurisation et d’orchestration comme Docker et Kubernetes. Travail sur différents types de serveurs : AWS EC2, serveurs locaux, Raspberry Pi.
          Formation réalisée en alternance pendant 3 ans (LM Control, Ascorel).
          `,
          softs: [
            { name: 'Vue', color: '#249b73' },
            { name: 'React', color: '#1082a7' },
            { name: 'Svelte', color: '#ff4408' },
            { name: 'Angular', color: '#b72cf6' },
            { name: 'TypeScript', color: '#2d79c7' },
            { name: 'PHP', color: '#7b7fb5' },
            { name: 'Symfony', color: '#211e22' },
            { name: 'Python', color: '#ffde5d' },
            { name: 'Docker', color: '#0894e3' },
            { name: 'CI/CD', color: '#f05033' },
          ],
        },
      },
      {
        title: 'Brevet de Technicien Supérieur Edouard Branly',
        description: 'Formation technique avancée avec une spécialisation en informatique.',
        dialog: {
          title: 'BTS Informatique',
          location: 'Annecy',
          entreprise: 'Edouard Branly',
          date: '2020 - 2022',
          description: `Formation technique avec une spécialisation en développement et réseaux informatiques.
          Spécialisation en C++ avec un apprentissage approfondi du langage, ainsi qu’une solide formation en réseaux, validée par une certification Cisco.
          Stage de première année effectué à la DSDEN.
          Projet de fin d’études : analyse de la durée de vie et prédiction de pannes pour les disques-dur du centre Blaise Pascal. Mise en place d’une base de données, d’un serveur Apache et de machines virtuelles, avec utilisation de Grafana pour la gestion des métriques et la visualisation des statistiques.
          Connaissances approfondies en mathématiques et en physique.
          `,
          softs: [
            { name: 'C++', color: '#6a9dd3' },
            { name: 'SQL', color: '#e07127' },
            { name: 'Réseaux', color: '#51a1be' },
            { name: 'Linux', color: '#dd4f1c' },
            { name: 'Grafana', color: '#f6912c' },
            { name: 'Mathématiques', color: '#1a6b48' },
            { name: 'Sciences Physique', color: '#dd4f1c' },
            { name: 'Travail en équipe', color: '#085e9f' },

          ],
        },
      },
      {
        title: 'Baccalauréat STI2D Spécialité SNIR Louis Lachenal',
        description: 'Diplôme de fin d\'études secondaires avec une solide base en Mathématiques.',
        dialog: {
          title: 'Baccalauréat STI2D SNIR',
          location: 'Annecy',
          entreprise: 'Louis Lachenal',
          date: '2018 - 2020',
          description: `Diplôme avec une spécialisation en systèmes numériques et informatique embarquée.
          Première approche des réseaux et de l’électronique embarquée avec Arduino. Projet de fin d’études : réalisation d’un overboard télécommandé.
          Création d’une application mobile sous Android Studio pour piloter l’overboard à distance, en utilisant le Bluetooth pour le contrôle à distance.
          Matières principales et connaissances en mathématiques, sciences physiques, réseau et langage C.`,
          softs: [
            { name: 'C', color: '#085e9f' },
            { name: 'Arduino', color: '#088b93' },
            { name: 'Réseaux', color: '#51a1be' },
            { name: 'Mathématiques', color: '#1a6b48' },
            { name: 'Sciences Physiques', color: '#dd4f1c' },
            { name: 'Travail en équipe', color: '#085e9f' },
          ],
        },
      },
    ],
  },
  {
    tooltip: { trigger: 'Voici mon parcours professionnel', content: 'Très impressionnant' },
    items: [
      {
        title: 'Lyon (chez moi)',
        description: 'Track&Train project perso: Concevoir une architecture hexagonale, Gestion des CI/CD, Nginx, Devops.',
        dialog: {
          title: 'Track&Train',
          location: 'Lyon',
          entreprise: 'Projet personnel',
          date: '2024 - 2025',
          description: `Track&Train est un projet développé en autonomie de A à Z. Il répond à la problématique actuelle des jeunes coachs sportifs indépendants qui ne disposent pas de plateforme unifiée et centralisée pour gérer leur travail et leurs ressources (clients, données, etc.).
          Track&Train permet la mise en relation d’utilisateurs avec des coachs, et offre à ces derniers un suivi clair et structuré de chacun de leurs clients sur une même plateforme. Track&Train a été réalisé dans le cadre d’un projet de fin d’études.Techniquement, le projet a été développé en Python avec une architecture hexagonale côté back-end, en utilisant le framework FastAPI, et en Vue.js côté front-end, avec Vuetify pour la partie UI.
          Le projet a été déployé par mes soins sur mon propre serveur à la maison, via une chaîne de déploiement continu : 
          - Conteneurisation de chaque partie (front et back) avec Docker.
          - Mise en place du versioning et d’un changelog pour chaque tag et chaque nouvelle image.
          - Création d’un dépôt dédié au déploiement continu avec Ansible, qui se connecte en SSH (via clé) au serveur pour préparer l’infrastructure de façon idempotente.
          - Une fois le serveur préparé (règles de pare-feu, redirections Nginx, certificats Let’s Encrypt/Certbot configurés automatiquement avec Ansible), le docker-compose est lancé avec les bonnes images.
          - Utilisation de Watchtower pour cibler les images concernées et vérifier régulièrement leurs versions. En cas de nouvelle version, Watchtower télécharge l’image et redémarre les services : cela permet un déploiement continu des nouvelles versions (hors versions majeures nécessitant une intervention manuelle ou de nouveaux paramètres).
          - Mise en place de MinIO pour le stockage des photos.
          - Intégration de Grafana pour le suivi des métriques du serveur ainsi que des projets front et back, via les bibliothèques adaptées.`,
          softs: [
            { name: 'Vue', color: '#249b73' },
            { name: 'FastApi', color: '#009486' },
            { name: 'Architecture Hexagonale', color: '#6bcdff' },
            { name: 'Devops', color: '#2986ff' },
            { name: 'Minio', color: '#c02a47' },
            { name: 'Aws', color: '#ff5600' },
            { name: 'Watchtower', color: '#466674' },
            { name: 'Ansible', color: '#ce0e0e' },
            { name: 'Nginx', color: '#08993f' },
            { name: 'Grafana', color: '#f6912c' },
            { name: 'Docker', color: '#0894e3' },
            { name: 'CI/CD', color: '#f05033' },
            { name: 'Autonomie', color: '#ff0000' },
            { name: 'Adaptabilité', color: '#204b63' },
            { name: 'Linux', color: '#dd4f1c' },
            { name: 'Raspberry Pi', color: '#c21749' },
          ],
        },
      },
      {
        title: 'ASCOREL Vienne',
        description: 'Développeur Fullstack : Analyse des problèmes techniques, Déploiement et intégration continue, création d\'une API.',
        dialog: {
          title: 'Développeur Fullstack',
          location: 'Vienne',
          entreprise: 'ASCOREL',
          date: '2023 - 2025',
          description: `Travail en autonomie sur la problématique suivante : gestion de sessions d’utilisation d’une grue à distance.
          Mise en place d’un broker MQTT avec Mosquitto Dynamic Security afin de sécuriser les topics et les utilisateurs en temps réel. 
          Création d’une API en Express.ts pour piloter et administrer le broker en direct, et mise en place de certificats clients pour renforcer la sécurité.
          Conteneurisation du projet avec Docker, puis mise en place d’un déploiement continu via des pipelines GitLab et Ansible, déployés sur AWS.
          Aide au développement et à la maintenance du site web de l’entreprise, avec un front-end en Angular et un back-end en Spring Boot.`,
          softs: [
            { name: 'Spring Boot', color: '#17d130' },
            { name: 'Angular', color: '#b81a71' },
            { name: 'Express', color: '#c7db10' },
            { name: 'Mqtt', color: '#1320db' },
            { name: 'Ansible', color: '#ce0e0e' },
            { name: 'Aws', color: '#ff5600' },
            { name: 'Api Rest', color: '#198fdf' },
            { name: 'Node.js', color: '#37a02d' },
            { name: 'Docker', color: '#0894e3' },
            { name: 'CI/CD', color: '#f05033' },
            { name: 'Gitlab', color: '#e6ac0e' },
            { name: 'Methode Agile', color: '#346edb' },
            { name: 'Savoir-être', color: '#34db6c' },
            { name: 'Autonomie', color: '#ff0000' },
          ],
        },
      },
      {
        title: 'LM Control Jonage',
        description: 'Développeur Web: Améliorations du site de gestion à distance, Conception et développement des programmes.',
        dialog: {
          title: 'Développeur Web',
          location: 'Jonage',
          entreprise: 'LM Control',
          date: '2022 - 2023',
          description: `Travailler en équipe en méthode agile avec des sprints de 2 semaines et des réunions hebdomadaires.
          Développer en JavaScript et TypeScript, avec un front-end en Vue et un back-end testé avec Jest. 
          Création de nouvelles fonctionnalités de A à Z répondant aux besoins clients : gestion de machines à laver à distance, suivi des ventes et des cycles pour les propriétaires de laveries, mise en place d’une page vitrine pour leurs clients.
          Implémentation d\'un système de notifications pour l'ensemble des utilisateurs du site web. Mise en place de graphiques pour suivre et analyser les données à destination des propriétaires de laveries.`,
          softs: [
            { name: 'Vue.js', color: '#777bb4' },
            { name: 'JavaScript', color: '#f7df1e' },
            { name: 'PostgreSQL', color: '#336791' },
            { name: 'HTML/CSS', color: '#e34c26' },
            { name: 'Gitlab', color: '#e6ac0e' },
            { name: 'Docker', color: '#0894e3' },
            { name: 'Typescript', color: '#3178c6' },
            { name: 'Jest.Ts', color: '#cf241e' },
            { name: 'Nest.Ts', color: '#cf1ec0' },
            { name: 'Savoir-être', color: '#34db6c' },
            { name: 'Methode Agile', color: '#346edb' },

          ],
        },
      },
      {
        title: 'DSDEN Annecy',
        description: 'Stagiaire en informatique: Intervention en cas de panne sur le réseau, Création d\'applications.',
        dialog: {
          title: 'Stagiaire Informatique direction des services departementaux de l\'education nationale',
          location: 'Annecy',
          entreprise: 'DSDEN',
          date: '2021',
          description: 'Intervention en cas de panne sur le réseau, intervention en cas de panne sur les postes des clients, création d\'une application répondant au besoin client pour automatiser la tâches de creation de profil Putty par utilisateur.',
          softs: [
            { name: 'PowerShell', color: '#3776ab' },
            { name: 'Réseaux', color: '#e74c3c' },
            { name: 'Linux', color: '#0078d7' },
            { name: 'Service client', color: '#e67e22' },
            { name: 'Savoir-être', color: '#3498db' },
          ],
        },
      },
      {
        title: 'CAFE DES DUCS',
        description: 'Barman: Service client, Préparation de boissons, Gestion de la caisse.',
        dialog: {
          title: 'Barman',
          location: 'Annecy',
          entreprise: 'Café des Ducs',
          date: '2021 - 2022 (Saisonnier)',
          description: 'Service client, préparation de boissons, gestion de la caisse, travail en équipe dans un environnement dynamique, souvent amener a gerer des rushs et a garder sont calme, savoir sadapter peut importe la situation.',
          softs: [
            { name: 'Service client', color: '#e67e22' },
            { name: 'Équipe', color: '#2ecc71' },
            { name: 'Coordination', color: '#e74c3c' },
            { name: 'Adaptabilité', color: '#3ce74a' },
            { name: 'Gestion du stress', color: '#f39c12' },
            { name: 'Multitâche', color: '#9b59b6' },
            { name: 'Savoir-être', color: '#3498db' },

          ],
        },
      },
      {
        title: 'Piscine Patinoire',
        description: 'Réceptionniste: Accueil des clients, Gestion des réservations.',
        dialog: {
          title: 'Réceptionniste',
          location: 'Annecy',
          entreprise: 'Piscine Patinoire',
          date: '2022 - 2022',
          description: 'Accueil des clients, gestion des réservations, coordination avec les équipes de maintenance et de sécurité.',
          softs: [
            { name: 'Accueil', color: '#3498db' },
            { name: 'Gestion', color: '#9b59b6' },
            { name: 'Coordination', color: '#e74c3c' },
            { name: 'Adaptabilité', color: '#3ce74a' },
          ],
        },
      },
    ],
  },
]

export const profile = {
  image: '/src/assets/PP.png',
  name: 'Baptiste Ferrand',
  shortDescription: 'Attiré par le DevOps, je suis engagé et curieux, j\'aime automatiser et optimiser les workflows pour livrer des projets robustes, scalables et faciles à maintenir.',
  longDescription: `Passionné d’informatique depuis tout petit, j’ai toujours travaillé avec un ordinateur. Très jeune, j’ai commencé à coder en Lua à 13 ans pour modifier des addons de GMod 💪.
  J’ai ensuite décidé d’orienter mes études dans ce domaine : un bac, puis un BTS, et pourquoi pas continuer vers un bac+5…
  Aujourd’hui, je suis fraîchement diplômé et j’adore le développement. Mais qu’est-ce qui me plaît vraiment ? Souffrir ? 😄 Non, ce que j’aime par-dessus tout, c’est apprendre. J’aime concevoir des applications robustes et scalables, j’adore la partie optimisation et automatisation.
  J’aime travailler en équipe et monter en compétences, notamment sur des architectures complexes comme, par exemple, l’architecture hexagonale, qui est ma préférée.
  Ce que j’aime aussi, c’est voir un projet grandir de A à Z : le concevoir, le structurer, le déployer, optimiser son déploiement sur un ou plusieurs serveurs, mais aussi le sécuriser pour qu’il soit robuste et tienne la charge.
  Répondre à des exigences précises, relever des défis, me mettre en difficulté et en sortir vainqueur, peu importe le résultat final… c’est ça que j’aime dans le développement !`,
}