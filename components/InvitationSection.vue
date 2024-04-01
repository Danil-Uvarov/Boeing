<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="-mt-1 h-full w-full bg-blue">
    <div class="container relative z-30">
      <div class="z-30 flex flex-col items-center pb-12 pt-10 lg:pt-14">
        <h2 class="z-20 font-boeing text-5xl text-yellow lg:text-8xl">
          $INVBOE
        </h2>
        <h3
          class="z-20 pt-9 text-center text-4xl font-medium text-white sm:max-w-[798px] lg:text-7xl"
        >
          Our Door is Wide Open for
          <mark class="z-20 text-yellow">$INVBOE</mark>
          Community.
        </h3>
        <div
          class="z-20 flex items-center justify-center gap-1.5 pt-3.5 sm:pt-7"
        >
          <NuxtLink to="https://t.me/inverseboeing">
            <BaseButton
              text="primary"
              bg="yellow"
              icon-position="left"
              name-icon="telegramBlue"
              class="px-[18px] lg:px-12 lg:py-3"
            >
              Telegram
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="https://twitter.com/inverseboeing">
            <BaseButton
              text="primary"
              bg="yellow"
              icon-position="left"
              name-icon="twitterBlue"
              class="py- px-[18px] lg:px-12 lg:py-3"
              >Twitter
            </BaseButton>
          </NuxtLink>
        </div>
        <h2 class="pt-14 font-boeing text-5xl text-yellow lg:text-8xl">
          $INVBOE
        </h2>
      </div>
      <img
        loading="lazy"
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -right-48 -top-12 z-10 hidden -scale-x-100 lg:block"
      />
      <img
        loading="lazy"
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -bottom-0 -right-96 z-10 hidden lg:block"
      />
      <img
        loading="lazy"
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -left-60 -top-20 z-10 hidden lg:block"
      />
    </div>
  </section>
</template>
