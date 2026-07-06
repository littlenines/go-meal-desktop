<script setup lang="ts">
const { size = 'lg', prefix = '', emphasis = false, weight } = defineProps<{
    size?: 'md' | 'lg'
    prefix?: string
    emphasis?: boolean
    weight?: number
}>()
</script>

<template>
    <h3
        class="price"
        :class="[`price--${size}`, { 'price--emphasis': emphasis }]"
        :style="weight ? { fontWeight: weight } : undefined"
    >{{ prefix }}<span>$</span><slot /></h3>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.price {
    span {
        color: $color-primary-dim;
    }
}

.price--lg {
    font-size: $font-size-lg;
}

.price--md {
    font-size: $font-size-md;
}

.price--emphasis {
    color: $color-black-light;
    font-weight: 500;
}
</style>
