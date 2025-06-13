<template>
    <BaseCard :as="isRoute ? 'nuxt-link' : as" :wrapped  :imageSrc>
        <BaseText :content="m.title" size="md" as="h3" />
        <BaseText :content="m.description" size="xs" clamp />
        <div class="flex items-center gap-2">
            <Avatar />
            <BaseText :content="m.user.name" />
            <BadgeCheck v-if="m.user.isVerified" class="fill-blue-500" />
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import { BadgeCheck } from 'lucide-vue-next';
const {isRoute = false, imageSrc = '/images/maternal.jpg', as = 'div'} = defineProps<{
    m: any;
    isRoute?: boolean;
    as?: string;
    imageSrc?: string;
    wrapped?: boolean;
}>()
</script>