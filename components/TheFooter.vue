<script setup lang="ts">
import IconLogo from "assets/icons/IconLogo.vue";
import IconTelegramBlack from "assets/icons/IconTelegramBlack.vue";
import IconTwitterBlack from "assets/icons/IconTwitterBlack.vue";
</script>

<template>
  <footer
    class="w-full bg-[url('/public/background-skye.webp')] bg-cover bg-no-repeat pb-2.5 pt-5 sm:pb-9 sm:pt-10"
  >
    <div class="container flex justify-between">
      <div class="flex max-w-[768px] flex-col gap-2">
        <IconLogo class="max-h-[42px] max-w-[178px]" />
        <p class="font-inter text-[8px] font-semibold sm:text-base">
          GROK represents a new frontier in conversational AI technology,
          offering humor along with unparalleled intelligence.
        </p>
        <h5 class="font-inter text-[8px] text-white sm:text-base">
          © $BOIENG 2023
        </h5>
      </div>
      <nav class="flex gap-8">
        <ul class="flex flex-col gap-3">
          <li>
            <IconTelegramBlack class="max-h-3 max-w-5" />
          </li>
          <li>
            <IconTwitterBlack class="max-h-3 max-w-3" />
          </li>
        </ul>
        <ul class="flex flex-col gap-0.5">
          <li class="font-inter font-semibold">Home</li>
          <li class="font-inter font-semibold">About</li>
          <li class="font-inter font-semibold">Tokenomics</li>
          <li class="font-inter font-semibold">Buy</li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
