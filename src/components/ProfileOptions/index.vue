<script setup lang="ts">
import Badge from "@/components/Badge/index.vue"
import { ProfileOptionItems } from "./options"
</script>

<template>
    <div class="profile-options">
        <Badge v-for="(item, index) in ProfileOptionItems" :key="index" :notify="item.notify">
            <component :is="item.icon" />
        </Badge>
    </div>
</template>

<style scoped lang="scss">
.profile-options {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>
