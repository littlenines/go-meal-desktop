<script setup lang="ts">
import type { Component } from "vue"

defineProps<{ icon: Component; label: string }>()
</script>

<template>
    <div class="balance-action">
        <div class="balance-action-badge">
            <component :is="icon" />
        </div>
        <span>{{ label }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.balance-action {
    text-align: center;

    span {
        font-size: $font-size-sm;
        color: $color-white;
        font-weight: 400;
    }
}

.balance-action-badge {
    border-radius: $radius-md;
    background-color: $color-white;
    color: $color-black-light;
    padding: 12px;
    margin-bottom: $spacing-md;
}
</style>
