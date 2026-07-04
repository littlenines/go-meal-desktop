<script setup lang="ts">
interface DecorativeCircleProps {
    variant: 'danger' | 'success'
    top?: string
    right?: string
    bottom?: string
    left?: string
}

defineProps<DecorativeCircleProps>()
</script>

<template>
    <span class="decorative-circle" :class="`decorative-circle--${variant}`" :style="{ top, right, bottom, left }"/>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.decorative-circle {
    position: absolute;
    z-index: -1;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    opacity: 0.5;
}

.decorative-circle--danger {
    background-color: $color-danger;
}

.decorative-circle--success {
    background-color: $color-success;
}
</style>
