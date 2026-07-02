<script setup lang="ts">
import Doughnut from "@/components/Doughnut/index.vue"
</script>

<template>
    <section class="main-voucher">
        <div class="main-voucher-text">
            <h2 class="main-voucher-title">Get Discount Voucher Up To 20% </h2>
            <p class="main-voucher-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt.</p>
        </div>
        <picture class="main-voucher-image">
            <img src="../../assets/woman.png" width="359" height="239" alt="woman holding two donuts smiling">
        </picture>

        <Doughnut position="left" />
        <Doughnut position="top" />
        <Doughnut position="right" />
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.main-voucher {
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0px 24px 0px 52px;
  border-radius: $radius-xl;
  background-color: $color-primary-dim;
  color: $color-white;
}

.main-voucher-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-voucher-title {
  max-width: 357px;
  font-size: $font-size-xl;
  padding-bottom: 16px;
}

.main-voucher-subtitle {
  max-width: 480px;
  font-size: $font-size-sm;
  font-weight: 400;
}

.main-voucher-text,
.main-voucher-image {
  z-index: 1;
}
</style>