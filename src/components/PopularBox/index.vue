<script setup lang="ts">
import DishCard from "@/components/DishCard/index.vue"
import Button from "@/components/Button/index.vue"
import Plus from "../svg/Plus.vue";
import rate from "@/assets/rate.png"

defineProps<{ likeIcon: ImageSource, mainImage: ImageSource, mainImageAlt: string, label: string, price: number | string }>()
</script>

<template>
    <DishCard :like-icon="likeIcon" :main-image="mainImage" :main-image-alt="mainImageAlt" :label="label" :price="price">
        <template #badge>
            <div class="popular-discount">
                <p>15% Off</p>
            </div>
        </template>

        <template #image>
            <div class="popular-images">
                <div class="popular-image-placeholder">
                    <img class="popular-image-hero" :src="mainImage" width="272" height="180" :alt="mainImageAlt">
                </div>
                <img class="popular-image-rate" :src="rate" width="136" height="24" alt="rate">
            </div>
        </template>

        <template #action>
            <Button variant="icon">
                <Plus />
            </Button>
        </template>
    </DishCard>
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
    @include flex-column($gap: 14px);
    margin-bottom: $spacing-sm;
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
</style>
