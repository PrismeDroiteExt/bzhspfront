<script setup lang="ts">
import { ShoppingBag, Home, Search, User } from 'lucide-vue-next'
</script>

<template>
    <div class="w-full bg-white ">
        <div class="h-16 w-full flex justify-between items-center px-4 mx-auto">
            <NuxtImg src="/images/logo/logo_500.png" alt="logo" width="100" />
            <div class="max-md:hidden flex gap-12">
                <Button variant="ghost" size="icon" class="text-primary">
                    <Home />
                </Button>
                <Button variant="ghost" size="icon" class="">
                    <Search />
                </Button>
                <Button variant="ghost" size="icon" class="">
                    <User />
                </Button>
            </div>
            <Button variant="ghost" size="icon" class="">
                <ShoppingBag />
            </Button>
        </div>
    </div>
</template>