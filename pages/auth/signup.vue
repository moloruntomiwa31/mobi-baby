<template>
    <div>
      <BaseText as="h3" size="md" class="mb-6 text-center">Create an account</BaseText>
  
      <div class="grid gap-6">
        <Button variant="outline" class="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20.5h-1.9V20H24v8h11.3C33.9 32.4 29.4 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C33.9 5.1 29.2 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 19.5-7.6 21-18v-6.5z"/>
            <path fill="#FF3D00" d="M6.3 14.6l6.6 4.8C14.1 16 18.7 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C33.9 5.1 29.2 3 24 3c-7.5 0-13.9 4.1-17.7 10.2z"/>
            <path fill="#4CAF50" d="M24 45c5.2 0 10-2 13.5-5.2l-6.2-5.1C29.7 36.7 26.9 38 24 38c-5.4 0-9.9-3.6-11.5-8.5l-6.6 5.1C9.9 40.9 16.5 45 24 45z"/>
            <path fill="#1976D2" d="M43.6 20.5H24v8h11.3C34.6 32.7 29.7 38 24 38c-5.4 0-9.9-3.6-11.5-8.5l-6.6 5.1C9.9 40.9 16.5 45 24 45c10.5 0 19.5-7.6 21-18v-6.5z"/>
          </svg>
          Sign up with Google
        </Button>
  
        <div class="relative flex items-center justify-center mt-4">
          <div class="w-full border-t border-gray-300"></div>
          <BaseText
            as="span"
            size="xs"
            class="absolute left-1/2 -translate-x-1/2 bg-white px-4 text-gray-500"
          >
            Or continue with
          </BaseText>
        </div>
  
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
  
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
  
        <div class="grid gap-2">
          <Label for="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" placeholder="••••••••" />
        </div>

        <div class="flex items-center gap-2 w-full">
            <ClientOnly>
  <Checkbox id="terms" />
</ClientOnly>
    <BaseText
        as="label"
        size="xs"
    >
      I agree with the <NuxtLink to="#" class="text-primaryAqua">Terms and Conditions</NuxtLink> of using <span class="font-semibold">MobiBaby.</span>
    </BaseText>
  </div>
  
        <Button class="w-full">Create account</Button>
      </div>

      <BaseText
        as="p"
        size="xs"
        class="mt-4 text-center"
        >
        Already have an account?
        <NuxtLink to="/auth/signin" class="text-primaryAqua">Sign in</NuxtLink>
      </BaseText>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    layout: "auth",
  })
  useHead({title: 'Sign Up'})
  </script>
  