<script setup lang="ts">
import SearchInput from "@/components/SearchInput/index.vue"

const { name = "Wick" } = defineProps<{ name?: string }>();
</script>

<template>
    <section class="main-search">
        <h1 class="main-search-greeting">Hello, {{ name }}</h1>
        <SearchInput placeholder="What do you want to eat today..." />
    </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.main-search {
    @include flex-between;
}

.main-search-greeting {
    font-size: $font-size-2xl;
}
</style>
