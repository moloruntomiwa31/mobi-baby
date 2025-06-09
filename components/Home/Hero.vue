<template>
        <section
      class="flex flex-col gap-8 items-center justify-center text-center max-w-[90%] mdlg:max-w-lg mx-auto"
    >
      <div class="flex flex-col gap-2">
        <BaseText as="h1" size="2xl" bold>
          Caring For Your Newborn, Made Simple.
        </BaseText>
        <BaseText as="p" size="sm">
          MobiBaby is your trusted <span class="font-bold">AI & Health companion</span> for newborn care—designed to
          support mothers in underserved communities. From real-time baby health
          insights to culturally aware voice support, we help you feel confident
          and connected.
        </BaseText>
      </div>
      <div class="grid grid-cols-1 mdlg:grid-cols-2 gap-4 w-full">
        <Button variant="yellow" size="rounded" @click="navigateTo('/onboarding')">Get started for free</Button>
        <Button variant="yellowOutline" size="rounded">Login</Button>
      </div>
    </section>
</template>