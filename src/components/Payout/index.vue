<script setup lang="ts">
import Coupon from "@/components/svg/Coupon.vue"
import ChevronRight from "@/components/svg/ChevronRight.vue"
import Button from "@/components/Button/index.vue"
</script>

<template>
    <section class="payout">
        <div class="payout-coupon">
            <div class="payout-coupon-svg">
                <Coupon />
            </div>
            <p class="payout-coupon-title">Have a coupon code?</p>
            <ChevronRight />
        </div>
        <Button variant="primary" full-width>Checkout</Button>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.payout {
    @include flex-column($gap: 32px);
}

.payout-coupon {
    @include flex-between(center);
    color: $color-black-light;
    background-color: $color-bg;
    border: 1px solid $color-primary-dim;
    border-radius: $radius-md;
    padding: 12px 50px;
    cursor: pointer;
}

.payout-coupon-svg {
    padding: 4px;
    border-radius: $radius-icon-badge;
    background-color: $color-primary-dim;
}

.payout-coupon-title {
    font-size: $font-size-sm;
    font-weight: 500;
    color: $color-black-light;
}
</style>
