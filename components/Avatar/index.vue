<template>
    <div
      class="flex items-center justify-center bg-primaryGray rounded-full"
      :class="[
        size === 'lg'
          ? 'w-12 h-12'
          : size === 'xl'
          ? 'w-16 h-16'
          : size === '2xl'
          ? 'w-20 h-20'
          : size === '3xl'
          ? 'w-24 h-24'
          : size === '4xl'
          ? 'w-28 h-28'
          : size === '5xl'
          ? 'w-32 h-32'
          : 'w-10 h-10',
      ]"
    >
    <img
    v-if="src"
      :src
      :alt
      :class="['rounded-full object-cover w-full h-full', customClass]"
    />
    <User v-else class="w-8 h-8 text-white" />
      </div>
  </template>
  
  <script setup lang="ts">
    import {User} from "lucide-vue-next"
    const {
      size = "lg",
      customClass = "",
    } = defineProps<{
      size?: "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
      customClass?: string | Record<string, boolean>;
        src?: string;
      alt?: string;
        }>()
  </script>