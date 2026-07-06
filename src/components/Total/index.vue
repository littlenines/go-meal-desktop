<script setup lang="ts">
import Price from "@/components/Price/index.vue"
</script>

<template>
    <section class="total">
        <ul class="total-info">
            <li class="total-info-item">
                <p class="total-info-service">Service</p>
                <Price size="md" emphasis prefix="+">1.00</Price>
            </li>
            <li class="total-info-item">
                <p class="total-info-total">Total</p>
                <Price size="lg" emphasis>202.00</Price>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.total {
    width: 100%;
}

.total-info-item {
    @include flex-between(center);

    &:not(:last-child) {
        margin-bottom: 24px;
    }
}

.total-info-service {
    font-size: $font-size-sm;
    color: $color-text-dark;
}

.total-info-total {
    font-size: $font-size-md;
    color: $color-black-light;
    font-weight: 500;
}
</style>
