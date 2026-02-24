<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { projects } from '@/data/projects.data'
import ProjectCard from '@/components/ProjectCard.vue'
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
  <div class="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-10">

    <div ref="refTitle" class="reveal">
      <h1>Mes projets</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :ref="(el) => setCard(el as HTMLElement)"
        :class="['reveal', `reveal-delay-${(index % 5) + 1}`]"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :to="project.to"
        />
      </div>
    </div>

  </div>
</template>