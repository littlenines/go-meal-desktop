<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue"
import OrderMenuItem from "@/components/OrderMenuItem/index.vue"
import { OrderMenuItems } from "./menu"
</script>

<template>
    <ViewSection title="Order Menu" :hasLink="false">
        <ul class="order">
            <OrderMenuItem v-for="item in OrderMenuItems" :key="item.label" v-bind="item" />
        </ul>
    </ViewSection>
</template>

<style scoped lang="scss">
.order {
    width: 100%;

    :not(:last-child) {
        margin-bottom: 8px;
    }
}
</style>
