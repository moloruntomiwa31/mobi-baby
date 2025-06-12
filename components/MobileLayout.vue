<template>
        <div class="flex flex-col gap-4 h-screen overflow-y-clip">
      <BaseTopBar v-if="!hide.top"  :title="title" />
  
        <div class="h-full w-full overflow-y-auto mx-auto grow relative mdlg:gap-5 flex flex-col items-center">
          <slot />
        </div>
  
      <BaseBottomBar v-if="!hide.bottom" />
    </div>
</template>

<script setup lang="ts">
const {hide = {top: false, bottom: false}} = defineProps<{
  hide?: { top: boolean; bottom: boolean };
  title?: string;
}>();
</script>