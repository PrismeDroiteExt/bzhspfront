<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from '@/components/ui/command'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{
    options: { value: string, label: string }[]
    filterName: string
    filterKey: string
}>()

const handleSelect = (value: string) => {
    const route = useRoute();
    const router = useRouter();

    const currentQuery = { ...route.query };
    currentQuery[props.filterKey.toLowerCase()] = value;

    router.push({ query: currentQuery });
}

const open = ref(false)
const value = ref('')
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <Button variant="outline" role="combobox" :aria-expanded="open" class="justify-between h-8">
                {{ value
                    ? options.find((option) => option.value === value)?.label
                    : `${filterName}` }}
                <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-[200px] p-0">
            <Command>
                <CommandList>
                    <CommandGroup>
                        <CommandItem v-for="option in options" :key="option.value" :value="option.value" @select="(ev) => {
                            if (typeof ev.detail.value === 'string') {
                                value = ev.detail.value
                                handleSelect(value)
                            }
                            open = false
                        }">
                            {{ option.label }}
                            <Check :class="cn(
                                'ml-auto h-4 w-4',
                                value === option.value ? 'opacity-100' : 'opacity-0',
                            )" />
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>