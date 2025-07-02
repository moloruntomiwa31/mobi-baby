<template>
	<Transition name="side-modal">
		<div
			v-if="show"
			class="fixed inset-0 bg-black/50 flex items-end mdlg:items-center justify-end z-[99]"
			@click.self="onClose"
			role="dialog"
			aria-modal="true"
		>
			<div
				class="bg-white flex flex-col w-full h-[55%] rounded-t-2xl shadow-lg mb-10"
			>
				<div
					class="flex items-center gap-4 p-4 border-b sticky top-0 bg-gray rounded-t-2xl z-10"
				>
					<Avatar size="xl" clickable />
					<div>
						<BaseText content="Aminat Shekinat" as="h2" size="md" bold />
						<BaseText content="Patient" size="xs" class="text-gray-500" />
						<BaseText
							content="See Profile"
							size="sm"
							class="text-primaryAqua cursor-pointer"
						/>
					</div>
				</div>

				<div class="overflow-y-auto px-4 py-3 space-y-4 flex-1">
					<div class="flex flex-col gap-2" v-if="path === '/dashboard/medic'">
						<RecentChat
							v-for="(message, idx) in recentChats"
							:key="message.name + idx"
							:message="message"
							:class="[idx === 0 ? 'bg-slate-200' : '']"
						/>
					</div>
					<div
						class="bg-white p-4 rounded-lg flex flex-col gap-2 shadow overflow-y-auto"
						v-else-if="path === '/dashboard/chat'"
					>
						<div class="flex items-center gap-2">
							<BriefcaseMedical class="w-6 h-6 text-primaryBlue" />
							<BaseText
								content="Medical Practitioner"
								bold
								clamp
								class="font-semibold"
							/>
						</div>
						<BaseText
							content="Need extra help? Contact a medical practitioner."
							size="sm"
							class="text-gray-600"
						/>
						<Button
							variant="yellow"
							class="w-full"
							@click="navigateTo('/dashboard/chat/medic')"
							>Start Chatting</Button
						>
					</div>
					<BookingCard v-else />
					<Button variant="destructive" size="rounded" class="w-full mb-4">
						Logout
					</Button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import {BriefcaseMedical} from "lucide-vue-next"
	defineProps<{
		show: boolean;
		onClose: () => void;
	}>();
	const recentChats = [
		{
			name: "Amina Shekinat",
			message: "Doctor, I missed my last appointment...",
		},
		{ name: "Chinonso Uche", message: "When is my next checkup scheduled?" },
		{ name: "Grace Aliyu", message: "I’m experiencing some discomfort..." },
		{ name: "Sade Okoro", message: "Can I reschedule tomorrow’s appointment?" },
		{ name: "Halima Bello", message: "Thank you for your advice!" },
	];

	const route = useRoute();
	const path = computed(() => route.path);
</script>

<style scoped>
	.side-modal-enter-active,
	.side-modal-leave-active {
		transition: all 0.2s ease-in-out;
	}

	.side-modal-enter-from,
	.side-modal-leave-to {
		transform: translateX(100%);
	}
	.side-modal-enter-to,
	.side-modal-leave-from {
		transform: translateX(0);
	}
</style>
