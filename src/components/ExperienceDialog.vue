<script setup lang="ts">
import type { ExperienceDialog } from '@/types/dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

const open = defineModel<boolean>('open', { required: true })

defineProps<{
  data: ExperienceDialog
}>()
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-lg p-0 overflow-hidden">

      <DialogHeader class="p-6 pb-4 border-b border-border">
        <DialogTitle class="text-lg font-semibold">
          {{ data.title }}
        </DialogTitle>
        <DialogDescription class="flex justify-between text-sm mt-2">
          <span>{{ data.location }} — {{ data.entreprise }}</span>
          <span>{{ data.date }}</span>
        </DialogDescription>
      </DialogHeader>

      <div class="p-6 border-b border-border">
        <p class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {{ data.description }}
        </p>
      </div>

      <div class="p-6 flex flex-col gap-3">
        <span class="text-sm font-medium">Savoir Faire/Etre</span>
        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="soft in data.softs"
            :key="soft.name"
            variant="outline"
            :style="{ borderColor: soft.color, color: soft.color }"
          >
            {{ soft.name }}
          </Badge>
        </div>
      </div>

    </DialogContent>
  </Dialog>
</template>