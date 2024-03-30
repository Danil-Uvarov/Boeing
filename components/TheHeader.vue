<script setup lang="ts">
import IconLogo from "assets/icons/IconLogo.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
import MenuBurger from "~/components/ui/MenuBurger.vue";

const links = [
  {
    to: "",
    name: "Home",
  },
  {
    to: "",
    name: "About $INVBOE",
  },
  {
    to: "",
    name: "News",
  },
  {
    to: "",
    name: "How To Buy",
  },
  {
    to: "",
    name: "Tokenomics",
  },
  {
    to: "",
    name: "Roadmap",
  },
  {
    to: "",
    name: "Community",
  },
];
</script>

<template>
  <header
    class="container flex w-full items-center justify-center gap-[67px] py-[30px]"
  >
    <img src="/boeing-logo.webp" alt="" />
    <nav class="hidden gap-[32px] sm:flex">
      <div
        class="border-2 border-b-primary bg-white px-4 py-1.5 font-inter text-2xl font-bold text-yellow"
        style="-webkit-text-stroke: 1px #0033a1"
      >
        <NuxtLink to="">Home</NuxtLink>
      </div>
      <ul
        class="flex items-center gap-[32px]"
        v-for="(link, index) in links"
        :key="index"
      >
        <li class="text-nowrap font-inter text-2xl font-bold text-primary">
          <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-8">
      <BaseButton text="primary" bg="yellow" class="max-h-7 text-nowrap px-3.5"
        >Buy Now</BaseButton
      >
      <MenuBurger class="sm:hidden" />
    </div>
  </header>
</template>
