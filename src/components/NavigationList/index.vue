<script setup lang="ts">
    import { NavigationItems } from './list';
</script>

<template>
    <ul class="navigation-list">
        <li v-for="value in NavigationItems" :key="value.label" :class="{ active: value.active }">
            <a :href="value.href"><component :is="value.icon" /> {{ value.label }}</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.navigation-list {
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    li {
        border-radius: $radius-xl;
        color: $color-text-dark;

        &:hover,
        &.active {
            background-color: $color-primary-dim;
            color: $color-white;
        }
    }

    li a {
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    li:not(:last-child) {
        margin-bottom: 16px;
    }
}
</style>