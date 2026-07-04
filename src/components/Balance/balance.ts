import type { Component } from "vue"
import Income from "@/components/svg/Income.vue"
import Profit from "@/components/svg/Profit.vue"

type BalanceActionItem = { icon: Component; label: string }

export const balanceActions: BalanceActionItem[] = [
    { icon: Income, label: "Top Up" },
    { icon: Profit, label: "Top Up" },
]