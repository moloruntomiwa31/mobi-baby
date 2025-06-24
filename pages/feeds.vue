<template>
	<FeedsLayout>
		<div class="flex flex-col gap-4">
			<div class="mdlg:flex flex-col gap-4 hidden">
				<div class="flex items-center gap-4 bg-primaryGray/10 p-4 rounded-md">
					<img
						src="/images/feeds-img.jpg"
						alt="Happy Parent Image"
						class="w-full mdlg:w-[40%] h-[300px] object-cover rounded-md"
					/>

					<div class="flex-1 flex flex-col gap-4">
						<div>
							<BaseText
								content="Welcome to MobiBaby Feeds"
								as="h2"
								size="xl"
								bold
							/>
							<BaseText
								content="Explore a curated collection of articles, manuals, and helpful resources tailored for parents and caregivers."
							/>
							<BaseText
								content="From feeding guides to parenting tips, we've got you covered. Some content is AI-generated, while others are expert materials shared or sold by our certified medics."
								size="sm"
								class="text-gray-500"
							/>
						</div>

						<div class="relative w-full">
							<div
								class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
							>
								<ListFilter class="w-5 h-5" />
							</div>
							<input
								type="text"
								placeholder="Search feeds..."
								class="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryAqua"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full sticky top-0 bg-white z-10 p-4 mdlg:hidden">
				<div
					class="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
				>
					<ListFilter class="w-5 h-5" />
				</div>
				<input
					type="text"
					placeholder="Search feeds..."
					class="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryAqua"
				/>
			</div>
			<template v-for="m in materials" :key="m.title">
				<div
					class="flex flex-col items-start gap-2 shadow p-2 bg-primaryGray/10 rounded-md"
				>
					<div class="flex items-center justify-between w-full">
						<BaseText :content="m.title" size="sm" bold />
					</div>
					<div
						class="flex items-center gap-4 overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar w-full"
					>
						<MaterialCard
							v-for="data in m.list"
							:key="data.description"
							wrapped
							:m="data"
						/>
					</div>
				</div>
			</template>
		</div>
	</FeedsLayout>
</template>

<script setup lang="ts">
	import { ListFilter } from "lucide-vue-next";
	useHead({
		title: "Feeds",
	});

	const materialList = computed(() => {
		return [
			{
				title: "Baby Care Guide",
				description: "A comprehensive guide to caring for your newborn.",
				image: "/images/maternal.jpg",
				link: "/resources/baby-care-guide",
				user: { name: "Dr. John Doe", isVerified: true },
				price: { amount: 0, currency: "NGN" },
			},
			{
				title: "Feeding Schedule",
				description: "Sample feeding schedules for different age groups.",
				image: "/images/maternal.jpg",
				link: "/resources/feeding-schedule",
				user: { name: "Dr. Jane Smith", isVerified: false },
				price: { amount: 1000, currency: "NGN" },
			},
			{
				title: "Sleep Tips",
				description: "Tips to help your baby sleep better.",
				image: "/images/maternal.jpg",
				link: "/resources/sleep-tips",
				user: { name: "Dr. John Doe", isVerified: true },
				price: { amount: 1500, currency: "NGN" },
			},
			{
				title: "Postpartum Recovery",
				description: "Essential recovery tips for new moms.",
				image: "/images/maternal.jpg",
				link: "/resources/postpartum-recovery",
				user: { name: "Nurse Bisi Ade", isVerified: true },
				price: { amount: 500, currency: "NGN" },
			},
			{
				title: "Vaccination Schedule",
				description: "Keep track of your baby’s vaccination milestones.",
				image: "/images/maternal.jpg",
				link: "/resources/vaccination-schedule",
				user: { name: "Dr. Chuka O.", isVerified: false },
				price: { amount: 0, currency: "NGN" },
			},
			{
				title: "Weaning Guide",
				description: "A smooth transition from breast milk to solids.",
				image: "/images/maternal.jpg",
				link: "/resources/weaning-guide",
				user: { name: "Dr. John Doe", isVerified: true },
				price: { amount: 1200, currency: "NGN" },
			},
			{
				title: "Emergency First Aid",
				description: "Basic first aid every parent should know.",
				image: "/images/maternal.jpg",
				link: "/resources/emergency-first-aid",
				user: { name: "Red Cross Nigeria", isVerified: true },
				price: { amount: 0, currency: "NGN" },
			},
			{
				title: "Mental Health for Moms",
				description: "Managing stress and postpartum depression.",
				image: "/images/maternal.jpg",
				link: "/resources/maternal-mental-health",
				user: { name: "Dr. Jane Smith", isVerified: false },
				price: { amount: 800, currency: "NGN" },
			},
			{
				title: "Baby Milestones Tracker",
				description: "Track your baby’s growth and development.",
				image: "/images/maternal.jpg",
				link: "/resources/milestone-tracker",
				user: { name: "Dr. Sola M.", isVerified: true },
				price: { amount: 2000, currency: "NGN" },
			},
			{
				title: "Safe Bathing Practices",
				description: "How to safely bathe your newborn.",
				image: "/images/maternal.jpg",
				link: "/resources/safe-bathing",
				user: { name: "Nurse Mary", isVerified: true },
				price: { amount: 500, currency: "NGN" },
			},
		];
	});

	const materials = computed(() => {
		return [
			{
				title: "Suggested for you",
				list: materialList.value,
			},
			{
				title: "Popular Resources",
				list: materialList.value,
			},
			{
				title: "New Arrivals",
				list: materialList.value,
			},
		];
	});
</script>
