<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="relative">
    <div class="container w-full pt-20">
      <div
        class="flex flex-col items-center rounded-[28px] bg-blue pb-12 pt-9 sm:flex-row sm:items-start sm:gap-[56px]"
      >
        <div class="px-[2rem] sm:max-w-[302px]">
          <h2 class="text-center text-4xl font-bold text-white sm:text-start">
            Tokenomics
          </h2>
          <p
            class="pt-3 text-center font-inter text-xs text-white sm:text-start sm:text-base"
          >
            Understanding
            <mark class="font-extrabold text-white"> Inverse Boeing</mark>
            Tokenomics.
            <mark class="font-extrabold text-white"> Inverse Boeing</mark>
            won’t malfunction we are going to the moon and back.
          </p>
        </div>
        <img
          src="/public/tokenomics-boeing.webp"
          alt=""
          class="sm:bottom-18 h-full w-full scale-x-110 object-contain sm:absolute sm:-left-32 sm:max-h-[94px] sm:max-w-[240px]"
        />
        <div
          class="flex flex-col items-center px-[2rem] sm:max-w-[488px] sm:items-start"
        >
          <p
            class="pt-6 text-center font-inter text-xs text-white sm:pt-0 sm:text-start sm:text-lg"
          >
            <mark class="font-extrabold text-white">Inverse Boeing</mark>
            operates on Base and is made for the community to interact with. Our
            tokenomics model ensures smooth accessibility to
            <mark class="font-extrabold text-white">$INVBOE’s</mark>
            various features and services, empowering users to enjoy a the
            luxury life of
            <mark class="font-extrabold text-white">INVERSE BOEING.</mark>
          </p>
          <BaseButton
            text="white"
            icon-position="right"
            name-icon="learnMore"
            border
            class="mt-8 max-w-[122px]"
            >Learn More
          </BaseButton>
        </div>
      </div>
    </div>
    <img
      src="/public/cloud-big.webp"
      class="absolute -right-[200px] -top-[80px] sm:hidden"
      alt=""
    />
    <img
      src="/public/cloud-big.webp"
      class="absolute -bottom-[50px] -left-[260px] sm:hidden"
      alt=""
    />
  </section>
</template>
