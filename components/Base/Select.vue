<template>
  <Select>
    <SelectTrigger class="border-current focus-visible:ring-current cursor-pointer" :class="[className]">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="v in options" :value="v">{{ v }}</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
const {placeholder = '', className = '', options = []} =  defineProps<{
  placeholder?: string,
  className?: string
  options?: Array<string>
}>()
</script>