<script setup lang="ts">
import { getBrandFilters } from '@/lib/filters/getFilters';

const sizes = [
    { value: 'all', label: 'Tailles' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
    { value: '45', label: '45' },
]

const colors = [
    { value: 'all', label: 'Couleurs' },
    { value: 'red', label: 'Rouge' },
    { value: 'blue', label: 'Bleu' },
    { value: 'green', label: 'Vert' },
    { value: 'yellow', label: 'Jaune' },
    { value: 'purple', label: 'Violet' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Rose' },
    { value: 'brown', label: 'Marron' },
    { value: 'gray', label: 'Gris' },
]

const brands = await getBrandFilters()
</script>

<template>
    <div class="flex flex-row gap-2 overflow-x-auto h-10">
        <FiltersSelect :options="sizes" filterName="Tailles" filterKey="size" />
        <FiltersSelect :options="colors" filterName="Couleurs" filterKey="color" />
        <FiltersSelect :options="brands" filterName="Marques" filterKey="brand" />
        <FiltersPriceInput type="min" filterName="Prix min" filterKey="minPrice" />
        <FiltersPriceInput type="max" filterName="Prix max" filterKey="maxPrice" />
    </div>
</template>