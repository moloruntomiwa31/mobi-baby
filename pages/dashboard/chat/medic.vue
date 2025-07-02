<template>
	<ChatLayout>
		<div class="h-full flex flex-col bg-white">
			<!-- Header -->
			<div class="flex items-start gap-2.5 mx-3.5 mt-2">
				<Avatar size="md" />
				<div class="flex-1">
					<BaseText content="Aminat Sherifat" bold size="sm" />
					<BaseText content="online" size="xs" className="text-primaryAqua" />
				</div>
			</div>

			<!-- Messages -->
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

			<!-- Input -->
			<div
				class="py-4 px-2 border-t flex items-center justify-between gap-2 w-full relative"
			>
				<input
					type="text"
					placeholder="Type a message..."
					class="flex-1 rounded-full p-2 bg-gray focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
				/>

				<!-- Action buttons -->
				<div class="flex items-center gap-2 relative">
					<!-- File upload button and menu -->
					<div class="relative">
						<button
							@click="showFileOptions = !showFileOptions"
							class="bg-primaryAqua p-2 rounded-full"
						>
							<FileUp class="w-5 h-5 text-white" />
						</button>
						<div
							v-if="showFileOptions"
							class="absolute bottom-12 right-0 bg-white border rounded-lg shadow-md p-2 text-sm space-y-1 z-50 w-48"
						>
							<div class="cursor-pointer hover:bg-gray-100 p-1 rounded">
								📄 Upload Document
							</div>
							<div class="cursor-pointer hover:bg-gray-100 p-1 rounded">
								🖼️ Upload Photo
							</div>
						</div>
					</div>

					<!-- Audio button and menu -->
					<div class="relative">
						<button
							@click="showAudioOptions = !showAudioOptions"
							class="bg-primaryAqua p-2 rounded-full"
						>
							<AudioLines class="w-5 h-5 text-white" />
						</button>
						<div
							v-if="showAudioOptions"
							class="absolute bottom-12 right-0 bg-white border rounded-lg shadow-md p-2 text-sm z-50 w-48"
						>
							<div class="cursor-pointer hover:bg-gray-100 p-1 rounded">
								🎤 Record Voice Note
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</ChatLayout>
</template>

<script setup lang="ts">
	import { AudioLines, FileUp } from "lucide-vue-next";

	useHead({ title: "Chat" });

	const showFileOptions = ref(false);
	const showAudioOptions = ref(false);

	// Optional: close menus when clicking outside
	const closeAllMenus = () => {
		showFileOptions.value = false;
		showAudioOptions.value = false;
	};

	document.addEventListener("click", (e) => {
		if (!(e.target as HTMLElement).closest(".relative")) {
			closeAllMenus();
		}
	});
</script>
