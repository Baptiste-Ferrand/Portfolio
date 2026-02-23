<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ExperienceDialog } from '@/types/dialog'
import { sections, profile } from '@/data/home.data'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import ExperienceDialogComponent from '@/components/ExperienceDialog.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { Plus } from 'lucide-vue-next'

const isDialogOpen = ref(false)
const selectedItem = ref<ExperienceDialog | null>(null)

const openDialog = (dialog: ExperienceDialog) => {
  selectedItem.value = dialog
  isDialogOpen.value = true
}

const { observe } = useScrollReveal()

const refTitle = ref<HTMLElement | null>(null)
const refProfile = ref<HTMLElement | null>(null)
const refSections = ref<HTMLElement[]>([])

const setSection = (el: HTMLElement | null) => {
  if (el && !refSections.value.includes(el)) {
    refSections.value.push(el)
  }
}

onMounted(() => {
  if (refTitle.value)   observe(refTitle.value)
  if (refProfile.value) observe(refProfile.value)
  refSections.value.forEach(el => observe(el))
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-10">

    <div ref="refTitle" class="reveal divider flex flex-col gap-5">
      <h1>Bienvenue chez moi, retirer vos chaussures je vous prie 😊</h1>
    </div>

    <div ref="refProfile" class="reveal border border-border rounded-xl overflow-hidden">
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
        <p class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {{ profile.longDescription }}
        </p>
      </div>
    </div>

    <div
      v-for="(section, index) in sections"
      :key="index"
      :ref="(el) => setSection(el as HTMLElement)"
      class="reveal divider flex flex-col gap-5"
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

      <div
        v-for="(item, itemIndex) in section.items"
        :key="itemIndex"
        :ref="(el) => setSection(el as HTMLElement)"
        :class="['reveal', `reveal-delay-${(itemIndex % 5) + 1}`]"
      >
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>{{ item.title }}</ItemTitle>
            <ItemDescription>{{ item.description }}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button 
            class="rounded-full"
            variant="outline"
            size="icon-sm"
            @click="openDialog(item.dialog)"
            aria-label="Voir Plus"
            >
              <plus/>
            </Button>
          </ItemActions>
        </Item>
      </div>
    </div>

    <ExperienceDialogComponent
      v-if="selectedItem"
      v-model:open="isDialogOpen"
      :data="selectedItem"
    />

  </div>
</template>