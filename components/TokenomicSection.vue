<script setup lang="ts">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="relative">
    <div class="container w-full pt-20" >
      <div class="bg-blue rounded-[28px]  pt-9 pb-12  flex flex-col items-center">
        <div class="px-[2rem]">
          <h2 class="font-bold text-4xl text-white text-center">
            Tokenomics
          </h2>
          <p class="text-xs pt-3 text-center text-white" style="font-family:'Inter'" >Understanding
            <mark class="font-extrabold text-white" > Inverse Boeing</mark>
            Tokenomics.
            <mark class="font-extrabold text-white"> Inverse Boeing</mark>
            won’t malfunction we are going to the moon and back.
          </p>
        </div>
        <img src="/public/tokenomics-boeing.webp" alt="" class=" w-full scale-x-110 h-full ">
        <div class="px-[2rem] flex flex-col items-center" >
          <p class="text-xs pt-6 text-center text-white" style="font-family:'Inter'">
            <mark class="font-extrabold text-white">Inverse Boeing</mark>
            operates on Base and is made for the community to interact with. Our tokenomics model ensures
            smooth accessibility to
            <mark class="font-extrabold text-white">$INVBOE’s</mark>
            various features and services, empowering users to enjoy a the luxury life of
            <mark class="font-extrabold text-white">INVERSE BOEING.</mark>
          </p>
          <BaseButton text="white" icon-position="right" name-icon="learnMore" border class="mt-8 max-w-[122px]">Learn More</BaseButton>
        </div>
      </div>
    </div>
    <img src="/public/cloud-big.webp" class="absolute -right-[200px] -top-[80px]" alt="">
    <img src="/public/cloud-big.webp" class="absolute -bottom-[50px] -left-[260px]" alt="">
  </section>
</template>
