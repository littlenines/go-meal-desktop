<script setup lang="ts">
import Navigation from "@/components/Navigation/index.vue"
import MainVoucher from "@/components/MainVoucher/index.vue"
import MainCategory from "@/components/MainCategory/index.vue"
import MainPopularDishes from "@/components/MainPopularDishes/index.vue"
import MainOrders from "@/components/MainOrders/index.vue"
import MainSearch from "@/components/MainSearch/index.vue"

</script>

<template>
  <Navigation />
  <main class="main">
    <MainSearch class="mb-32"/>

    <MainVoucher class="mb-40" />

    <MainCategory class="mb-40" />

    <MainPopularDishes class="mb-40" />

    <MainOrders />
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

.checkout {
  width: 455px;
}
</style>
