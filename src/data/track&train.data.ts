export interface ProjectSection {
  title: string
  description: string
}

export const trackAndTrainSections: ProjectSection[] = [
  {
    title: 'Description du projet',
    description: `Track&Train est un projet développé en autonomie de A à Z. Il répond à la problématique actuelle des jeunes coachs sportifs indépendants qui ne disposent pas de plateforme unifiée et centralisée pour gérer leur travail et leurs ressources (clients, données, etc.).
    Track&Train permet la mise en relation d'utilisateurs avec des coachs, et offre à ces derniers un suivi clair et structuré de chacun de leurs clients sur une même plateforme.
    Le modèle économique de Track&Train est orienté B2B (business to business).
    La plateforme propose la création d'un compte client gratuitement. Si un utilisateur souhaite devenir coach, il doit remplir un formulaire et attester qu'il est bien coach légalement reconnu par l'État.
    Les coachs peuvent créer des groupes et y inviter leurs clients afin de gérer leurs suivis : diètes, entraînements et "daily check-up".
    Le daily check-up consiste à demander chaque jour à l'utilisateur son ressenti de la veille : niveau de fatigue, appétit, qualité et durée du sommeil, douleurs éventuelles, etc.`,
  },
  {
    title: 'Récapitulatif des features',
    description: `🧑‍💼 Gestion des utilisateurs & des coachs : inscription, connexion, promotion des utilisateurs en coachs, gestion des rôles
    🏋️ Gestion des groupes : créer, mettre à jour, supprimer, rejoindre/quitter des groupes, ajouter/retirer des membres
    🏆 Entraînements & exercices : CRUD des entraînements et des exercices
    🍽️ Alimentation / diètes : CRUD des plans alimentaires
    🔐 Auth JWT : sécurisation des endpoints avec un accès basé sur les rôles
    🧩 Architecture hexagonale : séparation claire des responsabilités, facile à tester et à faire évoluer
    🧪 Tests complets : toute la logique métier testée avec des adaptateurs en mémoire
    🚀 Hot Reload : développement rapide grâce au montage de volumes Docker`,
  },
  {
    title: 'Les technologies utilisées',
    description: `Track&Train a été conçu côté back-end en Python, car c'est un langage simple, rapide à mettre en œuvre et bien adapté à l'intégration future de fonctionnalités d'IA.
    Le framework utilisé est FastAPI, choisi pour ses bonnes performances, sa simplicité et son système de validation via Pydantic.
    Côté front-end, JavaScript avec Vue.js et Vuetify a été choisi comme solution pragmatique compte tenu du temps disponible. Pinia a été utilisé pour la gestion du store.
    Sur la partie DevOps, un serveur hébergé à la maison a été utilisé pour l'environnement de pré-production, avec un déploiement continu mis en place grâce à GitHub Actions.
    Pour la partie métriques et supervision, Grafana et Prometheus ont été retenus.`,
  },
  {
    title: 'Pourquoi l\'architecture hexagonale ?',
    description: `Une architecture hexagonale, mais pourquoi ?
    Un ami m’en avait parlé un jour en me disant qu’une fois adoptée, j’allais en tomber amoureux. Malheureusement pour moi, il avait raison.
    Plus sérieusement, j’en avais assez de dépendre fortement d’un framework ou d’un ORM : si l’un d’eux devait être remplacé ou posait problème, il fallait souvent tout recommencer. J’en avais aussi marre des structures de projet peu claires, avec deux ou trois dossiers, et des fichiers énormes de plusieurs centaines de lignes.
    L’architecture hexagonale apporte une séparation nette entre le domaine, l’infrastructure et les interfaces, ce qui rend le projet beaucoup plus lisible, testable et maintenable. La possibilité de changer d’ORM, de framework ou de brancher de nouveaux “ports” (comme une interface CLI, une API REST, un worker, etc.) rend le projet très scalable, flexible et robuste sur le long terme.`,
  },
  {
    title: 'Le déploiement',
    description: `Comment Track&Train est déployé de façon continue ?
    Track&Train est organisé autour de trois dépôts : un dépôt front-end, un dépôt back-end et un dépôt dédié au déploiement. Le front et le back sont chacun packagés dans une image Docker et hébergés sur GitHub Packages. Ces images sont versionnées et taguées : à chaque nouveau merge sur la branche develop, l’image de pré-production est reconstruite, un nouveau tag est généré et un changelog est mis à jour pour décrire les nouvelles fonctionnalités. L’ensemble de ce processus est entièrement automatisé via des pipelines CI que j’ai conçus.
    Le dépôt de déploiement contient la configuration Ansible (templates Jinja) permettant de préparer et configurer le serveur : création des règles de pare-feu, configuration des redirections Nginx, génération et renouvellement automatique des certificats SSL avec Certbot, vérification de la version du système Linux, installation des paquets nécessaires, puis génération du fichier docker-compose avec gestion des secrets via Ansible Vault. Une fois cette étape réalisée, le docker-compose est exécuté, les images sont pull et les conteneurs sont build.
    Pour assurer le déploiement continu, Watchtower est utilisé pour surveiller, à intervalles réguliers, les images des conteneurs en cours d’exécution. Lorsqu’une image distante correspondant au même tag qu’utilise le conteneur a été mise à jour (c’est‑à‑dire que le tag pointe vers un nouveau digest), Watchtower télécharge la nouvelle image et recrée/redémarre automatiquement le conteneur ciblé.`,
  },
]

export const trackAndTrainLinks = {
  github: 'https://github.com/orgs/track-train/repositories',
  website: 'https://pre-prod.trackntrain.fr',
}