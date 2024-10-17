<script setup lang="ts">
// Récupérer les produits de la catégorie, ainsi que les marques
definePageMeta({
    layout: 'search'
})

const categoryId = parseInt(useRoute().params.id as string)

const { data } = await useFetch(`/api/categories/${categoryId}`)

const category = data.value?.category
const products = data.value?.products

console.log('category', category)
console.log('products', products)
</script>

<template>
    <div class="p-4 flex flex-col gap-4">
        <Filters />
        <div class="grid grid-cols-2 gap-4">
            <Product v-for="product in products" :key="product.id" :product="product" imageWidth="150px"
                imageHeight="200px" />
        </div>
    </div>
</template>