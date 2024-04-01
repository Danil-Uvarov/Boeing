<script setup lang="ts">
import IconLogo from "assets/icons/IconLogo.vue";
import IconTelegramBlack from "assets/icons/IconTelegramBlack.vue";
import IconTwitterBlack from "assets/icons/IconTwitterBlack.vue";
</script>

<template>
  <footer
    class="relative w-full bg-[url('/public/background-skye.webp')] bg-cover bg-no-repeat pb-20 pt-5 sm:pb-9 sm:pt-10"
  >
    <div
      class="container flex flex-col justify-between gap-10 sm:flex-row sm:gap-8"
    >
      <div class="flex max-w-[768px] flex-col gap-2">
        <IconLogo class="max-h-[42px] max-w-[178px]" />
        <p class="max-w-[358px] font-inter text-base font-semibold sm:w-full">
          GROK represents a new frontier in conversational AI technology,
          offering humor along with unparalleled intelligence.
        </p>
        <h5
          class="left-15 absolute bottom-8 font-inter text-base sm:static sm:text-white"
        >
          © $BOIENG 2023
        </h5>
      </div>
      <nav class="flex gap-8">
        <ul class="flex flex-col gap-3">
          <li>
            <NuxtLink to="https://t.me/inverseboeing">
              <IconTelegramBlack class="max-h-3 max-w-5" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://twitter.com/inverseboeing">
              <IconTwitterBlack class="max-h-3 max-w-3" />
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex flex-col gap-0.5">
          <li class="cursor-pointer font-inter font-semibold">
            <NuxtLink to="#Blow">Home</NuxtLink>
          </li>
          <li class="cursor-pointer font-inter font-semibold">
            <NuxtLink to="#About"> About</NuxtLink>
          </li>
          <li class="cursor-pointer font-inter font-semibold">
            <NuxtLink to="Tokenomics">Tokenomics</NuxtLink>
          </li>
          <li class="cursor-pointer font-inter font-semibold">
            <NuxtLink to="/buy">Buy</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
