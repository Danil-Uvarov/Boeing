<script setup lang="ts">
import IconLogo from 'assets/icons/IconLogo.vue'
import BaseButton from "~/components/ui/BaseButton.vue";
import MenuBurger from "~/components/ui/MenuBurger.vue";

const links = [
  {
    to: '',
    name: 'Home'
  }, {
    to: '',
    name: 'About $INVBOE'
  }, {
    to: '',
    name: 'News'
  }, {
    to: '',
    name: 'How To Buy'
  }, {
    to: '',
    name: 'Tokenomics'
  }, {
    to: '',
    name: 'Roadmap'
  }, {
    to: '',
    name: 'Community'
  }
]
</script>

<template>
  <header class="flex gap-[67px] w-full items-center py-[30px] justify-center container ">
   <img src="/boeing-logo.webp" alt=""/>
    <nav class="sm:flex hidden gap-[32px]">
      <div class="font-inter py-1.5 border-2  border-b-primary text-2xl px-4 bg-white text-yellow font-bold"
          style="-webkit-text-stroke: 1px #0033A1">
        <NuxtLink to="">Home</NuxtLink>
      </div>
      <ul class="flex items-center gap-[32px]" v-for="(link, index) in links" :key="index">
        <li class="text-nowrap font-inter font-bold text-primary text-2xl">
          <NuxtLink :to="link.to">{{link.name}}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex gap-8 items-center">
      <BaseButton text="primary" bg="yellow" class="px-3.5 max-h-7 text-nowrap">Buy Now</BaseButton>
      <MenuBurger class="sm:hidden"/>
    </div>
  </header>
</template>
