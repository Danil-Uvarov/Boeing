<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="relative">
    <div class="container w-full pt-20">
      <div
        class="flex flex-col items-center rounded-[28px] bg-blue pb-12 pt-9 md:flex-row md:items-start md:gap-[56px]"
      >
        <div class="px-[2rem] md:max-w-[302px]">
          <h2 class="text-center text-4xl font-bold text-white md:text-start">
            Tokenomics
          </h2>
          <p
            class="pt-3 text-center font-inter text-xs text-white md:text-start md:text-base"
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
          class="md:bottom-18 h-full w-full scale-x-110 object-contain md:absolute md:-left-32 md:max-h-[94px] md:max-w-[240px]"
        />
        <div
          class="flex flex-col items-center px-[2rem] md:max-w-[488px] md:items-start"
        >
          <p
            class="pt-6 text-center font-inter text-xs text-white md:pt-0 md:text-start md:text-lg"
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
  </section>
</template>
