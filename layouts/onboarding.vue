<template>
    <div class="bg-gray-100">
        <header class="fixed top-0 left-0 p-4">
            <div class="flex justify-start">
                <MoveLeft class="w-6 h-6 text-primaryBlue cursor-pointer" @click="$router.back()" />
            </div>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import {MoveLeft} from "lucide-vue-next"
useHead({ title: 'Setup Your Account' })
</script>