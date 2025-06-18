<!-- components/SettingsContent.vue -->
<template>
    <SettingsLayout>
    <div class="flex flex-col items-center justify-center mt-12 gap-8 mdlg:gap-6 h-full">
      <div class="relative bg-gray rounded-xl w-full max-w-md flex flex-col items-center pt-16 pb-6">
        <Avatar
          size="4xl"
          class="absolute left-1/2 -translate-x-1/2 -top-12 shadow-lg"
        />
        <BaseText content="Aminat" size="lg" bold class="mt-4" />
      </div>
  
      <div class="bg-gray rounded-xl w-full max-w-md p-4">
        <div class="flex items-center justify-between">
          <BaseText content="Date Of Birth" bold />
          <BaseText content="January 1, 2000" size="md" class="text-gray-600" />
          <Pencil class="w-4 h-4" />
        </div>
      </div>
  
      <div class="bg-gray rounded-xl w-full max-w-md p-4">
        <div class="flex items-center justify-between">
          <BaseText content="Language" bold />
          <div class="flex items-center gap-2">
            <BaseText content="English" size="md" class="text-gray-600" />
            <ChevronRight class="w-5 h-5" />
          </div>
        </div>
      </div>
  
      <BaseText class="text-primaryAqua" size="sm">Need help or support?</BaseText>
      <Button variant="yellow" size="rounded" class="w-full max-w-md">Logout</Button>
    </div>
    </SettingsLayout>
  </template>
  
  <script setup lang="ts">
  import { Pencil, ChevronRight } from "lucide-vue-next";
  useHead({ title: 'Settings' });
  </script>
