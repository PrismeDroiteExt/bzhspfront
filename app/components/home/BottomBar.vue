<script setup lang="ts">
import { Home, Search, User, X } from 'lucide-vue-next'
import { ref, nextTick } from 'vue'

const route = useRoute()

const isSearchActive = ref(false)
const searchQuery = ref('')
const showIcons = ref(true)
const isSearchPage = ref(false)
const isProfilePage = ref(false)
const isHomePage = computed(() => route.path === '/')

const toggleSearch = async () => {
    if (isSearchActive.value) {
        isSearchActive.value = false
        await nextTick()
        setTimeout(() => {
            showIcons.value = true
        }, 350) // Correspond à la durée de la transition
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
    <div class="w-full h-20 bg-white fixed bottom-0 left-0 right-0 md:hidden pb-4">
        <div class="flex justify-center items-center h-full px-4 lg:px-28">
            <div v-if="showIcons" class="flex gap-8">
                <div class="flex flex-col items-center">
                    <Button variant="ghost" size="icon" class="w-6 h-6" :class="{ 'text-primary': isHomePage }">
                        <Home />
                    </Button>
                    <span class="text-sm">Home</span>
                </div>
                <div class="flex flex-col items-center" @click="toggleSearch">
                    <Button variant="ghost" size="icon" class="w-6 h-6" :class="{ 'text-primary': isSearchPage }">
                        <Search />
                    </Button>
                    <span class="text-sm">Search</span>
                </div>
                <div class="flex flex-col items-center">
                    <Button variant="ghost" size="icon" class="w-6 h-6" :class="{ 'text-primary': isProfilePage }">
                        <User />
                    </Button>
                    <span class="text-sm">Profile</span>
                </div>
            </div>
            <transition name="expand">
                <div v-if="isSearchActive" class="w-full max-w-md px-4">
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
