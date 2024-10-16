<script setup lang="ts">
import { ShoppingBag, Home, Search, User, X } from 'lucide-vue-next'
import { ref, nextTick } from 'vue'

const isSearchActive = ref(false)
const searchQuery = ref('')
const showIcons = ref(true)

const toggleSearch = async () => {
    if (isSearchActive.value) {
        isSearchActive.value = false
        await nextTick()
        setTimeout(() => {
            showIcons.value = true
        }, 300) // Correspond à la durée de la transition
    } else {
        showIcons.value = false
        await nextTick()
        isSearchActive.value = true
    }
    if (!isSearchActive.value) {
        searchQuery.value = ''
    }
}

const handleSearchBlur = () => {
    if (!searchQuery.value) {
        toggleSearch()
    }
}
</script>

<template>
    <div class="w-full bg-white">
        <div class="h-16 w-full flex justify-between items-center px-4 lg:px-28 mx-auto">
            <NuxtImg src="/images/logo/logo_500.png" alt="logo" width="100" />
            <div class="flex-grow flex justify-center">
                <div v-if="showIcons" class="max-md:hidden flex gap-12">
                    <div class="flex flex-col items-center cursor-pointer hover:text-primary">
                        <Home />
                        <span class="text-sm">Accueil</span>
                    </div>
                    <div class="flex flex-col items-center cursor-pointer hover:text-primary" @click="toggleSearch">
                        <Search />
                        <span class="text-sm">Rechercher</span>
                    </div>
                    <div class="flex flex-col items-center cursor-pointer hover:text-primary">
                        <User />
                        <span class="text-sm">Profil</span>
                    </div>
                </div>
                <transition name="expand">
                    <div v-if="isSearchActive" class="w-full max-w-md">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="Rechercher..."
                                class="w-full p-2 pr-10 rounded-lg border border-gray-300 focus:outline-none"
                                @blur="handleSearchBlur" />
                            <X class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-primary"
                                @click="toggleSearch" />
                        </div>
                    </div>
                </transition>
            </div>
            <ShoppingBag class="cursor-pointer hover:text-primary" />
        </div>
    </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: all 0.3s ease-out;
    max-width: 28rem;
}

.expand-enter-from,
.expand-leave-to {
    max-width: 0;
    opacity: 0;
}
</style>
