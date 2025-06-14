<template>
  <FullLayout title="Dashboard" :hide="{ top: false, left: false, middle: false, right: true, bottom: false }">
    <template #left>
      <div class="bg-primaryGray/10 p-4 rounded-xl">
    <div class="flex items-center gap-3">
        <Avatar  size="2xl" />
            <div class="flex flex-col items-start">
            <BaseText content="Aminat" as="h2" size="md" bold />
            <BaseText content="Patient" size="xs" />
            <BaseText content="View Profile" size="sm" className="text-primaryPink" />
            </div>
    </div>
      </div>
    </template>

    <template #middle>
        <slot />
    </template>
  </FullLayout>

  <MobileLayout title="Dashboard" class="mdlg:hidden">
    <slot />
  </MobileLayout>
</template>

<script setup lang="ts">
</script>