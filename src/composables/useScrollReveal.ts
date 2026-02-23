import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useScrollReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  const observe = (el: HTMLElement) => {
    observer.value?.observe(el)
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            // ✅ On arrête d'observer une fois animé
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,   // 10% de l'élément visible suffit
        rootMargin: '0px 0px -50px 0px', // déclenche 50px avant le bas
      }
    )
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe }
}