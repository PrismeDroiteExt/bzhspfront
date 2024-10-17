<script setup lang="ts">
// Récupérer les produits de la catégorie, ainsi que les marques
definePageMeta({
    layout: 'search'
})

const route = useRoute()
const categoryId = computed(() => parseInt(route.params.id as string))
const params = computed(() => route.query)

// Log params whenever they change
watchEffect(() => {
    console.log('params', params.value)
})

const { data } = await useFetch(() => `/api/categories/${categoryId.value}`, {
    params
})

const category = computed(() => data.value?.category)
const products = computed(() => data.value?.products)

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
