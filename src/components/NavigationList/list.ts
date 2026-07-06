import { type Component } from "vue";
import DashboardSvg from "@/components/svg/DashboardSvg.vue";
import FoodOrder from "@/components/svg/FoodOrder.vue";
import Favorite from "@/components/svg/Favorite.vue";
import Message from "@/components/svg/Message.vue";
import OrderHistory from "@/components/svg/OrderHistory.vue";
import Bills from "@/components/svg/Bills.vue";
import Setting from "@/components/svg/Setting.vue";

type NavItem = {
    label: string;
    icon: Component;
    href: string;
    active?: boolean;
}

export const navigationItems: NavItem[] = [
    { label: "Dashboard", icon: DashboardSvg, href: "", active: true },
    { label: "Food Order", icon: FoodOrder, href: "" },
    { label: "Favorite", icon: Favorite, href: "" },
    { label: "Message", icon: Message, href: "" },
    { label: "Order History", icon: OrderHistory, href: "" },
    { label: "Bills", icon: Bills, href: "" },
    { label: "Setting", icon: Setting, href: "" },
]