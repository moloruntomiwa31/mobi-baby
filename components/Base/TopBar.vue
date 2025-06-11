<template>
    <div class="flex items-center justify-between gap-2 sticky top-0 bg-gray">
        <div class="hidden gap-5 items-center justify-start flex-auto mdlg:flex">
				<NuxtLink
					class="py-2 pr-3"
					to="/dashboard"
				>
					<Logo />
				</NuxtLink>

				<NuxtLink
					v-for="tab in tabs"
					:key="tab.name"
					class="py-4 flex items-center justify-center gap-1 whitespace-nowrap"
                    active-class="text-primaryAqua"
					:to="tab.path"
				>
					<component
						:is="tab.icon"
						class="h-[18px]"
					/>
					<BaseText :content="tab.name" />
				</NuxtLink>
                <Avatar
					size="lg"
				/>
			</div>
        <div class="mdlg:hidden flex items-center justify-between w-full py-2 px-4">
                <span />
				<BaseText
					v-if="title"
					:content="title"
                    bold
				/>
                <Avatar
					size="lg"
				/>
			</div>
    </div>
</template>

<script setup lang="ts">
import {LayoutDashboard, MessageSquareText, Store, NotepadText, Settings} from "lucide-vue-next";
defineProps<{
    title?: string;
}>(); 

const tabs: {name: string, path: string, icon: unknown}[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
        name: 'Chat',
        path: "#",
        icon: MessageSquareText
    },
    {
        name: "MarketPlace",
        path: "#",  
        icon: Store
    },
    {
        name: "Bookings",
        path: "#",
        icon: NotepadText
    },
    {
        name: "Settings",
        path: "#",
        icon: Settings
    }
]
</script>