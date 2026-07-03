<script setup lang="ts">
import DishCard from "@/components/DishCard/index.vue";

interface OrderBoxProps {
  likeIcon?: ImageSource;
  mainImage: ImageSource;
  mainImageAlt: string;
  mainImageWidth: string;
  mainImageHeight: string;
  label: string;
  price: string | number;
  km: string | number;
  time: string | number;
}

defineProps<OrderBoxProps>();
</script>

<template>
  <DishCard
    :like-icon="likeIcon"
    :main-image="mainImage"
    :main-image-alt="mainImageAlt"
    :main-image-width="mainImageWidth"
    :main-image-height="mainImageHeight"
    :label="label"
    :price="price"
  >
    <template #meta>
      <span class="order-meta">{{ km }} km &bullet; {{ time }} min</span>
    </template>
  </DishCard>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

:deep(.dish-info) {
  align-items: center;
  justify-content: center;
}

:deep(.dish-info-row) {
  justify-content: center;
}

:deep(.dish-info-details) {
  align-items: center;
  gap: $spacing-sm;
}

.order-meta {
  font-size: $font-size-md;
  color: $color-text-dark;
}
</style>
