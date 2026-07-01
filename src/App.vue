<script setup lang="ts">
import Navigation from "@/components/Navigation/index.vue"
import Doughnut from "@/components/Doughnut/index.vue"
</script>

<template>
  <Navigation />
  <main class="main">
    <section class="main-search">
      <h1 class="main-search-greeting">Hello, Wick</h1>
      <input type="text">
    </section>

    <section class="main-voucher">
      <div class="main-voucher-text">
        <h2 class="main-voucher-title">Get Discount Voucher Up To 20% </h2>
        <p class="main-voucher-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.</p>
      </div>
      <picture class="main-voucher-image">
        <img src="./assets/woman.png" alt="woman holding two donuts smiling">
      </picture>

      <Doughnut position="left" />
      <Doughnut position="top" />
      <Doughnut position="right" />
    </section>
  </main>

  <aside class="checkout"></aside>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.main {
  background-color: $color-bg;
  flex: 1;
  padding: 56px 40px;
}

.main-search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.main-search-greeting {
  font-size: $font-size-xl;
}

.main-voucher {
  position: relative;
  overflow: hidden;
  padding: 0px 24px 0px 52px;
  border-radius: 26px;
  background-color: $color-primary-dim;
  color: $color-white;
  display: flex;
  justify-content: space-between;
}

.main-voucher-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-voucher-title {
  max-width: 357px;
  font-size: $font-size-lg;
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

.checkout {
  width: 455px;
}
</style>
