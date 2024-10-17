<script setup lang="ts">
import { categoriesFeeder } from "@/feeder";
import Avatar from "../ui/avatar/Avatar.vue";

const viewport = useViewport()

const isLargeScreen = computed(() => {
    return ['lg', 'xl', '2xl'].includes(viewport.breakpoint.value)
})

const handleClickOnCategory = (id: number) => {
    navigateTo(`/categories/${id}`)
}

const handleClickOnAllCategories = () => {
    console.log('click')
    navigateTo('/categories')
}

watch(() => viewport.breakpoint.value, (newBreakpoint, oldBreakpoint) => {
    console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
    console.log('Is large screen:', isLargeScreen.value)
})
</script>


<template>
    <div class="h-48 lg:h-56 bg-white flex flex-col items-center w-full pl-4 lg:px-28 py-4 gap-4">
        <div class="flex justify-between w-full items-center">
            <h4 class="text-xl font-bold">Nos catégories</h4>
            <Button variant="link" class="text-sm text-gray-500" @click="handleClickOnAllCategories">Tout voir</Button>
        </div>
        <div class="flex flex-row gap-4 overflow-x-auto w-full scrollbar-hide">
            <div v-for="category in categoriesFeeder" :key="category.id" class="flex flex-col items-center gap-2"
                @click="handleClickOnCategory(category.id)">
                <Avatar :alt="category.name" class="w-[71px] h-[71px] lg:w-[100px] lg:h-[100px]">
                    <NuxtImg v-if="isLargeScreen" :src="category.picture_url" :alt="category.name" height="100"
                        width="100" class="object-cover" />
                    <NuxtImg v-else :src="category.picture_url" :alt="category.name" height="71" width="71"
                        class="object-cover" />
                </Avatar>
                <p class="text-sm">{{ category.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari and Opera */
}
</style>