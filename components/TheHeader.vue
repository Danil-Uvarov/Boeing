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
    <img src="/boeing-logo.webp" alt="" class="w-full" />
    <nav class="hidden w-full gap-[32px] sm:flex">
      <ul class="gap-[32px w-full] flex items-center">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="cursor-pointer text-nowrap rounded-[32px] border-b-4 border-b-white px-4 py-1.5 font-inter text-2xl font-bold text-primary hover:border-b-blue hover:text-yellow"
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
      <MenuBurger class="sm:hidden" />
    </div>
  </header>
</template>
