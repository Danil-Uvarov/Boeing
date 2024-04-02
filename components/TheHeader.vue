<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import ButtonBurger from "~/components/ui/ButtonBurger.vue";
import { ref } from "vue";
import MenuBurger from "~/components/ui/MenuBurger.vue";

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
    to: "#Roadmap",
    name: "Roadmap",
  },
  {
    to: "#Community",
    name: "Community",
  },
];

defineEmits(["openBurger"]);

const burger = ref(false);
</script>

<template>
  <header
    class="fixed z-50 max-h-[40px] w-full bg-white sm:max-h-[72px] lg:max-h-[95px]"
  >
    <div
      class="container z-40 flex max-h-[40px] w-full items-center justify-center gap-4 py-[10px] sm:max-h-[72px] sm:gap-[142px] sm:py-[30px] lg:max-h-[95px] lg:gap-[16px] 2xl:gap-[38px]"
    >
      <NuxtLink to="#Blow" class="mr-auto lg:mr-0">
        <img
          loading="lazy"
          src="/boeing-logo.webp"
          alt=""
          class="h-full w-full max-w-[134px] cursor-pointer object-contain lg:max-w-[118px] 2xl:max-h-[42px] 2xl:max-w-[178px]"
        />
      </NuxtLink>
      <nav class="hidden w-full lg:flex">
        <ul class="flex w-full items-center justify-center">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="cursor-pointer text-nowrap rounded-[32px] border-b-4 border-b-white px-1.5 py-1.5 font-inter text-sm font-bold text-primary hover:border-b-blue hover:text-yellow xl:text-xl 2xl:px-3 2xl:text-2xl"
          >
            <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-8">
        <NuxtLink to="/buy">
          <BaseButton
            text="primary"
            bg="yellow"
            class="max-h-7 text-nowrap px-3.5 sm:px-6 sm:py-1.5"
          >
            Buy Now
          </BaseButton>
        </NuxtLink>
        <ButtonBurger class="lg:hidden" @click="burger = !burger" />
        <MenuBurger v-if="burger" v-model="burger" :links="links" />
      </div>
    </div>
  </header>
</template>
