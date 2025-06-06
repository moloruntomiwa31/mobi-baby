<template>
        <section
      id="why-mobi-baby"
      class="flex flex-col items-center justify-center text-center gap-8 mx-auto px-4"
    >
      <BaseText as="h2" size="xl" bold>Why MobiBaby?</BaseText>

      <div
        class="flex flex-wrap justify-center gap-x-16 gap-y-10 max-w-5xl mx-auto"
      >
        <div
          v-for="details in whyMobiBaby"
          :key="details.id"
          class="flex flex-col items-center text-center w-64 px-4"
        >
          <BaseText as="h5" size="sm" bold className="text-primaryAqua">
            {{ details.title }}
          </BaseText>
          <BaseText as="p" size="xs">
            {{ details.description }}
          </BaseText>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
const whyMobiBaby = [
  {
    id: 1,
    title: "🩺 Monitor Baby’s Health",
    description:
      "Easily track your baby's vital signs like temperature and feeding patterns, and screen for jaundice—all from your phone.",
  },
  {
    id: 2,
    title: "🧠 Ask Mobi AI",
    description:
      "Get fast, reliable answers to health concerns, baby care questions, or emergency steps—powered by local medical data.",
  },
  {
    id: 3,
    title: "🌐 Offline Access",
    description:
      "No internet? No problem. MobiBaby works offline to help you log symptoms, check tips, and track baby milestones.",
  },
  {
    id: 4,
    title: "🔔 Never Miss a Milestone",
    description:
      "Stay on top of your baby's immunization schedule, feeding time, and growth milestones with smart reminders.",
  },
  {
    id: 5,
    title: "🎙️ Voice Support",
    description:
      "Talk to MobiBaby in your native language. Get help without needing to read or type—designed with inclusivity in mind.",
  },
];
</script>