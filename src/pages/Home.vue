<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'

// 📦 Données

const profile = {
  image: '/src/assets/PP.png', // 📸 Remplace par ton image
  name: 'Baptiste Ferrand',
  shortDescription: 'Attiré par le DevOps, je suis engagé et curieux, j \'aime automatiser et optimiser les workflows pour livrer des projets robustes, scalables etfaciles à maintenir.',
  longDescription: `Passionné d’informatique depuis tout petit, j’ai toujours travaillé avec un ordinateur. Très jeune, j’ai commencé à coder en Lua à 13 ans pour modifier des addons de GMod 💪.

J’ai ensuite décidé d’orienter mes études dans ce domaine : un bon bac, puis un BTS, et pourquoi pas continuer vers un bac+5…

Aujourd’hui, je suis fraîchement diplômé et j’adore le développement. Mais qu’est-ce qui me plaît vraiment ? Souffrir ? 😄 Non, ce que j’aime par-dessus tout, c’est apprendre. J’aime concevoir des applications robustes et scalables, j’adore la partie optimisation et automatisation.

J’aime travailler en équipe et monter en compétences, notamment sur des architectures complexes comme, par exemple, l’architecture hexagonale, qui est ma préférée.

Ce que j’aime aussi, c’est voir un projet grandir de A à Z : le concevoir, le structurer, le déployer, optimiser son déploiement sur un ou plusieurs serveurs, mais aussi le sécuriser pour qu’il soit robuste et tienne la charge.

Répondre à des exigences précises, relever des défis, me mettre en difficulté et en sortir vainqueur, peu importe le résultat final… c’est ça que j’aime dans le développement !`
}

const sections = [
  {
    tooltip: { trigger: 'Voici mon extraordinaire parcours scolaire', content: 'Pas dutout 🤐' },
    items: [
      {
        title: 'Mastere 2 Informatique Ynov Campus Lyon',
        description: 'Expert en développement logiciel et gestion de projets informatiques.',
      },
      {
        title: 'Brevet de Technicien Supérieur Edouard Branly',
        description: 'Formation technique avancée avec une spécialisation en informatique.',
      },
      {
        title: 'Baccalauréat STI2D Spécialité SNIR Louis Lachenal',
        description: 'Diplôme de fin d\'études secondaires avec une solide base en Mathématiques.',
      },
    ],
  },
  {
    tooltip: { trigger: 'Voici mon parcours professionnel', content: 'Très impressionnant' },
    items: [
      {
        title: 'Lyon (chez moi)',
        description: 'Track&Train project perso: Concevoir une architecture hexagonal, Gestion des CI/CD, Nginx, Devops,Concevoir une documentation.',
      },
      {
        title: 'ASCOREL Vienne',
        description: 'Développeur Fullstack : Analyse des problèmes techniques, Déploiement et intégration continue, création d\'une API.',
      },
      {
        title: 'LM Control Lyon',
        description: 'Développeur Web: Améliorations du site de gestion à distance, Conception et développement des programmes.',
      },
      {
        title: 'DSDEN Annecy',
        description: 'Stagiaire en informatique: Intervention en cas de panne sur le réseau, Création d\'applications pour automatiser les tâches des utilisateurs.',
      },
      {
        title: 'CAFE DES DUCS',
        description: 'Barman: Service client, Préparation de boissons, Gestion de la caisse, Travail en équipe, Adaptabilité dans un environnement dynamique.',
      },
      {
        title: 'Piscine Patinoire',
        description: 'Réceptionniste: Accueil des clients, Gestion des réservations, Service à la clientèle, Coordination avec les équipes de maintenance et de sécurité.',
      },
    ],
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-10">

    <!-- 👋 Titre -->
    <div class="divider flex flex-col gap-5">
      <h1>Bienvenue chez moi, retirer vos chaussures je vous prie 😊</h1>
    </div>

     <!-- 🪪 Bloc présentation -->
    <div class="border border-border rounded-xl overflow-hidden">

      <!-- Partie haute : photo + description courte -->
      <div class="flex items-start gap-6 p-6">

        <!-- Photo ronde -->
        <div class="shrink-0">
          <img
            :src="profile.image"
            :alt="profile.name"
            class="w-48 h-48 rounded-full object-cover border-2 border-border"
          />
        </div>

        <!-- Description courte -->
        <div class="flex flex-col gap-2">
          <h2 class="text-lg font-semibold">{{ profile.name }}</h2>
          <p class="text-sm text-muted-foreground">{{ profile.shortDescription }}</p>
        </div>

      </div>

      <!-- Séparateur -->
      <div class="border-t border-border" />

      <!-- Partie basse : description longue -->
      <div class="p-6">
        <p class="text-sm text-muted-foreground leading-relaxed">
          {{ profile.longDescription }}
        </p>
      </div>

    </div>

    <!-- 🔄 Sections dynamiques -->
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="divider flex flex-col gap-5"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <span>{{ section.tooltip.trigger }}</span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{{ section.tooltip.content }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Item
        v-for="(item, itemIndex) in section.items"
        :key="itemIndex"
        variant="outline"
      >
        <ItemContent>
          <ItemTitle>{{ item.title }}</ItemTitle>
          <ItemDescription>{{ item.description }}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">Open</Button>
        </ItemActions>
      </Item>
    </div>

  </div>
</template>