<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const isVisible = ref(true)
const lastScrollY = ref(0)

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY < 10) {
    isVisible.value = true
  } else if (currentScrollY > lastScrollY.value) {
    isVisible.value = false
  } else {
    isVisible.value = true
  }
  lastScrollY.value = currentScrollY

  const scrollBottom = window.scrollY + window.innerHeight
  const pageHeight = document.documentElement.scrollHeight
  isFooterVisible.value = scrollBottom >= pageHeight - 50 
}

const isDark = ref(document.documentElement.classList.contains('dark'))

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const isFooterVisible = ref(false)

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50',
      'border-b border-white/10 bg-white/5 backdrop-blur-sm',
      'transition-transform duration-300',
      isVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

      <div class="flex-1 flex justify-center">
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

      <Button variant="ghost" size="icon" class="rounded-full" @click="toggleTheme">
        <Sun v-if="isDark" class="w-4 h-4" />
        <Moon v-else class="w-4 h-4" />
      </Button>

    </div>
  </header>

  <main class="pt-16">
    <RouterView />
  </main>

  <footer
    :class="[
      'fixed bottom-0 left-0 right-0 z-50',
      'border-t border-white/10 bg-white/5 backdrop-blur-sm',
      'transition-transform duration-300',
      isFooterVisible ? 'translate-y-0' : 'translate-y-full',
    ]"
  >
    <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">

      <span class="text-sm text-foreground/50">
        © {{ new Date().getFullYear() }} Baptiste Ferrand
      </span>

      <div class="flex items-center gap-2">
        <Button variant="ghost" size="icon" class="rounded-full w-8 h-8" as-child>
          <a href="https://github.com/Baptiste-Ferrand" target="_blank" rel="noopener">
            <Github class="w-4 h-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" class="rounded-full w-8 h-8" as-child>
          <a href="https://www.linkedin.com/in/baptiste-ferrand" target="_blank" rel="noopener">
            <Linkedin class="w-4 h-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" class="rounded-full w-8 h-8" as-child>
          <a href="mailto:baptiste.ferrand.pro@outlook.fr">
            <Mail class="w-4 h-4" />
          </a>
        </Button>
      </div>

    </div>
  </footer>
</template>