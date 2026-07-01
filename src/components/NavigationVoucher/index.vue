<script lang="ts" setup>
import VoucherDots from "@/components/svg/VoucherDots.vue";
import Button from "@/components/Button/index.vue";
</script>

<template>
    <div class="navigation-voucher">
        <VoucherDots class="navigation-voucher-dots" />
        <div class="navigation-voucher-text">
            <h4>Upgrade your Account to Get Free Voucher</h4>
        </div>
        <Button>Upgrade</Button>
        <span class="navigation-ellipse"></span>
    </div>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.navigation-voucher {
    position: relative;
    border-radius: 22px;
    width: 252px;
    height: 202px;
    overflow: hidden;
    background: $gradient-voucher;
    box-shadow: $shadow-voucher;
    padding: 32px;
    text-align: left;
}

.navigation-voucher-dots {
    position: absolute;
    top: 23px;
    right: 14px;
}

.navigation-ellipse {
    position: absolute;
    right: -60px;
    bottom: -60px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: $gradient-voucher-glow;
}

.navigation-voucher-text {
    text-align: left;
    font-size: 1.8rem;
    color: $color-white;
    margin-bottom: 16px;
}
</style>