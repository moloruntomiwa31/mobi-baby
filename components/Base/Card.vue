<template>
	<component
		:is="as"
		class="bg-gray shadow text-primaryBlue flex gap-2 p-3 items-center shrink-0 rounded-md cursor-pointer"
		:class="wrapped ? 'flex-col w-[220px]' : 'flex-row w-full'"
	>
		<img
			v-if="imageSrc"
			class="rounded-md aspect-3/2 object-cover h-full"
			:class="wrapped ? 'w-full' : 'w-[144px] mdlg:w-[168px]'"
			:src="imageSrc"
		/>
		<div
			class="flex flex-col gap-1"
			:class="[wrapped ? 'w-full' : 'flex-auto']"
		>
			<slot />
		</div>
	</component>
</template>

<script setup lang="ts">
	const { as = "div", wrapped = false } = defineProps<{
		as?: string | object;
		imageSrc?: string;
		wrapped?: boolean;
	}>();
</script>
