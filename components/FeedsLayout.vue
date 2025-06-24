<template>
    <FullLayout :hide="{ right: true, left: true }" title="Feeds">
      <template #middle>
        <slot />
      </template>
    </FullLayout>
  
    
      <MobileLayout class="mdlg:hidden" :hide="{top: true}">
        <slot />
      </MobileLayout>
</template>
