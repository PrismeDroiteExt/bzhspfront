<script setup lang="ts">
import { Label } from '@/components/ui/label'
import {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
} from '@/components/ui/number-field'
import { ref, watch } from 'vue'

const props = defineProps<{
    type: 'min' | 'max'
    filterKey: string
    filterName: string
}>()

const route = useRoute()
const router = useRouter()

const value = ref(0)

const getOtherValue = () => {
    const otherKey = props.type === 'min' ? 'maxPrice' : 'minPrice'
    return Number(route.query[otherKey]) || 0
}

const handleChange = (newValue: number) => {
    let validatedValue = Math.max(0, newValue) // Ensure value is not less than 0

    if (props.type === 'min') {
        validatedValue = Math.min(validatedValue, getOtherValue() || Infinity)
    } else {
        validatedValue = Math.max(validatedValue, getOtherValue())
    }

    value.value = validatedValue

    const currentQuery = { ...route.query }
    currentQuery[props.filterKey.toLowerCase()] = validatedValue.toString()

    router.replace({ query: currentQuery })
}

// Watch for changes in the other price input
watch(() => route.query, (newQuery) => {
    const otherKey = props.type === 'min' ? 'maxPrice' : 'minPrice'
    if (newQuery[otherKey]) {
        handleChange(value.value) // Re-validate current value
    }
}, { deep: true })

// Initialize value from route query
value.value = Number(route.query[props.filterKey.toLowerCase()]) || 0
</script>

<template>
    <NumberField v-model="value" @update:modelValue="handleChange" class="h-8">
        <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput class="h-8 text-sm w-28" :placeholder="`Prix ${props.type === 'min' ? 'min' : 'max'}`" />
            <NumberFieldIncrement />
        </NumberFieldContent>
    </NumberField>
</template>
