<template>
    <ChatLayout>
        <div class="min-h-full flex flex-col bg-white shadow-sm rounded-lg">
          <!-- Chat messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-3">
            <div class="self-start bg-gray text-gray-800 p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl max-w-[70%]">
              Hello! How can I assist you today?
            </div>
            <div class="self-end bg-primaryAqua text-primaryBlue p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl max-w-[70%]">
              I have a headache and I'm unsure if it's serious.
            </div>
          </div>
  
          <!-- Chat input -->
          <div class="py-4 px-2 border-t flex items-center justify-between gap-2 w-full">
            <Input
              placeholder="Type a message..."
              class="flex-1 rounded-full min-w-full"
            />
            <div>
                <button class="bg-primaryAqua p-2 rounded-full">
                    <AudioLines class="w-5 h-5 text-white" />  
                </button>
            </div>
          </div>
        </div>
    </ChatLayout>
</template>

<script setup lang="ts">
import { AudioLines } from 'lucide-vue-next';
useHead({
  title: 'Chat',
})
</script>