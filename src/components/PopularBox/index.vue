<script setup lang="ts">
import Box from "@/components/Box/index.vue"
import Button from "@/components/Button/index.vue"
import LikeButton from "@/components/LikeButton/index.vue"
import Plus from "../svg/Plus.vue";
import Price from "@/components/Price/index.vue"
import rate from "@/assets/rate.png"

defineProps<{ social: ImageSource, mainImage: ImageSource, mainImageAlt: string, label: string, price: number | string }>()
</script>

<template>
    <Box variant="medium">
        <div class="popular-discount">
            <p>15% Off</p>
        </div>

        <LikeButton :icon="social" />

        <div class="popular-images">
            <div class="popular-image-placeholder">
                <img class="popular-image-hero" :src="mainImage" width="272" height="180" :alt="mainImageAlt">
            </div>
            <img class="popular-image-rate" :src="rate" width="136" height="24" alt="rate">
        </div>

        <div class="popular-content">
            <div class="popular-content-action">
                <div class="popular-content-action-info">
                    <p>{{ label }}</p>
                    <Price>{{ price }}</Price>
                </div>
                <Button variant="icon">
                    <Plus />
                </Button>
            </div>
        </div>
    </Box>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.popular-discount {
    position: absolute;
    left: 0;
    background-color: $color-danger;
    padding: 3px 17px;
    font-size: $font-size-md;
    color: $color-white;
    border-radius: 0 $radius-sm $radius-sm 0;
}

.popular-images {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 8px;
}

.popular-image-placeholder {
    width: 272px;
    height: 180px;
    margin: 0 auto;
}

.popular-image-hero {
    object-fit: cover;
    width: 100%;
}

.popular-content-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.popular-content-action-info {
    p {
        font-size: $font-size-md;
        font-weight: 500;
    }
}
</style>