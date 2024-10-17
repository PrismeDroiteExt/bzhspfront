<script setup lang="ts">
// Récupérer les produits de la catégorie, ainsi que les marques
definePageMeta({
    layout: 'search'
})
</script>

<template>
    <div>
        Category {{ $route.params.id }}
    </div>
</template>