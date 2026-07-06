<script setup lang="ts">
import Price from "@/components/Price/index.vue"

defineProps<{ mainImage: ImageSource; mainImageAlt: string; label: string; quantity: string | number; price: string | number }>()
</script>

<template>
    <li class="order-item">
        <div class="order-item-info">
            <picture class="order-item-info-image">
                <img :src="mainImage" :alt="mainImageAlt">
            </picture>

            <div class="order-item-info-quantity">
                <p>{{ label }}</p>
                <span>{{ quantity }}</span>
            </div>
        </div>

        <Price size="md" emphasis :weight="600" prefix="+">{{ price }}</Price>
    </li>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.order-item {
    @include flex-between(center);
}

.order-item-info {
    @include flex-row(center, $spacing-md);
}

.order-item-info-image {
    width: 80px;

    img {
        object-fit: cover;
    }
}

.order-item-info-quantity {
    p {
        font-size: $font-size-md;
        font-weight: 600;
        color: $color-black-light;
        margin-bottom: 4px;
    }

    span {
        font-size: $font-size-sm;
        font-weight: 400;
        color: $color-text-dark;
    }
}

</style>
