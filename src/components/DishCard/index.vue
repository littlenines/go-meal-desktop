<script setup lang="ts">
import Box from "@/components/Box/index.vue"
import Price from "@/components/Price/index.vue"
import LikeButton from "@/components/LikeButton/index.vue"
import likedDefault from "@/assets/svg/liked-default.svg"

interface DishCardProps {
    likeIcon?: ImageSource
    mainImage: ImageSource
    mainImageAlt: string
    mainImageWidth?: string
    mainImageHeight?: string
    label: string
    price: string | number
}

const { likeIcon = likedDefault } = defineProps<DishCardProps>()
</script>

<template>
    <Box variant="medium">
        <slot name="badge" />
        <LikeButton :icon="likeIcon" />

        <slot name="image">
            <picture class="dish-image">
                <img :src="mainImage" :width="mainImageWidth" :height="mainImageHeight" :alt="mainImageAlt">
            </picture>
        </slot>

        <div class="dish-info">
            <div class="dish-info-row">
                <div class="dish-info-details">
                    <p class="dish-info-label">{{ label }}</p>
                    <Price>{{ price }}</Price>
                </div>
                <slot name="action" />
            </div>
            <slot name="meta" />
        </div>
    </Box>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.dish-image {
    width: 272px;
    height: 180px;
    margin: 0 auto;
    margin-bottom: 24px;

    img {
        object-fit: contain;
        margin: 0 auto;
    }
}

.dish-info {
    @include flex-column($gap: $spacing-sm);
}

.dish-info-row {
    @include flex-between(center);
}

.dish-info-details {
    @include flex-column;
}

.dish-info-label {
    font-size: $font-size-md;
    font-weight: 500;
}
</style>
