<template>
	<DashboardLayout>
		<div class="grid sm:grid-cols-2 gap-4 mb-6">
			<div v-for="(item, index) in medicInfo" :key="index">
				<div
					class="flex flex-col gap-3 justify-between p-4 rounded-lg"
					:class="[item.bgColor]"
				>
					<div class="flex items-center gap-2">
						<div class="bg-primaryBlue/40 rounded-full p-2">
							<component :is="item.icon" class="w-5 h-5 text-white" />
						</div>
						<BaseText size="sm" :content="item.title" />
					</div>
					<BaseText :content="item.value" size="xl" class="text-white" bold />
				</div>
			</div>
		</div>

		<div class="bg-white p-4 rounded-lg">
			<div class="flex justify-between items-center mb-4">
				<BaseText as="h2" size="md" bold>Recent chats</BaseText>
				<NuxtLink to="/" class="text-primaryPink text-sm font-medium">
					View all
				</NuxtLink>
			</div>

			<div v-if="recentChats.length > 0">
				<div
					class="flex items-center gap-4 overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar w-full"
				>
					<div
						v-for="messages in recentChats"
						:key="messages.message"
						class="flex items-center gap-3 p-3 bg-gray/50 rounded-lg"
					>
						<Avatar />
						<div class="flex flex-col">
							<BaseText :content="messages.name" size="sm" bold />
							<BaseText :content="messages.message" size="xs" clamp />
						</div>
					</div>
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
	</DashboardLayout>
</template>

<script setup lang="ts">
	import { User, CalendarDays, MessageCircle, ListTodo } from "lucide-vue-next";

	const medicInfo = [
		{
			title: "Total Patients",
			value: "150",
			bgColor: "bg-primaryAqua",
			icon: User,
		},
		{
			title: "Appointments Today",
			value: "5",
			bgColor: "bg-primaryPurple",
			icon: CalendarDays,
		},
		{
			title: "Messages",
			value: "10 unread",
			bgColor: "bg-primaryPink",
			icon: MessageCircle,
		},
		{
			title: "Tasks",
			value: "3 pending",
			bgColor: "bg-primaryYellow",
			icon: ListTodo,
		},
	];

	// Dummy recent chats (replace with real data source later)
	const recentChats = [
		{ name: "Amina Yusuf", message: "Doctor, I missed my last appointment..." },
		{ name: "Chinonso Uche", message: "When is my next checkup scheduled?" },
		{ name: "Grace Aliyu", message: "I’m experiencing some discomfort..." },
		{ name: "Sade Okoro", message: "Can I reschedule tomorrow’s appointment?" },
		{ name: "Halima Bello", message: "Thank you for your advice!" },
	];
</script>
