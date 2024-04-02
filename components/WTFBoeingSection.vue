<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="relative z-10 w-full sm:pt-28">
    <img
      loading="lazy"
      src="/public/background-skye.webp"
      alt=""
      class="absolute inset-0 z-20 h-full w-full object-cover"
    />
    <div
      class="container relative z-30 flex w-full flex-col items-center pb-28 lg:flex-row lg:gap-20"
    >
      <div
        class="z-30 mt-10 flex flex-col rounded-[28px] bg-sky px-[2rem] py-4 sm:mt-0 sm:max-w-[980px] sm:items-start sm:p-4 xl:py-[30px]"
      >
        <h2
          class="text-2xl font-bold text-primary sm:text-start sm:text-[56px]"
        >
          WTF IS UP WITH
          <mark
            class="inline-block font-boeing text-2xl font-light text-yellow sm:mt-4 sm:text-5xl 2xl:mt-0 2xl:text-5xl"
            style="
              @media (min-width: 768px) {
                -webkit-text-stroke: 3px #0033a1;
              }
              -webkit-text-stroke: 1px #0033a1;
            "
          >
            BOEING
          </mark>
          <span> ?</span>
        </h2>
        <h3
          class="text-nowrap pt-1 font-inter text-xs font-black text-primary sm:text-base lg:pt-6"
        >
          Don’t risk your life fly
          <mark style="-webkit-text-stroke: 0.5px #0033a1" class="text-yellow">
            $INVBOE
          </mark>
          Instead.
        </h3>
        <p class="pt-3.5 font-inter text-[8px] sm:text-start sm:text-base">
          But it’s more than just a coin, it’s tokenized winning.
          <mark class="font-bold">$INVBOE</mark>
          is effortless domination of the sky, Inverse Boeing is nothing like
          Boeing we
          <mark class="font-bold">open our doors</mark>
          for
          <mark class="font-bold">profits</mark>
          not losses. The only whistleblowing our investors will be doing is
          blowing whistles of joy and happiness during take off. We Believe that
          we truly crafted something that is set to only take off. The sky is
          the limit see you up there with he stars!
        </p>
        <NuxtLink to="/buy" class="z-30 w-full">
          <BaseButton
            text="primary"
            class="z-30 mt-7 w-full max-w-[191px] text-nowrap font-bold lg:max-w-[219px]"
            bg="yellow"
            >MORE ABOUT $INVBOE
          </BaseButton>
        </NuxtLink>
      </div>
      <img
        src="/public/wtf-airplane.webp"
        loading="lazy"
        alt=""
        class="-mt-4 h-full max-h-[342px] w-full max-w-[342px] object-contain lg:max-w-[259px] xl:max-h-[342px] xl:max-w-[459px]"
      />
    </div>
  </section>
</template>
