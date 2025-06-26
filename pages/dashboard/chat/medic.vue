<template>
	<ChatLayout>
		<div class="h-full flex flex-col bg-white shadow-sm rounded-lg">
			<div class="flex items-start gap-2.5 mx-3.5 mt-2">
				<Avatar size="md" />
				<div class="flex-1">
					<BaseText content="Aminat Sherifat" bold size="sm" />
					<BaseText content="typing..." size="xs" className="" />
				</div>
			</div>
			<!-- Chat messages -->
			<div class="flex-1 overflow-y-auto p-4 space-y-3">
				<div
					class="self-start bg-gray text-gray-800 p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl max-w-[70%]"
				>
					Hello! How can I assist you today?
				</div>
				<div
					class="self-end bg-primaryAqua text-white p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl max-w-[70%]"
				>
					I have a headache and I'm unsure if it's serious.
				</div>
			</div>

			<!-- Chat input -->
			<div
				class="py-4 px-2 border-t flex items-center justify-between gap-2 w-full"
			>
				<input
					type="text"
					placeholder="Type a message..."
					class="flex-1 rounded-full p-2 bg-gray focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
				/>
				<div class="flex items-center gap-2">
					<button class="bg-primaryAqua p-2 rounded-full">
						<FileUp class="w-5 h-5 text-white" />
					</button>
					<button class="bg-primaryAqua p-2 rounded-full">
						<AudioLines class="w-5 h-5 text-white" />
					</button>
				</div>
			</div>
		</div>
	</ChatLayout>
</template>

<script setup lang="ts">
	import { AudioLines, FileUp } from "lucide-vue-next";
	useHead({
		title: "Chat",
	});
</script>
