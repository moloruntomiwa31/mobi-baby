<template>
<div>
    <AuthSetup v-if="type" />
    <template v-else>
          <div class="flex items-center min-h-screen">
    <div class="w-full mdlg:w-1/2 p-8">
      <BaseText as="h3" size="md" class="mb-6 text-center">Choose account type</BaseText>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink 
          v-for="user in accountSetup" 
          :key="user.value"  
          :to="`/onboarding?type=${user.value}`" 
          :class="[user.bgClass, 'flex flex-col items-center justify-center text-center gap-4 p-6 rounded-lg hover:shadow-lg transition-all duration-200 min-h-[200px]']"
        >
          <div class="bg-white rounded-full w-12 h-12 p-3 flex items-center justify-center">
            <component :is="user.icon" class="w-6 h-6" :class="user.iconColor" />
          </div>
          <div class="text-white">
            <BaseText as="h4" bold class="mb-2">{{ user.title }}</BaseText>
            <BaseText as="p" size="xs">{{ user.description }}</BaseText>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="hidden mdlg:block mdlg:w-1/2 h-screen">
      <img 
        src="/images/onboarding-bg.jpg" 
        alt="Onboarding Background Image" 
        class="w-full h-full object-cover" 
      />  
    </div>
  </div>
    </template>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "onboarding",
})  
import { BriefcaseMedical, Baby } from "lucide-vue-next"
const route = useRoute()
const type = computed(() => route.query.type)
const accountSetup = [
  {
    value: "parent",
    title: "Parent",
    description: "I am a parent looking to track my baby's health and milestones.",
    icon: Baby,
    bgClass: "bg-primaryBlue",
    iconColor: "text-primaryBlue"
  },
  {
    value: "medical-practitioner",
    title: "Medical Practitioner",
    description: "I am a medical practitioner looking to manage my patients' health records.",
    icon: BriefcaseMedical,
    bgClass: "bg-primaryAqua",
    iconColor: "text-primaryAqua"
  }
]
</script>