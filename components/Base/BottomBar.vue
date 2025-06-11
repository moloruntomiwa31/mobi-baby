<template>
    <div class="flex gap-3 mdlg:hidden items-center pt-2.5 pb-1 w-full justify-around bg-gray shadow rounded-tl-2xl rounded-tr-2xl sticky bottom-0 z-50">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="flex flex-col items-center justify-start"
      >
        <component
          :is="tab.icon"
          class="h-[35px] pb-1"
          :class="{ 'stroke-primaryAqua': route.path === tab.path }"
        />
        <span
          v-if="route.path === tab.path"
          class="w-2 h-1 bg-primaryAqua rounded-full"
        />
      </NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import {
    LayoutDashboard,
    MessageSquareText,
    Store,
    NotepadText,
    Settings
  } from 'lucide-vue-next'
  
  const route = useRoute()
  
  const tabs = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard
    },
    {
      name: 'Chat',
      path: '#',
      icon: MessageSquareText
    },
    {
      name: 'MarketPlace',
      path: '#',
      icon: Store
    },
    {
      name: 'Bookings',
      path: '#',
      icon: NotepadText
    },
    {
      name: 'Settings',
      path: '#',
      icon: Settings
    }
  ]
  </script>
  