<template>
  <FullLayout :title :hide="{ right: true }">
    <template #left>
      <div class="flex flex-col gap-6">
        <div class="bg-primaryGray/10 p-4 rounded-xl">
          <div class="flex items-center gap-4">
            <Avatar size="2xl" clickable />
            <div>
              <BaseText content="Aminat Shekinat" as="h2" size="md" bold  clamp/>
              <BaseText content="Patient" size="xs" class="text-gray-500" />
              <BaseText content="See Profile" size="sm" class="text-primaryAqua cursor-pointer" />
            </div>
          </div>
        </div>

        <div class="bg-primaryGray/10 p-4 rounded-xl space-y-4">
          <BaseText content="Quick Overview" as="h3" size="sm" bold />
          <BookingCard />
          <Button variant="yellow" size="rounded" class="w-full">Create Reminder</Button>
        </div>
      </div>
    </template>

    <template #middle>
      <div class="flex flex-col gap-4">
        <slot />
      </div>
    </template>
  </FullLayout>

  <MobileLayout :title class="mdlg:hidden">
    <slot />
  </MobileLayout>
</template>

<script setup lang="ts">
const { title = "Dashboard" } = defineProps<{
  title?: string
}>()
</script>
