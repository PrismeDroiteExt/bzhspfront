<script setup lang="ts">
import { categories } from "@/feeder";
import Avatar from "../ui/avatar/Avatar.vue";
</script>


<template>
    <div class="h-48 bg-white flex flex-col items-center w-full px-4 py-4 gap-4">
        <div class="flex justify-between w-full items-center">
            <h4 class="text-xl font-bold">Nos catégories</h4>
            <Button variant="link" class="text-sm text-gray-500">Tout voir</Button>
        </div>
        <div class="flex flex-row gap-4 overflow-x-auto w-full">
            <div v-for="category in categories" :key="category.id" class="flex flex-col items-center gap-2">
                <Avatar :alt="category.name" class="w-[71px] h-[71px]" as="im">
                    <NuxtImg :src="category.picture_url" :alt="category.name" height="71" width="71" />
                </Avatar>
                <p class="text-sm">{{ category.name }}</p>
            </div>
        </div>
    </div>
</template>