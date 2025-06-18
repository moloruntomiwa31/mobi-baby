<template>
    <div class="flex items-center justify-between gap-2 sticky top-0 bg-gray z-50">
        <div class="hidden gap-5 items-center justify-between flex-auto mdlg:flex px-8">
				<NuxtLink
                	to="/dashboard"
				>
					<Logo />
				</NuxtLink>

				<div class="flex items-center justify-center gap-4">
                    <NuxtLink
					v-for="tab in tabs"
					:key="tab.name"
					class="py-4 flex items-center justify-center gap-1 whitespace-nowrap"
                    active-class="text-primaryAqua border-primaryAqua border-b-2"
					:to="tab.path"
				>
					<component
						:is="tab.icon"
						class="h-[18px]"
					/>
					<BaseText :content="tab.name" />
				</NuxtLink>
                </div>
                <Avatar />
			</div>
        <div class="mdlg:hidden flex items-center justify-between w-full py-2 pr-4">
                <Logo class="h-8 w-1/3" />
				<BaseText
					v-if="title"
					:content="title"
                    className="w-1/3"
                    bold
				/>
                <Avatar size="lg" />
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
        path: "/dashboard/chat",
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
        path: "/settings",
        icon: Settings
    }
]
</script>