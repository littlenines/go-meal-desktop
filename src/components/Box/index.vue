<script setup lang="ts">
defineProps<{ variant?: 'small' | 'medium' }>();
</script>

<template>
    <div class="box" :class="variant ? `box--${variant}` : ''">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.box {
    position: relative;
    padding: 32px;
    background-color: $color-white;
    border-radius: $radius-md;
    flex: 1;
}

.box--small {
    min-width: 160px;
    min-height: 160px;
}

.box--medium {
    min-width: 337px;
    max-height: 363px;
}
</style>