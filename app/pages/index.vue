<script setup lang="ts">
// You can add any necessary imports or logic here
</script>

<template>
  <div class="flex flex-col h-screen w-scree">
    <div class="flex-grow overflow-y-scroll pb-20">
      <HomeTopBar />
      <HomePromotion />
      <HomeCategories />
      <HomeProducts />
    </div>
    <HomeBottomBar class="fixed bottom-0 left-0 right-0" />
  </div>
</template>
