<script setup lang="ts">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
<section class="bg-blue w-full relative">
  <div class="container pt-9 pb-12 flex flex-col items-center">
    <h2 class="text-yellow text-[42px] " style="font-family: 'Boeing'" >$INVBOE</h2>
    <h3 class="font-medium text-white text-4xl pt-9 text-center" style="-webkit-text-stroke: 1.8px #2D459B">Our Door is Wide Open for <mark class="text-yellow">$INVBOE</mark> Community.</h3>
   <div class="pt-3.5 gap-1.5 flex justify-center items-center">
     <BaseButton text="primary" bg="yellow"  icon-position="left" name-icon="telegramBlue" class="px-[18px]">Telegram</BaseButton>
     <BaseButton text="primary" bg="yellow" icon-position="left" name-icon="twitterBlue" class="px-[18px]">Twitter</BaseButton>
   </div>
    <h2 class="text-yellow text-[42px] pt-14" style="font-family: 'Boeing'">$INVBOE</h2>
  </div>
  <img src="/public/cloud-big.webp" alt="" class="absolute -right-72 -scale-x-100 -top-12">
  <img src="/public/cloud-big.webp" alt="" class="absolute -bottom-0 -left-60">

</section>
</template>
