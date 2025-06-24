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
					<BookingCard />
					<Button variant="yellow" size="rounded" class="w-full mb-4">
						Logout
					</Button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	defineProps<{
		show: boolean;
		onClose: () => void;
	}>();
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
