<script setup lang="ts">
import Badge from "@/components/Badge/index.vue"
import { profileOptionItems } from "./options"
</script>

<template>
    <div class="profile-options">
        <Badge v-for="(item, index) in profileOptionItems" :key="index" :notify="item.notify">
            <component :is="item.icon" />
        </Badge>
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.profile-options {
    @include flex-row(center, 20px);
}
</style>
