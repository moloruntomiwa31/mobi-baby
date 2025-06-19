<template>
    <SettingsLayout>
      <div class="flex flex-col items-center justify-center mt-12 mdlg:mt-6 gap-6 mdlg:gap-4 h-full">
        <div class="relative bg-gray rounded-xl w-full max-w-sm mdlg:max-w-md flex flex-col items-center pt-16 pb-6">
          <Avatar
            :size="isDesktop ? '2xl' : '4xl'"
            class="absolute left-1/2 -translate-x-1/2 shadow-lg"
            :class="[isDesktop ? '-top-6' : '-top-12']"
          />
          <BaseText content="Aminat Sherifat" size="lg" bold class="mt-4" />
        </div>
  
        <div class="bg-gray rounded-xl w-full max-w-sm mdlg:max-w-md p-4">
          <div class="flex items-center justify-between">
            <BaseText content="Date Of Birth" size="sm" bold />
            <BaseText content="January 1, 2000" class="text-gray-600" />
            <button @click="pickDate = !pickDate" class="cursor-pointer">
              <Pencil class="w-4 h-4" />
            </button>
          </div>
        </div>
  
        <div v-if="pickDate" class="bg-gray rounded-xl w-full max-w-sm mdlg:max-w-md p-4">
          <DatePicker class="w-full" />
        </div>
  
        <div class="bg-gray rounded-xl w-full max-w-sm mdlg:max-w-md p-4">
          <div class="flex items-center justify-between">
            <BaseText content="Language" size="sm" bold />
            <div class="flex items-center gap-2">
              <BaseText content="English" class="text-gray-600" />
              <ChevronRight class="w-5 h-5" />
            </div>
          </div>
        </div>
  
        <div class="bg-gray rounded-xl w-full max-w-sm mdlg:max-w-md p-4">
          <BaseSelect
            :placeholder="languages[0]"
            :options="languages"
            class="w-full"
          />
        </div>
  
        <BaseText class="text-primaryAqua" size="sm">Need help or support?</BaseText>
  
        <Button variant="yellow" size="rounded" class="w-full max-w-sm mdlg:max-w-md">
          Logout
        </Button>
      </div>
    </SettingsLayout>
  </template>
  
  <script setup lang="ts">
  import { Pencil, ChevronRight } from "lucide-vue-next";
  
  const { isDesktop } = useScreen();
  useHead({ title: 'Settings' });
  
  const pickDate = ref(false);
  
  const languages = [
    "English", "Yoruba", "Igbo", "Hausa"
  ];
  </script>
  