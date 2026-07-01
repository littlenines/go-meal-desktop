<script setup lang="ts">
defineProps<{
  position: 'left' | 'top' | 'right'
}>()
</script>

<template>
  <div class="doughnut" :class="`doughnut--${position}`" />
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.doughnut {
  position: absolute;
  width: 285px;
  height: 255px;
  border-radius: 50%;
  border: 50px solid $color-white-25;
}

.doughnut--left {
  bottom: -150px;
  left: -120px;
}

.doughnut--right {
  bottom: -110px;
  right: -120px;
}

.doughnut--top {
  top: -135px;
  right: 185px;
}
</style>
