<script setup lang="ts">

const { variant = 'default' } = defineProps<{ variant?: 'default' | 'primary' | 'icon' | 'outline-primary' | 'outline-default', fullWidth?: boolean }>()

</script>

<template>
    <button class="button" :class="`button--${variant} ${fullWidth ? 'button--full' : ''}`">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.button {
    border-radius: $radius-sm;
}

.button--default {
    font-size: $font-size-sm;
    color: $color-black;
    font-weight: 600;
    padding: 10px 22px;
    background-color: $color-white;
}

.button--primary {
    font-size: $font-size-md;
    color: $color-white;
    padding: 18px 22px;
    background-color: $color-primary-dim;
    border-radius: $radius-md;
}

.button--outline-primary {
    font-size: 1.4rem;
    color: $color-primary-dim;
    border: 1px solid $color-primary-dim;
    padding: 4px 18px;
    background-color: transparent;
}

.button--outline-default {
    font-size: 1.4rem;
    color: $color-black-light;
    border: 1px solid $color-text-dark;
    padding: 4px 18px;
    background-color: transparent;
}

.button--icon {
    width: 48px;
    height: 48px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white;
    background-color: $color-primary-dim;
}

.button--full {
    width: 100%;
}

</style>