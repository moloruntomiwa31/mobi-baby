<template>
  <!-- Desktop Page -->
<DashboardLayout>
  <div class="flex flex-col items-start gap-2">
  <BaseText content="Complete your tasks" size="sm" bold />
  <div class="flex items-center gap-4 overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar w-full">
    <button
      v-for="(task, i) in tasks"
      :key="i"
      class="flex items-center gap-2 px-3 py-2 bg-gray w-[380px] h-[70px] rounded-md"
    >
      <component :is="task.icon" class="w-8 h-8" :class="task.color" />
      <div class="flex flex-col items-start">
        <BaseText bold size="sm">{{ task.label }}</BaseText>
        <BaseText as="span" size="xs" clamp>{{ task.description }}</BaseText>
      </div>
    </button>
  </div>
</div>
    <div class="grid grid-cols-2 gap-4">
  <template v-for="(details, idx) in babyInfo" :key="idx">
    <div
      :class="[details.bgColor]"
      class="px-4 py-8 rounded-md flex items-center justify-center"
    >
      <div class="flex flex-col gap-4 items-center justify-center text-center">
        <BaseText :content="details.title" />
        <BaseText :content="details.value" as="h3" size="lg" />
      </div>
    </div>
    <NuxtLink
      to="#"
      v-if="idx === 1"
      class="col-span-2 bg-gray/80 rounded-md flex items-center justify-center"
    >
    <div class="flex items-center justify-between w-full p-5 relative">
     <div>
      <BaseText content="Ask Mobi" as="h3" size="xl" />
      <BaseText content="How can I help you today?" />
     </div>
     <div>
        <img src="/images/ellipse.png" alt="Ellipase">
        <img src="/images/bot.png" alt="AI BOT">
     </div>
    </div>
    </NuxtLink>
  </template>
</div>
  <template v-for="m in materials" :key="m.title">
    <div class="flex flex-col items-start gap-2">
      <BaseText :content="m.title" size="sm" bold />
      <div class="flex items-center gap-4 overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar w-full">
        <MaterialCard v-for="data in m.list" :key="data.description" :wrapped="isMobile ? true : false" :m="data" />
     </div>
    </div>
  </template>
</DashboardLayout>
</template>

<script setup lang="ts">
import { Milk, Baby, Thermometer, Moon, Syringe, StickyNote, AlarmClock } from 'lucide-vue-next'
const {isMobile} = useScreen()
useHead({
  title: 'Dashboard',
})
const babyInfo = [
  {
    title: 'Temperature',
    value: '36.5°C',
    bgColor: 'bg-primaryAqua',
  },
  {
    title: 'Breathing Rate',
    value: '30/min',
    bgColor: 'bg-primaryPurple',
  },
  {
    title: "Vaccine Reminder",
    value: 'Next dose due in 2 weeks',
    bgColor: 'bg-primaryYellow',
  },
  {
    title: 'Feeding Reminder',
    value: 'Next feeding in 1 hour',
    bgColor: 'bg-primaryPink',
  }
]

const tasks = [
  { 
    label: 'Feed Baby', 
    icon: Milk, 
    color: 'text-primaryAqua',
    description: 'Log your baby’s feeding time and amount.'
  },
  { 
    label: 'Change Diaper', 
    icon: Baby, 
    color: 'text-primaryPink',
    description: 'Track diaper changes for better monitoring.'
  },
  { 
    label: 'Record Temp', 
    icon: Thermometer, 
    color: 'text-primaryYellow',
    description: 'Add your baby’s latest temperature reading.'
  },
  { 
    label: 'Track Sleep', 
    icon: Moon, 
    color: 'text-primaryPurple',
    description: 'Monitor your baby’s sleep patterns.'
  },
  { 
    label: 'Log Vaccine', 
    icon: Syringe, 
    color: 'text-primaryAqua',
    description: 'Keep vaccination records up to date.'
  },
  { 
    label: 'Add Note', 
    icon: StickyNote, 
    color: 'text-primaryPink',
    description: 'Write a quick note about your baby’s day.'
  },
  { 
    label: 'Set Reminder', 
    icon: AlarmClock, 
    color: 'text-primaryYellow',
    description: 'Schedule reminders for important tasks.'
  },
]

const materialList = computed(() => {
  return [
  {
    title: 'Baby Care Guide',
    description: 'A comprehensive guide to caring for your newborn.',
    image: '/images/maternal.jpg',
    link: '/resources/baby-care-guide',
    user: {name: 'Dr. John Doe', isVerified: true}
  },
  {
    title: 'Feeding Schedule',
    description: 'Sample feeding schedules for different age groups.',
    image: '/images/maternal.jpg',
    link: '/resources/feeding-schedule',
    user: {name: 'Dr. John Doe', isVerified: false}
  },
  {
    title: 'Sleep Tips',
    description: 'Tips to help your baby sleep better.',
    image: '/images/maternal.jpg',
    link: '/resources/sleep-tips',
    user: {name: 'Dr. John Doe', isVerified: true}
  }
]
})

const materials = computed(() => {
  return [
    {
      title: 'Suggested for you',
      list: materialList.value
    },
    {
      title: 'Popular Resources',
      list: materialList.value
    },
    {
      title: 'New Arrivals',
      list: materialList.value
    }
  ]
})
</script>
