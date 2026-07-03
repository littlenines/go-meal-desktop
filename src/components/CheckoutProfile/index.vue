<script setup lang="ts">
import ProfileOptions from "@/components/ProfileOptions/index.vue"
import placeholder from "@/assets/placeholder.png"
</script>

<template>
    <section class="checkout-profile">
        <ProfileOptions />
        <picture class="checkout-profile-image">
            <img :src="placeholder" width="60" height="60" alt="placeholder">
        </picture>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.checkout-profile {
    @include flex-between(center);
}

.checkout-profile-image {
    border-radius: $radius-md;

    img {
        border-radius: $radius-md;
    }
}
</style>
