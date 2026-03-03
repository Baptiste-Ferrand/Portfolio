<script setup lang="ts">
import type { ExperienceDialog } from '@/types/dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'
import { ref, watch } from 'vue'

const open = defineModel<boolean>('open', { required: true })
const showAll = ref(false)

const props = defineProps<{
  data: ExperienceDialog
  open: boolean
}>()

watch(() => props.open, (newVal) => {
  if (newVal) showAll.value = false
})
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-lg p-0 ">

      <DialogHeader class="p-6 pb-4 border-b border-border">
        <DialogTitle class="text-lg font-semibold">
          {{ data.title }}
        </DialogTitle>
        <DialogDescription class="flex justify-between text-sm mt-2">
          <span>{{ data.location }} — {{ data.entreprise }}</span>
          <span>{{ data.date }}</span>
        </DialogDescription>
      </DialogHeader>

      <div class="p-6 border-b border-border max-lg:max-h-86 max-lg:overflow-y-auto">
        <p class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {{ data.description }}
        </p>
      </div>

      <div class="p-6 flex flex-col gap-3">
        <span class="text-sm font-medium">Savoir Faire/Etre</span>
        <div class="gap-2 max-md:hidden" >
          <Badge
            v-for="soft in data.softs"
            :key="soft.name"
            variant="outline"
            :style="{ borderColor: soft.color, color: soft.color }"
          >
            {{ soft.name }}
          </Badge>
        </div>
        <div class="gap-2 md:hidden" >
          <Badge
            v-for="soft in showAll ? data.softs : data.softs.slice(0, 4)"
            :key="soft.name"
            variant="outline"
            :style="{ borderColor: soft.color, color: soft.color }"
          >
            {{ soft.name }}
          </Badge>
          <Button variant="tertiary" @click="showAll = !showAll">
            {{ showAll ? 'Voir moins' : 'Voir plus' }}
          </Button>
        </div>      
      </div>

    </DialogContent>
  </Dialog>
</template>