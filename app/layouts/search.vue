<script setup lang="ts">
import { Search, ArrowLeft } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
    <div>
        <div class="flex items-center justify-between px-4 py-2 gap-4">
            <ArrowLeft @click="router.back()" />
            <div class="relative w-full max-w-sm items-center">
                <Input id="search" type="text" placeholder="Rechercher" class="pl-10" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <Search class="size-6 text-muted-foreground" />
                </span>
            </div>
        </div>
    </div>
    <slot />
</template>