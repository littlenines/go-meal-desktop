<template>
    <h3 class="price"><span>$</span><slot/></h3>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.price {
    font-size: $font-size-lg;

    span {
        color: $color-primary-dim;
    }
}
</style>