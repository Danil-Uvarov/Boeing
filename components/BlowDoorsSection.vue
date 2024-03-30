<script setup lang="ts">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="flex flex-col container items-center  pb-[101px] bg-primary">
    <img src="/public/blow-doors-airplane.webp" loading="lazy" alt="" class="top-11">
    <h2 class="text-yellow   font-bold text-center text-4xl">
      Blow Your Doors Wide Open to $INVBOE
    </h2>
    <p class="text-center text-xs font-medium text-white pt-[18px]">
      Want to take off? Well Inverse Boeing Coin is here to help. Inverse Boeing is a coin based on base. We make
      traveling to space easy, you just have to remember one thing $INVBOE to Mars.
    </p>
    <div class="flex gap-2.5 pt-3.5">
      <BaseButton class=" px-3.5" text="primary" bg="white">TRADE</BaseButton>
      <BaseButton class=" px-3.5" text="white" bg=none  border  name-icon="telegram" icon-position="left">Telegram</BaseButton>
      <BaseButton class=" px-3.5" text="white" bg="none" border   name-icon="twitter" icon-position="left">Twitter</BaseButton>

    </div>
  </section>
</template>