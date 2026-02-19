<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

// --- Hide/Show header on scroll ---
const isVisible = ref(true)
const lastScrollY = ref(0)

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 10) {
    isVisible.value = true
  } else if (currentScrollY > lastScrollY.value) {
    isVisible.value = false // scroll bas → cacher
  } else {
    isVisible.value = true // scroll haut → montrer
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Header fixe + animé -->
  <header
:class="[
  'fixed top-0 left-0 right-0 z-50',
  'border-b border-white/10 bg-white/5 backdrop-blur-sm',
  'transition-transform duration-300',
  isVisible ? 'translate-y-0' : '-translate-y-full',
]"
  >
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-center">
      <NavigationMenu :viewport="false">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/">Home</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/projects">Project</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/contact">Contact</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/information">Information</RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>

  <!-- Contenu des pages -->
  <main class="pt-16">
    <RouterView />
  </main>
</template>