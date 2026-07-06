import { type Component } from "vue";
import Dashboard from "@/components/svg/DashboardSvg.vue";
import Bell from "@/components/svg/Bell.vue";
import Settings from "@/components/svg/Setting.vue";

type ProfileOption = {
    icon: Component;
    notify?: boolean;
};

export const profileOptionItems: ProfileOption[] = [
    { icon: Dashboard, notify: true },
    { icon: Bell, notify: true },
    { icon: Settings },
];
