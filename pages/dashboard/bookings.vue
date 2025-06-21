<template>
    <DashboardLayout title="Bookings">
  <CalendarRoot
    v-slot="{ date, grid, weekDays }"
    v-model:placeholder="placeholder"
    v-bind="forwarded"
    :class="cn('rounded-md border p-3', props.class)"
  >
    <CalendarHeader>
      <CalendarHeading class="flex w-full items-center justify-between gap-2">
        <Select
          :default-value="placeholder.month.toString()"
          @update:model-value="(v) => {
            if (!v || !placeholder) return;
            if (Number(v) === placeholder?.month) return;
            placeholder = placeholder.set({
              month: Number(v),
            })
          }"
        >
          <SelectTrigger aria-label="Select month" class="w-[60%]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent class="max-h-[200px]">
            <SelectItem
              v-for="month in createYear({ dateObj: date })"
              :key="month.toString()" :value="month.month.toString()"
            >
              {{ formatter.custom(toDate(month), { month: 'long' }) }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select
          :default-value="placeholder.year.toString()"
          @update:model-value="(v) => {
            if (!v || !placeholder) return;
            if (Number(v) === placeholder?.year) return;
            placeholder = placeholder.set({
              year: Number(v),
            })
          }"
        >
          <SelectTrigger aria-label="Select year" class="w-[40%]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent class="max-h-[200px]">
            <SelectItem
              v-for="yearValue in createDecade({ dateObj: date, startIndex: -10, endIndex: 10 })"
              :key="yearValue.toString()" :value="yearValue.year.toString()"
            >
              {{ yearValue.year }}
            </SelectItem>
          </SelectContent>
        </Select>
      </CalendarHeading>
    </CalendarHeader>

    <div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <CalendarGrid v-for="month in grid" :key="month.value.toString()">
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="day in weekDays" :key="day"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="grid">
          <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full">
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>

    <div class="mt-6 p-4 bg-primaryGray/10 rounded-xl space-y-4 mdlg:hidden">
    <BaseText content="Quick Overview" as="h3" size="md" bold />
        <BookingCard />
    <Button variant="yellow" size="rounded" class="w-full">Create Reminder</Button>
    </div>

    <div class="bg-primaryGray/10 p-4 rounded-xl space-y-4 mt-6">
        <BaseText content="Available Medical Personnels" as="h3" size="md" bold />
    <div class="grid gap-4 sm:grid-cols-2">
    <div
      v-for="(person, i) in medicalPersonnel"
      :key="i"
      class="p-4 rounded-xl shadow-md bg-white flex flex-row items-center gap-4"
    >
      <div class="flex-shrink-0">
        <Avatar size="lg" />
      </div>

      <div class="flex-1 space-y-1">
        <BaseText as="h3" size="sm">{{ person.name }}</BaseText>
        <BaseText size="xs" class="text-primaryGray">{{ person.role }} - {{ person.specialty }}</BaseText>

        <div class="flex items-center gap-2">
          <span
            class="w-2.5 h-2.5 rounded-full animate-pulse repeat-infinite"
            :class="statusColor[person.status]"
          />
          <span class="text-xs text-primaryGray">{{ person.status }}</span>
        </div>
      </div>

        <button
          class="text-sm px-3 py-1.5 rounded-md bg-primaryAqua text-white"
        >
          Book
        </button>
    </div>
  </div>
    </div>

    </DashboardLayout>
</template>


<script setup lang="ts">
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { useVModel } from '@vueuse/core'
import { CalendarRoot, type CalendarRootEmits, type CalendarRootProps, useDateFormatter, useForwardPropsEmits } from 'reka-ui'
import { createDecade, createYear, toDate } from 'reka-ui/date'
import { computed, type HTMLAttributes, type Ref } from 'vue'
import { cn } from '@/lib/utils'
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
useHead({
  title: 'Bookings',
})
const props = withDefaults(defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>(), {
  modelValue: undefined,
  placeholder() {
    return today(getLocalTimeZone())
  },
  weekdayFormat: 'short',
})
const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, placeholder: __, ...delegated } = props

  return delegated
})

const placeholder = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: today(getLocalTimeZone()),
}) as Ref<DateValue>

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const formatter = useDateFormatter('en')

const medicalPersonnel = [
  {
    name: 'Dr. Aminat Bello',
    role: 'Obstetrician',
    specialty: 'Antenatal & Delivery',
    status: 'Available',
    image: '/images/aminat.jpg'
  },
  {
    name: 'Nurse Chika Okafor',
    role: 'Nurse',
    specialty: 'Postnatal Care',
    status: 'Busy',
    image: '/images/chika.jpg'
  },
  {
    name: 'Dr. Musa Garba',
    role: 'Pediatrician',
    specialty: 'Newborn Care',
    status: 'Offline',
    image: ''
  }
]
const statusColor: Record<string, string> = {
  Available: 'bg-primaryGreen',
  Busy: 'bg-primaryYellow',
  Offline: 'bg-primaryGray/50',
}

</script>