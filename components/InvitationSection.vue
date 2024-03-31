<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="h-full w-full bg-blue">
    <div class="container relative">
      <div class="flex flex-col items-center pb-12 pt-9">
        <h2 class="font-boeing z-20 text-5xl text-yellow sm:text-8xl">
          $INVBOE
        </h2>
        <h3
          class="z-20 pt-9 text-center text-4xl font-medium text-white sm:max-w-[798px] sm:text-7xl"
        >
          Our Door is Wide Open for
          <mark class="z-20 text-yellow">$INVBOE</mark>
          Community.
        </h3>
        <div
          class="z-20 flex items-center justify-center gap-1.5 pt-3.5 sm:pt-7"
        >
          <BaseButton
            text="primary"
            bg="yellow"
            icon-position="left"
            name-icon="telegramBlue"
            class="px-[18px] sm:px-12 sm:py-3"
          >
            Telegram
          </BaseButton>
          <BaseButton
            text="primary"
            bg="yellow"
            icon-position="left"
            name-icon="twitterBlue"
            class="py- px-[18px] sm:px-12 sm:py-3"
            >Twitter
          </BaseButton>
        </div>
        <h2 class="font-boeing pt-14 text-5xl text-yellow sm:text-8xl">
          $INVBOE
        </h2>
      </div>
      <img
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -right-72 -top-12 z-10 -scale-x-100"
      />
      <img
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -bottom-0 -left-60 z-10"
      />
    </div>
  </section>
</template>
