<template>
    <div class="flex flex-col gap-4">
      <BaseTopBar v-if="!hide.top"  :title="title" />
  
      <!-- Main content area -->
      <div class="grow overflow-y-auto flex flex-col mdlg:flex-row gap-5 mdlg:gap-0">
        <div v-if="!hide.left" class="mdlg:w-1/4">
          <slot name="left" />
        </div>
  
        <div v-if="!hide.middle" class="flex-1">
          <slot name="middle" />
        </div>
  
        <div v-if="!hide.right" class="mdlg:w-1/4">
          <slot name="right" />
        </div>
      </div>
  
      <BaseBottomBar v-if="!hide.bottom" />
    </div>
  </template>   
  
<script setup lang="ts">
const {hide = {top: false, left: true, middle: false, right: true, bottom: false}, title = ''} = defineProps<{
    hide: {top: boolean, left: boolean, middle: boolean, right: boolean, bottom: boolean},
    title?: string,
}>()
</script>