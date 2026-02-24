<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, BicepsFlexed } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { wdwtSections, wdwtLinks } from '@/data/wdwt.data'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { observe } = useScrollReveal()

const refImage = ref<HTMLElement | null>(null)
const refLinks = ref<HTMLElement | null>(null)
const refCards = ref<HTMLElement[]>([])

const setCard = (el: HTMLElement | null) => {
  if (el && !refCards.value.includes(el)) {
    refCards.value.push(el)
  }
}

onMounted(() => {
  if (refImage.value) observe(refImage.value)
  if (refLinks.value) observe(refLinks.value)
  refCards.value.forEach(el => observe(el))
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6">

    <div ref="refImage" class="reveal">
      <img
        src=""
        alt="WDWT"
        class="w-full object-cover rounded-lg"
      />
    </div>

    <div ref="refLinks" class="reveal">
      <Card>
        <CardHeader class="border-b border-border py-3">
          <CardTitle class="text-sm font-semibold">
            Les liens du projet
          </CardTitle>
        </CardHeader>
        <CardContent class="p-0">
          <div class="grid grid-cols-2 divide-x divide-border">

            <a
              :href="wdwtLinks.github"
              target="_blank"
              rel="noopener"
              class="flex flex-col items-center gap-3 p-6 hover:bg-accent/50 transition-colors"
            >
              <span class="text-sm text-muted-foreground">Lien du github</span>
              <Github class="w-8 h-8 text-foreground" />
            </a>

            <a
              :href="wdwtLinks.website"
              target="_blank"
              rel="noopener"
              class="flex flex-col items-center gap-3 p-6 hover:bg-accent/50 transition-colors"
            >
              <span class="text-sm text-muted-foreground">Lien du projet</span>
              <BicepsFlexed class="w-8 h-8 text-foreground" />
            </a>

          </div>
        </CardContent>
      </Card>
    </div>

    <div
      v-for="(section, index) in wdwtSections"
      :key="index"
      :ref="(el) => setCard(el as HTMLElement)"
      :class="['reveal', `reveal-delay-${(index % 5) + 1}`]"
    >
      <Card>
        <CardHeader class="border-b border-border py-3">
          <CardTitle class="text-sm font-semibold">
            {{ section.title }}
          </CardTitle>
        </CardHeader>
        <CardContent class="pt-4">
          <p
            v-if="section.description"
            class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line"
          >
            {{ section.description }}
          </p>
          <p v-else class="text-sm text-muted-foreground italic">
            Contenu à venir...
          </p>
        </CardContent>
      </Card>
    </div>

  </div>
</template>