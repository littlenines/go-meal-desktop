<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue";
import OrderBox from "@/components/OrderBox/index.vue";
import { OrderItems } from "./orders";
</script>

<template>
    <ViewSection title="Recent Order">
        <OrderBox v-for="value in OrderItems" :key="value.label" v-bind="value"/>
    </ViewSection>
</template>
