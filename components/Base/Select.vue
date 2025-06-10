<template>
  <Select  v-model="value" @update:model-value="handleEmit" class="w-full">
    <SelectTrigger class="border-current focus-visible:ring-current cursor-pointer" :class="[className]">
      <SelectValue :placeholder="String(placeholder)" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="v in options" :key="v" :value="v">{{ v }}</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string | number
  className?: string
  options?: Array<string | number>
}>()

const emit = defineEmits<{
  (e: 'change', value: string | number): void
}>()

const handleEmit = (value: string | number) => {
  emit('change', value)
}

const value = defineModel<string | number>({ default: '' })
</script>