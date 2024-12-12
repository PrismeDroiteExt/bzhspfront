<script setup lang="ts">
const { data: products } = await useFetch("/api/products/recommended");

const twofirst = products.value.slice(0, 2);
</script>

<template>
    <div class="bg-white flex flex-col w-full pl-4 lg:px-28 gap-4 mb-4">
        <div class="flex justify-between w-full items-center">
            <h4 class="text-xl font-bold">Ça pourrait vous plaire</h4>
            <Button variant="link" class="text-sm text-gray-500">Tout voir</Button>
        </div>
        <div class="flex gap-4 overflow-x-auto min-w-full scrollbar-hide p-1">
            <div v-for="product in twofirst" :key="product.id">
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
