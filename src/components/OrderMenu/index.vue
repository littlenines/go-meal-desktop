<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue"
import OrderMenuItem from "@/components/OrderMenuItem/index.vue"
import { orderMenuItems } from "./menu"
</script>

<template>
    <ViewSection title="Order Menu" :hasLink="false">
        <ul class="order">
            <OrderMenuItem v-for="item in orderMenuItems" :key="item.label" v-bind="item" />
        </ul>
    </ViewSection>
</template>

<style scoped lang="scss">
@use "@/styles/abstracts" as *;

.order {
    width: 100%;

    :not(:last-child) {
        margin-bottom: $spacing-sm;
    }
}
</style>
