<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { informationSections } from '@/data/information.data'
import InformationCard from '@/components/InformationCard.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { observe } = useScrollReveal()
const refTitle = ref<HTMLElement | null>(null)
const refCards = ref<HTMLElement[]>([])

const setCard = (el: HTMLElement | null) => {
  if (el && !refCards.value.includes(el)) {
    refCards.value.push(el)
  }
}

onMounted(() => {
  if (refTitle.value) observe(refTitle.value)
  refCards.value.forEach(el => observe(el))
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6">

    <div ref="refTitle" class="reveal">
      <h1>Les concepts techniques</h1>
    </div>

    <div
      v-for="(section, index) in informationSections"
      :key="index"
      :ref="(el) => setCard(el as HTMLElement)"
      :class="['reveal', `reveal-delay-${(index % 5) + 1}`]"
    >
      <InformationCard :section="section" />
    </div>

  </div>
</template>