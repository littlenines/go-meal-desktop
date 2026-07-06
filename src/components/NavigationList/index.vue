<script setup lang="ts">
    import { navigationItems } from './list';
</script>

<template>
    <ul class="navigation-list">
        <li v-for="value in navigationItems" :key="value.label" :class="{ active: value.active }">
            <a :href="value.href"><component :is="value.icon" /> {{ value.label }}</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.navigation-list {
    font-size: $font-size-md;
    @include flex-column;
    margin-bottom: 56px;

    li {
        border-radius: $radius-md;
        color: $color-text-dark;

        &:hover,
        &.active {
            background-color: $color-primary-dim;
            color: $color-white;
        }
    }

    li a {
        padding: 12px 24px;
        @include flex-row(center, 24px);
    }

    li:not(:last-child) {
        margin-bottom: $spacing-md;
    }
}
</style>