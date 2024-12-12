<script setup lang="ts">
import { brandsFeeder } from '@/feeder';
import type { Product } from '@/utils/schema/products';

const props = defineProps<{
    product: Product
    imageWidth: string
    imageHeight: string
}>()

const brand = brandsFeeder.find(brand => brand.id === props.product.fk_id_brands)
</script>

<template>
    <div class="flex flex-col items-start gap-2 min-w-[190px]">
        <div class="flex w-full justify-center">
            <div :style="{ width: imageWidth, height: imageHeight }" class="overflow-hidden">
                <img :src="product.picture_url" :alt="product.title" class="object-cover rounded-lg w-full h-full" />
            </div>
        </div>
        <div class="flex flex-col gap-0">
            <p class="text-sm text-primary font-bold">
                {{ brand?.name }}</p>
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
</template>
