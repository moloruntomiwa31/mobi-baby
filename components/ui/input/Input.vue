<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  type?: string
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const isPasswordVisible = ref(false)
const inputType = computed(() =>
  props.type === 'password' ? (isPasswordVisible.value ? 'text' : 'password') : props.type ?? 'text'
)
</script>


<template>
  <div class="relative">
    <input
      v-model="modelValue"
      :type="inputType"
      data-slot="input"
      :class="cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-gray px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        props.class,
        props.type === 'password' ? 'pr-10' : ''
      )"
    />

    <button
      v-if="props.type === 'password'"
      type="button"
      class="absolute inset-y-0 right-2 flex items-center text-muted-foreground hover:text-foreground"
      @click="isPasswordVisible = !isPasswordVisible"
      tabindex="-1"
    >
      <EyeOff v-if="isPasswordVisible" class="w-5 h-5" />
      <Eye v-else class="w-5 h-5" />
    </button>
  </div>
</template>

