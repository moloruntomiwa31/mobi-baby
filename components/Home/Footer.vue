<template>
    <footer class="bg-primaryBlue py-8 px-4">
  <div class="max-w-6xl mx-auto flex flex-col gap-8">
    <!-- Links Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="link in footerLinks"
        :key="link.title"
        class="flex flex-col gap-2 p-2"
      >
        <BaseText as="h3" size="sm" className="text-white font-semibold">
          {{ link.title }}
        </BaseText>
        <ul class="flex flex-col gap-1">
          <li v-for="item in link.links" :key="item.name">
            <a
              :href="item.href"
              class="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Social & Logo Section -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
      <div class="flex items-center gap-4">
        <component
          v-for="(c, idx) in socialLinks"
          :is="c"
          :key="idx"
          class="text-white w-6 h-6 hover:text-gray-400 transition-colors"
        />
      </div>
      <div class="flex flex-col items-center gap-2">
        <img src="/logo.png" alt="MobiBaby Logo" class="h-8" />
        <BaseText className="text-white text-xs text-center"
          >&copy;{{ currentYear }} Mobibaby. All rights reserved.</BaseText
        >
      </div>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-vue-next";
const footerLinks = [
  {
    title: "About MobiBaby",
    links: [
      { name: "About Us", href: "#" },
      { name: "Resources & Policies", href: "#" },
      { name: "Content Integrity", href: "#" },
      { name: "Terms of  Use", href: "#" },
      { name: "Privacy & Cookies Statement", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Write a  review", href: "#" },
      { name: "Join Our Community", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  },
];
const currentYear = computed(() => new Date().getFullYear());
const socialLinks = [Facebook, Instagram, Twitter, Youtube, Linkedin];
</script>