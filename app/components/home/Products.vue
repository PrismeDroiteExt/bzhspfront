<script setup lang="ts">
import { productsFeeder } from "@/feeder";
import { brandsFeeder } from "@/feeder";
</script>

<template>
    <div class="h-2/5 bg-white flex flex-col w-full px-4 lg:px-28 gap-4">
        <div class="flex justify-between w-full items-center">
            <h4 class="text-xl font-bold">Ça pourrait vous plaire</h4>
            <Button variant="link" class="text-sm text-gray-500">Tout voir</Button>
        </div>
        <div class="flex gap-4 overflow-x-auto w-full">
            <div v-for="product in productsFeeder" :key="product.id">
                <div class="flex flex-col items-start gap-2">
                    <NuxtImg :src="product.picture_url" :alt="product.title"
                        class="object-cover rounded-lg max-w-[190px] max-h-[215px]" />
                    <div class="flex flex-col gap-0">
                        <p class="text-sm text-primary font-bold">
                            {{ brandsFeeder.find(brand => brand.id === product.fk_id_brands)?.name }}</p>
                        <p class="text-sm">
                            {{ product.title.substring(0, 20) + (product.title.length > 20 ? '...' : '') }}</p>
                    </div>
                    <div class="flex flex-row gap-2">
                        <p v-if="product.discount" class="text-sm font-bold text-red-500">
                            {{ product.discount }} €
                        </p>
                        <p v-else class="text-sm font-bold">
                            {{ product.price }} €
                        </p>
                        <p v-if="product.discount" class="text-sm line-through">
                            {{ product.price }} €
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>