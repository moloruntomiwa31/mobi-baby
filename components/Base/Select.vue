<template>
  <Select>
    <SelectTrigger class="!border-primaryYellow focus-visible:ring-primaryYellow w-40 rounded-full" :class="[className]">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent class="bg-white border-primaryYellow">
      <SelectGroup>
        <slot></slot>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
const {placeholder = '', className = ''} =  defineProps<{
  placeholder?: string,
  className?: string
}>()
</script>