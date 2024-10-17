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

const getOtherValue = () => {
    const otherKey = props.type === 'min' ? 'maxprice' : 'minprice'
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

    if (typeof validatedValue !== 'number' || isNaN(validatedValue)) {
        // Remove the parameter from the URL
        const currentQuery = { ...route.query }
        delete currentQuery[props.filterKey.toLowerCase()]
        router.replace({ query: currentQuery })
        return
    }

    const currentQuery = { ...route.query }
    currentQuery[props.filterKey.toLowerCase()] = validatedValue.toString()

    router.replace({ query: currentQuery })
}

const props = defineProps<{
    type: 'min' | 'max'
    filterKey: string
    filterName: string
}>()

const route = useRoute()
const router = useRouter()

const value = ref(NaN)

// Watch for changes in the other price input
watch(() => route.query, (newQuery) => {
    const otherKey = props.type === 'min' ? 'maxprice' : 'minprice'
    if (newQuery[otherKey]) {
        console.log(newQuery[otherKey])
        handleChange(value.value) // Re-validate current value
    }
}, { deep: true })

</script>

<template>
    <NumberField :model-value="value" @update:model-value="handleChange" class="h-8">
        <NumberFieldContent>
            <NumberFieldInput class="h-8 text-sm w-28 focus-visible:ring-none focus-visible:ring-0"
                :placeholder="`Prix ${props.type === 'min' ? 'min' : 'max'}`" />
        </NumberFieldContent>
    </NumberField>
</template>
