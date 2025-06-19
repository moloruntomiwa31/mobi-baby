<template>
    <FullLayout>
      <template #left>
        <div class="space-y-4 p-4">
          <BaseText bold>Settings</BaseText>
          <ul class="space-y-2 text-gray-700">
            <li class="cursor-pointer hover:text-primaryAqua">Account</li>
            <li class="cursor-pointer hover:text-primaryAqua">Preferences</li>
            <li class="cursor-pointer hover:text-primaryAqua">Notifications</li>
          </ul>
        </div>
      </template>
  
      <template #middle>
       <slot />
      </template>
  
      <template #right>
        <div class="p-4">
          <BaseText class="text-primaryAqua" bold>Need help or support?</BaseText>
          <BaseText class="text-gray-600 mt-2" size="sm">Reach out to our support team for any questions or issues you may have.</BaseText>
        </div>
      </template>
    </FullLayout>
  
    <MobileLayout :hide="{ top: true }">
        <header class="fixed top-0 left-0 p-4">
            <div class="flex justify-start">
                <MoveLeft class="w-6 h-6 text-primaryBlue cursor-pointer" @click="$router.back()" />
            </div>
        </header>
     <slot />
    </MobileLayout>
  </template>


<script setup lang="ts">
import {MoveLeft} from "lucide-vue-next"
</script>
  