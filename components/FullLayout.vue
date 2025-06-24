<template>
	<div class="mdlg:flex h-screen overflow-hidden hidden flex-col">
		<BaseTopBar v-if="!hide.top" :title="title" />
		<div
			class="flex-1 flex flex-col mdlg:flex-row mdlg:items-start gap-5 pt-4 mdlg:gap-8 px-4 overflow-hidden"
		>
			<div
				v-if="!hide.left"
				class="mdlg:w-1/4 h-full overflow-y-auto pr-2 no-scrollbar"
			>
				<slot name="left" />
			</div>

			<div
				v-if="!hide.middle"
				class="flex-1 h-full overflow-y-auto pr-2 no-scrollbar"
			>
				<slot name="middle" />
			</div>

			<div
				v-if="!hide.right"
				class="mdlg:w-1/4 h-full overflow-y-auto pr-2 no-scrollbar"
			>
				<slot name="right" />
			</div>
		</div>

		<BaseBottomBar v-if="!hide.bottom" />
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		hide?: Partial<{
			top: boolean;
			left: boolean;
			middle: boolean;
			right: boolean;
			bottom: boolean;
		}>;
		title?: string;
	}>();

	const hide = props.hide ?? {};
</script>
