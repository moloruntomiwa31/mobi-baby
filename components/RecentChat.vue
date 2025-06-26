<template>
	<div
		v-bind="$attrs"
		class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 transition duration-100 cursor-pointer rounded-lg w-full"
	>
		<Avatar size="sm" />

		<div class="flex-1 flex flex-col gap-1">
			<BaseText :content="message.name" size="sm" bold clamp />
			<div class="flex items-center gap-1 text-gray-600">
				<Check class="w-5 h-5 text-primaryBlue" v-if="0" />
				<BaseText :content="message.message" size="xs" clamp />
			</div>
		</div>

		<div class="flex flex-col items-center gap-1">
			<BaseText content="Yesterday" size="xs" class="text-gray-400" />
			<div
				class="size-6 rounded-full bg-primaryAqua flex items-center justify-center"
			>
				<BaseText content="2" size="xs" class="text-white" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		message: any;
	}>();
</script>

<style scoped></style>
