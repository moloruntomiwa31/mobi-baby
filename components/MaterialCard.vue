<template>
	<BaseCard :as="isRoute ? NuxtLink : as" :wrapped :imageSrc>
		<BaseText :content="m.title" as="h3" />
		<BaseText :content="m.description" size="xs" clamp />
		<div
			v-if="m.price.amount > 0"
			class="flex items-center gap-1 text-primaryAqua"
		>
			<BaseText content="Price" size="sm" />
			<span class="size-[5px] rounded-full bg-primaryAqua" />
			<BaseText
				:content="`${m.price.currency}${m.price.amount}`"
				bold
				size="sm"
			/>
		</div>
		<BaseText v-else content="Free" size="sm" className="text-primaryPink" />
		<div class="flex items-center gap-2">
			<Avatar size="xs" />
			<BaseText :content="m.user.name" size="xs" />
			<BadgeCheck
				v-if="m.user.isVerified"
				class="w-4 fill-blue-400 stroke-white"
			/>
		</div>
	</BaseCard>
</template>

<script setup lang="ts">
	import { NuxtLink } from "#components";
	import { BadgeCheck } from "lucide-vue-next";
	const {
		isRoute = false,
		imageSrc = "/images/maternal.jpg",
		as = "div",
	} = defineProps<{
		m: any;
		isRoute?: boolean;
		as?: string;
		imageSrc?: string;
		wrapped?: boolean;
	}>();
</script>
