<template>
    <FullLayout title="Chat" :hide="{ top: false, left: false, middle: false, right: false, bottom: false }">
      <!-- Left: Chat History -->
      <template #left>
        <div class="h-full bg-primaryAqua shadow-sm rounded-lg p-4 flex flex-col gap-4">
          <BaseText content="Chat History" size="md" bold class="text-white" />
          <ul class="flex flex-col gap-3">
            <li class="bg-white text-primaryBlue p-2 rounded-lg flex items-center gap-1"><SquarePlus class="w-4 h-4" /> New chat</li>
            <li class="bg-white text-primaryBlue p-2 rounded-lg">Jaundice Infection</li>
          </ul>
        </div>
      </template>
  
      <!-- Middle: Chat Window -->
      <template #middle>
        <slot />
      </template>
  
      <!-- Right: Chat Options -->
      <template #right>
  <div class="h-full max-h-full bg-gray-50 shadow-sm rounded-lg p-4 flex flex-col gap-4 overflow-y-auto">
    <!-- Bot Info Card -->
    <div class="bg-white p-4 rounded-lg flex flex-col items-center gap-2 shadow">
      <img src="/images/bot.png" alt="AI BOT" class="w-14 h-14" />
      <BaseText content="Ask Mobi" as="h3" bold/>
      <BaseText size="sm" class="text-gray-600 text-center">
        Hi, I'm Mobi, your virtual assistant.<br>
        I can provide information on symptoms, treatments, and more.<br>
        How can I assist you today?
      </BaseText>
    </div>

    <!-- Medical Practitioner Card -->
    <div class="bg-white p-4 rounded-lg flex flex-col gap-2 shadow overflow-y-auto">
      <div class="flex items-center gap-2">
        <BriefcaseMedical class="w-6 h-6 text-primaryBlue" />
        <BaseText content="Medical Practitioner" bold clamp class="font-semibold" />
      </div>
      <BaseText content="Need extra help? Contact a medical practitioner." size="sm" class="text-gray-600" />
      <Button variant="yellow" class="w-full">Start Chatting</Button>
    </div>

    <!-- Delete Conversation Button -->
    <Button variant="destructive" class="w-full mt-auto">
      Delete Conversation
    </Button>
  </div>
</template>
  
    </FullLayout>

    <MobileLayout title="Chat" class="mdlg:hidden">
        <slot />
    </MobileLayout>
  </template>
  
  <script setup lang="ts">
  import { BriefcaseMedical, SquarePlus } from "lucide-vue-next"
  </script>
  