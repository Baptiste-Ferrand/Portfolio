import { onMounted, onUnmounted, ref} from 'vue'

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
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe }
}