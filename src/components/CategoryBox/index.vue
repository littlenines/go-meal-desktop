<script setup lang="ts">
import Box from "@/components/Box/index.vue"

defineProps<{ image: ImageSource, alt: string, label: string }>()
</script>

<template>
    <Box variant="small">
        <div class="category">
            <img :src="image" class="mb-16" width="56" height="56" :alt="alt">
            <p class="category-title">{{ label }}</p>
        </div>
    </Box>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.category {
    @include flex-column($align: center);
}

.category-title {
    font-size: $font-size-md;
    color: $color-text-dark;
}
</style>