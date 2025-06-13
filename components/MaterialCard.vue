<template>
    <BaseCard :as="isRoute ? 'nuxt-link' : as" :wrapped  :imageSrc>
        <BaseText content="The Origin of the Pregnant Picasso" size="lg" as="h3" />
        <BaseText content="The origin of the pregnant Picasso is a mystery, but it is believed that the artist was born in the 19th century, in the city of Paris, France." size="xs" clamp/>
        <div class="flex items-center gap-2">
            <Avatar />
            <BaseText content="Dr. John Doe" />
            <BadgeCheck class="fill-blue-500" />
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import { BadgeCheck } from 'lucide-vue-next';
const {isRoute = false, imageSrc = '/images/maternal.jpg', as = 'div'} = defineProps<{
    isRoute?: boolean;
    as?: string;
    imageSrc?: string;
    wrapped?: boolean;
}>()
</script>