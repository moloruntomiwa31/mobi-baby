<template>
        <section
      id="join-us"
      class="flex flex-col items-center justify-center text-center gap-8 mx-auto px-4 max-w-lg"
    >
      <BaseText as="h2" size="xl" bold className="text-primaryAqua">Join Thousands of Smart Mothers Saving Lives Today</BaseText>
        <BaseText as="p" size="sm">
            Simple. Safe. Support for you and your baby—no payment required for you to begin to enjoy the benefits of MobiBaby.
        </BaseText>
      <div
        class="flex items-center justify-center"
      >
        <Button variant="yellow" size="rounded" @click="navigateTo('/onboarding')">Start Using MobiBaby Now</Button>
      </div>
    </section>
</template>