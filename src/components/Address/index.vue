<script setup lang="ts">
import Location from "@/components/svg/Location.vue"
import Button from "@/components/Button/index.vue"
</script>

<template>
    <section class="address">
        <p class="address-title">Your Address</p>

        <div class="address-street">
            <h4><span><Location /></span>Elm Street, 23</h4>
            <Button variant="outline-primary">Change</Button>
        </div>

        <p class="address-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

        <div class="address-actions">
            <Button variant="outline-default">Add Details</Button>
            <Button variant="outline-default">Add Note</Button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.address {
    font-size: $font-size-md;
    color: $color-text-dark;
}

.address-title {
    margin-bottom: 8px;
}

.address-street {
    @include flex-between(center);
    margin-bottom: 8px;

    h4 {
        font-size: $font-size-md;
        display: flex;
        align-items: center;
        color: $color-black-light;

        span {
            margin-right: 8px;
        }
    }
}

.address-description {
    font-size: $font-size-sm;
    font-weight: 400;
    margin-bottom: 16px;
}

.address-actions {
    display: flex;
    gap: 16px;
}
</style>
