<script setup lang="ts">
import Search from "@/components/svg/Search.vue"

defineProps<{ placeholder?: string }>()
</script>

<template>
    <label class="search-input">
        <Search class="search-input-icon" />
        <input type="text" :placeholder="placeholder">
    </label>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.search-input {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 513px;
    padding: 16px 28px;
    border-radius: $radius-md;
    background-color: $color-white;

    input {
        width: 100%;
        border: none;
        outline: none;
        background: none;
        font-size: $font-size-md;
        color: $color-text-dark;

        &::placeholder {
            color: $color-text-dark;
        }
    }
}

.search-input-icon {
    flex-shrink: 0;
    color: $color-primary;
}
</style>
