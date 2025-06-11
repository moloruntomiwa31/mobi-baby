<template>
    <img
    v-if="src"
      :src
      :alt
      :class="['rounded-full object-cover w-full h-full', customClass]"
    />
    <UserRound v-else class="w-8 h-8 text-white" />
  </template>
  
  <script setup lang="ts">
  import {UserRound} from "lucide-vue-next"
    const {
      src = "",
      alt = "Avatar",
      customClass = "",
    } = defineProps<{
      src?: string;
      alt?: string;
      customClass?: string;
    }>()
  </script>