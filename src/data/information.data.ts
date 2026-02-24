import type { InformationSection } from '@/types/information'

export const informationSections: InformationSection[] = [
  {
    title: 'Architecture Hexagonale',
    description1: `L’architecture hexagonale (Ports & Adapters) organise un logiciel en mettant le cœur métier au centre et en isolant tout ce qui est externe (API HTTP, UI, base de données, services tiers, messages, fichiers…). Le principe clé : le métier ne dépend pas de la technique ; c’est la technique qui vient s’adapter au métier.
    Le centre : domaine + cas d’usage
    Domaine : règles métier, entités, invariants, logique “pure”.
    Cas d’usage (application services) : orchestrent le métier (ex. “Créer une commande”), et appellent l’extérieur via des abstractions.
    Objectif : pouvoir exécuter et tester ce cœur sans DB, sans serveur web, sans UI.
    Les ports : les interfaces du cœur
    Ce sont les contrats entre le cœur et l’extérieur :

    Ports entrants (inbound) : ce que l’extérieur peut demander au système (ex. CreateOrderUseCase).
    Ports sortants (outbound) : ce dont le cœur a besoin (ex. OrderRepository, PaymentGateway, EmailSender).
    Ils sont définis du point de vue du métier, pas des frameworks.
    Les adapters : les implémentations côté extérieur
    Adapters entrants : contrôleurs REST, handlers GraphQL, CLI, consumers Kafka… Ils traduisent une requête externe en appel de cas d’usage.
    Adapters sortants : implémentations techniques des ports sortants (repo SQL/NoSQL, client HTTP, publisher RabbitMQ, stockage S3…).
    La règle de dépendance
    Le cœur ne dépend pas des adapters/frameworks : il dépend seulement des ports (interfaces). Les adapters, eux, dépendent du cœur.
    Conséquence : changer de DB, de protocole (REST → messaging), ou de service tiers impacte surtout les adapters, pas la logique métier.`,
    img: '/src/assets/hexagonal-architecture.png',
    description2: `Avantages principaux
    Meilleure testabilité : le cœur métier est découplé des entrées/sorties (DB, HTTP, services). On peut tester les cas d’usage avec des mocks/fakes sans dépendre d’une infra réelle.
    Indépendance des frameworks : Spring/.NET/Nest/Django restent des outils “autour” du système, pas ce qui dicte la structure. On limite l’effet “verrouillage” technologique.
    Évolutivité : ajouter une nouvelle entrée (ex. API + CLI) revient souvent à créer un nouvel adapter entrant. Remplacer un service externe (paiement, email) se fait en changeant l’adapter sortant, sans toucher au métier.
    Meilleure maintenabilité sur du complexe : les règles métier restent regroupées et cohérentes, au lieu d’être éparpillées dans des contrôleurs, ORM, callbacks, etc.
    Responsabilités plus claires :
    métier dans le domaine,
    orchestration dans les cas d’usage,
    technique/I-O dans les adapters.
    Inconvénients / coûts
    Plus de “plomberie” : interfaces, ports, DTO, mapping… Sur un petit projet, cela peut sembler trop lourd.
    Risque d’over-engineering : si l’app fait surtout du CRUD simple, multiplier les couches apporte peu de valeur.
    Discipline et apprentissage : il faut tenir la séparation (dépendances, DTO, transactions, frontières entre couches), sinon l’architecture se dégrade.
    Plus de mapping : convertir des objets entre API ↔ application ↔ domaine ↔ persistence est propre, mais coûte du temps et du code.
    Mauvaise implémentation possible : si on met du métier dans les adapters ou si le domaine dépend de l’ORM, on garde la complexité sans bénéficier du découplage.
    Quand l’utiliser (bons cas)
    Métier non trivial (règles riches, workflows, invariants).
    Produit amené à durer/évoluer (refactoring, plusieurs équipes, changements techniques probables).
    Beaucoup d’intégrations externes (paiement, ERP, email, bus d’événements).
    Plusieurs canaux (API, batch, événements, UI, partenaires).
    Besoin fort de tests et de livraison rapide (CI/CD, changements fréquents).
    Quand éviter (ou alléger)
    POC / MVP très court terme : priorité à la vitesse.
    Application surtout CRUD : une architecture en couches classique peut suffire.
    Petit projet / courte durée de vie : le coût de mise en place peut ne pas être rentable.
    Mini résumé
    L’hexagonal est surtout un choix pour protéger la logique métier et faciliter tests + évolution. Très pertinent dès que le domaine est important et que le logiciel doit durer, moins utile quand le besoin est simple et rapide.`,
    sources: [
      { label: 'Jean-Jérôme Lévy', url: 'https://scalastic.io/hexagonal-architecture-domain' },
      { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)' },
      { label: 'Medium', url: 'https://medium.com/@faroukymedia/de-la-th%C3%A9orie-%C3%A0-la-pratique-spring-boot-architecture-hexagonale-et-ddd-pour-des-applications-f1110d83bced' },
    ],
  },
  {
    title: 'Watchtower',
    description1: `Watchtower est un outil (souvent utilisé avec Docker) qui sert à mettre à jour automatiquement des conteneurs quand une nouvelle image est disponible dans un registre (Docker Hub, GitHub Container Registry, registry privé, etc.). L’objectif est d’éviter de refaire manuellement : pull de l’image → stop du conteneur → recréation du conteneur → relance.
    Son fonctionnement :
    Watchtower tourne lui-même dans un conteneur et a accès au Docker Engine via le socket Docker.
    Il surveille les conteneurs ciblés (tous, ou seulement ceux avec un label/config spécifique).
    À intervalle régulier ou selon config, il :
    vérifie si l’image utilisée par un conteneur a une version plus récente dans le registre,
    télécharge (pull) la nouvelle image,
    arrête le conteneur existant,
    recrée et relance le conteneur avec la nouvelle image, en gardant autant que possible la même configuration (ports, volumes, variables d’environnement, réseaux, restart policy).
    Optionnellement, il peut :
    nettoyer les anciennes images,
    envoyer des notifications (Slack, email, webhook…),
    n’update que certains conteneurs et appliquer des stratégies (rolling, délais, etc. selon options).`,
    img: '/src/assets/watchtower.png',
    description2: `Avantages
    Mises à jour automatisées : les conteneurs se mettent à jour dès qu’une nouvelle image est disponible, ce qui fait gagner beaucoup de temps, notamment sur un serveur perso/VPS avec plusieurs services.
    Mise en place simple : pas besoin d’un orchestrateur complet (comme Kubernetes) pour automatiser les renouvellements de conteneurs.
    Moins d’oublis : les services restent plus facilement à jour (correctifs de sécurité, bugfix), sans dépendre d’une action manuelle.
    Large compatibilité : fonctionne avec de nombreux environnements Docker (docker-compose, conteneurs “standalone”, registres publics ou privés).
    Notifications possibles : il est possible d’être informé des mises à jour et redémarrages, ce qui améliore la visibilité sur ce qui change.
    Inconvénients / risques
    Redémarrage = interruption potentielle : la mise à jour passe par un arrêt puis recréation du conteneur, ce qui peut provoquer une indisponibilité, surtout en l’absence de load balancing ou de haute disponibilité.
    Mises à jour non maîtrisées : suivre un tag trop “mobile” (comme latest) peut amener à récupérer une version incompatible et casser un service.
    Ce n’est pas un outil de déploiement complet : Watchtower ne gère pas nativement des scénarios avancés comme des migrations de base de données orchestrées, des déploiements canary, un rollback automatique, ou des contrôles de santé sophistiqués.
    Enjeu sécurité (Docker socket) : l’accès à /var/run/docker.sock donne un niveau de contrôle très élevé sur l’hôte (proche de droits root). C’est un point à évaluer sérieusement.
    Moins adapté aux systèmes critiques : pour une production sensible, un pipeline CI/CD avec déploiement contrôlé est souvent plus sûr et plus prévisible.
    Pourquoi l’utiliser
    Homelab / auto-hébergement : cas typique pour maintenir à jour des services personnels (Plex, stack arr, monitoring, applications maison).
    Services non critiques : adapté lorsque de courtes interruptions sont acceptables.
    Besoin de simplicité : utile pour rester à jour sans construire une chaîne de déploiement complète.
    Versioning maîtrisé : pertinent lorsqu’une stratégie de tags stables est en place (versions pin, validation avant promotion).
    Pourquoi éviter (ou limiter l’usage)
    Production critique : exigences fortes de disponibilité, de validation, de conformité, de rollback et de gestion de changements.
    Tolérance faible aux redémarrages : si un redémarrage automatique peut avoir un impact important, l’automatisation devient risquée.
    Versioning flou : absence de tags fiables, de changelog, ou de garanties de compatibilité entre versions.
    Contraintes sécurité strictes : contexte où l’exposition du socket Docker est jugée inacceptable.`,
        sources: [
      { label: 'Watchtower Docs', url: 'https://containrrr.dev/watchtower/' },
      { label: 'Watchtower GitHub', url: 'https://github.com/containrrr/watchtower' },
    ],
  },
    {
    title: 'Idempotence',
    description1: `Idempotence en mathématiques : le principe
    En mathématiques, une opération (ou une fonction) est dite idempotente lorsqu’appliquer cette opération plusieurs fois produit le même résultat que l’appliquer une seule fois.
        
    Formellement, une fonction 
    f est idempotente si :
    f(f(x))=f(x)
    Exemples simples :
        
    La fonction max avec une valeur fixe est idempotente : 
    max(max(x,a),a)=max(x,a).
    En algèbre booléenne : 
    x∨x=x et x∧x=x (OR et AND sont idempotents).
    En théorie des ensembles : prendre l’union avec le même ensemble ne change rien : 
    A∪A=A.
    L’idée générale : une fois que l’on a “atteint” l’état résultant, répéter l’action ne modifie plus rien.
        
    Idempotence en développement : le rôle et l’intérêt
    En développement, l’idempotence décrit une action (API, script, commande, déploiement) qui peut être exécutée plusieurs fois sans changer le résultat final au-delà de la première exécution.
        
    Deux notions sont souvent confondues, mais utiles à distinguer :
        
    Idempotent : répéter l’action ne change pas le résultat final.
    Sans effet secondaire (pureté) : exécuter l’action ne produit aucun effet externe (ce qui n’est généralement pas le cas en déploiement).
    Dans les systèmes distribués et l’automatisation, l’idempotence est précieuse car elle rend les opérations résilientes :
        
    relancer après une panne,
    rejouer après un timeout réseau,
    appliquer plusieurs fois la même config sur plusieurs machines,
    éviter les “doubles effets” (ex. créer deux fois la même ressource).
    Exemple non idempotent :
        
    “Ajouter une ligne dans un fichier” (si c’est fait naïvement) → chaque exécution ajoute une ligne supplémentaire.
    Exemple idempotent :
        
    “S’assurer que cette ligne est présente” → si elle est déjà là, aucune modification.
    Idempotence avec Ansible : principe, rôle et puissance côté serveurs
    Ansible est un outil de configuration/déploiement qui mise fortement sur l’idempotence. Le modèle mental n’est pas “exécuter une suite de commandes”, mais plutôt décrire un état attendu (desired state) et laisser l’outil amener la machine vers cet état.
        
    Comment Ansible applique l’idempotence
    La plupart des modules Ansible sont conçus pour :
        
    Inspecter l’état actuel (ex. le paquet est-il installé ? le service est-il démarré ? la ligne existe-t-elle ?).
    Ne changer que si nécessaire.
    Renvoyer un statut clair :
    ok : rien à faire, l’état est déjà conforme,
    changed : une modification a été appliquée,
    failed : erreur.
    Exemples typiques d’actions idempotentes dans Ansible :
        
    Paquets : “le paquet Nginx doit être installé” → s’il l’est déjà, aucune action.
    Services : “le service doit être démarré et activé au boot” → rejouer ne redémarre pas inutilement (sauf si un changement l’exige).
        
    Pourquoi c’est puissant pour le déploiement serveur
    Relançable sans stress : rejouer un playbook après un échec partiel est possible, car les étapes déjà conformes ne sont pas refaites inutilement.
    Cohérence et reproductibilité : plusieurs serveurs peuvent converger vers la même configuration, avec moins d’écarts au fil du temps.
    Déploiements plus sûrs : l’automatisation devient plus “déclarative” : l’objectif est l’état final, pas la liste des manipulations.
    Meilleure gestion des dérives (configuration drift) : si un serveur est modifié manuellement ou dérive, relancer Ansible le remet dans l’état attendu.
    Audit et lisibilité : le playbook décrit clairement ce que le serveur doit être, ce qui est utile pour la maintenance et la transmission.
    Limites à connaître
    Même si Ansible vise l’idempotence, elle dépend de :
        
    l’usage des bons modules (éviter shell/command quand un module dédié existe),
    la qualité des tâches (ex. un template qui change à chaque run à cause d’un timestamp casse l’idempotence),
    certains domaines intrinsèquement “non idempotents” (actions qui produisent volontairement un nouvel événement à chaque exécution : rotation, génération aléatoire, append de logs, etc.).`,
      sources: [
      { label: 'Idempotence - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Idempotence' },
      { label: 'Microlinux - Ansible', url: 'https://blog.microlinux.fr/formation-ansible-08-idempotence/' },
    ],
  },
]