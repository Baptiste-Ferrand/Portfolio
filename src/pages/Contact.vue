<script setup lang="ts">
import { Phone, Mail, Linkedin } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const contact = {
  phone: '+33 6 20 18 06 45',
  email: 'baptiste.ferrand.pro@outlook.fr',
  linkedin: 'https://www.linkedin.com/in/baptiste-ferrand/',
  linkedinUsername: 'baptiste-ferrand',
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <Card class="backdrop-blur-md border border-border">

      <CardHeader class="border-b border-border">
        <CardTitle class="text-center text-lg font-semibold">
          Me contacter
        </CardTitle>
      </CardHeader>

      <CardContent class="p-0">
        <div class="grid grid-cols-3 divide-x divide-border">

          <div class="flex flex-col items-center gap-6 p-8 text-center">
            <div class="w-24 h-24 rounded-xl bg-foreground/10 flex items-center justify-center">
              <Phone class="w-12 h-12 text-foreground" />
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-medium">Contacter moi</span>
              <span class="font-medium">par téléphone</span>
            </div>
            <span class="text-muted-foreground text-sm">
              {{ contact.phone }}
            </span>
          </div>

          <div class="flex flex-col items-center gap-6 p-8 text-center">
            <div class="w-24 h-24 rounded-xl bg-foreground/10 flex items-center justify-center">
              <Mail class="w-12 h-12 text-foreground" />
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-medium">Contacter moi</span>
              <span class="font-medium">par email</span>
            </div>
            <span class="text-muted-foreground text-sm">
              {{ contact.email }}
            </span>
            <Button variant="outline" class="w-full mt-auto" as-child>
              <a :href="`mailto:${contact.email}`">
                Contacter
              </a>
            </Button>
          </div>

          <div class="flex flex-col items-center gap-6 p-8 text-center">
            <div class="w-24 h-24 rounded-xl bg-foreground/10 flex items-center justify-center">
              <Linkedin class="w-12 h-12 text-foreground" />
            </div>
            <div class="flex flex-col gap-1">
              <span class="font-medium">Contacter moi</span>
              <span class="font-medium">par message LinkedIn</span>
            </div>
            <span class="text-muted-foreground text-sm break-all">
              {{ contact.linkedinUsername }}
            </span>
            <Button variant="outline" class="w-full mt-auto" as-child>
              <a :href="contact.linkedin" target="_blank" rel="noopener">
                Contacter
              </a>
            </Button>
          </div>

        </div>
      </CardContent>

    </Card>
  </div>
</template>