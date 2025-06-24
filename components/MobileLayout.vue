<template>
	<div class="flex flex-col gap-4 h-screen w-full overflow-y-clip mdlg:hidden">
		<BaseTopBar v-if="!hide.top" :title="title" />

		<div
			class="h-full w-full overflow-y-auto grow relative flex flex-col gap-4 px-2 mx-auto"
		>
			<slot />
		</div>

		<BaseBottomBar v-if="!hide.bottom" />
	</div>
</template>

<script setup lang="ts">
	const { hide = { top: false, bottom: false } } = defineProps<{
		hide?: Partial<{ top: boolean; bottom: boolean }>;
		title?: string;
	}>();
</script>
