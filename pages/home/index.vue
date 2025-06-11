<template>
  <div class="flex flex-col gap-14">
    <!-- Header -->
 <header class="flex items-center justify-between px-4 pt-8 relative">
  <Logo />
      <!-- Hamburger Icon (Mobile Only) -->
      <button
        class="mdlg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
        @click="isNavOpen = true"
        aria-label="Open navigation"
      >
       <Menu class="w-8 h-8 text-primaryBlue" />
      </button>
      <nav class="mx-auto">
        <a href="#why-mobi-baby">Why MobiBaby?</a>
      </nav>
    <BaseSelect :placeholder="languages[0]" :options="languages" className="hidden mdlg:inline-flex w-40" />
      <!-- Slide-in Mobile Nav -->
      <transition name="slide">
        <div
          v-if="isNavOpen"
          class="fixed inset-0 z-40 flex"
        >
          <!-- Overlay -->
          <div
            class="fixed inset-0 bg-black/30 bg-opacity-40"
            @click="isNavOpen = false"
          ></div>
          <!-- Drawer -->
          <div class="relative bg-white w-64 max-w-[80vw] h-full shadow-lg z-50 flex flex-col p-6 animate-slidein">
            <button
              class="absolute top-4 right-4 text-gray-500 hover:text-primaryBlue"
              @click="isNavOpen = false"
              aria-label="Close navigation"
            >
            <X class="w-8 h-8 text-primaryBlue" />
            </button>
            <nav class="flex flex-col gap-6 mt-8">
              <a href="#why-mobi-baby" class="text-primaryBlue font-semibold" @click="isNavOpen = false">Why MobiBaby?</a>
               <BaseSelect :placeholder="languages[0]" :options="languages" className="w-40" />
            </nav>
          </div>
        </div>
      </transition>
    </header>
    <!-- Hero Section -->
    <HomeHero />
    <!-- Why MobiBaby -->
    <HomeWhyMobiBaby />
    <!-- Silent Crisis Section -->
    <HomeSilentCrisis />  
    <!-- Join Us -->
     <HomeJoinUs />
    <!-- Footer -->
<HomeFooter />
  </div>
</template>

<script setup lang="ts">
import {
  Menu,
  X,
} from "lucide-vue-next";
useHead({ title: 'MobiBaby' })
const isNavOpen = ref(false);
const languages = [
  "English", "Yoruba", "Igbo", "Hausa"
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
