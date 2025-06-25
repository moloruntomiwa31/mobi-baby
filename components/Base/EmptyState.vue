<template>
	<div
		class="flex flex-col items-center justify-center text-center py-12 px-4 rounded-lg bg-gray"
	>
		<div class="bg-primaryGray/50 p-4 rounded-full mb-4">
			<component :is="icon || Inbox" class="w-8 h-8 text-white" />
		</div>
		<BaseText as="h3" bold size="md" :content="title" />
		<BaseText size="sm" class="text-primaryGray mb-4" :content="description" />
		<button
			v-if="action"
			@click="action.handler"
			class="bg-primaryBlue text-white text-sm px-4 py-2 rounded-lg"
		>
			{{ action.label }}
		</button>
	</div>
</template>

<script setup lang="ts">
	import { Inbox } from "lucide-vue-next";
	import type { Component } from "vue";

	defineProps<{
		title: string;
		description: string;
		icon?: Component;
		action?: {
			label: string;
			handler: () => void;
		};
	}>();
</script>
