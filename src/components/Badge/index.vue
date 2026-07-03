<script setup lang="ts">
defineProps<{ notify?: boolean }>()
</script>

<template>
    <button class="badge">
        <span v-if="notify">&bullet;</span>
        <slot />
    </button>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.badge {
    position: relative;

    span {
        position: absolute;
        color: $color-primary-dim;
        font-size: $font-size-badge-dot;
        top: -20px;
        right: 0;
    }
}
</style>
