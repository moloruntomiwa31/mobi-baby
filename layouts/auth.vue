<template>
    <div class="flex items-center min-h-screen">
        <div class="w-full mdlg:w-1/2 p-8">
            <slot />
        </div>
        <div class="hidden mdlg:block mdlg:w-1/2 h-screen">
      <img 
        src="/images/auth-bg.jpg" 
        alt="Auth Background Image" 
        class="w-full h-full object-cover" 
      />  
    </div>
    </div>
</template>

<script setup lang="ts">

</script>