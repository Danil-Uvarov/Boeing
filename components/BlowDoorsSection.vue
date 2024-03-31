<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="w-full bg-primary pb-[101px] xl:pt-28">
    <div class="container flex flex-col xl:grid xl:grid-cols-2 xl:gap-20">
      <img
        src="/public/blow-doors-airplane.webp"
        loading="lazy"
        alt=""
        class="top-11 h-full max-h-[640px] w-full max-w-[720px] xl:top-0"
      />
      <div class="flex w-full flex-col xl:max-w-[720px]">
        <h2
          class="text-center text-4xl font-bold text-yellow xl:text-start xl:text-8xl"
        >
          Blow Your Doors Wide Open to $INVBOE
        </h2>
        <p
          class="xl:pt-26 pt-[18px] text-center text-xs font-medium text-white xl:text-start xl:text-2xl"
        >
          Want to take off? Well Inverse Boeing Coin is here to help. Inverse
          Boeing is a coin based on base. We make traveling to space easy, you
          just have to remember one thing $INVBOE to Mars.
        </p>
        <div class="flex w-full gap-2.5 pt-3.5 xl:pt-5">
          <BaseButton class="px-3.5 xl:max-w-[99px]" text="primary" bg="white"
            >TRADE</BaseButton
          >
          <BaseButton
            class="px-3.5 xl:max-w-[148px]"
            text="white"
            bg="none"
            border
            name-icon="telegram"
            icon-position="left"
            >Telegram
          </BaseButton>
          <BaseButton
            class="px-3.5 xl:max-w-[148px]"
            text="white"
            bg="none"
            border
            name-icon="twitter"
            icon-position="left"
            >Twitter
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
