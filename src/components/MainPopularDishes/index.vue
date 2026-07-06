<script setup lang="ts">
import ViewSection from "@/components/ViewSection/index.vue";
import PopularBox from "@/components/PopularBox/index.vue"

import liked from "@/assets/svg/liked.svg"
import likedDefault from "@/assets/svg/liked-default.svg"

import fishBurger from "@/assets/burger1.png"
import beefBurger from "@/assets/burger2.png"
import cheeseBurger from "@/assets/burger3.png"

type PopularItem = {likeIcon: ImageSource, mainImage: ImageSource, mainImageAlt: string, label: string, price: number | string};

const popularItems: PopularItem[] = [
    {likeIcon: liked, mainImage: fishBurger, mainImageAlt: 'fish burger', label: 'Fish Burger', price: 5.59},
    {likeIcon: likedDefault, mainImage: beefBurger, mainImageAlt: 'beef burger', label: 'Beef Burger', price: 5.59},
    {likeIcon: likedDefault, mainImage: cheeseBurger, mainImageAlt: 'cheese burger', label: 'Cheese Burger', price: 5.59},
]
</script>

<template>
<ViewSection title="Popular Dishes">
    <PopularBox v-for="item in popularItems" :key="item.label" v-bind="item" />
</ViewSection>
</template>
