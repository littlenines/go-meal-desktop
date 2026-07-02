<script setup lang="ts">
import Navigation from "@/components/Navigation/index.vue"
import MainVoucher from "@/components/MainVoucher/index.vue"
import MainCategory from "@/components/MainCategory/index.vue"
import MainPopularDishes from "@/components/MainPopularDishes/index.vue"
</script>

<template>
  <Navigation />
  <main class="main">
    <section class="main-search">
      <h1 class="main-search-greeting">Hello, Wick</h1>
      <input type="text">
    </section>

    <MainVoucher class="mb-40" />

    <MainCategory class="mb-40" />

    <MainPopularDishes class="mb-40" />

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
  font-size: $font-size-2xl;
}

.checkout {
  width: 455px;
}
</style>
