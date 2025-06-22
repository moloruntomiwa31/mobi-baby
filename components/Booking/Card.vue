<template>
<div>
    <div class="space-y-6" v-if="bookings.length > 0">
  <div
    class="flex flex-col gap-4"
    v-for="(booking, index) in bookings"
    :key="index"
  >
    <BaseText :content="booking.title" size="xs" bold  />

    <ul class="grid md:grid-cols-2 mdlg:grid-cols-1 gap-4">
      <li
        v-for="(item, idx) in booking.list"
        :key="idx"
        class="p-3 bg-white rounded-xl shadow-sm border border-gray-200"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1 space-y-1">
            <BaseText size="xs">
              {{ item.date }}
            </BaseText>
            <BaseText size="xs" class="text-gray-500">
              {{ item.time }}
            </BaseText> 
            <BaseText size="xs" class="text-gray-500">
              {{ item.location }}
            </BaseText>
            <p class="text-xs text-gray-400 italic">
              Reason: {{ item.reason }}
            </p>
          </div>

          <div class="flex items-center gap-2 mt-1 animate-pulse repeat-infinite">
            <span
              class="size-3 rounded-full "
              :class="statusColors[item.status]?.split(' ')[1]"
            />
            <span
              class="text-xs font-semibold"
              :class="statusColors[item.status]?.split(' ')[0]"
            >
              {{ item.status }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

    <div v-else class="text-center text-gray-500">
        <img src="/images/empty-calendar.jpg" alt="Empty Calendar" class="mx-auto mb-4 w-40 h-40" />
        <BaseText content="No bookings available" size="sm" />
    </div>
</div>
</template>

<script setup lang="ts">

const bookings = [
  {
    title: 'Upcoming Appointments',
    list: [
      {
        date: 'June 26, 2025',
        time: '10:30 AM',
        location: 'General Hospital, Kano',
        status: 'Confirmed',
        reason: 'Routine antenatal check-up'
      },
      {
        date: 'July 1, 2025',
        time: '2:00 PM',
        location: 'City Clinic, Lagos',
        status: 'Pending',
        reason: 'Follow-up consultation'
      }
    ]
  },
  {
    title: 'Past Appointments',
    list: [
      {
        date: 'June 4, 2025',
        time: '11:00 AM',
        location: 'General Hospital, Kano',
        status: 'Completed',
        reason: 'First trimester ultrasound'
      },
      {
        date: 'May 20, 2025',
        time: '1:30 PM',
        location: 'City Clinic, Lagos',
        status: 'Cancelled',
        reason: 'Patient unable to attend'
      }
    ]
  },
]

const statusColors: Record<string, string> = {
  Confirmed: 'text-primaryGreen bg-primaryGreen',
  Pending: 'text-primaryYellow bg-primaryYellow',
  Scheduled: 'text-primaryPink bg-primaryPink',
  Completed: 'text-primaryGray bg-primaryGray',
  Cancelled: 'text-primaryRed bg-primaryRed'
}
</script>