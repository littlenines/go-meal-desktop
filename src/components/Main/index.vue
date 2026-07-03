<template>
    <main class="main">
        <slot />
    </main>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.main {
    background-color: $color-bg;
    flex: 1;
    padding: 56px 40px;
}
</style>
