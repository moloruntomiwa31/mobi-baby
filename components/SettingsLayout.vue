<template>
    <FullLayout>
      <template #left>
        <div class="space-y-4 p-4">
          <BaseText bold size="md">Settings</BaseText>
          <ul class="space-y-2 text-gray-700">
            <li class="cursor-pointer hover:text-primaryAqua">Account</li>
            <li class="cursor-pointer hover:text-primaryAqua">Preferences</li>
            <li class="cursor-pointer hover:text-primaryAqua">Notifications</li>
          </ul>
        </div>
      </template>
  
      <template #middle>
       <slot />
      </template>
  
      <template #right>
        <div class="p-4">
          <BaseText class="text-primaryAqua" size="md" bold>Need help or support?</BaseText>
          <BaseText class="text-gray-600 mt-2" size="sm">Reach out to our support team for any questions or issues you may have.</BaseText>
        </div>
      </template>
    </FullLayout>
  
    <MobileLayout :hide="{ top: true }">
     <slot />
    </MobileLayout>
  </template>

  