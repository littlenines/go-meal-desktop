<script setup lang="ts">
import CheckoutProfile from "@/components/CheckoutProfile/index.vue"
import Balance from "@/components/Balance/index.vue"
import Address from "@/components/Address/index.vue"
import OrderMenu from "@/components/OrderMenu/index.vue"
import Divider from "@/components/Divider/index.vue"
import Total from "@/components/Total/index.vue"
import Payout from "@/components/Payout/index.vue"
</script>

<template>
    <aside class="checkout p-56-46">
        <CheckoutProfile class="mb-32" />

        <Balance class="mb-32" />

        <Address class="mb-32" />

        <OrderMenu class="mb-80" />

        <Divider class="mb-32" />

        <Total class="mb-40" />

        <Payout />
    </aside>
</template>

<style lang="scss" scoped>
.checkout {
    width: 455px;
}
</style>
