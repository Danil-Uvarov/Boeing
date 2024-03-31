<script setup lang="ts">
import BoeingTitle from "assets/icons/BoeingTitle.vue";
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="relative w-full sm:pt-28">
    <img
      src="/public/background-skye.webp"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div
      class="container relative flex w-full flex-col items-center pb-28 sm:flex-row-reverse sm:gap-20"
    >
      <img
        src="/public/wtf-airplane.webp"
        loading="lazy"
        alt=""
        class="-mt-4 h-full max-h-[184px] w-full max-w-[246px] object-contain sm:max-h-[342px] sm:max-w-[459px]"
      />
      <div
        class="-mt-5 flex flex-col items-center rounded-[28px] bg-sky px-[2rem] py-[30px] sm:mt-0 sm:max-w-[980px] sm:items-start sm:p-4"
      >
        <h2
          class="text-center text-4xl font-bold text-primary sm:text-start sm:text-[56px]"
        >
          WTF IS UP WITH
          <mark
            class="font-boeing font-bold text-yellow"
            style="-webkit-text-stroke: 4px #0033a1"
          >
            BOEING
          </mark>
          <span> ?</span>
        </h2>
        <h3
          class="text-nowrap pt-4 font-inter text-xs font-black text-primary sm:pt-6 sm:text-base"
        >
          Don’t risk your life fly
          <mark style="-webkit-text-stroke: 0.5px #0033a1" class="text-yellow">
            $INVBOE
          </mark>
          Instead.
        </h3>
        <p
          class="pt-3.5 text-center font-inter text-[8px] sm:text-start sm:text-base"
        >
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
        <BaseButton
          text="primary"
          class="mt-7 max-w-[145px] text-nowrap text-xs font-bold sm:max-w-[219px]"
          bg="yellow"
          >MORE ABOUT $INVBOE
        </BaseButton>
      </div>
      <img
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -bottom-14 -left-[190px] z-10 h-[268px] w-[406px]"
      />
    </div>
  </section>
</template>
