<script setup lang="ts">

const { variant = 'default' } = defineProps<{ variant?: 'default' | 'primary', fullWidth?: boolean }>()

</script>

<template>
    <button :class="`button--${variant} ${fullWidth ? 'button--full' : ''}`">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.button--default {
    font-size: $font-size-sm;
    color: $color-black;
    font-weight: 600;
    padding: 10px 22px;
    background-color: $color-white;
    border-radius: 8px;
}

.button--primary {
    font-size: $font-size-md;
    color: $color-white;
    padding: 18px 22px;
    background-color: $color-primary-dim;
    border-radius: 8px;
}

.button--full {
    width: 100%;
}

</style>