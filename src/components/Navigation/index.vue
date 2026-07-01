<script setup lang="ts">
import NavigationList from "@/components/NavigationList/index.vue"
import NavigationVoucher from "@/components/NavigationVoucher/index.vue"
</script>

<template>
  <nav class="navigation">
    <h1 class="navigation-title">GoMeal<span>.</span></h1>
    <NavigationList/>
    <NavigationVoucher/>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.navigation {
  width: 345px;
  background-color: $color-white;
  text-align: center;
  padding: 56px 46px;
}

.navigation-title {
  font-weight: 700;
  font-size: $font-size-2xl;
  margin-bottom: 62px;

  span {
    color: $color-primary;
  }
}
</style>
