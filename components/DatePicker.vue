<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-full justify-start text-left font-normal bg-gray',
          !value && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>

    <PopoverContent class="w-auto p-0 bg-gray">
      <div class="flex items-center justify-between p-4 border-b gap-2"> 
        <BaseSelect
          :options="months"
          className="w-32"
          v-model="selectedMonth"
          @change="handleMonthChange"
        />
        <BaseSelect
          :options="years"
          className="w-24"
          v-model="selectedYear"
          @change="handleYearChange"
        />
      </div>
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const {
  df,
  value,
  months,
  years,
  selectedMonth,
  selectedYear,
  handleMonthChange,
  handleYearChange,
  getLocalTimeZone
} = useDatePicker()
</script>
