<script setup lang="ts">
import type { InformationSection } from '@/types/information'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-vue-next'

defineProps<{
  section: InformationSection
}>()
</script>

<template>
  <Card class="flex flex-col backdrop-blur-sm">

    <!-- 🔝 Titre -->
    <CardHeader class="border-b border-border">
      <CardTitle class="text-center text-base font-semibold">
        {{ section.title }}
      </CardTitle>
    </CardHeader>

    <!-- 📝 Contenu -->
    <CardContent class="flex flex-col gap-4 pt-4 flex-1">

      <!-- Description 1 -->
      <p class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {{ section.description1 }}
      </p>

      <!-- 🖼️ Image optionnelle -->
      <img
        v-if="section.img"
        :src="section.img"
        :alt="section.title"
        class="w-full rounded-lg border border-border object-cover"
      />

      <!-- Description 2 optionnelle -->
      <p
        v-if="section.description2"
        class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line"
      >
        {{ section.description2 }}
      </p>

    </CardContent>

    <!-- 🔗 Sources optionnelles -->
    <CardFooter
      v-if="section.sources?.length"
      class="border-t border-border flex flex-wrap gap-2 pt-4"
    >
      <Button
        v-for="source in section.sources"
        :key="source.url"
        variant="outline"
        size="sm"
        as-child
      >
        <a :href="source.url" target="_blank" rel="noopener" class="flex items-center gap-1">
          <ExternalLink class="w-3 h-3" />
          {{ source.label }}
        </a>
      </Button>
    </CardFooter>

  </Card>
</template>