<script setup lang="ts">

import BoeingTitle from "assets/icons/BoeingTitle.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="relative w-full">
    <img src="/public/background-skye.webp" alt="" class="absolute inset-0 h-full w-full object-cover">
    <div class="flex flex-col items-center container pb-28 relative">
    <img src="/public/wtf-airplane.webp" loading="lazy" alt="" class="max-w-[246px] max-h-[184px] -mt-4 z-0">
    <div class="py-[30px]  -mt-5 bg-sky rounded-[28px] px-[2rem] flex flex-col items-center">
      <h2 class="font-bold text-4xl text-primary text-center ">WTF IS UP WITH
        <BoeingTitle class="inline w-[167px] h-[31px]"/>
        <span> ?</span></h2>
      <h3 class="pt-4 font-black text-primary text-nowrap text-xs " style="font-family:'Inter'">Don’t risk your life fly <mark
          style="-webkit-text-stroke: 0.5px #0033A1" class="text-yellow "> $INVBOE</mark> Instead.</h3>
      <p class="pt-3.5 text-[8px] text-center" style="font-family:'Inter'">But it’s more than just a coin, it’s tokenized winning. <mark class="font-bold">$INVBOE</mark> is effortless domination of the sky, Inverse
        Boeing is nothing like Boeing we <mark class="font-bold">open our doors</mark> for <mark class="font-bold">profits</mark> not losses. The only whistleblowing our investors
        will be doing is blowing whistles of joy and happiness during take off. We Believe that we truly crafted
        something that is set to only take off. The sky is the limit see you up there with he stars! </p>
      <BaseButton text="primary" class="  max-w-[145px] mt-7 text-nowrap text-xs font-bold" bg="yellow">MORE ABOUT $INVBOE</BaseButton>
    </div>
<img src="/public/cloud-big.webp" alt="" class="absolute -bottom-14 -left-[190px] z-10 w-[406px] h-[268px] "/>
 </div>
  </section>
</template>
