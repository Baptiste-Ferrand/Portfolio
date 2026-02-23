<script setup lang="ts">
import { ref } from 'vue'
import type { ExperienceDialog } from '@/types/dialog'
import { sections, profile } from '@/data/home.data'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import ExperienceDialogComponent from '@/components/ExperienceDialog.vue'

const isDialogOpen = ref(false)
const selectedItem = ref<ExperienceDialog | null>(null)

const openDialog = (dialog: ExperienceDialog) => {
  selectedItem.value = dialog
  isDialogOpen.value = true
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-10">

    <div class="divider flex flex-col gap-5">
      <h1>Bienvenue chez moi, retirer vos chaussures je vous prie 😊</h1>
    </div>

    <div class="border border-border rounded-xl overflow-hidden">
      <div class="flex items-start gap-6 p-6">
        <div class="shrink-0">
          <img
            :src="profile.image"
            :alt="profile.name"
            class="w-48 h-48 rounded-full object-cover border-2 border-border"
          />
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-lg font-semibold">{{ profile.name }}</h2>
          <p class="text-sm text-muted-foreground">{{ profile.shortDescription }}</p>
        </div>
      </div>
      <div class="border-t border-border" />
      <div class="p-6">
        <p class="text-sm text-muted-foreground leading-relaxed">
          {{ profile.longDescription }}
        </p>
      </div>
    </div>

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
          <Button variant="outline" size="sm" @click="openDialog(item.dialog)">
            Voir plus
          </Button>
        </ItemActions>
      </Item>
    </div>

    <ExperienceDialogComponent
    v-if="selectedItem"
    v-model:open="isDialogOpen"
    :data="selectedItem"
    />

  </div>
</template>