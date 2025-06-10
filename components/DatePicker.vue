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
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  CalendarDate
} from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const df = new DateFormatter('en-US', { dateStyle: 'long' })
const value = ref<DateValue>()

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

const selectedMonth = ref<string>(months[new Date().getMonth()])
const selectedYear = ref<number>(new Date().getFullYear())

const handleMonthChange = (month: string | number) => {
  selectedMonth.value = String(month)
  updateCalendarDate()
}

const handleYearChange = (year: string | number) => {
  selectedYear.value = Number(year)
  updateCalendarDate()
}

// Update calendar date from selectedMonth and selectedYear
const updateCalendarDate = () => {
  const monthIndex = months.indexOf(selectedMonth.value) + 1
  const day = value.value ? value.value.day : 1
  value.value = new CalendarDate(selectedYear.value, monthIndex, day)
}

// Sync selectedMonth and selectedYear when user picks from calendar
watch(value, (newVal) => {
  if (newVal) {
    selectedYear.value = newVal.year
    selectedMonth.value = months[newVal.month - 1]
  }
})
</script>
