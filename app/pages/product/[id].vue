<script setup lang="ts">
import { brandsFeeder } from '@/feeder';

// Récupérer les produits de la catégorie, ainsi que les marques
definePageMeta({
    layout: 'product'
})

import { ShoppingCart, CircleDollarSign } from 'lucide-vue-next';

const route = useRoute()
const productId = computed(() => parseInt(route.params.id as string))

const { data } = await useFetch(() => `/api/products/${productId.value}`)

const product = computed(() => data.value)
const { data: brand } = await useFetch(`/api/brands/${product.value.brand.id}`)

const imageLoaded = ref(false)
const sizeSelected = ref(null)
const colorSelected = ref(null)

const handleImageLoad = () => {
    imageLoaded.value = true
}

</script>

<template>

    <div v-if="product">
        <div class="relative w-full h-[420px]">
            <div v-if="!imageLoaded" class="absolute inset-0 bg-gray-100 animate-pulse"></div>
            <NuxtImg :src="product.picture_url" :alt="product.title" :class="`object-cover w-full max-h-[420px]`"
                @load="handleImageLoad" />
        </div>
        <div class="flex flex-col gap-3 p-4">
            <p class="text-xl p- text-primary font-bold">
                {{ brand?.name }}</p>

            <div class="flex flex-col gap-1">
                <p class="text-lg font-semibold">
                    {{ product.title }}</p>
                <div class="flex flex-row gap-2">
                    <p v-if="product.discount" class="text-lg font-bold text-red-500">
                        {{ product.discount }} €
                    </p>
                    <p v-else class="font-bold text-lg">
                        {{ product.price }} €
                    </p>
                    <p v-if="product.discount" class="text-lg line-through">
                        {{ product.price }} €
                    </p>
                </div>
            </div>

            <p class="text-sm">{{ product.description }}</p>
            <div class="flex justify-between">
                <div id="colors" class="flex flex-col gap-2">
                    <p>Couleurs</p>
                    <div class="flex gap-2">
                        <div v-for="color in product.colors.split(',')" :key="color"
                            class="w-6 h-6 rounded-full border border-gray-300"
                            :class="{ 'border-2 border-primary': colorSelected === color }"
                            :style="{ backgroundColor: color }" @click="colorSelected = color">
                        </div>
                    </div>
                </div>
                <div id="size" class="flex flex-col gap-2">
                    <p>Tailles</p>
                    <div class="flex gap-2 overflow-x-auto scrollbar-hide">
                        <div v-for="size in product.sizes.split(',')" :key="size"
                            class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs"
                            :class="{ 'border-2 border-primary': sizeSelected === size }" @click="sizeSelected = size">
                            {{ size }}
                        </div>
                    </div>
                </div>
            </div>
            <div id="buttons" class="flex flex-row gap-2 mt-4 justify-center">
                <Button class="bg-black text-white px-4 py-2 rounded-md w-44">
                    <ShoppingCart class="w-4 h-4 mr-2" /> Ajouter au panier
                </Button>
                <Button class="bg-primary text-white px-4 py-2 rounded-md w-44">
                    <CircleDollarSign class="w-4 h-4 mr-2" /> Acheter
                </Button>
            </div>
        </div>

    </div>
</template>
