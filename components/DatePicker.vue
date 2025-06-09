<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-full justify-start text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
        <div class="flex items-center justify-between p-4 border-b"> 
            <BaseSelect v-model="value" :options="months"  placeholder="Month"/>
            <BaseSelect v-model="value" :options="years" placeholder="Year" />
        </div>
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>


<script setup lang="ts">
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = ref<DateValue>()

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).reverse();  
</script>