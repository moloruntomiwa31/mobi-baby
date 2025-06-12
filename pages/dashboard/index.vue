<template>
  <!-- Desktop Page -->
  <FullLayout title="Dashboard" :hide="{ top: false, left: false, middle: false, right: true, bottom: false }" class="hidden mdlg:block">
    <template #left>
      <div class="bg-gray-100 p-4 rounded-xl">
        <h2 class="text-lg font-semibold mb-2">Sidebar</h2>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="text-blue-600 hover:underline">Home</a></li>
          <li><a href="#" class="text-blue-600 hover:underline">Profile</a></li>
          <li><a href="#" class="text-blue-600 hover:underline">Settings</a></li>
        </ul>
      </div>
    </template>

    <template #middle>
      <div class="bg-white p-4 rounded-xl">
        <h1 class="text-xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p class="text-gray-700">
          This is the main content area. You can add charts, tables, or anything here.
          lorem10000
        </p>
      </div>
    </template>

    <!-- <template #right>
      <div class="bg-gray-50 p-4 rounded-xl shadow">
        <h2 class="text-lg font-semibold mb-2">Notifications</h2>
        <ul class="text-sm list-disc list-inside text-gray-700">
          <li>You have 3 new messages</li>
          <li>Your subscription is active</li>
          <li>System update available</li>
        </ul>
      </div>
    </template> -->
  </FullLayout>

  <!-- Mobile -->
  <MobileLayout title="Dashboard" class="mdlg:hidden">
    <div class="bg-white p-4 rounded-xl shadow">
      <h1 class="text-xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p class="text-gray-700">
        This is the main content area. You can add charts, tables, or anything here.
        lorem10000
      </p>
    </div>
    <div class="bg-gray-100 p-4 rounded-xl shadow mt-4">
      <h2 class="text-lg font-semibold mb-2">Sidebar</h2>
      <ul class="space-y-1 text-sm">
        <li><a href="#" class="text-blue-600 hover:underline">Home</a></li>
        <li><a href="#" class="text-blue-600 hover:underline">Profile</a></li>
        <li><a href="#" class="text-blue-600 hover:underline">Settings</a></li>
      </ul>
      lorem1000
    </div>
  </MobileLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Dashboard',
})
</script>
