<script setup lang="ts">
const { viewAllLink = '#' } = defineProps<{ title: string, viewAllLink?: string }>();
</script>

<template>
    <section>
        <div class="view-text mb-24">
            <h3 class="view-text-label">{{ title }}</h3>
            <a :href="viewAllLink" class="view-text-all">View all <span>></span></a>
        </div>
        <div class="view-content">
            <slot />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.view-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.view-text-label {
    font-size: $font-size-lg;
}

.view-text-all {
    font-size: $font-size-md;
    font-weight: 500;
    color: $color-primary-dim;
}

.view-content {
    display: flex;
    align-items: center;
    gap: 16px;
}
</style>