<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue";
import OrderBox from "@/components/OrderBox/index.vue";
import { orderItems } from "./orders";
</script>

<template>
    <ViewSection title="Recent Order">
        <OrderBox v-for="value in orderItems" :key="value.label" v-bind="value"/>
    </ViewSection>
</template>
