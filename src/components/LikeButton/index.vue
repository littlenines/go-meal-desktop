<script setup lang="ts">
defineProps<{ icon: ImageSource }>()
</script>

<template>
    <img class="like-button" width="24" height="24" :src="icon" alt="heart">
</template>

<style scoped lang="scss">
.like-button {
    position: absolute;
    right: 32px;
}
</style>
