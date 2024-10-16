<script setup lang="ts">
import { Home, Search, User } from 'lucide-vue-next'
</script>

<template>
    <div class="w-full h-20 bg-white fixed bottom-0 left-0 right-0 md:hidden pb-4">
        <div class="flex justify-center items-center h-full px-4 lg:px-28">
            <div class="flex gap-8">
                <div class="flex flex-col items-center">
                    <Button variant="ghost" size="icon" class="text-primary w-6 h-6">
                        <Home />
                    </Button>
                    <span class="text-sm">Accueil</span>
                </div>
                <div class="flex flex-col items-center">
                    <Button variant="ghost" size="icon" class="text-primary w-6 h-6">
                        <Search />
                    </Button>
                    <span class="text-sm">Rechercher</span>
                </div>
                <div class="flex flex-col items-center">
                    <Button variant="ghost" size="icon" class="text-primary w-6 h-6">
                        <User />
                    </Button>
                    <span class="text-sm">Profil</span>
                </div>
            </div>
        </div>
    </div>
</template>