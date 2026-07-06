<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue";
import CategoryBox from "@/components/CategoryBox/index.vue";
import { categoryItems } from "./categories";
</script>

<template>
  <ViewSection title="Category">
    <CategoryBox
      v-for="value in categoryItems"
      :key="value.label"
      :image="value.image"
      :alt="value.alt"
      :label="value.label"
    />
  </ViewSection>
</template>
