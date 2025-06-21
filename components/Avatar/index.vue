<template>
  <component
    :is="clickable ? NuxtLink : 'div'"
    to="/settings"
    @click="handleClick"
    class="flex items-center justify-center bg-primaryGray rounded-full"
    :class="[
      sizeClass,
      clickable ? 'cursor-pointer hover:bg-primaryGray/80 transition' : ''
    ]"
  >
    <img
      v-if="src"
      :src
      :alt
      :class="['rounded-full object-cover w-full h-full', customClass]"
    />
    <User v-else class="w-1/2 h-1/2 text-white" />
  </component>
</template>

<script setup lang="ts">
import { User } from "lucide-vue-next"
import { NuxtLink } from '#components'

const props = defineProps<{
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  customClass?: string | Record<string, boolean>
  src?: string
  alt?: string
  clickable?: boolean
}>()

const emit = defineEmits<{
  (e: "click"): void
}>()

const sizeClass = computed(() => {
  const map = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20',
    '3xl': 'w-24 h-24',
    '4xl': 'w-28 h-28',
    '5xl': 'w-32 h-32'
  }
  return map[props.size || 'sm'] 
})

const handleClick = () => {
    emit('click')
}
</script>
