<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

defineProps<{
  title: string
  description: string
  to: string 
}>()
</script>

<template>
  <Card class="flex flex-col backdrop-blur-sm">

    <CardHeader class="border-b border-border">
      <CardTitle class="text-center text-base font-semibold">
        {{ title }}
      </CardTitle>
    </CardHeader>

    <CardContent class="flex flex-col flex-1 gap-6 p-6">

      <p class="text-sm text-muted-foreground leading-relaxed flex-1">
        {{ description }}
      </p>

      <div class="flex justify-center">
        <Button variant="outline" as-child>
          <RouterLink :to="to">
            Voir Plus
          </RouterLink>
        </Button>
      </div>

    </CardContent>

  </Card>
</template>