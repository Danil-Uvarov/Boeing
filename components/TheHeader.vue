<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import MenuBurger from "~/components/ui/MenuBurger.vue";
import { ref } from "vue";

const links = [
  {
    to: "#Blow",
    name: "Home",
  },
  {
    to: "#About",
    name: "About $INVBOE",
  },
  {
    to: "#News",
    name: "News",
  },
  {
    to: "#How",
    name: "How To Buy",
  },
  {
    to: "#Tokenomics",
    name: "Tokenomics",
  },
  {
    to: "",
    name: "Roadmap",
  },
  {
    to: "#Community",
    name: "Community",
  },
];
const open = ref(false);
</script>

<template>
  <header class="fixed z-50 w-full bg-white">
    <div
      class="container z-40 flex max-h-[72px] w-full items-center justify-center gap-[98px] py-[30px] sm:gap-[142px] lg:max-h-[95px] lg:gap-[16px] 2xl:gap-[38px]"
    >
      <img
        src="/boeing-logo.webp"
        alt=""
        class="h-full w-full max-w-[138px] object-contain lg:max-w-[118px] 2xl:max-h-[42px] 2xl:max-w-[178px]"
      />
      <nav class="hidden w-full lg:flex">
        <ul class="flex w-full items-center">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="cursor-pointer text-nowrap rounded-[32px] border-b-4 border-b-white px-1.5 py-1.5 font-inter text-xl font-bold text-primary hover:border-b-blue hover:text-yellow 2xl:px-3 2xl:text-2xl"
          >
            <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-8">
        <BaseButton
          text="primary"
          bg="yellow"
          class="max-h-7 text-nowrap px-3.5 sm:px-6 sm:py-1.5"
        >
          Buy Now
        </BaseButton>
        <MenuBurger class="lg:hidden" @click="open = !open" />
      </div>
      <ul
        class="absolute inset-x-0 top-[100%] w-full rounded-b-2xl bg-white pb-6"
        v-if="open"
      >
        <li
          v-for="(link, index) in links"
          :key="index"
          class="px-4 py-3 font-inter font-semibold"
        >
          <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
