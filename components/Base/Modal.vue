<template>
    <Transition name="modal">
        <div v-if="show" class="fixed inset-0 bg-black/50 flex items-end mdlg:items-center justify-center z-[99]" @click.self="onClose" role="dialog" aria-modal="true">
            <div class="bg-white flex flex-col gap-3 rounded-tr-2xl rounded-tl-2xl mdlg:rounded-br-2xl mdlg:rounded-bl-2xl shadow-lg p-4 w-full min-h-2/4 mdlg:max-w-md">
                <div class="flex items-center justify-between">
                    <BaseText :content="title" bold size="md" />
                    <CircleX class="cursor-pointer" @click="onClose" />
                </div>
                <slot />
          </div>
        </div>
    </Transition>
</template>
  
<script setup lang="ts">
import { CircleX } from 'lucide-vue-next';
defineProps<{
    title: string;
    show: boolean;
    onClose: () => void;
}>();
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>