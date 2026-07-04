<script setup lang="ts">
import Navigation from "@/components/Navigation/index.vue"
import Main from "@/components/Main/index.vue"
import MainVoucher from "@/components/MainVoucher/index.vue"
import MainCategory from "@/components/MainCategory/index.vue"
import MainPopularDishes from "@/components/MainPopularDishes/index.vue"
import MainOrders from "@/components/MainOrders/index.vue"
import MainSearch from "@/components/MainSearch/index.vue"

import CheckoutProfile from "@/components/CheckoutProfile/index.vue";
import Balance from "@/components/Balance/index.vue";
import Address from "@/components/Address/index.vue";
</script>

<template>
  <Navigation />
  <Main>
    <MainSearch class="mb-32" />

    <MainVoucher class="mb-40" />

    <MainCategory class="mb-40" />

    <MainPopularDishes class="mb-40" />

    <MainOrders />
  </Main>

  <aside class="checkout p-56-46">
    <CheckoutProfile class="mb-32" />

    <Balance class="mb-32" />

    <Address class="mb-32" />
  </aside>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.checkout {
  width: 455px;
}

</style>
