<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue"
import DecorativeCircle from "@/components/DecorativeCircle/index.vue"
import BalanceInfo from "@/components/BalanceInfo/index.vue"
import BalanceAction from "@/components/BalanceAction/index.vue"
import { balanceActions } from "./balance";
</script>

<template>
    <ViewSection title="Your Balance" :hasLink="false">
        <div class="balance">
            <DecorativeCircle variant="danger" top="-40px" left="-110px" />
            <DecorativeCircle variant="success" bottom="-168px" left="-25px" />

            <BalanceInfo label="Balance" amount="$12.000" />
            <BalanceAction v-for="(action, index) in balanceActions" :key="index" v-bind="action" />
        </div>
    </ViewSection>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as *;

.balance {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding: 32px;
    border-radius: $radius-md;
    background-color: $color-primary-dim;
    width: 100%;

    @include flex-between;
}
</style>
