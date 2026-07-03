<script setup lang="ts">
import Box from "@/components/Box/index.vue"
import Price from "@/components/Price/index.vue"
import LikeButton from "@/components/LikeButton/index.vue"
import likedDefault from "@/assets/svg/liked-default.svg"

interface OrderBoxProps {
    likeIcon?: ImageSource
    mainImage: ImageSource
    mainImageAlt: string
    mainImageWidth: string
    mainImageHeight: string
    label: string
    price: string | number
    km: string | number
    time: string | number
}

const { likeIcon = likedDefault } = defineProps<OrderBoxProps>()

</script>

<template>
    <Box variant="medium">
        <LikeButton :icon="likeIcon" />
        <picture class="order-image">
            <img :src="mainImage" :width="mainImageWidth" :height="mainImageHeight" :alt="mainImageAlt">
        </picture>

        <div class="order-info">
            <p class="order-info-title">
                {{ label }}
            </p>
            <Price>{{ price }}</Price>
            <span class="order-info-meta">{{ km }} km &bullet; {{ time }} min</span>
        </div>
    </Box>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.order-image {
    width: 272px;
    height: 180px;
    margin: 0 auto;
    margin-bottom: 24px;

    img {
        object-fit: contain;
        margin: 0 auto;
    }
}

.order-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.order-info-title {
    font-size: $font-size-md;
}

.order-info-meta {
    font-size: $font-size-md;
    color: $color-text-dark;
}
</style>