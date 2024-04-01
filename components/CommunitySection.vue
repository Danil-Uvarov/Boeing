<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section>
    <div class="container flex flex-col items-center">
      <h2 class="pt-24 text-center text-4xl font-bold sm:text-5xl">
        Where to Find $INVBOE?
      </h2>
      <p class="pt-3 text-center sm:mt-6 sm:max-w-[429px] sm:text-lg">
        You can find Inverse Boeing ($INVBOE) all around the crypto community.
      </p>
      <ul
        class="flex flex-wrap items-center justify-center gap-6 sm:gap-11 md:pt-12"
      >
        <li class="max-w-[171px]">
          <img src="/public/unicorn-logo.webp" alt="" class="object-contain" />
        </li>
        <li class="max-w-[171px]">
          <img
            src="/public/pancake-swap-logo.webp"
            alt=""
            class="object-contain"
          />
        </li>
        <li class="max-w-[171px]">
          <img
            src="/public/coingecko-logo.webp"
            alt=""
            class="object-contain"
          />
        </li>
        <li class="max-w-[171px]">
          <img src="/public/dexview-logo.webp" alt="" class="object-contain" />
        </li>
        <li class="max-w-[171px]">
          <img src="/public/dextools-logo.webp" alt="" class="object-contain" />
        </li>
      </ul>
      <BaseButton
        text="primary"
        bg="yellow"
        class="mt-10 max-w-[88px] sm:mt-12 sm:max-w-[130px]"
        >Trade Now!</BaseButton
      >
    </div>
  </section>
</template>
