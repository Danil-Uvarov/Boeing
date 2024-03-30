<script setup lang="ts">

import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="">
    <div class="container flex flex-col items-center">
    <h2 class="font-bold text-4xl text-center pt-24">
      Where to Find $INVBOE?
    </h2>
    <p class="text-[10px] pt-3 text-center"> You can find Inverse Boeing ($INVBOE) all around the
      crypto community.</p>
    <ul class="flex flex-wrap gap-1 gap-y-4 pt-4 items-center justify-center">
      <li>
        <img src="/public/unicorn-logo.webp" alt="">
      </li>
      <li>
        <img src="/public/pancake-swap-logo.webp" alt="">
      </li>
      <li>
        <img src="/public/coingecko-logo.webp" alt="">
      </li>
      <li>
        <img src="/public/dexview-logo.webp" alt="">
      </li>
      <li>
        <img src="/public/dextools-logo.webp" alt="">
      </li>
    </ul>
      <BaseButton text="primary" bg="yellow" class="max-w-[88px] mt-6">Trade Now!</BaseButton>
    </div>
  </section>
</template>