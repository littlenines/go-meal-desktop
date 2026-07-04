<script setup lang="ts">
defineProps<{ label: string; amount: string | number }>()
</script>

<template>
    <div class="balance-info">
        <p class="balance-info-title">{{ label }}</p>
        <span class="balance-info-amount">{{ amount }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.balance-info {
    border-radius: $radius-md;
    background-color: $color-white;
    padding: 16px;
}

.balance-info-title {
    font-size: $font-size-sm;
}

.balance-info-amount {
    font-size: $font-size-xl;
    font-weight: 600;
}
</style>
