<script setup lang="ts">
import { ShoppingBag, ArrowLeft } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
    <div>
        <div class="flex items-center justify-between px-4 py-2 gap-4">
            <ArrowLeft @click="router.back()" />
            <ShoppingBag />
        </div>
    </div>
    <slot />
</template>