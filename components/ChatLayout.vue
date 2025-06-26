<template>
	<FullLayout title="Chat">
		<!-- Left: Chat History -->
		<template #left>
			<div class="bg-primaryAqua shadow-sm rounded-lg p-4 flex flex-col gap-4">
				<BaseText content="Chat History" size="md" bold class="text-white" />
				<ul class="flex flex-col gap-3" v-if="path === '/dashboard/chat'">
					<li
						class="bg-white text-primaryBlue p-2 rounded-lg flex items-center gap-1"
					>
						<SquarePlus class="w-4 h-4" /> New chat
					</li>
					<li class="bg-white text-primaryBlue p-2 rounded-lg">
						Jaundice Infection
					</li>
				</ul>
				<div
					v-else-if="recentChats.length > 0 && path === '/dashboard/chat/medic'"
				>
					<div class="flex flex-col gap-2">
						<RecentChat
							v-for="(message, idx) in recentChats"
							:key="message.name + idx"
							:message="message"
							:class="[idx === 0 ? 'bg-slate-200' : '']"
						/>
					</div>
				</div>

				<BaseEmptyState
					v-else
					title="No recent chats"
					description="You have no recent chats at the moment."
					:action="{
						label: 'Start a new chat',
						handler: () => {
							navigateTo('/dashboard/chat');
						},
					}"
				/>
			</div>
		</template>

		<!-- Middle: Chat Window -->
		<template #middle>
			<slot />
		</template>

		<!-- Right: Chat Options -->
		<template #right>
			<div
				class="flex flex-col items-center justify-center p-2.5 gap-2"
				v-if="$route.path === '/dashboard/chat/medic'"
			>
				<Avatar size="3xl" clickable />
				<BaseText content="Aminat Shekinat" as="h2" size="md" bold clamp />
				<BaseText content="Patient" size="xs" className="text-primaryAqua" />
				<BaseText size="sm" className="text-gray-600 text-center">
					Caring mother and active user. Here to monitor her baby's health and
					connect with medical professionals for advice and support.
				</BaseText>
			</div>
			<div
				class="bg-gray-50 shadow-sm rounded-lg p-4 flex flex-col gap-4"
				v-else
			>
				<div
					class="bg-white p-4 rounded-lg flex flex-col items-center gap-2 shadow"
				>
					<img src="/images/bot.png" alt="AI BOT" class="w-14 h-14" />
					<BaseText content="Ask Mobi" as="h3" bold />
					<BaseText size="sm" class="text-gray-600 text-center">
						Hi, I'm Mobi, your virtual assistant.<br />
						I can provide information on symptoms, treatments, and more.<br />
						How can I assist you today?
					</BaseText>
				</div>

				<div
					class="bg-white p-4 rounded-lg flex flex-col gap-2 shadow overflow-y-auto"
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

				<Button variant="destructive" class="w-full mt-auto">
					Delete Conversation
				</Button>
			</div>
		</template>
	</FullLayout>

	<MobileLayout title="Chat">
		<slot />
	</MobileLayout>
</template>

<script setup lang="ts">
	import { SquarePlus, Check } from "lucide-vue-next";

	const route = useRoute();
	const path = computed(() => route.path);

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
</script>
