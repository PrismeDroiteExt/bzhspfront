<script setup lang="ts">
import { productsFeeder } from "@/feeder";
import { brandsFeeder } from "@/feeder";
</script>

<template>
    <div class="bg-white flex flex-col w-full pl-4 lg:px-28 gap-4">
        <div class="flex justify-between w-full items-center">
            <h4 class="text-xl font-bold">Ça pourrait vous plaire</h4>
            <Button variant="link" class="text-sm text-gray-500">Tout voir</Button>
        </div>
        <div class="flex gap-4 overflow-x-auto w-full scrollbar-hide">
            <div v-for="product in productsFeeder" :key="product.id">
                <Product :product="product" imageWidth="190px" imageHeight="215px" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
